'use strict';
const { db } = require('./_db');

function authCheck(req) {
  const key = process.env.ADMIN_API_KEY;
  return !key || req.headers['x-admin-key'] === key;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (!authCheck(req)) return res.status(401).json({ error: 'No autorizado' });

  try {
    // Pedidos
    const orders = await db('orders', {
      select: 'id,total,status,created_at,customer_email',
      order:  'created_at.desc',
      limit:  500,
    });

    const now   = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const week  = new Date(today); week.setDate(week.getDate() - 7);
    const month = new Date(today); month.setDate(1);

    const paid = (orders || []).filter(o => o.status !== 'cancelled');

    const stats = {
      total_orders:    paid.length,
      orders_today:    paid.filter(o => new Date(o.created_at) >= today).length,
      orders_week:     paid.filter(o => new Date(o.created_at) >= week).length,
      orders_month:    paid.filter(o => new Date(o.created_at) >= month).length,
      revenue_total:   paid.reduce((s, o) => s + parseFloat(o.total || 0), 0),
      revenue_today:   paid.filter(o => new Date(o.created_at) >= today).reduce((s, o) => s + parseFloat(o.total || 0), 0),
      revenue_week:    paid.filter(o => new Date(o.created_at) >= week).reduce((s, o) => s + parseFloat(o.total || 0), 0),
      revenue_month:   paid.filter(o => new Date(o.created_at) >= month).reduce((s, o) => s + parseFloat(o.total || 0), 0),
      pending:         (orders || []).filter(o => o.status === 'pending' || o.status === 'processing').length,
      shipped:         (orders || []).filter(o => o.status === 'shipped').length,
      avg_order:       paid.length ? paid.reduce((s, o) => s + parseFloat(o.total || 0), 0) / paid.length : 0,
    };

    // Clientes
    const customers = await db('customers', { select: 'id,created_at', limit: 500 });
    stats.total_customers   = (customers || []).length;
    stats.customers_today   = (customers || []).filter(c => new Date(c.created_at) >= today).length;
    stats.customers_month   = (customers || []).filter(c => new Date(c.created_at) >= month).length;

    // Stock bajo
    const lowStock = await db('products', {
      select: 'id,name,brand,stock,low_stock_threshold',
      filters: ['active=eq.true'],
      order: 'stock.asc',
      limit: 10,
    });
    stats.low_stock = (lowStock || []).filter(p => p.stock <= p.low_stock_threshold);
    stats.low_stock_count = stats.low_stock.length;

    // Últimos 7 días para gráfico
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today); d.setDate(d.getDate() - i);
      const next = new Date(d); next.setDate(next.getDate() + 1);
      const dayOrders = paid.filter(o => {
        const c = new Date(o.created_at);
        return c >= d && c < next;
      });
      days.push({
        label:   d.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric' }),
        orders:  dayOrders.length,
        revenue: dayOrders.reduce((s, o) => s + parseFloat(o.total || 0), 0),
      });
    }
    stats.chart_days = days;

    res.status(200).json({ ok: true, stats });
  } catch (err) {
    console.error('[admin-stats]', err.message);
    res.status(500).json({ error: err.message });
  }
};
