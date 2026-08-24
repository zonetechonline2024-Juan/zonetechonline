'use strict';
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const STORE = 'https://www.zonetechonline.com';
const HTML_TEMPLATE = fs.readFileSync(path.join(__dirname, '../producto.html'), 'utf8');

const GCAT = {
  'relojes':         '543',
  'auriculares':     '299',
  'altavoces':       '1384',
  'teclados gaming': '3895',
  'smartphones':     '267',
};

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

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function productItem(p) {
  const link      = `${STORE}/producto/${p.id}`;
  const imageLink = p.image ? `${STORE}/${p.image.replace(/^\//, '')}` : '';
  const price     = `${(parseFloat(p.price) || 0).toFixed(2)} EUR`;
  const gcat      = GCAT[p.category] || '888';
  const brand     = esc(p.brand || 'ZoneTechOnline');
  const sku       = p.specs?.SKU || p.specs?.['P/N Depau'] || `ZT-${p.id}`;
  const catPrefix = {
    'relojes': 'Smartwatch', 'auriculares': 'Auriculares',
    'altavoces': 'Altavoz', 'teclados gaming': 'Teclado Gaming', 'smartphones': 'Smartphone'
  }[p.category] || '';
  const title = catPrefix ? `${catPrefix} ${p.name}` : p.name;

  return `
    <item>
      <g:id>${esc(String(p.id))}</g:id>
      <g:title>${esc(title.slice(0, 150))}</g:title>
      <g:description>${esc((p.description || p.name).slice(0, 5000))}</g:description>
      <g:link>${esc(link)}</g:link>
      <g:image_link>${esc(imageLink)}</g:image_link>
      <g:price>${price}</g:price>
      <g:availability>${p.inStock === false ? 'out of stock' : 'in stock'}</g:availability>
      <g:condition>new</g:condition>
      <g:brand>${brand}</g:brand>
      <g:mpn>${esc(sku)}</g:mpn>
      <g:google_product_category>${gcat}</g:google_product_category>
      <g:product_type>${esc(p.category)}</g:product_type>
      <g:identifier_exists>false</g:identifier_exists>
      <g:shipping>
        <g:country>ES</g:country>
        <g:service>Estándar MRW/SEUR</g:service>
        <g:price>0.00 EUR</g:price>
      </g:shipping>
    </item>`;
}

function serveProductPage(p, res) {
  const url    = `${STORE}/producto/${p.id}`;
  const imgUrl = p.image ? `${STORE}/${String(p.image).replace(/^\//, '')}` : `${STORE}/img/og-cover.jpg`;
  const price  = (parseFloat(p.price) || 0).toFixed(2);
  const title  = esc(`${p.name} | ZoneTechOnline`);
  const desc   = esc((p.description || p.name).slice(0, 160));
  const avail  = p.inStock === false ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock';

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

  const html = HTML_TEMPLATE
    .replace('<title id="pp-title">Producto | ZoneTechOnline</title>',
             `<title id="pp-title">${title}</title>`)
    .replace('content="Tecnología premium con garantía legal 2 años. Envío gratuito. Devolución 30 días hábiles."',
             `content="${desc}"`)
    .replace('href="https://www.zonetechonline.com/producto/"',
             `href="${url}"`)
    .replace('id="pp-og-url" content="https://www.zonetechonline.com/producto/"',
             `id="pp-og-url" content="${esc(url)}"`)
    .replace('id="pp-og-title" content="ZoneTechOnline"',
             `id="pp-og-title" content="${title}"`)
    .replace('id="pp-og-desc" content=""',
             `id="pp-og-desc" content="${desc}"`)
    .replace('id="pp-og-image" content="https://www.zonetechonline.com/img/og-cover.jpg"',
             `id="pp-og-image" content="${esc(imgUrl)}"`)
    .replace('<script type="application/ld+json" id="pp-schema">{"@context":"https://schema.org"}</script>',
             `<script type="application/ld+json" id="pp-schema">${schema}</script>`);

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  res.status(200).send(html);
}

module.exports = (req, res) => {
  // Si viene con ?page=producto&id=X → servir HTML del producto (para SSR/Google)
  if (req.query.page === 'producto') {
    const id       = parseInt(req.query.id, 10);
    const products = getProducts();
    const p        = products.find(x => x.id === id);
    if (!p) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(404).send(HTML_TEMPLATE);
    }
    return serveProductPage(p, res);
  }

  // Feed XML para Google Merchant Center
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  try {
    const products = getProducts().filter(p => p.id && p.name && p.price);
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>ZoneTechOnline — Tecnología Premium</title>
    <link>${STORE}</link>
    <description>Wearables y tecnología premium: relojes inteligentes, auriculares, altavoces, smartphones y periféricos de las mejores marcas europeas.</description>
    ${products.map(productItem).join('')}
  </channel>
</rss>`;
    res.status(200).send(xml);
  } catch (err) {
    console.error('[feed]', err.message);
    res.status(500).send('<?xml version="1.0"?><error>' + esc(err.message) + '</error>');
  }
};
