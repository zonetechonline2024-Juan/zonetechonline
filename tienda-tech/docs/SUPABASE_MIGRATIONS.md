# SUPABASE_MIGRATIONS.md — ZoneTechOnline
> SQL a ejecutar en Supabase Dashboard → SQL Editor

---

## MIGRACIÓN 001 — Tabla cart_sessions (carrito abandonado)
> Ejecutar en: Supabase Dashboard → tu proyecto → SQL Editor → New query

```sql
-- Tabla para captura de carritos abandonados y recuperación por email
CREATE TABLE IF NOT EXISTS cart_sessions (
  id                        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email                     TEXT NOT NULL,
  name                      TEXT,
  cart_data                 JSONB,
  cart_total                DECIMAL(10,2),
  cart_url                  TEXT,
  recovery_email_1_sent_at  TIMESTAMPTZ,
  recovery_email_2_sent_at  TIMESTAMPTZ,
  recovery_email_3_sent_at  TIMESTAMPTZ,
  completed_at              TIMESTAMPTZ,
  updated_at                TIMESTAMPTZ DEFAULT NOW(),
  created_at                TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para consultas rápidas del cron
CREATE INDEX IF NOT EXISTS cart_sessions_email_idx      ON cart_sessions (email);
CREATE INDEX IF NOT EXISTS cart_sessions_created_at_idx ON cart_sessions (created_at DESC);
CREATE INDEX IF NOT EXISTS cart_sessions_completed_idx  ON cart_sessions (completed_at) WHERE completed_at IS NULL;

-- Sin RLS — solo se accede desde el backend con SERVICE_KEY
```

**Dónde ejecutar:**
1. Ir a [supabase.com](https://supabase.com) → tu proyecto ZoneTechOnline
2. En el menú izquierdo: **SQL Editor** → **New query**
3. Pegar el SQL de arriba y hacer click en **Run**

**Una vez ejecutado:** la captura de carrito abandonado funcionará automáticamente. Los emails de recuperación se enviarán cada hora vía Vercel Cron.

---

## MIGRACIÓN 002 — Verificar tabla orders (columnas necesarias)
> Solo ejecutar si hay errores — las columnas probablemente ya existen

```sql
-- Verificar que la tabla orders tiene las columnas de seguimiento de email
SELECT column_name FROM information_schema.columns 
WHERE table_name = 'orders' 
AND table_schema = 'public'
ORDER BY ordinal_position;
```

---

## ESTADO DE MIGRACIONES

| # | Nombre | Estado | Fecha |
|---|---|---|---|
| 001 | cart_sessions | ⏳ Pendiente de ejecutar | — |

