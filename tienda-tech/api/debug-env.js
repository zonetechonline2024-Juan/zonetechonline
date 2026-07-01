'use strict';
module.exports = (req, res) => {
  res.status(200).json({
    resend_set:   !!process.env.RESEND_API_KEY,
    stripe_set:   !!process.env.STRIPE_SECRET_KEY,
    github_set:   !!process.env.GITHUB_PAT,
    supabase_url: !!process.env.SUPABASE_URL,
    supabase_key: !!process.env.SUPABASE_SERVICE_KEY,
    node_env:     process.env.NODE_ENV,
    ts:           Date.now(),
  });
};

// v2

