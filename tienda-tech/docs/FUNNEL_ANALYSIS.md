# FUNNEL_ANALYSIS.md — ZoneTechOnline
> Análisis del embudo de conversión por etapa | Versión 1.0 · Julio 2026

---

## EL EMBUDO ACTUAL

```
VISITA (100%)
    ↓  ~35% abandona en homepage sin interacción
INTERACCIÓN CON PRODUCTO (65%)
    ↓  ~60% cierra el quickview sin añadir al carrito
AÑADE AL CARRITO (26%)
    ↓  ~55% abandona el carrito sin ir a checkout
VA A CHECKOUT (12%)
    ↓  ~40% abandona checkout (campo descuento, dudas)
PAGO COMPLETADO (7%)
    ↓
CONVERSIÓN ESTIMADA: ~1.5–2%
```

---

## ANÁLISIS POR ETAPA

### ETAPA 1: VISITA → INTERACCIÓN
**Tasa actual estimada:** 65% interacción, 35% rebote inmediato

**Causas de rebote:**
- Usuario que llega por búsqueda orgánica genérica sin intención de compra
- Velocidad de carga en mobile (imágenes sin optimización)
- Homepage no comunica la propuesta de valor en los primeros 3 segundos

**Acciones de mejora:**
1. A/B test en el headline del hero: "Tecnología premium" vs "Wearables con garantía oficial 2 años"
2. Añadir barra de valor (social proof): "Más de 500 pedidos enviados este año · Valoración media 4.8/5"
3. Lazy loading agresivo en productos que no son above the fold

**KPI a medir:** Bounce rate (actualmente desconocido — implementar event tracking en GA4)

---

### ETAPA 2: INTERACCIÓN → AÑADE AL CARRITO
**Tasa actual estimada:** 40% de los que interactúan (modal quickview → add to cart)

**Causas de drop:**
- Modal quickview no tiene suficiente información para decidir en productos de 200€+
- No hay "para quién es esto" → usuario no se identifica con el producto
- No hay reviews reales → baja confianza
- No hay upsell → el usuario no tiene contexto de precio relativo

**Acciones de mejora implementadas (este sprint):**
1. ✅ `producto.html` — página completa para cada producto con toda la información necesaria
2. ✅ Upsell en quickview — contexto de precio relativo
3. ✅ "Para quién es esto" en páginas de producto
4. ✅ FAQs por categoría

**Acciones pendientes:**
- Reviews reales (P1) — el elemento de confianza más crítico
- "X personas miran esto ahora" (si tienes datos reales de analytics)
- Video del producto embebido (YouTube) para productos de más de 200€

**KPI a medir:** Tasa quickview → add to cart (implementar evento GA4: `add_to_cart`)

---

### ETAPA 3: CARRITO → CHECKOUT
**Tasa actual estimada:** 45% de los que añaden al carrito van a checkout

**Causas de drop:**
- El carrito no refuerza la decisión de compra
- Sin urgencia (no hay indicación de stock limitado)
- Usuario se va a "comparar precios" y no vuelve

**Acciones de mejora implementadas (este sprint):**
1. ✅ Cross-sell en carrito — aumenta el valor percibido del pedido
2. Recordatorio de trust signals en el footer del carrito (ya existe parcialmente)

**Acciones pendientes:**
- Email de carrito abandonado: 1h, 24h, 72h (P1)
- "Solo quedan X unidades" para productos con stock bajo (si tienes datos Supabase)
- Express checkout (Apple Pay / Google Pay) para reducir fricción en mobile

**KPI a medir:** Tasa carrito → checkout. Evento GA4: `begin_checkout`

---

### ETAPA 4: CHECKOUT → PAGO
**Tasa actual estimada:** 60% de los que llegan a checkout completan el pago

**Causas de drop:**
- **Crítico:** Campo de código de descuento visible → el usuario sale a buscar cupones y no vuelve
- Cambio de dominio a Stripe (genera desconfianza en el momento crítico)
- Sin express checkout → proceso largo en mobile

**Acciones de mejora implementadas (este sprint):**
1. ✅ Código de descuento colapsado por defecto (solo visible si el usuario lo activa)

**Acciones pendientes:**
- Apple Pay / Google Pay (Stripe Elements ya lo soporta — solo activar en Stripe Dashboard)
- Progress indicator en checkout ("Datos → Pago → Confirmación")
- Trust bar más prominente en checkout: "SSL · Stripe · Devolución 30 días"
- Ofrecer Bizum como primera opción en mobile (detección por user-agent)

**KPI a medir:** Tasa checkout → purchase. Evento GA4: `purchase`

---

## MICRO-CONVERSIONES A TRACKEAR

| Micro-conversión | Evento GA4 | Valor de negocio |
|---|---|---|
| Apertura quickview | `view_item` | Señal de interés |
| Añadir al carrito | `add_to_cart` | Intención fuerte |
| Añadir a wishlist | `add_to_wishlist` | Intención futura |
| Apertura del carrito | `view_cart` | — |
| Inicio checkout | `begin_checkout` | Señal de compra |
| Pago completado | `purchase` | Conversión real |
| Email newsletter | `generate_lead` | LTV futuro |
| Click en upsell | evento custom `qv_upsell_click` | Oportunidad AOV |
| Click en cross-sell | evento custom `cart_crosssell_click` | Oportunidad AOV |

---

## OPORTUNIDADES DE RECUPERACIÓN

### Carrito abandonado (P1)
- Email 1: 1 hora después del abandono — "¿Olvidaste algo?" (sin descuento)
- Email 2: 24 horas — recordatorio con foto del producto
- Email 3: 72 horas — con descuento 5% si el ticket es >150€

### Visitantes sin conversión (P2)
- Retargeting en Meta/Google con el producto que vieron (requiere pixel)
- Email de re-engagement a suscriptores de newsletter que no compran en 60 días

---

## BENCHMARK ECOMMERCE TECH ESPAÑA

| Métrica | Benchmark sector | Objetivo ZoneTech 6M | Objetivo ZoneTech 12M |
|---|---|---|---|
| Tasa de conversión | 1.5–2.5% | 3% | 4.5% |
| AOV | 120–180€ | 210€ | 250€ |
| Abandono de carrito | 70–80% | 60% | 55% |
| Abandono de checkout | 35–50% | 30% | 25% |
| LTV (12 meses) | 1.2–1.5x primer pedido | 1.3x | 1.6x |

---

*Creado: Julio 2026 | ZoneTechOnline CRO Initiative*
