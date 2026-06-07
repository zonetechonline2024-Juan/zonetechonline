module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    // ── Guard: clave de Stripe obligatoria ──────────────────────────────────
    const apiKey = process.env.STRIPE_SECRET_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'STRIPE_SECRET_KEY no configurada. Añádela en Vercel › Settings › Environment Variables.'
      });
    }

    // ── Inicialización lazy (dentro del try → errores siempre capturados) ───
    const stripe = require('stripe')(apiKey);

    // ── Parseo de body robusto ──────────────────────────────────────────────
    // Vercel parsea automáticamente JSON cuando Content-Type: application/json
    // Este bloque cubre casos edge (cuerpo crudo / string sin parsear)
    let body = req.body;

    if (!body) {
      await new Promise((resolve) => {
        let raw = '';
        req.on('data', chunk => { raw += chunk; });
        req.on('end', () => {
          try { body = JSON.parse(raw); } catch (_) { body = {}; }
          resolve();
        });
        req.on('error', () => { body = {}; resolve(); });
      });
    } else if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (_) { body = {}; }
    }

    const { items, email, discountAmount } = body || {};

    // ── Validación básica del carrito ───────────────────────────────────────
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'El carrito está vacío' });
    }

    const lineItems = items
      .filter(item => item.price > 0)
      .map(item => ({
        price_data: {
          currency: 'eur',
          product_data: { name: String(item.name).slice(0, 250) },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.qty,
      }));

    if (lineItems.length === 0) {
      return res.status(400).json({ error: 'No hay artículos válidos en el carrito' });
    }

    // ── URLs de éxito / cancelación ─────────────────────────────────────────
    const proto = req.headers['x-forwarded-proto'] || 'https';
    const host  = req.headers['x-forwarded-host'] || req.headers.host || 'zonetechonline.vercel.app';
    const base  = `${proto}://${host}`;

    const sessionParams = {
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      locale: 'es',
      success_url: `${base}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${base}/checkout-cancel.html`,
      billing_address_collection: 'auto',
    };

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      sessionParams.customer_email = email;
    }

    // ── Cupón de descuento (si aplica) ──────────────────────────────────────
    if (discountAmount && discountAmount > 0) {
      const coupon = await stripe.coupons.create({
        amount_off: Math.round(discountAmount * 100),
        currency:   'eur',
        duration:   'once',
        name:       'Descuento aplicado',
      });
      sessionParams.discounts = [{ coupon: coupon.id }];
    }

    // ── Crear sesión Stripe Checkout ────────────────────────────────────────
    const session = await stripe.checkout.sessions.create(sessionParams);
    return res.status(200).json({ url: session.url });

  } catch (error) {
    console.error('[ZTOnline] Checkout error:', error.message || error);
    return res.status(500).json({
      error: error.message || 'Error procesando el pago. Inténtalo de nuevo.'
    });
  }
};
