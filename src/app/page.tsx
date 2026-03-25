import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-14">
      {/* Hero with subtle gradient */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-pugh-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-beaver-blue mb-4">
            Penn State Smeal College of Business
          </p>
          <h1 className="text-3xl md:text-[42px] font-display font-bold tracking-tight text-navy leading-[1.15] max-w-2xl">
            A student-built resource for understanding AI in business, school, and professional
            life.
          </h1>
          <p className="mt-4 text-[15px] text-text-muted">Designed and curated by Applied AI.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/ai-by-smeal-major"
              className="inline-block bg-navy text-white px-6 py-2.5 rounded-md text-[13px] font-semibold hover:bg-beaver-blue transition-colors"
            >
              Explore the Student AI Hub
            </Link>
            <Link
              href="/about"
              className="inline-block border border-border text-text px-6 py-2.5 rounded-md text-[13px] font-semibold hover:border-navy hover:text-navy transition-colors"
            >
              View the Process
            </Link>
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-[13px] text-text-muted max-w-lg">
              View all topics covered in the Hub, including AI basics, academic and professional
              use, business applications, and ethical considerations.
            </p>
          </div>
        </div>
      </section>

      {/* Cards with left border accent */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            href="/ai-by-smeal-major"
            className="group bg-white p-6 rounded-lg border border-border border-l-4 border-l-navy hover:shadow-md transition-all"
          >
            <h3 className="text-[15px] font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
              AI by Smeal Major
            </h3>
            <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
              How artificial intelligence is discussed across Smeal majors and business fields.
            </p>
            <p className="mt-4 text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
              10 modules &rarr;
            </p>
          </Link>
          <Link
            href="/learn"
            className="group bg-white p-6 rounded-lg border border-border border-l-4 border-l-beaver-blue hover:shadow-md transition-all"
          >
            <h3 className="text-[15px] font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
              Learn
            </h3>
            <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
              AI basics, how businesses are using AI, rules, risks, and ethics, and using AI for
              school and work.
            </p>
            <p className="mt-4 text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
              4 sections &rarr;
            </p>
          </Link>
          <Link
            href="/ai-news"
            className="group bg-white p-6 rounded-lg border border-border border-l-4 border-l-pa-sky hover:shadow-md transition-all"
          >
            <h3 className="text-[15px] font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
              AI News That Matters
            </h3>
            <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
              Impactful news, recent developments, important info. Researched and produced by
              Applied AI.
            </p>
            <p className="mt-4 text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
              Latest &rarr;
            </p>
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-[14px] text-text-muted italic leading-relaxed">
          The Student AI Hub is maintained as a student-led resource to support foundational
          understanding and ethical reflection on artificial intelligence in academic and
          professional contexts.
        </p>
      </section>
    </div>
  )
}
