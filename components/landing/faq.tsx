"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const items = [
  {
    q: "What is Reviso?",
    a: "Reviso is an AI-powered flashcard learning app that turns your notes, PDFs, and images into smart flashcards. It uses spaced repetition to help you retain information longer and study more efficiently.",
  },
  {
    q: "Is Reviso free?",
    a: "Yes! Reviso has a generous free tier with 50 AI-generated cards per month, full spaced repetition system, and web & mobile access. Upgrade to Pro for unlimited cards and advanced features.",
  },
  {
    q: "How does spaced repetition work?",
    a: "Reviso uses the FSRS (Free Spaced Repetition Scheduler) algorithm — the same science-backed system used by Anki. Cards resurface right before you would forget them, maximizing memory retention while minimizing study time.",
  },
  {
    q: "Can I import cards from Anki?",
    a: "Reviso is built on the same FSRS algorithm as Anki, making it fully compatible with Anki's scheduling system. Support for direct .apkg import is coming soon.",
  },
  {
    q: "What happens to my data?",
    a: "Your study data is stored locally on your device by default. You can optionally sign in with Google to sync across devices. We never sell your data or use your study content to train AI models.",
  },
  {
    q: "Does Reviso work offline?",
    a: "Core review functionality works offline. AI features like card generation and answer scoring require an internet connection. Your study progress syncs when you reconnect.",
  },
  {
    q: "What platforms are supported?",
    a: "Reviso is available on iOS, Android, and Web. Your progress syncs seamlessly across all platforms when signed in.",
  },
  {
    q: "How does Reviso generate flashcards from images?",
    a: "Reviso uses AI vision technology to analyze photos of textbooks, handwritten notes, or lecture slides. It extracts key concepts and automatically generates question-answer pairs. You can preview, edit, and select which cards to save before adding them to your study deck.",
  },
  {
    q: "How does the AI answer scoring work?",
    a: "When reviewing flashcards, just type your answer and Reviso AI automatically scores it and converts it into a spaced repetition rating — no self-grading required.",
  },
  {
    q: "What makes Reviso different from other flashcard apps?",
    a: "Unlike traditional flashcard apps, Reviso uses AI to auto-generate cards from your study materials and auto-score your written answers. It combines an Anki-compatible spaced repetition algorithm with modern features like image scanning, progress heatmaps, daily goal tracking, and cross-platform sync — all in one app.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative border-t border-border/50 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">[ FAQ ]</p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
            Questions?{" "}
            <span className="underline decoration-foreground/30 underline-offset-[6px]">Answers</span>.
          </h2>
        </div>

        <div className="divide-y divide-border/50">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 py-6">
              <span className="shrink-0 pt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40">[Q{i + 1}]</span>
              <div className="flex-1">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left transition-colors hover:text-foreground/80"
                >
                  <h3 className="text-base font-medium tracking-[-0.01em]">{item.q}</h3>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-foreground/40 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === i ? "max-h-96 pt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
