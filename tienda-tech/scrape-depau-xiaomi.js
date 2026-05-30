/**
 * scrape-depau-xiaomi.js
 * Extrae 5 productos Xiaomi de Depau.es (precio ASC) e inyecta en app.js
 *
 * INSTALACIÓN:
 *   npm install puppeteer-extra puppeteer-extra-plugin-stealth cheerio
 *
 * EJECUCIÓN:
 *   node scrape-depau-xiaomi.js
 */

const puppeteer  = require('puppeteer-extra');
const Stealth    = require('puppeteer-extra-plugin-stealth');
const cheerio    = require('cheerio');
const fs         = require('fs');
const path       = require('path');

puppeteer.use(Stealth());

// ── CONFIG ───────────────────────────────────────────────────────────────────
const TARGET_URL   = 'https://www.depau.es/buscar?q=xiaomi&order=price&orderby=asc';
const APP_JS_PATH  = path.join(__dirname, 'js', 'app.js');
const MAX_PRODUCTS = 5;

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
           '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// Mapeo de palabras clave → categoría de la tienda
function detectCategory(name) {
  const n = name.toLowerCase();
  if (/reloj|watch|band|pulsera|smartwatch/.test(n)) return 'relojes';
  if (/auricular|buds|headphone|ear|in-ear/.test(n))  return 'auriculares';
  if (/altavoz|speaker|sonos|marshall/.test(n))        return 'altavoces';
  if (/gafa|glass|ray-ban/.test(n))                    return 'gafas';
  if (/anillo|ring/.test(n))                           return 'anillos';
  return 'auriculares'; // fallback
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ── SCRAPER ──────────────────────────────────────────────────────────────────
async function scrapeDepauXiaomi() {
  console.log('🚀 Iniciando scraper Depau Xiaomi...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1440,900'
    ]
  });

  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: 1440, height: 900 });
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

  console.log(`📡 Navegando a: ${TARGET_URL}`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  await sleep(1500 + Math.random() * 1000);

  // Aceptar cookies si aparece el banner
  try {
    const cookieBtn = await page.$('[id*="cookie"] button, .cookie-accept, #aceptar-cookies, .btn-aceptar');
    if (cookieBtn) {
      await cookieBtn.click();
      console.log('🍪 Banner de cookies aceptado');
      await sleep(800);
    }
  } catch (_) {}

  // Extraer HTML del listado
  const html = await page.content();
  await browser.close();

  // ── PARSEAR CON CHEERIO ──────────────────────────────────────────────────
  const $ = cheerio.load(html);
  const products = [];

  // Depau usa <div class="item ..."> con data-codigo, data-url, data-partnumber
  $('.item[data-codigo]').each((i, el) => {
    if (products.length >= MAX_PRODUCTS) return false;

    const $el  = $(el);
    const sku  = $el.attr('data-codigo') || '';
    const url  = $el.attr('data-url') || '';
    const pn   = $el.attr('data-partnumber') || '';

    // Nombre del producto
    const name = $el.find('.titulo-producto').text().trim();
    if (!name) return;

    // Imagen (CDN Depau — upgradear a 448x448)
    let imgSrc = $el.find('img').first().attr('src') || '';
    imgSrc = imgSrc.replace('/160/160/', '/448/448/');
    if (!imgSrc.startsWith('http')) imgSrc = 'https://cdn2.depau.es' + imgSrc;

    // Precio — requiere login, se obtiene del texto si está visible
    const priceRaw = $el.find('.precio .precio-num, .precio strong, .price-amount').text()
      .replace(/[^\d,.]/g, '').replace(',', '.').trim();
    const price = priceRaw ? parseFloat(priceRaw) : null;

    // Rating
    const ratingStyle = $el.find('.rating-stars').attr('style') || '';
    const ratingMatch = ratingStyle.match(/width:\s*([\d.]+)%/);
    const rating = ratingMatch ? (parseFloat(ratingMatch[1]) / 20).toFixed(1) : '4.5';

    // Categoría automática
    const category = detectCategory(name);

    products.push({
      id:          i + 1,
      name,
      brand:       'Xiaomi',
      category,
      price:       price || 0,        // 0 si requiere login
      description: name,              // Se puede enriquecer manualmente
      image:       imgSrc,
      images:      [imgSrc],
      badge:       'Nuevo',
      specs: {
        'Marca':    'Xiaomi',
        'P/N':      pn,
        'SKU':      sku,
        'Fuente':   'Depau.es'
      }
    });

    console.log(`  ✅ [${i+1}] ${name} — img: ${imgSrc.substring(0,60)}...`);
  });

  console.log(`\n📦 ${products.length} productos extraídos`);

  if (products.length === 0) {
    console.error('❌ No se encontraron productos. Depau puede requerir login para precios.');
    console.log('💡 Tip: Registra una cuenta en depau.es y vuelve a ejecutar con sesión activa.');
    return;
  }

  // ── ORDENAR POR PRECIO ASC (los que tengan precio) ───────────────────────
  products.sort((a, b) => a.price - b.price);

  // ── INYECTAR EN app.js ───────────────────────────────────────────────────
  injectIntoAppJs(products);
}

// ── INYECTOR EN app.js ───────────────────────────────────────────────────────
function injectIntoAppJs(products) {
  let src = fs.readFileSync(APP_JS_PATH, 'utf8');

  const marker = 'const PRODUCTS = [';
  const idx = src.indexOf(marker);
  if (idx < 0) {
    console.error('❌ No se encontró "const PRODUCTS = [" en app.js');
    return;
  }

  // Encontrar el cierre del array
  let depth = 0, closeIdx = idx + marker.length - 1;
  for (let i = closeIdx; i < src.length; i++) {
    if (src[i] === '[') depth++;
    if (src[i] === ']') { depth--; if (depth === 0) { closeIdx = i; break; } }
  }

  const serialized = JSON.stringify(products, null, 2)
    .replace(/"([a-zA-Z_][a-zA-Z0-9_]*)"\s*:/g, '$1:');   // quita comillas de keys

  const newArray = `${marker}\n${serialized.slice(1, -1)}\n]`;
  const newSrc   = src.substring(0, idx) + newArray + src.substring(closeIdx + 1);

  fs.writeFileSync(APP_JS_PATH, newSrc, 'utf8');
  console.log(`\n✅ app.js actualizado con ${products.length} productos Xiaomi`);
  console.log('🚀 Sube los cambios con: git add . && git commit -m "feat: xiaomi products from depau"');
}

// ── EJECUTAR ─────────────────────────────────────────────────────────────────
scrapeDepauXiaomi().catch(err => {
  console.error('💥 Error en scraper:', err.message);
  process.exit(1);
});
