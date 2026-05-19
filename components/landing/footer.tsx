import Link from "next/link"

const groups = [
  { label: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { label: "Company", links: ["About", "Manifesto", "Careers", "Press"] },
  { label: "Resources", links: ["Docs", "Blog", "Support", "Contact"] },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-foreground">
                  <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <span className="font-serif text-lg italic">Reviso</span>
            </Link>
            <p className="mt-6 max-w-sm font-serif text-lg italic leading-relaxed text-muted-foreground">
              Reviso - AI-powered flashcard app for smarter studying. Remember what you learn.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.label}>
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">{g.label}</p>
              <ul className="flex flex-col gap-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-sm text-foreground/70 transition-colors hover:text-foreground">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-border/50 pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50 md:flex-row md:items-center">
          <span>© 2026 Reviso Labs, Inc.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Privacy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">EN / AUTO</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
