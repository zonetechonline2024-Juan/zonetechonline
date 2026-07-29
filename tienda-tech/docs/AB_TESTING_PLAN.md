# AB_TESTING_PLAN.md — ZoneTechOnline
> Plan de experimentación para optimización de conversión | Versión 1.0 · Julio 2026

---

## PRINCIPIOS DE A/B TESTING EN ZONETECHONLINE

**Antes de lanzar un test:**
1. Hipótesis clara: "Creemos que [cambio] aumentará [métrica] porque [razón]"
2. Tamaño de muestra mínimo calculado (ver abajo)
3. Solo un cambio por test
4. Duración mínima: 2 semanas (para capturar variación día/semana)
5. Nivel de confianza objetivo: 95%

**Calculadora de muestra mínima:**
Con ~200 visitas/día y conversión base del 2%, necesitas ~3.500 visitas por variante para detectar un incremento del +25% con 95% de confianza. A 200 visitas/día: ~35 días mínimo por test. Ejecutar máximo 1–2 tests simultáneos que no se solapuen en la misma página.

---

## ARQUITECTURA DE IMPLEMENTACIÓN

Dado que la tienda es HTML/JS estático sin framework, la implementación de A/B testing más simple es:

### Opción A: JavaScript Client-Side (MVP, sin coste)
```javascript
// En app.js o un script separado
function getVariant(testId) {
  var key = 'ab_' + testId;
  var stored = localStorage.getItem(key);
  if (stored) return stored;
  var variant = Math.random() < 0.5 ? 'A' : 'B';
  localStorage.setItem(key, variant);
  // Enviar a GA4
  if (typeof gtag !== 'undefined') {
    gtag('event', 'ab_assign', { test_id: testId, variant: variant });
  }
  return variant;
}

// Uso
var heroVariant = getVariant('hero_headline_v1');
if (heroVariant === 'B') {
  document.getElementById('hero-headline').textContent = 'Wearables premium con garantía oficial · Envío gratis';
}
```

**Ventaja:** Sin coste, sin dependencias externas.
**Limitación:** No hay dashboard visual. Los resultados se analizan en GA4.

### Opción B: Google Optimize (deprecado) → Alternativa: VWO o AB Tasty
Si el volumen de tráfico justifica la inversión (~50€/mes), usar una plataforma dedicada con editor visual.

### Recomendación actual: Opción A (JavaScript client-side)
Con el volumen actual de tráfico, Opción A es suficiente y sin coste.

---

## TESTS PRIORIZADOS

### TEST 1 — Hero headline (Impacto: Alto · Dificultad: Baja)
**Hipótesis:** Un headline orientado a beneficio concreto convertirá más que el headline de marca genérico.

| | Variante A (Control) | Variante B |
|---|---|---|
| Headline | "Tecnología Premium Selecta" | "Garantía oficial 2 años · Envío gratis · Devolución 30 días" |
| Subheadline | [actual] | "Cada producto elegido con criterio. Sin catálogo de relleno." |

**Métrica primaria:** CTR al catálogo / add_to_cart rate desde homepage
**Duración estimada:** 4–6 semanas
**Implementación:** `index.html` + GA4 event `ab_assign{test:'hero_v1'}`

---

### TEST 2 — Botón CTA en QuickView (Impacto: Alto · Dificultad: Baja)
**Hipótesis:** Un botón con precio explícito convierte más que uno genérico.

| | Variante A (Control) | Variante B |
|---|---|---|
| CTA | "Añadir al carrito" | "Añadir al carrito — €[precio]" |

**Métrica primaria:** `add_to_cart` rate desde quickview
**Duración estimada:** 3–5 semanas

*Nota: Ya implementado "Añadir al carrito — €X". Este test verificaría si el precio explícito ayuda o genera fricción.*

---

### TEST 3 — Badge strategy (Impacto: Medio-Alto · Dificultad: Baja)
**Hipótesis:** Badges diferenciados ("Más vendido", "Nuevo", "Premium Pick") generan más CTR que "OFERTA" en todos los productos.

| | Variante A (Control) | Variante B |
|---|---|---|
| Badges | OFERTA (universal) | Diferenciados por tipo (Más vendido / Nuevo / OFERTA solo si hay descuento real) |

**Métrica primaria:** Tasa quickview → add_to_cart
**Duración estimada:** 4–6 semanas

---

### TEST 4 — Precio mostrado en la tarjeta (Impacto: Medio · Dificultad: Baja)
**Hipótesis:** Mostrar el ahorro en euros ("Ahorras 50€") convierte más que el porcentaje ("-25%").

| | Variante A (Control) | Variante B |
|---|---|---|
| Descuento | "-25%" | "Ahorras 50€" |

**Métrica primaria:** Add_to_cart rate en productos con descuento
**Duración estimada:** 3–4 semanas

---

### TEST 5 — Orden de elementos en página de producto (Impacto: Medio · Dificultad: Media)
**Hipótesis:** Colocar "Para quién es esto" antes de las especificaciones aumenta la tasa de add_to_cart.

| | Variante A (Control) | Variante B |
|---|---|---|
| Orden | Descripción → Specs → Para quién | Descripción → Para quién → Specs |

**Métrica primaria:** Add_to_cart rate desde página de producto `/producto/:id`
**Duración estimada:** 4–6 semanas

---

### TEST 6 — Checkout: precio en botón de pago (Impacto: Alto · Dificultad: Baja)
**Hipótesis:** "Pagar ahora · 189€" convierte más que "Pagar ahora".

| | Variante A (Control) | Variante B |
|---|---|---|
| CTA checkout | "Pagar ahora" | "Pagar ahora · €[total]" |

**Métrica primaria:** Tasa checkout completion
**Duración estimada:** 3–5 semanas

---

## CALENDARIO DE TESTS (PROPUESTO)

| Semana | Test activo | Decisión esperada |
|---|---|---|
| 1–6 (ago–sep) | TEST 1: Hero headline | Semana 7 |
| 2–7 (ago–sep) | TEST 3: Badge strategy | Semana 8 |
| 8–13 (oct–nov) | TEST 2: CTA quickview | Semana 14 |
| 8–13 (oct–nov) | TEST 4: Precio en tarjeta | Semana 14 |
| 14–19 (nov–dic) | TEST 5: Orden página producto | Semana 20 |
| 14–19 (nov–dic) | TEST 6: CTA checkout | Semana 20 |

*Los tests 1+3 y 2+4 pueden correr en paralelo si están en páginas distintas.*

---

## CÓMO LEER LOS RESULTADOS EN GA4

1. Ir a GA4 → Explorar → Análisis en embudo o Tabla libre
2. Filtrar por evento `ab_assign` con parámetro `variant = A` o `variant = B`
3. Comparar la tasa de `purchase` / `add_to_cart` entre variantes
4. Usar calculadora de significancia estadística (e.g., abtestguide.com)
5. No declarar ganador si p-value > 0.05

---

*Creado: Julio 2026 | ZoneTechOnline CRO Initiative*
