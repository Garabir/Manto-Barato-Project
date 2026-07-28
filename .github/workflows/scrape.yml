name: Rodar scraper de preços

on:
  schedule:
    # roda todo dia às 08:00 (horário de Brasília = UTC-3, por isso 11:00 UTC)
    - cron: "0 11 * * *"
  workflow_dispatch:
    # permite rodar manualmente pela aba "Actions" no GitHub, quando quiser

jobs:
  scrape:
    runs-on: ubuntu-latest
    steps:
      - name: Clonar o repositório
        uses: actions/checkout@v4

      - name: Configurar Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.11"

      - name: Instalar dependências
        run: |
          pip install -r requirements.txt
          playwright install --with-deps chromium

      - name: Rodar o scraper
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_KEY: ${{ secrets.SUPABASE_KEY }}
        run: python scraper.py
