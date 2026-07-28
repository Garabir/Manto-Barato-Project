import { createClient } from "@supabase/supabase-js";

// Essas duas variáveis vêm do seu projeto Supabase:
// Project Settings > API > Project URL / anon public key
// (a anon key é segura de expor no site — ela só tem permissão de leitura,
// diferente da service_role key que o scraper usa)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
