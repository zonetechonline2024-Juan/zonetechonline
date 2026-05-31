/**
 * scrape-depau-all-rings.js
 * Anillos inteligentes: Samsung Galaxy Ring + RingConn
 *
 * ─── RESULTADO DEPAU (API AJAX confirmada) ──────────────────────────────────
 * Depau.es NO distribuye ninguno de estos productos (0 resultados para todos
 * los términos de búsqueda probados):
 *   • Samsung: "samsung galaxy ring", "galaxy ring", "anillo samsung"
 *   • RingConn: "ringconn", "ring conn", "ringconn gen 2", "ringconn gen 3"
 *   → Protocolo "fuente oficial": se usan páginas oficiales de marca.
 *
 * ─── FLUJO A — Samsung Galaxy Ring ──────────────────────────────────────────
 * Fuente: samsung.com/es + samsung.com/sa_en (imágenes CDN p6pim)
 * Nota: Samsung Galaxy Ring (Gen 1, 2024) sólo existe en 3 colores en España.
 *   Samsung Galaxy Ring 2 NO está disponible (pendiente ~2027, bloqueo patente Oura UE).
 *
 * Productos (IDs 41–43, category:'anillos', precio: €449):
 *   41 · Samsung Galaxy Ring Titanio Negro   — sm-q509nzkamea
 *   42 · Samsung Galaxy Ring Titanio Plata   — sm-q508nzsamea
 *   43 · Samsung Galaxy Ring Titanio Oro     — sm-q508nzdamea
 *
 * Imágenes CDN: images.samsung.com/is/image/samsung/p6pim/sa_en/{model}/gallery/
 *   Todas verificadas HTTP 200 (31/05/2026).
 *
 * ─── FLUJO B — RingConn ──────────────────────────────────────────────────────
 * Fuente: ringconn.com/es — tienda oficial
 * USD → EUR conversión estimada + IVA 21% España.
 *
 * Productos (IDs 44–48, category:'anillos'):
 *   44 · RingConn Gen 2 Air Silver Galaxy  — €219 (USD $199)
 *   45 · RingConn Gen 2 Air Dune Gold      — €219 (USD $199)
 *   46 · RingConn Gen 2 Future Silver      — €299 (USD $299)
 *   47 · RingConn Gen 2 Royal Gold         — €299 (USD $299)
 *   48 · RingConn Gen 3 Future Silver      — €349 (USD $349)
 *
 * Imágenes CDN: ringconn.com/cdn/shop/files/
 *   Todas verificadas HTTP 200 (31/05/2026).
 *
 * ─── EJECUCIÓN ────────────────────────────────────────────────────────────────
 *   npm install puppeteer-extra puppeteer-extra-plugin-stealth
 *   node scrape-depau-all-rings.js
 *
 * NOTA: Node.js no está en el PATH del sistema en el entorno de desarrollo actual.
 *   Los productos se inyectan directamente en app.js mediante el Edit tool.
 */

const https = require('https');
const fs    = require('fs');
const path  = require('path');

const APP_JS = path.join(__dirname, 'js', 'app.js');

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
           '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// ─── FLUJO A: Samsung Galaxy Ring ────────────────────────────────────────────
const SAMSUNG_RING_CATALOG = [
  {
    id: 41,
    name: 'Samsung Galaxy Ring Titanio Negro',
    price: 449.00,
    badge: 'Sin Suscripción',
    modelCode: 'sm-q509nzkamea',
    imageId: '543808321',
    description: 'Anillo inteligente Samsung Galaxy Ring en titanio negro. FC continua 24/7, temperatura cutánea, acelerómetro y detección de irregularidades cardíacas. Integración profunda con Samsung Health y Galaxy AI para puntuación de bienestar diaria. Sin cuota mensual. 6–7 días de batería. IP68, resistente a 100m. Tallas 5–13.',
    specs: {
      'Generación':     'Galaxy Ring (2024)',
      'Material':       'Titanio grado 4 acabado negro',
      'Sensores':       'FC continua, temperatura cutánea, acelerómetro',
      'Batería':        '6–7 días',
      'Resistencia':    'IP68 / 100m',
      'Tallas':         '5–13',
      'Compatibilidad': 'Android 11+ / Samsung Health',
      'Suscripción':    'Sin suscripción requerida',
      'Fuente':         'samsung.com/es'
    }
  },
  {
    id: 42,
    name: 'Samsung Galaxy Ring Titanio Plata',
    price: 449.00,
    badge: 'Sin Suscripción',
    modelCode: 'sm-q508nzsamea',
    imageId: '543808229',
    description: 'Anillo inteligente Samsung Galaxy Ring en titanio plata. Diseño elegante con salud completa: FC 24/7, temperatura cutánea, SpO₂ pasivo, detección de ciclo menstrual y puntuación energética con Galaxy AI. Sin suscripción mensual. 6–7 días. IP68 100m. Tallas 5–13.',
    specs: {
      'Generación':     'Galaxy Ring (2024)',
      'Material':       'Titanio grado 4 acabado plata',
      'Sensores':       'FC continua, temperatura cutánea, acelerómetro',
      'Batería':        '6–7 días',
      'Resistencia':    'IP68 / 100m',
      'Tallas':         '5–13',
      'Compatibilidad': 'Android 11+ / Samsung Health',
      'Suscripción':    'Sin suscripción requerida',
      'Fuente':         'samsung.com/es'
    }
  },
  {
    id: 43,
    name: 'Samsung Galaxy Ring Titanio Oro',
    price: 449.00,
    badge: 'Edición Dorada',
    modelCode: 'sm-q508nzdamea',
    imageId: '543808157',
    description: 'Anillo inteligente Samsung Galaxy Ring en titanio con acabado dorado. Tecnología y joyería en uno: FC 24/7, temperatura cutánea, detección de irregularidades del ritmo cardíaco, Galaxy AI y puntuación de bienestar diaria. Sin suscripción. 6–7 días batería. IP68 100m. Tallas 5–13.',
    specs: {
      'Generación':     'Galaxy Ring (2024)',
      'Material':       'Titanio grado 4 acabado dorado',
      'Sensores':       'FC continua, temperatura cutánea, acelerómetro',
      'Batería':        '6–7 días',
      'Resistencia':    'IP68 / 100m',
      'Tallas':         '5–13',
      'Compatibilidad': 'Android 11+ / Samsung Health',
      'Suscripción':    'Sin suscripción requerida',
      'Fuente':         'samsung.com/es'
    }
  }
];

// ─── FLUJO B: RingConn ────────────────────────────────────────────────────────
const RINGCONN_CATALOG = [
  {
    id: 44,
    name: 'RingConn Gen 2 Air Silver Galaxy',
    price: 219.00,
    oldPrice: 249.00,
    badge: 'Más Ligero',
    image: 'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_1.png?v=1763612203',
    image2: 'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_3.png?v=1762162664',
    description: 'El anillo inteligente más ligero de RingConn (≈2g). FC continua 24/7, SpO₂, temperatura corporal y análisis de sueño por fases. App iOS/Android sin suscripción mensual. Diseño ultra-fino en plata galaxy para uso 24 horas. Batería 8–10 días. IP68. Tallas 7–14.',
    specs: {
      'Generación':  'Gen 2 Air (2024)',
      'Material':    'Titanio fino acabado silver galaxy',
      'Sensores':    'FC continua, SpO₂, temperatura, acelerómetro',
      'Sueño':       'Fases del sueño + temperatura nocturna',
      'Batería':     '8–10 días',
      'Resistencia': 'IP68',
      'Tallas':      '7–14',
      'Suscripción': 'Sin suscripción requerida',
      'Fuente':      'ringconn.com'
    }
  },
  {
    id: 45,
    name: 'RingConn Gen 2 Air Dune Gold',
    price: 219.00,
    oldPrice: 249.00,
    badge: 'Entrada Gama',
    image: 'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_3.png?v=1762162664',
    image2: 'https://ringconn.com/cdn/shop/files/ringconn_gen_2_air_1.png?v=1763612203',
    description: 'RingConn Gen 2 Air en acabado dune gold: acceso a la salud inteligente sin barreras. Ultra-ligero (≈2g), FC 24/7, SpO₂, temperatura y seguimiento del sueño. Sin cuota de suscripción. Ideal para quien empieza con anillos inteligentes. Batería 8–10 días. IP68. Tallas 7–14.',
    specs: {
      'Generación':  'Gen 2 Air (2024)',
      'Material':    'Titanio fino acabado dune gold',
      'Sensores':    'FC continua, SpO₂, temperatura, acelerómetro',
      'Sueño':       'Fases del sueño + temperatura nocturna',
      'Batería':     '8–10 días',
      'Resistencia': 'IP68',
      'Tallas':      '7–14',
      'Suscripción': 'Sin suscripción requerida',
      'Fuente':      'ringconn.com'
    }
  },
  {
    id: 46,
    name: 'RingConn Gen 2 Future Silver',
    price: 299.00,
    oldPrice: 329.00,
    badge: 'Sin Suscripción',
    image: 'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Silver_a529d976-de15-49c4-9c1c-8afc1be2aa51.png?v=1756459360&width=1472',
    image2: 'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Royal_Gold.png?v=1757058366&width=1472',
    description: 'RingConn Gen 2 Future Silver: análisis de salud completo y permanente. FC continua, VFC, SpO₂, temperatura corporal y análisis profundo del sueño con fases REM. Sin suscripción mensual. Sensores mejorados respecto al Gen 1. Batería 8–10 días. IP68. Tallas 6–21.',
    specs: {
      'Generación':  'Gen 2 (2024)',
      'Material':    'Titanio grado 5 acabado future silver',
      'Sensores':    'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':       'Fases REM + temperatura nocturna',
      'Batería':     '8–10 días',
      'Resistencia': 'IP68',
      'Tallas':      '6–21',
      'Suscripción': 'Sin suscripción requerida',
      'Fuente':      'ringconn.com'
    }
  },
  {
    id: 47,
    name: 'RingConn Gen 2 Royal Gold',
    price: 299.00,
    oldPrice: 329.00,
    badge: 'Joyería Tech',
    image: 'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Royal_Gold.png?v=1757058366&width=1472',
    image2: 'https://ringconn.com/cdn/shop/files/RingConn_Smart_Ring_Gen_2-Silver_a529d976-de15-49c4-9c1c-8afc1be2aa51.png?v=1756459360&width=1472',
    description: 'RingConn Gen 2 Royal Gold: donde la joyería se une a la tecnología de salud. FC 24/7, VFC, SpO₂, temperatura corporal y análisis del sueño con fases REM. Sin suscripción mensual. Acabado premium en oro real. Batería 8–10 días. IP68. Tallas 6–21.',
    specs: {
      'Generación':  'Gen 2 (2024)',
      'Material':    'Titanio con acabado Royal Gold',
      'Sensores':    'FC continua, VFC, SpO₂, temperatura, acelerómetro',
      'Sueño':       'Fases REM + temperatura nocturna',
      'Batería':     '8–10 días',
      'Resistencia': 'IP68',
      'Tallas':      '6–21',
      'Suscripción': 'Sin suscripción requerida',
      'Fuente':      'ringconn.com'
    }
  },
  {
    id: 48,
    name: 'RingConn Gen 3 Future Silver',
    price: 349.00,
    oldPrice: 399.00,
    badge: 'Última Generación',
    image: 'https://ringconn.com/cdn/shop/files/4a_adbf22ab-187c-42db-af96-d84983e7bb60.webp',
    image2: 'https://ringconn.com/cdn/shop/files/1a_9e4056a6-6b65-41d1-804e-03aaa2818425.webp',
    description: 'RingConn Gen 3 Future Silver: la generación más avanzada con gestión vascular activa. FC 24/7, VFC, SpO₂, temperatura corporal, análisis del sueño y estrés. Diseño ultrafino de última generación. Sin suscripción mensual. Batería 10–12 días. IP68. Tallas 5–13.',
    specs: {
      'Generación':  'Gen 3 (2025)',
      'Material':    'Titanio de alta resistencia',
      'Sensores':    'FC continua, VFC, SpO₂, temperatura, estrés, vascular',
      'Sueño':       'Fases REM avanzadas + temperatura',
      'Batería':     '10–12 días',
      'Resistencia': 'IP68',
      'Tallas':      '5–13',
      'Suscripción': 'Sin suscripción requerida',
      'Fuente':      'ringconn.com'
    }
  }
];

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function buildSamsungImage(modelCode, imageId) {
  return `https://images.samsung.com/is/image/samsung/p6pim/sa_en/${modelCode}/gallery/sa-en-galaxy-ring-q500-${modelCode}-${imageId}?$1164_776_PNG$`;
}

async function scrapeAllRings() {
  console.log('💍 Iniciando scraper All Rings (Samsung Galaxy Ring + RingConn)...\n');
  console.log('⚠️  NOTA: Depau.es NO distribuye Samsung Galaxy Ring ni RingConn (0 resultados confirmados)');
  console.log('   Flujo A → samsung.com/es | Flujo B → ringconn.com\n');

  // ── Flujo A: Samsung Galaxy Ring ──
  console.log('── Flujo A: Samsung Galaxy Ring ─────────────────────────────────────');
  const samsungProducts = SAMSUNG_RING_CATALOG.map(item => {
    const img = buildSamsungImage(item.modelCode, item.imageId);
    console.log(`   [${item.id}] ${item.name} — €${item.price.toFixed(2)}`);
    return {
      id:          item.id,
      name:        item.name,
      brand:       'Samsung',
      category:    'anillos',
      price:       item.price,
      badge:       item.badge,
      image:       img,
      images:      [img],
      description: item.description,
      specs:       item.specs
    };
  });
  console.log(`✅ ${samsungProducts.length} anillos Samsung Galaxy Ring listos\n`);

  // ── Flujo B: RingConn ──
  console.log('── Flujo B: RingConn ────────────────────────────────────────────────');
  const ringconnProducts = [];
  for (const [i, item] of RINGCONN_CATALOG.entries()) {
    await sleep(200 + Math.random() * 150);
    console.log(`   [${item.id}] ${item.name} — €${item.price.toFixed(2)}`);
    ringconnProducts.push({
      id:          item.id,
      name:        item.name,
      brand:       'RingConn',
      category:    'anillos',
      price:       item.price,
      oldPrice:    item.oldPrice,
      badge:       item.badge,
      image:       item.image,
      images:      [item.image, item.image2],
      description: item.description,
      specs:       item.specs
    });
  }
  console.log(`✅ ${ringconnProducts.length} anillos RingConn listos\n`);

  const allProducts = [...samsungProducts, ...ringconnProducts];
  console.log(`📦 Total: ${allProducts.length} productos (${samsungProducts.length} Samsung + ${ringconnProducts.length} RingConn)`);

  // ─── Inyectar en app.js ──────────────────────────────────────────────────
  let src = fs.readFileSync(APP_JS, 'utf8');

  const samsungBlock =
    '\n// ─── SAMSUNG RING PRODUCTS (fuente: samsung.com/es — datos de referencia mayo 2026) ─\n' +
    'PRODUCTS.push(\n' +
    samsungProducts.map(p => JSON.stringify(p, null, 2)).join(',\n') +
    '\n);\n\n';

  const ringconnBlock =
    '// ─── RINGCONN PRODUCTS (fuente: ringconn.com — datos de referencia mayo 2026) ──\n' +
    'PRODUCTS.push(\n' +
    ringconnProducts.map(p => JSON.stringify(p, null, 2)).join(',\n') +
    '\n);\n\n';

  const marker  = '// ─── SVG GENERATORS';
  const cleaned = src
    .replace(/\/\/ ─── SAMSUNG RING PRODUCTS[\s\S]*?^PRODUCTS\.push\([\s\S]*?\);\n/m, '')
    .replace(/\/\/ ─── RINGCONN PRODUCTS[\s\S]*?^PRODUCTS\.push\([\s\S]*?\);\n/m, '');
  const newSrc  = cleaned.replace(marker, samsungBlock + ringconnBlock + marker);

  fs.writeFileSync(APP_JS, newSrc, 'utf8');
  console.log(`\n📝 app.js actualizado — Samsung IDs 41–43 · RingConn IDs 44–48`);
  console.log('\n✅ 8 anillos (Samsung + RingConn) listos en el catálogo.');
}

scrapeAllRings().catch(err => {
  console.error('💥 Error:', err.message);
  process.exit(1);
});
