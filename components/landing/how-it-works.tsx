import Image from "next/image"

const steps = [
  { num: "01", title: "Drop in your material", desc: "Notes, slides, PDFs, articles, or a single sentence. Reviso reads it all." },
  { num: "02", title: "AI writes your cards", desc: "Clean question-answer pairs, organized by topic. Edit anything, anytime." },
  { num: "03", title: "Review and remember", desc: "Short daily sessions tuned to your memory. Watch retention climb." },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ 02 / How it works ]</p>
            <h2 className="font-serif text-4xl italic leading-tight text-balance sm:text-5xl lg:text-6xl">
              Three steps from <span className="underline decoration-foreground/30 underline-offset-[6px]">page</span> to{" "}
              <span className="underline decoration-foreground/30 underline-offset-[6px]">memory</span>.
            </h2>

            <div className="mt-16 flex flex-col">
              {steps.map((s, i) => (
                <div key={s.num} className={`flex gap-6 py-8 ${i !== 0 ? "border-t border-border/50" : ""}`}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/40">{s.num}</span>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl italic">{s.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/50 bg-card">
              <Image src="/flashcard-app-mockup.svg" alt="Reviso flashcard app shown on a phone" fill className="object-cover" />
            </div>
            <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
              <span>FIG. 01</span>
              <span>Daily Review · iOS</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
