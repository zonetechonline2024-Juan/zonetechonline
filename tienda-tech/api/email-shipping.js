'use strict';
const { sendEmail }     = require('./_send-email');
const { orderShipped }  = require('./_email-templates');

// Endpoint llamado desde el panel de admin cuando marcas un pedido como enviado
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Protección básica con clave admin
  const adminKey = process.env.ADMIN_API_KEY;
  if (adminKey && req.headers['x-admin-key'] !== adminKey) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const { name, email, orderNo, trackingNumber, carrier, trackingUrl, items, estimatedDelivery } = req.body || {};
  if (!email || !orderNo) return res.status(400).json({ error: 'email y orderNo requeridos' });

  try {
    const { subject, html } = orderShipped({ name, email, orderNo, trackingNumber, carrier, trackingUrl, items, estimatedDelivery });
    const result = await sendEmail({ to: email, subject, html });
    res.status(200).json({ ok: true, id: result.id });
  } catch (err) {
    console.error('[email-shipping]', err.message);
    res.status(500).json({ error: err.message });
  }
};
