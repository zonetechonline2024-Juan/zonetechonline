'use strict';
const { db }         = require('./_db');
const { rateLimit }  = require('./_ratelimit');
const logger         = require('./_logger');
const checkoutRL     = rateLimit('checkout');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!checkoutRL(req, res)) return;

  try {
    const apiKey = process.env.STRIPE_SECRET_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Configuración de pago incompleta. Contacta con soporte.' });
    }

    const stripe = require('stripe')(apiKey);

    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (_) { body = {}; }
    }
    if (!body || typeof body !== 'object') body = {};

    const { items, email, discountAmount, paymentMethod } = body;

    const stripeMethodTypes =
      paymentMethod === 'bizum'  ? ['bizum']  :
      paymentMethod === 'paypal' ? ['paypal'] :
      ['card'];

    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'El carrito está vacío' });
    }

    const lineItems = items
      .filter(item => {
        const p = parseFloat(item.price);
        return !isNaN(p) && p > 0 && item.name;
      })
      .map(item => ({
        price_data: {
          currency: 'eur',
          product_data: { name: String(item.name).trim().slice(0, 250) },
          unit_amount: Math.round(parseFloat(item.price) * 100),
        },
        quantity: Math.max(1, parseInt(item.qty, 10) || 1),
      }));

    if (lineItems.length === 0) {
      return res.status(400).json({ error: 'No hay artículos válidos en el carrito' });
    }

    const proto = req.headers['x-forwarded-proto'] || 'https';
    const host  = req.headers['x-forwarded-host'] || req.headers.host || 'www.zonetechonline.com';
    const base  = `${proto}://${host}`;

    const sessionParams = {
      payment_method_types: stripeMethodTypes,
      line_items: lineItems,
      mode: 'payment',
      locale: 'es',
      success_url: `${base}/checkout-success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${base}/checkout-cancel.html`,
      // Recogemos dirección de envío para dropshipping con Megasur
      shipping_address_collection: {
        allowed_countries: ['ES', 'PT', 'FR', 'DE', 'IT', 'GB', 'NL', 'BE', 'AT', 'CH', 'IE', 'PL'],
      },
      billing_address_collection: 'auto',
    };

    if (email && typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      sessionParams.customer_email = email;
    }

    if (discountAmount && parseFloat(discountAmount) > 0) {
      const coupon = await stripe.coupons.create({
        amount_off: Math.round(parseFloat(discountAmount) * 100),
        currency:   'eur',
        duration:   'once',
        name:       'Descuento aplicado',
      });
      sessionParams.discounts = [{ coupon: coupon.id }];
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    // Guardar carrito en Supabase vinculado al session ID (para dropshipping Megasur)
    try {
      const cartItems = items.map(item => ({
        name:        String(item.name || '').trim().slice(0, 250),
        price:       parseFloat(item.price) || 0,
        qty:         Math.max(1, parseInt(item.qty) || 1),
        ean:         item.ean         || null,
        megasurCode: item.megasurCode || null,
        image:       item.image       || null,
      }));
      await db('cart_sessions', {
        method: 'POST',
        body: { stripe_session_id: session.id, items: cartItems },
      });
    } catch (cartErr) {
      // No bloquear el pago si falla el guardado del carrito
      logger.warn('checkout', 'cart_sessions save failed: ' + cartErr.message, logger.ctx(req));
    }

    return res.status(200).json({ url: session.url });

  } catch (error) {
    logger.error('checkout', error.message || String(error), logger.ctx(req));
    return res.status(500).json({
      error: error.message || 'Error procesando el pago. Inténtalo de nuevo.'
    });
  }
};
