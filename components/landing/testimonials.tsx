const quotes = [
  { text: "I stopped re-reading my notes a month ago. Reviso just asks me what matters until I know it. Best AI study app I've used.", name: "Maya R.", role: "Med student, year 3" },
  { text: "It's the first study tool that doesn't feel like another app I have to manage. The spaced repetition just works in the background.", name: "Daniel K.", role: "PhD candidate, Linguistics" },
  { text: "I dropped three flashcard apps for this. The AI-generated cards are actually thoughtful — not just sentence chopping. Perfect for exam prep.", name: "Priya S.", role: "Bar exam prep" },
]

export function Testimonials() {
  return (
    <section className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ 03 / Field notes ]</p>
        <h2 className="mb-20 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
          From the people who <span className="underline decoration-foreground/30 underline-offset-[6px]">use it</span>.
        </h2>

        <div className="grid gap-px bg-border/50 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure key={i} className="flex flex-col justify-between gap-10 bg-background p-8 lg:p-10">
              <blockquote className="text-lg leading-relaxed text-foreground/90 lg:text-xl">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                <div className="text-foreground/80">{q.name}</div>
                <div className="mt-1">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
