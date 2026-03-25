import Link from 'next/link'

const quickLinks = [
  { label: 'AI by Smeal Major', href: '/ai-by-smeal-major' },
  { label: 'Learn', href: '/learn' },
  { label: 'AI News', href: '/ai-news' },
  { label: 'About', href: '/about' },
  { label: 'Foundational Sources', href: '/foundational-sources' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Identity */}
        <div>
          <p className="font-serif text-xl font-bold">Student AI Hub</p>
          <p className="text-pugh-blue text-sm mt-1">Applied AI at Penn State</p>
          <p className="text-pugh-blue text-sm">Smeal College of Business</p>
          <p className="text-pugh-blue text-xs mt-4 leading-relaxed">
            A student-built resource for understanding AI in business, school, and professional
            life.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <p className="font-serif text-lg font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-pugh-blue hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div>
          <p className="font-serif text-lg font-semibold mb-3">Connect</p>
          <ul className="space-y-2 text-sm text-pugh-blue">
            <li>
              <a
                href="mailto:appliedaipsu@gmail.com"
                className="hover:text-white transition-colors"
              >
                appliedaipsu@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://appliedaipsu.com"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                appliedaipsu.com
              </a>
            </li>
            <li>
              <a
                href="https://smeal.psu.edu"
                className="hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                smeal.psu.edu
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-beaver-blue">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-xs text-pugh-blue space-y-1">
          <p>
            &copy; {currentYear} Applied AI at Penn State. This is a student organization website
            and does not represent official Penn State positions.
          </p>
          <p>
            Infrastructure by{' '}
            <a href="https://github.com/clarkemoyer" className="underline hover:text-white">
              Clarke Moyer
            </a>{' '}
            &amp;{' '}
            <a href="https://freeforcharity.org" className="underline hover:text-white">
              Free For Charity
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
