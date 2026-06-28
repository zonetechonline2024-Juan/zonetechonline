'use strict';
const crypto = require('crypto');
const { db }        = require('./_db');
const { sendEmail } = require('./_send-email');
const { orderConfirm } = require('./_email-templates');

function verifyStripeSignature(rawBody, sigHeader, secret) {
  const parts  = sigHeader.split(',');
  const ts     = parts.find(p => p.startsWith('t=')).slice(2);
  const sig    = parts.find(p => p.startsWith('v1=')).slice(3);
  const payload = `${ts}.${rawBody}`;
  const expected = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'));
}

function generateOrderNo() {
  const y   = new Date().getFullYear();
  const rnd = Math.floor(10000 + Math.random() * 90000);
  return `ZT-${y}-${rnd}`;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  const sig    = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  // Leer raw body
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const rawBody = Buffer.concat(chunks).toString('utf8');

  // Verificar firma si hay secret configurado
  if (secret && sig) {
    try {
      if (!verifyStripeSignature(rawBody, sig, secret)) {
        return res.status(400).json({ error: 'Firma inválida' });
      }
    } catch (e) {
      return res.status(400).json({ error: 'Error verificando firma' });
    }
  }

  let event;
  try { event = JSON.parse(rawBody); } catch (e) {
    return res.status(400).json({ error: 'JSON inválido' });
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true, skipped: true });
  }

  const session = event.data.object;
  if (session.payment_status !== 'paid') return res.status(200).json({ received: true });

  try {
    const orderNo    = generateOrderNo();
    const email      = session.customer_details?.email || '';
    const name       = session.customer_details?.name  || '';
    const addr       = session.customer_details?.address
      ? [session.customer_details.address.line1, session.customer_details.address.city, session.customer_details.address.country].filter(Boolean).join(', ')
      : '';
    const total      = (session.amount_total || 0) / 100;
    const payMethod  = (session.payment_method_types || ['card'])[0];

    // Guardar pedido
    const [order] = await db('orders', {
      method: 'POST',
      body: {
        order_no: orderNo,
        stripe_session_id: session.id,
        customer_email: email,
        customer_name:  name,
        customer_address: addr,
        total,
        status: 'processing',
        payment_method: payMethod,
        payment_status: 'paid',
      },
    });

    // Guardar/actualizar cliente
    const existing = await db('customers', { filters: [`email=eq.${encodeURIComponent(email)}`] });
    if (existing && existing.length > 0) {
      await db('customers', {
        method: 'PATCH',
        params: `?email=eq.${encodeURIComponent(email)}`,
        body: {
          total_orders: existing[0].total_orders + 1,
          total_spent:  parseFloat(existing[0].total_spent) + total,
          name: name || existing[0].name,
        },
      });
    } else {
      await db('customers', { method: 'POST', body: { email, name, total_orders: 1, total_spent: total } });
    }

    // Email de confirmación
    if (email && !order.email_sent) {
      const { subject, html } = orderConfirm({
        name, email,
        orderNo: '#' + orderNo,
        items: [],
        total,
        address: addr,
        paymentMethod: payMethod,
        orderDate: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
      });
      await sendEmail({ to: email, subject, html });
      await db('orders', { method: 'PATCH', params: `?id=eq.${order.id}`, body: { email_sent: true } });
    }

    res.status(200).json({ received: true, orderNo });
  } catch (err) {
    console.error('[stripe-webhook]', err.message);
    res.status(500).json({ error: err.message });
  }
};
