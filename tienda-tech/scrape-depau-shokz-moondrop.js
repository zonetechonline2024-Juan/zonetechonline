/**
 * scrape-depau-shokz-moondrop.js
 * Extracción automatizada: Shokz (conducción ósea/open-ear) + Moondrop (IEM Hi-Fi / TWS)
 * Fecha: mayo 2026
 *
 * ─── RESULTADOS EN DEPAU ─────────────────────────────────────────────────────
 *
 * Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *
 * SHOKZ:
 *   - "shokz"            → 1.902 bytes = 0 resultados
 *   - "shokz auriculares"→ 1.902 bytes = 0 resultados
 *   - "openrun"          → 1.902 bytes = 0 resultados
 *   - "openfit"          → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Shokz → protocolo fuente oficial activado.
 *
 * MOONDROP:
 *   - "moondrop"             → 1.902 bytes = 0 resultados
 *   - "moondrop auriculares" → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Moondrop → protocolo fuente oficial activado.
 *
 * ─── FLUJO A: SHOKZ (5 productos) ────────────────────────────────────────────
 *
 * Fuente: es.shokz.com (Shopify store España/EU)
 * Imágenes: CDN Shokz Shopify verificadas HTTP 200
 * Patrón: es.shokz.com/cdn/shop/{products|files}/{filename}
 *
 *   ID 82 — Shokz OpenMove Negro    — €69,00  (antes €89,95) — conducción ósea · IP55 · 6h · BT 5.1
 *            CDN: es.shokz.com/cdn/shop/products/GREY1_8c00589e-c7d3-48a8-b8ef-45f3c57d16bd.webp?v=1682558863
 *
 *   ID 83 — Shokz OpenFit Air Negro — €109,00 — open-ear TWS · IPX4 · 28h total · BT 5.3
 *            CDN: es.shokz.com/cdn/shop/files/OpenFitAir-Black.webp?v=1716703749
 *
 *   ID 84 — Shokz OpenFit Negro     — €139,00 — open-ear TWS · IP54 · 28h total · BT 5.2
 *            CDN: es.shokz.com/cdn/shop/products/BK-1.webp?v=1688471004
 *
 *   ID 85 — Shokz OpenRun Negro     — €139,00 — conducción ósea deportivo · IP55 · 8h · BT 5.1
 *            CDN: es.shokz.com/cdn/shop/files/OpenRun-_Type-_C-Black_...webp?v=1756290929
 *
 *   ID 86 — Shokz OpenFit2 Negro    — €189,00 — open-ear TWS · IP54 · 46h total · BT 5.3 · Carga Qi
 *            CDN: es.shokz.com/cdn/shop/files/openfit2_-Black.png?v=1752113497
 *
 * ─── FLUJO B: MOONDROP (5 productos) ─────────────────────────────────────────
 *
 * Fuente: moondroplab.com (sitio oficial global)
 * Imágenes: CDN Webflow (cdn.prod.website-files.com) verificadas HTTP 200
 * Precios en USD → referencia EUR (paridad aproximada mercado europeo)
 *
 *   ID 87 — Moondrop CHU        — €19,99 — IEM 1DD 10mm carbono · 120dB · 28Ω · 3.5mm · 0.78mm 2-pin
 *            CDN: cdn.prod.website-files.com/627128d862c9a44234848dda/...CHU.jpeg
 *
 *   ID 88 — Moondrop QUARK2     — €19,99 — IEM 1BA · Balanced Armature · 3.5mm · 0.78mm 2-pin
 *            CDN: cdn.prod.website-files.com/627128d862c9a44234848dda/...QUARK2.jpeg
 *
 *   ID 89 — Moondrop CHU II     — €22,99 — IEM 1DD 2ª gen mejorado · 3.5mm · Harman-like tuning
 *            CDN: cdn.prod.website-files.com/627128d862c9a44234848dda/...CHU2.jpeg
 *
 *   ID 90 — Moondrop JIU        — €24,99 — IEM 1DD dinámico · 3.5mm · ajuste ergonómico
 *            CDN: cdn.prod.website-files.com/627128d862c9a44234848dda/...JIU.jpeg
 *
 *   ID 91 — Moondrop BLOCK TWS  — €24,99 — TWS · ANC · BT 5.3 · IPX4 · tuning Hi-Fi Moondrop
 *            CDN: cdn.prod.website-files.com/627128d862c9a44234848dda/...BLOCK.jpeg
 *
 * ─── INYECCIÓN ───────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js      → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html  → sidebar 91 total / Auriculares 30 / BRANDS_BY_CAT
 *   - tienda-tech/index.html     → CTA "Ver los 91 productos" + mega menú + footer
 *
 * ─── CATÁLOGO FINAL ──────────────────────────────────────────────────────────
 *
 *   Total: 91 productos — 35 relojes + 26 anillos (7 marcas) + 30 auriculares (6 marcas)
 *
 *   Shokz    (IDs 82–86): €69,00–€189,00 · 5 modelos · es.shokz.com Shopify CDN
 *   Moondrop (IDs 87–91): €19,99–€24,99  · 5 modelos · cdn.prod.website-files.com
 */
