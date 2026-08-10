import { useMemo, useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import KpiCard from './components/KpiCard'
import PerformanceChart from './components/PerformanceChart'
import VolumeChart from './components/VolumeChart'
import MarketTable from './components/MarketTable'
import { performanceData, volumeData, stocks } from './data/marketData'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [search, setSearch] = useState('')

  const filteredStocks = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return stocks
    return stocks.filter((stock) =>
      `${stock.ticker} ${stock.name}`.toLowerCase().includes(query)
    )
  }, [search])

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Sidebar />
      <main className="main">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          search={search}
          setSearch={setSearch}
        />

        <div className="content">
          <section className="kpi-grid">
            <KpiCard title="Ibovespa" value="137.421 pts" change="+1,84%" description="vs. período anterior" />
            <KpiCard title="Carteira" value="R$ 107.400" change="+7,40%" description="retorno acumulado" />
            <KpiCard title="Volatilidade" value="12,84%" change="-2,10%" positive={false} description="volatilidade anualizada" />
            <KpiCard title="Drawdown" value="-4,21%" change="+1,12%" description="máximo do período" />
          </section>

          <section className="chart-grid">
            <PerformanceChart data={performanceData} />
            <VolumeChart data={volumeData} />
          </section>

          <MarketTable stocks={filteredStocks} />

          <footer>Dados demonstrativos para prototipação • FinAnalytics</footer>
        </div>
      </main>
    </div>
  )
}