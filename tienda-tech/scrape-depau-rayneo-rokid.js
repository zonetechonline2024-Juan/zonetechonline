/**
 * scrape-depau-rayneo-rokid.js
 * Extracción automatizada: RayNeo (XR glasses) + Rokid AR (smart glasses)
 * Fecha: mayo 2026
 * Nota: La solicitud original incluía Nothing/CMF smart glasses.
 *       Nothing/CMF NO tiene gafas inteligentes disponibles (anunciadas para 2027).
 *       El usuario eligió Rokid como marca sustituta.
 *
 * ─── RESULTADOS EN DEPAU ─────────────────────────────────────────────────────
 *
 * Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *
 * RAYNEO:
 *   - "rayneo"              → 1.902 bytes = 0 resultados
 *   - "rayneo air"          → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye RayNeo → protocolo fuente oficial activado.
 *
 * NOTHING / CMF:
 *   - "nothing glasses"     → 1.902 bytes = 0 resultados
 *   - "cmf glasses"         → 1.902 bytes = 0 resultados
 *   - RAZÓN: Nothing/CMF no fabrica gafas inteligentes (previstas para 2027).
 *   - Marca sustituta elegida por el usuario: Rokid
 *
 * ROKID:
 *   - "rokid"               → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Rokid → protocolo fuente oficial activado.
 *
 * NOTA: Puppeteer/Playwright NO ejecutable — Node.js no está en el PATH del sistema.
 * Método: inyección directa vía Edit tool.
 *
 * ─── FLUJO A: RAYNEO (5 productos) ───────────────────────────────────────────
 *
 * Fuente precios: eu.rayneo.com (tienda oficial EU, mayo 2026)
 * Fuente imágenes: eu.rayneo.com/cdn/shop/files/ (CDN RayNeo oficial Shopify)
 *
 * NOTA CATÁLOGO RAYNEO 2025: La gama Air se renovó con Air 2 → Air 2s → Air 3s → Air 4 Pro.
 * El X3 Pro es el único standalone con Snapdragon AR2 Gen 1.
 * Todos los modelos Air son XR glasses (requieren móvil/PC via USB-C/DP).
 *
 *   ID 112 — RayNeo Air 2      — €199,00 — Micro-OLED Sony 1080p, 46° FOV, 500 nits, 72g
 *             CDN: eu.rayneo.com/cdn/shop/files/A2_b5ae514b-9ca5-45e9-9546-a8c04d32fbf3.png ✓ 116KB
 *
 *   ID 113 — RayNeo Air 2s     — €199,99 — igual que Air 2 + electrocrómico dimming
 *             CDN: eu.rayneo.com/cdn/shop/files/A2S.png?v=1761641327 ✓ 114KB
 *
 *   ID 114 — RayNeo Air 3s     — €299,00 — Micro-OLED 54° FOV, 600 nits, 144Hz, 76g
 *             CDN: eu.rayneo.com/cdn/shop/files/A3.png?v=1761641338 ✓ 150KB
 *
 *   ID 115 — RayNeo Air 4 Pro  — €324,99 — eye tracking integrado, 58° FOV, 120Hz
 *             CDN: eu.rayneo.com/cdn/shop/files/Air4_pro.png?v=1772183095 ✓ 533KB
 *
 *   ID 116 — RayNeo X3 Pro     — €1.259,00 — AR standalone, Snapdragon AR2 Gen 1, 6DoF, waveguide
 *             CDN: eu.rayneo.com/cdn/shop/files/51474.png?v=1765775093 ✓ 120KB
 *
 * ─── FLUJO B: ROKID (5 productos) ────────────────────────────────────────────
 *
 * Fuente precios: de.rokid.com + global.rokid.com (tiendas oficiales EU/global, mayo 2026)
 * Fuente imágenes: de.rokid.com/cdn/shop/files/ + global.rokid.com/cdn/shop/files/
 *
 * NOTA ROKID NEO: Las "Rokid AI Glasses Neo" NO tienen pantalla.
 * Son gafas de IA con cámara (12MP) + altavoces abiertos, como Ray-Ban Meta pero con GPT-4o.
 * Precio original €449 → oferta €349. Describir claramente como "sin display".
 *
 * NOTA ROKID AR JOY 2: Es un bundle completo (Rokid Max 2 + Rokid Station 2).
 * Station 2 = unidad de cómputo Android 12 standalone (Snapdragon XR2 Gen 1, 4000mAh).
 * Describir como "sistema AR standalone completo".
 *
 *   ID 117 — Rokid Max            — €329,00 — Micro-OLED 1080p, 50° FOV, 215" virtual, 75g
 *             CDN: de.rokid.com/cdn/shop/files/Max_01.jpg?v=1730433368 ✓ 42KB
 *
 *   ID 118 — Rokid AI Glasses Neo — €349,00 — IA sin pantalla, cámara 12MP, GPT-4o, 46g
 *             CDN: de.rokid.com/cdn/shop/files/01_cbfb835e-f5d3-428c-8922-ed78b782cfa0.jpg?v=1777369748 ✓ 37KB
 *
 *   ID 119 — Rokid Max 2          — €359,00 — Micro-OLED 57° FOV, 800 nits, 120Hz, 73g, electrocrómico
 *             CDN: global.rokid.com/cdn/shop/files/max_2.jpg?v=1767063587 ✓ 81KB
 *
 *   ID 120 — Rokid AR Joy 2       — €528,00 — Bundle: Max 2 + Station 2 (Snapdragon XR2, Android 12)
 *             CDN: de.rokid.com/cdn/shop/files/0003.jpg?v=1730433208 ✓ 85KB
 *
 *   ID 121 — Rokid AR Spatial     — €568,00 — AR standalone, hand tracking, 6DoF, spatial computing
 *             CDN: de.rokid.com/cdn/shop/files/001_fab88f6f-4ade-46e8-a645-04f3a8acac4e.jpg?v=1750325927 ✓ 269KB
 *
 * ─── INYECCIÓN ───────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js      → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html  → sidebar 121 total / Gafas 30 / BRANDS_BY_CAT / mega menú
 *   - tienda-tech/index.html     → CTA "Ver los 121 productos" + mega menú Gafas + footer
 *
 * ─── CATÁLOGO FINAL ──────────────────────────────────────────────────────────
 *
 *   Total: 121 productos
 *   Desglose: 35 relojes + 26 anillos (7 marcas) + 30 auriculares (6 marcas) + 30 gafas (6 marcas)
 *
 *   Gafas (IDs 92–121):
 *   Ray-Ban Meta (92–96):     €247–€307    · 5 modelos · MediaMarkt ES CDN
 *   XREAL        (97–101):    €199–€849    · 5 modelos · us.shop.xreal.com Shopify CDN
 *   VITURE       (102–106):   €461–€650    · 5 modelos · VITURE Shopify CDN + PowerPlanet
 *   Even Realities(107–111):  €599–€768    · 5 modelos · Even Realities Shopify CDN
 *   RayNeo       (112–116):   €199–€1.259  · 5 modelos · eu.rayneo.com Shopify CDN
 *   Rokid        (117–121):   €329–€568    · 5 modelos · de.rokid.com + global.rokid.com CDN
 */
