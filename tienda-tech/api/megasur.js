'use strict';
const { placeMegasurOrder, syncMegasurFeed } = require('./_megasur');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).end();

  const adminKey = process.env.ADMIN_API_KEY;
  if (adminKey && req.headers['x-admin-key'] !== adminKey) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const { action } = req.body || {};

  // Colocar pedido manualmente (útil para reintentos desde el panel admin)
  if (action === 'order') {
    const { orderNo, items, shipping } = req.body;
    if (!orderNo || !Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: 'orderNo e items[] requeridos' });
    }
    try {
      const result = await placeMegasurOrder({ orderNo, items, shipping });
      return res.status(200).json({ ok: true, ...result });
    } catch (err) {
      console.error('[megasur/order]', err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  // Sincronizar catálogo / stock desde el feed de Megasur
  if (action === 'sync') {
    try {
      const products = await syncMegasurFeed();
      return res.status(200).json({ ok: true, count: products.length, sample: products.slice(0, 5) });
    } catch (err) {
      console.error('[megasur/sync]', err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(400).json({ error: 'action requerida: order | sync' });
};
