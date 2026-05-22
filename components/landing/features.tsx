import { Sparkles, Brain, BarChart3, Zap, CheckCircle } from "lucide-react"

const features = [
  { num: "01", icon: Sparkles, title: "AI Flashcard Generation", desc: "Paste notes, PDFs, or articles. Reviso AI extracts key concepts and creates optimized flashcards automatically for faster learning.", badge: "Save hours of manual work" },
  { num: "02", icon: Brain, title: "Spaced Repetition System", desc: "Cards resurface exactly when you're about to forget them. Our spaced repetition algorithm maximizes memory retention on autopilot.", badge: "Anki-compatible FSRS" },
  { num: "03", icon: BarChart3, title: "Study Progress Analytics", desc: "Track what you've mastered and identify weak areas. Data-driven study insights help you focus on what matters most.", badge: "Heatmaps & charts" },
  { num: "04", icon: Zap, title: "Adaptive Review Sessions", desc: "Study sessions automatically adjust to your weak spots. Spend less time studying while achieving better knowledge retention.", badge: "AI-optimized pacing" },
]

export function Features() {
  return (
    <section id="features" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ 01 / Features ]</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              A quieter way to <span className="underline decoration-foreground/30 underline-offset-[6px]">remember</span>.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            {"Built for students, researchers, and anyone who's tired of forgetting things they once knew."}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.num} className="group relative flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-card lg:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5">
                  <f.icon className="h-5 w-5 text-foreground/60" strokeWidth={1.25} />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40">{f.num}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] lg:text-2xl">{f.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
              <div className="flex items-center gap-2 border-t border-border/50 pt-5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" strokeWidth={1.5} />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-400/80">{f.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
