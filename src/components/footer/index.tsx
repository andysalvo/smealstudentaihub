import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-navy">
            Student AI Hub
          </p>
          <p className="text-[11px] text-text-muted mt-1">
            &copy; {currentYear} Applied AI at Penn State &middot; Smeal College of Business
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {[
            { label: 'AI by Smeal Major', href: '/ai-by-smeal-major' },
            { label: 'Learn', href: '/learn' },
            { label: 'Sources', href: '/foundational-sources' },
            { label: 'About', href: '/about' },
            { label: 'smeal.psu.edu', href: 'https://smeal.psu.edu', external: true },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-[11px] text-text-muted hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-6 pt-5 border-t border-border">
        <p className="text-[10px] text-text-muted/70 text-center">
          This is a student organization website and does not represent official Penn State
          positions.
        </p>
      </div>
    </footer>
  )
}
