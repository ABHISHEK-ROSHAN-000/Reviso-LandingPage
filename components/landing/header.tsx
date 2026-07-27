import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "NEET", href: "/for/neet-flashcards" },
  { label: "JEE", href: "/for/jee-flashcards" },
  { label: "UPSC", href: "/for/upsc-flashcards" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/Logo.png"
            alt="Reviso AI flashcard study app logo"
            width={80}
            height={32}
            className="block h-8 w-auto sm:h-10 select-none"
            priority
          />
          <Image
            src="/Branding.png"
            alt="Reviso AI-powered flashcard learning app branding"
            width={120}
            height={24}
            className="hidden sm:block h-3.5 w-auto select-none"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-foreground/70">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://play.google.com/store/apps/details?id=com.reviso.app"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 shrink-0"
        >
          Download
        </a>
      </div>
    </header>
  )
}
