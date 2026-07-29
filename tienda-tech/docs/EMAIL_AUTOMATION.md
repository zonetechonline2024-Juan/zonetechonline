# EMAIL_AUTOMATION.md — ZoneTechOnline
> Secuencias de email marketing automatizado | Versión 1.0 · Julio 2026

---

## INFRAESTRUCTURA ACTUAL

- **Proveedor:** Resend (ya configurado con dominio verificado)
- **Endpoint:** `api/emails.js` — activo para emails transaccionales
- **Templates:** Diseño dark inline HTML (consistente con identidad visual de la tienda)
- **Emails ya activos:** Confirmación de pedido, notificación de envío, bienvenida tras registro

---

## SECUENCIAS PENDIENTES DE IMPLEMENTAR

### SECUENCIA 1 — RECUPERACIÓN DE CARRITO ABANDONADO

**Trigger:** El usuario añadió al carrito pero no completó la compra en 45 minutos.
**Implementación:** Requiere `api/cart-recovery.js` + cron job (Vercel Cron o similar)

**Flujo:**
```
[45 min: carrito sin checkout] → Guardar en Supabase: tabla cart_sessions con email+items
    ↓
EMAIL 1: +1h — "¿Olvidaste algo?"
EMAIL 2: +24h — Recordatorio con imagen del producto
EMAIL 3: +72h — Último aviso (con pequeño incentivo si ticket >150€)
```

**Email 1 — "+1 hora" — SIN descuento**
- Asunto: "Juan, dejaste algo atrás"
- Cuerpo: Imagen del producto + "Tu [Nombre producto] sigue disponible"
- CTA: "Completar mi pedido"
- Tono: Neutro, informativo. No empujar. Solo recordar.

**Email 2 — "+24 horas" — Refuerzo de confianza**
- Asunto: "[Nombre producto] · Garantía oficial 2 años incluida"
- Cuerpo: Foto del producto + 3 bullets de trust (garantía, devolución, envío gratis)
- CTA: "Volver al carrito"
- Tono: Añadir valor con información, no presionar.

**Email 3 — "+72 horas" — Incentivo opcional**
- Asunto: "Última oportunidad para tu pedido" (solo si no reabre en 72h)
- Cuerpo: Si el ticket era >150€: "Aquí tienes un 5% de descuento por si te ayuda a decidir: [CODIGO]"
- CTA: "Finalizar mi pedido · [Total] → [Total con descuento]"
- Condición: Solo enviar si el usuario tiene email (registrado o introducido en checkout)

**Prerequisito técnico:**
1. Capturar el email del usuario en el paso 1 del checkout (antes de que abandone)
2. Guardar `{ email, cart_items, cart_total, created_at }` en Supabase tabla `cart_sessions`
3. Vercel Cron job cada hora: consultar sessions > 45min sin `completed_at` y sin email enviado

---

### SECUENCIA 2 — BIENVENIDA (nuevo registro)

**Trigger:** Usuario crea cuenta en ZoneTechOnline
**Status:** Email 1 ya existe. Emails 2–5 pendientes.

**Email 1 — Inmediato — Bienvenida** ✅ (ya existe)
- Asunto: "Bienvenido a ZoneTechOnline"
- Cuerpo: Presentación de la tienda, promesa de valor

**Email 2 — Día 3 — Nuestra filosofía de selección**
- Asunto: "Por qué rechazamos el 80% de los productos que nos ofrecen"
- Cuerpo: Enlace a `/nuestra-filosofia` + extracto del proceso de selección
- Objetivo: Construir confianza y diferenciación antes de que compren

**Email 3 — Día 7 — Guía de compra de la categoría de interés**
- Asunto: Personalizado según categoría que navegó: "La guía definitiva para elegir smartwatch en 2026"
- Cuerpo: Extracto del artículo de blog más relevante para el usuario
- CTA: "Leer la guía completa" → artículo del blog

**Email 4 — Día 10 — "El equipo recomienda"**
- Asunto: "Nuestros 3 productos más pedidos este mes"
- Cuerpo: 3 productos top con imagen, precio y descripción breve
- CTA: "Ver todos los productos"

**Email 5 — Día 14 — Pregunta directa**
- Asunto: "¿En qué te puedo ayudar?"
- Cuerpo: Mensaje personal de Juan. "Si buscas algo concreto o tienes dudas, responde a este email directamente."
- Sin CTA de venta. Solo abrir conversación.

---

### SECUENCIA 3 — POST-COMPRA

**Trigger:** Pedido completado con estado "entregado" (estimado: +7 días del envío)

**Email 1 — Día 0 (inmediato al comprar)** ✅ (ya existe: confirmación de pedido)

**Email 2 — Día 1 (cuando sale el pedido)** ✅ (ya existe: tracking)

**Email 3 — Día 8 (estimado post-entrega) — Review**
- Asunto: "¿Cómo está tu [Nombre producto]?"
- Cuerpo: "Ya llevas una semana con él. ¿Qué te parece? Tu opinión ayuda a otros compradores."
- CTA: "Dejar mi valoración" → formulario de review (por implementar)
- Objetivo: Capturar reviews reales

**Email 4 — Día 15 — Tip de uso**
- Asunto: "3 cosas que quizás no sabías sobre tu [Nombre producto]"
- Cuerpo: Tips específicos por categoría (para relojes: cómo calibrar GPS, para auriculares: cómo activar ANC, etc.)
- Objetivo: Reducir devoluciones, aumentar satisfacción

**Email 5 — Día 30 — Productos relacionados**
- Asunto: "Para completar tu setup · Ideas para ti"
- Cuerpo: Cross-sell basado en lo que compraron (smartwatch → auriculares running, etc.)
- CTA: "Ver productos recomendados"

---

### SECUENCIA 4 — REACTIVACIÓN

**Trigger:** Usuario registrado sin actividad (sin compra ni apertura de email) en 60 días

**Email 1 — Día 60 — "¿Sigues por aquí?"**
- Asunto: "Han pasado 2 meses · ¿Te puedo ayudar con algo?"
- Cuerpo: Mensaje personal. Nuevos productos desde su última visita.
- CTA: "Ver novedades"

**Email 2 — Día 75 — Artículo de blog**
- Asunto: "[Artículo reciente del blog]"
- Cuerpo: Resumen del artículo más reciente relevante para el usuario
- Sin CTA de venta directa

**Email 3 — Día 90 — Incentivo de reactivación**
- Asunto: "Un regalo para que vuelvas"
- Cuerpo: Código de descuento del 8% válido 7 días para pedidos >100€
- CTA: "Usar mi descuento"
- Si no abre este email: marcarlo como inactivo y reducir frecuencia de envíos

---

## MÉTRICAS OBJETIVO POR SECUENCIA

| Secuencia | Open rate objetivo | Click rate objetivo | Conversión objetivo |
|---|---|---|---|
| Carrito abandonado Email 1 | 45% | 15% | 8% recuperación |
| Carrito abandonado Email 2 | 35% | 10% | 5% recuperación |
| Carrito abandonado Email 3 | 25% | 8% | 4% recuperación |
| Bienvenida Email 1 | 60% | 20% | — |
| Post-compra review | 40% | 12% | 15% review rate |
| Reactivación Email 1 | 20% | 6% | 4% conversión |

**Benchmark sector:** Open rate medio e-commerce España: 22–28%. Open rate en secuencias post-transacción: 40–60%.

---

## IMPLEMENTACIÓN TÉCNICA

### Prioridad de implementación:
1. **Secuencia 3 Email 3** (review post-entrega) — más fácil, alto impacto en confianza futura
2. **Secuencia 1** (carrito abandonado) — mayor impacto en conversión. Requiere captura de email en checkout paso 1
3. **Secuencia 2 Emails 2–5** (bienvenida) — bajo coste técnico, alta rentabilidad LTV
4. **Secuencia 4** (reactivación) — requiere segmentación en Supabase

### Endpoint a crear: `api/cart-recovery.js`
```javascript
// POST /api/cart-recovery
// Body: { email, cart, source: 'abandon_1h' | 'abandon_24h' | 'abandon_72h' }
// Envía el email de recuperación correspondiente via Resend
```

### Tabla Supabase necesaria:
```sql
CREATE TABLE cart_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT,
  cart_data JSONB,
  cart_total DECIMAL(10,2),
  recovery_email_1_sent_at TIMESTAMPTZ,
  recovery_email_2_sent_at TIMESTAMPTZ,
  recovery_email_3_sent_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

*Creado: Julio 2026 | ZoneTechOnline CRO Initiative*
