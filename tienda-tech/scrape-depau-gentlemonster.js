/**
 * scrape-depau-gentlemonster.js
 * Extracción automatizada: HUAWEI X Gentle Monster Eyewear II (gafas inteligentes)
 * Fecha: junio 2026
 *
 * ─── RESULTADOS EN DEPAU ─────────────────────────────────────────────────────
 *
 * Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *
 * GENTLE MONSTER:
 *   - "gentle monster"           → 1.902 bytes = 0 resultados
 *   - "gentle monster huawei"    → 1.902 bytes = 0 resultados
 *   - "huawei eyewear"           → 1.902 bytes = 0 resultados
 *   - "smart glasses gentle"     → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Gentle Monster → protocolo fuente oficial activado.
 *
 * NOTA: Puppeteer/Playwright NO ejecutable — Node.js no está en el PATH del sistema.
 * Método: inyección directa vía Edit tool.
 *
 * ─── MARCA: GENTLE MONSTER × HUAWEI ─────────────────────────────────────────
 *
 * Gentle Monster (marca coreana de gafas de diseño) en colaboración con Huawei.
 * La colaboración produjo dos generaciones:
 *   - Eyewear I (2019): Jackbye-01, Eastmoon-01
 *   - Eyewear II (2020): SMART LANG-01, MYMA-01, VERONA-01, HAVANA-01, KUBO-01
 *
 * Se eligieron los 5 modelos del Eyewear II (la generación más reciente y completa).
 * Precio oficial España (PVP lanzamiento): €329 gafas de sol / €349 ópticas
 * Tienda oficial Huawei España: "Sin unidades disponibles" (discontinuado desde ~2022)
 * PCComponentes: en lista de espera, sin fecha de entrada
 * Disponible vía Amazon.es y importación.
 *
 * ─── 5 PRODUCTOS (ordenados por precio ascendente) ───────────────────────────
 *
 * SPECS COMUNES (todos los modelos):
 *   Conectividad: Bluetooth 5.2
 *   Batería: 85 mAh · 5h música / 3,5h llamadas · Carga inalámbrica NFC
 *   Protección: IP54 (salpicaduras y lluvia ligera)
 *   Altavoces: 1 driver dinámico por lado · diafragma 128mm² · semi-abierto
 *   Micrófonos: 2 micrófonos de silicio en patilla · reducción de ruido en llamadas
 *   Controles: táctil en patillas (tocar / deslizar)
 *   Marco: titanio + plástico · bisagras flexibles
 *   Compatible: Android 6.0+ / iOS 12+ con app HUAWEI AI Life
 *
 *   ID 122 — SMART LANG-01      — €329,00 — Gafas sol rectangulares · 44,2g
 *             Imagen: thumb.pccomponentes.com/w-530-530/articles/34/349799/
 *                     1519-huawei-gentle-monster-x-eyewear-ii-lang-especificaciones.jpg ✓ 14KB
 *
 *   ID 123 — SMART MYMA-01      — €329,00 — Gafas sol redondas oversize · 48,1g
 *             Imagen: thumb.pccomponentes.com/w-530-530/articles/34/349810/
 *                     1944-huawei-gentle-monster-x-eyewear-ii-black.jpg ✓ 12KB
 *
 *   ID 124 — SMART VERONA-01    — €329,00 — Gafas sol estilo vintage · ~44g
 *             Imagen: gadgetmatch.com/wp-content/uploads/2020/12/
 *                     gadgetmatch-20201209-huawei-gentle-monster-eyewear-II-01.jpg ✓ 505KB
 *
 *   ID 125 — SMART HAVANA-01    — €349,00 — Gafas ópticas redondas · lentes claras · 44,6g
 *             Imagen: gadgetmatch.com/wp-content/uploads/2020/12/
 *                     Gadgetmatch-Huawei-Gentle-Monster-Eyewear-II-Flatlay-560x600.png ✓ 537KB
 *
 *   ID 126 — SMART KUBO-01      — €349,00 — Gafas ópticas cuadradas · lentes claras · 45,45g
 *             Imagen: consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/
 *                     pdp/wearables/gentle-monster-eyewear2/imgs/
 *                     Huawei-X-gentle-monster-eyewear-2.jpg ✓ 195KB
 *
 * ─── FUENTES ─────────────────────────────────────────────────────────────────
 *
 * Precios: consumer.huawei.com/es (PVP España lanzamiento 2020) +
 *          tecnolocura.es/huawei-x-gentle-monster-eyewear-gafas-inteligentes/ +
 *          optimoda.es/internacional/gentle-monster-y-huawei-renuevan-sus-gafas-inteligentes/
 * Specs: consumer.huawei.com/es/gentle-monster-eyewear2/specs/
 * PCComponentes: pccomponentes.com/huawei-gentle-monster-x-eyewear-ii-lang (€412,99 mercado actual)
 *                pccomponentes.com/huawei-gentle-monster-x-eyewear-ii-black (€399,99 mercado actual)
 *
 * NOTA PRECIOS: Los precios de €329/€349 son los PVP de lanzamiento oficial en España.
 * PCComponentes muestra precios actuales inflados (€399-€412) por escasez de stock.
 * Se usan los precios de referencia del lanzamiento oficial como precio de catálogo.
 *
 * ─── INYECCIÓN ───────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js      → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html  → sidebar 126 total / Gafas 35 / BRANDS_BY_CAT / mega menú
 *   - tienda-tech/index.html     → CTA "Ver los 126 productos" + mega menú Gafas + footer
 *
 * ─── CATÁLOGO FINAL ──────────────────────────────────────────────────────────
 *
 *   Total: 126 productos
 *   Desglose: 35 relojes + 26 anillos (7 marcas) + 30 auriculares (6 marcas) + 35 gafas (7 marcas)
 *
 *   Gafas (IDs 92–126):
 *   Ray-Ban Meta (92–96):     €247–€307    · 5 modelos · MediaMarkt ES CDN
 *   XREAL        (97–101):    €199–€849    · 5 modelos · XREAL Shopify CDN
 *   VITURE       (102–106):   €461–€650    · 5 modelos · VITURE Shopify CDN + PowerPlanet
 *   Even Realities(107–111):  €599–€768    · 5 modelos · Even Realities Shopify CDN
 *   RayNeo       (112–116):   €199–€1.259  · 5 modelos · eu.rayneo.com Shopify CDN
 *   Rokid        (117–121):   €329–€568    · 5 modelos · de.rokid.com + global.rokid.com
 *   Gentle Monster(122–126):  €329–€349    · 5 modelos · PCComponentes CDN + GadgetMatch + Huawei CDN
 */
