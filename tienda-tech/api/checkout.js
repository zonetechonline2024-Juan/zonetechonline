module.exports = async (req, res) => {
  // CORS headers (vercel.json las añade también, pero las repetimos por seguridad)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const apiKey = process.env.STRIPE_SECRET_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Configuración de pago incompleta. Contacta con soporte.' });
    }

    // Stripe lazy init — dentro del try para capturar cualquier error de inicialización
    const stripe = require('stripe')(apiKey);

    // Vercel auto-parsea el body cuando Content-Type: application/json
    // Si por algún motivo llegara como string, lo parseamos aquí
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (_) { body = {}; }
    }
    if (!body || typeof body !== 'object') body = {};

    const { items, email, discountAmount, paymentMethod } = body;

    // Mapeo de métodos de pago al tipo de Stripe
    // Bizum requiere activación en: Stripe Dashboard → Configuración → Métodos de pago
    const stripeMethodTypes = paymentMethod === 'bizum' ? ['bizum'] : ['card'];

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
    return res.status(200).json({ url: session.url });

  } catch (error) {
    console.error('[ZTOnline] Checkout error:', error.message || error);
    return res.status(500).json({
      error: error.message || 'Error procesando el pago. Inténtalo de nuevo.'
    });
  }
};
