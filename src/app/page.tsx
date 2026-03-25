import Link from 'next/link'

export default function Home() {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/40 to-white" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-pugh-blue/[0.07] rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-beaver-blue/70 mb-6">
            Penn State Smeal College of Business
          </p>
          <h1 className="text-[2.5rem] md:text-[3.25rem] font-display font-bold tracking-tight text-navy leading-[1.12]">
            A student-built resource for understanding AI in business, school, and professional
            life.
          </h1>
          <p className="mt-5 text-[16px] text-text-muted leading-relaxed">
            Designed and curated by Applied AI.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/ai-by-smeal-major"
              className="inline-block bg-navy text-white px-7 py-3 rounded-lg text-[14px] font-medium hover:bg-beaver-blue transition-colors duration-300"
            >
              Explore the Student AI Hub
            </Link>
            <Link
              href="/about"
              className="inline-block border border-border text-text-muted px-7 py-3 rounded-lg text-[14px] font-medium hover:border-navy hover:text-navy transition-all duration-300"
            >
              View the Process
            </Link>
          </div>
          <p className="mt-6 text-[14px] text-text-muted/70 max-w-lg leading-relaxed">
            View all topics covered in the Hub, including AI basics, academic and professional use,
            business applications, and ethical considerations.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/ai-by-smeal-major"
            className="group bg-white p-7 rounded-xl border border-border/60 hover:border-pugh-blue/50 hover:shadow-lg hover:shadow-navy/[0.04] hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-[16px] font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors duration-300">
              AI by Smeal Major
            </h3>
            <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
              How artificial intelligence is discussed across Smeal majors and business fields.
            </p>
            <p className="mt-5 text-[12px] font-medium text-beaver-blue/70">10 modules &rarr;</p>
          </Link>
          <Link
            href="/learn"
            className="group bg-white p-7 rounded-xl border border-border/60 hover:border-pugh-blue/50 hover:shadow-lg hover:shadow-navy/[0.04] hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-[16px] font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors duration-300">
              Learn
            </h3>
            <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
              AI basics, how businesses are using AI, rules, risks, and ethics, and using AI for
              school and work.
            </p>
            <p className="mt-5 text-[12px] font-medium text-beaver-blue/70">4 sections &rarr;</p>
          </Link>
          <Link
            href="/ai-news"
            className="group bg-white p-7 rounded-xl border border-border/60 hover:border-pugh-blue/50 hover:shadow-lg hover:shadow-navy/[0.04] hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-[16px] font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors duration-300">
              AI News That Matters
            </h3>
            <p className="mt-3 text-[14px] text-text-muted leading-relaxed">
              Impactful news, recent developments, important info. Researched and produced by
              Applied AI.
            </p>
            <p className="mt-5 text-[12px] font-medium text-beaver-blue/70">Latest &rarr;</p>
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-8 h-px bg-pugh-blue/30 mx-auto mb-8" />
          <p className="text-[15px] text-text-muted italic leading-relaxed">
            The Student AI Hub is maintained as a student-led resource to support foundational
            understanding and ethical reflection on artificial intelligence in academic and
            professional contexts.
          </p>
        </div>
      </section>
    </div>
  )
}
