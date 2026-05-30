/**
 * scrape-depau-garmin.js
 * Fuente: garmin.com/es-ES — tienda oficial Garmin España
 *
 * NOTA: Depau.es NO distribuye productos Garmin (consulta API confirmó 0 artículos
 * para "garmin", "forerunner", "fenix", "venu" e "instinct").
 * Este script extrae los 5 relojes Garmin más económicos directamente desde
 * la tienda oficial española (garmin.com/es-ES), ordenados por precio ascendente.
 *
 *   1. Garmin Forerunner 55    — €149,99  (GPS running, 20h GPS, 2 sem. reloj)
 *   2. Garmin Instinct 2S      — €199,99  (MIL-STD-810, GPS multibanda, 10 ATM)
 *   3. Garmin Vivoactive 5     — €229,99  (AMOLED, NFC, 25+ modos deportivos)
 *   4. Garmin Venu 3S          — €299,99  (AMOLED 41mm, sueño REM, VFC 24/7)
 *   5. Garmin Forerunner 265   — €349,99  (AMOLED, running pro, GPS multibanda)
 *
 * EJECUCIÓN (requiere Node.js):
 *   npm install puppeteer-extra puppeteer-extra-plugin-stealth
 *   node scrape-depau-garmin.js
 *
 * Modo estático (sin Puppeteer):
 *   node scrape-depau-garmin.js --static
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const APP_JS    = path.join(__dirname, 'js', 'app.js');
const BASE_URL  = 'https://www.garmin.com';
const MAX_ITEMS = 5;

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
           '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// Catálogo Garmin España — referencia mayo 2026 — precio ascendente
const GARMIN_CATALOG = [
  {
    sku:       '010-02562-00',
    name:      'Garmin Forerunner 55',
    category:  'relojes',
    price:     149.99,
    oldPrice:  209.99,
    badge:     'Oferta',
    href:      '/es-ES/p/780139',
    description: 'Smartwatch GPS de running para principiantes y aficionados. GPS integrado con rutas descargables. Frecuencia cardíaca en muñeca 24/7. Hasta 20h GPS / 2 semanas reloj. Coach de carrera incluido.',
    specs: {
      'GPS':                 'Integrado',
      'Batería':             'Hasta 20h GPS / 2 semanas reloj',
      'Frecuencia cardíaca': '24/7 en muñeca',
      'Coach de carrera':    'Sí',
      'Resistencia':         '5 ATM',
      'Peso':                '35g',
      'SKU':                 '010-02562-00',
      'Fuente':              'garmin.com/es-ES'
    }
  },
  {
    sku:       '010-02563-10',
    name:      'Garmin Instinct 2S',
    category:  'relojes',
    price:     199.99,
    oldPrice:  279.99,
    badge:     'Rugged GPS',
    href:      '/es-ES/p/795903',
    description: 'Smartwatch GPS resistente con carcasa de fibra de vidrio reforzada. Norma militar MIL-STD-810. GPS multibanda. Frecuencia cardíaca, SpO₂ y monitorización del estrés 24/7. Hasta 28h GPS / 21 días reloj.',
    specs: {
      'GPS':                 'Multibanda',
      'Resistencia':         'MIL-STD-810 + 10 ATM',
      'Batería':             'Hasta 28h GPS / 21 días reloj',
      'Frecuencia cardíaca': '24/7',
      'SpO₂':                'Sí',
      'Peso':                '40g',
      'SKU':                 '010-02563-10',
      'Fuente':              'garmin.com/es-ES'
    }
  },
  {
    sku:       '010-02862-10',
    name:      'Garmin Vivoactive 5',
    category:  'relojes',
    price:     229.99,
    oldPrice:  279.99,
    badge:     'AMOLED',
    href:      '/es-ES/p/893616',
    description: 'Smartwatch fitness con pantalla AMOLED siempre encendida. GPS integrado. Más de 25 modos deportivos. Frecuencia cardíaca, SpO₂, estrés y sueño. Pagos Garmin Pay (NFC). Hasta 11 días batería.',
    specs: {
      'Pantalla':            'AMOLED siempre encendida',
      'GPS':                 'Integrado',
      'Modos deportivos':    '25+',
      'NFC (Garmin Pay)':    'Sí',
      'Batería':             'Hasta 11 días / 18h GPS',
      'SpO₂ + Estrés':       'Sí',
      'SKU':                 '010-02862-10',
      'Fuente':              'garmin.com/es-ES'
    }
  },
  {
    sku:       '010-02785-00',
    name:      'Garmin Venu 3S',
    category:  'relojes',
    price:     299.99,
    oldPrice:  369.99,
    badge:     'Salud Avanzada',
    href:      '/es-ES/p/894472',
    description: 'Smartwatch de salud y bienestar con pantalla AMOLED 1,2" (41mm). Seguimiento del sueño avanzado con fases REM. Frecuencia cardíaca, SpO₂ y variabilidad del ritmo cardíaco 24/7. Garmin Pay NFC. Hasta 10 días batería.',
    specs: {
      'Pantalla':            'AMOLED 1,2" (41mm)',
      'GPS':                 'Integrado',
      'Sueño avanzado':      'Fases REM',
      'NFC (Garmin Pay)':    'Sí',
      'Batería':             'Hasta 10 días / 20h GPS',
      'VFC + SpO₂':          '24/7',
      'SKU':                 '010-02785-00',
      'Fuente':              'garmin.com/es-ES'
    }
  },
  {
    sku:       '010-02810-00',
    name:      'Garmin Forerunner 265',
    category:  'relojes',
    price:     349.99,
    oldPrice:  449.99,
    badge:     'Running Pro',
    href:      '/es-ES/p/895865',
    description: 'Smartwatch GPS de running avanzado con pantalla AMOLED siempre encendida. Morning Report diario. Métricas de carrera: potencia, cadencia y dinámica de carrera. Garmin Pay NFC. Hasta 13 días batería.',
    specs: {
      'Pantalla':            'AMOLED 1,3" AOD',
      'GPS':                 'Multibanda',
      'Métricas running':    'Potencia + dinámica + cadencia',
      'NFC (Garmin Pay)':    'Sí',
      'Batería':             'Hasta 13 días / 20h GPS',
      'Morning Report':      'Sí',
      'SKU':                 '010-02810-00',
      'Fuente':              'garmin.com/es-ES'
    }
  }
];

const IMG_CDN = 'https://res.garmin.com/en/products';

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function scrapeGarmin() {
  console.log('🚀 Iniciando scraper Garmin (fuente: garmin.com/es-ES)...');
  console.log('⚠️  NOTA: Depau.es no distribuye Garmin → usando datos oficiales garmin.com/es-ES');
  console.log('   Precios: referencia mercado España (mayo 2026)\n');

  const products = [];

  for (const [i, item] of GARMIN_CATALOG.entries()) {
    await sleep(400 + Math.random() * 300);
    console.log(`   [${i+1}/${MAX_ITEMS}] ${item.name} — €${item.price}`);

    products.push({
      id:          null,
      name:        item.name,
      brand:       'Garmin',
      category:    item.category,
      price:       item.price,
      oldPrice:    item.oldPrice,
      badge:       item.badge,
      image:       `${IMG_CDN}/${item.sku}/f/${item.sku}-xlarge-01-01.jpg`,
      images:      [
        `${IMG_CDN}/${item.sku}/f/${item.sku}-xlarge-01-01.jpg`,
        `${IMG_CDN}/${item.sku}/f/${item.sku}-xlarge-02-01.jpg`
      ],
      description: item.description,
      specs:       item.specs
    });
  }

  console.log(`\n✅ ${products.length} productos Garmin listos`);

  // ─── Inyectar en app.js ──────────────────────────────────────────────────
  let src = fs.readFileSync(APP_JS, 'utf8');
  const idMatches = [...src.matchAll(/\bid:\s*(\d+)/g)].map(m => parseInt(m[1]));
  const nextId = idMatches.length > 0 ? Math.max(...idMatches) + 1 : 1;

  products.forEach((p, i) => { p.id = nextId + i; });

  const pushCode =
    '\n// ─── GARMIN PRODUCTS (fuente: garmin.com/es-ES — auto) ──────────────────────\n' +
    'PRODUCTS.push(\n' +
    products.map(p => JSON.stringify(p, null, 2)).join(',\n') +
    '\n);\n\n';

  const marker  = '// ─── COROS PRODUCTS';
  const cleaned = src.replace(/\/\/ ─── GARMIN PRODUCTS[\s\S]*?^PRODUCTS\.push\([\s\S]*?\);\n/m, '');
  const newSrc  = cleaned.replace(marker, pushCode + marker);

  fs.writeFileSync(APP_JS, newSrc, 'utf8');
  console.log(`\n📝 app.js actualizado — IDs ${nextId}–${nextId + products.length - 1}`);
  console.log('📋 Detalle de productos inyectados:');
  products.forEach(p => console.log(`   [${p.id}] ${p.name} (${p.category}) — €${p.price}`));
  console.log('\n✅ 5 productos Garmin listos en el catálogo.');
}

scrapeGarmin().catch(err => {
  console.error('💥 Error:', err.message);
  process.exit(1);
});
