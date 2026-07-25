'use strict';
const logger = require('./_logger');

const ALLOWED_ORIGIN = 'https://www.zonetechonline.com';

function setCORSHeaders(res, methods = 'POST, OPTIONS') {
  res.setHeader('Access-Control-Allow-Origin',  ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', methods);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Admin-Key');
}

function isAdminAuthorized(req) {
  const key = process.env.ADMIN_API_KEY;
  return !key || req.headers['x-admin-key'] === key;
}

/**
 * Wraps an admin handler with CORS + X-Admin-Key authentication + error handling.
 * Returns 401 if key is missing/invalid; 500 on unhandled exceptions.
 */
function withAdmin(handler, methods = 'GET, POST, PATCH, DELETE, OPTIONS') {
  return async (req, res) => {
    setCORSHeaders(res, methods);
    if (req.method === 'OPTIONS') return res.status(204).end();

    if (!isAdminAuthorized(req)) {
      return res.status(401).json({ error: 'No autorizado' });
    }

    try {
      await handler(req, res);
    } catch (err) {
      logger.error('admin', err.message, logger.ctx(req));
      if (!res.headersSent) res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
}

function withPublic(handler, methods = 'POST, OPTIONS') {
  return async (req, res) => {
    setCORSHeaders(res, methods);
    if (req.method === 'OPTIONS') return res.status(204).end();

    try {
      await handler(req, res);
    } catch (err) {
      logger.error('public', err.message, logger.ctx(req));
      if (!res.headersSent) res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
}

module.exports = { withAdmin, withPublic, isAdminAuthorized, setCORSHeaders };
