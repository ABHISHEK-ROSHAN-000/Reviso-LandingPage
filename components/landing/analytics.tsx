import { BarChart3, PieChart, CalendarDays, Target } from "lucide-react"

const insights = [
  {
    icon: PieChart,
    title: "Mastery Overview",
    desc: "See exactly what you've mastered, what's still learning, and what's due for review — all in one donut chart.",
  },
  {
    icon: BarChart3,
    title: "Weekly Progress",
    desc: "Track daily review counts with color-coded bars. Green means goal met, red means you fell short.",
  },
  {
    icon: CalendarDays,
    title: "Monthly Heatmap",
    desc: "A full-month view of your study consistency. Spot gaps and build streaks that stick.",
  },
  {
    icon: Target,
    title: "Daily Goals",
    desc: "Set your target: Casual (5/day), Regular (10/day), Serious (20/day), or Intense (50/day).",
  },
]

export function Analytics() {
  return (
    <section id="analytics" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ Analytics ]</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              Know what you know with{" "}
              <span className="underline decoration-foreground/30 underline-offset-[6px]">data-driven insights</span>.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Progress tracking that actually helps. Not just numbers — actionable intelligence for smarter study sessions.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
          {insights.map((insight) => (
            <div key={insight.title} className="flex flex-col gap-4 bg-background p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5">
                  <insight.icon className="h-5 w-5 text-foreground/60" strokeWidth={1.25} />
                </div>
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.02em]">{insight.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{insight.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 rounded-xl border border-border/50 bg-card p-6 lg:gap-10 lg:p-8">
          {[
            { label: "Mastered", color: "bg-emerald-500", pct: "68%" },
            { label: "Learning", color: "bg-amber-500", pct: "22%" },
            { label: "New", color: "bg-blue-500", pct: "10%" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${item.color}`} />
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-semibold tracking-[-0.03em]">{item.pct}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
