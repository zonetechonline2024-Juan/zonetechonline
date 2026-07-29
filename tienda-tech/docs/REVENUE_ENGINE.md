# REVENUE_ENGINE.md — ZoneTechOnline
> Motor de ingresos: estrategia completa de conversión, AOV, LTV | Versión 1.0 · Julio 2026

---

## VISIÓN

Construir el eCommerce de tecnología wearable con mayor tasa de conversión de España. No mediante trucos de dark patterns ni urgencia falsa, sino mediante una experiencia de compra tan buena que el usuario sienta que sería un error comprar en otro sitio.

**Objetivo de conversión:** 1.8% (actual estimado) → 3.5% (objetivo 6 meses) → 5% (objetivo 12 meses)
**Objetivo AOV:** 180€ (estimado actual) → 230€ (con bundles y upsell)
**Objetivo LTV:** Primer pedido → +1 pedido en 90 días para el 25% de clientes

---

## ARQUITECTURA DEL MOTOR DE INGRESOS

```
TRÁFICO
    ↓
[LANDING / CATEGORÍA]
    ↓
[PÁGINA DE PRODUCTO ← PUNTO DE MÁXIMA CONVERSIÓN]
    ↓                ↓
[AÑADIR CARRITO] [UPSELL → MODELO SUPERIOR]
    ↓
[CARRITO con CROSS-SELL de accesorios]
    ↓
[CHECKOUT sin fricción]
    ↓
[PAGO: Tarjeta / Bizum / PayPal]
    ↓
[CONFIRMACIÓN + Trust]
    ↓
[EMAIL: Confirmación → Tracking → Review → Recompra]
    ↓
[FIDELIZACIÓN → LTV]
```

---

## IMPLEMENTACIÓN POR FASES

### FASE 0 (Completado — julio 2026)
- ✅ Tienda operativa con Stripe LIVE
- ✅ Emails transaccionales activos (confirmación, envío, bienvenida)
- ✅ Brand strategy documentada (TRUST_STRATEGY, TONE_OF_VOICE, etc.)
- ✅ Blog con 10 artículos SEO
- ✅ Asistente IA desplegado (pendiente API key)

### FASE 1 — Motor Base (Implementar ahora) 🔴 PRIORIDAD MÁXIMA
**Objetivo:** Doblar la probabilidad de compra desde cada visita

1. **Páginas de producto individuales** (`/producto/:id`)
   - Cada producto = landing page completa
   - URL única, indexable, shareable
   - Diseño: hero imagen + beneficios + specs + "para quién" + FAQs + relacionados
   - Impacto estimado: +40% conversión, base para campañas de pago

2. **Estrategia de badges** (no todo puede ser "OFERTA")
   - Tipos: "Más vendido", "Nuevo", "Premium Pick", "Selección del equipo", "Mejor valorado", "OFERTA" (solo si hay descuento real)
   - Impacto: +10–15% CTR en catálogo

3. **Cross-sell en carrito** ("Completa tu pack")
   - Auriculares → sugiere funda protectora o segundo dispositivo de distinta categoría
   - Smartwatch → sugiere auriculares de running
   - Impacto estimado: +15–25% AOV

4. **Upsell en página/quickview de producto** ("El siguiente nivel")
   - Galaxy Watch FE → "¿Has visto el Galaxy Watch 7? Por 50€ más tienes ECG y pantalla Sapphire"
   - Jabra básico → "El modelo Elite tiene ANC real por 30€ más"
   - Impacto estimado: +10–20% AOV

5. **Ocultar código descuento en checkout** (collapsed por defecto)
   - El campo visible provoca que el 15–30% salga a buscar cupones
   - Impacto estimado: +10–20% conversión en checkout

### FASE 2 — Captura y recuperación
1. **Recuperación de carrito** — email 1h, 24h, 72h después del abandono
2. **Wishlist con recordatorio** — "Este producto está en tu lista de deseos, aún disponible"
3. **Express checkout** — Google Pay y Apple Pay (Stripe Elements soporta ambos)

### FASE 3 — Email automation completa
1. Secuencia de bienvenida (5 emails en 14 días)
2. Post-compra (review a los 15 días de entrega estimada)
3. Reactivación (30/60/90 días sin compra)
4. Newsletter mensual con curación de productos

### FASE 4 — Personalización y LTV
1. "Basado en lo que compraste" en homepage para usuarios recurrentes
2. Sistema de fidelización sin descuentos: contenido exclusivo, acceso anticipado
3. Programa de recomendación: "Comparte con un amigo, ambos ganan X"

### FASE 5 — Experimentación
1. A/B testing en hero, CTA, precio display, badge strategy
2. Heat maps y session recording (Hotjar o similar)
3. Experimentos en checkout (pasos, campos, trust signals)

---

## BUNDLES RECOMENDADOS

| Bundle | Productos | Precio individual | Precio bundle | Ahorro |
|---|---|---|---|---|
| Runner Pack | Garmin Forerunner + Jabra Sport | 450€ | 419€ | 31€ |
| Home Office Pro | Sony WH-1000XM5 + ratón inalámbrico | 380€ | 349€ | 31€ |
| Gaming Starter | Teclado mecánico + auriculares gaming | 180€ | 165€ | 15€ |
| Travel Pack | Sony XM5 + altavoz JBL | 420€ | 385€ | 35€ |
| Health Monitor | Garmin Instinct + Xiaomi Band 9 | 310€ | 285€ | 25€ |

*Nota: Los bundles deben tener justificación real de uso, no ser arbitrarios. Ver Fase H.*

---

## ESTRATEGIA DE UPSELL POR CATEGORÍA

### Smartwatches (ordenados por escalada natural)
```
Xiaomi Band 9 (39€) → Xiaomi Watch S3 (99€) → Samsung Galaxy Watch FE (149€) 
→ Samsung Galaxy Watch 7 (279€) → Garmin Forerunner 265 (349€) 
→ Garmin Forerunner 965 (499€) → Garmin Fenix 8 (800€+)
```

**Argumento de upsell en cada escalón:**
- Band → Watch: "Del fitness tracker al smartwatch con GPS"
- Watch FE → Watch 7: "+ECG, pantalla sapphire, +2 años de soporte"
- Forerunner 265 → 965: "El 965 para ultramaratón y expediciones. El 265 para todo lo demás."

### Auriculares
```
JBL básico (50€) → Sony WF-1000XM5 (180€) → Sony WH-1000XM5 (280€) → Jabra Evolve2 (350€)
```

**Argumento de upsell:**
- TWS básico → XM5 TWS: "El ANC real que cambia cómo escuchas el mundo"
- Over-ear genérico → Sony XM5: "La referencia absoluta en cancelación de ruido"

---

## KPIs DEL MOTOR DE INGRESOS

Ver `docs/REVENUE_KPIS.md` para panel completo.

**Métricas críticas a revisar semanalmente:**
- Tasa de conversión (visitas → pedidos)
- AOV (ticket medio)
- Tasa de abandono de carrito
- Tasa de abandono de checkout
- Productos más vendidos vs más vistos (gap = oportunidad)

---

*Creado: Julio 2026 | ZoneTechOnline Revenue Initiative*
