import { getJerseys } from "../lib/getJerseys";

export const revalidate = 3600; // recarrega os dados a cada 1h

export default async function Home() {
  const { jerseys, isMock } = await getJerseys();

  return (
    <>
      <header>
        <div className="logo display">
          <div className="logo-badge">CB</div>
          Camisa Barata
        </div>
      </header>

      <section className="hero">
        <h1 className="display">
          Compare o preço da <span>sua camisa</span> em todas as lojas
        </h1>
        <p>
          Preço de hoje e onde comprar mais barato — times do Brasil,
          seleções e clubes europeus, tudo num lugar só.
        </p>
      </section>

      <section className="table-view">
        <div className="table-view-head">
          <h2 className="display">
            Camisas monitoradas{" "}
            <span className="count-pill mono">{jerseys.length} modelos</span>
          </h2>
        </div>

        {isMock && (
          <div className="mock-banner mono">
            ⚠ Mostrando dados de exemplo — o Supabase ainda não tem preços
            reais gravados (rode o scraper.py pra popular o banco).
          </div>
        )}

        <div className="table-wrap">
          <table className="jersey-table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Preço</th>
                <th>Loja</th>
              </tr>
            </thead>
            <tbody>
              {jerseys.map((j, i) => (
                <tr key={i}>
                  <td>
                    <span className={`team-chip ${j.team_short_name}`}>
                      {j.team_short_name}
                    </span>
                    {j.jersey_name}
                  </td>
                  <td className="price-cell">
                    R$ {Number(j.price).toFixed(2).replace(".", ",")}
                  </td>
                  <td>{j.store_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer>© 2026 Camisa Barata — comparador de preços de camisas de futebol.</footer>
    </>
  );
}
