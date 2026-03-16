export default function WhySection() {
  return (
    <section id="why" className="bg-[#0F172A] text-white py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.18em] uppercase text-accent mb-6">
          Why HiggsMotion
        </p>
        <h2 className="font-serif text-[clamp(32px,3.6vw,48px)] font-light mb-12">
          LED glass that finally feels made for architects, not ad tech.
        </h2>
        <div className="grid gap-10 md:grid-cols-3 text-sm leading-relaxed">
          <div>
            <h3 className="font-medium mb-3 text-[13px] tracking-[0.14em] uppercase text-accent">
              Clarity at any distance
            </h3>
            <p className="text-white/80">
              Three calibrated pixel pitches tuned for storefronts, atriums, and large-format façades.
              P4 reads cleanly from 4 metres; P10 commands attention across 10 metres or more.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3 text-[13px] tracking-[0.14em] uppercase text-accent">
              Architecture-first engineering
            </h3>
            <p className="text-white/80">
              Slimline framing, high transparency, and neutral off-state glass keep your façade honest
              to the original design language—even when the display is dark.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-3 text-[13px] tracking-[0.14em] uppercase text-accent">
              Operationally simple
            </h3>
            <p className="text-white/80">
              Solid-state electronics, remote health monitoring, and replaceable modules mean your
              operations team treats the wall like infrastructure, not an experiment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
