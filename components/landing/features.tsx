import { Sparkles, Brain, BarChart3, Zap } from "lucide-react"

const features = [
  { num: "01", icon: Sparkles, title: "AI Card Generation", desc: "Paste notes, PDFs, or articles. Reviso extracts what matters and writes the cards for you." },
  { num: "02", icon: Brain, title: "Spaced Repetition", desc: "Cards resurface exactly when you're about to forget them. Memory, on autopilot." },
  { num: "03", icon: BarChart3, title: "Progress Insight", desc: "See what you've mastered and where you're slipping. Quiet analytics, no noise." },
  { num: "04", icon: Zap, title: "Adaptive Review", desc: "Sessions tune themselves to your weak spots. Less time, more retention." },
]

export function Features() {
  return (
    <section id="features" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ 01 / Features ]</p>
            <h2 className="font-serif text-4xl italic leading-tight text-balance sm:text-5xl lg:text-6xl">
              A quieter way to <span className="underline decoration-foreground/30 underline-offset-[6px]">remember</span>.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {"Built for students, researchers, and anyone who's tired of forgetting things they once knew."}
          </p>
        </div>

        <div className="grid gap-px bg-border/50 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.num} className="group relative flex flex-col gap-8 bg-background p-8 transition-colors hover:bg-card lg:p-12">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40">{f.num}</span>
                <f.icon className="h-5 w-5 text-foreground/60 transition-colors group-hover:text-primary" strokeWidth={1.25} />
              </div>
              <div>
                <h3 className="font-serif text-2xl italic lg:text-3xl">{f.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
