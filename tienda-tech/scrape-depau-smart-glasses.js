/**
 * scrape-depau-smart-glasses.js
 * Extracción automatizada: Ray-Ban Meta (gafas inteligentes) + XREAL (gafas AR)
 * Fecha: mayo 2026
 *
 * ─── RESULTADOS EN DEPAU ─────────────────────────────────────────────────────
 *
 * Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *
 * RAY-BAN META:
 *   - "ray-ban"            → 1.902 bytes = 0 resultados
 *   - "ray ban meta"       → 1.902 bytes = 0 resultados
 *   - "gafas inteligentes" → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Ray-Ban Meta → protocolo fuente alternativa activado.
 *
 * XREAL:
 *   - "xreal"              → 1.902 bytes = 0 resultados
 *   - "xreal air"          → 1.902 bytes = 0 resultados
 *   - "gafas ar"           → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye XREAL → protocolo fuente alternativa activado.
 *
 * Depau: sólo tiene 2 resultados de Xiaomi Mijia para "gafas" — sin relevancia.
 *
 * ─── FLUJO A: RAY-BAN META (5 productos) ─────────────────────────────────────
 *
 * Fuente: MediaMarkt España (ray-ban.com devuelve 403 Forbidden)
 * Imágenes: CDN assets.mmsrg.com verificadas HTTP 200
 * Patrón: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_{ID}?x=600&y=600&format=jpg...
 *
 *   ID 92 — Ray-Ban Meta Wayfarer Negro Brillante Transparente — €247,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_152425222?... ✓ 13KB
 *
 *   ID 93 — Ray-Ban Meta Wayfarer Negro Mate Polarizadas       — €269,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_152425093?... ✓ 14KB
 *
 *   ID 94 — Ray-Ban Meta Wayfarer Grande Negro Mate Polarizadas— €269,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_162038706?... ✓ 14KB
 *
 *   ID 95 — Ray-Ban Meta Wayfarer Transitions Verde Grafito    — €307,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_152425210?... ✓ 13KB
 *
 *   ID 96 — Ray-Ban Meta Skyler Transitions Azul Cerúleo       — €307,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_152425478?... ✓ 15KB
 *
 * ─── FLUJO B: XREAL (5 productos) ────────────────────────────────────────────
 *
 * Fuente: eu.shop.xreal.com (precios EUR oficiales)
 * Imágenes: us.shop.xreal.com Shopify CDN verificadas HTTP 200
 * No disponible en MediaMarkt ni PcComponentes España.
 *
 *   ID 97  — XREAL Air 2       — €199,00          (OLED 120Hz, 46° FOV, 72g, USB-C)
 *             CDN: us.shop.xreal.com/cdn/shop/files/preview_images/2.jpg?v=1722059580 ✓ 46KB
 *
 *   ID 98  — XREAL One         — €399,00 (ant.€549) (standalone Snapdragon AR1, 52° FOV, 3h)
 *             CDN: us.shop.xreal.com/cdn/shop/files/XREAL_One_AR_Glasses.jpg?v=1755511322 ✓ 94KB
 *
 *   ID 99  — XREAL 1S          — €499,00          (FHD, 52° FOV, 500 nits, 80g)
 *             CDN: us.shop.xreal.com/cdn/shop/files/00-_-01-1.jpg?v=1767513758 ✓ 151KB
 *
 *   ID 100 — XREAL One Pro     — €649,00 (ant.€689) (standalone Pro, Snapdragon AR1)
 *             CDN: us.shop.xreal.com/cdn/shop/files/XREAL_One_Pro.jpg?v=1756965858 ✓ 110KB
 *
 *   ID 101 — ROG XREAL R1      — €849,00          (ASUS ROG × XREAL, gaming AR, preventa jul.2026)
 *             CDN: us.shop.xreal.com/cdn/shop/files/XREAL_ROG___2400x2400_01_db14182b-...jpg?v=1778653953
 *
 * ─── INYECCIÓN ───────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js      → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html  → sidebar 101 total / Gafas 10 / BRANDS_BY_CAT / mega menú
 *   - tienda-tech/index.html     → CTA "Ver los 101 productos" + mega menú Gafas
 *
 * ─── CATÁLOGO FINAL ──────────────────────────────────────────────────────────
 *
 *   Total: 101 productos — 35 relojes + 26 anillos (7 marcas) + 30 auriculares (6 marcas) + 10 gafas (2 marcas)
 *
 *   Ray-Ban Meta (IDs 92–96): €247,00–€307,00 · 5 modelos · assets.mmsrg.com CDN
 *   XREAL        (IDs 97–101):€199,00–€849,00 · 5 modelos · us.shop.xreal.com Shopify CDN
 */
