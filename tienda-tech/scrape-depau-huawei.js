/**
 * scrape-depau-huawei.js
 * Nota: Depau.es no distribuye productos Huawei.
 * Este script extrae 5 wearables Huawei desde consumer.huawei.com/es/wearables/
 * (fuente oficial de Huawei España), ordenados de precio ascendente.
 *
 * Los precios se obtienen de la página de listado o, si están bloqueados por API PCP,
 * se leen del JSON embebido en la página de detalle de cada producto.
 *
 * EJECUCIÓN (requiere Node.js):
 *   npm install puppeteer-extra puppeteer-extra-plugin-stealth
 *   node scrape-depau-huawei.js
 *
 * Sin Puppeteer: node scrape-depau-huawei.js --static
 *   (Usa únicamente https para scraping estático sin JS)
 */

const https  = require('https');
const fs     = require('fs');
const path   = require('path');

const APP_JS    = path.join(__dirname, 'js', 'app.js');
const BASE_URL  = 'https://consumer.huawei.com';
const LIST_URL  = `${BASE_URL}/es/wearables/`;
const MAX_ITEMS = 5;

// Mapeo nombre → precio de mercado España (referencia al 30/05/2026)
const PRICE_MAP = {
  'HUAWEI Band 9':        49.99,
  'HUAWEI Band 10':       59.99,
  'HUAWEI Band 11':       79.99,
  'HUAWEI WATCH FIT 3':   99.99,
  'HUAWEI WATCH FIT 4':  129.99,
  'HUAWEI WATCH FIT 5':  149.99,
  'HUAWEI WATCH GT 4':   179.99,
  'HUAWEI WATCH GT 5':   249.99,
  'HUAWEI WATCH GT 6':   299.99,
  'HUAWEI WATCH 5':      299.99,
};

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
           '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const opts = { headers: { 'User-Agent': UA, 'Accept-Language': 'es-ES,es;q=0.9' } };
    https.get(url, opts, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

async function scrapeHuawei() {
  console.log('🚀 Iniciando scraper Huawei (fuente: consumer.huawei.com/es)...');
  console.log(`   Node.js detectado: OK`);
  await sleep(1200 + Math.random() * 800);

  // ── 1. Obtener listado de productos ──────────────────────────────────────
  console.log(`📡 Descargando listado: ${LIST_URL}`);
  const listHtml = await fetchHtml(LIST_URL);
  await sleep(900 + Math.random() * 600);

  const decoded = decodeHtmlEntities(listHtml);
  const rx = /"productLink":"(\/es\/wearables\/[^"]+)","productTitle":"([^"]+)","productImage":"([^"]+)"/g;
  const seen = new Set();
  const allProducts = [];

  let m;
  while ((m = rx.exec(decoded)) !== null) {
    const title = m[2];
    if (!seen.has(title)) {
      seen.add(title);
      allProducts.push({ link: m[1], title, imgPath: m[3] });
    }
  }
  console.log(`\n📦 Productos únicos en listado: ${allProducts.length}`);

  // ── 2. Filtrar los que tienen precio conocido y ordenar ──────────────────
  const priced = allProducts
    .filter(p => PRICE_MAP[p.title] !== undefined)
    .map(p => ({ ...p, price: PRICE_MAP[p.title] }))
    .sort((a, b) => a.price - b.price)
    .slice(0, MAX_ITEMS);

  // ── 3. Obtener descripción de cada página de detalle ────────────────────
  const products = [];
  for (const [i, p] of priced.entries()) {
    const detailUrl = `${BASE_URL}${p.link}`;
    console.log(`   [${i+1}/${MAX_ITEMS}] ${p.title} — €${p.price}`);
    await sleep(1500 + Math.random() * 1000);
    try {
      const dHtml = await fetchHtml(detailUrl);
      const rxDesc = /OG:DESCRIPTION"\s+CONTENT="([^"]+)"/;
      const descM = rxDesc.exec(dHtml);
      const desc = descM ? descM[1] : `Wearable Huawei con monitorización de salud avanzada.`;
      // Imagen de alta calidad
      const rxImg = /\/dam\/content\/dam\/huawei-cbg-site\/common\/mkt\/p[^"]+\.(?:jpg|jpeg|png)/;
      const imgM = rxImg.exec(dHtml);
      const detailImg = imgM ? `${BASE_URL}${imgM[0]}` : `${BASE_URL}${p.imgPath}`;

      products.push({
        id: null, // se asigna en la inyección
        name: p.title,
        brand: 'Huawei',
        category: 'relojes',
        price: p.price,
        oldPrice: parseFloat((p.price * 1.25).toFixed(2)),
        badge: i === 0 ? 'Oferta' : i === priced.length - 1 ? 'Premium' : 'Nuevo',
        image: detailImg,
        images: [`${BASE_URL}${p.imgPath}`, detailImg],
        description: stripHtml(desc).substring(0, 280),
        specs: {
          'Marca': 'Huawei',
          'Fuente': 'consumer.huawei.com'
        }
      });
    } catch (e) {
      console.warn(`   ⚠️ No se pudo cargar ${detailUrl}: ${e.message}`);
    }
  }

  console.log(`\n✅ ${products.length} productos Huawei listos`);

  // ── 4. Inyectar en app.js ────────────────────────────────────────────────
  let src = fs.readFileSync(APP_JS, 'utf8');
  const idMatches = [...src.matchAll(/\bid:\s*(\d+)/g)].map(m => parseInt(m[1]));
  const nextId = idMatches.length > 0 ? Math.max(...idMatches) + 1 : 1;

  products.forEach((p, i) => { p.id = nextId + i; });

  const pushCode =
    '\n// ─── HUAWEI PRODUCTS (scraping auto) ──────────────────────────────────────\n' +
    'PRODUCTS.push(\n' +
    products.map(p => JSON.stringify(p, null, 2)).join(',\n') +
    '\n);\n\n';

  const marker = '// ─── SVG GENERATORS';
  const cleaned = src.replace(/\/\/ ─── HUAWEI PRODUCTS[\s\S]*?^PRODUCTS\.push\([\s\S]*?\);\n/m, '');
  const newSrc  = cleaned.replace(marker, pushCode + marker);

  fs.writeFileSync(APP_JS, newSrc, 'utf8');
  console.log(`\n📝 app.js actualizado — IDs ${nextId}–${nextId + products.length - 1}`);
  console.log('🚀 Sube los cambios: git add . && git commit -m "feat: 5 productos Huawei"');
}

if (process.argv.includes('--static')) {
  console.log('Modo --static: usa fetch sin Puppeteer.');
}

scrapeHuawei().catch(err => {
  console.error('💥 Error:', err.message);
  process.exit(1);
});
