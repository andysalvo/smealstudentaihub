import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div>
            <p className="text-[14px] font-display font-bold text-white tracking-tight">
              Student AI Hub
            </p>
            <p className="text-[12px] text-white/40 mt-1">
              Applied AI at Penn State
            </p>
            <p className="text-[12px] text-white/40 mt-0.5">
              Smeal College of Business
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
                Hub
              </p>
              {[
                { label: 'AI by Smeal Major', href: '/ai-by-smeal-major' },
                { label: 'Learn', href: '/learn' },
                { label: 'AI News', href: '/ai-news' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-1">
                About
              </p>
              {[
                { label: 'Sources', href: '/foundational-sources' },
                { label: 'About the Hub', href: '/about' },
                { label: 'smeal.psu.edu', href: 'https://smeal.psu.edu', external: true },
                { label: 'appliedaipsu.com', href: 'https://appliedaipsu.com', external: true },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  {...('external' in link ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-[12px] text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-white/30">
            &copy; {currentYear} Applied AI at Penn State. This is a student organization website.
          </p>
          <p className="text-[11px] text-white/30">
            Does not represent official Penn State positions.
          </p>
        </div>
      </div>
    </footer>
  )
}
