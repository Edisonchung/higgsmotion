'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const OPTIONS = [
  {
    pitch: 'P10',
    label: 'Value',
    transparency: '> 90%',
    brightness: '2,000 cd/m²',
    viewing: '≥ 10m',
    myr: 'RM 76,057',
    featured: false,
    desc: 'Best for large open retail spaces with wide viewing angles.',
  },
  {
    pitch: 'P6',
    label: 'Recommended',
    transparency: '> 85%',
    brightness: '3,000 cd/m²',
    viewing: '≥ 6m',
    myr: 'RM 100,757',
    featured: true,
    desc: 'Highest brightness in the range. Ideal for retail showcase and promotional display.',
  },
  {
    pitch: 'P4',
    label: 'Premium',
    transparency: '> 82%',
    brightness: '1,500 cd/m²',
    viewing: '≥ 4m',
    myr: 'RM 182,557',
    featured: false,
    desc: 'Highest pixel density for entrance displays and close-up viewing.',
  },
]

export default function Pricing() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')), { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="pricing" className="py-28 px-8 lg:px-16 bg-off-white" ref={ref as any}>
      <p className="text-[11px] tracking-[0.18em] uppercase text-accent mb-4 reveal">Pricing</p>
      <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-light text-ink mb-4 reveal">
        Standard installation. Turnkey price.
      </h2>
      <p className="text-sm text-muted mb-16 max-w-xl reveal">
        The following prices are for our standard 3,600 × 2,130mm installation (7.668 sqm · 30 modules).
        All prices are in Malaysian Ringgit and include supply, delivery, installation, testing, and commissioning.
        Custom sizes available — contact us for a site-specific quotation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
        {OPTIONS.map(o => (
          <div
            key={o.pitch}
            className={`relative p-10 border ${o.featured ? 'bg-ink text-white border-ink' : 'bg-white border-black/10'}`}
          >
            {o.featured && (
              <span className="absolute top-4 right-4 text-[9px] uppercase text-white bg-brand px-2.5 py-1">
                {o.label}
              </span>
            )}
            {!o.featured && (
              <span className="text-[10px] uppercase text-accent block mb-2">{o.label}</span>
            )}
            <div className={`font-serif text-5xl font-light mb-1 ${o.featured ? 'text-accent' : 'text-ink'}`}>
              {o.pitch}
            </div>
            <p className={`text-xs mb-8 ${o.featured ? 'text-white/60' : 'text-muted'}`}>{o.desc}</p>

            <ul className="space-y-3 mb-10 text-sm">
              {[
                ['Transparency', o.transparency],
                ['Brightness', o.brightness],
                ['Optimal Viewing', o.viewing],
                ['Screen Size', '3,600 × 2,130mm'],
                ['Area', '7.668 sqm'],
                ['Modules', '30 pcs (240×1065mm)'],
              ].map(([k,v]) => (
                <li key={k} className={`flex justify-between border-b pb-2 ${o.featured ? 'border-white/10 text-white/80' : 'border-black/8 text-muted'}`}>
                  <span className={o.featured ? 'text-white/50' : 'text-muted'}>{k}</span>
                  <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>

            <div className={`font-serif text-3xl mb-1 ${o.featured ? 'text-white' : 'text-ink'}`}>
              {o.myr}
            </div>
            <p className={`text-xs mb-8 ${o.featured ? 'text-white/50' : 'text-muted'}`}>
              Turnkey — supply · delivery · installation
            </p>

            <Link
              href="#contact"
              className={`inline-block text-xs uppercase pb-0.5 border-b transition-colors no-underline ${o.featured ? 'text-accent border-accent hover:text-white hover:border-white' : 'text-ink border-ink hover:text-brand hover:border-brand'}`}
            >
              Request Proposal →
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted italic reveal">
        * Prices valid for 2 weeks from date of quotation. Lead time: 20–25 working days after P.O. and 50% deposit.
        1-year local warranty included. Contact EMI Automation for custom sizes and multi-site projects.
      </p>
    </section>
  )
}
