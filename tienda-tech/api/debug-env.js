'use strict';
module.exports = (req, res) => {
  res.status(200).json({
    resend_set:  !!process.env.RESEND_API_KEY,
    resend_len:  (process.env.RESEND_API_KEY || '').length,
    stripe_set:  !!process.env.STRIPE_SECRET_KEY,
    github_set:  !!process.env.GITHUB_PAT,
    node_env:    process.env.NODE_ENV,
    ts:          Date.now(),
  });
};
