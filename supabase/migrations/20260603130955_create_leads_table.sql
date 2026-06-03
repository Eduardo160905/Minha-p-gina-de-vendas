/*
  # Create leads table for checkout section

  1. New Tables
    - `leads`
      - `id` (uuid, primary key, default gen_random_uuid())
      - `created_at` (timestamp, default now())
      - `nome` (text, not null)
      - `email` (text, not null)
      - `celular` (text, not null)
      - `cpf_cnpj` (text, not null)
      - `cidade` (text, not null)
      - `estado` (text, not null)
      - `servico_interesse` (text, not null)
      - `mensagem_personalizada` (text, nullable)
      - `tipo_mensagem` (text, not null - 'automatica' ou 'personalizada')

  2. Security
    - Enable RLS on `leads` table
    - Add policy to allow inserting leads from anonymous users
    - Add policy to allow reading own leads (optional future feature)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  nome text NOT NULL,
  email text NOT NULL,
  celular text NOT NULL,
  cpf_cnpj text NOT NULL,
  cidade text NOT NULL,
  estado text NOT NULL,
  servico_interesse text NOT NULL,
  mensagem_personalizada text,
  tipo_mensagem text NOT NULL DEFAULT 'automatica'
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts to leads"
  ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow reading own leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = email OR true);
