'use strict';
// Cliente Supabase via REST API — sin npm, usa fetch nativo (Node 18+)

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;

async function db(table, { method = 'GET', body, params = '', select = '*', order, limit, filters = [] } = {}) {
  if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error('SUPABASE_URL o SUPABASE_SERVICE_KEY no configuradas');

  let qs = params;
  if (!qs) {
    const parts = [`select=${select}`];
    filters.forEach(f => parts.push(f));
    if (order) parts.push(`order=${order}`);
    if (limit) parts.push(`limit=${limit}`);
    qs = '?' + parts.join('&');
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}${qs}`, {
    method,
    headers: {
      'apikey':        SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type':  'application/json',
      'Prefer':        'return=representation',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 204) return null;
  const data = await res.json();
  if (!res.ok) throw new Error(`DB ${res.status}: ${JSON.stringify(data)}`);
  return data;
}

module.exports = { db };
