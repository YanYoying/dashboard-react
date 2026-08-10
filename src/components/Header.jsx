import { Search, Bell, Sun, Moon, CalendarDays } from 'lucide-react'

export default function Header({ darkMode, setDarkMode, search, setSearch }) {
  return (
    <header className="header">
      <div>
        <span className="eyebrow">VISÃO GERAL</span>
        <h1>Dashboard</h1>
      </div>

      <div className="header-actions">
        <div className="search-box">
          <Search size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar ativo..."
          />
        </div>

        <button className="date-button">
          <CalendarDays size={16} />
          01 Ago — 10 Ago
        </button>

        <button className="icon-button" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <button className="icon-button">
          <Bell size={17} />
        </button>

        <div className="avatar">FA</div>
      </div>
    </header>
  )
}