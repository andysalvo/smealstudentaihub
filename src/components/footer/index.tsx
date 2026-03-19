import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-hub-darker border-t border-hub-border">
      <div className="hub-container py-16 flex flex-col items-center text-center gap-6">
        <div>
          <h2
            className="text-hub-white text-2xl font-semibold tracking-wide"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Penn State
          </h2>
          <h2
            className="text-hub-white text-2xl font-semibold tracking-wide"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Student AI Hub
          </h2>
        </div>

        <p
          className="text-hub-text-muted text-lg"
          style={{ fontFamily: 'var(--font-oswald), sans-serif', fontWeight: 200 }}
        >
          by Applied AI
        </p>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-hub-text-muted italic">
            Visit{' '}
            <a
              href="http://appliedaipsu.com"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:text-hub-white transition-colors"
            >
              appliedaipsu.com
            </a>
          </p>
          <p className="text-hub-text-muted italic">
            Visit{' '}
            <a
              href="https://www.smeal.psu.edu/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:text-hub-white transition-colors"
            >
              smeal.psu.edu
            </a>
          </p>
        </div>

        <Link
          href="/about"
          className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 border border-hub-border text-hub-text hover:text-hub-white hover:border-hub-text-muted rounded transition-all text-sm font-medium"
        >
          About the Student AI Hub
        </Link>
      </div>
    </footer>
  )
}

export default Footer
