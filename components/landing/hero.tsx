import React from "react"
import Image from "next/image"

const logos = ["scale", "AT&T", "replit", "Fidelity", "Windsurf", "dleam", "Laravel"]

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,90,255,0.22),transparent_34%),radial-gradient(circle_at_20%_40%,rgba(18,214,255,0.12),transparent_22%),radial-gradient(circle_at_80%_42%,rgba(123,92,255,0.18),transparent_24%),linear-gradient(to_bottom,#080808_0%,#040404_55%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(0,0,0,0.38))]" />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_65%)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />

      {/* Background base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(72,85,255,0.20),transparent_28%),radial-gradient(circle_at_20%_40%,rgba(34,211,238,0.12),transparent_18%),radial-gradient(circle_at_80%_42%,rgba(168,85,247,0.18),transparent_22%),linear-gradient(to_bottom,#070707_0%,#040404_55%,#050505_100%)]" />

      {/* Faint grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.40] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_28%,transparent_78%)]" />

      {/* Orb left */}
      <div className="pointer-events-none absolute -left-28 top-36 h-72 w-72 rounded-full bg-violet-500/35 blur-3xl" />

      {/* Orb right */}
      <div className="pointer-events-none absolute -right-24 top-56 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl" />

      {/* Orb bottom left */}
      <div className="pointer-events-none absolute left-12 bottom-16 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Small floating glow */}
      <div className="pointer-events-none absolute left-1/2 top-48 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-400/35 blur-2xl" />

      <header className="relative z-20 mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10 bg-transparent">


        <div className="flex items-center gap-3 text-sm font-medium tracking-[-0.02em] text-white/92">
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
            className="block h-3.5 w-auto sm:h-5 select-none"
            priority
          />
        </div>

        {/* <nav className="hidden items-center gap-10 text-[13px] text-white/70 md:flex">
    <a className="transition-colors hover:text-white" href="#products">Products</a>
    <a className="transition-colors hover:text-white" href="#solutions">Solutions</a>
    <a className="transition-colors hover:text-white" href="#pricing">Pricing</a>
  </nav> */}

        <div className="flex items-center gap-3 sm:flex">
          {/* <a
      href="#login"
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 backdrop-blur-md transition hover:bg-white/10"
    >
      Log in
    </a> */}


          <a
            href="#download"
            className="rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Coming soon on Android
          </a>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center px-5 pb-10 pt-15 sm:px-8 sm:pt-30 lg:px-10 lg:pb-14">
        <div className="max-w-5xl text-center">
          {/* <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/45">
            AI-powered learning companion
          </p> */}

          <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[6.25rem]">
            Boost Your
            Learning with <span className="text-cyan-400">AI Flashcards</span> <br className="hidden sm:block" />
            with Reviso.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-6 text-white/72 sm:text-base">
            Turn images, notes, and lessons into smart flashcards, active recall, and study plans that fit the way you learn. The best AI-powered study app for students.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#get-started"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Coming soon on Android
            </a>
            {/* <a
              href="#how-it-works"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/88 backdrop-blur-md transition hover:bg-white/10"
            >
              See how it works
            </a> */}
          </div>
        </div>

        {/* Visual stack */}
        <div className="relative mt-14 w-full max-w-6xl lg:mt-16">
          {/* Glow / beam */}
          <div className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.10)_12%,rgba(110,140,255,0.14)_24%,rgba(0,0,0,0)_66%)] blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-[140px] h-[300px] w-[120%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),rgba(255,255,255,0.08)_25%,rgba(255,255,255,0)_68%)] blur-[70px]" />

          {/* Floating cards */}
          {/* <div className="absolute left-0 top-20 hidden w-56 rounded-2xl border border-white/8 bg-white/8 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl md:block">
            <div className="mb-2 flex items-center gap-2 text-[11px] text-white/60">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              New study match
            </div>
            <div className="text-sm font-semibold text-white">Sr. Cloud Engineer</div>
            <p className="mt-2 text-xs leading-5 text-white/62">
              Personalized flashcards generated from your saved notes.
            </p>
            <button className="mt-4 rounded-full bg-white px-3 py-2 text-xs font-medium text-black">I&apos;m interested</button>
          </div> */}

          {/* <div className="absolute right-0 top-24 hidden w-56 rounded-2xl border border-white/8 bg-emerald-400/90 p-4 text-black shadow-2xl shadow-emerald-500/20 backdrop-blur-xl md:block">
            <div className="text-sm font-semibold">Join the app</div>
            <p className="mt-2 text-sm leading-5 text-black/80">1.8M active learners use Reviso daily.</p>
          </div> */}

          {/* <div className="absolute left-[16%] top-[360px] hidden max-w-[240px] rounded-2xl border border-white/8 bg-white/8 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block">
            <div className="flex items-center gap-2 text-xs text-white/65">
              <span className="rounded-md bg-violet-400/20 px-2 py-1 text-violet-200">Upload PDF</span>
              <span>Digest and annotate</span>
            </div>
          </div> */}

          {/* <div className="absolute right-[10%] top-[365px] hidden w-64 rounded-2xl border border-white/8 bg-white/8 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block">
            <div className="text-sm font-medium">Profile</div>
            <div className="mt-3 space-y-2 text-xs text-white/70">
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>Profile created</span>
                <span className="text-emerald-300">●</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>Total work experience</span>
                <span className="text-cyan-300">75%</span>
              </div>
            </div>
          </div> */}

          {/* Phone mockups */}
          <div className="relative mx-auto flex w-full max-w-7xl items-end justify-center gap-4 lg:gap-0">
            {/* Left mockup - hidden on mobile */}
              <div className="hidden lg:block relative w-[min(70vw,300px)] lg:w-[380px] -mr-10">
              <div className="absolute inset-0 translate-y-6 rounded-[3rem] bg-black/55 blur-2xl" />
              <div className="relative overflow-hidden">
                <Image
                  src="/reviso-homescreen-mockup-half-trans.png"
                  alt="Reviso AI flashcard study app with smart learning features"
                  width={320}
                  height={640}
                  className="block h-auto w-full select-none"
                  priority
                />
              </div>
            </div>

            {/* Center mockup */}
            <div className="relative z-20 w-[min(86vw,360px)] sm:w-[390px] lg:w-[420px]">
              <div className="absolute inset-0 translate-y-6 rounded-[3rem] bg-black/55 blur-2xl" />
              <div className="relative overflow-hidden">
                <Image
                  src="/reviso-homescreen-mockup-half-trans.png"
                  alt="Reviso AI flashcard study dashboard with spaced repetition and progress tracking"
                  width={320}
                  height={640}
                  className="block h-auto w-full select-none"
                  priority
                />
              </div>
            </div>

            {/* Right mockup - hidden on mobile */}
            <div className="hidden lg:block relative w-[min(70vw,300px)] lg:w-[380px] -ml-10">
              <div className="absolute inset-0 translate-y-6 rounded-[3rem] bg-black/55 blur-2xl" />
              <div className="relative overflow-hidden">
                <Image
                  src="/reviso-homescreen-mockup-half-trans.png"
                  alt="Reviso AI study dashboard for flashcard review and progress tracking"
                  width={320}
                  height={640}
                  className="block h-auto w-full select-none"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </section>
  )
}
