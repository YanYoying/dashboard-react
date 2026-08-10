import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip
} from 'recharts'

export default function VolumeChart({ data }) {
  return (
    <section className="panel chart-panel">
      <div className="panel-heading">
        <div>
          <h2>Volume negociado</h2>
          <p>Volume diário de negociação</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="78%">
        <BarChart data={data}>
          <CartesianGrid stroke="#ffffff08" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#59635e', fontSize: 11 }} />
          <YAxis axisLine={false} tickLine={false} tick={{ fill: '#59635e', fontSize: 11 }} />
          <Tooltip
            contentStyle={{
              background: '#111814',
              border: '1px solid #ffffff12',
              borderRadius: 8
            }}
          />
          <Bar dataKey="volume" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}