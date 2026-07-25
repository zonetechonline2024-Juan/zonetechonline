'use strict';

const _store = new Map();
const WINDOW_MS = 60 * 1000;
const LIMITS = { checkout: 5, review: 3, newsletter: 3, contact: 3, ai: 10 };

function getIP(req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || req.headers['x-real-ip']
    || 'unknown';
}

function check(ip, key) {
  const limit = LIMITS[key] || 20;
  const now   = Date.now();
  const k     = `${key}:${ip}`;
  let entry   = _store.get(k);
  if (!entry || now > entry.reset) entry = { count: 0, reset: now + WINDOW_MS };
  entry.count++;
  _store.set(k, entry);
  if (_store.size > 2000) {
    for (const [sk, sv] of _store) { if (now > sv.reset) _store.delete(sk); }
  }
  return entry.count <= limit;
}

function rateLimit(key) {
  return function(req, res) {
    if (check(getIP(req), key)) return true;
    res.status(429).json({ error: 'Demasiadas solicitudes. Inténtalo en un minuto.' });
    return false;
  };
}

module.exports = { rateLimit };
