import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function MarketTable({ stocks }) {
  return (
    <section className="panel market-panel">
      <div className="panel-heading">
        <div>
          <h2>Mercado</h2>
          <p>Principais ativos monitorados</p>
        </div>
      </div>

      {stocks.length === 0 ? (
        <div className="empty">Nenhum ativo encontrado.</div>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>ATIVO</th>
                <th>PREÇO</th>
                <th>VARIAÇÃO</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.ticker}>
                  <td>
                    <strong>{stock.ticker}</strong>
                    <span>{stock.name}</span>
                  </td>
                  <td>{stock.price}</td>
                  <td className={stock.positive ? 'positive' : 'negative'}>{stock.change}</td>
                  <td>
                    <span className={stock.positive ? 'status positive' : 'status negative'}>
                      {stock.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                      {stock.positive ? 'Alta' : 'Baixa'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}