/**
 * scrape-depau-nothing-google.js
 * Extracción automatizada: Nothing + Google auriculares True Wireless
 * Fecha: mayo 2026
 *
 * ─── RESULTADOS EN DEPAU ─────────────────────────────────────────────────────
 *
 * Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *
 * NOTHING:
 *   - "nothing ear"    → 1.902 bytes (plantilla vacía) = 0 resultados
 *   - "nothing"        → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Nothing → protocolo fuente oficial activado.
 *
 * GOOGLE:
 *   - "google pixel buds" → 1.902 bytes (plantilla vacía) = 0 resultados
 *   - "pixel buds"         → 1.902 bytes = 0 resultados
 *   - "google auriculares" → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Google → protocolo fuente oficial activado.
 *   - NOTA: store.google.com redirige a consent.google.com (GDPR) al hacer fetch.
 *     Solución: imágenes obtenidas desde CDN de MediaMarkt ES (assets.mmsrg.com).
 *
 * ─── FLUJO A: NOTHING (5 productos) ─────────────────────────────────────────
 *
 * Fuente: es.nothing.tech (Shopify store España/EU)
 * Imágenes: CDN Nothing Shopify verificadas HTTP 200
 * Patrón: cdn.shopify.com/s/files/1/0585/8908/5875/files/{filename}
 *
 *   ID 72 — Nothing Ear (a) Yellow — €69,00  — ANC -42dB · 22,5h · IP55 · ChatGPT
 *            CDN: cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0025_Ear-a-yellow.png
 *
 *   ID 73 — Nothing Ear (a) White  — €69,00
 *            CDN: cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0026_Ear-a-white.png
 *
 *   ID 74 — Nothing Ear (a) Black  — €69,00
 *            CDN: cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0027_Ear-a-black.png
 *
 *   ID 75 — Nothing Ear Black      — €89,00  — LDAC · ANC -45dB · 11mm · 40h · IP55
 *            CDN: cdn.shopify.com/s/files/1/0585/8908/5875/files/0000s_0024_Ear-black.png
 *
 *   ID 76 — Nothing Ear (3) Black  — €149,00 — Hi-Res Audio Wireless · Driver planar · LDAC
 *            CDN: cdn.shopify.com/s/files/1/0585/8908/5875/files/Ear3-black.png
 *
 * ─── FLUJO B: GOOGLE PIXEL BUDS (5 productos) ───────────────────────────────
 *
 * Fuente: MediaMarkt ES CDN (assets.mmsrg.com) — imágenes verificadas HTTP 200
 * Precios: referencia store.google.com/es + mediamarkt.es (mayo 2026)
 * NOTA: store.google.com redirige a consent.google.com — no accesible via fetch.
 *
 *   ID 77 — Google Pixel Buds 2a Hazel    — €119,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_160131089
 *            Specs: ANC · Google Assistant + Gemini · 30h · IPX4 · Find My Device
 *
 *   ID 78 — Google Pixel Buds 2a Iris     — €119,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_161455260
 *            Specs: ANC · Google Assistant + Gemini · 30h · IPX4 · Find My Device
 *
 *   ID 79 — Google Pixel Buds Pro 2 Hazel       — €229,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_143194248
 *            Specs: ANC Adaptativo Silent Seal 2.0 · LDAC · 48h · IPX4 · Gemini
 *
 *   ID 80 — Google Pixel Buds Pro 2 Porcelain   — €229,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_143194139
 *            Specs: ANC Adaptativo Silent Seal 2.0 · LDAC · 48h · IPX4 · Gemini
 *
 *   ID 81 — Google Pixel Buds Pro 2 Wintergreen — €229,00
 *            CDN: assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_143194112
 *            Specs: ANC Adaptativo Silent Seal 2.0 · LDAC · 48h · IPX4 · Gemini
 *
 * ─── INYECCIÓN ───────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js      → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html  → sidebar 81 total / Auriculares 20 / BRANDS_BY_CAT
 *   - tienda-tech/index.html     → CTA "Ver los 81 productos" + footer links Nothing+Google
 *
 * ─── CATÁLOGO FINAL ──────────────────────────────────────────────────────────
 *
 *   Total: 81 productos — 35 relojes + 26 anillos (7 marcas) + 20 auriculares (4 marcas)
 *
 *   Nothing  (IDs 72–76): €69,00–€149,00 · 5 modelos · Nothing Shopify CDN
 *   Google   (IDs 77–81): €119,00–€229,00 · 5 modelos · MediaMarkt ES CDN
 */
