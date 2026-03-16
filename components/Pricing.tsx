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
    density: '10,000 dot/m²',
    featured: false,
    desc: 'Best for large open retail spaces with wide viewing angles.',
  },
  {
    pitch: 'P6',
    label: 'Most Popular',
    transparency: '> 85%',
    brightness: '3,000 cd/m²',
    viewing: '≥ 6m',
    density: '27,778 dot/m²',
    featured: true,
    desc: 'Highest brightness in the range. Ideal for retail showcase and promotional display.',
  },
  {
    pitch: 'P4',
    label: 'Premium',
    transparency: '> 82%',
    brightness: '1,500 cd/m²',
    viewing: '≥ 4m',
    density: '62,500 dot/m²',
    featured: false,
    desc: 'Highest pixel density for entrance displays and close-up viewing.',
  },
]

export default function Pricing() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="pricing" className="py-28 px-8 lg:px-16 bg-off-white" ref={ref as any}>
      <p className="text-[11px] tracking-[0.18em] uppercase text-accent mb-4 reveal">Pricing</p>
      <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-light text-ink mb-4 reveal">
        Every installation is unique.
      </h2>
      <p className="text-sm text-muted mb-16 max-w-xl reveal">
        Pricing depends on screen size, pixel pitch, site conditions, and installation complexity.
        Contact our authorised distributor for a tailored quotation — typically delivered within 24 hours.
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
                ['Pixel Density',    o.density],
                ['Transparency',    o.transparency],
                ['Brightness',      o.brightness],
                ['Optimal Viewing', o.viewing],
                ['Refresh Rate',    '≥ 3,840 Hz'],
                ['LED Lifespan',    '≥ 100,000 hrs'],
              ].map(([k, v]) => (
                <li
                  key={k}
                  className={`flex justify-between border-b pb-2 ${o.featured ? 'border-white/10' : 'border-black/8'}`}
                >
                  <span className={o.featured ? 'text-white/50' : 'text-muted'}>{k}</span>
                  <span className={`font-medium ${o.featured ? 'text-white/90' : ''}`}>{v}</span>
                </li>
              ))}
            </ul>

            <div className={`font-serif text-2xl mb-1 ${o.featured ? 'text-white' : 'text-ink'}`}>
              Price on Request
            </div>
            <p className={`text-xs mb-8 ${o.featured ? 'text-white/50' : 'text-muted'}`}>
              Custom quotation · 24-hour turnaround
            </p>

            <Link
              href="#contact"
              className={`inline-block text-xs uppercase pb-0.5 border-b transition-colors no-underline ${o.featured ? 'text-accent border-accent hover:text-white hover:border-white' : 'text-ink border-ink hover:text-brand hover:border-brand'}`}
            >
              Get a Quote →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-white border border-black/8 reveal">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-medium text-ink mb-2 uppercase text-[11px] tracking-wider">Factors that affect price</h4>
            <ul className="text-muted space-y-1">
              <li>Screen size and total area (sqm)</li>
              <li>Pixel pitch selection</li>
              <li>Site access and installation complexity</li>
              <li>Number of screens / locations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-ink mb-2 uppercase text-[11px] tracking-wider">What&apos;s included</h4>
            <ul className="text-muted space-y-1">
              <li>LED film screen modules</li>
              <li>Novastar control system</li>
              <li>All cables and accessories</li>
              <li>Installation, testing &amp; commissioning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-ink mb-2 uppercase text-[11px] tracking-wider">Lead time</h4>
            <ul className="text-muted space-y-1">
              <li>Quotation: within 24 hours</li>
              <li>Production: 20–25 working days</li>
              <li>Delivery: to site</li>
              <li>Warranty: 1 year, local support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
