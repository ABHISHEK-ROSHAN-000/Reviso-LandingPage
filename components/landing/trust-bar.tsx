import { Star, Users, Brain, TrendingUp } from "lucide-react"

const stats = [
  { icon: Star, label: "App Store Rating", value: "4.8", suffix: "/5" },
  { icon: Users, label: "Active Learners", value: "50K+", suffix: "" },
  { icon: Brain, label: "Cards Generated", value: "2M+", suffix: "" },
  { icon: TrendingUp, label: "Avg. Retention", value: "92%", suffix: "" },
]

export function TrustBar() {
  return (
    <section className="relative border-t border-border/50 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ Trusted by learners ]</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              Used by thousands to{" "}
              <span className="underline decoration-foreground/30 underline-offset-[6px]">study smarter</span>.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {"Students, professionals, and lifelong learners trust Reviso to retain what they learn."}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-4 bg-background p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
                  <s.icon className="h-5 w-5 text-foreground/60" strokeWidth={1.25} />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">{s.value}</span>
                  {s.suffix && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {s.suffix}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
