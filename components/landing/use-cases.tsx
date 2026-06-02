import { Stethoscope, Languages, GraduationCap, Briefcase } from "lucide-react"

const cases = [
  {
    icon: Stethoscope,
    title: "For Med Students",
    desc: "Memorize anatomy, pharmacology, and clinical guidelines with AI flashcards. Turn lecture slides into review decks in seconds.",
  },
  {
    icon: Languages,
    title: "For Language Learners",
    desc: "Build vocabulary decks from any text. Spaced repetition ensures words stick. AI scoring checks your written translations.",
  },
  {
    icon: GraduationCap,
    title: "For Exam Prep",
    desc: "Bar exam, MCAT, GRE, SAT — turn practice questions into flashcards. AI identifies your weak areas and focuses your review.",
  },
  {
    icon: Briefcase,
    title: "For Professionals",
    desc: "Certifications, continuing education, or learning new skills. Import and generate cards for any professional material.",
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ Use cases ]</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              Built for{" "}
              <span className="underline decoration-foreground/30 underline-offset-[6px]">every kind</span> of learner.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Whether you are studying for finals, learning a language, or earning a certification — Reviso adapts to how you learn.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/50 bg-border/50 md:grid-cols-2">
          {cases.map((c) => (
            <div key={c.title} className="flex flex-col gap-5 bg-background p-8 lg:p-10">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5">
                <c.icon className="h-5 w-5 text-foreground/60" strokeWidth={1.25} />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
