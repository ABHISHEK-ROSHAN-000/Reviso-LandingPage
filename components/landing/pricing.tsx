import { Check } from "lucide-react"

const tiers = [
  { num: "01", name: "Free", price: "$0", cadence: "forever", desc: "Start learning with AI flashcards for free. Everything you need to begin studying smarter.", features: ["100 credits / day", "Refreshes every 24hrs", "Spaced repetition system", "Contains ads"], cta: "Coming soon on Android" },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ 04 / Pricing ]</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              Honest, <span className="underline decoration-foreground/30 underline-offset-[6px]">simple</span> pricing.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Get started for free — no credit card required.
          </p>
        </div>

        <div className="mx-auto grid max-w-md gap-px bg-border/50 md:grid-cols-1">
          {tiers.map((t) => (
            <div key={t.num} className="flex flex-col gap-10 p-8 lg:p-10 bg-card">
              <div className="flex items-start justify-between">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40">{t.num} / {t.name}</h3>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-semibold tracking-[-0.04em] lg:text-6xl">{t.price}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">{t.cadence}</span>
                </div>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>

              <ul className="flex flex-col gap-3 border-t border-border/50 pt-8">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/40" strokeWidth={1.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#download" className="group mt-auto flex items-center gap-3 border-b border-foreground/30 pb-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground transition-colors hover:border-foreground">
                <span>{t.cta}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
