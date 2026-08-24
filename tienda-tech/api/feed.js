'use strict';
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const STORE = 'https://www.zonetechonline.com';

const FILTER = {
  'relojes':         'watches',
  'auriculares':     'headphones',
  'altavoces':       'speakers',
  'teclados gaming': 'peripherals',
  'smartphones':     'smartphones',
};

const GCAT = {
  'relojes':         '543',   // Electronics > Communications > Telephony > Smart Watches
  'auriculares':     '299',   // Electronics > Audio > Headphones
  'altavoces':       '1384',  // Electronics > Audio > Speakers
  'teclados gaming': '3895',  // Electronics > Computers > Peripherals > Keyboards
  'smartphones':     '267',   // Electronics > Communications > Telephony > Mobile Phones
};

function loadProducts() {
  const code = fs.readFileSync(path.join(__dirname, '../js/app.js'), 'utf8')
                 .replace('const PRODUCTS', 'var PRODUCTS')
                 .replace('const FILTER_MAP', 'var FILTER_MAP');

  // Sandbox mínimo para ejecutar las definiciones de producto (que vienen antes del código UI)
  const noop = () => {};
  const proxyHandler = { get: () => new Proxy(noop, proxyHandler), apply: () => {}, set: () => true };
  const sandbox = {
    PRODUCTS: [], FILTER_MAP: {},
    window: new Proxy(noop, proxyHandler),
    document: new Proxy(noop, proxyHandler),
    localStorage: { getItem: noop, setItem: noop, removeItem: noop },
    sessionStorage: { getItem: noop, setItem: noop, removeItem: noop },
    navigator: { userAgent: '' },
    location: { href: '', search: '', pathname: '/', hash: '' },
    history: { pushState: noop },
    console: { log: noop, warn: noop, error: noop },
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

  try { vm.runInNewContext(code, sandbox, { timeout: 8000 }); }
  catch (_) { /* se espera fallo en código UI del navegador — productos ya cargados */ }

  return sandbox.PRODUCTS || [];
}

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function productItem(p) {
  const filter    = FILTER[p.category] || 'all';
  const link      = `${STORE}/producto/${p.id}`;
  const imageLink = p.image ? `${STORE}/${p.image.replace(/^\//, '')}` : '';
  const price     = `${(parseFloat(p.price) || 0).toFixed(2)} EUR`;
  const gcat      = GCAT[p.category] || '888';
  const brand     = esc(p.brand || 'ZoneTechOnline');
  const sku       = p.specs?.SKU || p.specs?.['P/N Depau'] || `ZT-${p.id}`;

  // Prefijo de categoría en el título para evitar falsos positivos de Google
  // (ej. "GINESTRA" confundido con bebida alcohólica)
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

module.exports = (req, res) => {
  // Google Merchant Center hace GET periódico a esta URL
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  try {
    const products = loadProducts().filter(p => p.id && p.name && p.price);

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
