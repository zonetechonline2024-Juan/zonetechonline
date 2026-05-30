/**
 * scrape-depau-amazfit.js
 * Nota: Depau.es no distribuye Amazfit.
 * Este script extrae 5 productos Amazfit desde la API pública Shopify de es.amazfit.com
 * ordenados de precio ascendente (solo smartwatches/wearables, sin accesorios).
 *
 * EJECUCIÓN (requiere Node.js):
 *   node scrape-depau-amazfit.js
 *
 * No necesita dependencias externas.
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const API_URL   = 'https://es.amazfit.com/collections/all/products.json?limit=50&sort_by=price-ascending';
const APP_JS    = path.join(__dirname, 'js', 'app.js');
const MAX_ITEMS = 5;

// Palabras clave que indican accesorios a excluir
const SKIP_PATTERN = /correa|cable|base de carga|auricular|brazalete/i;

// Mapeo de product_type → categoría de la tienda
function detectCategory(type, title) {
  const t = (type + ' ' + title).toLowerCase();
  if (/ring|anillo/.test(t))       return 'anillos';
  if (/glass|gafa/.test(t))        return 'gafas';
  if (/headphone|auricular/.test(t)) return 'auriculares';
  return 'relojes';
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#\d+;/g, '').replace(/\s+/g, ' ').trim()
    .substring(0, 280);
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function scrapeAmazfit() {
  console.log('🚀 Iniciando scraper Amazfit (fuente: es.amazfit.com)...');
  console.log(`📡 URL: ${API_URL}`);

  const json = await fetchJson(API_URL);
  console.log(`📦 Total productos en API: ${json.products.length}`);

  // Filtrar y ordenar
  const products = json.products
    .filter(p => !SKIP_PATTERN.test(p.title))
    .map(p => {
      const minPrice = Math.min(...p.variants.map(v => parseFloat(v.price)));
      const maxPrice = Math.max(...p.variants.map(v => parseFloat(v.price)));
      const imgs = p.images.map(i => i.src);
      return { title: p.title, minPrice, maxPrice, type: p.product_type, imgs, desc: stripHtml(p.body_html), sku: p.variants[0].sku };
    })
    .sort((a, b) => a.minPrice - b.minPrice)
    .slice(0, MAX_ITEMS);

  console.log('\n=== 5 productos Amazfit seleccionados ===');
  products.forEach((p, i) => console.log(`  [${i+1}] ${p.title} — ${p.minPrice}€`));

  // Leer IDs existentes en PRODUCTS para asignar los siguientes
  const src = fs.readFileSync(APP_JS, 'utf8');
  const idMatches = [...src.matchAll(/\bid:\s*(\d+)/g)].map(m => parseInt(m[1]));
  const nextId = idMatches.length > 0 ? Math.max(...idMatches) + 1 : 1;

  // Serializar
  const entries = products.map((p, i) => {
    const id = nextId + i;
    const badge = i === 0 ? 'Más económico' : i === products.length - 1 ? 'Premium' : 'Nuevo';
    return {
      id,
      name: `Amazfit ${p.title}`,
      brand: 'Amazfit',
      category: detectCategory(p.type, p.title),
      price: parseFloat(p.minPrice.toFixed(2)),
      oldPrice: parseFloat((p.minPrice * 1.2).toFixed(2)),
      badge,
      image: p.imgs[0] || '',
      images: p.imgs.slice(0, 2),
      description: p.desc,
      specs: {
        'Marca': 'Amazfit',
        'SKU': p.sku,
        'Fuente': 'es.amazfit.com'
      }
    };
  });

  // Inyectar como PRODUCTS.push(...)
  const marker = '// ─── SVG GENERATORS';
  const pushCode = `\n// ─── AMAZFIT PRODUCTS ──────────────────────────────────────────────────────────\nPRODUCTS.push(\n${entries.map(e => JSON.stringify(e, null, 2)).join(',\n')}\n);\n\n`;

  // Eliminar bloque previo si existe y re-insertar
  const cleaned = src.replace(/\/\/ ─── AMAZFIT PRODUCTS[\s\S]*?^PRODUCTS\.push\([\s\S]*?\);\n/m, '');
  const newSrc = cleaned.replace(marker, pushCode + marker);

  fs.writeFileSync(APP_JS, newSrc, 'utf8');
  console.log(`\n✅ app.js actualizado con ${entries.length} productos Amazfit (IDs ${nextId}–${nextId + entries.length - 1})`);
}

scrapeAmazfit().catch(err => {
  console.error('💥 Error:', err.message);
  process.exit(1);
});
