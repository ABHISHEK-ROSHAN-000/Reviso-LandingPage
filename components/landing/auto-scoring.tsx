import { CheckCircle, Edit3, BrainCircuit, ArrowRight } from "lucide-react"
import Image from "next/image"

const steps = [
  { icon: Edit3, label: "Type your answer" },
  { icon: BrainCircuit, label: "AI scores it" },
  { icon: CheckCircle, label: "Auto rating" },
]

export function AutoScoring() {
  return (
    <section id="auto-scoring" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ Feature ]</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              AI that{" "}
              <span className="underline decoration-foreground/30 underline-offset-[6px]">scores your answers</span>.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            No more guessing if you got it right. Reviso AI evaluates your written responses automatically.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4">
              {steps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card">
                      <s.icon className="h-5 w-5 text-foreground/70" strokeWidth={1.25} />
                    </div>
                    <span className="max-w-20 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-foreground/30" strokeWidth={1} />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-6">
              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400/80">Live demo</span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">What is the capital of France?</p>
                <div className="rounded-lg border border-border/50 bg-background p-3">
                  <p className="text-sm text-foreground/80">Paris is the capital city of France.</p>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-emerald-400">92% match · Auto-rated: Good</span>
                </div>
              </div>

              <div className="rounded-xl border border-border/50 bg-card p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400/80">Manual fallback</span>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">
                  No internet? AI credits used up? No problem. Rate your recall the traditional way.
                </p>
                <div className="flex gap-2">
                  {["Again", "Hard", "Good", "Easy"].map((label, i) => {
                    const colors = ["bg-red-500/15 text-red-400", "bg-orange-500/15 text-orange-400", "bg-blue-500/15 text-blue-400", "bg-emerald-500/15 text-emerald-400"]
                    return (
                      <div key={label} className={`rounded-lg px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] ${colors[i]}`}>
                        {label}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-[min(80vw,320px)]">
              <div className="absolute inset-0 translate-y-6 rounded-[3rem] bg-black/55 blur-2xl" />
              <div className="relative overflow-hidden">
                <Image
                  src="/Reviso-landingPage/reviso-reviewscreen-mockup.png"
                  // src="reviso-reviewscreen-mockup.png"
                  alt="Reviso AI auto-scoring review session"
                  width={320}
                  height={640}
                  className="block h-auto w-full select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
