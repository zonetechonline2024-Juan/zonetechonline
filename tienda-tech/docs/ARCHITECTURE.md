# ARCHITECTURE.md — ZoneTechOnline
> Generado: 2026-07-25 | Actualizado: 2026-07-25 (Fases B-F CTO Transformation)

---

## Visión General

ZoneTechOnline es un eCommerce estático de tecnología premium (wearables, auriculares, altavoces, gaming, smartphones) orientado al mercado español y europeo. Arquitectura JAMstack sin framework frontend: HTML/CSS/JS puro + Serverless Functions en Vercel.

---

## Stack Tecnológico

| Capa | Tecnología | Notas |
|---|---|---|
| Frontend | HTML5 + CSS3 + Vanilla JS | Sin framework. Sin bundler. Sin TypeScript. |
| Estilos | CSS Variables + clases utilitarias propias | Sin Tailwind ni Bootstrap. Sistema de diseño custom. |
| Hosting | Vercel (Hobby, gratuito) | Auto-deploy desde GitHub main |
| Serverless | Vercel Functions (Node.js 18+) | 12 funciones — en el límite del plan Hobby |
| Base de datos | Supabase (PostgreSQL via REST) | Sin SDK npm; `fetch` nativo en `_db.js` |
| Pagos | Stripe LIVE | Checkout Sessions + Webhook + Bizum/PayPal |
| Email | Resend | Dominio propio verificado. Templates HTML custom. |
| Analytics | Google Analytics 4 (G-0FVJFMXJWB) | Instalado en 17 páginas HTML |
| Dropshipping | Megasur (B2B España) | Integración pendiente — credenciales no recibidas |
| DNS | Namecheap | A record + CNAME → Vercel |
| Repo | GitHub (zonetechonline2024-Juan/zonetechonline) | Rama única: main |

---

## Estructura de Directorios

```
tienda-tech/
├── index.html                  # Homepage (88KB)
├── catalogo.html               # Catálogo/categorías (todas las rutas → aquí)
├── checkout.html               # Formulario de pago
├── checkout-success.html       # Confirmación de pedido post-Stripe
├── checkout-cancel.html        # Cancelación
├── login.html                  # Login/registro con social (Google/Facebook)
├── register.html               # Registro alternativo
├── mis-pedidos.html            # Historial pedidos (usuario)
├── lista-deseos.html           # Wishlist
├── mi-cuenta.html              # Perfil de usuario
├── admin-pedidos.html          # Admin: pedidos (legacy, al mismo nivel que raíz)
├── admin/                      # Panel de administración
│   ├── index.html              # Dashboard
│   ├── pedidos.html            # Gestión de pedidos
│   ├── productos.html          # Gestión de productos
│   └── clientes.html           # Gestión de clientes
├── css/
│   └── styles.css              # Hoja de estilos principal (113KB)
├── js/
│   ├── app.js                  # Catálogo hardcodeado + lógica JS (306KB)
│   └── config.js               # ZT_CONFIG global: BRAND_MAP, CASE_MAP, FEATURES, SHIPPING, API (Fase C)
├── api/                        # Serverless functions (16 archivos, 12 en vercel.json)
│   ├── checkout.js             # Crea Stripe Session (CORS restringido + rate limit)
│   ├── stripe-webhook.js       # Webhook post-pago
│   ├── emails.js               # Endpoint unificado de emails (rate limit en contact)
│   ├── orders.js               # API pública de pedidos
│   ├── review.js               # Reseñas + newsletter (CORS restringido + rate limit + stripHtml)
│   ├── feed.js                 # Feed de productos (Google Merchant Center)
│   ├── megasur.js              # Admin: acciones Megasur
│   ├── admin-orders.js         # Admin: pedidos CRUD (withAdmin)
│   ├── admin-products.js       # Admin: productos (withAdmin)
│   ├── admin-customers.js      # Admin: clientes (withAdmin)
│   ├── admin-stats.js          # Admin: estadísticas (withAdmin)
│   ├── admin-import-products.js# Admin: importar productos
│   ├── _db.js                  # Helper Supabase (REST, sin npm)
│   ├── _email-templates.js     # Templates HTML de emails
│   ├── _middleware.js          # withAdmin() + withPublic() factory — CORS, auth, error (Fase B)
│   ├── _ratelimit.js           # Rate limiter en memoria por IP (Fase F)
│   ├── _send-email.js          # Wrapper Resend
│   └── _megasur.js             # Helper Megasur (placeMegasurOrder, syncMegasurFeed)
├── img/
│   └── productos/              # ~980 imágenes (mix JPEG/PNG, algunas >3MB)
├── docs/                       # Documentación técnica (esta carpeta)
├── vercel.json                 # Config despliegue
├── site.webmanifest            # PWA manifest
├── sitemap.xml                 # Mapa del sitio
├── favicon.svg / .ico          # Iconos
└── [50+ scripts de desarrollo] # ⚠️ Scripts de utilidad mezclados en raíz
```

---

## Flujo de Datos — Compra

```
[Cliente] → checkout.html → POST /api/checkout
                              ↓
                         Stripe Session creada
                         cart_sessions (Supabase) guardado
                              ↓
                    [Redirige a Stripe Checkout]
                              ↓
              [Cliente paga] → Stripe → POST /api/stripe-webhook
                                          ↓
                              Guardar orders (Supabase)
                              Guardar/actualizar customers (Supabase)
                              Email confirmación (Resend)
                              placeMegasurOrder() → (pendiente credenciales)
                              checkout-success.html mostrado
```

---

## Flujo de Datos — Catálogo

```
[Navegador] → catalogo.html / marca.html / caso.html
                  ↓
            <script src="js/config.js" defer>   ← ZT_CONFIG global (BRAND_MAP, CASE_MAP, etc.)
                  ↓
            <script src="js/app.js" defer>       ← 306KB, lee ZT_CONFIG en DOMContentLoaded
                  ↓
            const PRODUCTS = [...212 productos...]
            JS filtra/renderiza DOM dinámicamente
```

---

## Tablas Supabase

| Tabla | Campos principales |
|---|---|
| orders | id, order_no, stripe_session_id, customer_email, customer_name, customer_address, total, status, payment_method, payment_status, email_sent, ship_email_sent, megasur_ref, megasur_status, tracking_number, carrier, tracking_url, notes, shipped_at, delivered_at, created_at |
| customers | id, email, name, total_orders, total_spent, created_at |
| cart_sessions | id, stripe_session_id (UNIQUE), items (JSONB), created_at |
| order_items | id, order_id, ... (referenciada en admin-orders.js GET pero no se escribe en webhook) |

---

## Variables de Entorno (Vercel Production)

| Variable | Propósito |
|---|---|
| STRIPE_SECRET_KEY | Stripe LIVE sk_live_... |
| STRIPE_WEBHOOK_SECRET | Verificar firma webhooks Stripe |
| SUPABASE_URL | URL proyecto Supabase |
| SUPABASE_SERVICE_KEY | Service role key Supabase |
| RESEND_API_KEY | API key Resend |
| ADMIN_API_KEY | Clave de autenticación panel admin |
| GITHUB_PAT | Token GitHub (para deploy vía API) |
| MEGASUR_CLIENT_CODE | 372416 (configurado) |
| MEGASUR_API_KEY | Pendiente — de Adrián Novoa |
| MEGASUR_WS_URL | Pendiente — URL Web Service pedidos Megasur |
| MEGASUR_FEED_URL | Pendiente — URL feed catálogo Megasur |

---

## Restricciones del Plan Vercel Hobby

- **Límite de funciones:** 12 (actualmente 12/12 — al tope)
- **Duración máxima:** 15s por función (megasur e import-products: 30s)
- **Sin background jobs / cron jobs nativos**
- **Sin Edge Functions configuradas**
- **Bandwidth:** 100GB/mes (probablemente suficiente por ahora)

---

## Patrón de API — Middleware Centralizado (Fase B)

Los endpoints admin usan factory functions de `api/_middleware.js`:

```javascript
// Endpoints admin (X-Admin-Key requerido)
module.exports = withAdmin(async (req, res) => { ... });

// Endpoints públicos (solo CORS + error handling)
module.exports = withPublic(async (req, res) => { ... });
```

`withAdmin()` aporta: verificación de X-Admin-Key, CORS restringido, manejo de OPTIONS, catch global de errores.

---

## Rate Limiting (Fase F)

`api/_ratelimit.js` — limitador en memoria por IP, ventana de 60 segundos:

| Endpoint | Límite |
|---|---|
| checkout | 5 req/min |
| review | 3 req/min |
| newsletter | 3 req/min |
| contact (emails) | 3 req/min |

**Nota:** Al ser in-memory y Vercel multi-instancia, el rate limiting es best-effort (eficaz contra bots simples, no contra ataques distribuidos). Para protección robusta se necesitaría Redis o Upstash.

---

## Seguridad — Headers HTTP Configurados (Fase F)

Via `vercel.json` para todas las rutas:

- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block` (obsoleto en browsers modernos)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy:` (añadido Fase F)
  - `script-src`: self, GTM, Google Analytics, Stripe
  - `style-src`: self, Google Fonts
  - `font-src`: Google Fonts gstatic
  - `img-src`: self, Pexels, YouTube thumbnails, GA tracking
  - `frame-src`: YouTube, Stripe Checkout
  - `connect-src`: self, GA, Stripe API
  - `object-src 'none'` — bloquea Flash/plugins
  - `form-action 'self' https://checkout.stripe.com`
  - `upgrade-insecure-requests`

**CORS:** `Access-Control-Allow-Origin: https://www.zonetechonline.com` (restringido, no wildcard) en todos los endpoints públicos y admin.

**Sanitización de inputs (Fase F):** `review.js` aplica `stripHtml()` en name, text y product antes de guardar.

---

## Routing / SEO

Las URLs de categorías son rewrites de Vercel que apuntan todas a `catalogo.html`:

```
/relojes       → catalogo.html
/auriculares   → catalogo.html
/altavoces     → catalogo.html
/gaming        → catalogo.html
/smartphones   → catalogo.html
```

**No existen páginas de producto individuales** (`/producto/[slug]`). El catálogo filtra en el DOM mediante JS tras cargar. Esto limita severamente el SEO de producto.

---

## Sistema de Emails

Endpoint unificado: `POST /api/emails?type=TYPE`

| type | Cuándo | Template |
|---|---|---|
| welcome | Alta de usuario (register.html) | welcome() |
| order-confirm | Post-pago (stripe-webhook.js) | orderConfirm() |
| shipping | Admin marca "shipped" (admin-orders.js) | orderShipped() |
| contact | Formulario contacto | contactAutoReply() + notificación a Gmail |

Templates HTML definidos en `_email-templates.js`.

---

## Autenticación

- **Clientes:** Login social (Google/Facebook) simulado en JS + localStorage. No existe backend de autenticación real (no Supabase Auth, no JWT).
- **Admin panel:** Header `X-Admin-Key` verificado contra `ADMIN_API_KEY` env var. Las páginas HTML del admin (`/admin/`) no tienen protección a nivel de ruta.

---

## Performance — Optimizaciones Aplicadas (Fase E)

- `index.html`: `<link rel="preconnect" href="https://images.pexels.com">` — evita DNS lookup en runtime
- `index.html`: `<link rel="preload" href="[hero-image]" as="image" fetchpriority="high">` — LCP pre-cargado
- `index.html`, `catalogo.html`, `marca.html`, `caso.html`: `<link rel="preload" href="js/app.js" as="script">` — browser descarga 306KB antes de parsear el body
- `config.js` cargado con `defer` antes de `app.js` — garantiza que ZT_CONFIG está disponible cuando app.js ejecuta

---

## Deploy

**Mecanismo activo:** Vercel CLI directo desde la máquina local.

```bash
cd C:\Users\yulie\tienda-tech
vercel --prod --yes
```

`push-to-github.js` existe para mantener el repo GitHub en sync, pero **no dispara deploys automáticos de Vercel** (el proyecto no tiene GitHub auto-deploy configurado).

---

*Próxima revisión sugerida: después de Sprint 1 (migración datos a Supabase)*
