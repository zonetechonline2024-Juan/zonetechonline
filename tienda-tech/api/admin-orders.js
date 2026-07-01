'use strict';
const { db }           = require('./_db');
const { sendEmail }    = require('./_send-email');
const { orderShipped, orderDelivered, orderCancelled } = require('./_email-templates');

function authCheck(req) {
  const key = process.env.ADMIN_API_KEY;
  return !key || req.headers['x-admin-key'] === key;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (!authCheck(req)) return res.status(401).json({ error: 'No autorizado' });

  const { id } = req.query || {};

  // GET — listar pedidos con sus items
  if (req.method === 'GET') {
    try {
      const limit  = Math.min(parseInt(req.query?.limit) || 50, 200);
      const status = req.query?.status;
      const search = req.query?.search;

      const filters = [];
      if (status && status !== 'all') filters.push(`status=eq.${status}`);
      if (search) filters.push(`or=(customer_email.ilike.*${search}*,customer_name.ilike.*${search}*,order_no.ilike.*${search}*)`);

      const orders = await db('orders', {
        select: '*',
        order:  'created_at.desc',
        limit,
        filters,
      });

      // Cargar items de cada pedido
      if (orders && orders.length) {
        const ids = orders.map(o => o.id);
        const items = await db('order_items', {
          select: '*',
          filters: [`order_id=in.(${ids.join(',')})`],
        });
        const itemMap = {};
        (items || []).forEach(i => {
          if (!itemMap[i.order_id]) itemMap[i.order_id] = [];
          itemMap[i.order_id].push(i);
        });
        orders.forEach(o => { o.items = itemMap[o.id] || []; });
      }

      res.status(200).json({ ok: true, orders: orders || [] });
    } catch (err) {
      console.error('[admin-orders GET]', err.message);
      res.status(500).json({ error: err.message });
    }
    return;
  }

  // PATCH — actualizar estado/tracking de un pedido
  if (req.method === 'PATCH') {
    if (!id) return res.status(400).json({ error: 'id requerido' });
    try {
      const { status, tracking_number, carrier, tracking_url, notes } = req.body || {};
      const updateBody = {};
      if (status)          updateBody.status          = status;
      if (tracking_number !== undefined) updateBody.tracking_number = tracking_number;
      if (carrier !== undefined)         updateBody.carrier         = carrier;
      if (tracking_url !== undefined)    updateBody.tracking_url    = tracking_url;
      if (notes !== undefined)           updateBody.notes           = notes;
      if (status === 'shipped')          updateBody.shipped_at      = new Date().toISOString();
      if (status === 'delivered')        updateBody.delivered_at    = new Date().toISOString();

      const [updated] = await db('orders', {
        method:  'PATCH',
        params:  `?id=eq.${id}`,
        body:    updateBody,
      });

      // Enviar email automático según nuevo estado
      if (updated && updated.customer_email) {
        if (status === 'shipped' && !updated.ship_email_sent) {
          const { subject, html } = orderShipped({
            email:             updated.customer_email,
            name:              updated.customer_name,
            orderNo:           '#' + updated.order_no,
            trackingNumber:    tracking_number,
            carrier,
            trackingUrl:       tracking_url,
            estimatedDelivery: '5–8 días hábiles',
          });
          await sendEmail({ to: updated.customer_email, subject, html });
          await db('orders', { method: 'PATCH', params: `?id=eq.${id}`, body: { ship_email_sent: true } });
        }
        if (status === 'delivered') {
          const { subject, html } = orderDelivered({
            email:   updated.customer_email,
            name:    updated.customer_name,
            orderNo: '#' + updated.order_no,
          });
          await sendEmail({ to: updated.customer_email, subject, html });
        }
        if (status === 'cancelled') {
          const { subject, html } = orderCancelled({
            email:   updated.customer_email,
            name:    updated.customer_name,
            orderNo: '#' + updated.order_no,
            total:   updated.total,
            reason:  req.body.cancel_reason || null,
          });
          await sendEmail({ to: updated.customer_email, subject, html });
        }
      }

      res.status(200).json({ ok: true, order: updated });
    } catch (err) {
      console.error('[admin-orders PATCH]', err.message);
      res.status(500).json({ error: err.message });
    }
    return;
  }

  res.status(405).json({ error: 'Method not allowed' });
};
