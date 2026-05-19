import { Check } from "lucide-react"

const tiers = [
  { num: "01", name: "Free", price: "$0", cadence: "forever", desc: "For the curious. Everything you need to start remembering.", features: ["50 AI cards / month", "Spaced repetition", "Web & mobile", "Basic analytics"], cta: "Start free" },
  { num: "02", name: "Pro", price: "$9", cadence: "per month", desc: "For serious learners who study every day.", features: ["Unlimited AI cards", "Advanced review modes", "PDF & image import", "Detailed insights", "Priority support"], cta: "Go Pro", featured: true },
  { num: "03", name: "Team", price: "$24", cadence: "per user / month", desc: "For study groups, classes, and small teams.", features: ["Everything in Pro", "Shared decks", "Collaboration tools", "Admin dashboard", "Custom branding"], cta: "Contact us" },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ 04 / Pricing ]</p>
            <h2 className="font-serif text-4xl italic leading-tight text-balance sm:text-5xl lg:text-6xl">
              Honest, <span className="underline decoration-foreground/30 underline-offset-[6px]">simple</span> pricing.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Start free. Upgrade only when Reviso has earned a place in your routine.
          </p>
        </div>

        <div className="grid gap-px bg-border/50 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.num} className={`flex flex-col gap-10 p-8 lg:p-10 ${t.featured ? "bg-card" : "bg-background"}`}>
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40">{t.num} / {t.name}</span>
                {t.featured && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">Most chosen</span>
                )}
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl italic lg:text-6xl">{t.price}</span>
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

              <a href="#" className="group mt-auto flex items-center gap-3 border-b border-foreground/30 pb-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground transition-colors hover:border-foreground">
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
