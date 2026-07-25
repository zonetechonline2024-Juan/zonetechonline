'use strict';

const PERSONA = `Eres el asistente virtual de ZoneTechOnline, tienda online española de tecnología premium.
Ayudas a clientes a encontrar el producto ideal para sus necesidades y resuelves dudas sobre la tienda.

TIENDA:
- Web: https://www.zonetechonline.com
- Envío gratuito a España y Europa (5-8 días hábiles, MRW/SEUR)
- Pagos: tarjeta, Bizum, PayPal (vía Stripe — 100% seguro)
- Contacto: info@zonetechonline.com
- Devoluciones: 14 días según normativa EU

INSTRUCCIONES:
- Responde siempre en español, de forma amable y concisa (máx 3 párrafos)
- Solo recomienda productos del catálogo proporcionado
- No inventes precios, especificaciones ni disponibilidad
- Si un producto está AGOTADO, indica alternativas disponibles
- Para compras, guía al usuario a añadir al carrito en la web`;

function buildSystemPrompt(catalog) {
  const lines = catalog.map(p => {
    const stock = p.inStock ? '' : ' [AGOTADO]';
    return `${p.id}|${p.brand} ${p.name}|${p.category}|${p.price}€${stock}`;
  }).join('\n');
  return `${PERSONA}\n\nCATÁLOGO (id|nombre|categoría|precio):\n${lines}`;
}

async function callAnthropic(messages, systemPrompt, opts = {}) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY no configurada en Vercel');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model:      opts.model      || 'claude-haiku-4-5-20251001',
      max_tokens: opts.maxTokens  || 500,
      system:     systemPrompt,
      messages,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`Anthropic ${res.status}: ${err.error?.message || 'error'}`);
  }

  const data = await res.json();
  return {
    text:         data.content[0].text,
    inputTokens:  data.usage?.input_tokens  || 0,
    outputTokens: data.usage?.output_tokens || 0,
  };
}

module.exports = { buildSystemPrompt, callAnthropic, PERSONA };
