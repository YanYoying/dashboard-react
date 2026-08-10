import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function KpiCard({ title, value, change, positive = true, description }) {
  return (
    <article className="kpi-card">
      <div className="kpi-top">
        <span>{title}</span>
        <b className={positive ? 'positive' : 'negative'}>
          {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </b>
      </div>
      <strong>{value}</strong>
      <small>{description}</small>
    </article>
  )
}