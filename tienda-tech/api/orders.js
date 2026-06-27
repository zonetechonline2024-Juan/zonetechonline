'use strict';
// Devuelve los últimos pedidos desde Stripe para el panel de administración
// Solo accesible con ADMIN_API_KEY en cabecera X-Admin-Key

const https = require('https');

function stripeGet(path) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: 'api.stripe.com',
      path,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        'Content-Type':  'application/x-www-form-urlencoded',
      },
    };
    const req = https.request(opts, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); }
        catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const adminKey = process.env.ADMIN_API_KEY;
  if (adminKey && req.headers['x-admin-key'] !== adminKey) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  try {
    const limit = Math.min(parseInt(req.query && req.query.limit) || 25, 100);
    const data  = await stripeGet(`/v1/checkout/sessions?limit=${limit}&expand[]=data.line_items`);

    const orders = (data.data || []).map(session => ({
      id:            session.id,
      orderNo:       session.metadata && session.metadata.order_no,
      created:       session.created,
      status:        session.payment_status,
      amountTotal:   (session.amount_total || 0) / 100,
      currency:      (session.currency || 'eur').toUpperCase(),
      customerEmail: session.customer_details && session.customer_details.email,
      customerName:  session.customer_details && session.customer_details.name,
      address:       session.customer_details && session.customer_details.address
        ? [
            session.customer_details.address.line1,
            session.customer_details.address.city,
            session.customer_details.address.country,
          ].filter(Boolean).join(', ')
        : null,
      items: (session.line_items && session.line_items.data || []).map(li => ({
        name:  li.description,
        qty:   li.quantity,
        price: (li.price && li.price.unit_amount || 0) / 100,
      })),
      paymentMethod: session.payment_method_types && session.payment_method_types[0],
    }));

    res.status(200).json({ ok: true, orders });
  } catch (err) {
    console.error('[orders]', err.message);
    res.status(500).json({ error: err.message });
  }
};
