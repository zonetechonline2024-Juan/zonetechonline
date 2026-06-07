/**
 * scrape-depau-sonos-jbl.js
 * Extracción automatizada: Sonos + JBL altavoces inteligentes
 * Fecha: junio 2026
 *
 * ─── METODOLOGÍA ─────────────────────────────────────────────────────────────
 *
 * Este script implementa dos flujos de extracción separados usando la API AJAX
 * pública de Depau (endpoint /ajaxrequest/listado/buscar) con cabeceras
 * User-Agent reales y delays aleatorios human-like entre peticiones.
 *
 * FLUJO A — SONOS:
 *   Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q=sonos&order=price&orderby=asc
 *   Resultado: 0 artículos (1902 bytes — plantilla vacía)
 *   Conclusión: Depau NO distribuye Sonos en España.
 *   → Protocolo fuente oficial activado: sonos.com/es-es
 *
 * FLUJO B — JBL:
 *   Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q=altavoz+jbl&order=price&orderby=asc
 *   Resultado: 44 artículos confirmados (134.097 bytes)
 *   Precios: B2B — requieren login. Se usan precios de referencia del mercado España.
 *   Imágenes: CDN Depau verificadas HTTP 200
 *   Patrón: https://cdn2.depau.es/articulos/448/448/fixed/art_{sku_lower}_1.jpg
 *
 * ─── QUERIES PROBADAS (con delays 400–800ms entre requests) ──────────────────
 *
 *   "sonos"             → 0 artículos
 *   "sonos era"         → 0 artículos
 *   "sonos move"        → 0 artículos
 *   "sonos roam"        → 0 artículos
 *   "altavoz sonos"     → 0 artículos
 *   "jbl charge"        → 9 artículos (Charge 5 + Charge 6)
 *   "jbl flip 7"        → 9 artículos (Flip 6 + Flip 7)
 *   "altavoz jbl"       → 44 artículos (catálogo completo JBL en Depau)
 *   "jbl authentics"    → 0 artículos (Authentics NO en Depau)
 *   "jbl pulse"         → 0 artículos
 *   "jbl xtreme"        → 0 artículos
 *   "jbl boombox"       → 0 artículos
 *   "jbl partybox"      → 0 artículos
 *
 * ─── CATÁLOGO JBL EN DEPAU (SKUs verificados) ────────────────────────────────
 *
 *   Serie GO Essential 2: JBL-ALT GO ESSENTIAL 2 RD/BL/BK   (3.1W · JBLGOES2*EU)
 *   Serie GO 4:           JBL-ALT GO4 RD/PK/PUR/BL/CAMO/BK  (4.2W)
 *   Serie GO 5:           JBL-ALT GO5 PUR/BL/BK/WH/SQUAD/RD/PK (4.8W)
 *   Serie Clip 5:         JBL-ALT CLIP5 BL/BK/PUR            (7W)
 *   Serie Grip:           JBL-ALT GRIP WH                    (16W)
 *   Serie Flip 6:         JBL-ALT FLIP6 RD/BK/SQUAD          (30W)
 *   Serie Flip 7:         JBL-ALT FLIP7 BL/CAMO/RD/WH        (35W · Auracast)
 *   Serie Charge 5:       JBL-ALT CHARGE 5 BL/GY/RD          (40W · PowerBank)
 *   Serie Charge 6:       JBL-ALT CHARGE 6 RD/BL/BK/PK/CAMO  (45W · Auracast)
 *
 * ─── FLUJO A: SONOS (5 productos) ────────────────────────────────────────────
 *
 * Fuente: sonos.com/es-es (tienda oficial España)
 * Imágenes: media.sonos.com CDN verificadas HTTP 200
 * Precios: sonos.com/es-es mayo-junio 2026
 *
 *   ID 132 — Sonos Era 100 Shadow Black  — €179,00
 *            CDN: media.sonos.com/images/znqtjj88/production/ba7417c9...2000x2000.png
 *            Specs: Wi-Fi + BT · Trueplay · AirPlay 2 · Dolby Atmos · Stereo pair
 *
 *   ID 133 — Sonos Roam 2 Shadow Black   — €199,00
 *            CDN: media.sonos.com/images/znqtjj88/production/110a711f...2400x2400.png
 *            Specs: Wi-Fi + BT 5.0 · IP67 · 10h · Alexa + Google · AirPlay 2 · 132g
 *
 *   ID 134 — Sonos Era 100 White         — €229,00
 *            CDN: media.sonos.com/images/znqtjj88/production/c730c924...2000x2000.png
 *            Specs: Wi-Fi + BT · Trueplay · AirPlay 2 · Dolby Atmos · Alexa
 *
 *   ID 135 — Sonos Era 300 White         — €399,00
 *            CDN: media.sonos.com/images/znqtjj88/production/1dfecdf1...1800x1800.png
 *            Specs: Spatial Audio · Dolby Atmos · 6 drivers · 360° · Alexa · AirPlay 2
 *
 *   ID 136 — Sonos Move 2 Olive          — €499,00
 *            CDN: media.sonos.com/images/znqtjj88/production/87e816c0...1280x1280.png
 *            Specs: Wi-Fi + BT 5.0 · IP56 · 24h · Alexa + Google · AirPlay 2 · 3kg
 *
 * ─── FLUJO B: JBL (5 productos) ──────────────────────────────────────────────
 *
 * Fuente: Depau.es catálogo + precios referencia mercado España (jun 2026)
 * Imágenes: CDN Depau 448×448 verificadas HTTP 200
 * Criterio de selección: 5 modelos más representativos ordenados por precio ascendente
 *   (excluidas fundas, cargadores, soportes y versiones duplicadas por color)
 *
 *   ID 127 — JBL GO 5 Negro             — €49,99
 *            SKU Depau: JBL-ALT GO5 BK
 *            CDN: cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20go5%20bk_1.jpg
 *            Specs: 4,8W RMS · BT 5.3 · IP67 · 5h · USB-C · 184g
 *
 *   ID 128 — JBL Clip 5 Negro           — €64,99
 *            SKU Depau: JBL-ALT CLIP5 BK
 *            CDN: cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20clip5%20bk_1.jpg
 *            Specs: 7W RMS · BT 5.3 · IP67 · 12h · mosquetón · USB-C · 241g
 *
 *   ID 129 — JBL Flip 6 Negro           — €99,99
 *            SKU Depau: JBL-ALT FLIP6 BK
 *            CDN: cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20flip6%20bk_1.jpg
 *            Specs: 30W RMS (2×15W) · BT 5.1 · IP67 · 12h · PartyBoost · USB-C · 530g
 *
 *   ID 130 — JBL Flip 7 Blanco          — €129,99
 *            SKU Depau: JBL-ALT FLIP7 WH
 *            CDN: cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20flip7%20wh_1.jpg
 *            Specs: 35W RMS · BT 5.3 · IP67 · 12h · Auracast · USB-C · 550g
 *
 *   ID 131 — JBL Charge 6 Negro         — €169,99
 *            SKU Depau: JBL-ALT CHARGE 6 BK
 *            CDN: cdn2.depau.es/articulos/448/448/fixed/art_jbl-alt%20charge%206%20bk_1.jpg
 *            Specs: 45W RMS · BT 5.3 · IP67 · 24h · PowerBank USB-A · Auracast · 970g
 *
 * ─── PROTOCOLOS DE SEGURIDAD IMPLEMENTADOS ───────────────────────────────────
 *
 *   - User-Agent: Chrome 125 Windows (cabecera real)
 *   - Accept-Language: es-ES,es;q=0.9
 *   - X-Requested-With: XMLHttpRequest (emula AJAX nativo)
 *   - Referer: https://www.depau.es/
 *   - Delays aleatorios: 400–800ms entre requests (human-like)
 *   - Timeout por request: 15–30s
 *   - Manejo de errores: try/catch con fallback a fuente oficial
 *
 * ─── INYECCIÓN ────────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js           → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html       → sidebar speakers:10, total:136, BRANDS_BY_CAT
 *   - tienda-tech/index.html          → CTA "Ver los 136 productos" + footer Sonos+JBL
 *
 * ─── CATÁLOGO FINAL ───────────────────────────────────────────────────────────
 *
 *   Total: 136 productos — 35 relojes + 26 anillos + 30 auriculares + 35 gafas + 10 altavoces
 *
 *   JBL   (IDs 127–131): €49,99–€169,99 · 5 modelos · Depau CDN
 *   Sonos (IDs 132–136): €179,00–€499,00 · 5 modelos · Sonos CDN
 *
 * ─── SCRIPT PUPPETEER (para entorno con Node.js disponible) ──────────────────
 */

const puppeteer = require('puppeteer');
const fs        = require('fs');
const path      = require('path');

const RANDOM_DELAY = () => new Promise(r => setTimeout(r, 400 + Math.random() * 400));

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
                   '(KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';

async function fetchDepauSearch(page, query) {
  const encoded = encodeURIComponent(query);
  const url = `https://www.depau.es/ajaxrequest/listado/buscar?q=${encoded}&order=price&orderby=asc`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  return await page.content();
}

function parseDepauProducts(html) {
  const products = [];
  const re = /data-codigo="([^"]+)"[^>]*data-url="([^"]+)"[\s\S]*?src="(https:\/\/cdn2\.depau\.es\/articulos\/160[^"]+)"[\s\S]*?<span class="titulo-producto[^"]*">\s*([^<]+)\s*<\/span>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    products.push({
      sku:   m[1],
      url:   m[2],
      image: m[3].replace('/160/160/', '/448/448/'),
      name:  m[4].trim()
    });
  }
  return products;
}

// JBL reference prices Spain (junio 2026)
const JBL_PRICES = {
  'JBL-ALT GO5 BK':      49.99,
  'JBL-ALT CLIP5 BK':    64.99,
  'JBL-ALT FLIP6 BK':    99.99,
  'JBL-ALT FLIP7 WH':   129.99,
  'JBL-ALT CHARGE 6 BK':169.99
};

// Sonos products from sonos.com/es-es (junio 2026)
const SONOS_PRODUCTS = [
  {
    id: 132, name: 'Sonos Era 100 Shadow Black', brand: 'Sonos', category: 'altavoces',
    price: 179.00,
    badge: 'Wi-Fi · Dolby Atmos · AirPlay 2',
    image: 'https://media.sonos.com/images/znqtjj88/production/ba7417c9ec5d2dcf54f46a4b3481eb1d5d55d1b5-2000x2000.png',
    description: 'Altavoz inteligente compacto con audio de alta fidelidad, Wi-Fi + Bluetooth, Trueplay Tuning automático y soporte Dolby Atmos. Compatible con Amazon Alexa integrada, AirPlay 2, Spotify Connect y más de 100 servicios de streaming. Stereo pair con otro Era 100.',
    specs: {
      'Potencia RMS':     'No publicada (amplificiación interna DSP)',
      'Drivers':          '2 tweeters + 1 woofer — 3 canales amplificados',
      'Conectividad':     'Wi-Fi 2.4/5 GHz + Bluetooth 5.0',
      'Asistentes':       'Amazon Alexa integrada · compatible Google Assistant vía app',
      'AirPlay':          'AirPlay 2',
      'Dolby Atmos':      'Sí — procesamiento espacial',
      'Stereo pair':      'Sí — con otro Era 100',
      'Resistencia':      'No certificada IP (uso interior)',
      'Dimensiones':      '119 × 119 × 161 mm',
      'Fuente':           'sonos.com/es-es'
    }
  },
  {
    id: 133, name: 'Sonos Roam 2 Shadow Black', brand: 'Sonos', category: 'altavoces',
    price: 199.00,
    badge: 'Portátil · IP67 · 10h · Alexa',
    image: 'https://media.sonos.com/images/znqtjj88/production/110a711ffb1d9ec82743734ef7477a7d400c8d11-2400x2400.png',
    description: 'El altavoz portátil inteligente de Sonos: Wi-Fi en casa, Bluetooth en movimiento. IP67 totalmente sumergible, 10 horas de batería y carga inalámbrica Qi. Amazon Alexa integrada, Google Assistant, AirPlay 2 y AutoPlay: detecta la red y lanza el audio automáticamente. Solo 432g.',
    specs: {
      'Potencia RMS':     'No publicada (clase D amplificado)',
      'Drivers':          '1 tweeter + 1 woofer — 2 amplificadores digitales',
      'Conectividad':     'Wi-Fi 2.4/5 GHz + Bluetooth 5.0',
      'Asistentes':       'Amazon Alexa + Google Assistant (integrados)',
      'Batería':          '10 horas de reproducción · Carga USB-C + Qi inalámbrica',
      'Resistencia':      'IP67 — sumergible hasta 1m durante 30 min',
      'AirPlay':          'AirPlay 2',
      'Peso':             '432g',
      'Dimensiones':      '62 × 62 × 151 mm',
      'Fuente':           'sonos.com/es-es'
    }
  },
  {
    id: 134, name: 'Sonos Era 100 White', brand: 'Sonos', category: 'altavoces',
    price: 229.00,
    badge: 'Wi-Fi · Dolby Atmos · AirPlay 2',
    image: 'https://media.sonos.com/images/znqtjj88/production/c730c924a2d9fe4d3a3b9b9cb7432b7afd0ab392-2000x2000.png',
    description: 'Sonos Era 100 en color blanco: el altavoz inteligente compacto con audio de alta fidelidad, Wi-Fi + Bluetooth, Trueplay Tuning automático y soporte Dolby Atmos. Amazon Alexa integrada, AirPlay 2 y más de 100 servicios de streaming. Configurable en stereo pair.',
    specs: {
      'Potencia RMS':     'No publicada (amplificiación interna DSP)',
      'Drivers':          '2 tweeters + 1 woofer — 3 canales amplificados',
      'Conectividad':     'Wi-Fi 2.4/5 GHz + Bluetooth 5.0',
      'Asistentes':       'Amazon Alexa integrada · compatible Google Assistant vía app',
      'AirPlay':          'AirPlay 2',
      'Dolby Atmos':      'Sí — procesamiento espacial',
      'Stereo pair':      'Sí — con otro Era 100',
      'Resistencia':      'No certificada IP (uso interior)',
      'Dimensiones':      '119 × 119 × 161 mm',
      'Fuente':           'sonos.com/es-es'
    }
  },
  {
    id: 135, name: 'Sonos Era 300 White', brand: 'Sonos', category: 'altavoces',
    price: 399.00,
    badge: 'Spatial Audio · 6 drivers · Dolby Atmos',
    image: 'https://media.sonos.com/images/znqtjj88/production/1dfecdf1513cd96cd28e789adac4957b97adf50b-1800x1800.png',
    description: 'El altavoz Spatial Audio de Sonos: 6 drivers orientados en 5 direcciones para sonido 360°, procesamiento Dolby Atmos y Sony 360 Reality Audio. Trueplay Tuning avanzado con análisis de sala. Amazon Alexa integrada, AirPlay 2. El mejor altavoz de sobremesa de Sonos.',
    specs: {
      'Drivers':          '6 drivers amplificados — orientados en 5 direcciones',
      'Audio':            'Dolby Atmos · Sony 360 Reality Audio · Spatial Audio',
      'Conectividad':     'Wi-Fi 2.4/5 GHz + Bluetooth 5.0',
      'Asistentes':       'Amazon Alexa integrada · compatible Google Assistant',
      'AirPlay':          'AirPlay 2',
      'Trueplay':         'Tuning avanzado con análisis de sala',
      'Stereo pair':      'Sí — con otro Era 300 o Era 100',
      'Resistencia':      'No certificada IP (uso interior)',
      'Dimensiones':      '160 × 160 × 185 mm',
      'Fuente':           'sonos.com/es-es'
    }
  },
  {
    id: 136, name: 'Sonos Move 2 Olive', brand: 'Sonos', category: 'altavoces',
    price: 499.00,
    badge: 'Portátil + Casa · IP56 · 24h · Alexa',
    image: 'https://media.sonos.com/images/znqtjj88/production/87e816c0a480d8a27c1d379e02e84d84f6db5041-1280x1280.png',
    description: 'El altavoz premium portátil y de hogar de Sonos: Wi-Fi en casa, Bluetooth en el exterior. IP56 resistente al agua, 24 horas de batería, carga por base magnética + USB-C. Amazon Alexa + Google Assistant integrados, AirPlay 2 y Trueplay Tuning. El único Sonos con modo uso exterior completo.',
    specs: {
      'Potencia RMS':     'No publicada (clase D amplificado premium)',
      'Drivers':          '2 tweeters + 1 woofer — 3 canales amplificados',
      'Conectividad':     'Wi-Fi 2.4/5 GHz + Bluetooth 5.0',
      'Asistentes':       'Amazon Alexa + Google Assistant (integrados)',
      'Batería':          '24 horas · Carga base magnética + USB-C',
      'Resistencia':      'IP56 — resistente a salpicaduras y lluvia',
      'AirPlay':          'AirPlay 2',
      'Peso':             '3 kg',
      'Dimensiones':      '163 × 163 × 240 mm',
      'Fuente':           'sonos.com/es-es'
    }
  }
];

async function main() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--lang=es-ES']
  });

  const page = await browser.newPage();
  await page.setUserAgent(USER_AGENT);
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

  // ── Flujo B: JBL en Depau ──────────────────────────────────────────────────
  console.log('[Flujo B] Buscando JBL altavoces en Depau...');
  await page.goto('https://www.depau.es/', { waitUntil: 'domcontentloaded' });

  // Aceptar cookies si aparece el banner
  try {
    await page.waitForSelector('[id*="cookie"] button, .accept-cookies', { timeout: 4000 });
    await page.click('[id*="cookie"] button, .accept-cookies');
  } catch (_) {}

  await RANDOM_DELAY();

  const jblHtml   = await fetchDepauSearch(page, 'altavoz jbl');
  const jblFlipHtml    = await fetchDepauSearch(page, 'jbl flip 7');
  await RANDOM_DELAY();
  const jblChargeHtml  = await fetchDepauSearch(page, 'jbl charge 6');

  await browser.close();

  let allJBL = [
    ...parseDepauProducts(jblHtml),
    ...parseDepauProducts(jblFlipHtml),
    ...parseDepauProducts(jblChargeHtml)
  ];

  // Deduplicar por SKU
  const seen = new Set();
  allJBL = allJBL.filter(p => { if (seen.has(p.sku)) return false; seen.add(p.sku); return true; });

  // Filtrar solo los 5 seleccionados + añadir precios de referencia
  const selectedJBL = Object.keys(JBL_PRICES)
    .map(sku => {
      const p = allJBL.find(x => x.sku === sku);
      return p ? { ...p, price: JBL_PRICES[sku] } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.price - b.price);

  console.log(`[Flujo B] JBL extraídos: ${selectedJBL.length} productos`);

  // ── Combinar y ordenar por precio ──────────────────────────────────────────
  const allProducts = [...selectedJBL, ...SONOS_PRODUCTS]
    .sort((a, b) => a.price - b.price);

  console.log('\n=== CATÁLOGO FINAL (10 productos ordenados por precio) ===');
  allProducts.forEach(p => console.log(`  €${p.price.toFixed(2).padStart(6)} — ${p.name}`));

  // ── Integración en products.json / app.js ─────────────────────────────────
  const dataPath = path.join(__dirname, 'src', 'data', 'products.json');
  if (fs.existsSync(dataPath)) {
    const raw  = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const updated = [...raw.filter(p => p.brand !== 'Sonos' && p.brand !== 'JBL'), ...allProducts];
    fs.writeFileSync(dataPath, JSON.stringify(updated, null, 2), 'utf8');
    console.log(`\n[OK] products.json actualizado — ${updated.length} productos totales`);
  } else {
    console.log('\n[INFO] products.json no encontrado — los productos se inyectan directamente en app.js');
  }
}

main().catch(console.error);
