'use client'
import { useEffect, useRef } from 'react'
const ROWS = [{ pitch:'P4',size:'1.5m x 1.4m',sqm:3.6,unit:2550,total:10220,myr:'~RM 48,000',note:'High resolution'},{pitch:'P6',size:'1.5m x 1.4m',sqm:3.6,unit:1195,total:4857,myr:'~RM 22,000',note:'rec'},{pitch:'P10',size:'1.5m x 1.4m',sqm:3.6,unit:865,total:3559,myr:'~RM 16,000',note:'Budget'},{pitch:'P4',size:'3.0m x 2.9m',sqm:8.64,unit:2550,total:23137,myr:'~RM 108,000',note:'High resolution'},{pitch:'P6',size:'3.0m x 1.9m',sqm:8.64,unit:1195,total:10945,myr:'~RM 51,000',note:'rec'},{pitch:'P10',size:'3.0m x 2.9m',sqm:8.64,unit:865,total:7984,myr:'~RM 37,000',note:'Budget'},{pitch:'P4',size:'6.0m x 3.0m',sqm:18,unit:2550,total:47185,myr:'~RM 221,000',note:'High resolution'},{pitch:'P6',size:'6.0m x 3.0m',sqm:18,unit:1195,total:22220,myr:'~RM 104,000',note:'rec'},{pitch:'P10',size:'6.0m x 3.0m',sqm:18,unit:865,total:16170,myr:'~RM 75,000',note:'Budget'}]
export default function Pricing() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),{ threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id="pricing" className="py-28 px-8 lg:px-16 bg-off-white" ref={ref as any}>
      <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-light text-ink mb-16 reveal">Standard sizes. Custom installations welcome.</h2>
      <div className="overflow-x-auto reveal">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-ink text-white">{['Pixel Pitch','Size','Area (sqm)','USD/m2','Total USD','Est. MYR','Notes'].map(h => <th key={h} className="px-5 py-4 text-left text-xs uppercase whitespace-nowrap">{h}</th>)}</tr></thead>
          <tbody>{ROWS.map((r,i) => (
            <tr key={i} className={i % 2 === 1 ? 'bg-warm-white' : 'bg-white'}>
              <td className="px-5 py-4 font-medium">{r.pitch}</td>
              <td className="px-5 py-4">{r.size}</td>
              <td className="px-5 py-4">{r.sqm}</td>
              <td className="px-5 py-4">USD {r.unit.toLocaleString()}</td>
              <td className="px-5 py-4 font-serif">USD {r.total.toLocaleString()}</td>
              <td className="px-5 py-4 text-muted">{r.myr}</td>
              <td className="px-5 py-4">{r.note==='rec'?<span className="text-[9px] text-white bg-accent px-2 py-1">Recommended</span>:<span className="text-xs text-muted">{r.note}</span>}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <p className="mt-5 text-xs text-muted italic reveal">* MYR figures indicative at USD/MYR ~4.70. Spare parts: P4 USD 875/pc, P6 USD 390/pc, P10 USD 280/pc.</p>
    </section>
  )
}
