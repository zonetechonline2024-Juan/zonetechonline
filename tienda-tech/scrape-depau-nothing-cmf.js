/**
 * scrape-depau-nothing-cmf.js
 * ZoneTechOnline — Extracción de auriculares Nothing + CMF by Nothing
 * Fecha: junio 2026
 *
 * RESULTADO DE BÚSQUEDA EN DEPAU.ES:
 *   Depau no distribuye productos de las marcas Nothing ni CMF by Nothing.
 *   API endpoint probado: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *   Queries probadas: "nothing ear", "nothing audio", "cmf nothing", "cmf buds", "nothing"
 *   Resultado: total=0 en todos los casos.
 *
 * PROTOCOLO DE FUENTE OFICIAL:
 *   Se obtienen datos directamente de es.nothing.tech (Shopify CDN oficial).
 *   Imágenes verificadas con HTTP 200 desde el CDN de Nothing Technology.
 *
 * NOTA: Los 5 productos Nothing Ear (IDs 72-76) ya existían en el catálogo.
 *       Este script añade los 5 productos CMF by Nothing (IDs 157-161).
 */

// ──────────────────────────────────────────────────────────────────────────────
// PUPPETEER SCAFFOLD (requiere: npm install puppeteer)
// Si Depau incorpora estas marcas en el futuro, descomentar y ejecutar.
// ──────────────────────────────────────────────────────────────────────────────
/*
const puppeteer = require('puppeteer');

async function scrapeDepauBrand(brand, limit = 5) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  );

  // Flujo A: Nothing audio
  // Flujo B: CMF by Nothing audio
  const baseUrl = 'https://www.depau.es/ajaxrequest/listado/buscar';
  const url = `${baseUrl}?q=${encodeURIComponent(brand)}&order=price&orderby=asc`;

  try {
    const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
    const json = await page.evaluate(() => JSON.parse(document.body.innerText));
    const products = (json.products || []).filter(p =>
      // Excluir cargadores, fundas, almohadillas
      !/funda|silicona|cargador|adaptador|almohadilla|repuesto/i.test(p.name)
    );
    await browser.close();
    return products.slice(0, limit).map(p => ({
      name: p.name,
      price: parseFloat(p.price.replace(',', '.').replace('€', '').trim()),
      image: p.image,
      brand: brand,
      category: 'auriculares'
    }));
  } catch (e) {
    console.log(`${brand}: 0 resultados (${e.message})`);
    await browser.close();
    return [];
  }
}
*/

// ──────────────────────────────────────────────────────────────────────────────
// DATOS EXTRAÍDOS DE es.nothing.tech (junio 2026) — verificados HTTP 200
// Fuente oficial: https://es.nothing.tech/collections/audio
// Ordenados por precio ascendente dentro de cada marca
// ──────────────────────────────────────────────────────────────────────────────

// Flujo A: Nothing Ear (5 productos) — YA EN CATÁLOGO (IDs 72–76)
// Se mantienen como referencia. No se reinyectan.
const NOTHING_PRODUCTS = [
  {
    id: 72,
    name: 'Nothing Ear (a) Yellow',
    brand: 'Nothing',
    category: 'auriculares',
    price: 69.00,
    oldPrice: 89.00,
    badge: 'ANC Adaptativo',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0025_Ear-a-yellow.png',
    specs: { ANC: 'hasta -42dB', Batería: '22,5h', IP: 'IP55', LDAC: 'No', App: 'Nothing X + ChatGPT', BT: '5.3' }
  },
  {
    id: 73,
    name: 'Nothing Ear (a) White',
    brand: 'Nothing',
    category: 'auriculares',
    price: 69.00,
    oldPrice: 89.00,
    badge: 'ANC Adaptativo',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0026_Ear-a-white.png',
    specs: { ANC: 'hasta -42dB', Batería: '22,5h', IP: 'IP55', LDAC: 'No', App: 'Nothing X + ChatGPT', BT: '5.3' }
  },
  {
    id: 74,
    name: 'Nothing Ear (a) Black',
    brand: 'Nothing',
    category: 'auriculares',
    price: 69.00,
    oldPrice: 89.00,
    badge: 'ANC Adaptativo',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0027_Ear-a-black.png',
    specs: { ANC: 'hasta -42dB', Batería: '22,5h', IP: 'IP55', LDAC: 'No', App: 'Nothing X + ChatGPT', BT: '5.3' }
  },
  {
    id: 75,
    name: 'Nothing Ear Black',
    brand: 'Nothing',
    category: 'auriculares',
    price: 89.00,
    oldPrice: 109.00,
    badge: 'LDAC · ANC -45dB',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0024_Ear-black.png',
    specs: { ANC: 'hasta -45dB', Batería: '40h', IP: 'IP55', LDAC: 'Sí (990 Kbps)', App: 'Nothing X + ChatGPT', BT: '5.3' }
  },
  {
    id: 76,
    name: 'Nothing Ear (3) Black',
    brand: 'Nothing',
    category: 'auriculares',
    price: 149.00,
    oldPrice: 179.00,
    badge: 'Hi-Res Audio · LDAC',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/Ear3-black.png',
    specs: { ANC: 'hasta -45dB', Batería: '40h', IP: 'IP55', LDAC: 'Sí Hi-Res Wireless', App: 'Nothing X + ChatGPT', BT: '5.3' }
  }
];

// Flujo B: CMF by Nothing (5 productos) — NUEVOS (IDs 157–161)
const CMF_PRODUCTS = [
  {
    id: 157,
    name: 'CMF by Nothing Buds 2a',
    brand: 'CMF by Nothing',
    category: 'auriculares',
    price: 39.95,
    oldPrice: 49.95,
    badge: 'ANC 42dB · 35.5h · IP54',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0073_CMF-Buds-2a-case-orange.png?v=1753694874',
    specs: { ANC: 'Híbrido hasta -42dB', Batería: '35,5h (7h + estuche)', IP: 'IP54', LDAC: 'No', App: 'Nothing X (Android/iOS)', BT: '5.3', Peso: '4,5g/auricular' }
  },
  {
    id: 158,
    name: 'CMF by Nothing Buds 2',
    brand: 'CMF by Nothing',
    category: 'auriculares',
    price: 49.95,
    oldPrice: 59.95,
    badge: 'ANC 48dB · 55h · IP55',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0077_CMF-Buds-2-case-lightgreen.png?v=1753694855',
    specs: { ANC: 'Híbrido hasta -48dB · Modo Viento', Batería: '55h total (11h + estuche)', IP: 'IP55', LDAC: 'No', App: 'Nothing X (Android/iOS)', BT: '5.3', Peso: '4,6g/auricular' }
  },
  {
    id: 159,
    name: 'CMF by Nothing Buds 2 Plus',
    brand: 'CMF by Nothing',
    category: 'auriculares',
    price: 59.95,
    oldPrice: 74.95,
    badge: 'ANC 50dB · 61.5h · LDAC',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0079_CMF-Buds-2-Plus-case-lightgrey.png?v=1753694836',
    specs: { ANC: 'Híbrido hasta -50dB · Modo Viento', Batería: '61,5h total (9h + estuche)', IP: 'IP55', LDAC: 'Sí (hasta 990 Kbps)', App: 'Nothing X (Android/iOS)', BT: '5.3', Audio: 'Hi-Res Audio Wireless' }
  },
  {
    id: 160,
    name: 'CMF by Nothing Buds Pro 2',
    brand: 'CMF by Nothing',
    category: 'auriculares',
    price: 64.95,
    oldPrice: 79.95,
    badge: 'ANC 50dB · 35.5h · IP54',
    image: 'https://cdn.sanity.io/images/gtd4w1cq/production/2f7f187714e728295aafbd50d57706a3a9869dd7-4096x2304.jpg',
    specs: { ANC: 'Híbrido hasta -50dB · Modo Viento', Batería: '35,5h total', IP: 'IP54', LDAC: 'No', App: 'Nothing X (Android/iOS)', BT: '5.3', Driver: '11mm dinámico personalizado' }
  },
  {
    id: 161,
    name: 'CMF by Nothing Headphone Pro',
    brand: 'CMF by Nothing',
    category: 'auriculares',
    price: 99.00,
    oldPrice: 119.00,
    badge: '50h · ANC · Plegable · Nothing X',
    image: 'https://cdn.shopify.com/s/files/1/0585/8908/5875/files/CMF_Headphone1-Light-Green.png?v=1758799951',
    specs: { ANC: 'Activo (until 99% bloqueo)', Batería: '50h (ANC on) · Carga USB-C', IP: 'Sin certificación', LDAC: 'No', App: 'Nothing X (Android/iOS)', BT: '5.3', Tipo: 'Over-ear circum-aural plegable', Peso: '240g' }
  }
];

// ──────────────────────────────────────────────────────────────────────────────
// COMBINADO — 10 productos totales, ordenados por precio ascendente
// ──────────────────────────────────────────────────────────────────────────────
const ALL_AUDIO = [...NOTHING_PRODUCTS, ...CMF_PRODUCTS]
  .sort((a, b) => a.price - b.price);

console.log('=== ZoneTechOnline — Audio Nothing + CMF by Nothing ===');
console.log(`Total: ${ALL_AUDIO.length} productos`);
ALL_AUDIO.forEach(p => console.log(`ID ${p.id} [${p.brand}] ${p.name} — €${p.price}`));

// ──────────────────────────────────────────────────────────────────────────────
// AUTO-INJECT: Los CMF_PRODUCTS se inyectan en js/app.js via PRODUCTS.push()
// (ejecutado como parte del pipeline de actualización del catálogo)
// ──────────────────────────────────────────────────────────────────────────────
function injectProducts(targetFile) {
  const fs = require('fs');
  const path = require('path');
  let content = fs.readFileSync(targetFile, 'utf-8');
  const marker = '// ─── SVG GENERATORS';
  if (!content.includes(marker)) {
    console.error('Marcador no encontrado en ' + targetFile);
    return;
  }
  const block = generateProductsBlock(CMF_PRODUCTS);
  content = content.replace(marker, block + '\n\n' + marker);
  fs.writeFileSync(targetFile, content, 'utf-8');
  console.log(`Inyectados ${CMF_PRODUCTS.length} productos CMF en ${targetFile}`);
}

function generateProductsBlock(products) {
  const lines = ['// ─── CMF BY NOTHING PRODUCTS (fuente: es.nothing.tech — datos junio 2026) ─'];
  lines.push('PRODUCTS.push(');
  products.forEach((p, i) => {
    const specs = Object.entries(p.specs)
      .map(([k, v]) => `      '${k}':      '${v}'`)
      .join(',\n');
    lines.push(`
  { id:${p.id}, name:'${p.name}', brand:'${p.brand}', category:'${p.category}',
    price:${p.price},
    oldPrice: ${p.oldPrice},
    badge:'${p.badge}',
    image:'${p.image}',
    description:'${p.name}: auriculares ${p.badge.toLowerCase()}. ANC ${p.specs.ANC}, batería ${p.specs.Batería}. Diseño minimalista de Nothing Technology. App Nothing X compatible con Android e iOS.',
    specs:{
${specs}
    }
  }${i < products.length - 1 ? ',' : ''}`);
  });
  lines.push(');');
  return lines.join('\n');
}

module.exports = { NOTHING_PRODUCTS, CMF_PRODUCTS, ALL_AUDIO, injectProducts };
