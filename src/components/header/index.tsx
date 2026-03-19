'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { FiChevronDown } from 'react-icons/fi'

interface NavItem {
  label: string
  path: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'AI by Smeal Major', path: '/ai-by-smeal-major' },
  { label: 'AI News That Matters', path: '/ai-news-that-matters' },
  {
    label: 'Learn',
    path: '/learn',
    children: [
      { label: 'AI Basics', path: '/ai-basics' },
      { label: 'How Businesses Are Using AI', path: '/how-businesses-are-using-ai' },
      { label: 'Rules, Risks, and Ethics of AI', path: '/rules-risks-and-ethics-of-ai' },
      { label: 'Using AI for School and Work', path: '/using-ai-for-school-and-work' },
    ],
  },
  { label: 'Foundational Sources', path: '/foundational-sources' },
]

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path || pathname === path + '/'

  return (
    <header className="w-full bg-hub-darker/95 backdrop-blur-sm border-b border-hub-border fixed top-0 left-0 right-0 z-50">
      <div className="hub-container">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo / Title */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span
              className="text-hub-white font-semibold text-xl tracking-wide"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Student AI Hub
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded ${
                      isActive(item.path) ? 'text-hub-accent' : 'text-hub-text hover:text-hub-white'
                    }`}
                  >
                    {item.label}
                    {item.children && <FiChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1 min-w-[260px]">
                      <div className="bg-hub-dark border border-hub-border rounded-lg shadow-xl py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            href={child.path}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              isActive(child.path)
                                ? 'text-hub-accent bg-hub-card'
                                : 'text-hub-text hover:text-hub-white hover:bg-hub-card'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-hub-text hover:text-hub-white"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <RxCross2 className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-hub-border bg-hub-dark">
          <div className="hub-container py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-hub-accent bg-hub-card'
                      : 'text-hub-text hover:text-hub-white hover:bg-hub-card'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.path}
                    href={child.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block pl-8 pr-4 py-2 rounded text-sm ${
                      isActive(child.path)
                        ? 'text-hub-accent bg-hub-card'
                        : 'text-hub-text-muted hover:text-hub-white hover:bg-hub-card'
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
