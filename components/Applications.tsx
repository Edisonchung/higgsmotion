'use client'
import { useEffect, useRef } from 'react'

const APPLICATIONS = [
  {
    id: '01',
    title: 'Commercial Windows',
    subtitle: 'Retail & Chain Stores',
    desc: 'Transform storefront glass into a dynamic promotional display. Ideal for fashion, F&B, telco, electronics, and chain store windows — no frame, no obstruction, full transparency when off.',
  },
  {
    id: '02',
    title: 'Shopping Mall Atria',
    subtitle: 'Guardrails & Partitions',
    desc: 'Glass guardrails on upper floors and open atrium partitions become full-colour display surfaces — without blocking sightlines or affecting building lighting.',
  },
  {
    id: '03',
    title: 'Business Entrances',
    subtitle: 'Hotels, Offices & Lobbies',
    desc: 'Automatic glass doors and lobby windows at hotels, office buildings, airports, and transit hubs. Welcoming visuals without compromising transparency or natural light.',
  },
  {
    id: '04',
    title: 'Glass Curtain Walls',
    subtitle: 'Architectural Façades',
    desc: 'Large-scale façade installations for shopping centres, entertainment venues, hotels, and business parks. Maximum visual impact from street level, maintains building aesthetics.',
  },
  {
    id: '05',
    title: 'Interior Partitions',
    subtitle: 'Offices & Showrooms',
    desc: 'Glass partition walls inside enterprises, automotive showrooms, boutiques, franchises, and exhibition centres — branded without renovation.',
  },
  {
    id: '06',
    title: 'Exhibition Displays',
    subtitle: 'Events & Launches',
    desc: 'Temporary or permanent installations for trade shows, product launches, car shows, investment roadshows, and real estate openings. Lightweight and fast to deploy.',
  },
  {
    id: '07',
    title: 'Commercial Escalators & Lifts',
    subtitle: 'Transit Spaces',
    desc: 'Escalator glass panels and observation lift shafts in business centres, malls, hotels, and airports. High-dwell-time audiences, maximum exposure.',
  },
  {
    id: '08',
    title: 'Ceiling Hanging Displays',
    subtitle: 'Atriums & Large Venues',
    desc: 'Free-hanging transparent LED screens in convention centres, showrooms, and large retail atria. Visible from multiple directions, no floor space required.',
  },
]

const CASES = [
  { venue: 'Beauty & Wellness Centre',        country: 'Shandong, China',   date: 'May 2024',  spec: 'P8 · 240×960mm · 11.52 sqm',  type: 'Commercial Window'  },
  { venue: 'International Automotive Expo',   country: 'Beijing, China',    date: 'May 2024',  spec: 'P10 · 240×1000mm · 12 sqm',   type: 'Exhibition Display' },
  { venue: 'Urban Metro Station Entrance',    country: 'Shenzhen, China',   date: 'Jun 2024',  spec: 'P8 · 240×1400mm · 26.88 sqm', type: 'Glass Curtain Wall' },
  { venue: 'Science Innovation Centre',       country: 'Changchun, China',  date: 'Aug 2024',  spec: 'P6 · 240×1200mm · 200 sqm',   type: 'Interior Partition' },
  { venue: 'Tourism & Cultural Centre',       country: 'Hunan, China',      date: 'Oct 2024',  spec: 'P8 · 240×1200mm · 28 sqm',    type: 'Exhibition Display' },
  { venue: 'Corporate Technology Showroom',   country: 'Beijing, China',    date: 'Dec 2024',  spec: 'P6 · 240×1500mm · 60 sqm',    type: 'Glass Curtain Wall' },
]

export default function Applications() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      e => e.forEach(x => x.isIntersecting && x.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="applications" className="py-28 px-8 lg:px-16 bg-[#FAF8F5]" ref={ref as any}>
      <p className="text-[11px] tracking-[0.18em] uppercase text-accent mb-4 reveal">Applications</p>
      <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-light text-ink mb-4 reveal">
        Every glass surface is a canvas.
      </h2>
      <p className="text-sm text-muted mb-20 max-w-xl reveal">
        HiggsMotion Crystal LED Film installs on any flat glass surface — no frame, no structural changes.
        From single shopfront windows to large-scale architectural façades.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8 mb-24 reveal">
        {APPLICATIONS.map((a) => (
          <div key={a.id} className="bg-white p-8 hover:bg-[#FAF8F5] transition-colors">
            <span className="font-serif text-[40px] font-light text-black/10 block leading-none mb-4">
              {a.id}
            </span>
            <h3 className="font-serif text-lg font-light text-ink mb-1">{a.title}</h3>
            <p className="text-[10px] uppercase text-accent mb-4">{a.subtitle}</p>
            <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-[11px] tracking-[0.18em] uppercase text-accent mb-6 reveal">
        Reference Installations
      </p>
      <h3 className="font-serif text-2xl font-light text-ink mb-10 reveal">
        Deployed across retail, architecture, and events.
      </h3>
      <div className="overflow-x-auto reveal">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-ink text-white">
              {['Venue', 'Location', 'Date', 'Specification', 'Application'].map(h => (
                <th key={h} className="px-5 py-4 text-left text-xs uppercase whitespace-nowrap font-normal tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CASES.map((c, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
                <td className="px-5 py-4 font-medium">{c.venue}</td>
                <td className="px-5 py-4 text-muted">{c.country}</td>
                <td className="px-5 py-4 text-muted">{c.date}</td>
                <td className="px-5 py-4 font-mono text-xs text-muted">{c.spec}</td>
                <td className="px-5 py-4">
                  <span className="text-[10px] uppercase bg-ink/8 text-ink px-2 py-1 whitespace-nowrap">
                    {c.type}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted italic reveal">
        Reference installations are indicative of product capabilities across similar applications.
        Custom sizes available for all scenarios — contact us for a site-specific proposal.
      </p>
    </section>
  )
}
