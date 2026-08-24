'use strict';
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const STORE = 'https://www.zonetechonline.com';
const HTML  = fs.readFileSync(path.join(__dirname, '../producto.html'), 'utf8');

function loadProducts() {
  const code = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8')
                 .replace('const PRODUCTS', 'var PRODUCTS')
                 .replace('const FILTER_MAP', 'var FILTER_MAP');
  const noop = () => {};
  const ph   = { get: () => new Proxy(noop, ph), apply: () => {}, set: () => true };
  const sb   = {
    PRODUCTS: [], FILTER_MAP: {},
    window: new Proxy(noop, ph), document: new Proxy(noop, ph),
    localStorage: { getItem: noop, setItem: noop, removeItem: noop },
    sessionStorage: { getItem: noop, setItem: noop, removeItem: noop },
    navigator: { userAgent: '' }, location: { href:'', search:'', pathname:'/', hash:'' },
    history: { pushState: noop }, console: { log: noop, warn: noop, error: noop },
    setTimeout: noop, setInterval: noop, clearTimeout: noop, clearInterval: noop,
    requestAnimationFrame: noop, cancelAnimationFrame: noop,
    matchMedia: () => ({ matches: false, addListener: noop, removeEventListener: noop }),
    addEventListener: noop, removeEventListener: noop, dispatchEvent: noop,
    getComputedStyle: () => ({}), scrollTo: noop, alert: noop,
    Image: function() {}, IntersectionObserver: function() { this.observe = noop; },
    ResizeObserver:  function() { this.observe = noop; },
    MutationObserver: function() { this.observe = noop; this.disconnect = noop; },
    performance: { now: Date.now },
    fetch: () => Promise.resolve({ json: () => Promise.resolve({}) }),
    Math, Date, JSON, Array, Object, String, Number, Boolean, RegExp, Promise, Error,
    parseInt, parseFloat, isNaN, isFinite, encodeURIComponent, decodeURIComponent,
  };
  try { vm.runInNewContext(code, sb, { timeout: 8000 }); } catch (_) {}
  return sb.PRODUCTS || [];
}

let _cache = null;
function getProducts() {
  if (!_cache) _cache = loadProducts();
  return _cache;
}

function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

module.exports = (req, res) => {
  const id  = parseInt(req.query.id, 10);
  const products = getProducts();
  const p   = products.find(x => x.id === id);

  if (!p) {
    // Producto no encontrado — devuelve la página genérica
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(404).send(HTML);
    return;
  }

  const url      = `${STORE}/producto/${p.id}`;
  const imgUrl   = p.image ? `${STORE}/${String(p.image).replace(/^\//, '')}` : `${STORE}/img/og-cover.jpg`;
  const price    = (parseFloat(p.price) || 0).toFixed(2);
  const title    = esc(`${p.name} | ZoneTechOnline`);
  const desc     = esc((p.description || p.name).slice(0, 160));
  const brand    = esc(p.brand || 'ZoneTechOnline');
  const avail    = p.inStock === false ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock';
  const availTxt = p.inStock === false ? 'out of stock' : 'in stock';

  const schema = JSON.stringify({
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: p.name,
    description: p.description || p.name,
    image: imgUrl,
    brand: { '@type': 'Brand', name: p.brand || 'ZoneTechOnline' },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'EUR',
      price,
      priceValidUntil: '2027-12-31',
      availability: avail,
      itemCondition: 'https://schema.org/NewCondition',
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'ES',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 30,
        returnMethod: 'https://schema.org/ReturnByMail',
        returnFees: 'https://schema.org/FreeReturn'
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'EUR' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
          transitTime:  { '@type': 'QuantitativeValue', minValue: 5, maxValue: 8, unitCode: 'DAY' }
        },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'ES' }
      },
      seller: { '@type': 'Organization', name: 'ZoneTechOnline', url: STORE }
    }
  });

  // Inyectar datos del producto en el HTML
  let html = HTML
    // Título
    .replace(
      '<title id="pp-title">Producto | ZoneTechOnline</title>',
      `<title id="pp-title">${title}</title>`
    )
    // Meta description
    .replace(
      'content="Tecnología premium con garantía legal 2 años. Envío gratuito. Devolución 30 días hábiles."',
      `content="${desc}"`
    )
    // Canonical
    .replace(
      `href="https://www.zonetechonline.com/producto/"`,
      `href="${url}"`
    )
    // OG URL
    .replace(
      `id="pp-og-url" content="https://www.zonetechonline.com/producto/"`,
      `id="pp-og-url" content="${esc(url)}"`
    )
    // OG Title
    .replace(
      `id="pp-og-title" content="ZoneTechOnline"`,
      `id="pp-og-title" content="${title}"`
    )
    // OG Description
    .replace(
      `id="pp-og-desc" content=""`,
      `id="pp-og-desc" content="${desc}"`
    )
    // OG Image
    .replace(
      `id="pp-og-image" content="https://www.zonetechonline.com/img/og-cover.jpg"`,
      `id="pp-og-image" content="${esc(imgUrl)}"`
    )
    // Schema.org JSON-LD
    .replace(
      `<script type="application/ld+json" id="pp-schema">{"@context":"https://schema.org"}</script>`,
      `<script type="application/ld+json" id="pp-schema">${schema}</script>`
    );

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  res.status(200).send(html);
};
