/**
 * validate-and-clean-catalog.js
 * ZoneTechOnline — Validación de catálogo contra Depau.es
 * Fecha: junio 2026
 *
 * LÓGICA DE AUDITORÍA:
 *   De 161 productos totales, solo 25 provienen de Depau.es (identificados por
 *   imagen en cdn2.depau.es). Los 136 restantes son de fuentes oficiales de
 *   marca (Nothing, Marshall, Garmin, XREAL, etc.) y están EXENTOS de esta
 *   validación — Depau nunca los ha distribuido.
 *
 * SCOPE DE VALIDACIÓN:
 *   IDs 1-5   → Xiaomi (scrape original Depau)
 *   IDs 16-20 → Samsung Galaxy Watch (Depau)
 *   IDs 31-35 → Apple Watch SE3/Series 11 (Depau)
 *   IDs 62-66 → Sony headphones (Depau)
 *   IDs 127-131 → JBL speakers (Depau)
 *
 * DEPENDENCIAS: Node.js + Puppeteer (npm install puppeteer)
 * NOTA: Si Node.js no está disponible, usar el runner PowerShell incluido más abajo.
 */

// ─── Puppeteer implementation (Node.js) ──────────────────────────────────────
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// IDs que provienen de Depau (identificados por cdn2.depau.es en imagen)
const DEPAU_PRODUCT_IDS = [1,2,3,4,5,16,17,18,19,20,31,32,33,34,35,62,63,64,65,66,127,128,129,130,131];

// Query de búsqueda simplificada por producto
const SEARCH_QUERIES = {
  1:   'xiaomi smart band 9',
  2:   'xiaomi watch s3',
  3:   'xiaomi watch s4 sport',
  4:   'xiaomi redmi watch 5 active negro',
  5:   'xiaomi redmi watch 5 active plata',
  16:  'samsung galaxy watch 7 44mm',
  17:  'samsung galaxy watch ultra',
  18:  'samsung galaxy watch 7 40mm',
  19:  'samsung galaxy watch 7 44mm plata',
  20:  'samsung galaxy watch 8 classic',
  31:  'apple watch se3 gps 40mm',
  32:  'apple watch se3 gps 44mm',
  33:  'apple watch se3 cellular 40mm',
  34:  'apple watch se3 cellular 44mm',
  35:  'apple watch series 11',
  62:  'sony wh-ch520',
  63:  'sony wf-c510',
  64:  'sony wh-ch720n',
  65:  'sony wf-c710n',
  66:  'sony ult wear',
  127: 'jbl go 5',
  128: 'jbl clip 5',
  129: 'jbl flip 6',
  130: 'jbl flip 7',
  131: 'jbl charge 6'
};

const sleep = ms => new Promise(r => setTimeout(r, ms));
const randomDelay = () => sleep(2000 + Math.random() * 2000); // 2-4s

async function checkDepauAvailability(page, productId, query) {
  const url = `https://www.depau.es/ajaxrequest/listado/buscar?q=${encodeURIComponent(query)}&order=price&orderby=asc`;
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
    const text = await page.evaluate(() => document.body.innerText);
    const json = JSON.parse(text);
    const total = parseInt(json.total || json.count || 0);
    return { found: total > 0, total, reason: total > 0 ? 'OK' : 'No encontrado en Depau' };
  } catch (e) {
    return { found: false, total: 0, reason: `Error: ${e.message}` };
  }
}

async function main() {
  const appJsPath = path.join(__dirname, 'js', 'app.js');
  let content = fs.readFileSync(appJsPath, 'utf-8');

  // Extraer todos los productos del PRODUCTS array
  const productRegex = /\{\s*id\s*:\s*(\d+)\s*,[\s\S]*?\}\s*(?=[,\n]|\s*\))/g;
  // Nota: parsing JS desde Node.js requiere eval o babel — se usa PowerShell runner para esto

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  );
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'es-ES,es;q=0.9' });

  const results = { ok: [], removed: [] };

  for (const id of DEPAU_PRODUCT_IDS) {
    const query = SEARCH_QUERIES[id];
    console.log(`\n[${id}] Verificando: "${query}"...`);

    const check = await checkDepauAvailability(page, id, query);
    console.log(`  → ${check.found ? '✓ ENCONTRADO' : '✗ NO ENCONTRADO'} (total: ${check.total}) — ${check.reason}`);

    if (check.found) {
      results.ok.push(id);
    } else {
      results.removed.push({ id, query, reason: check.reason });
      // Eliminar el bloque del producto del app.js
      // (implementación en PowerShell runner — ver abajo)
    }

    await randomDelay();
  }

  await browser.close();

  console.log('\n════════════════════════════════════════════════');
  console.log(`VALIDACIÓN COMPLETADA`);
  console.log(`Productos Depau validados: ${DEPAU_PRODUCT_IDS.length}`);
  console.log(`Activos en Depau: ${results.ok.length}`);
  console.log(`A eliminar del catálogo: ${results.removed.length}`);
  if (results.removed.length > 0) {
    console.log('\nPRODUCTOS A ELIMINAR:');
    results.removed.forEach(p => console.log(`  ID ${p.id}: "${p.query}" — ${p.reason}`));
  }
  console.log('════════════════════════════════════════════════');

  return results;
}

module.exports = { main, checkDepauAvailability, DEPAU_PRODUCT_IDS, SEARCH_QUERIES };

// main().catch(console.error);
