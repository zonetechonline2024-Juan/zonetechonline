/**
 * scrape-depau-amazfit-fitbit-rings.js
 * Investigación automatizada: Amazfit + Fitbit smart rings en Depau
 * Fecha: mayo 2026
 *
 * ─── RESULTADOS DE BÚSQUEDA EN DEPAU ────────────────────────────────────────
 *
 * Endpoint usado: https://www.depau.es/ajaxrequest/listado/buscar?q={query}&order=price&orderby=asc
 *
 * Consultas realizadas:
 *   - "amazfit ring"  → 1902 bytes (plantilla vacía) = 0 resultados
 *   - "fitbit ring"   → 1902 bytes (plantilla vacía) = 0 resultados
 *   - "amazfit helio" → 1902 bytes (plantilla vacía) = 0 resultados
 *   - "fitbit"        → 1902 bytes (plantilla vacía) = 0 resultados
 *
 * Conclusión: Depau NO distribuye anillos Amazfit ni ningún producto Fitbit.
 * Protocolo oficial activado para ambas marcas.
 *
 * ─── INVESTIGACIÓN DE MERCADO ────────────────────────────────────────────────
 *
 * AMAZFIT:
 *   - Solo existe UN modelo de anillo: Amazfit Helio Ring (Titanio)
 *   - Tallas disponibles en Europa: 8, 10, 12 (3 variantes físicas)
 *   - Color único: Titanio (gris metálico)
 *   - Precio en Europa: €169,90 (rebajado desde €299 en mayo 2025)
 *   - No existe "Helio Ring 2" ni ningún otro modelo de anillo Amazfit
 *   - Decisión: 1 producto único "elige tu talla" (ID 58)
 *
 * FITBIT:
 *   - Fitbit NO fabrica ningún anillo inteligente
 *   - Fitbit solo hace: pulseras Charge/Inspire/Luxe y relojes Versa/Sense
 *   - Google (dueño de Fitbit desde 2021) confirmó nuevo hardware para 2026
 *     pero apunta a nueva banda/pulsera, NO a un anillo
 *   - Conclusión: imposible añadir 5 productos Fitbit de anillos — no existen
 *   - Alternativa elegida por el usuario: Movano Evie Ring (3 colores, IDs 59–61)
 *
 * ─── FLUJO A: AMAZFIT HELIO RING ────────────────────────────────────────────
 *
 * Fuente: eu.amazfit.com/products/amazfit-helio-ring
 * Imágenes CDN verificadas HTTP 200:
 *   - Main: https://eu.amazfit.com/cdn/shop/files/Helioring_1024x1024.jpg?v=1716446501
 *   - Alt1:  https://eu.amazfit.com/cdn/shop/files/Helioring-1_480x480.jpg?v=1716446501
 *   - Alt2:  https://eu.amazfit.com/cdn/shop/files/Helioring-2_480x480.jpg?v=1716446501
 *
 * Producto inyectado:
 *   ID 58 — Amazfit Helio Ring Titanio — €169,90 — Sin suscripción
 *   Sensores: PPG dual-color, temperatura, EDA (electrodermal), acelerómetro+giroscopio
 *   FC 24/7, SpO₂, estrés, VFC, Readiness Score, sueño REM
 *   10 ATM · 4 días batería · Tallas 8/10/12
 *
 * ─── FLUJO B: MOVANO EVIE RING (sustitución de Fitbit) ──────────────────────
 *
 * Fuente: eviering.com/products/evie-ring
 * Precio: $269 USD → €249 (conversión mayo 2026)
 * Imágenes CDN verificadas HTTP 200:
 *
 *   Silver:    https://eviering.com/cdn/shop/files/EvieRing_2024_Silver_ThreeQuarterView_Lighting-E.4.png
 *   Gold:      https://eviering.com/cdn/shop/files/EvieRing_2024_Gold_ThreeQuarterView_Lighting-E.1.png
 *   Rose Gold: https://eviering.com/cdn/shop/files/EvieRing_2024_RoseGold_ThreeQuarterView_Lighting-E.2.png
 *
 * Productos inyectados:
 *   ID 59 — Movano Evie Ring Silver    — €249 — Salud Femenina
 *   ID 60 — Movano Evie Ring Gold      — €249 — Edición Dorada
 *   ID 61 — Movano Evie Ring Rose Gold — €249 — Oro Rosa
 *
 *   Material: Liquidmetal® (aleación de circonio) + recubrimiento PVD titanio
 *   Sensores: LED rojo/verde, IR PPG, temperatura cutánea, fotodiodos, acelerómetro 3D
 *   Especialidad: ciclo menstrual, ovulación, temperatura basal
 *   4+ días batería · Estuche portátil 10 cargas · Tallas 5–12
 *
 * ─── INYECCIÓN ───────────────────────────────────────────────────────────────
 *
 * Node.js NO está en el PATH del sistema.
 * Método aplicado: inyección directa vía Edit tool en:
 *   - tienda-tech/js/app.js  → PRODUCTS.push() antes de // ─── SVG GENERATORS
 *   - tienda-tech/catalogo.html → BRANDS_BY_CAT.rings + sidebar badges
 *   - tienda-tech/index.html → CTA "Ver los 61 productos" + footer links
 *
 * ─── CATÁLOGO FINAL TRAS ESTA EJECUCIÓN ─────────────────────────────────────
 *
 *   Total: 61 wearables — 35 relojes + 26 anillos (7 marcas de anillos)
 *
 *   Anillos por marca:
 *   Amazfit    (ID 58):      €169,90  · 1 modelo  · Sin suscripción
 *   Movano     (IDs 59–61):  €249,00  · 3 colores · Sin suscripción · Salud femenina
 *   RingConn   (IDs 44–48):  €219–349 · 5 modelos · Sin suscripción
 *   Ultrahuman (IDs 49–53):  €379,00  · 5 colores · Sin suscripción
 *   Circular   (IDs 54–57):  €349–549 · 4 colores · Sin suscripción · ECG
 *   Oura       (IDs 36–40):  €379–429 · 5 modelos · Con suscripción
 *   Samsung    (IDs 41–43):  €449,00  · 3 colores · Sin suscripción
 */
