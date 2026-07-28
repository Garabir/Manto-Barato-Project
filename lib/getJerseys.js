import { supabase } from "./supabaseClient";

// Dado de exemplo — usado só enquanto o scraper ainda não populou
// o Supabase de verdade, ou se as variáveis de ambiente não estiverem
// configuradas. Assim que houver dado real, isso é ignorado.
const MOCK_JERSEYS = [
  { jersey_name: "São Paulo I 2026 Torcedor", team_short_name: "SAO", store_name: "New Balance", price: 249 },
  { jersey_name: "Corinthians I 2026/27 Torcedor", team_short_name: "COR", store_name: "Nike", price: 299 },
  { jersey_name: "Corinthians I 2026/27 Jogador", team_short_name: "COR", store_name: "Nike", price: 449 },
  { jersey_name: "Palmeiras I 2026 Jogador", team_short_name: "PAL", store_name: "Puma", price: 449 },
  { jersey_name: "Palmeiras II 2026 Jogador", team_short_name: "PAL", store_name: "Puma", price: 449 },
  { jersey_name: "Flamengo I 25/26 Torcedor", team_short_name: "FLA", store_name: "Adidas", price: 399 },
  { jersey_name: "Flamengo I 25/26 Jogador", team_short_name: "FLA", store_name: "Adidas", price: 599 },
];

export async function getJerseys() {
  if (!supabase) {
    return { jerseys: MOCK_JERSEYS, isMock: true };
  }

  const { data, error } = await supabase
    .from("current_best_price")
    .select("*")
    .order("price", { ascending: true });

  if (error || !data || data.length === 0) {
    return { jerseys: MOCK_JERSEYS, isMock: true };
  }

  return { jerseys: data, isMock: false };
}
