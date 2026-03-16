'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const PRODUCTS = [
  {
    slug: 'P4',
    name: 'HiggsMotion P4',
    title: 'Premium Resolution',
    specs: [
      { label: 'Pixel Pitch',       value: '4mm × 4mm' },
      { label: 'Pixel Density',     value: '62,500 dot/m²' },
      { label: 'Transparency',      value: '> 82%' },
      { label: 'Brightness',        value: '1,500 cd/m²' },
      { label: 'Optimal Viewing',   value: '≥ 4m' },
    ],
    featured: false,
    note: 'Ideal for entrance displays and close-viewing showcase',
  },
  {
    slug: 'P6',
    name: 'HiggsMotion P6',
    title: 'Balanced Quality',
    specs: [
      { label: 'Pixel Pitch',       value: '6mm × 6mm' },
      { label: 'Pixel Density',     value: '27,778 dot/m²' },
      { label: 'Transparency',      value: '> 85%' },
      { label: 'Brightness',        value: '3,000 cd/m²' },
      { label: 'Optimal Viewing',   value: '≥ 6m' },
    ],
    featured: true,
    note: 'Best balance of brightness and image quality for retail display',
  },
  {
    slug: 'P10',
    name: 'HiggsMotion P10',
    title: 'Large Format',
    specs: [
      { label: 'Pixel Pitch',       value: '10mm × 10mm' },
      { label: 'Pixel Density',     value: '10,000 dot/m²' },
      { label: 'Transparency',      value: '> 90%' },
      { label: 'Brightness',        value: '2,000 cd/m²' },
      { label: 'Optimal Viewing',   value: '≥ 10m' },
    ],
    featured: false,
    note: 'Highest transparency — ideal for large open retail and atrium spaces',
  },
]

export default function Products() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')), { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="products" className="bg-[#FAF8F5] py-28 px-8 lg:px-16" ref={ref as any}>
      <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-light text-ink mb-4 reveal">
        Three resolutions. One transparent vision.
      </h2>
      <p className="text-sm text-muted mb-20 reveal max-w-xl">
        All specifications sourced from Chestnuter SF series. Common to all options: refresh rate ≥3,840Hz · LED lifespan ≥100,000hrs · module size 240×1065mm · Novastar control system.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {PRODUCTS.map(p => (
          <div
            key={p.slug}
            className={`bg-white p-12 reveal hover:-translate-y-1 transition-transform border-t-[3px] ${p.featured ? 'border-brand' : 'border-transparent hover:border-accent'}`}
          >
            {p.featured && (
              <span className="text-[9px] text-white bg-brand px-2.5 py-1">Recommended</span>
            )}
            <span className="text-[11px] uppercase text-accent block mb-4 mt-4">{p.name}</span>
            <h3 className="font-serif text-2xl font-light text-ink mb-6">{p.title}</h3>
            <ul className="mb-6">
              {p.specs.map(s => (
                <li key={s.label} className="flex justify-between py-2 border-b border-black/10 text-sm">
                  <span className="text-muted">{s.label}</span>
                  <span className="font-medium">{s.value}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted italic mb-6">{p.note}</p>
            <Link
              href="#contact"
              className="inline-block text-xs uppercase text-ink border-b border-ink pb-0.5 hover:text-brand hover:border-brand transition-colors no-underline"
            >
              Request Proposal →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
