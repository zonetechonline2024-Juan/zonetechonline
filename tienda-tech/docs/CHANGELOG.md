# CHANGELOG — ZoneTechOnline
> Registro de cambios en producción | Formato: [Fecha] Descripción

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
