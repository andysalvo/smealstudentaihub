import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Student AI Hub',
}

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-hub-darker overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-hub-dark/80 to-hub-darker" />
        <div className="relative z-10 text-center px-4" />
      </section>

      {/* Main Content */}
      <section className="bg-hub-dark py-16 md:py-24">
        <div className="hub-container text-center max-w-3xl mx-auto px-4">
          <p className="text-2xl md:text-3xl font-bold text-hub-white leading-relaxed mb-4">
            &nbsp;A student-built resource for understanding AI in business, school, and
            professional life.
          </p>
          <p className="text-xl text-hub-text mt-6">Designed and curated by Applied AI.</p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 px-8 py-3 bg-hub-accent hover:bg-hub-accent-hover text-white font-semibold rounded transition-colors"
              >
                Explore the Student AI Hub
              </Link>
              <p className="text-sm italic text-hub-text-muted">
                View all topics covered in the Hub, including AI basics, academic and professional
                use, business applications, and ethical considerations.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <Link
                href="/process-and-provenance"
                className="inline-flex items-center gap-2 px-8 py-3 border border-hub-border text-hub-text hover:text-hub-white hover:border-hub-text-muted font-semibold rounded transition-all"
              >
                View the Process
              </Link>
              <p className="text-sm italic text-hub-text-muted">
                Learn how the Hub&rsquo;s content was developed, sourced, and maintained, including
                its academic and ethical foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Statement */}
      <section className="bg-hub-darker py-12">
        <div className="hub-container text-center max-w-3xl mx-auto px-4">
          <p className="text-sm italic text-hub-text-muted">
            The Student AI Hub is maintained as a student-led resource to support foundational
            understanding and ethical reflection on artificial intelligence in academic and
            professional contexts.
          </p>
        </div>
      </section>
    </div>
  )
}
