import Image from "next/image"
import { useId } from "react"

export function CTA() {
  const backgroundId = useId();

  return (
    <section id="download" className="relative overflow-hidden border-t border-border/50">
      <div className="absolute inset-0">
        <Image
          src="/starry-night.svg"
          alt=""
          fill
          className="object-cover opacity-60"
          aria-hidden="true"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.7)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center lg:py-44">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60">[ 05 / Begin ]</p>
        <h2 className="font-serif text-4xl italic leading-tight text-balance text-foreground/95 sm:text-5xl lg:text-6xl">
          The next thing you read
          <br />
          could be the next thing
          <br />
          you <span className="underline decoration-foreground/30 underline-offset-[6px]">never forget</span>.
        </h2>

        <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row">
          <a href="#" className="group flex items-center gap-3 border-b border-foreground/40 pb-1.5 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-foreground">
            <span>Get Reviso free</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#pricing" className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/60 transition-colors hover:text-foreground">
            See pricing
          </a>
        </div>
      </div>
    </section>
  )
}
