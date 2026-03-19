import React from 'react'

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="hub-container py-12 md:py-16">
        <header className="mb-10">
          <h1
            className="text-3xl md:text-4xl font-bold text-hub-white mb-4"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {title}
          </h1>
          {subtitle && <p className="text-lg text-hub-text-muted max-w-3xl">{subtitle}</p>}
        </header>
        <div className="space-y-8">{children}</div>
      </div>
    </div>
  )
}
