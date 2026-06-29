import { Camera, ScanLine, Sparkles, Layers } from "lucide-react"
import Image from "next/image"

const steps = [
  { icon: Camera, label: "Snap a photo", desc: "Textbook page, handwritten notes, or lecture slide" },
  { icon: ScanLine, label: "AI reads it", desc: "Vision AI extracts text and identifies key concepts" },
  { icon: Sparkles, label: "Cards generated", desc: "Smart question-answer pairs, organized by topic" },
  { icon: Layers, label: "Review & save", desc: "Preview, edit, or regenerate before adding to your deck" },
]

export function ImageToCards() {
  return (
    <section id="image-to-cards" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ Feature ]</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              Turn images into{" "}
              <span className="underline decoration-foreground/30 underline-offset-[6px]">flashcards instantly</span>.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Point your camera at any study material. Reviso AI extracts the content and generates ready-to-review flashcards.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative flex items-center justify-center lg:order-2">
            <div className="relative w-[min(80vw,320px)]">
              <div className="absolute inset-0 translate-y-6 rounded-[3rem] bg-black/55 blur-2xl" />
              <div className="relative overflow-hidden">
                <Image
                  src="/reviso-cardselectionpage-mockup.png"
                  // src="reviso-cardselectionpage-mockup.png"
                  alt="Reviso AI flashcard generation from images and notes for smarter studying"
                  width={320}
                  height={640}
                  className="block h-auto w-full select-none"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:order-1">
            <div className="space-y-0">
              {steps.map((s, i) => (
                <div key={s.label} className={`flex gap-6 py-7 ${i !== 0 ? "border-t border-border/50" : ""}`}>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/50 bg-card">
                    <s.icon className="h-4 w-4 text-foreground/60" strokeWidth={1.25} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-[-0.02em]">{s.label}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border/50 bg-card p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15">
                  <ScanLine className="h-5 w-5 text-violet-400" strokeWidth={1.25} />
                </div>
                <div>
                  <p className="text-sm font-medium">Supported formats</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, WebP · Up to 10MB per image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
