/**
 * scrape-depau-viture-evenrealities.js
 * Extracción automatizada: VITURE (XR glasses) + Even Realities (smart glasses IA)
 * Fecha: mayo 2026
 *
 * ─── RESULTADOS EN DEPAU ─────────────────────────────────────────────────────
 *
 * Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *
 * VITURE:
 *   - "viture"             → 1.902 bytes = 0 resultados
 *   - "viture xr"          → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye VITURE → protocolo fuente oficial activado.
 *
 * EVEN REALITIES:
 *   - "even realities"     → 1.902 bytes = 0 resultados
 *   - "even realities g1"  → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Even Realities → protocolo fuente oficial activado.
 *
 * NOTA: Puppeteer/Playwright NO ejecutable — Node.js no está en el PATH del sistema.
 * Método: inyección directa vía Edit tool.
 *
 * ─── FLUJO A: VITURE (5 productos) ───────────────────────────────────────────
 *
 * Fuente precios: PCComponentes.es (precios con IVA, mayo 2026)
 * Fuente imágenes: cdn.shopify.com/s/files/1/0762/8760/7065/files/ (CDN VITURE oficial)
 *                  + PowerPlanetOnline.es para el Pro XR (Shopify CDN 404 en esa referencia)
 *
 * NOTA CATÁLOGO VITURE 2025: Los modelos One/One Lite/One Plus/Pro fueron sustituidos
 * por la serie Luma (Luma, Luma Pro, Luma Ultra) y el Beast (abril 2026).
 * El Pro XR (B0D3LRH8G4) permanece como stock residual en tiendas españolas.
 *
 *   ID 102 — VITURE Luma XR Glasses       — €461,00 — 146", 50° FOV, 1000 nits, -6D, 77g
 *             CDN: cdn.shopify.com/.../P6C_01.jpg ✓ 169KB
 *
 *   ID 103 — VITURE Luma Pro XR Glasses   — €509,00 — 152", 52° FOV, RGB dinámico, -4D
 *             CDN: cdn.shopify.com/.../P6_01.jpg ✓ 177KB
 *
 *   ID 104 — VITURE Pro XR Glasses        — €549,00 — 135", HARMAN Kardon, stock residual
 *             CDN: powerplanetonline.com/cdnassets/Viture-Pro-XR-001_l_sf.webp ✓ 28KB
 *
 *   ID 105 — VITURE Beast XR Glasses      — €628,00 — 174", 58° FOV, 1250 nits, cámara RGB
 *             CDN: cdn.shopify.com/.../R6_01.jpg ✓ 148KB
 *
 *   ID 106 — VITURE Luma Ultra XR/AR Glasses — €650,00 — Sony OLED, 1500 nits, 6DoF, 52° FOV
 *             CDN: cdn.shopify.com/.../P6S_01_72d2ede5-...jpg ✓ 167KB
 *
 * ─── FLUJO B: EVEN REALITIES G1 (5 productos) ────────────────────────────────
 *
 * Fuente precios: evenrealities.com/es-ES (tienda oficial española, mayo 2026)
 * Precio base G1 A: €599,00 | Lentes monofocales add-on: desde €169,00
 * Imágenes: cdn.shopify.com/s/files/1/0600/4513/1891/files/ (CDN Even Realities)
 *
 * NOTA: El G1 A solo existe en 3 colores (Grey1, Brown1, Green1). No existe G1 Pro/Plus.
 * Los SKUs 110-111 incluyen el add-on de lentes de prescripción monofocales.
 * Excluidos: Clip solar, estuche de carga adicional, kits de lentes neutras.
 *
 *   ID 107 — Even G1 A Grey1                     — €599,00 — sin prescripción
 *             CDN: cdn.shopify.com/.../ER_Packshoot_G1A_Grey1_Front.png ✓ 103KB
 *
 *   ID 108 — Even G1 A Brown1                    — €599,00 — sin prescripción
 *             CDN: cdn.shopify.com/.../even-g1-smart-glasses-brown-front-folded.png ✓ 398KB
 *
 *   ID 109 — Even G1 A Green1                    — €599,00 — sin prescripción
 *             CDN: cdn.shopify.com/.../even-g1-smart-glasses-green-front-folded.png ✓ 348KB
 *
 *   ID 110 — Even G1 A Grey1 + Lentes Monofocales — €768,00 — con prescripción integrada
 *             CDN: reutiliza imagen Grey1 (mismo producto físico)
 *
 *   ID 111 — Even G1 A Brown1 + Lentes Monofocales — €768,00 — con prescripción integrada
 *             CDN: reutiliza imagen Brown1 (mismo producto físico)
 *
 * ─── INYECCIÓN ───────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js      → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html  → sidebar 111 total / Gafas 20 / BRANDS_BY_CAT / mega menú
 *   - tienda-tech/index.html     → CTA "Ver los 111 productos" + mega menú Gafas + footer
 *
 * ─── CATÁLOGO FINAL ──────────────────────────────────────────────────────────
 *
 *   Total: 111 productos
 *   Desglose: 35 relojes + 26 anillos (7 marcas) + 30 auriculares (6 marcas) + 20 gafas (4 marcas)
 *
 *   Gafas (IDs 92–111):
 *   Ray-Ban Meta (92–96):     €247–€307  · 5 modelos · MediaMarkt ES CDN
 *   XREAL        (97–101):    €199–€849  · 5 modelos · us.shop.xreal.com Shopify CDN
 *   VITURE       (102–106):   €461–€650  · 5 modelos · VITURE Shopify CDN + PowerPlanet
 *   Even Realities(107–111):  €599–€768  · 5 modelos · Even Realities Shopify CDN
 */
