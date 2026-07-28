# Camisa Barata

Site em Next.js que compara preço de camisas de futebol, lendo os
dados direto do Supabase (populado pelo `scraper.py`).

## Rodar localmente

```
npm install
cp .env.local.example .env.local
# edite o .env.local com a URL e a anon key do seu projeto Supabase
npm run dev
```

Abre em http://localhost:3000. Se o `.env.local` não estiver
configurado (ou o banco ainda estiver vazio), o site mostra dados de
exemplo com um aviso no topo — assim dá pra ver o layout mesmo antes
do scraper rodar de verdade.

## Publicar (Vercel, grátis)

1. Suba essa pasta pra um repositório no GitHub
2. Crie uma conta em vercel.com e conecte o repositório
3. Nas configurações do projeto na Vercel, adicione as mesmas duas
   variáveis do `.env.local` (Settings > Environment Variables)
4. Deploy — a Vercel te dá um endereço tipo `camisa-barata.vercel.app`

Cada vez que você atualizar o código no GitHub, a Vercel publica de
novo automaticamente.

## Automatizar o scraper (GitHub Actions)

Esse repositório já vem com `.github/workflows/scrape.yml`, configurado
pra rodar o `scraper.py` todo dia às 8h (horário de Brasília) sozinho,
na nuvem — sem precisar da sua máquina ligada.

1. No GitHub, vá em **Settings** do repositório → **Secrets and
   variables** → **Actions**
2. Crie dois secrets:
   - `SUPABASE_URL` → a URL do seu projeto Supabase
   - `SUPABASE_KEY` → a **service_role key** (a "secreta", não a
     `anon public` — essa é só pro site)
3. Vá na aba **Actions** → clique no workflow "Rodar scraper de
   preços" → **Run workflow** pra testar manualmente

**Importante:** o `scraper.py` deste repositório nunca deve ter a
URL/chave do Supabase escritas direto no código — ele lê do
ambiente (`os.environ.get(...)`). Quem fornece esses valores em
produção são os Secrets configurados acima.

