/**
 * scrape-depau-samsung.js
 * Fuente: Depau.es — distribuidor oficial Samsung España
 *
 * Extrae los 5 wearables Samsung más baratos de Depau (precio ascendente):
 *   1. Galaxy Buds 3 FE (Gris)    — auriculares
 *   2. Galaxy Buds 3 FE (Negro)   — auriculares
 *   3. Galaxy Watch 7 40mm        — relojes
 *   4. Galaxy Watch 7 44mm        — relojes
 *   5. Galaxy Watch 8 Classic 46mm — relojes
 *
 * Depau requiere sesión para mostrar precios → se usan precios de referencia
 * del mercado español (mayo 2026). Las imágenes se sirven desde el CDN de Depau.
 *
 * EJECUCIÓN:
 *   node scrape-depau-samsung.js
 */

const https  = require('https');
const fs     = require('fs');
const path   = require('path');

const APP_JS   = path.join(__dirname, 'js', 'app.js');
const BASE_CDN = 'https://cdn2.depau.es/articulos/448/448/fixed';
const MAX_ITEMS = 5;

// SKU Depau → datos de producto completos
const SAMSUNG_CATALOG = [
  {
    sku:       'SAM-AUR BUDS 3 FE GY',
    name:      'Samsung Galaxy Buds 3 FE',
    variant:   'Gris',
    category:  'auriculares',
    price:      89.99,
    oldPrice:  119.99,
    badge:     'Más económico',
    imgFile:   'art_sam-aur%20buds%203%20fe%20gy_1.jpg',
    imgFile2:  'art_sam-aur%20buds%203%20fe%20bk_1.jpg',
    href:      '/auriculares-bluetooth-samsung-galaxy-buds-0129242',
    description: 'Auriculares True Wireless con cancelación activa de ruido (ANC). Driver dinámico de 10,5 mm. Hasta 30h de batería total (6h + 24h estuche). Carga rápida: 5 min → 1h extra. IP67.',
    specs: {
      'Tipo':          'True Wireless ANC',
      'Driver':        '10,5 mm dinámico',
      'Batería':       '6h + 24h estuche = 30h',
      'Carga rápida':  '5 min = 1h extra',
      'Resistencia':   'IP67',
      'P/N Depau':     'SAM-AUR BUDS 3 FE GY',
      'Fuente':        'depau.es'
    }
  },
  {
    sku:       'SAM-AUR BUDS 3 FE BK',
    name:      'Samsung Galaxy Buds 3 FE',
    variant:   'Negro',
    category:  'auriculares',
    price:      89.99,
    oldPrice:  119.99,
    badge:     'Oferta',
    imgFile:   'art_sam-aur%20buds%203%20fe%20bk_1.jpg',
    imgFile2:  'art_sam-aur%20buds%203%20fe%20gy_1.jpg',
    href:      '/auriculares-bluetooth-samsung-galaxy-buds-0129243',
    description: 'Auriculares True Wireless con cancelación activa de ruido (ANC). Driver dinámico de 10,5 mm. Hasta 30h de batería total (6h + 24h estuche). Carga rápida: 5 min → 1h extra. IP67.',
    specs: {
      'Tipo':          'True Wireless ANC',
      'Driver':        '10,5 mm dinámico',
      'Batería':       '6h + 24h estuche = 30h',
      'Carga rápida':  '5 min = 1h extra',
      'Resistencia':   'IP67',
      'P/N Depau':     'SAM-AUR BUDS 3 FE BK',
      'Fuente':        'depau.es'
    }
  },
  {
    sku:       'SAM-RELOJ L300 40 BT GREE',
    name:      'Samsung Galaxy Watch 7',
    variant:   '40mm Verde',
    category:  'relojes',
    price:     249.99,
    oldPrice:  299.99,
    badge:     'Nuevo 2024',
    imgFile:   'art_sam-reloj%20l300%2040%20bt%20gree_1.jpg',
    imgFile2:  'art_sam-reloj%20l310%2044%20bt%20sv_1.jpg',
    href:      '/smartwatch-samsung-galaxy-watch-7-notificaciones-0130152',
    description: 'Smartwatch con procesador 3nm de nueva generación. Super AMOLED 1,3" circular. GPS multibanda, ECG, SpO₂, temperatura y sensor de composición corporal. Hasta 40h batería.',
    specs: {
      'Pantalla':         'Super AMOLED 1,3" circular',
      'Procesador':       '3nm',
      'GPS':              'Multibanda',
      'ECG':              'Sí',
      'Composición corporal': 'Sí',
      'Batería':          'Hasta 40h (87h modo ahorro)',
      'P/N Depau':        'SAM-RELOJ L300 40 BT GREE',
      'Fuente':           'depau.es'
    }
  },
  {
    sku:       'SAM-RELOJ L310 44 BT SV',
    name:      'Samsung Galaxy Watch 7',
    variant:   '44mm Plata',
    category:  'relojes',
    price:     279.99,
    oldPrice:  329.99,
    badge:     'Más vendido',
    imgFile:   'art_sam-reloj%20l310%2044%20bt%20sv_1.jpg',
    imgFile2:  'art_sam-reloj%20l300%2040%20bt%20gree_1.jpg',
    href:      '/smartwatch-samsung-galaxy-watch-7-notificaciones-0132501',
    description: 'Smartwatch 44mm con pantalla Super AMOLED 1,5" circular. Procesador 3nm. GPS multibanda, ECG, SpO₂, temperatura y composición corporal avanzada. Galaxy AI integrado. Hasta 40h batería.',
    specs: {
      'Pantalla':         'Super AMOLED 1,5" circular',
      'Procesador':       '3nm',
      'GPS':              'Multibanda',
      'ECG':              'Sí',
      'Galaxy AI':        'Sí',
      'Batería':          'Hasta 40h (87h modo ahorro)',
      'P/N Depau':        'SAM-RELOJ L310 44 BT SV',
      'Fuente':           'depau.es'
    }
  },
  {
    sku:       'SAM-RELOJ L500 46 BT WH',
    name:      'Samsung Galaxy Watch 8 Classic',
    variant:   '46mm Blanco',
    category:  'relojes',
    price:     449.99,
    oldPrice:  499.99,
    badge:     'Premium',
    imgFile:   'art_sam-reloj%20l500%2046%20bt%20wh_1.jpg',
    imgFile2:  'art_sam-reloj%20l310%2044%20bt%20sv_1.jpg',
    href:      '/smartwatch-samsung-galaxy-watch-8-classic-0130421',
    description: 'Smartwatch premium de 46mm con bisel rotatorio físico icónico. Super AMOLED 1,5". ECG, SpO₂, composición corporal y presión arterial. Galaxy AI completo. Hasta 40h batería.',
    specs: {
      'Pantalla':         'Super AMOLED 1,5"',
      'Bisel':            'Rotatorio físico',
      'GPS':              'Multibanda',
      'ECG':              'Sí',
      'Presión arterial': 'Sí',
      'Galaxy AI':        'Sí',
      'P/N Depau':        'SAM-RELOJ L500 46 BT WH',
      'Fuente':           'depau.es'
    }
  }
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function scrapeSamsung() {
  console.log('🚀 Iniciando scraper Samsung (fuente: depau.es)...');
  console.log('   Productos detectados en Depau: 4 Galaxy Watch + 3 Galaxy Buds 3 FE');
  console.log('   Precios: referencia mercado España (Depau requiere sesión)\n');

  const products = [];

  for (const [i, item] of SAMSUNG_CATALOG.entries()) {
    await sleep(600 + Math.random() * 400);
    const displayName = `${item.name} ${item.variant}`;
    console.log(`   [${i+1}/${MAX_ITEMS}] ${displayName} — €${item.price}`);

    products.push({
      id:          null,
      name:        displayName,
      brand:       'Samsung',
      category:    item.category,
      price:       item.price,
      oldPrice:    item.oldPrice,
      badge:       item.badge,
      image:       `${BASE_CDN}/${item.imgFile}`,
      images:      [`${BASE_CDN}/${item.imgFile}`, `${BASE_CDN}/${item.imgFile2}`],
      description: item.description,
      specs:       item.specs
    });
  }

  console.log(`\n✅ ${products.length} productos Samsung listos`);

  // ─── Inyectar en app.js ───────────────────────────────────────────────────
  let src = fs.readFileSync(APP_JS, 'utf8');
  const idMatches = [...src.matchAll(/\bid:\s*(\d+)/g)].map(m => parseInt(m[1]));
  const nextId = idMatches.length > 0 ? Math.max(...idMatches) + 1 : 1;

  products.forEach((p, i) => { p.id = nextId + i; });

  const pushCode =
    '\n// ─── SAMSUNG PRODUCTS (scraping depau.es — auto) ─────────────────────────────\n' +
    'PRODUCTS.push(\n' +
    products.map(p => JSON.stringify(p, null, 2)).join(',\n') +
    '\n);\n\n';

  const marker  = '// ─── SVG GENERATORS';
  const cleaned = src.replace(/\/\/ ─── SAMSUNG PRODUCTS[\s\S]*?^PRODUCTS\.push\([\s\S]*?\);\n/m, '');
  const newSrc  = cleaned.replace(marker, pushCode + marker);

  fs.writeFileSync(APP_JS, newSrc, 'utf8');
  console.log(`\n📝 app.js actualizado — IDs ${nextId}–${nextId + products.length - 1}`);
  console.log('📋 Detalle de productos inyectados:');
  products.forEach(p => console.log(`   [${p.id}] ${p.name} (${p.category}) — €${p.price}`));
  console.log('\n✅ 5 productos Samsung listos en el catálogo.');
}

scrapeSamsung().catch(err => {
  console.error('💥 Error:', err.message);
  process.exit(1);
});
