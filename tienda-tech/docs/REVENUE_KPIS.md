# REVENUE_KPIS.md — ZoneTechOnline
> Panel de KPIs del motor de ingresos | Versión 1.0 · Julio 2026

---

## MÉTRICAS CRÍTICAS (revisar semanalmente)

| KPI | Fórmula | Valor actual (est.) | Objetivo 3M | Objetivo 6M | Objetivo 12M |
|---|---|---|---|---|---|
| **Tasa de conversión** | pedidos / visitas únicas | ~1.8% | 2.5% | 3.5% | 5% |
| **AOV** | ingresos totales / pedidos | ~180€ | 200€ | 230€ | 260€ |
| **Abandono de carrito** | 1 - (checkouts / add_to_carts) | ~72% | 65% | 58% | 50% |
| **Abandono de checkout** | 1 - (pedidos / begin_checkouts) | ~38% | 30% | 25% | 20% |
| **Ingresos por visita** | ingresos / visitas totales | ~3.2€ | 5€ | 8€ | 13€ |

---

## MÉTRICAS DE ADQUISICIÓN

| KPI | Fórmula | Frecuencia |
|---|---|---|
| Visitas totales | GA4 → Usuarios activos | Semanal |
| Nuevos vs recurrentes | GA4 → Nuevo vs recurrente | Mensual |
| Fuente de tráfico | GA4 → Fuentes/medios | Mensual |
| CPV (coste por visita) | gasto publicidad / visitas pagadas | Si hay ads activos |
| CAC (coste por adquisición) | gasto total / pedidos nuevos | Si hay ads activos |

---

## MÉTRICAS DE PRODUCTO

| KPI | Dónde medirlo | Frecuencia |
|---|---|---|
| Productos más vistos | GA4 → view_item por product_id | Semanal |
| Productos más añadidos al carrito | GA4 → add_to_cart por product_id | Semanal |
| **Gap visto vs comprado** | (% añadidos al carrito) / (% vistos) | Mensual → acción |
| Tasa de click a página producto | GA4 → click_product_page | Semanal |
| Tasa de upsell aceptado | click en bloque upsell / vistas quickview | Mensual |
| Tasa de cross-sell aceptado | add_to_cart desde cross-sell del carrito | Mensual |

**El gap "visto vs comprado"** es la métrica más valiosa del catálogo: si un producto tiene muchas vistas pero pocas compras, el problema está en el precio, las imágenes o la descripción — no en la demanda.

---

## MÉTRICAS DE EMAIL

| KPI | Fórmula | Objetivo |
|---|---|---|
| Open rate (transaccional) | emails abiertos / enviados | >50% |
| Open rate (marketing) | emails abiertos / enviados | >28% |
| Click rate | clicks / emails abiertos | >10% |
| Tasa de recuperación carrito | pedidos email / carritos abandonados | >8% |
| Tasa de review post-compra | reviews enviados / pedidos entregados | >15% |
| Tasa de baja (unsubscribe) | bajas / enviados | <0.3% |

---

## MÉTRICAS DE LTV (revisión mensual)

| KPI | Fórmula | Objetivo 12M |
|---|---|---|
| % clientes con 2+ pedidos | pedidos_recurrentes / clientes_total | >20% |
| LTV medio 6M | suma pedidos cliente / clientes activos 6M | >260€ |
| LTV medio 12M | suma pedidos cliente / clientes activos 12M | >350€ |
| Días hasta segunda compra | promedio días entre pedido 1 y 2 | <90 días |
| NPS implícito | reviews positivos / reviews totales | >80% |

---

## PANEL SEMANAL (lo que revisar cada lunes, 10 minutos)

```
1. ¿Cuántos pedidos la semana pasada vs semana anterior?
2. ¿Cuál fue el AOV? ¿Subió o bajó?
3. ¿Qué producto fue el más vendido?
4. ¿Hay algún producto muy visto pero con pocas compras? (gap)
5. ¿Cuántos carritos abandonados? ¿Cuántos recuperados?
6. ¿Algún error en Supabase/Stripe que haya bloqueado pedidos?
```

---

## PANEL MENSUAL (revisión de 30 minutos)

```
1. Tendencia de conversión general (subiendo/bajando/plana)
2. Top 5 y bottom 5 productos por tasa de conversión
3. Funnel completo: visita → producto → carrito → checkout → pago
4. Revisión de emails: open rate, click rate, tasa de recuperación
5. Revisión de reviews recibidos
6. Estado de A/B tests activos: ¿hay ganador?
7. Ajustar badges basado en datos reales de ventas
```

---

## SEÑALES DE ALERTA (actuar inmediatamente)

| Señal | Umbral de alerta | Acción |
|---|---|---|
| Tasa de conversión cae >20% vs semana anterior | <1.4% | Revisar errores en checkout, Stripe, Supabase |
| Tasa de abandono de checkout sube a >60% | | Verificar que el flujo de pago funciona correctamente |
| Ningún pedido en 48h en días laborables | | Comprobar Stripe webhook, endpoint checkout |
| Open rate de emails cae a <15% | | Revisar lista de suscriptores, posible spam folder |
| Error 5xx en API endpoints | | Revisar logs de Vercel |

---

## CÓMO ACCEDER A LOS DATOS

| Fuente | URL / Dónde | Qué contiene |
|---|---|---|
| Google Analytics 4 | analytics.google.com | Tráfico, conversión, embudo, comportamiento |
| Supabase Dashboard | supabase.com → proyecto | Pedidos, clientes, sesiones de carrito |
| Stripe Dashboard | dashboard.stripe.com | Pagos, disputas, reembolsos, ARR |
| Resend Dashboard | resend.com/emails | Emails enviados, opens, clicks, bounces |
| Vercel Dashboard | vercel.com | Uptime, errores de función, logs |

---

## GOAL DE 12 MESES

Si se implementan todas las fases del Revenue Engine:

| Métrica | Inicio (jul 2026) | Meta dic 2026 | Meta jul 2027 |
|---|---|---|---|
| Pedidos/mes | ~20 estimado | 60 | 150 |
| Ingresos/mes | ~3.600€ estimado | 12.000€ | 35.000€ |
| AOV | ~180€ | 230€ | 260€ |
| Tasa conversión | ~1.8% | 3.2% | 5% |
| LTV medio | ~180€ | ~250€ | ~380€ |

*Estas proyecciones asumen tráfico orgánico creciente y 0 inversión en publicidad de pago. Con campañas de pago activas en meta/google, multiplicar por 3–5x.*

---

*Creado: Julio 2026 | ZoneTechOnline CRO Initiative*
