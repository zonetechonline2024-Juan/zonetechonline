'use strict';
const { db } = require('./_db');

function authCheck(req) {
  const key = process.env.ADMIN_API_KEY;
  return !key || req.headers['x-admin-key'] === key;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (!authCheck(req)) return res.status(401).json({ error: 'No autorizado' });

  if (req.method === 'GET') {
    try {
      const search  = req.query?.search;
      const filters = [];
      if (search) filters.push(`or=(email.ilike.*${search}*,name.ilike.*${search}*)`);

      const customers = await db('customers', {
        select:  '*',
        order:   'total_spent.desc',
        limit:   200,
        filters,
      });

      // Cargar últimos pedidos de cada cliente
      if (customers && customers.length) {
        const emails = customers.map(c => `'${c.email}'`).join(',');
        const orders = await db('orders', {
          select:  'id,order_no,total,status,created_at,customer_email',
          filters: [`customer_email=in.(${emails})`, 'status=neq.cancelled'],
          order:   'created_at.desc',
          limit:   500,
        });
        const orderMap = {};
        (orders || []).forEach(o => {
          if (!orderMap[o.customer_email]) orderMap[o.customer_email] = [];
          if (orderMap[o.customer_email].length < 3) orderMap[o.customer_email].push(o);
        });
        customers.forEach(c => { c.recent_orders = orderMap[c.email] || []; });
      }

      res.status(200).json({ ok: true, customers: customers || [] });
    } catch (err) {
      console.error('[admin-customers]', err.message);
      res.status(500).json({ error: err.message });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
};
