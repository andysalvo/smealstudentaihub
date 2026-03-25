'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'AI by Smeal Major', href: '/ai-by-smeal-major' },
  { label: 'AI News That Matters', href: '/ai-news' },
  { label: 'Learn', href: '/learn' },
  { label: 'Foundational Sources', href: '/foundational-sources' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      {/* Logo bar */}
      <div className="bg-navy text-white py-3 text-center">
        <Link href="/" className="inline-block">
          <span className="font-display text-lg font-semibold tracking-tight">Student AI Hub</span>
          <span className="block text-xs text-pugh-blue font-sans">
            Penn State Smeal College of Business
          </span>
        </Link>
      </div>

      {/* Nav bar */}
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1 w-full justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-text hover:text-link-hover hover:bg-surface rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="md:hidden py-2 border-t border-border">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-medium text-text hover:bg-surface"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
