export function PageSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`relative border-t border-border/50 px-6 py-20 lg:px-10 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
      {children}
    </p>
  )
}

export function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={`text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl ${className}`}>
      {children}
    </h1>
  )
}

export function SectionSubtext({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground ${className}`}>
      {children}
    </p>
  )
}
