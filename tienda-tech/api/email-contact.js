'use strict';
const { sendEmail }           = require('./_send-email');
const { contactAutoReply }    = require('./_email-templates');

// Endpoint del formulario de contacto:
// 1. Envía auto-reply al cliente
// 2. Reenvía el mensaje al equipo de ZoneTechOnline con reply-to del cliente
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, subject, message } = req.body || {};
  if (!email || !message) return res.status(400).json({ error: 'email y message requeridos' });

  const safeSubject = subject ? String(subject).slice(0, 200) : 'Consulta desde ZoneTechOnline';
  const safeName    = String(name || email).slice(0, 100);

  try {
    // 1. Auto-reply al cliente
    const reply = contactAutoReply({ name: safeName, email, subject: safeSubject, message });
    await sendEmail({ to: email, subject: reply.subject, html: reply.html });

    // 2. Notificación interna (forwarding al equipo)
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
    await sendEmail({
      to:      'zonetechonline2024@gmail.com',
      subject: `[Contacto] ${safeSubject} — ${safeName}`,
      html:    teamHtml,
      replyTo: email,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[email-contact]', err.message);
    res.status(500).json({ error: err.message });
  }
};
