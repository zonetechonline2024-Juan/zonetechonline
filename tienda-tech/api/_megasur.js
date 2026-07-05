'use strict';

// Credenciales — se configuran en Vercel una vez que Adrián responda
const WS_URL   = () => process.env.MEGASUR_WS_URL;
const FEED_URL = () => process.env.MEGASUR_FEED_URL;
const CLIENT   = () => process.env.MEGASUR_CLIENT_CODE || '372416';
const API_KEY  = () => process.env.MEGASUR_API_KEY;

async function placeMegasurOrder({ orderNo, items, shipping }) {
  if (!WS_URL() || !API_KEY()) {
    console.warn('[megasur] Credenciales pendientes — pedido registrado localmente:', orderNo);
    return { pending: true };
  }

  const xml = buildOrderXML({ orderNo, items, shipping });
  const r = await fetch(WS_URL(), {
    method:  'POST',
    headers: {
      'Content-Type':  'text/xml; charset=utf-8',
      'Authorization': 'Basic ' + Buffer.from(`${CLIENT()}:${API_KEY()}`).toString('base64'),
    },
    body: xml,
  });

  const text = await r.text();
  if (!r.ok) throw new Error(`Megasur WS ${r.status}: ${text.slice(0, 300)}`);
  return { megasurRef: parseMegasurRef(text) };
}

async function syncMegasurFeed() {
  if (!FEED_URL() || !API_KEY()) throw new Error('MEGASUR_FEED_URL / MEGASUR_API_KEY no configuradas');

  const url = new URL(FEED_URL());
  url.searchParams.set('cliente', CLIENT());
  url.searchParams.set('apikey', API_KEY());

  const r = await fetch(url.toString(), { headers: { Accept: 'application/xml, text/xml, text/csv' } });
  if (!r.ok) throw new Error(`Feed ${r.status}`);
  const text = await r.text();
  return parseFeed(text);
}

// ── XML builder ──────────────────────────────────────────────────────────────

function buildOrderXML({ orderNo, items, shipping }) {
  const s = shipping || {};
  const lines = (items || []).map(item =>
    `<linea><referencia>${x(item.megasurCode || item.ean || '')}</referencia>` +
    `<cantidad>${Math.max(1, parseInt(item.qty) || 1)}</cantidad></linea>`
  ).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<pedido>
  <cabecera>
    <codigoCliente>${x(CLIENT())}</codigoCliente>
    <referenciaPedido>${x(orderNo)}</referenciaPedido>
  </cabecera>
  <direccionEnvio>
    <nombre>${x(s.name || '')}</nombre>
    <direccion>${x(s.line1 || '')}</direccion>
    <ciudad>${x(s.city || '')}</ciudad>
    <codigoPostal>${x(s.postal_code || '')}</codigoPostal>
    <pais>${x(s.country || 'ES')}</pais>
    <telefono>${x(s.phone || '')}</telefono>
  </direccionEnvio>
  <lineas>${lines}</lineas>
</pedido>`;
}

// ── Feed parser (XML y CSV) ──────────────────────────────────────────────────

function parseFeed(text) {
  return text.trim().startsWith('<') ? parseXMLFeed(text) : parseCSVFeed(text);
}

function parseXMLFeed(xml) {
  const products = [];
  const re = /<producto[^>]*>([\s\S]*?)<\/producto>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const b = m[1];
    const g = tag => { const r = b.match(new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`, 'i')); return r ? r[1].trim() : ''; };
    products.push({
      megasurCode: g('codArticulo') || g('codigo') || g('ref'),
      ean:         g('EAN') || g('ean') || g('codigoBarras'),
      name:        g('descripcion') || g('nombre'),
      price:       parseFloat(g('precio') || g('pvd') || '0'),
      stock:       parseInt(g('stock') || g('cantidad') || '0'),
      imageUrl:    g('imagen') || g('url_imagen'),
      brand:       g('marca'),
      category:    g('categoria') || g('familia'),
    });
  }
  return products;
}

function parseCSVFeed(csv) {
  const lines = csv.split('\n').filter(Boolean);
  if (!lines.length) return [];
  const headers = lines[0].split(';').map(h => h.trim().toLowerCase());
  return lines.slice(1).map(line => {
    const cols = line.split(';');
    const get = (...keys) => { for (const k of keys) { const i = headers.indexOf(k); if (i >= 0 && cols[i]) return cols[i].trim(); } return ''; };
    return {
      megasurCode: get('codarticulo', 'codigo', 'ref'),
      ean:         get('ean', 'codigobarras', 'barcode'),
      name:        get('descripcion', 'nombre', 'name'),
      price:       parseFloat(get('precio', 'pvd', 'price') || '0'),
      stock:       parseInt(get('stock', 'cantidad', 'qty') || '0'),
      brand:       get('marca', 'brand'),
      category:    get('categoria', 'familia', 'category'),
    };
  }).filter(p => p.megasurCode);
}

function parseMegasurRef(xml) {
  for (const tag of ['referencia', 'numeroPedido', 'pedidoId', 'idPedido', 'numPedido']) {
    const m = xml.match(new RegExp(`<${tag}[^>]*>([^<]+)<\\/${tag}>`, 'i'));
    if (m) return m[1].trim();
  }
  return null;
}

function x(str) {
  return String(str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

module.exports = { placeMegasurOrder, syncMegasurFeed };
