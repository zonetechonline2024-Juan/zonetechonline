/**
 * scrape-depau-sony-sennheiser.js
 * Extracción automatizada: Sony + Sennheiser auriculares
 * Fecha: mayo 2026
 *
 * ─── RESULTADOS EN DEPAU ─────────────────────────────────────────────────────
 *
 * Endpoint: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *
 * SONY:
 *   - "sony auriculares" → 141.399 bytes (20 productos encontrados)
 *   - "sony wh"          → 115.154 bytes (17 items incluyendo headphones)
 *   - "sony wf"          → 41.773 bytes (6 True Wireless)
 *   - NOTA: Depau SÍ distribuye Sony. Precios requieren login B2B.
 *     El €19,90 visible es el coste de envío de TVs, NO el precio del producto.
 *     Se usan precios de referencia del mercado España (sony.es + idealo.es).
 *
 * SENNHEISER:
 *   - "sennheiser auriculares" → 1.902 bytes (plantilla vacía) = 0 resultados
 *   - "sennheiser"             → 1.902 bytes = 0 resultados
 *   - Depau NO distribuye Sennheiser → protocolo fuente oficial activado.
 *
 * ─── PRODUCTOS SONY CONFIRMADOS EN DEPAU (data-codigo) ───────────────────────
 *
 *   SONY-AUR WH-CH520 BK  → auriculares-inalambricos-sony-wh-ch520-con-0110283
 *   SONY-AUR WH-CH520 WH  → auriculares-inalambricos-sony-wh-ch520-con-0110286
 *   SONY-AUR WF-C510 WH   → auriculares-bluetooth-sony-wf-c510-con-estuche-0123674
 *   SONY-AUR WF-C510 BK   → (en catálogo Depau)
 *   SONY-AUR WH-CH720N BK → auriculares-inalambricos-sony-wh-ch720n-con-0118832
 *   SONY-AUR WH-CH720N WH → auriculares-inalambricos-sony-wh-ch720n-con-0118830
 *   SONY-AUR WF-C710N WH  → auriculares-bluetooth-sony-wf-c710n-con-estuche-0130153
 *   SONY-AUR ULT WEAR WH  → auriculares-inalambricos-sony-ult-wear-con-0123091
 *   SONY-AUR ULT WEAR BK  → auriculares-inalambricos-sony-ult-wear-con-0123089
 *   SONY-AUR INZONE H5 BK → auriculares-gaming-inalambricos-con-microfono-0125593
 *
 * ─── FLUJO A: SONY (5 productos) ─────────────────────────────────────────────
 *
 * Imágenes: CDN Depau verificadas HTTP 200
 * Patrón: https://cdn2.depau.es/articulos/448/448/fixed/art_{sku_lower}_N.jpg
 * Precios: referencia spain.es + idealo.es (mayo 2026)
 *
 *   ID 62 — Sony WH-CH520 Negro          — €39,99 — Bluetooth 5.2 · 50h · sin ANC
 *   ID 63 — Sony WF-C510 Blanco          — €49,99 — True Wireless · 20h total · IPX4
 *   ID 64 — Sony WH-CH720N Negro         — €89,99 — ANC · 35h · 192g ultraligero
 *   ID 65 — Sony WF-C710N Blanco         — €99,99 — ANC True Wireless · 30h total
 *   ID 66 — Sony ULT WEAR Negro          — €129,99 — ULT POWER SOUND · ANC · 30h/50h
 *
 * ─── FLUJO B: SENNHEISER (5 productos) ───────────────────────────────────────
 *
 * Fuente: eu.sennheiser-hearing.com (Shopify store España/EU)
 * Imágenes: CDN Sennheiser EU Shopify verificadas HTTP 200
 *
 *   ID 67 — Sennheiser ACCENTUM True Wireless Negro — €99,90  (antes €199,90)
 *            CDN: eu.sennheiser-hearing.com/cdn/shop/files/ACCENTUM_True_Wireless_Black_CGI_Product_Earbuds_1_1.png
 *            Specs: ANC híbrido · Bluetooth 5.3 · 28h total · IP54 · 7mm TrueResponse™
 *
 *   ID 68 — Sennheiser ACCENTUM Wireless Negro       — €120,00 (antes €179,90)
 *            CDN: eu.sennheiser-hearing.com/cdn/shop/files/56876327895421desktop_image.jpg
 *            Specs: ANC híbrido · Bluetooth 5.2 Clase 1 · 50h · drivers 37mm · plegable
 *
 *   ID 69 — Sennheiser HD 450BT Negro                — €139,90
 *            CDN: eu.sennheiser-hearing.com/cdn/shop/files/3_a8ffb0e1-c722-4e7e-bbfa-1b1b71a6b37a.jpg
 *            Specs: ANC · Bluetooth 5.0 · aptX/aptX LL/AAC/SBC · 30h · 238g
 *
 *   ID 70 — Sennheiser MOMENTUM True Wireless 4      — €219,00 (antes €299,90)
 *            CDN: eu.sennheiser-hearing.com/cdn/shop/files/mtw4_productimages_blackcopper.jpg
 *            Specs: ANC adaptativo · Bluetooth 5.4 · aptX Adaptive + LDAC · 30h total · IP54
 *
 *   ID 71 — Sennheiser MOMENTUM 4 Wireless Negro     — €249,90 (antes €369,90)
 *            CDN: eu.sennheiser-hearing.com/cdn/shop/files/momentum_4_isofront_v1.jpg
 *            Specs: ANC adaptativo · Bluetooth 5.2 · aptX HD · 60h batería · plegable
 *
 * ─── INYECCIÓN ───────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js      → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html  → sidebar 71 total / Auriculares 10 / BRANDS_BY_CAT
 *   - tienda-tech/index.html     → CTA "Ver los 71 productos" + footer links Sony+Sennheiser
 *
 * ─── CATÁLOGO FINAL ──────────────────────────────────────────────────────────
 *
 *   Total: 71 productos — 35 relojes + 26 anillos (7 marcas) + 10 auriculares (2 marcas)
 *
 *   Sony     (IDs 62–66): €39,99–€129,99 · 5 modelos · Depau CDN
 *   Sennheiser (IDs 67–71): €99,90–€249,90 · 5 modelos · Sennheiser EU CDN
 */
