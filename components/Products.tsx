'use client'
import { useEffect, useRef } from 'react'
const PRODUCTS = [{ slug: 'P4', name: 'HiggsMotion P4', title: 'Premium Resolution', specs: [{ label: 'Pixel Pitch', value: '4mm x 4mm' },{ label: 'Pixel Density', value: '62,000 dot/m2' }], price: 'USD 2,550', unit: '/sqm', featured: false },{ slug: 'P6', name: 'HiggsMotion P6', title: 'Balanced Quality', best: 'Mall & retail standard', specs: [{ label: 'Pixel Pitch', value: '6mm x 6mm' },{ label: 'Pixel Density', value: '27,000 dot/m2' }], price: 'USD 1,195', unit: '/sqm', featured: true },{ slug: 'P10', name: 'HiggsMotion P10', title: 'Large Format', best: 'Wide-angle displays', specs: [{ label: 'Pixel Pitch', value: '10mm x 10mm' },{ label: 'Pixel Density', value: '10,000 dot/m2' }], price: 'USD  865', unit: '/sqm', featured: false }]
export default function Products() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(x  => x.isIntersecting && x.target.classList.add('visible')),{ threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return (
    <section id="products" className="bg-[#FAF8F5] py-28 px-8 lg:px-16" ref={ref as any}>
      <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-light text-ink mb-20 reveal">Three resolutions. One transparent vision.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {PRODUCTS.map(p => (
          <div key={p.slug} className={`bg-white p-12 reveal hover:-translate-y-1 transition-transform border-t-[3px] ${p.featured?'border-brand':'border-transparent hover:border-accent'}`}>
            {p.featured && <span className="text-[9px] text-white bg-brand px-2.5 py-1">Recommended</span>}
            <span className="text-[11px] uppercase text-accent block mb-4 mt-4">{p.name}</span>
            <h3 className="font-serif text-2xl font-light text-ink mb-8">{p.title}</h3>
            <ul className="mb-8">{p.specs.map(s => <li key={s.label} className="flex justify-between py-2 border-b border-black/10 text-sm"><span className="text-muted">{s.label}</span><span>{s.value}</span></li>)}</ul>
            <div className="font-serif text-xl text-ink">{p.price}<span className="text-sm text-muted ml-1">{p.unit}</span></div>
          </div>
        ))}
      </div>
    </section>
  )
}
