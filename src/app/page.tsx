import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
            A student-built resource for understanding AI in business, school,
            and professional life.
          </h1>
          <p className="mt-4 text-pugh-blue text-lg">
            Designed and curated by Applied AI.
          </p>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <div>
            <Link
              href="/ai-by-smeal-major"
              className="inline-block bg-beaver-blue text-white px-8 py-3 rounded-md font-medium hover:bg-navy transition-colors"
            >
              Explore the Student AI Hub
            </Link>
            <p className="mt-3 text-text-muted text-sm max-w-md mx-auto">
              View all topics covered in the Hub, including AI basics, academic
              and professional use, business applications, and ethical
              considerations.
            </p>
          </div>

          <div>
            <Link
              href="/about"
              className="inline-block border-2 border-beaver-blue text-beaver-blue px-8 py-3 rounded-md font-medium hover:bg-beaver-blue hover:text-white transition-colors"
            >
              View the Process
            </Link>
            <p className="mt-3 text-text-muted text-sm max-w-md mx-auto">
              Learn how the Hub&apos;s content was developed, sourced, and
              maintained, including its academic and ethical foundations.
            </p>
          </div>

          <p className="text-text-muted text-sm italic max-w-lg mx-auto pt-4">
            The Student AI Hub is maintained as a student-led resource to
            support foundational understanding and ethical reflection on
            artificial intelligence in academic and professional contexts.
          </p>
        </div>
      </section>
    </>
  )
}
