'use strict';
const { sendEmail }    = require('./_send-email');
const { orderConfirm } = require('./_email-templates');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, orderNo, items, total, address, paymentMethod, orderDate } = req.body || {};
  if (!email || !orderNo) return res.status(400).json({ error: 'email y orderNo requeridos' });

  try {
    const { subject, html } = orderConfirm({ name, email, orderNo, items: items || [], total: total || 0, address, paymentMethod, orderDate });
    const result = await sendEmail({ to: email, subject, html });
    res.status(200).json({ ok: true, id: result.id });
  } catch (err) {
    console.error('[email-order-confirm]', err.message);
    res.status(500).json({ error: err.message });
  }
};
