'use strict';

const BRAND_COLOR  = '#6366f1';
const SITE_URL     = 'https://www.zonetechonline.com';
const SUPPORT_EMAIL = 'info@zonetechonline.com';

function base(content, preheader) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>ZoneTechOnline</title>
<!--[if mso]><style>td,th,div,p,a,h1,h2,h3,h4,h5,h6{font-family:Arial,Helvetica,sans-serif!important;}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
<span style="display:none;max-height:0;overflow:hidden;">${preheader}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</span>

<!-- Wrapper -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f4f8;padding:32px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

  <!-- HEADER -->
  <tr><td style="background:linear-gradient(135deg,#0a0a18 0%,#13132b 100%);border-radius:16px 16px 0 0;padding:28px 40px;text-align:center;">
    <a href="${SITE_URL}" style="text-decoration:none;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:22px;font-weight:900;letter-spacing:.12em;color:#fff;">
      ZONE<span style="color:${BRAND_COLOR};">TECH</span>ONLINE
    </a>
  </td></tr>

  <!-- BODY -->
  <tr><td style="background:#ffffff;padding:40px 40px 32px;border-left:1px solid #e8e8f0;border-right:1px solid #e8e8f0;">
    ${content}
  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#f9f9fc;border:1px solid #e8e8f0;border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
    <p style="margin:0 0 8px;font-size:12px;color:#888;line-height:1.6;">
      ZoneTechOnline · Tienda oficial de wearables premium europeos<br>
      <a href="${SITE_URL}/politica-devoluciones.html" style="color:${BRAND_COLOR};text-decoration:none;">Devoluciones 30 días</a>
      &nbsp;·&nbsp;
      <a href="${SITE_URL}/politica-privacidad.html" style="color:${BRAND_COLOR};text-decoration:none;">Privacidad</a>
      &nbsp;·&nbsp;
      <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND_COLOR};text-decoration:none;">${SUPPORT_EMAIL}</a>
    </p>
    <p style="margin:0;font-size:11px;color:#aaa;">Este email fue enviado a tu dirección registrada en ZoneTechOnline.</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;
}

function btn(text, url) {
  return `<table cellpadding="0" cellspacing="0" border="0" style="margin:24px auto 0;">
<tr><td align="center" style="background:${BRAND_COLOR};border-radius:10px;">
  <a href="${url}" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#fff;text-decoration:none;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">${text}</a>
</td></tr></table>`;
}

function divider() {
  return `<hr style="border:none;border-top:1px solid #e8e8f0;margin:28px 0;">`;
}

function badge(emoji, label) {
  return `<span style="display:inline-block;background:#f0f0ff;border:1px solid #d8d8ff;border-radius:20px;padding:4px 14px;font-size:12px;font-weight:700;color:${BRAND_COLOR};letter-spacing:.04em;">${emoji} ${label}</span>`;
}

function infoRow(label, value) {
  return `<tr>
<td style="padding:10px 0;font-size:13.5px;color:#666;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;border-bottom:1px solid #f0f0f8;">${label}</td>
<td style="padding:10px 0;font-size:13.5px;color:#1a1a2e;font-weight:600;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;border-bottom:1px solid #f0f0f8;text-align:right;">${value}</td>
</tr>`;
}

// ─── 1. BIENVENIDA ──────────────────────────────────────────────────────────
function welcome({ name, email }) {
  const firstName = (name || email || 'cliente').split(' ')[0];
  return {
    subject: `¡Bienvenido/a a ZoneTechOnline, ${firstName}! 🎉`,
    html: base(`
      <div style="text-align:center;margin-bottom:28px;">${badge('✨', 'CUENTA CREADA')}</div>
      <h1 style="font-size:26px;font-weight:800;color:#1a1a2e;margin:0 0 12px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        ¡Hola, ${firstName}! Bienvenido/a 🙌
      </h1>
      <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 24px;text-align:center;">
        Tu cuenta en ZoneTechOnline ya está activa. Ahora tienes acceso a toda nuestra colección de <strong>wearables premium europeos</strong> con garantía oficial y envío en 5–8 días hábiles.
      </p>
      ${divider()}
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:24px;">
        <tr>
          <td width="33%" style="text-align:center;padding:16px 8px;background:#f9f9fc;border-radius:10px;margin:4px;">
            <div style="font-size:24px;margin-bottom:6px;">📦</div>
            <div style="font-size:12px;font-weight:700;color:#1a1a2e;margin-bottom:3px;">Envío rápido</div>
            <div style="font-size:11px;color:#888;">5–8 días hábiles</div>
          </td>
          <td width="4%"></td>
          <td width="33%" style="text-align:center;padding:16px 8px;background:#f9f9fc;border-radius:10px;">
            <div style="font-size:24px;margin-bottom:6px;">🛡️</div>
            <div style="font-size:12px;font-weight:700;color:#1a1a2e;margin-bottom:3px;">Garantía oficial</div>
            <div style="font-size:11px;color:#888;">2 años mínimo</div>
          </td>
          <td width="4%"></td>
          <td width="33%" style="text-align:center;padding:16px 8px;background:#f9f9fc;border-radius:10px;">
            <div style="font-size:24px;margin-bottom:6px;">↩️</div>
            <div style="font-size:12px;font-weight:700;color:#1a1a2e;margin-bottom:3px;">Devoluciones</div>
            <div style="font-size:11px;color:#888;">30 días sin preguntas</div>
          </td>
        </tr>
      </table>
      ${btn('Explorar el catálogo', SITE_URL + '/catalogo.html')}
      ${divider()}
      <p style="font-size:13px;color:#888;text-align:center;margin:0;">
        Si tienes cualquier pregunta, escríbenos a
        <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND_COLOR};text-decoration:none;">${SUPPORT_EMAIL}</a>
      </p>
    `, `¡Hola ${firstName}! Tu cuenta en ZoneTechOnline está lista.`)
  };
}

// ─── 2. CONFIRMACIÓN DE PEDIDO ───────────────────────────────────────────────
function orderConfirm({ name, email, orderNo, items, total, address, paymentMethod, orderDate }) {
  const firstName = (name || email || 'cliente').split(' ')[0];
  const paymentLabel = paymentMethod === 'bizum' ? 'Bizum' : paymentMethod === 'paypal' ? 'PayPal' : 'Tarjeta de crédito/débito';
  const fmt = v => Number(v).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });

  const itemsHtml = (items || []).map(item => `
    <tr>
      <td style="padding:10px 0;font-size:13.5px;color:#1a1a2e;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;border-bottom:1px solid #f0f0f8;">
        <strong>${item.name}</strong><br>
        <span style="font-size:12px;color:#888;">Cantidad: ${item.qty || 1}</span>
      </td>
      <td style="padding:10px 0;font-size:13.5px;color:#1a1a2e;font-weight:600;text-align:right;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;border-bottom:1px solid #f0f0f8;">
        ${fmt(item.price * (item.qty || 1))}
      </td>
    </tr>`).join('');

  return {
    subject: `✅ Pedido confirmado ${orderNo} — ZoneTechOnline`,
    html: base(`
      <div style="text-align:center;margin-bottom:20px;">
        <div style="width:64px;height:64px;background:#ecfdf5;border:2px solid #a7f3d0;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:12px;">✅</div>
        <br>${badge('📦', 'PEDIDO RECIBIDO')}
      </div>
      <h1 style="font-size:24px;font-weight:800;color:#1a1a2e;margin:0 0 8px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        ¡Gracias por tu compra, ${firstName}!
      </h1>
      <p style="font-size:14px;color:#666;text-align:center;margin:0 0 28px;line-height:1.6;">
        Hemos recibido tu pedido y ya estamos preparándolo.<br>
        Te avisaremos cuando salga a camino.
      </p>

      <!-- Número de pedido -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:28px;">
      <tr><td style="background:#f0f0ff;border:1px solid #d8d8ff;border-radius:12px;padding:16px 20px;text-align:center;">
        <div style="font-size:11px;color:#888;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;">Número de pedido</div>
        <div style="font-size:22px;font-weight:900;color:${BRAND_COLOR};font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">${orderNo}</div>
        <div style="font-size:12px;color:#888;margin-top:4px;">${orderDate || new Date().toLocaleDateString('es-ES', {day:'2-digit',month:'long',year:'numeric'})}</div>
      </td></tr>
      </table>

      <!-- Productos -->
      <h3 style="font-size:14px;font-weight:700;color:#1a1a2e;margin:0 0 12px;text-transform:uppercase;letter-spacing:.06em;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">Productos</h3>
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:8px;">
        ${itemsHtml}
        <tr>
          <td style="padding-top:14px;font-size:15px;font-weight:700;color:#1a1a2e;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">Total pagado</td>
          <td style="padding-top:14px;font-size:18px;font-weight:900;color:${BRAND_COLOR};text-align:right;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">${fmt(total)}</td>
        </tr>
      </table>

      ${divider()}

      <!-- Detalles -->
      <h3 style="font-size:14px;font-weight:700;color:#1a1a2e;margin:0 0 12px;text-transform:uppercase;letter-spacing:.06em;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">Detalles del pedido</h3>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        ${infoRow('Email', email || '—')}
        ${infoRow('Dirección de entrega', address || 'Será solicitada por el transportista')}
        ${infoRow('Método de pago', paymentLabel)}
        ${infoRow('Envío estimado', '5–8 días hábiles')}
      </table>

      ${divider()}

      <!-- Timeline -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:8px;">
        <tr>
          <td width="33%" style="text-align:center;padding:12px 4px;">
            <div style="font-size:20px;margin-bottom:6px;">✅</div>
            <div style="font-size:12px;font-weight:700;color:#34d399;margin-bottom:2px;">Confirmado</div>
            <div style="font-size:11px;color:#888;">Pago recibido</div>
          </td>
          <td width="4%" style="text-align:center;color:#ddd;font-size:18px;">→</td>
          <td width="33%" style="text-align:center;padding:12px 4px;">
            <div style="font-size:20px;margin-bottom:6px;opacity:.4;">📦</div>
            <div style="font-size:12px;font-weight:700;color:#888;margin-bottom:2px;">Preparando</div>
            <div style="font-size:11px;color:#aaa;">En almacén</div>
          </td>
          <td width="4%" style="text-align:center;color:#ddd;font-size:18px;">→</td>
          <td width="33%" style="text-align:center;padding:12px 4px;">
            <div style="font-size:20px;margin-bottom:6px;opacity:.4;">🚚</div>
            <div style="font-size:12px;font-weight:700;color:#888;margin-bottom:2px;">En camino</div>
            <div style="font-size:11px;color:#aaa;">Pendiente</div>
          </td>
        </tr>
      </table>

      ${btn('Ver mis pedidos', SITE_URL + '/mis-pedidos.html')}
    `, `Pedido ${orderNo} confirmado · Total: ${fmt(total)}`)
  };
}

// ─── 3. PEDIDO ENVIADO ───────────────────────────────────────────────────────
function orderShipped({ name, email, orderNo, trackingNumber, carrier, trackingUrl, items, estimatedDelivery }) {
  const firstName = (name || email || 'cliente').split(' ')[0];
  const carrierName = carrier || 'MRW / SEUR';
  const delivery = estimatedDelivery || '5–8 días hábiles';

  return {
    subject: `🚚 Tu pedido ${orderNo} está en camino — ZoneTechOnline`,
    html: base(`
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:48px;margin-bottom:8px;">🚚</div>
        ${badge('📍', 'EN CAMINO')}
      </div>
      <h1 style="font-size:24px;font-weight:800;color:#1a1a2e;margin:0 0 8px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        ¡Tu pedido está en camino, ${firstName}!
      </h1>
      <p style="font-size:14px;color:#666;text-align:center;margin:0 0 28px;line-height:1.6;">
        Tu paquete ha salido de nuestro almacén y está en manos del transportista.<br>
        Entrega estimada: <strong>${delivery}</strong>
      </p>

      <!-- Tracking -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:28px;">
      <tr><td style="background:#fffbeb;border:1px solid #fcd34d;border-radius:12px;padding:20px 24px;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td>
              <div style="font-size:11px;color:#92400e;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px;font-weight:700;">Número de seguimiento</div>
              <div style="font-size:20px;font-weight:900;color:#1a1a2e;font-family:'Courier New',monospace;letter-spacing:.05em;">${trackingNumber || 'Ver en el panel del transportista'}</div>
              <div style="font-size:12px;color:#888;margin-top:4px;">Transportista: <strong>${carrierName}</strong></div>
            </td>
            ${trackingUrl ? `<td style="text-align:right;"><a href="${trackingUrl}" style="display:inline-block;background:#f59e0b;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:700;white-space:nowrap;">Rastrear →</a></td>` : ''}
          </tr>
        </table>
      </td></tr>
      </table>

      <!-- Timeline -->
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:24px;">
        <tr>
          <td width="33%" style="text-align:center;padding:12px 4px;">
            <div style="font-size:20px;margin-bottom:6px;">✅</div>
            <div style="font-size:12px;font-weight:700;color:#34d399;">Confirmado</div>
          </td>
          <td width="4%" style="text-align:center;color:#6366f1;font-size:18px;">→</td>
          <td width="33%" style="text-align:center;padding:12px 4px;">
            <div style="font-size:20px;margin-bottom:6px;">🚚</div>
            <div style="font-size:12px;font-weight:700;color:${BRAND_COLOR};">En tránsito</div>
            <div style="font-size:11px;color:#888;">${carrierName}</div>
          </td>
          <td width="4%" style="text-align:center;color:#ddd;font-size:18px;">→</td>
          <td width="33%" style="text-align:center;padding:12px 4px;">
            <div style="font-size:20px;margin-bottom:6px;opacity:.4;">📬</div>
            <div style="font-size:12px;font-weight:700;color:#888;">Entregado</div>
            <div style="font-size:11px;color:#aaa;">Próximamente</div>
          </td>
        </tr>
      </table>

      ${trackingUrl ? btn('Rastrear mi paquete', trackingUrl) : ''}
      ${divider()}
      <p style="font-size:13px;color:#888;text-align:center;margin:0;line-height:1.7;">
        Pedido: <strong>${orderNo}</strong><br>
        ¿Algún problema? Escríbenos a <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND_COLOR};text-decoration:none;">${SUPPORT_EMAIL}</a>
      </p>
    `, `Tu pedido ${orderNo} está en camino con ${carrierName}`)
  };
}

// ─── 4. PEDIDO ENTREGADO ─────────────────────────────────────────────────────
function orderDelivered({ name, email, orderNo, items }) {
  const firstName = (name || email || 'cliente').split(' ')[0];
  return {
    subject: `📬 Pedido ${orderNo} entregado — ¿Cómo te ha ido?`,
    html: base(`
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:48px;margin-bottom:8px;">📬</div>
        ${badge('✅', 'ENTREGADO')}
      </div>
      <h1 style="font-size:24px;font-weight:800;color:#1a1a2e;margin:0 0 8px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        ¡Tu pedido ha llegado, ${firstName}!
      </h1>
      <p style="font-size:14px;color:#666;text-align:center;margin:0 0 28px;line-height:1.6;">
        Esperamos que estés disfrutando de tu nuevo wearable.<br>
        Si hay cualquier problema, estamos aquí para ayudarte.
      </p>
      ${divider()}
      <p style="font-size:15px;font-weight:700;color:#1a1a2e;margin:0 0 12px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">⭐ ¿Qué te parece tu compra?</p>
      <p style="font-size:13.5px;color:#666;text-align:center;margin:0 0 8px;line-height:1.6;">
        Tu opinión ayuda a otros clientes a elegir mejor. ¡Solo tarda 60 segundos!
      </p>
      ${btn('Dejar una reseña', SITE_URL + '/#opiniones-form')}
      ${divider()}
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td width="48%" style="background:#f9f9fc;border-radius:10px;padding:16px;text-align:center;">
            <div style="font-size:20px;margin-bottom:6px;">↩️</div>
            <div style="font-size:12.5px;font-weight:700;color:#1a1a2e;margin-bottom:4px;">¿Algo no va bien?</div>
            <div style="font-size:12px;color:#888;line-height:1.5;">Devoluciones gratuitas en 30 días</div>
            <a href="${SITE_URL}/politica-devoluciones.html" style="display:inline-block;margin-top:8px;font-size:12px;color:${BRAND_COLOR};text-decoration:none;font-weight:600;">Iniciar devolución →</a>
          </td>
          <td width="4%"></td>
          <td width="48%" style="background:#f9f9fc;border-radius:10px;padding:16px;text-align:center;">
            <div style="font-size:20px;margin-bottom:6px;">💬</div>
            <div style="font-size:12.5px;font-weight:700;color:#1a1a2e;margin-bottom:4px;">¿Necesitas ayuda?</div>
            <div style="font-size:12px;color:#888;line-height:1.5;">Soporte en español disponible</div>
            <a href="mailto:${SUPPORT_EMAIL}" style="display:inline-block;margin-top:8px;font-size:12px;color:${BRAND_COLOR};text-decoration:none;font-weight:600;">Contactar →</a>
          </td>
        </tr>
      </table>
    `, `Tu pedido ${orderNo} ha sido entregado`)
  };
}

// ─── 5. PEDIDO CANCELADO ─────────────────────────────────────────────────────
function orderCancelled({ name, email, orderNo, reason, total }) {
  const firstName = (name || email || 'cliente').split(' ')[0];
  const fmt = v => Number(v).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
  return {
    subject: `❌ Pedido ${orderNo} cancelado — ZoneTechOnline`,
    html: base(`
      <div style="text-align:center;margin-bottom:20px;">
        <div style="width:64px;height:64px;background:#fef2f2;border:2px solid #fca5a5;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:12px;">❌</div>
        <br>${badge('🚫', 'PEDIDO CANCELADO')}
      </div>
      <h1 style="font-size:24px;font-weight:800;color:#1a1a2e;margin:0 0 8px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        Tu pedido ha sido cancelado, ${firstName}
      </h1>
      <p style="font-size:14px;color:#666;text-align:center;margin:0 0 28px;line-height:1.6;">
        Lamentamos los inconvenientes. A continuación encontrarás los detalles de la cancelación.
      </p>

      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:28px;">
      <tr><td style="background:#fef2f2;border:1px solid #fca5a5;border-radius:12px;padding:20px 24px;">
        <div style="font-size:11px;color:#991b1b;text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;font-weight:700;">Número de pedido</div>
        <div style="font-size:20px;font-weight:900;color:#1a1a2e;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">${orderNo}</div>
        ${total ? `<div style="font-size:13px;color:#666;margin-top:6px;">Importe: <strong>${fmt(total)}</strong></div>` : ''}
        ${reason ? `<div style="font-size:13px;color:#666;margin-top:6px;">Motivo: ${reason}</div>` : ''}
      </td></tr>
      </table>

      ${divider()}
      <p style="font-size:14px;color:#555;text-align:center;margin:0 0 20px;line-height:1.7;">
        Si realizaste el pago, el reembolso se procesará en un plazo de <strong>5–10 días hábiles</strong> en tu método de pago original.
      </p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td width="48%" style="background:#f9f9fc;border-radius:10px;padding:16px;text-align:center;">
            <div style="font-size:20px;margin-bottom:6px;">🛒</div>
            <div style="font-size:12.5px;font-weight:700;color:#1a1a2e;margin-bottom:4px;">¿Quieres volver a pedir?</div>
            <a href="${SITE_URL}/catalogo.html" style="display:inline-block;margin-top:8px;font-size:12px;color:${BRAND_COLOR};text-decoration:none;font-weight:600;">Ver catálogo →</a>
          </td>
          <td width="4%"></td>
          <td width="48%" style="background:#f9f9fc;border-radius:10px;padding:16px;text-align:center;">
            <div style="font-size:20px;margin-bottom:6px;">💬</div>
            <div style="font-size:12.5px;font-weight:700;color:#1a1a2e;margin-bottom:4px;">¿Tienes preguntas?</div>
            <a href="mailto:${SUPPORT_EMAIL}" style="display:inline-block;margin-top:8px;font-size:12px;color:${BRAND_COLOR};text-decoration:none;font-weight:600;">Contactar →</a>
          </td>
        </tr>
      </table>
    `, `Tu pedido ${orderNo} ha sido cancelado`)
  };
}

// ─── 6. BIENVENIDA NEWSLETTER ────────────────────────────────────────────────
function newsletterWelcome({ email }) {
  return {
    subject: '¡Estás dentro! Novedades ZoneTechOnline en tu bandeja 📩',
    html: base(`
      <div style="text-align:center;margin-bottom:28px;">${badge('📩', 'SUSCRITO/A')}</div>
      <h1 style="font-size:26px;font-weight:800;color:#1a1a2e;margin:0 0 14px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        ¡Ya eres parte de la comunidad!
      </h1>
      <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 24px;text-align:center;">
        Desde ahora recibirás en <strong>${email}</strong> nuestras novedades, guías de compra y ofertas exclusivas.<br>Solo cuando merezca la pena abrirlo.
      </p>
      ${divider()}
      <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom:24px;">
        <tr>
          <td width="30%" style="text-align:center;padding:16px 6px;background:#f9f9fc;border-radius:10px;">
            <div style="font-size:24px;margin-bottom:6px;">🆕</div>
            <div style="font-size:12px;font-weight:700;color:#1a1a2e;margin-bottom:3px;">Novedades</div>
            <div style="font-size:11px;color:#888;">Primero en saberlo</div>
          </td>
          <td width="4%"></td>
          <td width="30%" style="text-align:center;padding:16px 6px;background:#f9f9fc;border-radius:10px;">
            <div style="font-size:24px;margin-bottom:6px;">💡</div>
            <div style="font-size:12px;font-weight:700;color:#1a1a2e;margin-bottom:3px;">Guías de compra</div>
            <div style="font-size:11px;color:#888;">Elige con criterio</div>
          </td>
          <td width="4%"></td>
          <td width="30%" style="text-align:center;padding:16px 6px;background:#f9f9fc;border-radius:10px;">
            <div style="font-size:24px;margin-bottom:6px;">🏷️</div>
            <div style="font-size:12px;font-weight:700;color:#1a1a2e;margin-bottom:3px;">Ofertas exclusivas</div>
            <div style="font-size:11px;color:#888;">Solo para suscriptores</div>
          </td>
        </tr>
      </table>
      ${btn('Ver el catálogo ahora', SITE_URL + '/catalogo.html')}
      ${divider()}
      <p style="font-size:12px;color:#aaa;text-align:center;margin:0;line-height:1.7;">
        Sin spam. Puedes cancelar en cualquier momento escribiendo a
        <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND_COLOR};text-decoration:none;">${SUPPORT_EMAIL}</a>
      </p>
    `, '¡Gracias por suscribirte! Novedades y ofertas exclusivas en tu bandeja.')
  };
}

// ─── 7. AUTO-REPLY CONTACTO ──────────────────────────────────────────────────
function contactAutoReply({ name, email, subject, message }) {
  const firstName = (name || 'cliente').split(' ')[0];
  return {
    subject: `Hemos recibido tu mensaje — ZoneTechOnline`,
    html: base(`
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:40px;margin-bottom:8px;">📨</div>
        ${badge('💬', 'MENSAJE RECIBIDO')}
      </div>
      <h1 style="font-size:22px;font-weight:800;color:#1a1a2e;margin:0 0 10px;text-align:center;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
        ¡Hola, ${firstName}! Hemos recibido tu mensaje
      </h1>
      <p style="font-size:14px;color:#666;text-align:center;margin:0 0 28px;line-height:1.6;">
        Nuestro equipo te responderá en un plazo máximo de <strong>24 horas hábiles</strong>.
      </p>
      ${divider()}
      <div style="background:#f9f9fc;border-left:3px solid ${BRAND_COLOR};border-radius:4px;padding:16px 20px;margin-bottom:24px;">
        <div style="font-size:12px;color:#888;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Tu mensaje:</div>
        <div style="font-size:13.5px;color:#444;line-height:1.7;white-space:pre-wrap;">${String(message || '').slice(0, 500)}</div>
      </div>
      <p style="font-size:13px;color:#888;text-align:center;margin:0;line-height:1.7;">
        Si tienes urgencia, contáctanos en
        <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND_COLOR};text-decoration:none;">${SUPPORT_EMAIL}</a><br>
        o por WhatsApp.
      </p>
    `, `Hemos recibido tu mensaje. Te respondemos en menos de 24h.`)
  };
}

// ── CARRITO ABANDONADO ────────────────────────────────────────────────────────

function cartItemsBlock(items) {
  if (!items || !items.length) return '';
  const rows = items.slice(0, 3).map(item => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f0f0f5;font-size:13px;color:#333;vertical-align:top;">
        <strong>${item.name}</strong><br>
        <span style="color:#888;font-size:12px;">${item.brand || ''}</span>
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #f0f0f5;font-size:13px;font-weight:700;color:#333;text-align:right;vertical-align:top;white-space:nowrap;">
        €${(item.price * (item.qty || 1)).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
      </td>
    </tr>`).join('');
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0;">${rows}</table>`;
}

function cartAbandon1({ name, email, items, cartTotal, cartUrl }) {
  const firstName = (name || email || 'Hola').split(' ')[0];
  const productName = items && items[0] ? items[0].name : 'tu selección';
  return {
    subject: `${firstName}, dejaste algo en tu carrito`,
    html: base(`
      <p style="font-size:17px;font-weight:700;color:#1a1a2e;margin:0 0 12px;">Tienes artículos esperándote</p>
      <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 20px;">
        Hola ${firstName}, dejaste <strong>${productName}</strong> en tu carrito.
        Sigue disponible y con garantía oficial de 2 años.
      </p>
      ${cartItemsBlock(items)}
      <p style="font-size:14px;color:#555;line-height:1.6;margin:16px 0 0;">
        <strong>Total:</strong> €${(cartTotal || 0).toLocaleString('es-ES', { minimumFractionDigits: 2 })} · Envío gratuito incluido
      </p>
      ${btn('Completar mi pedido', cartUrl || SITE_URL + '/checkout.html')}
      <p style="font-size:12px;color:#aaa;text-align:center;margin-top:20px;">
        ¿Tienes alguna duda? Escríbenos a
        <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND_COLOR};">${SUPPORT_EMAIL}</a>
      </p>
    `, `Tu ${productName} sigue disponible. Completa tu pedido.`),
  };
}

function cartAbandon2({ name, email, items, cartTotal, cartUrl }) {
  const firstName = (name || email || 'Hola').split(' ')[0];
  const productName = items && items[0] ? items[0].name : 'tu selección';
  return {
    subject: `${firstName}, recordatorio de tu carrito · Garantía oficial incluida`,
    html: base(`
      <p style="font-size:17px;font-weight:700;color:#1a1a2e;margin:0 0 12px;">Aún estás a tiempo</p>
      <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 20px;">
        Tu carrito con <strong>${productName}</strong> sigue aquí.
        Todos nuestros productos incluyen garantía oficial europea de 2 años, devolución 30 días hábiles y envío gratuito.
      </p>
      ${cartItemsBlock(items)}
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0;background:#f9f9fc;border-radius:10px;padding:16px;">
        <tr>
          <td style="font-size:13px;color:#555;padding:4px 0;">
            ✓ <strong>Garantía oficial 2 años</strong> conforme a normativa europea<br>
            ✓ <strong>Devolución 30 días hábiles</strong> sin preguntas<br>
            ✓ <strong>Envío gratuito</strong> con MRW/SEUR y seguimiento
          </td>
        </tr>
      </table>
      ${btn('Volver a mi carrito', cartUrl || SITE_URL + '/checkout.html')}
    `, `Tu carrito sigue disponible. Garantía oficial 2 años incluida.`),
  };
}

function cartAbandon3({ name, email, items, cartTotal, cartUrl, discountCode, discountPct }) {
  const firstName = (name || email || 'Hola').split(' ')[0];
  const hasDiscount = discountCode && cartTotal >= 100;
  return {
    subject: hasDiscount ? `${firstName}, un pequeño regalo para completar tu pedido` : `${firstName}, última oportunidad para tu carrito`,
    html: base(`
      <p style="font-size:17px;font-weight:700;color:#1a1a2e;margin:0 0 12px;">
        ${hasDiscount ? '🎁 Un detalle para ti' : 'Tu carrito sigue disponible'}
      </p>
      <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 20px;">
        Hola ${firstName},
        ${hasDiscount
          ? `tu carrito lleva varios días esperándote. Como detalle, aquí tienes un <strong>${discountPct || 5}% de descuento</strong> para tu pedido:`
          : 'tu carrito sigue disponible. No queremos que pierdas tu selección.'
        }
      </p>
      ${cartItemsBlock(items)}
      ${hasDiscount ? `
      <div style="background:linear-gradient(135deg,#6366f1,#a855f7);border-radius:12px;padding:20px;text-align:center;margin:20px 0;">
        <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.7);">Tu código de descuento</p>
        <p style="margin:0 0 8px;font-size:26px;font-weight:900;letter-spacing:.15em;color:#fff;">${discountCode}</p>
        <p style="margin:0;font-size:12px;color:rgba(255,255,255,.7);">-${discountPct || 5}% · Válido 7 días · Pedidos desde €100</p>
      </div>` : ''}
      ${btn(hasDiscount ? `Usar mi descuento · €${((cartTotal || 0) * (1 - (discountPct || 5) / 100)).toLocaleString('es-ES', { minimumFractionDigits: 2 })}` : 'Completar mi pedido', cartUrl || SITE_URL + '/checkout.html')}
    `, hasDiscount ? `Tu ${discountPct || 5}% de descuento está esperándote.` : 'Última oportunidad para completar tu pedido.'),
  };
}

// ── WISHLIST REMINDER ─────────────────────────────────────────────────────────
function wishlistReminder({ name, email, items, wishlistUrl }) {
  const firstName = (name || email || 'Hola').split(' ')[0];
  const count = (items || []).length;
  const wishUrl = wishlistUrl || SITE_URL + '/lista-deseos.html';
  const rows = (items || []).slice(0, 4).map(item => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f0f0f5;font-size:13px;color:#333;vertical-align:top;">
        <strong>${item.name}</strong><br>
        <span style="color:#888;font-size:12px;">${item.brand || ''}</span>
      </td>
      <td style="padding:10px 0;border-bottom:1px solid #f0f0f5;font-size:13px;font-weight:700;color:#333;text-align:right;vertical-align:top;white-space:nowrap;">
        €${Number(item.price).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
      </td>
    </tr>`).join('');
  const itemsBlock = rows ? `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0;">${rows}</table>` : '';
  return {
    subject: `${firstName}, tienes ${count} producto${count !== 1 ? 's' : ''} esperando en tu lista de deseos`,
    html: base(`
      <p style="font-size:17px;font-weight:700;color:#1a1a2e;margin:0 0 12px;">Tu lista de deseos te espera ❤️</p>
      <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 20px;">
        Hola ${firstName}, tienes <strong>${count} producto${count !== 1 ? 's' : ''}</strong> guardado${count !== 1 ? 's' : ''} en tu lista de deseos en ZoneTechOnline. ¿Listo para añadirlo${count !== 1 ? 's' : ''} al carrito?
      </p>
      ${itemsBlock}
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0;background:#f9f9fc;border-radius:10px;padding:16px;">
        <tr>
          <td style="font-size:13px;color:#555;padding:4px 0;">
            ✓ <strong>Garantía oficial 2 años</strong> conforme a normativa europea<br>
            ✓ <strong>Devolución 30 días hábiles</strong> sin preguntas<br>
            ✓ <strong>Envío gratuito</strong> con MRW/SEUR y seguimiento
          </td>
        </tr>
      </table>
      ${btn('Ver mi lista de deseos', wishUrl)}
      <p style="font-size:12px;color:#aaa;text-align:center;margin-top:20px;">
        Si no quieres recibir recordatorios, simplemente ignora este email.<br>
        <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND_COLOR};">${SUPPORT_EMAIL}</a>
      </p>
    `, `Tienes ${count} producto${count !== 1 ? 's' : ''} guardado${count !== 1 ? 's' : ''} en tu lista de deseos.`),
  };
}

module.exports = { welcome, orderConfirm, orderShipped, orderDelivered, orderCancelled, contactAutoReply, newsletterWelcome, cartAbandon1, cartAbandon2, cartAbandon3, wishlistReminder };
