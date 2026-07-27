import Link from "next/link"

const jokes = [
  "This page must've been sitting at the back of the class.",
  "Guess this URL didn't make it into long-term memory.",
  "Even this page forgot to exist. Classic forgetting curve.",
  "404: Active recall failed. Try again later?",
  "This page is like last month's revision — completely gone.",
]

export default function NotFound() {
  const joke = jokes[Math.floor(Math.random() * jokes.length)]

  return (
    <div className="relative isolate min-h-[85vh] overflow-hidden bg-[#050505] text-white flex flex-col items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(70,90,255,0.18),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-40 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.32em] text-white/30">
          <span className="inline-block h-px w-8 bg-white/20" />
          404
          <span className="inline-block h-px w-8 bg-white/20" />
        </div>

        <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          Page overload.
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-white/60 italic">
          &ldquo;{joke}&rdquo;
        </p>

        <p className="mt-6 text-sm leading-relaxed text-white/50 max-w-md">
          The URL you typed didn&apos;t pass the active recall test.
          Maybe it was never encoded — or it got a &quot;Again&quot; rating
          and drifted into the ether.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Start fresh
          </Link>
          <Link
            href="/for/neet-flashcards"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-white/10"
          >
            NEET flashcards
          </Link>
          <Link
            href="/for/jee-flashcards"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-white/10"
          >
            JEE flashcards
          </Link>
          <Link
            href="/for/upsc-flashcards"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-white/10"
          >
            UPSC flashcards
          </Link>
        </div>
      </div>
    </div>
  )
}
