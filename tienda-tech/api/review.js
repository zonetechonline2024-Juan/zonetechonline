const REPO = 'zonetechonline2024-Juan/zonetechonline';
const FILE = 'tienda-tech/data/reviews.json';
const SUBS_FILE = 'tienda-tech/data/subscribers.json';
const GH_API = `https://api.github.com/repos/${REPO}/contents/${FILE}`;
const GH_SUBS_API = `https://api.github.com/repos/${REPO}/contents/${SUBS_FILE}`;
const { rateLimit } = require('./_ratelimit');
const reviewRL      = rateLimit('review');
const newsletterRL  = rateLimit('newsletter');

function stripHtml(str) {
  return String(str || '').replace(/<[^>]*>/g, '').trim();
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const token = process.env.GITHUB_PAT;
  if (!token) return res.status(500).json({ error: 'Configuración incompleta del servidor.' });
  const ghHeaders = {
    Authorization: `token ${token}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };

  // ── Newsletter subscription ──────────────────────────────────────────────
  if ((req.body || {}).action === 'newsletter') {
    if (!newsletterRL(req, res)) return;
    try {
      const email = String(req.body.email || '').trim().toLowerCase();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'Email inválido.' });
      }
      const getRes = await fetch(GH_SUBS_API, { headers: ghHeaders });
      let existing = [], sha = null;
      if (getRes.ok) {
        const fd = await getRes.json();
        sha = fd.sha;
        existing = JSON.parse(Buffer.from(fd.content, 'base64').toString('utf8'));
      }
      if (existing.find(function(s) { return s.email === email; })) {
        return res.status(200).json({ success: true, duplicate: true });
      }
      existing.push({ email, date: new Date().toISOString() });
      const putBody = { message: 'newsletter: ' + email, content: Buffer.from(JSON.stringify(existing, null, 2)).toString('base64'), branch: 'main' };
      if (sha) putBody.sha = sha;
      const putRes = await fetch(GH_SUBS_API, { method: 'PUT', headers: ghHeaders, body: JSON.stringify(putBody) });
      if (!putRes.ok) throw new Error('GitHub PUT ' + putRes.status);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('[newsletter]', err.message);
      return res.status(500).json({ error: 'Error al procesar la suscripción.' });
    }
  }

  if (!reviewRL(req, res)) return;
  try {
    const { name, product, productBrand, rating, text } = req.body || {};

    if (!name || !text || !rating) {
      return res.status(400).json({ error: 'Nombre, puntuación y reseña son obligatorios.' });
    }
    if (String(text).trim().length < 15) {
      return res.status(400).json({ error: 'La reseña debe tener al menos 15 caracteres.' });
    }
    const ratingNum = parseInt(rating, 10);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return res.status(400).json({ error: 'Puntuación inválida (1-5).' });
    }

    const review = {
      id: Date.now().toString(),
      name: stripHtml(name).slice(0, 60),
      product: stripHtml(product).slice(0, 80) || null,
      productBrand: stripHtml(productBrand).slice(0, 60) || null,
      rating: ratingNum,
      text: stripHtml(text).slice(0, 600),
      date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    const getRes = await fetch(GH_API, { headers: ghHeaders });
    if (!getRes.ok) throw new Error('GitHub GET ' + getRes.status);

    const fileData = await getRes.json();
    const existing = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf8'));
    existing.unshift(review);

    const putRes = await fetch(GH_API, {
      method: 'PUT',
      headers: ghHeaders,
      body: JSON.stringify({
        message: `review: ${review.name} (${review.rating}★)`,
        content: Buffer.from(JSON.stringify(existing, null, 2)).toString('base64'),
        sha: fileData.sha
      })
    });

    if (!putRes.ok) {
      const err = await putRes.json().catch(() => ({}));
      throw new Error('GitHub PUT ' + putRes.status + ' ' + JSON.stringify(err));
    }

    return res.status(200).json({ success: true, review });

  } catch (err) {
    console.error('[review]', err.message);
    return res.status(500).json({ error: 'Error al publicar la reseña. Inténtalo más tarde.' });
  }
};
