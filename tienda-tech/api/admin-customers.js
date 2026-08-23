'use strict';
const { db }        = require('./_db');
const { withAdmin } = require('./_middleware');

module.exports = withAdmin(async (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const search  = req.query?.search;
  const filters = [];
  if (search) filters.push(`or=(email.ilike.*${search}*,name.ilike.*${search}*)`);

  const customers = await db('customers', {
    select: '*', order: 'total_spent.desc', limit: 200, filters,
  });

  if (customers && customers.length) {
    const emails  = customers.map(c => c.email.replace(/[(),]/g, '')).join(',');
    const orders  = await db('orders', {
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
}, 'GET, OPTIONS');
