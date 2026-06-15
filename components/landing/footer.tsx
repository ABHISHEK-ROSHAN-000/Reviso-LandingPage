import Image from "next/image"
import Link from "next/link"

const links = [
  { label: "Features", href: "#features" },

  { label: "FAQ", href: "#faq" },
  { label: "Download", href: "#download" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Reviso-landingPage/Logo.png"
                alt="Reviso AI flashcard study app logo"
                width={80}
                height={32}
                className="block h-8 w-auto sm:h-10 select-none"
              />
              <Image
                src="/Reviso-landingPage/Branding.png"
                alt="Reviso AI-powered flashcard learning app"
                width={120}
                height={24}
                className="block h-3.5 w-auto sm:h-5 select-none"
              />
            </Link>
            <span className="hidden h-8 w-px bg-border/50 md:block" />
            <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">
              Turn notes and images into smart flashcards.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm text-foreground/70 transition-colors hover:text-foreground">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/50 pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50 md:flex-row md:items-center">
          <span>© 2026 Reviso</span>
          <div className="flex gap-6">
            <Link href="/privacy.html" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms.html" className="hover:text-foreground">Terms</Link>
            <Link href="/delete-account.html" className="hover:text-foreground">Delete Account</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
