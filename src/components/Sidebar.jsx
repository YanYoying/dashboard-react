import { LayoutDashboard, TrendingUp, BarChart3, Activity, Settings, WalletCards } from 'lucide-react'

const menu = [
  ['Dashboard', LayoutDashboard, true],
  ['Mercado', TrendingUp, false],
  ['Ativos', BarChart3, false],
  ['Indicadores', Activity, false]
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon"><WalletCards size={19} /></div>
        <div>
          <strong>FinAnalytics</strong>
          <span>MARKET INTELLIGENCE</span>
        </div>
      </div>

      <div className="nav-label">PRINCIPAL</div>
      <nav>
        {menu.map(([label, Icon, active]) => (
          <button className={`nav-item ${active ? 'active' : ''}`} key={label}>
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      <button className="settings">
        <Settings size={18} />
        Configurações
      </button>
    </aside>
  )
}