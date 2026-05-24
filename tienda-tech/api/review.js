const REPO = 'zonetechonline2024-Juan/zonetechonline';
const FILE = 'tienda-tech/data/reviews.json';
const GH_API = `https://api.github.com/repos/${REPO}/contents/${FILE}`;

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

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
      name: String(name).trim().slice(0, 60),
      product: String(product || '').trim().slice(0, 80) || null,
      productBrand: String(productBrand || '').trim().slice(0, 60) || null,
      rating: ratingNum,
      text: String(text).trim().slice(0, 600),
      date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    const token = process.env.GITHUB_PAT;
    if (!token) return res.status(500).json({ error: 'Configuración incompleta del servidor.' });

    const ghHeaders = {
      Authorization: `token ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
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
