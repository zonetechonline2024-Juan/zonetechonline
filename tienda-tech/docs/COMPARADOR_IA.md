# COMPARADOR_IA.md — ZoneTechOnline
> Arquitectura del Comparador de Productos con IA | Versión 1.0 · Julio 2026

---

## Qué es el Comparador IA

El Comparador IA es una funcionalidad que permite al usuario seleccionar 2–3 productos del catálogo y obtener un análisis comparativo generado por IA, adaptado a un perfil de usuario específico (deportista, home office, regalo, etc.).

**Diferencia con el asistente IA:** El asistente responde preguntas en lenguaje natural. El comparador actúa sobre productos específicos ya seleccionados y produce un análisis estructurado.

---

## Flujo de usuario

```
1. Usuario navega catálogo o busca productos
2. Activa modo comparador (botón "Comparar" en tarjeta de producto)
3. Selecciona 2–3 productos (máximo 3 por limitación de contexto/UI)
4. Opcional: indica su perfil (uso principal, presupuesto, prioridad)
5. IA analiza y genera comparativa estructurada
6. Usuario ve tabla + análisis + recomendación final
7. Puede añadir al carrito desde la comparativa
```

---

## Arquitectura técnica

### Frontend

**Componente: `js/comparator.js`** (nuevo)
- Estado: lista de productos seleccionados (máx 3), `selectedForComparison: []`
- Botón "Comparar" en tarjeta de producto: toggle `product.id` en/fuera de la lista
- Barra flotante de comparación: aparece cuando hay ≥ 2 seleccionados
- Panel de comparación: modal o página dedicada con resultado

**Datos necesarios por producto para la comparativa:**
- `id`, `name`, `brand`, `price`, `category`
- `specs`: objeto con specs relevantes (depende de categoría)
- `inStock`: boolean
- `rating`: numérico (si disponible)

**Enriquecimiento de specs en `data/ai-catalog.json`:**
El catálogo compacto actual tiene `id|nombre|categoría|precio`. Para el comparador necesita specs extendidas. Opciones:
1. Añadir campo `specs` al catálogo existente (recomendado para catálogo < 300 productos)
2. Cargar specs bajo demanda desde endpoint `/api/product-specs/:id`

### Backend

**Endpoint: `api/comparador.js`** (nuevo serverless function)

```javascript
// POST /api/comparador
// Body: { products: [{ id, name, brand, price, specs }], userProfile: string }
// Response: { comparison: string }
```

Límite de funciones Vercel Hobby: 12 actuales + 1 nueva = 13 → **supera el límite**.
**Solución:** Fusionar `api/comparador.js` con `api/ai-assistant.js` bajo una acción discriminada por `action: 'compare' | 'chat'`, o eliminar una función de bajo uso.

**Candidatas a eliminar si se satura el límite:**
- `api/admin-products.js` (solo panel admin)
- `api/admin-customers.js` (solo panel admin)

**System prompt del comparador:**
```
Eres el comparador de productos de ZoneTechOnline. 
Recibirás 2-3 productos con sus especificaciones y el perfil del usuario.
Tu análisis debe:
1. Tabla de specs clave (3-5 filas, las más relevantes para ese perfil)
2. Para quién es mejor cada producto (1 frase por producto)
3. Recomendación final con justificación (no más de 3 frases)

Sé honesto: si un producto tiene un precio injustificado, dilo.
Si para ese perfil la diferencia de precio no se justifica, dilo.
Responde en español. Máximo 300 palabras.
```

### Datos de specs por categoría

Para que el comparador funcione bien, necesita specs comparables. Propuesta de estructura:

**Smartwatches:**
```json
{
  "gps": "Multibanda / Estándar / No",
  "battery_days": 14,
  "water_resistance": "10 ATM",
  "hr_sensor": true,
  "ecg": false,
  "nfc": true
}
```

**Auriculares:**
```json
{
  "anc": true,
  "battery_hours": 30,
  "charging_case_hours": 6,
  "multipoint": true,
  "ip_rating": "IPX4",
  "bluetooth": "5.3"
}
```

**Altavoces:**
```json
{
  "ip_rating": "IP67",
  "battery_hours": 24,
  "watts": 30,
  "stereo_link": true
}
```

---

## Diseño de UI/UX

### Tarjeta de producto (modificación)
Añadir a la tarjeta existente:
```html
<button class="compare-toggle" data-id="{{id}}">
  + Comparar
</button>
```
Estado seleccionado: botón cambia a "✓ Añadido · Quitar"
Máximo 3 seleccionados: al intentar añadir el 4º, mensaje: "Máximo 3 productos a la vez"

### Barra flotante de comparación
Aparece fija en la parte inferior cuando hay ≥ 2 productos seleccionados:
```
[Producto 1] [Producto 2] [Producto 3]  [Comparar con IA →]  [Limpiar]
```

### Panel de comparación
Modal o página `/comparador`:
1. Tabla horizontal con specs (filas = specs, columnas = productos)
2. Bloque de análisis IA (texto generado)
3. Botones "Añadir al carrito" bajo cada producto
4. Opción de indicar perfil: dropdown "¿Para qué uso?" → runner / home office / regalo / casual / trabajo

---

## Fases de implementación

### Fase 1 — MVP (estimado: 1-2 sesiones)
- Botón "Comparar" en tarjeta de producto (frontend solo)
- Barra flotante de selección
- Panel con tabla de specs básica (sin IA)
- Datos de specs para las 5 categorías principales

### Fase 2 — IA integration (requiere ANTHROPIC_API_KEY activa)
- Endpoint `api/comparador.js` (o acción en `ai-assistant.js`)
- Análisis generado por Claude Haiku para coste bajo
- Campo "perfil de usuario" opcional

### Fase 3 — Refinamiento
- Cache de comparativas frecuentes (mismos 2 productos = mismo resultado)
- Share URL: `/comparador?p=id1,id2,id3`
- Schema markup para páginas de comparativa (SEO)

---

## Prerequisitos antes de implementar

- [ ] `ANTHROPIC_API_KEY` activa en Vercel (actualmente 503)
- [ ] Specs de producto en `data/ai-catalog.json` o endpoint separado
- [ ] Liberar un slot de función Vercel Hobby (o fusionar con ai-assistant)
- [ ] Decisión: página propia `/comparador.html` o modal flotante

---

## Coste estimado por comparación

Con Claude Haiku 4.5:
- Input: ~800 tokens (specs de 3 productos + perfil + system prompt)
- Output: ~300 tokens
- Coste aprox: ~$0.0003 por comparativa (< $0.001)
- Con 1.000 comparativas/mes: < $0.30/mes

---

*Diseñado durante la Transformación de Marca ZoneTechOnline · Julio 2026*
