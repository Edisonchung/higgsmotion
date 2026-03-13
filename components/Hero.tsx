'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
const STATS = [{ num: '>=95%', label: 'Transparency' },{ num: '2.5mm', label: 'Film Thickness' },{ num: '4,000', label: 'cd/m2 Brightness' },{ num: '50K hrs', label: 'Service Life' }]
export default function Hero() {
  const dotsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const c = dotsRef.current; if (!c) return
    const colors = ['#C9A96E','#E8D5B0','#FFFFFF','#8B2500']
    for (let i=0;i<80;i++) {
      const d=document.createElement('div'); d.className='led-dot'
      d.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*4)]};animation:ledBlink ${1.5+Math.random()*3}s ${Math.random()*3}s ease-in-out infinite`
      c.appendChild(d)
    }
    return () => { c.innerHTML='' }
  }, [])
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col justify-end px-8 lg:px-16 pt-36 pb-20">
        <h1 className="font-serif text-[clamp(48px,6vw,100px)] font-light leading-[1.05] text-ink mb-8">
          Invisible by day.<br /><em className="italic text-brand">Brilliant</em> by night.
        </h1>
        <p className="text-base font-light leading-[1.75] text-muted max-w-md mb-12">HiggsMotion Crystal LED Film transforms any glass surface into a vivid high-impact digital display.</p>
        <div className="flex items-center gap-8">
          <Link href="#products" className="bg-ink text-off-white text-xs uppercase px-10 py-4 hover:bw-brand transition-colors no-underline">Explore Products</Link>
          <Link href="#contact" className="text-xs uppercase text-ink border-b border-ink pb-0.5 hover:text-brand hover:border-brand transition-colors no-underline">Request Proposal</Link>
        </div>
      </div>
      <div className="relative min-h-[60vh] lg:min-h-full bg-ink overflow-hidden">
        <div className="screen-grid" />
        <div ref={dotsRef} className="absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-10">
            <div className="font-serif text-[64px] font-light text-white mb-3 glow-text">HiggsMotion</div>
            <p className="text-xs uppercase text-white/40">Crystal LED Film Display System</p>
          </div>
        </div>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center z-20">
          {STATS.map((s,i) => (
            <div key={s.label} className={`text-center px-8 ${i<STATS.length-1?'border-r border-white/15':''}`}>
              <span className="font-serif text-[32px] font-light text-accent block leading-none">{s.num}</span>
              <span className="text-[10px] uppercase text-white/50 block mt-1.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
