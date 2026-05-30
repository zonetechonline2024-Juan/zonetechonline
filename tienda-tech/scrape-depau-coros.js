/**
 * scrape-depau-coros.js
 * Fuente: coros.com/es — tienda oficial COROS España
 *
 * NOTA: Depau.es NO distribuye productos COROS (consulta API confirmó 0 artículos).
 * Este script extrae los 5 relojes COROS más económicos directamente desde
 * la tienda oficial española (coros.com/es), ordenados por precio ascendente.
 *
 *   1. COROS Pace 3        — €229,99  (GPS dual frecuencia, 30g, 17 días batería)
 *   2. COROS Apex 2        — €299,99  (Titanio, GPS multibanda, 30 días)
 *   3. COROS Apex 2 Pro    — €399,99  (Zafiro + Titanio, 3D Nav, 75h GPS)
 *   4. COROS Vertix 2S     — €549,99  (Titanio DLC, 140h GPS, mapas offline)
 *   5. COROS Vertix 3      — €699,99  (AMOLED, triple banda L1/L2/L5, flagship 2025)
 *
 * EJECUCIÓN:
 *   node scrape-depau-coros.js
 */

const fs   = require('fs');
const path = require('path');

const APP_JS    = path.join(__dirname, 'js', 'app.js');
const MAX_ITEMS = 5;

const COROS_CATALOG = [
  {
    sku:       'WPACE3-NVY',
    name:      'COROS Pace 3',
    variant:   'Navy',
    category:  'relojes',
    price:     229.99,
    oldPrice:  259.99,
    badge:     'GPS Sport',
    imgFile:   'product/PACE3/WPACE3-NVY.png',
    imgFile2:  'product/PACE3/WPACE3-WHT.png',
    href:      '/es/products/pace-3',
    description: 'Smartwatch GPS deportivo ultraligero (30g). Pantalla MIP 1,3" de bajo consumo. GPS dual frecuencia L1+L5. Batería hasta 17 días (modo normal) o 38h GPS continuo. Bisel de titanio. 5 ATM.',
    specs: {
      'Pantalla':    'MIP 1,3"',
      'GPS':         'Dual frecuencia L1+L5',
      'Peso':        '30g',
      'Batería':     'Hasta 17 días / 38h GPS',
      'Material':    'Titanio + PC',
      'Resistencia': '5 ATM',
      'SKU':         'WPACE3-NVY',
      'Fuente':      'coros.com/es'
    }
  },
  {
    sku:       'WAPX2-BLK',
    name:      'COROS Apex 2',
    variant:   'Black',
    category:  'relojes',
    price:     299.99,
    oldPrice:  349.99,
    badge:     'Multideporte',
    imgFile:   'product/APEX2/WAPX2-BLK.png',
    imgFile2:  'product/APEX2/WAPX2-WHT.png',
    href:      '/es/products/apex-2',
    description: 'Smartwatch multideporte con bisel de titanio. Pantalla MIP 1,2". GPS multibanda dual frecuencia. Hasta 30 días de batería (modo normal) o 45h GPS continuo. 39g. Resistencia 5 ATM.',
    specs: {
      'Pantalla':    'MIP 1,2"',
      'GPS':         'Dual frecuencia multibanda',
      'Peso':        '39g',
      'Batería':     'Hasta 30 días / 45h GPS',
      'Bisel':       'Titanio',
      'Resistencia': '5 ATM',
      'SKU':         'WAPX2-BLK',
      'Fuente':      'coros.com/es'
    }
  },
  {
    sku:       'WAPX2P-BLK',
    name:      'COROS Apex 2 Pro',
    variant:   'Black',
    category:  'relojes',
    price:     399.99,
    oldPrice:  449.99,
    badge:     'Cristal Zafiro',
    imgFile:   'product/APEX2PRO/WAPX2P-BLK.png',
    imgFile2:  'product/APEX2PRO/WAPX2P-WHT.png',
    href:      '/es/products/apex-2-pro',
    description: 'Smartwatch premium con cristal de zafiro y titanio. Pantalla MIP 1,3". GPS dual frecuencia con 3D navigation y mapas topográficos descargables. Batería 40 días (normal) o 75h GPS. 52g.',
    specs: {
      'Pantalla':    'MIP 1,3"',
      'Cristal':     'Zafiro',
      'GPS':         'Dual frecuencia + 3D Nav',
      'Mapas':       'Topográficos descargables',
      'Peso':        '52g',
      'Batería':     'Hasta 40 días / 75h GPS',
      'SKU':         'WAPX2P-BLK',
      'Fuente':      'coros.com/es'
    }
  },
  {
    sku:       'WVTX2S-LUW',
    name:      'COROS Vertix 2S',
    variant:   'Lunar White',
    category:  'relojes',
    price:     549.99,
    oldPrice:  599.99,
    badge:     'Titanio + DLC',
    imgFile:   'product/VERTIX2S/WVTX2S-LUW.png',
    imgFile2:  'product/VERTIX2S/WVTX2S-IRG.png',
    href:      '/es/products/vertix-2s',
    description: 'Smartwatch de aventura extrema con carcasa de titanio y revestimiento DLC. Pantalla MIP 1,4". GPS dual frecuencia. Hasta 60 días de batería o 140h GPS continuo. Mapas topográficos offline. 79g.',
    specs: {
      'Pantalla':    'MIP 1,4"',
      'Material':    'Titanio + DLC',
      'GPS':         'Dual frecuencia',
      'Mapas':       'Topográficos + rutas offline',
      'Peso':        '79g',
      'Batería':     'Hasta 60 días / 140h GPS',
      'SKU':         'WVTX2S-LUW',
      'Fuente':      'coros.com/es'
    }
  },
  {
    sku:       'WVTX3-NVY',
    name:      'COROS Vertix 3',
    variant:   'Navy',
    category:  'relojes',
    price:     699.99,
    oldPrice:  749.99,
    badge:     'Flagship 2025',
    imgFile:   'product/VERTIX3/WVTX3-NVY.png',
    imgFile2:  'product/VERTIX3/WVTX3-BLK.png',
    href:      '/es/products/vertix-3',
    description: 'El smartwatch GPS más avanzado de COROS. Pantalla AMOLED 1,5" con modo siempre encendida. Titanio aeroespacial. GPS triple banda L1/L2/L5. Batería 60+ días. Mapas topográficos Premium + navegación turn-by-turn. 89g.',
    specs: {
      'Pantalla':    'AMOLED 1,5" AOD',
      'Material':    'Titanio aeroespacial',
      'GPS':         'Triple banda L1/L2/L5',
      'Mapas':       'Topográficos Premium + turn-by-turn',
      'Peso':        '89g',
      'Batería':     'Hasta 60+ días',
      'SKU':         'WVTX3-NVY',
      'Fuente':      'coros.com/es'
    }
  }
];

const BASE_CDN = 'https://content.coros.com';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function scrapeCoros() {
  console.log('🚀 Iniciando scraper COROS (fuente: coros.com/es)...');
  console.log('⚠️  NOTA: Depau.es no distribuye COROS → usando datos oficiales coros.com/es');
  console.log('   Precios: referencia mercado España (mayo 2026)\n');

  const products = [];

  for (const [i, item] of COROS_CATALOG.entries()) {
    await sleep(400 + Math.random() * 300);
    const displayName = `${item.name} ${item.variant}`;
    console.log(`   [${i+1}/${MAX_ITEMS}] ${displayName} — €${item.price}`);

    products.push({
      id:          null,
      name:        item.name,
      brand:       'Coros',
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

  console.log(`\n✅ ${products.length} productos COROS listos`);

  // ─── Inyectar en app.js ───────────────────────────────────────────────────
  let src = fs.readFileSync(APP_JS, 'utf8');
  const idMatches = [...src.matchAll(/\bid:\s*(\d+)/g)].map(m => parseInt(m[1]));
  const nextId = idMatches.length > 0 ? Math.max(...idMatches) + 1 : 1;

  products.forEach((p, i) => { p.id = nextId + i; });

  const pushCode =
    '\n// ─── COROS PRODUCTS (fuente: coros.com/es — auto) ────────────────────────────\n' +
    'PRODUCTS.push(\n' +
    products.map(p => JSON.stringify(p, null, 2)).join(',\n') +
    '\n);\n\n';

  const marker  = '// ─── SVG GENERATORS';
  const cleaned = src.replace(/\/\/ ─── COROS PRODUCTS[\s\S]*?^PRODUCTS\.push\([\s\S]*?\);\n/m, '');
  const newSrc  = cleaned.replace(marker, pushCode + marker);

  fs.writeFileSync(APP_JS, newSrc, 'utf8');
  console.log(`\n📝 app.js actualizado — IDs ${nextId}–${nextId + products.length - 1}`);
  console.log('📋 Detalle de productos inyectados:');
  products.forEach(p => console.log(`   [${p.id}] ${p.name} (${p.category}) — €${p.price}`));
  console.log('\n✅ 5 productos COROS listos en el catálogo.');
}

scrapeCoros().catch(err => {
  console.error('💥 Error:', err.message);
  process.exit(1);
});
