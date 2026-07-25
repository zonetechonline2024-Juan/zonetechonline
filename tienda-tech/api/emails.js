'use strict';
const { sendEmail }                                          = require('./_send-email');
const { welcome, orderConfirm, orderShipped, contactAutoReply } = require('./_email-templates');
const { rateLimit } = require('./_ratelimit');
const contactRL     = rateLimit('contact');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Admin-Key');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const type = req.query.type || req.body?.type;

  if (type === 'welcome') {
    const { name, email } = req.body || {};
    if (!email) return res.status(400).json({ error: 'email requerido' });
    try {
      const { subject, html } = welcome({ name, email });
      const result = await sendEmail({ to: email, subject, html });
      return res.status(200).json({ ok: true, id: result.id });
    } catch (err) {
      console.error('[emails:welcome]', err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  if (type === 'order-confirm') {
    const { name, email, orderNo, items, total, address, paymentMethod, orderDate } = req.body || {};
    if (!email || !orderNo) return res.status(400).json({ error: 'email y orderNo requeridos' });
    try {
      const { subject, html } = orderConfirm({ name, email, orderNo, items: items || [], total: total || 0, address, paymentMethod, orderDate });
      const result = await sendEmail({ to: email, subject, html });
      return res.status(200).json({ ok: true, id: result.id });
    } catch (err) {
      console.error('[emails:order-confirm]', err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  if (type === 'shipping') {
    const adminKey = process.env.ADMIN_API_KEY;
    if (adminKey && req.headers['x-admin-key'] !== adminKey) {
      return res.status(401).json({ error: 'No autorizado' });
    }
    const { name, email, orderNo, trackingNumber, carrier, trackingUrl, items, estimatedDelivery } = req.body || {};
    if (!email || !orderNo) return res.status(400).json({ error: 'email y orderNo requeridos' });
    try {
      const { subject, html } = orderShipped({ name, email, orderNo, trackingNumber, carrier, trackingUrl, items, estimatedDelivery });
      const result = await sendEmail({ to: email, subject, html });
      return res.status(200).json({ ok: true, id: result.id });
    } catch (err) {
      console.error('[emails:shipping]', err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  if (type === 'contact') {
    if (!contactRL(req, res)) return;
    const { name, email, subject, message } = req.body || {};
    if (!email || !message) return res.status(400).json({ error: 'email y message requeridos' });
    const safeSubject = subject ? String(subject).slice(0, 200) : 'Consulta desde ZoneTechOnline';
    const safeName    = String(name || email).slice(0, 100);
    try {
      const reply = contactAutoReply({ name: safeName, email, subject: safeSubject, message });
      await sendEmail({ to: email, subject: reply.subject, html: reply.html });
      const teamHtml = `
        <div style="font-family:Arial,sans-serif;max-width:600px;padding:24px;">
          <h2 style="color:#6366f1;margin:0 0 16px;">📩 Nuevo mensaje de contacto</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#666;width:100px;"><strong>Nombre:</strong></td><td style="padding:8px 0;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Email:</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Asunto:</strong></td><td style="padding:8px 0;">${safeSubject}</td></tr>
          </table>
          <hr style="margin:16px 0;border:none;border-top:1px solid #eee;">
          <div style="background:#f9f9f9;border-left:3px solid #6366f1;padding:14px 18px;border-radius:4px;white-space:pre-wrap;font-size:14px;color:#333;line-height:1.6;">${String(message).slice(0, 2000)}</div>
          <p style="margin-top:16px;font-size:12px;color:#999;">Responde directamente a este email para contestar al cliente.</p>
        </div>`;
      await sendEmail({ to: 'zonetechonline2024@gmail.com', subject: `[Contacto] ${safeSubject} — ${safeName}`, html: teamHtml, replyTo: email });
      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error('[emails:contact]', err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(400).json({ error: 'type requerido: welcome | order-confirm | shipping | contact' });
};
