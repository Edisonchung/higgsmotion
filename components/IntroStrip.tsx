export default function IntroStrip() {
  return (
    <div className="bg-ink py-16 px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3">
      {[
        { label: 'Product Line',  value: 'HiggsMotion\nLED Film Series' },
        { label: 'Technology',    value: 'SMD RGB+IC\nCrystal Transparent' },
        { label: 'Distributed by',value: 'EMI Automation\nSdn Bhd' },
      ].map((item,i) => (
        <div key={item.label} className={`text-center py-8 px-6 ${i<2?'md:border-r border-white/10':''}`}>
          <span className="text-[10px] uppercase text-accent block mb-3">{item.label}</span>
          <div className="font-serif text-2xl font-light text-white leading-snug whitespace-pre-line">{item.value}</div>
        </div>
      ))}
    </div>
  )
}
