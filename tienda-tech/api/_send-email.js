'use strict';
/**
 * Sends a transactional email via Resend REST API.
 * No npm dependency — uses native fetch (Node 18+ on Vercel).
 *
 * @param {{ to: string, subject: string, html: string, replyTo?: string }} opts
 */
async function sendEmail({ to, subject, html, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY no configurada en Vercel');

  const payload = {
    from:    'ZoneTechOnline <noreply@zonetechonline.com>',
    to:      [to],
    subject,
    html,
  };
  if (replyTo) payload.reply_to = replyTo;

  const res = await fetch('https://api.resend.com/emails', {
    method:  'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type':  'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(`Resend ${res.status}: ${JSON.stringify(data)}`);
  return data;
}

module.exports = { sendEmail };
