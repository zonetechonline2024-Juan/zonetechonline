# Informe Técnico: Proveedores Mayoristas de Tecnología en España
## Evaluación para Scraping con Node.js (Puppeteer/Cheerio) sin API

**Fecha de análisis:** 30 de mayo de 2026  
**Autor:** Análisis automatizado — Arquitectura de Datos B2B  
**Objetivo:** Identificar los 3 mejores mayoristas tecnológicos en España con almacenes físicos, catálogo compatible con las categorías de ZoneTechOnline y viabilidad técnica para extracción de datos con Puppeteer/Cheerio.

---

## Resumen Ejecutivo

Se analizaron 10 mayoristas tecnológicos con presencia en España: TD SYNNEX, Esprinet, Also, Ingram Micro, Megasur, Globomatik, Infortisa, Depau, PC Componentes y DIFOX.

**Descartados por portal 100% gated / sin catálogo público:** TD SYNNEX, Esprinet, Also, Ingram Micro.  
**Descartado por cobertura de marcas insuficiente:** Infortisa (no distribuye Garmin, Jabra, Sennheiser, Bose, Polar, Withings).  
**No aplicable:** PC Componentes (minorista, no mayorista B2B).

Los **3 mayoristas seleccionados** son: **Megasur, Globomatik y Depau**.

> **Nota crítica común a los tres:** Todos son portales B2B puros. Los precios y stock completo requieren credenciales de distribuidor (registro gratuito, activación en 24h). Ninguno permite scraping público de precios sin autenticación. Sin embargo, los tres ofrecen alternativas de extracción estructurada (feed CSV/XML o scraping autenticado con Puppeteer) completamente viables sin API oficial de pago.

---

## Tabla Comparativa Rápida

| Criterio | Megasur | Globomatik | Depau |
|---|:---:|:---:|:---:|
| Almacén en España | Granada | Almería | Cartagena (Murcia) |
| Garmin | Confirmado | **Distribuidor oficial** | No confirmado |
| Samsung | Confirmado | Confirmado | Confirmado |
| Sennheiser / Jabra | Jabra confirmado | **Sennheiser confirmado** | No confirmado |
| Sonos | Probable (+400 marcas) | **Confirmado** | No confirmado |
| Sony | Confirmado | Confirmado | Confirmado |
| Entrega 24-72h | 24h (antes 18:00) | **24h** (antes 17:45) | **24h** (antes 18:00) |
| Protección anti-bot | Alta (Cloudflare WAF) | Moderada (Cloudflare CDN) | **Baja** (PHP SSR limpio) |
| Tecnología portal | Custom + ML | Magento SSR | Custom PHP SSR |
| Feed CSV/XML oficial | Sí (con credenciales) | Sí (vía módulos terceros) | **Sí, cada 15 min** |
| Mejor para... | Amplitud de catálogo | **Marcas premium objetivo** | **Facilidad técnica scraping** |

---

## Proveedor #1 — MEGASUR

### 1. Información General

| Campo | Detalle |
|---|---|
| **Nombre** | Megasur S.A. |
| **Fundación** | 1986 |
| **URL** | https://www.megasur.es |
| **Almacén central** | C/ Los Visos, nº 14, 18130 Escúzar – Granada |
| **Instalaciones** | 15.000 m² de superficie, 112.000 m³ de capacidad |
| **Clientes activos** | Más de 5.000 distribuidores |
| **Catálogo** | +400 marcas, miles de referencias |

### 2. Compatibilidad con Categorías del Catálogo

| Categoría | Marcas Confirmadas | Estado |
|---|---|---|
| Smartwatches / Wearables | Garmin, Samsung | Confirmadas en catálogo público |
| Audio inteligente | Jabra, Sony | Jabra (`megasur.es/auriculares/jabra`) confirmado |
| Gadgets Apple | Apple | Confirmada |
| Audio premium (Bose, Sennheiser, Marshall) | Probable (>400 marcas totales) | No confirmadas individualmente |
| Salud (Polar, Withings) | Probable | No confirmadas individualmente |

**Conclusión de categorías:** Megasur tiene el catálogo más amplio de los tres. La sección pública confirma Garmin y Jabra explícitamente. Con +400 marcas activas, la probabilidad de encontrar Bose, Sennheiser, Polar y similares tras autenticación es alta.

### 3. Análisis Técnico para Scraping

**Tecnología del portal:** Plataforma propietaria con motor de ML para optimización de precios y stock (no PrestaShop ni Magento estándar). Renderizado server-side con partes AJAX.

**Protección anti-bot:** **Alta.** El servidor devuelve `HTTP 403` a cualquier cliente con User-Agent no navegador (axios, node-fetch, curl por defecto). Esto indica Cloudflare WAF activo o equivalente. El scraping HTML directo **fallará sin un headless browser real.**

**Estructura del catálogo:** Las URLs de categoría son públicas y predecibles:
```
https://www.megasur.es/smartwatches/garmin
https://www.megasur.es/auriculares/jabra
https://www.megasur.es/[categoria]/[marca]
```
Los precios y stock solo son visibles tras autenticación B2B.

**Alternativa más fiable al scraping HTML:** Megasur ofrece un **feed XML/CSV descargable** para distribuidores registrados con clave de acceso. Este feed está diseñado para importación en PrestaShop/WooCommerce y contiene nombres, SKU, EAN, precios, stock e imágenes. Es la vía técnicamente más segura y estable.

### 4. Estrategia de Extracción Segura

**Opción A (Recomendada): Feed XML/CSV oficial**
```javascript
// Tras registro de distribuidor (gratuito, 24h activación),
// Megasur proporciona una URL de feed con clave de acceso.
// Parsear con xml2js o csv-parse:

const axios = require('axios');
const xml2js = require('xml2js');

async function fetchMegasurFeed(feedUrl, apiKey) {
  const res = await axios.get(feedUrl, {
    params: { key: apiKey },
    responseType: 'text'
  });
  const parsed = await xml2js.parseStringPromise(res.data);
  return parsed.products.product.map(p => ({
    sku:         p.reference[0],
    name:        p.name[0],
    price:       parseFloat(p.price[0]),
    stock:       parseInt(p.quantity[0], 10),
    image:       p.image_url[0],
    description: p.description[0],
    ean:         p.ean13[0]
  }));
}
```

**Opción B: Puppeteer Stealth (si se requiere scraping HTML)**
```javascript
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

async function scrapeMegasur() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Simular User-Agent real
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  );

  // Login B2B
  await page.goto('https://www.megasur.es/login');
  await page.type('#email', process.env.MEGASUR_EMAIL);
  await page.type('#password', process.env.MEGASUR_PASS);
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Navegar a categoría
  await page.goto('https://www.megasur.es/smartwatches/garmin');

  // Extraer con Cheerio sobre HTML resultante
  const html = await page.content();
  const cheerio = require('cheerio');
  const $ = cheerio.load(html);

  const products = [];
  $('.product-card, .product-list-item').each((i, el) => {
    products.push({
      name:  $(el).find('.product-name, h2.title').text().trim(),
      sku:   $(el).find('.product-sku, .reference').text().trim(),
      price: $(el).find('.price, .product-price').text().trim(),
      image: $(el).find('img.product-image').attr('src'),
      stock: $(el).find('.stock, .availability').text().trim()
    });
  });

  // Paginación: detectar enlace "siguiente"
  const nextPage = $('a.next, a[rel="next"]').attr('href');
  // Si existe nextPage, repetir con page.goto(nextPage)

  await browser.close();
  return products;
}
```

> **Pausa entre requests recomendada:** 2.000–4.000ms aleatorio. Rotar viewport y User-Agent entre sesiones largas.

### 5. Logística de Envío

| Dato | Detalle |
|---|---|
| **Plazo de entrega** | 24 horas en España Peninsular (pedidos antes de 18:00h) |
| **Envío gratuito** | Pedidos ≥ 149€ (Península) |
| **Tarifa envío pequeño** | Cobro estándar en pedidos < 149€ |
| **Dropshipping** | Sí, disponible y gratuito (tarifa solo en pedidos < 149€) |
| **Cobertura** | España Peninsular, Portugal, Islas (con variación de plazo) |
| **Transportistas** | Red propia + agencias de transporte urgente |

---

## Proveedor #2 — GLOBOMATIK

### 1. Información General

| Campo | Detalle |
|---|---|
| **Nombre** | Globomatik S.L. |
| **URL** | https://www.globomatik.com |
| **Almacén central** | C/ María Tudor, s/n, 04009 – Almería |
| **Instalaciones** | 20.000 m² robotizados, capacidad 13.000 pallets |
| **Clientes activos** | Más de 5.000 distribuidores activos |
| **Catálogo** | +200 marcas, +6.000 productos en stock permanente |

### 2. Compatibilidad con Categorías del Catálogo

| Categoría | Marcas Confirmadas | Estado |
|---|---|---|
| Smartwatches / Wearables | **Garmin** | **Distribuidor oficial** (acuerdo firmado mayo 2020) |
| Teléfonos / Tablets | Samsung | Mayorista oficial confirmado |
| Audio inteligente | **Sennheiser**, Sony | `globomatik.com/marcas/mayorista-de-sennheiser` |
| Audio premium | **Sonos** | Confirmado en listado de marcas |
| Gadgets tech | Apple | Confirmado |
| Salud / Wellness | Polar, Withings | No confirmados individualmente |

**Conclusión de categorías:** Globomatik es el mayorista con **mejor alineación de marcas** con el catálogo de ZoneTechOnline. El acuerdo oficial con Garmin (GPS, smartwatches) y la distribución verificada de Sennheiser y Sonos lo hacen el candidato más sólido para las categorías de wearables premium y audio.

### 3. Análisis Técnico para Scraping

**Tecnología del portal:** **Magento** (confirmado por rutas `/customer/account/login`, estructura de templates `/skin/frontend/CompraAmiga/Globomatik`). Renderizado server-side (SSR) con componentes AJAX para actualizaciones de precio/stock.

**Protección anti-bot:** Cloudflare CDN activo, pero con nivel de protección **moderado**. Las páginas de marcas y categorías son accesibles sin bloqueo 403 explícito (a diferencia de Megasur). El HTML de las páginas de categoría es legible con Puppeteer estándar sin stealth plugin obligatorio (aunque recomendado por seguridad).

**Acceso a precios/stock:** Requiere login B2B. Sin autenticación, la navegación a categorías de productos devuelve "No se han encontrado resultados" para algunos segmentos, indicando que el catálogo completo está gated tras credenciales.

**Estructura Magento:** Predecible y estable. Magento tiene convenciones de HTML muy documentadas:
- Listados en `<ul class="products-grid">` o `<ol class="products-list">`
- Items individuales en `<li class="item">`
- Paginación con parámetro `?p=2`, `?p=3`

### 4. Estrategia de Extracción Segura

```javascript
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const cheerio = require('cheerio');

puppeteer.use(StealthPlugin());

async function scrapeGlobomatik(categoryUrl) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
    '(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  );

  // PASO 1: Autenticación en Magento
  await page.goto('https://www.globomatik.com/customer/account/login');
  await page.type('#email', process.env.GLOBOMATIK_EMAIL);
  await page.type('#pass', process.env.GLOBOMATIK_PASS);
  await page.click('#send2');
  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  const allProducts = [];
  let currentPage = 1;

  while (true) {
    const url = currentPage === 1
      ? categoryUrl
      : `${categoryUrl}?p=${currentPage}`;

    await page.goto(url, { waitUntil: 'networkidle2' });
    const html = await page.content();
    const $ = cheerio.load(html);

    // SELECTORES MAGENTO ESTÁNDAR
    const items = $('ul.products-grid li.item, ol.products-list li.item');
    if (!items.length) break;

    items.each((i, el) => {
      allProducts.push({
        name:     $(el).find('.product-name a').text().trim(),
        url:      $(el).find('.product-name a').attr('href'),
        price:    $(el).find('.price-box .price').first().text().trim(),
        oldPrice: $(el).find('.price-box .old-price .price').text().trim() || null,
        image:    $(el).find('img.product-image').attr('src'),
        sku:      $(el).find('.product-sku, [data-sku]').text().trim()
      });
    });

    // Verificar si existe página siguiente
    const hasNext = $('a.next, li.next a').length > 0;
    if (!hasNext) break;
    currentPage++;

    // Pausa anti-ban: 2s–4s aleatoria
    await new Promise(r => setTimeout(r, 2000 + Math.random() * 2000));
  }

  await browser.close();
  return allProducts;
}

// USO:
// scrapeGlobomatik('https://www.globomatik.com/movilidad/wearables-1/smartwatch')
// scrapeGlobomatik('https://www.globomatik.com/marcas/mayorista-de-garmin')
// scrapeGlobomatik('https://www.globomatik.com/marcas/mayorista-de-sennheiser')
```

**URLs de categoría confirmadas para scraping:**
```
/movilidad/wearables-1/smartwatch          → Smartwatches
/audio/auriculares/                        → Auriculares
/marcas/mayorista-de-garmin               → Catálogo Garmin
/marcas/mayorista-de-sennheiser           → Catálogo Sennheiser
/marcas/mayorista-de-samsung              → Catálogo Samsung
/marcas/mayorista-de-sonos                → Catálogo Sonos
```

> **Nota:** La sección de smartwatches actualmente muestra stock bajo o vacío en consultas públicas. Verificar tras autenticación. El feed puede ser más fiable para este segmento.

### 5. Logística de Envío

| Dato | Detalle |
|---|---|
| **Plazo de entrega** | **24 horas garantizadas** (pedidos antes de 17:45h L-V) |
| **Sin mínimo de pedido** | Sí |
| **Envío gratuito** | Pedidos ≥ 199€ (tarifa plana 2,99€ en pedidos menores) |
| **Dropshipping** | Sí, con cargo de 0,95€ por envío (envío anónimo) |
| **Logística propia** | Goucargo (filial logística de Globomatik) |
| **Transportistas** | UPS, DHL, TNT, Palletway |
| **Cobertura** | España Peninsular, Islas, Portugal |

---

## Proveedor #3 — DEPAU

### 1. Información General

| Campo | Detalle |
|---|---|
| **Nombre** | Depau Distribuciones S.A. |
| **URL** | https://www.depau.es |
| **Almacén central** | Avda. del Carbono, nº 46, Parcela 95, P.I. Los Camachos, 30369 Cartagena – Murcia |
| **Delegaciones** | Madrid, Valencia, Barcelona, Sevilla, Bilbao, Zaragoza, Portugal |
| **Catálogo** | +11.000 referencias en stock |
| **Actualización feed** | Cada 15 minutos |

### 2. Compatibilidad con Categorías del Catálogo

| Categoría | Marcas Confirmadas | Estado |
|---|---|---|
| Smartwatches | 31 artículos en stock | Marcas específicas no confirmadas públicamente |
| Audio / Auriculares | Sony (30 modelos confirmados) | `depau.es/auriculares/sony` verificado |
| Tecnología general | Samsung, Philips, JBL, Panasonic | Confirmadas |
| Audio premium (Jabra, Sennheiser, Bose) | No confirmadas | No aparecen en catálogo público |
| Garmin | No confirmado | No aparece en búsquedas |

**Conclusión de categorías:** Depau es el **mejor candidato técnico para scraping** pero el más limitado en marcas premium de nuestro catálogo objetivo. Ideal como proveedor complementario o de respaldo para marcas tech generalistas (Sony, Samsung, JBL). No debe ser el proveedor principal para wearables Garmin o audio Sennheiser/Jabra.

### 3. Análisis Técnico para Scraping

**Tecnología del portal:** **Custom PHP server-side rendering.** Es el sitio técnicamente más favorable de los tres para scraping. Sin framework JavaScript que requiera renderizado client-side. HTML estático completamente accesible.

**Protección anti-bot:** **Baja.** No utiliza Cloudflare WAF agresivo. Las páginas de categoría responden normalmente a User-Agents de navegador. Incluso herramientas básicas como `axios` + Cheerio pueden leer el HTML de categorías.

**Selectores CSS:** Confirmados mediante análisis directo del DOM. La estructura es estable y consistente entre categorías:

```
CDN de imágenes: cdn2.depau.es/articulos/[SKU]/[nombre-imagen].jpg
Selectores verificados:
  - Contenedor: .articulos .producto
  - Nombre: .producto-nombre
  - SKU / Referencia: .producto-sku  (ej. "PN: MDRE9LPH.AE")
  - Imagen: img dentro de .producto
  - Rating: .rating  (ej. "4.3", "4.7")
```

**Feed CSV oficial:** Depau actualiza un archivo CSV cada 15 minutos con todos los campos (nombre, EAN, precio, stock, descripción, imágenes). Accesible con credenciales de cliente registrado. Este es el canal más eficiente y confiable.

### 4. Estrategia de Extracción Segura

**Opción A (Recomendada): Feed CSV cada 15 minutos**
```javascript
const axios = require('axios');
const csvParse = require('csv-parse/sync');
const fs = require('fs');

async function fetchDepauFeed(feedUrl, sessionCookie) {
  const res = await axios.get(feedUrl, {
    headers: {
      Cookie: sessionCookie,      // Cookie de sesión autenticada
      'User-Agent': 'Mozilla/5.0 (compatible; ZoneTechBot/1.0)'
    },
    responseType: 'arraybuffer'   // El CSV puede estar en ISO-8859-1
  });

  // Depau usa dos archivos: "Tarifa Completa" y "Ampliación Especificaciones"
  const content = Buffer.from(res.data).toString('utf8');
  const records = csvParse.parse(content, {
    columns: true,
    skip_empty_lines: true,
    delimiter: ';'                // Verificar separador real (puede ser , o ;)
  });

  return records.map(r => ({
    sku:         r['Referencia'] || r['SKU'],
    ean:         r['EAN'],
    name:        r['Nombre'] || r['Descripcion'],
    price:       parseFloat((r['Precio'] || '0').replace(',', '.')),
    stock:       parseInt(r['Stock'] || '0', 10),
    image:       `https://cdn2.depau.es/articulos/${r['Referencia']}/${r['Imagen']}`,
    description: r['DescripcionLarga'] || r['Descripcion']
  }));
}
```

**Opción B: Scraping HTML directo (Cheerio — sin Puppeteer para categorías)**
```javascript
const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeDepauCategory(categoryUrl, sessionCookie) {
  const res = await axios.get(categoryUrl, {
    headers: {
      'Cookie': sessionCookie,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
                    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'es-ES,es;q=0.9'
    }
  });

  const $ = cheerio.load(res.data);
  const products = [];

  // SELECTORES CSS CONFIRMADOS PARA DEPAU
  $('.articulos .producto').each((i, el) => {
    const imageSrc = $(el).find('img').attr('src') || '';
    products.push({
      name:  $(el).find('.producto-nombre').text().trim(),
      sku:   $(el).find('.producto-sku').text().replace('PN:', '').trim(),
      image: imageSrc.startsWith('http')
               ? imageSrc
               : `https://cdn2.depau.es${imageSrc}`,
      rating: $(el).find('.rating').text().trim()
      // Precio: requiere autenticación, viene tras login
    });
  });

  // Paginación: verificar si Depau pagina (algunas categorías listan todo de una vez)
  const nextPage = $('a.siguiente, .paginacion a[rel="next"]').attr('href');
  return { products, nextPage: nextPage || null };
}

// USO:
// scrapeDepauCategory('https://www.depau.es/smartwatch', sessionCookie)
// scrapeDepauCategory('https://www.depau.es/auriculares/sony', sessionCookie)
```

**Obtener sesión autenticada con Puppeteer (una sola vez):**
```javascript
async function getDepauSession() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://www.depau.es/login');
  await page.type('#login_email', process.env.DEPAU_EMAIL);
  await page.type('#login_password', process.env.DEPAU_PASS);
  await page.click('button[type="submit"]');
  await page.waitForNavigation();
  const cookies = await page.cookies();
  await browser.close();
  // Guardar cookies en archivo para reutilizar sin re-autenticar
  fs.writeFileSync('depau_session.json', JSON.stringify(cookies));
  return cookies.map(c => `${c.name}=${c.value}`).join('; ');
}
```

### 5. Logística de Envío

| Dato | Detalle |
|---|---|
| **Plazo de entrega** | **24 horas garantizadas** (pedidos antes de 18:00h L-V) |
| **Envío gratuito** | Pedidos ≥ 99€ (Península + Baleares) |
| **Dropshipping** | Sí, disponible (envío anónimo sin almacén propio) |
| **Financiación** | Hasta 60 días para clientes mayoristas |
| **Devoluciones** | Material devuelto si no se vende (condiciones comerciales) |
| **Delegaciones** | Madrid, Valencia, Barcelona, Sevilla, Bilbao, Zaragoza |
| **Transportistas** | Red propia + agencias nacionales urgentes |

---

## Estrategia de Implementación Recomendada

### Arquitectura de scraping por proveedor

```
ZoneTechOnline Data Pipeline
│
├── GLOBOMATIK  ──── Puppeteer Stealth + Cheerio (Magento SSR)
│   └── Foco: Garmin, Sennheiser, Sonos, Samsung (marcas premium objetivo)
│
├── MEGASUR  ──────── Feed XML/CSV oficial (con credenciales distribuidora)
│   └── Foco: Jabra, Apple, amplitud de catálogo (400+ marcas)
│
└── DEPAU  ──────────  Feed CSV cada 15 min + Cheerio (HTML PHP limpio)
    └── Foco: Sony, Samsung, gadgets tech generalistas (respaldo)
```

### Pasos de activación (por proveedor)

1. **Registrarse como distribuidor** en los tres (formulario web, gratuito):
   - Megasur: https://www.megasur.es/registro-distribuidores
   - Globomatik: https://www.globomatik.com/customer/account/create
   - Depau: https://site.depau.es/registro-mayoristas/

2. **Activación:** 24h hábiles en los tres casos.

3. **Solicitar acceso al feed** (Megasur, Depau): comunicarse con el comercial asignado para obtener la URL del feed XML/CSV con clave de acceso.

4. **Configurar variables de entorno** en el proyecto:
   ```env
   MEGASUR_EMAIL=...
   MEGASUR_PASS=...
   MEGASUR_FEED_URL=...
   GLOBOMATIK_EMAIL=...
   GLOBOMATIK_PASS=...
   DEPAU_EMAIL=...
   DEPAU_PASS=...
   DEPAU_FEED_URL=...
   ```

### Advertencia legal

El scraping de sitios web debe realizarse conforme a sus Términos de Servicio. Al registrarse como distribuidor B2B, la relación comercial legitima el acceso programático a los datos del catálogo para uso interno de gestión de tienda. Se recomienda:
- Usar el feed oficial siempre que esté disponible (Megasur, Depau)
- Limitar la frecuencia de requests: máximo 1 request/2s en scraping HTML
- Identificar el bot con User-Agent propio: `ZoneTechBot/1.0 (+https://zonetechonline.com)`
- No extraer imágenes masivamente sin caché: alojar imágenes en el propio CDN

---

## Marcas No Cubiertas por estos 3 Proveedores

Las siguientes marcas objetivo **no están confirmadas** en Megasur, Globomatik ni Depau. Requieren distribuidores especializados alternativos:

| Marca | Distribuidor alternativo recomendado |
|---|---|
| **Polar** (relojes deportivos) | DIFOX Distribution Spain (`difox.com`) — distribuidor oficial Polar en ES |
| **Withings** (salud conectada) | Contactor directo a Withings ES (`withings.com/es/pro`) |
| **Oura Ring** | Distribuidor exclusivo: no disponible en canal mayorista tradicional |
| **Bose** | Bose ES (distribución directa a retailers verificados) |
| **Marshall** | Distribuidor oficial ES: MUSIC Group Spain |
| **Ray-Ban Meta** | EssilorLuxottica España (distribución exclusiva) |
| **CurrentBody / Foreo / NuFace** | Distribución directa marca o importador especializado de belleza tech |

> Estos distribuidores especializados pueden requerir un análisis de scraping independiente.

---

*Informe generado para uso interno de ZoneTechOnline — Arquitectura de Datos B2B*  
*Fecha: 30 de mayo de 2026 | Versión: 1.0*
