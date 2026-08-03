'use strict';
const { sendEmail }                                          = require('./_send-email');
const { welcome, orderConfirm, orderShipped, contactAutoReply, cartAbandon1, cartAbandon2, cartAbandon3, wishlistReminder } = require('./_email-templates');
const { rateLimit } = require('./_ratelimit');
const { db }        = require('./_db');
const logger        = require('./_logger');
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
      logger.error('emails:contact', err.message, logger.ctx(req));
      return res.status(500).json({ error: err.message });
    }
  }

  // ── Guardar wishlist para recordatorio ──
  if (type === 'wishlist-save') {
    const { email, name, items } = req.body || {};
    if (!email || !items || !items.length) return res.status(400).json({ error: 'email e items requeridos' });
    const safeEmail = String(email).toLowerCase().trim().slice(0, 200);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) return res.status(400).json({ error: 'email inválido' });
    try {
      const existing = await db('wishlist_reminders', {
        filters: [`email=eq.${safeEmail}`, 'reminder_sent_at=is.null'],
        select: 'id', limit: 1,
      });
      if (existing && existing.length) {
        await db(`wishlist_reminders?id=eq.${existing[0].id}`, {
          method: 'PATCH',
          body: { items, name: name ? String(name).slice(0, 100) : null, updated_at: new Date().toISOString() },
        });
      } else {
        await db('wishlist_reminders', {
          method: 'POST',
          body: { email: safeEmail, name: name ? String(name).slice(0, 100) : null, items },
        });
      }
      return res.status(200).json({ ok: true });
    } catch (err) {
      logger.error('emails:wishlist-save', err.message, logger.ctx(req));
      return res.status(500).json({ error: err.message });
    }
  }

  // ── Captura de carrito abandonado (llamado desde frontend onblur del email) ──
  if (type === 'cart-abandon') {
    const { email, name, cart, cartTotal } = req.body || {};
    if (!email || !cart || !cart.length) return res.status(400).json({ error: 'email y cart requeridos' });
    const safeEmail = String(email).toLowerCase().trim().slice(0, 200);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) return res.status(400).json({ error: 'email inválido' });
    try {
      // Buscar si ya hay una sesión activa para este email
      const existing = await db('cart_sessions', {
        filters: [`email=eq.${safeEmail}`, 'completed_at=is.null'],
        select: 'id',
        order: 'created_at.desc',
        limit: 1,
      });
      const cartUrl = 'https://www.zonetechonline.com/checkout.html';
      if (existing && existing.length) {
        // Actualizar sesión existente con el nuevo carrito
        await db(`cart_sessions?id=eq.${existing[0].id}`, {
          method: 'PATCH',
          body: { cart_data: cart, cart_total: cartTotal || 0, updated_at: new Date().toISOString() },
        });
      } else {
        // Crear nueva sesión
        await db('cart_sessions', {
          method: 'POST',
          body: {
            email: safeEmail,
            name: name ? String(name).slice(0, 100) : null,
            cart_data: cart,
            cart_total: cartTotal || 0,
            cart_url: cartUrl,
          },
        });
      }
      return res.status(200).json({ ok: true });
    } catch (err) {
      logger.error('emails:cart-abandon', err.message, logger.ctx(req));
      return res.status(500).json({ error: err.message });
    }
  }

  // ── Marca carrito como completado (redirigiendo a pago) ──
  if (type === 'cart-abandon-complete') {
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ error: 'email requerido' });
    try {
      await db(`cart_sessions?email=eq.${encodeURIComponent(email.toLowerCase().trim())}&completed_at=is.null`, {
        method: 'PATCH',
        body: { completed_at: new Date().toISOString() },
      });
      return res.status(200).json({ ok: true });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // ── Cron de recuperación de carrito (llamado por Vercel Cron cada hora) ──
  if (type === 'cart-recovery-run') {
    const adminKey = process.env.ADMIN_API_KEY;
    if (adminKey && req.headers['x-admin-key'] !== adminKey && !req.headers['x-vercel-cron']) {
      return res.status(401).json({ error: 'No autorizado' });
    }
    try {
      // Cron diario a las 8h UTC — ventanas amplias para no perder carritos entre ejecuciones
      const now = new Date();
      const h1ago  = new Date(now - 1  * 3600 * 1000).toISOString();
      const h48ago = new Date(now - 48 * 3600 * 1000).toISOString();
      const h24ago = new Date(now - 24 * 3600 * 1000).toISOString();
      const h96ago = new Date(now - 96 * 3600 * 1000).toISOString();
      const h72ago = new Date(now - 72 * 3600 * 1000).toISOString();
      const h120ago= new Date(now - 120* 3600 * 1000).toISOString();

      // Email 1: creado hace entre 1h y 48h, no enviado aún
      const e1 = await db('cart_sessions', {
        filters: [
          `created_at=lte.${h1ago}`,
          `created_at=gte.${h48ago}`,
          'completed_at=is.null',
          'recovery_email_1_sent_at=is.null',
        ],
        limit: 20,
      });

      // Email 2: creado hace entre 24h y 96h, email 1 ya enviado, email 2 no
      const e2 = await db('cart_sessions', {
        filters: [
          `created_at=lte.${h24ago}`,
          `created_at=gte.${h96ago}`,
          'completed_at=is.null',
          'recovery_email_1_sent_at=not.is.null',
          'recovery_email_2_sent_at=is.null',
        ],
        limit: 20,
      });

      // Email 3: creado hace entre 72h y 120h, email 2 ya enviado, email 3 no
      const e3 = await db('cart_sessions', {
        filters: [
          `created_at=lte.${h72ago}`,
          `created_at=gte.${h120ago}`,
          'completed_at=is.null',
          'recovery_email_2_sent_at=not.is.null',
          'recovery_email_3_sent_at=is.null',
        ],
        limit: 20,
      });

      let sent = 0;
      const DISCOUNT_CODE = 'VUELVE5';

      for (const session of (e1 || [])) {
        try {
          const tpl = cartAbandon1({ name: session.name, email: session.email, items: session.cart_data, cartTotal: session.cart_total, cartUrl: session.cart_url });
          await sendEmail({ to: session.email, subject: tpl.subject, html: tpl.html });
          await db(`cart_sessions?id=eq.${session.id}`, { method: 'PATCH', body: { recovery_email_1_sent_at: new Date().toISOString() } });
          sent++;
        } catch (err) { logger.error('cart-recovery-1', err.message); }
      }

      for (const session of (e2 || [])) {
        try {
          const tpl = cartAbandon2({ name: session.name, email: session.email, items: session.cart_data, cartTotal: session.cart_total, cartUrl: session.cart_url });
          await sendEmail({ to: session.email, subject: tpl.subject, html: tpl.html });
          await db(`cart_sessions?id=eq.${session.id}`, { method: 'PATCH', body: { recovery_email_2_sent_at: new Date().toISOString() } });
          sent++;
        } catch (err) { logger.error('cart-recovery-2', err.message); }
      }

      for (const session of (e3 || [])) {
        try {
          const tpl = cartAbandon3({ name: session.name, email: session.email, items: session.cart_data, cartTotal: session.cart_total, cartUrl: session.cart_url, discountCode: DISCOUNT_CODE, discountPct: 5 });
          await sendEmail({ to: session.email, subject: tpl.subject, html: tpl.html });
          await db(`cart_sessions?id=eq.${session.id}`, { method: 'PATCH', body: { recovery_email_3_sent_at: new Date().toISOString() } });
          sent++;
        } catch (err) { logger.error('cart-recovery-3', err.message); }
      }

      // ── Wishlist reminders: creadas hace 48-72h, no enviadas ──
      const h48ago2 = new Date(now - 48 * 3600 * 1000).toISOString();
      const h72ago2 = new Date(now - 72 * 3600 * 1000).toISOString();
      const wl = await db('wishlist_reminders', {
        filters: [
          `created_at=lte.${h48ago2}`,
          `created_at=gte.${h72ago2}`,
          'reminder_sent_at=is.null',
        ],
        limit: 20,
      });
      for (const wr of (wl || [])) {
        try {
          const tpl = wishlistReminder({ name: wr.name, email: wr.email, items: wr.items, wishlistUrl: 'https://www.zonetechonline.com/lista-deseos.html' });
          await sendEmail({ to: wr.email, subject: tpl.subject, html: tpl.html });
          await db(`wishlist_reminders?id=eq.${wr.id}`, { method: 'PATCH', body: { reminder_sent_at: new Date().toISOString() } });
          sent++;
        } catch (err) { logger.error('wishlist-reminder', err.message); }
      }

      return res.status(200).json({ ok: true, sent, queues: { e1: (e1 || []).length, e2: (e2 || []).length, e3: (e3 || []).length, wl: (wl || []).length } });
    } catch (err) {
      logger.error('emails:cart-recovery-run', err.message, logger.ctx(req));
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(400).json({ error: 'type requerido: welcome | order-confirm | shipping | contact | cart-abandon | cart-recovery-run' });
};
