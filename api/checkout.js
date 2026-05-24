const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { items, email, discountAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'El carrito está vacío' });
    }

    const lineItems = items
      .filter(item => item.price > 0)
      .map(item => ({
        price_data: {
          currency: 'eur',
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.qty,
      }));

    if (lineItems.length === 0) {
      return res.status(400).json({ error: 'No hay artículos válidos en el carrito' });
    }

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
    };

    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      sessionParams.customer_email = email;
    }

    if (discountAmount && discountAmount > 0) {
      const coupon = await stripe.coupons.create({
        amount_off: Math.round(discountAmount * 100),
        currency: 'eur',
        duration: 'once',
        name: 'Descuento aplicado',
      });
      sessionParams.discounts = [{ coupon: coupon.id }];
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
};
