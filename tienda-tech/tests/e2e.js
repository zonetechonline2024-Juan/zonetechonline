'use strict';
/**
 * ZoneTechOnline — E2E Test Suite
 * Ejecutar: node tests/e2e.js
 * Requiere Node.js 18+
 */

const BASE = 'https://www.zonetechonline.com';
let pass = 0, fail = 0, skip = 0;
const failures = [];

async function req(url, opts = {}) {
  const r = await fetch(url, { redirect: 'manual', ...opts });
  return r;
}

function ok(name, condition, detail = '') {
  if (condition) {
    pass++;
    console.log(`  ✓ ${name}`);
  } else {
    fail++;
    failures.push({ name, detail });
    console.log(`  ✗ ${name}${detail ? ': ' + detail : ''}`);
  }
}

function section(name) {
  console.log(`\n── ${name} ──`);
}

// ── ROUTES ──────────────────────────────────────────────
async function testRoutes() {
  section('ROUTES');
  const routes200 = [
    '/', '/relojes', '/auriculares', '/altavoces', '/gaming', '/smartphones',
    '/garmin', '/apple', '/samsung', '/sony', '/jbl', '/jabra',
    '/smartwatch-running', '/auriculares-home-office', '/auriculares-cancelacion-ruido',
    '/auriculares-deporte', '/altavoz-exterior', '/teclado-gaming-mecanico',
    '/smartphone-5g-barato', '/smartwatch-salud', '/smartwatch-mujer', '/regalo-tecnologico',
    '/blog', '/contacto', '/nuestra-historia', '/nuestra-filosofia', '/bundles',
    '/checkout.html', '/checkout-success.html', '/checkout-cancel.html',
    '/politica-privacidad.html', '/aviso-legal.html', '/politica-cookies.html',
    '/terminos-condiciones.html', '/politica-envios.html', '/politica-devoluciones.html',
    '/login.html', '/register.html', '/lista-deseos.html',
    '/robots.txt', '/sitemap.xml',
    '/producto/1', '/producto/100',
    '/blog/garmin-vs-apple-watch-2025',
  ];
  for (const route of routes200) {
    const r = await req(`${BASE}${route}`);
    ok(`GET ${route} → 200`, r.status === 200, `got ${r.status}`);
  }

  // Redirects esperados
  const r308 = await req(`${BASE.replace('www.', '')}/`);
  ok('no-www → www (308)', r308.status === 308, `got ${r308.status}`);
}

// ── SECURITY HEADERS ────────────────────────────────────
async function testSecurityHeaders() {
  section('SECURITY HEADERS');
  const r = await req(BASE);
  const csp = r.headers.get('content-security-policy') || '';
  ok('CSP presente', csp.length > 0);
  ok('CSP: script-src-elem', csp.includes('script-src-elem'));
  ok('CSP: Google Ads', csp.includes('googleadservices.com'));
  ok('CSP: Stripe', csp.includes('js.stripe.com'));
  ok('HSTS', (r.headers.get('strict-transport-security') || '').includes('max-age'));
  ok('X-Frame-Options', r.headers.get('x-frame-options') === 'SAMEORIGIN');
  ok('X-Content-Type-Options', r.headers.get('x-content-type-options') === 'nosniff');
}

// ── SEO ─────────────────────────────────────────────────
async function testSEO() {
  section('SEO');
  const homeText = await (await req(BASE)).text();
  ok('Home: canonical presente', homeText.includes('rel="canonical"'));
  ok('Home: meta description', homeText.includes('name="description"'));
  ok('Home: og:title', homeText.includes('og:title'));
  ok('Home: JSON-LD schema', homeText.includes('application/ld+json'));
  ok('Home: GA4 (G-0FVJFMXJWB)', homeText.includes('G-0FVJFMXJWB'));
  ok('Home: Google Ads (AW-16672492666)', homeText.includes('AW-16672492666'));

  const prodText = await (await req(`${BASE}/producto/1`)).text();
  ok('Producto SSR: title dinámico', /\<title[^>]*>[^|]+\|/.test(prodText));
  ok('Producto SSR: "@type":"Product"', prodText.includes('"@type":"Product"'));
  ok('Producto SSR: AW config', prodText.includes('AW-16672492666'));

  const sitemapText = await (await req(`${BASE}/sitemap.xml`)).text();
  ok('Sitemap: XML válido', sitemapText.includes('<urlset'));
  const sitemapCount = (sitemapText.match(/<url>/g) || []).length;
  ok(`Sitemap: ≥ 100 URLs (tiene ${sitemapCount})`, sitemapCount >= 100);

  const robotsText = await (await req(`${BASE}/robots.txt`)).text();
  ok('Robots.txt: Sitemap referenciado', robotsText.includes('Sitemap:'));
  ok('Robots.txt: /admin/ bloqueado', robotsText.includes('Disallow: /admin/'));
  ok('Robots.txt: /checkout.html bloqueado', robotsText.includes('Disallow: /checkout.html'));
}

// ── CHECKOUT API ─────────────────────────────────────────
async function testCheckout() {
  section('CHECKOUT API');

  // POST válido
  const validBody = JSON.stringify({
    items: [{ name: 'Test Watch', price: '299.99', qty: 1 }],
    email: 'test@zonetechonline.com',
  });
  const r1 = await req(`${BASE}/api/checkout`, {
    method: 'POST', body: validBody,
    headers: { 'Content-Type': 'application/json' },
  });
  const d1 = await r1.json();
  ok('Checkout: sesión Stripe creada', r1.status === 200 && d1.url, `status=${r1.status}`);
  ok('Checkout: URL comienza con checkout.stripe.com',
    (d1.url || '').startsWith('https://checkout.stripe.com'), d1.url);

  // Carrito vacío
  const r2 = await req(`${BASE}/api/checkout`, {
    method: 'POST',
    body: JSON.stringify({ items: [], email: 'test@test.com' }),
    headers: { 'Content-Type': 'application/json' },
  });
  ok('Checkout: carrito vacío rechazado (400)', r2.status === 400, `got ${r2.status}`);

  // GET rechazado
  const r3 = await req(`${BASE}/api/checkout`, { method: 'GET' });
  ok('Checkout: GET rechazado (405)', r3.status === 405, `got ${r3.status}`);

  // Multi-producto
  const r4 = await req(`${BASE}/api/checkout`, {
    method: 'POST',
    body: JSON.stringify({
      items: [
        { name: 'Watch A', price: '199.99', qty: 2 },
        { name: 'Earphones B', price: '89.99', qty: 1 },
      ],
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  ok('Checkout: multi-producto OK', r4.status === 200, `got ${r4.status}`);
}

// ── MERCHANT CENTER FEED ──────────────────────────────────
async function testFeed() {
  section('MERCHANT CENTER FEED');
  const r = await req(`${BASE}/api/feed`);
  ok('Feed: status 200', r.status === 200, `got ${r.status}`);
  const text = await r.text();
  ok('Feed: XML válido', text.includes('<?xml') && text.includes('<rss'));
  const itemCount = (text.match(/<item>/g) || []).length;
  ok(`Feed: ≥ 100 productos (tiene ${itemCount})`, itemCount >= 100, `${itemCount} productos`);
  ok('Feed: identifier_exists=true', text.includes('<g:identifier_exists>true</g:identifier_exists>'));
  ok('Feed: shipping ES', text.includes('<g:country>ES</g:country>'));
  ok('Feed: precios EUR', text.includes('EUR'));
  ok('Feed: no identifier_exists=false', !text.includes('<g:identifier_exists>false</g:identifier_exists>'));
}

// ── ADMIN API SECURITY ────────────────────────────────────
async function testAdminSecurity() {
  section('ADMIN API SECURITY');

  const endpoints = ['/api/admin-stats', '/api/admin-orders', '/api/admin-products', '/api/admin-customers'];
  for (const ep of endpoints) {
    const r = await req(`${BASE}${ep}`, { method: 'GET' });
    ok(`${ep}: rechaza sin auth (401)`, r.status === 401, `got ${r.status}`);

    const r2 = await req(`${BASE}${ep}`, {
      method: 'GET',
      headers: { 'X-Admin-Key': 'wrong-key-123' },
    });
    ok(`${ep}: rechaza key incorrecta (401)`, r2.status === 401, `got ${r2.status}`);
  }
}

// ── STRIPE WEBHOOK SECURITY ───────────────────────────────
async function testWebhookSecurity() {
  section('STRIPE WEBHOOK SECURITY');

  // Sin firma
  const r1 = await req(`${BASE}/api/stripe-webhook`, {
    method: 'POST',
    body: JSON.stringify({ type: 'checkout.session.completed' }),
    headers: { 'Content-Type': 'application/json' },
  });
  ok('Webhook: rechaza sin stripe-signature (400/500)', r1.status >= 400, `got ${r1.status}`);

  // Con firma inválida
  const r2 = await req(`${BASE}/api/stripe-webhook`, {
    method: 'POST',
    body: JSON.stringify({ type: 'checkout.session.completed' }),
    headers: {
      'Content-Type': 'application/json',
      'stripe-signature': 't=123456,v1=invalidsignature',
    },
  });
  ok('Webhook: rechaza firma inválida (400)', r2.status === 400, `got ${r2.status}`);

  // GET rechazado
  const r3 = await req(`${BASE}/api/stripe-webhook`, { method: 'GET' });
  ok('Webhook: GET rechazado (405)', r3.status === 405, `got ${r3.status}`);
}

// ── ADSBOT ────────────────────────────────────────────────
async function testAdsBot() {
  section('GOOGLE ADSBOT');
  const ua = 'AdsBot-Google (+http://www.google.com/adsbot.html)';
  const pages = ['/', '/relojes', '/producto/1'];
  for (const p of pages) {
    const r = await req(`${BASE}${p}`, { headers: { 'User-Agent': ua } });
    ok(`AdsBot: ${p} → 200`, r.status === 200, `got ${r.status}`);
  }
}

// ── IMAGES ───────────────────────────────────────────────
async function testImages() {
  section('PRODUCT IMAGES (sample 10)');
  const feedText = await (await req(`${BASE}/api/feed`)).text();
  const urls = [...feedText.matchAll(/<g:image_link>([^<]+)<\/g:image_link>/g)]
    .map(m => m[1]).slice(0, 10);
  let imgPass = 0;
  for (const url of urls) {
    const r = await req(url, { method: 'HEAD' });
    if (r.status === 200) imgPass++;
    else ok(`Image: ${url.split('/').pop()} → 200`, false, `got ${r.status}`);
  }
  ok(`Imágenes: ${imgPass}/${urls.length} OK`, imgPass === urls.length);
}

// ── SENSITIVE FILES ───────────────────────────────────────
async function testSensitiveFiles() {
  section('ARCHIVOS SENSIBLES');
  const shouldBeGone = [
    '/debug-pcc-result.html', '/debug-prod-s25fe.html',
    '/image-audit-report.json', '/upload-log.txt', '/enrich-log.txt',
  ];
  for (const f of shouldBeGone) {
    const r = await req(`${BASE}${f}`, { method: 'HEAD' });
    ok(`${f}: no accesible (404)`, r.status === 404, `got ${r.status} — EXPUESTO`);
  }
}

// ── MAIN ─────────────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════╗');
  console.log('║  ZoneTechOnline — E2E Test Suite         ║');
  console.log(`║  ${new Date().toISOString()}      ║`);
  console.log('╚══════════════════════════════════════════╝');

  await testRoutes();
  await testSecurityHeaders();
  await testSEO();
  await testCheckout();
  await testFeed();
  await testAdminSecurity();
  await testWebhookSecurity();
  await testAdsBot();
  await testImages();
  await testSensitiveFiles();

  console.log('\n══════════════════════════════════════════');
  console.log(`RESULTADO: ${pass + fail} tests | ✓ ${pass} PASS | ✗ ${fail} FAIL`);
  if (failures.length > 0) {
    console.log('\nFALLOS:');
    failures.forEach(f => console.log(`  ✗ ${f.name}${f.detail ? ' — ' + f.detail : ''}`));
  }
  console.log('══════════════════════════════════════════');

  if (fail === 0) {
    console.log('\n🟢 GO — Todos los tests pasan');
  } else {
    console.log(`\n🔴 NO-GO — ${fail} test(s) fallando`);
    process.exit(1);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
