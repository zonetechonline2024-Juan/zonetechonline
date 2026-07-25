'use strict';
// Genera data/ai-catalog.json extrayendo productos de js/app.js
// Uso: node generar-catalogo-ai.js

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const appJs = fs.readFileSync(path.join(__dirname, 'js/app.js'), 'utf8');
const lines = appJs.split('\n');

// Los datos están antes de la primera función (line que empieza con "function ")
const funcStart = lines.findIndex(l => l.startsWith('function '));
if (funcStart === -1) { console.error('No se encontró inicio de funciones en app.js'); process.exit(1); }

const dataCode = lines.slice(0, funcStart).join('\n') + '\nexports.PRODUCTS = PRODUCTS;';
const ctx = vm.createContext({ exports: {} });
try {
  vm.runInContext(dataCode, ctx);
} catch (err) {
  console.error('Error al evaluar datos de app.js:', err.message); process.exit(1);
}

const products = ctx.exports.PRODUCTS;
if (!Array.isArray(products) || products.length === 0) {
  console.error('PRODUCTS vacío o inválido'); process.exit(1);
}

// Catálogo compacto — solo campos útiles para contexto de IA
const catalog = products.map(p => ({
  id:          p.id,
  name:        p.name,
  brand:       p.brand,
  category:    p.category,
  price:       p.price,
  description: p.description ? String(p.description).slice(0, 180) : '',
  inStock:     p.inStock !== false,
}));

const outPath = path.join(__dirname, 'data/ai-catalog.json');
fs.writeFileSync(outPath, JSON.stringify(catalog, null, 2), 'utf8');

const agotados = catalog.filter(p => !p.inStock).length;
console.log(`✓ ai-catalog.json — ${catalog.length} productos (${catalog.length - agotados} en stock, ${agotados} agotados)`);
