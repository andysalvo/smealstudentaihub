interface SourceCardProps {
  title: string
  description: string
  source: string
  url: string
}

export function SourceCard({ title, description, source, url }: SourceCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-surface-alt rounded-lg border border-border hover:border-beaver-blue/40 transition-all"
    >
      <p className="text-[11px] font-semibold text-beaver-blue uppercase tracking-wide mb-1">
        Featured Foundational Source
      </p>
      <p className="text-[14px] font-display font-semibold text-navy">{title}</p>
      <p className="mt-1 text-[12px] text-text-muted leading-relaxed">{description}</p>
      <p className="mt-2 text-[11px] text-link">Source: {source}</p>
    </a>
  )
}
