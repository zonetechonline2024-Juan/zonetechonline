'use strict';

function getIP(req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || req.headers['x-real-ip']
    || 'unknown';
}

function emit(level, tag, message, extra) {
  const entry = { ts: new Date().toISOString(), lvl: level, tag, msg: message };
  if (extra && Object.keys(extra).length) Object.assign(entry, extra);
  const out = JSON.stringify(entry);
  if (level === 'error') console.error(out);
  else if (level === 'warn') console.warn(out);
  else console.log(out);
}

function ctx(req) {
  return {
    method: req.method,
    path:   (req.url || '').split('?')[0],
    ip:     getIP(req),
  };
}

module.exports = {
  error: (tag, msg, extra) => emit('error', tag, msg, extra),
  warn:  (tag, msg, extra) => emit('warn',  tag, msg, extra),
  info:  (tag, msg, extra) => emit('info',  tag, msg, extra),
  ctx,
};
