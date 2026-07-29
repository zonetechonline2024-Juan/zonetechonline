# CRO_REPORT.md — ZoneTechOnline
> Auditoría completa de conversión y customer journey | Versión 1.0 · Julio 2026

---

## RESUMEN EJECUTIVO

**Estado actual:** Tienda operativa con Stripe LIVE, 212 productos, infraestructura sólida. La marca está construida. El problema es la conversión: la tienda muestra productos pero no los vende activamente.

**Problema central:** No existen páginas de producto individuales. Cada producto es un modal quickview de 4 elementos (imagen + descripción + specs + botón). Es imposible convertir a alguien que va a gastar 400–800€ con eso.

**Estimación de impacto si se implementa todo:** Incremento potencial de conversión del 40–120% (benchmark eCommerce tech España: 1.8–2.5%. Objetivo alcanzable: 3–4%).

---

## FASE A — AUDITORÍA DEL CUSTOMER JOURNEY

### 1. INICIO (Homepage)

| Elemento | Estado | Problema | Impacto |
|---|---|---|---|
| Hero slider | ✅ Activo | Ninguno crítico | — |
| Banda de identidad | ✅ Publicada | — | — |
| Features strip | ✅ 5 elementos | — | — |
| Sección "¿Por qué ZoneTechOnline?" | ✅ 6 bloques | — | — |
| Testimonios | ⚠️ 3 hardcoded | Sin reviews reales, sin contador | Alto |
| Badges en productos | 🔴 TODOS "OFERTA" | Si todo es oferta, nada lo es | Alto |
| Productos destacados | ⚠️ Grid genérico | Sin jerarquía ni criterio visible | Medio |
| Newsletter | ✅ Activa | — | — |
| Asistente IA | 🔴 503 | Sin ANTHROPIC_API_KEY | Alto |
| CTR a producto | ⚠️ → QuickView modal | Sin URL propia, sin SEO | Crítico |

**Fricción detectada #1:** El usuario que entra desde Google a la homepage NO puede llegar directamente a un producto específico desde fuera. No hay URLs de producto indexables. Todo el tráfico cae al homepage y desde ahí tiene que navegar.

**Fricción detectada #2:** Todos los productos tienen badge "OFERTA". Esto destruye el principio de escasez selectiva (Cialdini). No significa nada si es universal.

---

### 2. CATEGORÍA (Catálogo)

| Elemento | Estado | Problema | Impacto |
|---|---|---|---|
| Filtros por categoría | ✅ Activos | — | — |
| Filtros por marca | ✅ Activos | — | — |
| Filtro por precio | ✅ Activo | Sin slider visual de rango | Medio |
| Buscador | ✅ Con scoring | — | — |
| "Ayúdame a elegir" | ❌ No existe | Usuarios indecisos se van | Alto |
| Ordenación | ⚠️ Básica | Sin "Más vendidos", "Precio asc/desc", "Mejor valorados" | Medio |
| Productos destacados | ❌ No existe | Ningún producto tiene prioridad visual | Medio |
| Contenido SEO | ❌ No existe | Páginas de categoría sin texto | Alto (SEO) |
| Comparador | ✅ Implementado | — | — |

**Fricción detectada #3:** Sin ordenación por "más vendidos" o "mejor valorados", el usuario ve 212 productos sin jerarquía. Parálisis de decisión.

**Fricción detectada #4:** No existe ningún mecanismo de "ayúdame a elegir" para indecisos. Un usuario que no sabe si quiere un Garmin o un Samsung se va.

---

### 3. PRODUCTO (QuickView Modal — CRÍTICO)

Este es el problema más grave de la tienda. Un modal de popup no puede vender un producto de 400–800€.

| Elemento | En QuickView | Debe haber | Impacto |
|---|---|---|---|
| Imágenes | ✅ Galería | — | — |
| Nombre y marca | ✅ | — | — |
| Descripción corta | ✅ | Descripción larga + beneficios | Alto |
| Especificaciones | ✅ Tabla básica | — | — |
| "Para quién es esto" | ❌ | Perfil de usuario objetivo | Crítico |
| Problemas que resuelve | ❌ | Copy orientado a beneficios | Crítico |
| Casos de uso | ❌ | Escenarios concretos | Alto |
| Productos relacionados / upsell | ❌ | "También puede interesarte" | Alto |
| FAQs | ❌ | 3–5 preguntas frecuentes | Alto |
| Reviews de clientes | ❌ | 0 reviews reales actualmente | Alto |
| Video del producto | ❌ | Si disponible en YouTube | Medio |
| Compatibilidades | ❌ | "Compatible con iOS y Android" | Medio |
| URL propia (shareable) | ❌ | `/producto/garmin-forerunner-265` | Crítico (SEO) |
| Meta description | ❌ | — | Crítico (SEO) |
| Schema.org Product | ❌ | — | Alto (SEO) |
| Botón sticky en mobile | ❌ | CTA siempre visible | Alto |
| Trust signals | ⚠️ 3 líneas pequeñas | Más prominencia, más detalles | Medio |
| Método de pago visible | ❌ | "Paga con Bizum, PayPal o tarjeta" | Medio |
| Estimación de entrega | ❌ | "Recíbelo entre el lunes 4 y miércoles 6" | Medio |

**Fricción detectada #5:** Sin URL de producto, es imposible:
- Compartir un producto por WhatsApp o email
- Que Google indexe y posicione productos individuales
- Que el usuario vuelva a la misma página de producto directamente
- Hacer campañas de pago a una landing page de producto específico

---

### 4. CARRITO (Side Drawer)

| Elemento | Estado | Problema | Impacto |
|---|---|---|---|
| Lista de productos | ✅ | — | — |
| Subtotal y total | ✅ | — | — |
| Envío gratis | ✅ Mostrado | — | — |
| Eliminar producto | ✅ | — | — |
| Cambiar cantidad | ❌ | No se puede modificar cantidad | Medio |
| Cross-sell / accesorios | ❌ | Ninguna recomendación | Alto |
| Upsell | ❌ | "¿Sabías que el modelo Pro tiene...?" | Medio |
| Trust signals | ❌ | Sin recordatorio de garantía/devolución | Medio |
| Tiempo de entrega | ❌ | No aparece en el carrito | Medio |
| "Clientes que compraron esto también" | ❌ | — | Alto |

**Fricción detectada #6:** El carrito es una lista pasiva. No hace nada para aumentar el ticket medio ni para resolver objeciones antes del pago.

---

### 5. CHECKOUT

| Elemento | Estado | Problema | Impacto |
|---|---|---|---|
| Número de campos | 7 campos obligatorios | Razonable | — |
| Campo código descuento | ⚠️ Visible siempre | El usuario que ve el campo y no tiene código sale a buscarlo | Alto |
| Express checkout (Apple Pay, Google Pay) | ❌ | En mobile es el método preferido | Alto |
| Indicador de progreso | ❌ | El usuario no sabe en qué paso está | Medio |
| Trust signals en checkout | ⚠️ Mínimos | SSL badge, pero nada más | Medio |
| Resumen del pedido | ✅ Visible (sticky) | — | — |
| Métodos de pago | ✅ Tarjeta + Bizum + PayPal | — | — |
| Autofill compatible | ✅ Atributos autocomplete | — | — |
| Mobile UX | ⚠️ Funcional | Botones pequeños, muchos campos | Medio |
| Redirect a Stripe | ⚠️ Cambia dominio | Genera duda en el momento crítico | Medio |

**Fricción detectada #7:** El campo de código de descuento visible provoca que un 15–30% de los usuarios que llegan al checkout lo abandonen para buscar un cupón en Google. Sin código, no vuelven.

---

### 6. POSTVENTA

| Elemento | Estado | Problema |
|---|---|---|
| Email confirmación de pedido | ✅ Activo | — |
| Email de envío con tracking | ✅ Activo | — |
| Email post-entrega (reseña) | ❌ | Perdemos reviews reales |
| Email recompra (30/60/90 días) | ❌ | Sin secuencia de reactivación |
| Solicitud de review | ❌ Formulario en web | Nadie vuelve a la web a dejarlo |
| Soporte post-compra | ✅ Email + WhatsApp | — |

---

### RESUMEN DE FRICCIONES POR PRIORIDAD

| # | Fricción | Impacto Conversión | Impacto AOV | Complejidad | Prioridad |
|---|---|---|---|---|---|
| 1 | Sin páginas de producto individuales | Crítico (+40% estimado) | Medio | Alta | 🔴 P0 |
| 2 | Todos los badges dicen "OFERTA" | Alto | Bajo | Baja | 🔴 P0 |
| 3 | Sin cross-sell en carrito | Medio | Alto (+15–25% AOV) | Media | 🔴 P0 |
| 4 | Sin upsell en quickview/producto | Medio | Alto | Media | 🔴 P0 |
| 5 | Campo descuento visible en checkout | Alto (-15-30% conversión) | Neutro | Baja | 🔴 P0 |
| 6 | Sin Express Checkout (Apple/Google Pay) | Alto (mobile) | Neutro | Media | 🟠 P1 |
| 7 | Sin reviews reales | Alto (confianza) | Bajo | Alta | 🟠 P1 |
| 8 | Sin "Para quién es esto" en producto | Alto | Medio | Media | 🟠 P1 |
| 9 | Sin FAQs en producto | Medio | Bajo | Media | 🟠 P1 |
| 10 | Sin recuperación de carrito por email | Alto | Neutro | Alta | 🟠 P1 |
| 11 | Sin filtros avanzados (precio slider, specs) | Medio | Bajo | Media | 🟡 P2 |
| 12 | Sin programa de fidelización | Bajo (inmediato) | Alto (LTV) | Alta | 🟡 P2 |
| 13 | Sin A/B testing | — | — | Media | 🟡 P2 |
| 14 | Sin personalización | Medio | Medio | Alta | 🟡 P2 |

---

## FASE B — PSICOLOGÍA DEL CONSUMIDOR

### Principios de Cialdini — Estado actual

| Principio | Estado | Oportunidad |
|---|---|---|
| **Autoridad** | ✅ Medio-alto | Blog técnico, nuestra-historia, nuestra-filosofia. Expandir con "El equipo recomienda" |
| **Prueba Social** | 🔴 Débil | 3 testimonios hardcoded, 0 reviews reales. El elemento más crítico a construir |
| **Escasez** | 🔴 Mal usado | "OFERTA" en todo ≠ escasez. Usar badges diferenciados y reales |
| **Urgencia** | ❌ No existe | Puede usarse éticamente: "X personas miran esto ahora" (con datos reales) |
| **Reciprocidad** | ⚠️ Parcial | Blog gratuito existe. Añadir guías de compra descargables o asistente IA |
| **Compromiso** | ❌ No existe | Lista de deseos sí existe (lista-deseos.html) pero no se comunica bien |
| **Simpatía** | ✅ Alto | Fundador visible, historia personal, tono cercano |

### Principios de Kahneman — Sistema 1 vs Sistema 2

**Sistema 1 (rápido, emocional):**
- El hero está bien: imagen impactante, mensaje claro
- Los badges "OFERTA" activan el Sistema 1 pero de forma genérica → necesitan diferenciación
- Los precios deben mostrarse con el ahorro en euros, no solo el porcentaje: "Ahorras 50€" > "-25%"

**Sistema 2 (lento, racional):**
- La tabla de specs satisface al pensamiento lógico
- Falta: comparativa directa entre modelos de la misma gama
- Falta: "Por qué este modelo en vez del otro"

**Anclaje:**
- El `oldPrice` existe en la mayoría de productos → bien
- Oportunidad: mostrar el modelo premium PRIMERO en cada categoría (price anchoring) y luego el estándar parece más asequible

**Carga cognitiva:**
- 212 productos sin jerarquía = parálisis de decisión
- Solución: "Nuestra selección de esta semana" (5–6 productos), "El más vendido en [categoría]", "La elección del fundador"

### Principios de BJ Fogg (Motivation + Ability + Trigger)

| Factor | Estado | Mejora |
|---|---|---|
| **Motivación** | Media-alta | Añadir: "Para ti si corres más de 3 veces por semana" — motivación específica |
| **Capacidad** | Media | En mobile: botones pequeños, mucho scroll → CTA sticky, simplificar |
| **Trigger** | Débil | Email de carrito abandonado, recordatorio wishlist |

### Principios de Nir Eyal (Hook Model)

El ciclo Trigger → Acción → Recompensa Variable → Inversión no está implementado:
- **Trigger externo falta:** push email de carrito abandonado, newsletter con nuevo artículo
- **Acción compleja:** la compra requiere demasiados pasos para mobile
- **Recompensa variable falta:** "Descubre nuestra selección de esta semana" (curada, rotativa)
- **Inversión falta:** wishlist no comunica su valor como inversión personal

### Principios de Donald Norman (UX Design)

**Affordances (señales de acción):**
- El botón "Añadir al carrito" es claro → bien
- El botón "⊙" de quickview es confuso (un símbolo extraño sin label en mobile) → mejorar

**Feedback:**
- Al añadir al carrito aparece un toast → bien
- Al completar el pedido el usuario sabe qué pasó → bien
- Durante la carga del checkout no hay indicador claro → mejorar

**Mapping:**
- El breadcrumb en checkout es correcto
- La navegación por categorías es clara

### Principios de Richard Thaler (Behavioral Economics)

**Nudge (empujón):**
- Oportunidad: "El 78% de clientes que compraron [este reloj] también llevaron [estos auriculares]"
- Oportunidad: "Este producto se agota habitualmente en 2–3 semanas tras llegar" (si es real)

**Default effect:**
- El país por defecto en checkout es España → bien
- El método de pago por defecto debería ser el más usado → tarjeta (o detectar móvil → Bizum)

**Mental accounting:**
- Mostrar "Envío gratuito · Ahorras ~4,99€" en el carrito → el usuario percibe un ahorro aunque no lo sea

---

*Auditoría completada: Julio 2026 — ZoneTechOnline CRO Initiative*
