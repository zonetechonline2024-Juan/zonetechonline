'use strict';

function checkAuth(req) {
  const key = process.env.ADMIN_API_KEY;
  if (!key) return true;
  return req.headers['x-admin-key'] === key;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!checkAuth(req)) return res.status(401).json({ ok: false, error: 'No autorizado' });
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Método no permitido' });

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({ ok: false, error: 'Variables de Supabase no configuradas' });
  }

  try {
    const { products } = req.body || {};
    if (!Array.isArray(products) || !products.length) {
      return res.status(400).json({ ok: false, error: 'Se requiere array de productos' });
    }

    const rows = products.map(p => ({
      id:          String(p.id || ''),
      name:        p.name || '',
      brand:       p.brand || '',
      category:    p.category || '',
      price:       parseFloat(p.price) || 0,
      stock:       parseInt(p.stock != null ? p.stock : 10),
      low_stock_threshold: parseInt(p.low_stock_threshold || 5),
      sku:         p.sku || String(p.id || ''),
      image:       p.image || p.image_url || '',
      active:      true,
    }));

    const r = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
      method: 'POST',
      headers: {
        'apikey':        SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type':  'application/json',
        'Prefer':        'resolution=merge-duplicates,return=representation',
      },
      body: JSON.stringify(rows),
    });

    const data = await r.json();
    if (!r.ok) return res.status(500).json({ ok: false, error: JSON.stringify(data) });

    return res.status(200).json({ ok: true, imported: Array.isArray(data) ? data.length : rows.length });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
};
