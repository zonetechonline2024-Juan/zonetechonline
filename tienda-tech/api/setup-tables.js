'use strict';

// Endpoint de un solo uso — se elimina después de ejecutar.
const SETUP_TOKEN = 'zt-setup-2026-x9k3m';

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.headers['x-setup-token'] !== SETUP_TOKEN) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const URL = process.env.SUPABASE_URL;
  const KEY = process.env.SUPABASE_SERVICE_KEY;
  if (!URL || !KEY) return res.status(500).json({ error: 'Variables de entorno de Supabase no disponibles' });

  const base = { 'apikey': KEY, 'Authorization': `Bearer ${KEY}`, 'Content-Type': 'application/json' };
  const results = [];

  // Supabase Management API — ejecutar SQL directamente
  const projectRef = new URL(URL).hostname.split('.')[0];
  const mgmt = `https://api.supabase.com/v1/projects/${projectRef}/database/query`;

  async function sql(label, query) {
    // Intento 1: Management API con service key
    try {
      const r1 = await fetch(mgmt, {
        method: 'POST',
        headers: { ...base, 'Authorization': `Bearer ${KEY}` },
        body: JSON.stringify({ query }),
      });
      const t1 = await r1.text();
      if (r1.ok) { results.push({ label, ok: true, via: 'mgmt', resp: t1.slice(0, 100) }); return; }
      // Intento 2: RPC exec_sql si existe en el proyecto
      const r2 = await fetch(`${URL}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: base,
        body: JSON.stringify({ sql: query }),
      });
      const t2 = await r2.text();
      results.push({ label, ok: r2.ok, via: 'rpc', resp: t2.slice(0, 150) });
    } catch (e) {
      results.push({ label, ok: false, via: 'err', resp: e.message });
    }
  }

  await sql('CREATE cart_sessions', `
    CREATE TABLE IF NOT EXISTS cart_sessions (
      id                UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      stripe_session_id TEXT UNIQUE NOT NULL,
      items             JSONB NOT NULL DEFAULT '[]',
      created_at        TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_cart_sessions_sid ON cart_sessions(stripe_session_id);
  `);

  await sql('orders ADD megasur_ref',    'ALTER TABLE orders ADD COLUMN IF NOT EXISTS megasur_ref TEXT;');
  await sql('orders ADD megasur_status', 'ALTER TABLE orders ADD COLUMN IF NOT EXISTS megasur_status TEXT;');

  return res.status(200).json({ results });
};
