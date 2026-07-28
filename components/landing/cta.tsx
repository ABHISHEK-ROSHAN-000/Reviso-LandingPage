import { ArrowRight, Zap } from "lucide-react"

export function CTA() {
  return (
    <section id="download" className="border-t border-border/50 px-5 py-5 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#dfff8f] px-6 py-20 text-center text-[#11140e] sm:px-10 lg:py-28">
        <div className="absolute inset-0 opacity-50 [background-image:repeating-radial-gradient(circle_at_50%_110%,transparent_0,transparent_45px,rgba(0,0,0,0.12)_46px,transparent_47px)]" />
        <Zap className="relative mx-auto h-7 w-7" fill="currentColor" />
        <h2 className="relative mx-auto mt-7 max-w-4xl text-balance text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
          Make what you learn
          <br />
          <span className="font-serif font-normal italic">stay with you.</span>
        </h2>
        <p className="relative mx-auto mt-7 max-w-xl text-sm leading-6 text-black/55 sm:text-base">
          Your first deck is only a photo away. Download Reviso and start building a memory that lasts.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.reviso.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-9 inline-flex h-13 items-center gap-3 rounded-full bg-[#10120f] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black"
        >
          Get Reviso free
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
        </a>
      </div>
    </section>
  )
}
