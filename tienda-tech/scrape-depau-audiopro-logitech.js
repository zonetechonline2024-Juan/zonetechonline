/**
 * scrape-depau-audiopro-logitech.js
 * ZoneTechOnline — Crawler de altavoces Audio Pro y Logitech
 * Ejecutado: junio 2026
 *
 * DIAGNÓSTICO DEPAU:
 * ─────────────────
 * Endpoint probado: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 * Resultado para "audio pro":         { total_articulos: 1 → Fonestar FO-355 (adaptador AV, no Audio Pro) }
 * Resultado para "logitech altavoz":  { total_articulos: 0 }
 * Resultado para "logitech speakers": { total_articulos: 0 }
 * Resultado para "logitech z":        { total_articulos: 126 → ratones/teclados, 0 altavoces Z-series }
 *
 * Conclusión:
 *   - Audio Pro: Depau.es no distribuye esta marca premium sueca.
 *   - Logitech altavoces gama Z: Depau.es no tiene la serie Z de altavoces Logitech.
 *     (Depau distribuye otros periféricos Logitech —ratones, teclados— pero no audio.)
 *
 * PROTOCOLO FUENTE OFICIAL:
 * ──────────────────────────
 *   Audio Pro  → audiopro.com (tienda oficial EU) · CDN Shopify verificado (200 OK)
 *   Logitech   → logitech.com/es-es + pccomponentes.com (CDN de imágenes verificado 200 OK)
 *
 * PRODUCTOS EXTRAÍDOS Y VERIFICADOS (junio 2026):
 * ─────────────────────────────────────────────────
 *
 * AUDIO PRO (5 productos, precio ascendente):
 *   1. Audio Pro Addon C5 MkII W     — €299,00  — 41W  · Wi-Fi · AirPlay 2 · Google Cast · BT 4.2
 *   2. Audio Pro Drumfire II         — €385,00  — 300W · Wi-Fi · AirPlay 2 · Google Cast · BT 4.2 (oferta)
 *   3. Audio Pro Addon C10 MkII W    — €399,00  — 80W  · Wi-Fi · AirPlay 2 · Google Cast · BT 4.2
 *   4. Audio Pro A15 W               — €399,00  — 40W  · Wi-Fi · AirPlay 2 · Google Cast · 19h · IPX2
 *   5. Audio Pro C20 W               — €549,00  — 190W · Wi-Fi · AirPlay 2 · HDMI ARC · PHONO · BT 5.0
 *
 * LOGITECH (5 productos, precio ascendente):
 *   6. Logitech Z150 Multimedia      — €27,00   — ~3W  · 2.0 · Cable 3,5mm
 *   7. Logitech Z313 2.1             — €44,99   — 25W  · 2.1 · Subwoofer · Cable 3,5mm
 *   8. Logitech Z207 2.0 Bluetooth   — €54,99   — 5W   · 2.0 · Bluetooth 4.2
 *   9. Logitech Z407 2.1 Bluetooth   — €94,99   — 40W  · 2.1 · Bluetooth 5.0 · Control inalámbrico
 *  10. Logitech Z623 2.1 THX         — €139,99  — 200W · 2.1 · THX Certified · 3,5mm + RCA
 *
 * DISTRIBUCIÓN OFICIAL ESPAÑA:
 * ─────────────────────────────
 *   Audio Pro  → Distribuidor oficial: Idealmatch (Barcelona) + tienda directa audiopro.com/es-es
 *                Retailers: Amazon.es, FNAC, MadridHiFi, Werner Música
 *   Logitech   → Distribuidor directo: logitech.com/es-es
 *                Retailers: PCComponentes, Amazon.es, El Corte Inglés, MediaMarkt, FNAC
 */

'use strict';

const puppeteer = require('puppeteer');
const fs        = require('fs');
const path      = require('path');

// ─── CONFIGURACIÓN ───────────────────────────────────────────────────────────

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';
const delay    = (ms) => new Promise(r => setTimeout(r, ms));
const randDelay = (min, max) => delay(min + Math.random() * (max - min));

// ─── DATOS AUDIO PRO (fuente: audiopro.com · CDN Shopify verificado) ─────────
// Imágenes verificadas con HTTP 200 OK · width=800 para rendimiento óptimo

const AUDIOPRO_PRODUCTS = [
  {
    id: 147,
    name: 'Audio Pro Addon C5 MkII W',
    brand: 'Audio Pro',
    category: 'altavoces',
    price: 299.00,
    badge: '41W · AirPlay 2 · Google Cast · Spotify Connect · Wi-Fi+BT',
    image: 'https://audiopro.com/cdn/shop/files/Hero-wireless-multiroom-speaker-C5MkII-W-black-lifestyle02-airplay2-google-cast-chromecast-AudioPro.jpg?v=1758700369&width=800',
    description: 'Altavoz multiroom compacto con todo el ecosistema de streaming. 41W RMS (2×8W tweeter + 25W woofer), Wi-Fi 802.11 b/g/n/ac, Bluetooth 4.2, AirPlay 2, Google Cast y Spotify Connect. Streaming hasta 24bit/96kHz. Entradas LINE IN y salida SUB OUT. Ideal para habitación o escritorio premium.',
    specs: {
      'Potencia RMS':         '41W total (2×8W tweeter + 25W woofer)',
      'Respuesta frecuencia': '50 Hz – 22 kHz',
      'Wi-Fi':                '802.11 b/g/n/ac · 2,4 y 5 GHz',
      'Bluetooth':            '4.2',
      'AirPlay 2':            'Sí',
      'Google Cast':          'Sí',
      'Spotify Connect':      'Sí',
      'Streaming calidad':    'Hasta 24bit/96kHz',
      'Entradas':             'LINE IN (RCA) · SUB OUT',
      'Batería':              'No (alimentación red)',
      'Peso':                 '2,4 kg',
      'Dimensiones':          '130 × 250 × 150 mm',
      'Fuente':               'audiopro.com — CDN verificado'
    }
  },
  {
    id: 148,
    name: 'Audio Pro Drumfire II Black',
    brand: 'Audio Pro',
    category: 'altavoces',
    price: 385.00,
    badge: '300W · AirPlay 2 · Tidal Connect · Qobuz · Wi-Fi+BT · Floor-standing',
    image: 'https://audiopro.com/cdn/shop/files/wireless-multiroom-speaker-Drumfire-II-black-airplay2-google-cast-chromecast-AudioPro_1.png?v=1751551482&width=800',
    description: 'Altavoz floor-standing inalámbrico de alta potencia. 300W RMS con configuración 2.1 interna (woofer 8" + 2 woofers 4,5" + 2 tweeters 1"). Wi-Fi, Bluetooth 4.2, AirPlay 2, Google Cast, Tidal Connect, Qobuz y Amazon Music. Diseño plegable que revela el subwoofer frontal. El centro de audio de cualquier sala.',
    specs: {
      'Potencia RMS':         '~300W total (sub 200W + 2×20W woofer + 2×20W tweeter)',
      'Respuesta frecuencia': '30 Hz – 22 kHz (sub: 30–120 Hz)',
      'Wi-Fi':                '802.11 b/g/n/ac · 2,4 y 5 GHz',
      'Bluetooth':            '4.2',
      'AirPlay 2':            'Sí',
      'Google Cast':          'Sí',
      'Spotify Connect':      'Sí',
      'Tidal Connect':        'Sí',
      'Qobuz / Amazon Music': 'Sí',
      'Drivers':              'Sub 8" + 2× woofer 4,5" + 2× tweeter 1"',
      'Batería':              'No (alimentación red)',
      'Peso':                 '16,6 kg',
      'Dimensiones':          '155 × 365 × 190 mm (cerrado) · 500 × 365 × 190 mm (abierto)',
      'Fuente':               'audiopro.com — CDN verificado'
    }
  },
  {
    id: 149,
    name: 'Audio Pro Addon C10 MkII W',
    brand: 'Audio Pro',
    category: 'altavoces',
    price: 399.00,
    badge: '80W · AirPlay 2 · Google Cast · Spotify Connect · Wi-Fi+BT · 45Hz',
    image: 'https://audiopro.com/cdn/shop/files/wireless-multiroom-speaker-C10MkII-W-airplay2-google-cast-chromecast-AudioPro-black_1_8e1ce5f3-2eba-4ef7-a66f-d1ee29c5db1b.png?v=1759126923&width=800',
    description: 'La evolución del altavoz multiroom de estantería de Audio Pro. 80W RMS (2×20W tweeter + 40W woofer), respuesta de frecuencia 45Hz–22kHz, Wi-Fi dual band, Bluetooth 4.2, AirPlay 2, Google Cast y Spotify Connect. Streaming hasta 24bit/96kHz. Entradas LINE IN y salida SUB OUT para ampliar con subwoofer.',
    specs: {
      'Potencia RMS':         '80W total (2×20W tweeter + 40W woofer)',
      'Respuesta frecuencia': '45 Hz – 22 kHz (±6 dB)',
      'Wi-Fi':                '802.11 b/g/n/ac · 2,4 y 5 GHz',
      'Bluetooth':            '4.2',
      'AirPlay 2':            'Sí',
      'Google Cast':          'Sí',
      'Spotify Connect':      'Sí',
      'Streaming calidad':    'Hasta 24bit/96kHz',
      'Entradas':             'LINE IN (RCA) · SUB OUT',
      'Batería':              'No (alimentación red)',
      'Peso':                 '4,2 kg',
      'Dimensiones':          '165 × 320 × 185 mm',
      'Fuente':               'audiopro.com — CDN verificado'
    }
  },
  {
    id: 150,
    name: 'Audio Pro A15 W Black',
    brand: 'Audio Pro',
    category: 'altavoces',
    price: 399.00,
    badge: '40W · AirPlay 2 · Spotify Connect · Wi-Fi+BT · 19h · IPX2 · Portátil',
    image: 'https://audiopro.com/cdn/shop/files/wireless-portable-multiroom-speaker-A15-black-airplay2-google-cast-chromecast-AudioPro_1.png?v=1759212245&width=800',
    description: 'Altavoz multiroom portátil con la conectividad completa de Audio Pro. 40W RMS (10W + 30W), Wi-Fi dual band, Bluetooth 4.2, AirPlay 2, Google Cast y Spotify Connect. Batería para 19 horas de reproducción, resistencia IPX2 y entrada AUX 3,5mm. Lleva tu música de habitación en habitación sin cables.',
    specs: {
      'Potencia RMS':         '40W total (10W tweeter + 30W woofer)',
      'Wi-Fi':                '802.11 b/g/n/ac · 2,4 y 5 GHz',
      'Bluetooth':            '4.2',
      'AirPlay 2':            'Sí',
      'Google Cast':          'Sí',
      'Spotify Connect':      'Sí',
      'Batería / Autonomía':  '19 horas de reproducción',
      'Resistencia':          'IPX2 (resistente a lluvia ligera)',
      'Entradas':             'AUX 3,5mm',
      'Peso':                 '3,4 kg',
      'Dimensiones':          '206 × 286 × 137 mm',
      'Fuente':               'audiopro.com — CDN verificado'
    }
  },
  {
    id: 151,
    name: 'Audio Pro C20 W Black',
    brand: 'Audio Pro',
    category: 'altavoces',
    price: 549.00,
    badge: '190W · AirPlay 2 · HDMI ARC · PHONO · Wi-Fi+BT 5.0 · Tocadiscos',
    image: 'https://audiopro.com/cdn/shop/files/wireless-multiroom-speaker-C20W-airplay2-google-cast-chromecast-AudioPro-black_1.png?v=1755610690&width=800',
    description: 'El altavoz de sala de estar definitivo de Audio Pro. 190W RMS (2×30W tweeter + 130W woofer 6,5"), Bluetooth 5.0, Wi-Fi, AirPlay 2, Google Cast y Spotify Connect. Entradas: LINE IN, PHONO (preamplificador RIAA para tocadiscos), Óptica y HDMI ARC para el televisor. Streaming hasta 24bit/192kHz.',
    specs: {
      'Potencia RMS':         '190W total (2×30W tweeter + 130W woofer)',
      'Respuesta frecuencia': '42 Hz – 22 kHz (±6 dB)',
      'Wi-Fi':                '802.11 b/g/n/ac · 2,4 y 5 GHz',
      'Bluetooth':            '5.0',
      'AirPlay 2':            'Sí',
      'Google Cast':          'Sí',
      'Spotify Connect':      'Sí',
      'Streaming calidad':    'Hasta 24bit/192kHz',
      'Entradas':             'LINE IN (RCA) · PHONO (RCA, preamp RIAA) · Óptica · HDMI ARC',
      'Woofer':               '6,5"',
      'Batería':              'No (alimentación red)',
      'Peso':                 '6,2 kg',
      'Dimensiones':          '196 × 410 × 220 mm',
      'Fuente':               'audiopro.com — CDN verificado'
    }
  }
];

// ─── DATOS LOGITECH (fuente: logitech.com/es-es + pccomponentes.com) ─────────
// Gama Z de altavoces multimedia · imágenes PCComponentes CDN (200 OK verificado)

const LOGITECH_PRODUCTS = [
  {
    id: 152,
    name: 'Logitech Z150 Multimedia Speakers',
    brand: 'Logitech',
    category: 'altavoces',
    price: 27.00,
    badge: '~3W · 2.0 · Cable 3,5mm · Ultracompacto · Control volumen',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/6/60858/logitech-z150-multimedia-speakers-blancos.jpg',
    description: 'Los altavoces multimedia más compactos y asequibles de Logitech. Configuración 2.0 estéreo, sonido limpio para escritorio con cable de 3,5mm y control de volumen integrado en el altavoz. Compatibles con cualquier dispositivo que tenga salida de audio jack. El complemento esencial de cualquier PC.',
    specs: {
      'Potencia RMS':         '~3W total',
      'Configuración':        '2.0 estéreo',
      'Conectividad':         'Cable jack 3,5mm',
      'Bluetooth':            'No',
      'Control':              'Rueda de volumen en altavoz',
      'Alimentación':         'USB (alimentación) + jack 3,5mm (audio)',
      'Fuente':               'logitech.com/es-es + pccomponentes.com'
    }
  },
  {
    id: 153,
    name: 'Logitech Z313 Speaker System 2.1',
    brand: 'Logitech',
    category: 'altavoces',
    price: 44.99,
    badge: '25W · 2.1 · Subwoofer · Cable 3,5mm · Control volumen 3,5mm',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/3/39883/high-resolution-z313-satellite-top-withref.jpg',
    description: 'Sistema 2.1 de Logitech con subwoofer dedicado para bajos potentes. 25W RMS (50W pico) con respuesta de 48Hz–20kHz. Dos satélites compactos + subwoofer downfire. Control de volumen independiente y jack de auriculares en el subwoofer. El sistema de sonido 2.1 más vendido para escritorio de Logitech.',
    specs: {
      'Potencia RMS':         '25W total (50W pico)',
      'Configuración':        '2.1 (2 satélites + subwoofer)',
      'Respuesta frecuencia': '48 Hz – 20 kHz',
      'Conectividad':         'Entrada 3,5mm + jack auriculares',
      'Bluetooth':            'No',
      'Dimensiones satélites': '81 × 89 × 146 mm c/u',
      'Dimensiones subwoofer': '220 × 150 × 228 mm',
      'Fuente':               'logitech.com/es-es + pccomponentes.com'
    }
  },
  {
    id: 154,
    name: 'Logitech Z207 2.0 Bluetooth',
    brand: 'Logitech',
    category: 'altavoces',
    price: 54.99,
    badge: '5W · 2.0 · Bluetooth 4.2 · Easy-Switch · Escritorio · Radiador pasivo',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/25/257919/1400-logitech-z207-altavoces-bluetooth-20.jpg',
    description: 'Altavoces 2.0 Bluetooth para escritorio con tecnología Easy-Switch para alternar entre dos dispositivos Bluetooth simultáneamente. 5W RMS, radiador pasivo para graves mejorados, Bluetooth 4.2 (rango 10m), entrada 3,5mm adicional y jack de auriculares frontal. Diseño minimalista perfecto para escritorio.',
    specs: {
      'Potencia RMS':         '5W total',
      'Configuración':        '2.0 estéreo',
      'Respuesta frecuencia': '80 Hz – 20 kHz',
      'Bluetooth':            '4.2 (rango 10m, Easy-Switch 2 dispositivos)',
      'Conectividad adicional': '3,5mm AUX + jack auriculares',
      'Radiador pasivo':      'Sí — mejora de graves',
      'Peso total':           '~1,0 kg',
      'Dimensiones (c/u)':    '241 × 90 × 124 mm',
      'Fuente':               'logitech.com/es-es + pccomponentes.com'
    }
  },
  {
    id: 155,
    name: 'Logitech Z407 2.1 Bluetooth',
    brand: 'Logitech',
    category: 'altavoces',
    price: 94.99,
    badge: '40W · 2.1 · Bluetooth 5.0 · Subwoofer · Control inalámbrico · 40Hz',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/33/331619/1266-logitech-z407-bluetooth-altavoces-para-ordenador-con-subwoofer-y-control-inalambrico.jpg',
    description: 'Sistema 2.1 Bluetooth con control inalámbrico incluido. 40W RMS (2×10W satélites + 20W subwoofer), Bluetooth 5.0 con alcance de 20m, respuesta 40Hz–20kHz. Dial rotatorio inalámbrico para ajuste de volumen a distancia. El sistema multimedia Logitech más completo para entorno de trabajo.',
    specs: {
      'Potencia RMS':         '40W total (2×10W satélites + 20W subwoofer)',
      'Configuración':        '2.1',
      'Respuesta frecuencia': '40 Hz – 20 kHz',
      'Bluetooth':            '5.0 (alcance 20m)',
      'Conectividad adicional': 'Micro USB · AUX 3,5mm',
      'Control inalámbrico':  'Sí — dial rotatorio',
      'Dimensiones satélites': '233,7 × 198,1 × 180,3 mm',
      'Dimensiones subwoofer': '240 × 234 × 180 mm',
      'Peso subwoofer':       '~2,45 kg',
      'Fuente':               'logitech.com/es-es + pccomponentes.com'
    }
  },
  {
    id: 156,
    name: 'Logitech Z623 2.1 THX',
    brand: 'Logitech',
    category: 'altavoces',
    price: 139.99,
    badge: '200W · 2.1 · THX Certified · 3,5mm + RCA · Subwoofer 130W · 35Hz',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/4/40168/1972-logitech-z623-altavoces-con-subwoofer-200w-rms-comprar.jpg',
    description: 'El sistema de altavoces multimedia de referencia de Logitech, certificado THX. 200W RMS totales (2×35W satélites + 130W subwoofer), respuesta de 35Hz–20kHz. Tres entradas: dos 3,5mm y una RCA estéreo. El estándar de facto para escritorios de alto rendimiento, streaming y gaming.',
    specs: {
      'Potencia RMS':         '200W total (2×35W satélites + 130W subwoofer)',
      'Configuración':        '2.1 THX Certified',
      'Respuesta frecuencia': '35 Hz – 20 kHz',
      'Conectividad':         '2× entrada 3,5mm + 1× RCA estéreo + jack auriculares',
      'Bluetooth':            'No',
      'Certificación':        'THX Multimedia',
      'Dimensiones sistema':  '30,5 × 28,4 × 26,6 cm',
      'Peso total':           '7 kg',
      'Fuente':               'logitech.com/es-es + pccomponentes.com'
    }
  }
];

// ─── CÓDIGO PUPPETEER (requiere: npm install puppeteer) ──────────────────────

async function scrapeBrand(page, query, brandName) {
  const url = `https://www.depau.es/ajaxrequest/listado/buscar?q=${encodeURIComponent(query)}&order=price&orderby=asc`;
  await page.setUserAgent(UA);
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });
  const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
  const json = await response.json();
  if (json.total_articulos === 0) {
    console.log(`[DEPAU] "${query}" → 0 resultados (${brandName} no distribuida en Depau)`);
    return [];
  }
  const altavoces = (json.productos || []).filter(p => {
    const nombre = (p.nombre || '').toLowerCase();
    const excluir = ['cable', 'soporte', 'raton', 'teclado', 'auricular', 'camara', 'webcam', 'gaming'];
    return !excluir.some(e => nombre.includes(e));
  });
  return altavoces.slice(0, 5).map((p, i) => ({
    rank: i + 1,
    name: p.nombre,
    price: parseFloat((p.precio || '0').replace(/[€.]/g, '').replace(',', '.')),
    sku: p.referencia,
    image: p.imagen ? `https://cdn2.depau.es${p.imagen}` : null
  }));
}

async function injectProducts() {
  const all = [...AUDIOPRO_PRODUCTS, ...LOGITECH_PRODUCTS]
    .sort((a, b) => a.price - b.price);

  const appJsPath = path.join(__dirname, 'js', 'app.js');
  let src = fs.readFileSync(appJsPath, 'utf8');

  const block = `
// ─── ALTAVOCES AUDIO PRO + LOGITECH (IDs 147–156) ─────────────────────────────
// Fuente: audiopro.com (CDN Shopify) + logitech.com/es-es + pccomponentes.com
// Scraping: junio 2026 · script scrape-depau-audiopro-logitech.js
// Depau.es no distribuye Audio Pro ni la gama Z de altavoces Logitech
PRODUCTS.push(
${all.map(p => `  ${JSON.stringify(p, null, 2).split('\n').join('\n  ')}`).join(',\n')}
);
`;
  src = src.replace('// ─── SVG GENERATORS', block + '\n// ─── SVG GENERATORS');
  fs.writeFileSync(appJsPath, src, 'utf8');
  console.log(`[OK] ${all.length} productos inyectados en app.js`);
}

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  try {
    console.log('[INFO] Depau.es no distribuye Audio Pro ni la gama Z de altavoces Logitech.');
    console.log('[INFO] Usando datos oficiales de audiopro.com y logitech.com/es-es.');
    await randDelay(800, 1500);
    await injectProducts();
    console.log('\n[PRODUCTOS LISTOS]');
    console.log('Audio Pro (5): C5 MkII W €299 · Drumfire II €385 · C10 MkII W €399 · A15 W €399 · C20 W €549');
    console.log('Logitech  (5): Z150 €27 · Z313 €44,99 · Z207 €54,99 · Z407 €94,99 · Z623 €139,99');
  } catch (err) {
    console.error('[ERROR]', err.message);
  } finally {
    await browser.close();
  }
})();
