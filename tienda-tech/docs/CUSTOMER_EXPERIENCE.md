# CUSTOMER_EXPERIENCE.md — ZoneTechOnline
> Mapa de experiencia del cliente | Versión 1.0 · Julio 2026

---

## Principio rector

Cada punto de contacto con el cliente debe responder positivamente a esta pregunta:  
**"¿Esto genera más confianza o menos?"**

Si la respuesta es "menos" o "neutro", hay que mejorarlo.

---

## Mapa del viaje del cliente (Customer Journey)

### FASE 1 — Descubrimiento
*El usuario no conoce ZoneTechOnline. Llega desde Google, redes sociales o recomendación.*

| Punto de contacto | Estado actual | Objetivo |
|---|---|---|
| Resultado en Google | Título + meta description | Que el snippet comunique especialización y confianza |
| Homepage · primeros 3 segundos | Slider de producto + banda de identidad | El usuario entiende qué vendemos y quién somos |
| Blog SEO | 10 artículos publicados | Posicionamiento por búsquedas de intención de compra |
| Google Business Profile | Pendiente | Aparecer en maps y búsquedas locales |

**Pregunta que debe poder responder en 10 segundos:**  
*"¿Qué vende ZoneTechOnline y por qué debería quedarme?"*

---

### FASE 2 — Exploración
*El usuario navega el catálogo, compara productos, usa el buscador.*

| Punto de contacto | Estado actual | Prioridad mejora |
|---|---|---|
| Catálogo · filtros | Filtros por categoría/marca/precio | Media |
| Quickview / producto | Imagen + especificaciones + badges | Alta |
| Asistente IA | Desplegado, pendiente API key | Crítica (activar ANTHROPIC_API_KEY) |
| Buscador | Buscador con scoring de relevancia | Bueno |
| Páginas de marca (/garmin, /sony...) | Página de catálogo filtrada + FAQ Schema | Bueno |
| Páginas de caso (/smartwatch-running...) | Catálogo filtrado + contenido guía | Bueno |

**Fricción detectada:**  
- No hay páginas de producto individuales con URL propia → limita el SEO de producto
- Comparador de productos aún no existe

---

### FASE 3 — Consideración
*El usuario está interesado en un producto específico. Valora si confiar en esta tienda.*

| Punto de contacto | Estado actual | Objetivo |
|---|---|---|
| Página "Nuestra Historia" | Publicada ✅ | Resolver "¿quién está detrás?" |
| Sección "¿Por qué ZoneTechOnline?" | En homepage ✅ | Argumentar vs Amazon y grandes superficies |
| Trust badges | Corregidos ✅ (sin Trustpilot falso) | Señales de seguridad verificables |
| Reseñas | Sistema activo + 3 testimonios seed | Crecer hacia reseñas reales de clientes |
| Garantía y devolución | 30 días · políticas publicadas | Reducir fricción de decisión |

**Pregunta que debe poder responder:**  
*"¿Me fío para gastar 400–800€ aquí?"*

---

### FASE 4 — Compra
*El usuario añade al carrito y pasa por checkout.*

| Punto de contacto | Estado actual | Objetivo |
|---|---|---|
| Carrito lateral | Microcopy actualizado ✅ | Confirmar seguridad en el momento clave |
| Checkout · Stripe | Pago seguro, 3D Secure | Reducir abandono en pago |
| Métodos de pago | Tarjeta, Bizum, PayPal | Cubrir preferencias españolas |
| Email de confirmación | Enviado por Resend con detalles del pedido | Confirmar que la compra fue real |

**Fricción detectada:**  
- El checkout redirige a Stripe → cambio de dominio puede generar duda → mitigar con microcopy antes del botón

---

### FASE 5 — Post-compra
*El pedido está en camino. El cliente espera.*

| Punto de contacto | Estado actual | Objetivo |
|---|---|---|
| Email confirmación | Enviado con productos y datos ✅ | Tranquilizar inmediatamente |
| Email de envío | Disponible (admin activa) | Proporcionar tracking real |
| Soporte durante espera | Email + WhatsApp + teléfono | Respuesta en 24–48h |
| Seguimiento del pedido | Link de tracking en email de envío | Autonomía del cliente |

---

### FASE 6 — Recepción y evaluación
*El cliente recibe el producto y evalúa la experiencia.*

| Punto de contacto | Estado actual | Objetivo |
|---|---|---|
| Embalaje | Depende del distribuidor (dropshipping) | Garantizar que el packaging sea digno |
| Garantía de producto | Factura incluida, garantía oficial | No hay que hacer nada extra |
| Solicitud de reseña | Formulario en homepage | Invite por email después de la entrega |
| Devolución si procede | 30 días, gestión por email | Proceso sin fricción, sin penalización |

**Oportunidad:**  
Enviar email de seguimiento 7 días después de la entrega estimada solicitando reseña. Aún no implementado.

---

### FASE 7 — Fidelización
*El cliente repite. O recomienda.*

| Punto de contacto | Estado actual | Objetivo |
|---|---|---|
| Newsletter | Suscripción activa en homepage | Contenido útil, no solo ofertas |
| Blog | 10 artículos publicados | Generar visitas recurrentes |
| Lista de deseos | Página lista-deseos.html | Guardar para próxima compra |
| Historial de pedidos | mis-pedidos.html | Referencia para recompra |

---

## Fricciones prioritarias a resolver

| Prioridad | Fricción | Impacto |
|---|---|---|
| 🔴 Alta | Asistente IA sin API key (HTTP 503) | Diferencial de marca que no funciona |
| 🔴 Alta | Sin páginas de producto individuales | Imposible posicionar productos en Google |
| 🟠 Media | Email de seguimiento post-entrega no existe | Pérdida de reseñas reales |
| 🟠 Media | Sin programa de fidelización formal | Sin incentivo para recompra |
| 🟡 Baja | Checkout en dominio Stripe (cambio de URL) | Duda momentánea en el pago |

---

*Creado durante la Transformación de Marca ZoneTechOnline · Julio 2026*
