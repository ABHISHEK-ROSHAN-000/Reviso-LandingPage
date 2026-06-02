export function CTA() {
  return (
    <section id="download" className="relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(70,90,255,0.30),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(123,92,255,0.22),transparent_50%),radial-gradient(ellipse_at_left,rgba(18,214,255,0.16),transparent_50%),radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60">[ 05 / Begin ]</p>
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance text-foreground/95 sm:text-5xl lg:text-6xl">
          Start Learning Smarter
          <br />
          with AI Flashcards
          <br />
          you <span className="underline decoration-foreground/30 underline-offset-[6px]">never forget</span>.
        </h2>

        <div className="mt-14 flex flex-col gap-6 sm:flex-row">
          <a href="#download" className="group flex items-center gap-3 border-b border-foreground/40 pb-1.5 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-foreground">
            <span>Coming soon on Android</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

        </div>
      </div>
    </section>
  )
}
