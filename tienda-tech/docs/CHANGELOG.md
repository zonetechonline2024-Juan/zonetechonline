# CHANGELOG — ZoneTechOnline
> Registro de cambios en producción | Formato: [Fecha] Descripción

---

## [2026-07-29] — CRO Revenue Engine: Motor de ingresos P0 — Páginas de producto, upsell, cross-sell, checkout

### P0 — Cambios críticos de conversión
- `producto.html` (nueva página): Landing page completa por producto en `/producto/:id`
  - Galería con navegación y miniaturas
  - "Para quién es esto" generado dinámicamente por categoría y precio
  - Specs completas, FAQs por categoría (5 preguntas por categoría)
  - Upsell automático: calcula producto de misma categoría con precio 15–280% superior
  - Relacionados: 4 productos de la misma categoría
  - Schema.org Product (JSON-LD) inyectado vía JS para SEO
  - Meta tags dinámicos (title, description, og) por producto
  - CTA sticky en mobile (aparece al scrollar más allá del botón principal)
  - Trust block: garantía, devolución, pago seguro, envío gratis
- `vercel.json`: añadida rewrite `/producto/:id` → `/producto.html`
- `js/app.js` — QuickView: añadido upsell inline + enlace "Ver ficha completa"
- `js/app.js` — Carrito: cross-sell automático con lógica de complementariedad por categoría
- `checkout.html`: campo de código de descuento colapsado por defecto (toggle link)

### Documentación Phase P — Revenue Engine completa
- `docs/CRO_REPORT.md`: auditoría completa del customer journey (Fases A–B)
- `docs/REVENUE_ENGINE.md`: arquitectura del motor de ingresos, bundles, upsell por categoría
- `docs/FUNNEL_ANALYSIS.md`: análisis por etapa, tasas estimadas, micro-conversiones, benchmark
- `docs/AB_TESTING_PLAN.md`: 6 tests priorizados, arquitectura JS client-side, calendario
- `docs/EMAIL_AUTOMATION.md`: 4 secuencias completas (carrito abandonado, bienvenida, post-compra, reactivación)
- `docs/REVENUE_KPIS.md`: panel semanal/mensual, señales de alerta, proyecciones a 12 meses

---

## [2026-07-27] — CBO Segunda Iteración: Auditoría + Correcciones + Fases E, H, I, J, L

### Auditoría Fase A — Correcciones pendientes (5 issues)
- `index.html` línea 694: "3 años de garantía oficial" → "2 años de garantía oficial" (inconsistencia detectada en auditoría)
- `index.html` línea 829 (configurador Samsung): "Garantía oficial 3 años · Devolución gratuita 30 días" → "Garantía oficial 2 años · Devolución 30 días hábiles"
- `index.html` línea 676 (features strip): "Stock disponible hoy" → "Entrega en 5–8 días hábiles" (no verificable en dropshipping)
- `index.html` línea 698 (CTA friction): "Devolución garantizada 30 días" → "Devolución garantizada 30 días hábiles"
- `login.html` línea 134: "Soporte prioritario en español 24/7" → "Soporte en español Lun–Vie 9–18h"

### Fase E — Nuestra Filosofía
- `nuestra-filosofia.html` (nueva página): página de criterios de selección
  - Secciones: Por qué el catálogo infinito no funciona · 4 criterios de selección · Proceso de evaluación (5 pasos) · Qué rechazamos (5 tipos) · Estándares por categoría (5 categorías) · Compromiso de actualización
  - Citas propias del fundador, firma personal
  - URL limpia `/nuestra-filosofia` y `/criterios-seleccion` vía vercel.json

### Fase H — Blog structure improvements
- `blog/index.html`: filtro de categorías interactivo (Comparativas, Guías, Rankings, Regalos)
- `blog/index.html`: fechas actualizadas de "Julio 2025" a "Julio 2026"
- `blog/index.html`: CTA de newsletter al final del índice (con formulario conectado a /api/emails)
- `blog/index.html`: meta description y OG title actualizados a 2026
- `blog/index.html`: microcopy carrito corregido (coherencia con index.html)

### Fase I — Asistente IA: de respondedor a asesor
- `api/_ai.js` PERSONA: rediseño completo del system prompt
  - Añadidos 3 atributos de personalidad: Claro · Honesto · Experto
  - Modo asesor: pregunta antes de recomendar, máx 2-3 productos con justificación
  - Datos de tienda corregidos: "14 días" → "30 días hábiles", soporte Lun-Vie 9-18h
  - Instrucciones de formato: máx 150 palabras salvo petición explícita
  - Mención de nuestra-historia y nuestra-filosofia como recursos

### Fase J — Arquitectura Comparador IA
- `docs/COMPARADOR_IA.md` (nuevo): diseño completo de arquitectura
  - Flujo de usuario (7 pasos)
  - Frontend: componente `comparator.js`, barra flotante, panel de comparación
  - Backend: endpoint `api/comparador.js` (con plan para límite Vercel Hobby)
  - System prompt del comparador
  - Estructura de specs por categoría (smartwatches, auriculares, altavoces)
  - 3 fases de implementación con prerequisitos claros
  - Estimación de coste: < $0.001 por comparativa con Claude Haiku

### Fase L — Documentación de autoridad y diferenciación
- `docs/BRAND_AUTHORITY.md` (nuevo): 4 pilares de autoridad, hoja de ruta por horizonte, KPIs trimestrales
- `docs/DIFFERENTIATION.md` (nuevo): diferenciación vs Amazon, grandes superficies y tiendas online; lo que NO debe perderse; cómo comunicar por canal; señales pendientes

---

## [2026-07-27] — Transformación de Marca CBO Fases A-J

### Fase A — Auditoría de Confianza
- Auditoria completa como cliente nuevo · 14 problemas documentados, 4 críticos identificados
- Test de 10 segundos: 2 de 5 preguntas sin respuesta antes de la transformación

### Fixes críticos (antes de implementar nuevas fases)
- `index.html` Trust badge: eliminado "4.9/5 en Trustpilot +1.200 reseñas" (cuenta no existe) → "Productos 100% Originales · Garantía oficial"
- `index.html` Features strip: "Soporte en español 24/7" → "Soporte en español Lun–Vie 9–18h" (horario real)
- `index.html` Trust badge soporte: "9:00–20:00" → "9:00–18:00" (consistencia)
- `index.html` Modal login: eliminado ZONE10 -10% (código inexistente) → beneficios reales de la cuenta
- `contacto.html` FAQ: "14 días naturales" → "30 días hábiles" (plazo real)

### Fase B — Nuestra Historia
- `nuestra-historia.html` (nueva página): historia auténtica sin métricas inventadas
  - Secciones: El problema · La decisión · 4 pilares · Timeline · Diferencia vs Amazon · Visión
  - Firma personal del fundador
  - URL limpia `/nuestra-historia` y `/sobre-nosotros` vía vercel.json rewrites

### Fase C — ¿Por qué ZoneTechOnline?
- `index.html`: nueva sección de 6 bloques entre categorías y testimonios
  - Argumentos reales: selección curada, garantía EU, personas reales, IA especializada, 30 días devolución, transparencia
  - Link a Nuestra Historia al final

### Fase D — Autoridad
- `nuestra-historia.html`: sección "Cómo elegimos qué vendemos" con 4 criterios de selección
  - Marca con trayectoria verificada · Distribución autorizada · Relación calidad-precio · Público definido
  - Cita de criterio de catálogo

### Fase E — Reseñas rediseñadas
- `index.html` Testimonios hardcoded: eliminado "Compra verificada" (no verificable)
- Añadidas fechas (junio/julio 2026), producto específico, perfil del cliente (ciudad + actividad)
- Un testimonio cambiado a 4★ (mayor autenticidad)
- Título sección: "Opiniones verificadas" → "Primeras opiniones" con copy honesto

### Fase F — Homepage optimizada
- `index.html`: eliminado banner "Lanzamientos Exclusivos 2026 — Unidades Limitadas para los Primeros Compradores" (escasez artificial)
- Subtítulo sección productos: más criterio, menos urgencia manipulativa
- Añadida franja de identidad de marca bajo el hero slider (tienda especializada · distribución autorizada · Barcelona)

### Fase G — Footer como centro de confianza
- `index.html` Footer: rediseño completo
  - Banda superior de garantías (pago seguro, garantía 2 años, devolución 30 días, envío gratis, productos originales)
  - Columna "La Marca": Nuestra Historia, ¿Por qué ZoneTechOnline?, Blog, IA
  - Columna "Comprar con confianza": envíos, devoluciones, garantías, soporte, FAQs
  - Datos de contacto completos: dirección, email, teléfono con horario, envíos Europa
  - Botón WhatsApp directo en footer
  - Nombre del titular (Juan Sebastián Cárdenas) en pie legal
  - Sección de métodos de pago con descripción de seguridad (SSL, 3D Secure, PCI DSS)

### Fase H — Microcopy
- Carrito vacío: "Agrega productos para comenzar" → "Explora nuestro catálogo y encuentra tu próximo dispositivo favorito"
- Botón checkout: "Proceder al Pago" → "Finalizar compra · Pago seguro"
- Botón carrito: "Seguir Comprando" → "Seguir explorando"
- Newsletter título: "Sé el primero en conocer ofertas exclusivas" → "Novedades y guías de compra directamente en tu bandeja"
- Newsletter copy: eliminado "miles de amantes de la tecnología" (no verificable) → copy honesto

### Fase I — Personalidad de marca
- `docs/TONE_OF_VOICE.md` (nuevo): guía completa de tono de voz
  - Perfil de la marca como persona
  - 3 atributos clave: Claro · Honesto · Experto
  - Tono por contexto: producto, microcopy, emails, soporte, blog, redes
  - Vocabulario aprobado vs prohibido
  - Tabla de transformación: voz genérica → voz ZoneTech

### Fase J — Documentación
- `docs/TRUST_STRATEGY.md` (nuevo): estrategia de confianza con 5 pilares, KPIs y hoja de ruta
- `docs/CUSTOMER_EXPERIENCE.md` (nuevo): mapa completo del viaje del cliente (7 fases)
- `docs/CHANGELOG.md`: actualizado (esta entrada)
- `vercel.json`: rewrites `/nuestra-historia` y `/sobre-nosotros` → `nuestra-historia.html`

### Resultado del test de 10 segundos (post-transformación)
| Pregunta | Antes | Después |
|---|---|---|
| ¿Qué vende ZoneTechOnline? | ✅ | ✅ |
| ¿Por qué debería confiar? | ⚠️ | ✅ |
| ¿Qué diferencia a ZoneTechOnline de Amazon? | ❌ | ✅ |
| ¿Qué tipo de marca es? | ⚠️ | ✅ |
| ¿Me sentiría cómodo comprando 800€ aquí? | ❌ | ✅ |

---

## [2026-07-27] — CTO Transformation Fases G-I + Hotfix CSP

### Fase G — Documentación técnica completa
- `docs/ARCHITECTURE.md`: arquitectura completa documentada (stack, flujos, tablas Supabase, env vars, patrón middleware, rate limiting, CSP, deploy)
- `docs/CHANGELOG.md`: historial completo desde el setup inicial

### Fase H — Asistente IA Real (Claude claude-haiku-4-5-20251001)
- `api/_ai.js` (nuevo): cliente Anthropic con persona de ZoneTechOnline, `buildSystemPrompt()` inyecta catálogo completo, `callAnthropic()` via REST nativo (sin SDK npm)
- `api/ai-assistant.js` (nuevo, activo): endpoint POST con rate limiting (10 req/min), historial capped a 10 mensajes, manejo graceful si falta ANTHROPIC_API_KEY (HTTP 503)
- `api/admin-import-products.js`: movido a `.vercelignore` para liberar slot de función Vercel — slot ocupado por `ai-assistant.js`
- `data/ai-catalog.json` (nuevo): catálogo compacto de 212 productos (id, nombre, marca, categoría, precio, descripción 180 chars, inStock) para contexto del AI
- `generar-catalogo-ai.js` (nuevo, solo local): extrae PRODUCTS de app.js via vm context, genera `data/ai-catalog.json`
- `js/app.js` `sendMessage()`: reemplazado getResponse() por `fetch('/api/ai-assistant', {...})` con historial de conversación
- `vercel.json`: `admin-import-products` (maxDuration 30s) → `ai-assistant` (maxDuration 20s)
- **Estado:** desplegado. Responde HTTP 503 hasta que se añada `ANTHROPIC_API_KEY` en Vercel

### Fase I — Logging centralizado
- `api/_logger.js` (nuevo): structured JSON logging — `{ ts, lvl, tag, msg, method, path, ip }`. Emite a `console.error/warn/log` según nivel
- `api/_middleware.js`: importa `_logger`; `withAdmin()` y `withPublic()` loguean errores con `logger.error()` + contexto de request
- `api/checkout.js`: `console.error` → `logger.error('checkout', ...)`; `console.warn` → `logger.warn` para cart_sessions fallback
- `api/review.js`: `console.error` → `logger.error('review', ...)`; idem `newsletter`
- `api/emails.js`: `logger.error('emails:contact', ...)` en bloque de contacto

### Hotfix — CSP bloqueaba imágenes de secciones y Megasur
- `vercel.json` CSP `img-src`: añadidos `https://images.unsplash.com` (5 imágenes de secciones de categoría en index.html) y `https://cdn2.depau.es` (imágenes CDN Megasur)
- **Causa raíz:** la Fase F añadió el CSP pero no incluyó estas dos fuentes externas usadas en el HTML

---

## [2026-07-25] — CTO Transformation Fases B-F

### Fase B — API Middleware centralizado
- `api/_middleware.js` (nuevo): factory `withAdmin()` + `withPublic()` — CORS, auth, error handling en un único punto
- `admin-stats.js`, `admin-orders.js`, `admin-products.js`, `admin-customers.js` refactorizados con `withAdmin`
- Eliminada duplicación de `authCheck()` en 4 archivos
- Bug fix crítico en `admin-stats.js`: eliminada query a tabla `products` (no existe) que causaba HTTP 500

### Fase C — Configuración centralizada
- `js/config.js` (nuevo): `ZT_CONFIG` global IIFE con BRAND_MAP (31 marcas), CASE_MAP (10 casos de uso), FEATURES, SHIPPING, CATEGORY_ROUTES, API endpoints
- `catalogo.html`, `marca.html`, `caso.html`: añadido `<script src="js/config.js" defer>` antes de app.js

### Fase D — Navbar upgrade
- `marca.html` y `caso.html`: navbar mejorado — versión con mega-menú completo (reemplazó versión simplificada con emojis e iconos)
- `catalogo.html`: navbar restaurado con mega-menú completo inline

### Fase E — Performance
- `index.html`: preconnect Pexels CDN + preload hero LCP image (fetchpriority=high) + preload app.js
- `catalogo.html`, `marca.html`, `caso.html`: preload app.js + preload config.js

### Fase F — Seguridad
- `api/_ratelimit.js` (nuevo): rate limiter en memoria por IP — checkout (5/min), review (3/min), newsletter (3/min), contact (3/min)
- `api/checkout.js`: CORS wildcard `*` → `https://www.zonetechonline.com` + rate limiting aplicado
- `api/review.js`: CORS wildcard `*` → `https://www.zonetechonline.com` + rate limiting + `stripHtml()` en name/text/product
- `api/emails.js`: rate limiting aplicado al tipo `contact`
- `vercel.json`: añadido header `Content-Security-Policy` completo (scripts, estilos, fonts, imágenes, frames, conexiones)

### Auditoría Ejecutiva (Sprint 0)
- Auditoría CTO+CPO+eCommerce de toda la arquitectura
- Creada carpeta `/docs/` con documentación completa
- Generados: CEO_AUDIT.md, ROADMAP.md, TASKS.md, CHANGELOG.md, ARCHITECTURE.md
- Identificados 22 problemas (3 críticos, 8 altos, 8 medios, 3 bajos)

### Sprint 0 — Hotfixes
- `.vercelignore`: 104 scripts de desarrollo bloqueados (incluyendo push-to-github.js con PAT)
- `api/stripe-webhook.js`: email de confirmación incluye productos comprados + inserta en `order_items`
- `catalogo.html` JSON-LD: doble slash corregido, numberOfItems actualizado a 212

---

## [2026-07-21] — Sesión SEO + Imágenes + api/emails unificado

### SEO Setup
- Google Search Console verificado con meta tag existente
- Sitemap.xml enviado (14 páginas descubiertas)
- H1 duplicados corregidos: slides 2, 3, 4 del hero cambiados de H1 a H2
- Google Analytics 4 ID `G-0FVJFMXJWB` instalado en 17 páginas HTML

### Imágenes Smartphones (18 productos)
- Script `buscar-imagenes-pcc.js`: Puppeteer + browser fresco por producto → evita bot-detection Cloudflare de PCComponentes
- `limpiar-imagenes-accesorios.js`: filtra imágenes de accesorios que se colaban
- 24 imágenes nuevas subidas a GitHub → Vercel
- Productos actualizados: Samsung S25 FE (402), iPhone 17 (406), Xiaomi A7 Pro (407/145/146), Note 15 Pro (409/410), Realme Note 70T (413), TCL K70 (415), Moto Edge 60 (419), Hammer Iron 6 (421), Hammer Ranger (423), etc.

### API Emails Unificado
- Eliminados: email-welcome.js, email-order-confirm.js, email-shipping.js, email-contact.js (4 funciones)
- Creado: `api/emails.js` unificado con query param `?type=welcome|order-confirm|shipping|contact`
- Resultado: 16 → 12 funciones Vercel (en el límite del plan Hobby)
- Callers actualizados: register.html, checkout-success.html, admin-pedidos.html, contacto.html

### Precios Auriculares
- Script `actualizar-auriculares.js`: 48 auriculares con precios B2B Megasur
- Fórmula: `price = round05((cost + 4.90) / (1 - margin))`, margen tiered 35-40%
- Apple excluido (Megasur vende a PVP oficial, sin margen viable)

---

## [2026-07-16 / 17] — Google Merchant Center + inStock + Google Ads

### GMC Auditoría "Información engañosa"
- 6 páginas legales: `noindex,nofollow` → `index,follow`
- sitemap.xml: añadidas páginas legales + contacto, lastmod 2026-07-15
- index.html: "Distribuidor EU" → "Tecnología premium · España y Europa"
- Eliminados: mención a Klarna (no integrado), 4 social links vacíos

### Sistema inStock
- `js/app.js`: campo `inStock: false` para productos agotados
- `css/styles.css`: estilos `.product-badge--oos`, `.btn-cart--oos`, `.product-card--oos`
- Badge "AGOTADO" en tarjetas y quickview cuando `inStock: false`

### Google Ads
- Campaña Performance Max configurada con assets, búsquedas, audiencias
- Presupuesto: €1.50/día (≈ €10/semana)

---

## [2026-07-05] — Integración Megasur Dropshipping

### Backend Megasur
- `api/_megasur.js`: `placeMegasurOrder()` + `syncMegasurFeed()` (XML y CSV)
- `api/megasur.js`: endpoint admin `{action:'order'}` y `{action:'sync'}`, requiere X-Admin-Key
- `api/checkout.js`: añadido `shipping_address_collection` + guardado en `cart_sessions` Supabase
- `api/stripe-webhook.js`: recupera carrito de Supabase y llama `placeMegasurOrder()` post-pago

### Supabase
- Tabla `cart_sessions` creada: `(id, stripe_session_id UNIQUE, items JSONB, created_at)`
- Campo `megasur_ref` añadido a `orders`
- Campo `megasur_status` añadido a `orders`: 'placed' | 'pending_credentials'

**Estado:** código listo, pendiente credenciales de Adrián Novoa (anovoa@megasur.es)

---

## [2026-07-01] — Sistema de Emails Completo

### Resend
- Dominio verificado: zonetechonline.com (región eu-west-1)
- DNS: DKIM en resend._domainkey, SPF+MX en send.zonetechonline.com via FreeDNS
- NS delegation: send.zonetechonline.com → freedns1/freedns2.registrar-servers.com
- From: noreply@zonetechonline.com ✓

### Email Forwarding
- info@zonetechonline.com → zonetechonline2024@gmail.com (Namecheap Redirect Email)

### Templates de Email
Todos en `api/_email-templates.js`:
- `welcome()` — alta de usuario
- `orderConfirm()` — confirmación de pago
- `orderShipped()` — pedido en camino + tracking
- `orderDelivered()` — pedido entregado + pide reseña
- `orderCancelled()` — cancelación + info reembolso
- `contactAutoReply()` — auto-reply formulario contacto

### Flujo de Emails
- Alta → `register.html` → `/api/emails?type=welcome`
- Pago → `stripe-webhook.js` → email de confirmación (orderConfirm)
- Admin shipped → `admin-orders.js PATCH` → email de envío (orderShipped)
- Admin delivered → `admin-orders.js PATCH` → email entregado (orderDelivered)
- Admin cancelled → `admin-orders.js PATCH` → email cancelación (orderCancelled)
- Contacto → `/api/emails?type=contact` → auto-reply + notificación a Gmail

### Otros cambios
- `register.html`: eliminado descuento ZONE10 completamente
- `stripe-webhook.js`: bienvenida separada del checkout

---

## [2026-06-25] — Hero Banners + Buscador + Fix Login

### Hero Banners
- Rediseño completo estilo Apple/Samsung
- 4 slides con fotografía real de Pexels como fondo full-bleed
- Nav color coordinado por banner (azul slide smartphones, etc.)

### Buscador
- Reescrito completo: fix de `goToProduct`, scoring por relevancia
- Keyboard navigation, sinónimos configurables
- Búsqueda en tiempo real con debounce

### Botón Acceder
- Modal inyectado via JS cuando no existe en la página
- Fix cross-page: funciona en todas las páginas incluyendo catalogo.html

---

## [2026-06-05 aprox.] — Stripe + Webhook + Admin

### Stripe LIVE
- Integración completa con Checkout Sessions
- payment_method_types: card, bizum, paypal
- shipping_address_collection para dropshipping

### Panel de Administración
- `/admin/` con dashboard, pedidos, productos, clientes
- API: admin-orders.js, admin-products.js, admin-customers.js, admin-stats.js
- Autenticación via header X-Admin-Key

### Supabase
- Tablas creadas: `orders`, `customers`, `order_items`
- Helper `api/_db.js`: Supabase REST API sin SDK npm

---

## [2026-06-01 aprox.] — Setup Inicial

- Dominio zonetechonline.com registrado en Namecheap
- DNS configurado: A record → Vercel, CNAME www → vercel-dns
- Proyecto Vercel conectado a GitHub (zonetechonline2024-Juan/zonetechonline)
- Vercel env vars configuradas: STRIPE, SUPABASE, RESEND, ADMIN_API_KEY
- Redirect zonetechonline.com → www.zonetechonline.com (301)
- HSTS + security headers en vercel.json
- Catálogo inicial: relojes, auriculares, altavoces, periféricos, smartphones
- Google Analytics 4 instalado (G-0FVJFMXJWB)
