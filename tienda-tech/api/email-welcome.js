'use strict';
const { sendEmail }          = require('./_send-email');
const { welcome }            = require('./_email-templates');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.zonetechonline.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email } = req.body || {};
  if (!email) return res.status(400).json({ error: 'email requerido' });

  try {
    const { subject, html } = welcome({ name, email });
    const result = await sendEmail({ to: email, subject, html });
    res.status(200).json({ ok: true, id: result.id });
  } catch (err) {
    console.error('[email-welcome]', err.message);
    res.status(500).json({ error: err.message });
  }
};
