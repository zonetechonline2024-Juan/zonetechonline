'use strict';
const { db }        = require('./_db');
const { withAdmin } = require('./_middleware');

module.exports = withAdmin(async (req, res) => {
  const { id, resource } = req.query || {};

  // ── Discount codes CRUD ──
  if (resource === 'discounts') {
    if (req.method === 'GET') {
      const codes = await db('discount_codes', { select: '*', order: 'created_at.desc', limit: 100 });
      return res.status(200).json({ ok: true, codes: codes || [] });
    }
    if (req.method === 'POST') {
      const body = req.body || {};
      const [code] = await db('discount_codes', { method: 'POST', body });
      return res.status(201).json({ ok: true, code });
    }
    if (req.method === 'PATCH') {
      if (!id) return res.status(400).json({ error: 'id requerido' });
      const [code] = await db('discount_codes', { method: 'PATCH', params: `?id=eq.${id}`, body: req.body || {} });
      return res.status(200).json({ ok: true, code });
    }
    if (req.method === 'DELETE') {
      if (!id) return res.status(400).json({ error: 'id requerido' });
      await db('discount_codes', { method: 'DELETE', params: `?id=eq.${id}` });
      return res.status(200).json({ ok: true });
    }
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (req.method === 'GET') {
    const search   = req.query?.search;
    const category = req.query?.category;
    const lowStock = req.query?.low_stock === 'true';
    const filters  = ['active=eq.true'];

    if (category && category !== 'all') filters.push(`category=eq.${encodeURIComponent(category)}`);
    if (search) filters.push(`or=(name.ilike.*${search}*,brand.ilike.*${search}*,sku.ilike.*${search}*)`);

    let products = await db('products', {
      select: '*', order: 'name.asc', limit: 300, filters,
    });

    if (lowStock) products = (products || []).filter(p => p.stock <= p.low_stock_threshold);
    return res.status(200).json({ ok: true, products: products || [] });
  }

  if (req.method === 'POST') {
    const [product] = await db('products', { method: 'POST', body: req.body || {} });
    return res.status(201).json({ ok: true, product });
  }

  if (req.method === 'PATCH') {
    if (!id) return res.status(400).json({ error: 'id requerido' });

    const allowed = ['stock', 'price', 'low_stock_threshold', 'active', 'sku', 'name', 'brand', 'category', 'image'];
    const body    = {};
    const raw     = req.body || {};
    allowed.forEach(k => { if (raw[k] !== undefined) body[k] = raw[k]; });

    const [product] = await db('products', {
      method: 'PATCH', params: `?id=eq.${encodeURIComponent(id)}`, body,
    });
    return res.status(200).json({ ok: true, product });
  }

  res.status(405).json({ error: 'Method not allowed' });
}, 'GET, POST, PATCH, DELETE, OPTIONS');
