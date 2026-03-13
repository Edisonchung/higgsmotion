'use client'
import Link from 'next/link'
export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-6 bg-[rgba(247,244,239,0.85)] backdrop-blur-md border-b border-[rgba(14,14,14,0.08)]">
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-xl font-light tracking-[0.12em] uppercase text-ink">INHAUS</span>
        <div className="w-px h-4 bg-muted self-center" />
        <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-accent">HiggsMotion</span>
      </div>
      <ul className="hidden md:flex items-center gap-10 list-none">
        <li><Link href="#products" className="text-xs uppercase text-ink opacity-70 hover:opacity-100 no-underline">Products</Link></li>
        <li><Link href="#pricing" className="text-xs uppercase text-ink opacity-70 hover:opacity-100 no-underline">Pricing</Link></li>
        <li><Link href="#why" className="text-xs uppercase text-ink opacity-70 hover:opacity-100 no-underline">Why HiggsMotion</Link></li>
        <li><Link href="#contact" className="text-xs uppercase text-off-white bg-ink px-6 py-2.5 hover:bw-brand transition-colors no-underline">Request Proposal</Link></li>
      </ul>
    </nav>
  )
}
