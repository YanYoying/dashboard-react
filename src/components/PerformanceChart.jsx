import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip
} from 'recharts'

const money = (value) =>
  `R$ ${Number(value).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}`

export default function PerformanceChart({ data }) {
  return (
    <section className="panel chart-panel">
      <div className="panel-heading">
        <div>
          <h2>Performance da carteira</h2>
          <p>Evolução do patrimônio no período</p>
        </div>
        <div className="periods">
          {['1D', '1S', '1M', '6M', '1A'].map((period, index) => (
            <button className={index === 2 ? 'selected' : ''} key={period}>{period}</button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="78%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity=".28" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ffffff08" vertical={false} />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#59635e', fontSize: 11 }} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#59635e', fontSize: 11 }}
            tickFormatter={(v) => `R$ ${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              background: '#111814',
              border: '1px solid #ffffff12',
              borderRadius: 8,
              color: '#fff'
            }}
            formatter={(v) => money(v)}
          />
          <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2.2} fill="url(#areaFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  )
}