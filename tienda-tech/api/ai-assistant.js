'use strict';
// ESTADO: preparado pero NO registrado en vercel.json (límite 12 funciones Hobby)
// ACTIVACIÓN:
//   1. Añadir ANTHROPIC_API_KEY en Vercel Dashboard → Settings → Environment Variables
//   2. Liberar un slot: fusionar o eliminar una función existente (candidata: admin-import-products.js)
//   3. Añadir a vercel.json → "functions": { "api/ai-assistant.js": { "maxDuration": 20 } }
//   4. Actualizar app.js: reemplazar getResponse(q) por fetch('/api/ai-assistant', ...)
//   5. Ejecutar: node generar-catalogo-ai.js (regenerar si el catálogo cambió)

const { buildSystemPrompt, callAnthropic } = require('./_ai');
const { rateLimit }                         = require('./_ratelimit');
const aiRL                                  = rateLimit('ai');

let _catalog = null;
function getCatalog() {
  if (_catalog) return _catalog;
  try {
    _catalog = require('../data/ai-catalog.json');
  } catch (_) {
    _catalog = [];
  }
  return _catalog;
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin',  'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Método no permitido' });
  if (!aiRL(req, res))         return;

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages requerido' });
    }

    // Limitar historial a últimas 10 rondas para no exceder contexto
    const history = messages.slice(-10).map(m => ({
      role:    m.role === 'user' ? 'user' : 'assistant',
      content: String(m.content || '').slice(0, 1000),
    }));

    const catalog      = getCatalog();
    const systemPrompt = buildSystemPrompt(catalog);
    const result       = await callAnthropic(history, systemPrompt);

    return res.status(200).json({ reply: result.text });

  } catch (err) {
    console.error('[ai-assistant]', err.message);
    if (err.message.includes('ANTHROPIC_API_KEY')) {
      return res.status(503).json({ error: 'Asistente IA no configurado aún.' });
    }
    return res.status(500).json({ error: 'Error en el asistente. Inténtalo de nuevo.' });
  }
};
