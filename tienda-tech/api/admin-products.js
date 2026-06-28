'use strict';
const { db } = require('./_db');

function authCheck(req) {
  const key = process.env.ADMIN_API_KEY;
  return !key || req.headers['x-admin-key'] === key;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (!authCheck(req)) return res.status(401).json({ error: 'No autorizado' });

  const { id } = req.query || {};

  if (req.method === 'GET') {
    try {
      const search   = req.query?.search;
      const category = req.query?.category;
      const lowStock = req.query?.low_stock === 'true';
      const filters  = ['active=eq.true'];

      if (category && category !== 'all') filters.push(`category=eq.${encodeURIComponent(category)}`);
      if (search) filters.push(`or=(name.ilike.*${search}*,brand.ilike.*${search}*,sku.ilike.*${search}*)`);

      let products = await db('products', {
        select:  '*',
        order:   'name.asc',
        limit:   300,
        filters,
      });

      if (lowStock) products = (products || []).filter(p => p.stock <= p.low_stock_threshold);
      res.status(200).json({ ok: true, products: products || [] });
    } catch (err) {
      console.error('[admin-products GET]', err.message);
      res.status(500).json({ error: err.message });
    }
    return;
  }

  // POST — crear / importar producto
  if (req.method === 'POST') {
    try {
      const body = req.body || {};
      const [product] = await db('products', { method: 'POST', body });
      res.status(201).json({ ok: true, product });
    } catch (err) {
      console.error('[admin-products POST]', err.message);
      res.status(500).json({ error: err.message });
    }
    return;
  }

  // PATCH — actualizar stock / precio / datos
  if (req.method === 'PATCH') {
    if (!id) return res.status(400).json({ error: 'id requerido' });
    try {
      const allowed = ['stock', 'price', 'low_stock_threshold', 'active', 'sku', 'name', 'brand', 'category', 'image'];
      const body    = {};
      const raw     = req.body || {};
      allowed.forEach(k => { if (raw[k] !== undefined) body[k] = raw[k]; });

      const [product] = await db('products', {
        method: 'PATCH',
        params: `?id=eq.${encodeURIComponent(id)}`,
        body,
      });
      res.status(200).json({ ok: true, product });
    } catch (err) {
      console.error('[admin-products PATCH]', err.message);
      res.status(500).json({ error: err.message });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
};
