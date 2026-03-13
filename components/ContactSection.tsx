import Link from 'next/link'
const CONTACTQ = [{ label: 'Authorised Distributor', value: 'EMI Automation Sdn Bhd' },{ label: 'Email', value: 'info@emiautomation.com' },{ label: 'Phone', value: '+601 7807 0817' },{ label: 'Web', value: 'emiautomation.com' }]
export default function ContactSection() {
  return (
    <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">
      <div className="bg-warm-white px-8 lg:px-16 py-24 flex flex-col justify-center">
        <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-light text-ink mb-6">Ready to bring HiggsMotion to your space?</h2>
        <p className="text-sm font-light leading-[1.8] text-muted max-w-sm mb-10">Contact our authorised distributor EMI Automation for a tailored proposal.</p>
        <Link href="mailto:info@emiautomation.com" className="bg-ink text-off-white text-xs uppercase px-10 py-4 hover:bg-brand transition-colors no-underline self-start">Send Enquiry</Link>
      </div>
      <div className="bg-ink px-8 lg:px-16 py-24 flex flex-col items-center justify-center gap-8">
        {CONTACTQ.map((c,i) => (
          <div key={c.label} className="text-center w-full">
            <span className="text-[10px] uppercase text-accent block mb-2">{c.label}</span>
            <div className="font-serif text-xl font-light text-white">{c.value}</div>
            {i<CONTACTQ.length-1&&<div className="w-10 h-px bg-white/15 mx-auto mt-8" />}
          </div>
        ))}
      </div>
    </div>
  )
}
