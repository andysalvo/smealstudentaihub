'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'AI by Smeal Major', href: '/ai-by-smeal-major' },
  { label: 'Learn', href: '/learn' },
  { label: 'AI News', href: '/ai-news' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-2xl border-b border-border/50">
      <div className="flex justify-between items-center px-6 py-3.5 max-w-6xl mx-auto">
        <Link href="/" className="font-display text-[15px] font-bold tracking-tight text-navy">
          Student AI Hub
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium text-text-muted hover:text-navy transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden p-1.5 text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border/50 px-6 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 text-[13px] text-text-muted hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
