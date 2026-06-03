import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface LeadData {
  nome: string;
  email: string;
  celular: string;
  cpf_cnpj: string;
  cidade: string;
  estado: string;
  servico_interesse: string;
  mensagem_personalizada?: string;
  tipo_mensagem: 'automatica' | 'personalizada';
}

export async function saveLead(data: LeadData) {
  const { error, data: result } = await supabase
    .from('leads')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) {
    console.error('Erro ao salvar lead:', error);
    throw new Error('Erro ao salvar seus dados. Tente novamente.');
  }

  return result;
}
