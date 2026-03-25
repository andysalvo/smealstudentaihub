import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { StaggerGrid, StaggerItem } from '@/components/ui/StaggerGrid'

export default function Home() {
  return (
    <div className="pt-14">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt to-white" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pugh-blue/[0.18] rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-8%] w-[400px] h-[400px] bg-navy/[0.08] rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[40%] w-[250px] h-[250px] bg-beaver-blue/[0.06] rounded-full blur-[80px]" />

        <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beaver-blue mb-8">
              Penn State Smeal College of Business
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-[3.5rem] font-display font-bold tracking-tight text-navy leading-[1.1] max-w-3xl">
              A student-built resource for understanding AI in business, school, and professional
              life.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-base text-text-muted leading-relaxed max-w-xl">
              Designed and curated by Applied AI at Penn State.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/ai-by-smeal-major"
                className="inline-block bg-navy text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-beaver-blue transition-colors duration-300"
              >
                Explore the Student AI Hub
              </Link>
              <Link
                href="/about"
                className="inline-block border border-navy/20 text-navy px-8 py-3.5 rounded-xl text-sm font-medium hover:border-navy/50 hover:bg-navy/[0.03] transition-all duration-300"
              >
                View the Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 px-6 bg-surface/40">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-beaver-blue mb-8">
              What&apos;s inside
            </p>
          </FadeIn>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <Link
                href="/ai-by-smeal-major"
                className="group block bg-white p-6 rounded-xl border border-border/60 border-t-[3px] border-t-navy hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <p className="text-xs font-semibold text-navy/40 uppercase tracking-wide mb-2">10 modules</p>
                <h3 className="text-base font-display font-bold text-navy group-hover:text-beaver-blue transition-colors duration-300">
                  AI by Smeal Major
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  How artificial intelligence is discussed across Smeal majors and business fields.
                </p>
                <p className="mt-6 text-xs font-semibold text-beaver-blue uppercase tracking-wide">
                  Explore &rarr;
                </p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/learn"
                className="group block bg-white p-6 rounded-xl border border-border/60 border-t-[3px] border-t-beaver-blue hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <p className="text-xs font-semibold text-beaver-blue/40 uppercase tracking-wide mb-2">4 sections</p>
                <h3 className="text-base font-display font-bold text-navy group-hover:text-beaver-blue transition-colors duration-300">
                  Learn
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  AI basics, how businesses are using AI, rules, risks, and ethics, and using AI for
                  school and work.
                </p>
                <p className="mt-6 text-xs font-semibold text-beaver-blue uppercase tracking-wide">
                  Explore &rarr;
                </p>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link
                href="/ai-news"
                className="group block bg-white p-6 rounded-xl border border-border/60 border-t-[3px] border-t-pugh-blue hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <p className="text-xs font-semibold text-pugh-blue/60 uppercase tracking-wide mb-2">Latest</p>
                <h3 className="text-base font-display font-bold text-navy group-hover:text-beaver-blue transition-colors duration-300">
                  AI News That Matters
                </h3>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  Impactful news, recent developments, important info. Researched and produced by
                  Applied AI.
                </p>
                <p className="mt-6 text-xs font-semibold text-beaver-blue uppercase tracking-wide">
                  Explore &rarr;
                </p>
              </Link>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Mission */}
      <FadeIn>
        <section className="py-20 px-6">
          <div className="max-w-[55ch] mx-auto text-center">
            <p className="text-[15px] text-text-muted italic leading-relaxed">
              &ldquo;The Student AI Hub is maintained as a student-led resource to support
              foundational understanding and ethical reflection on artificial intelligence in
              academic and professional contexts.&rdquo;
            </p>
            <p className="mt-6 text-xs font-semibold text-text-muted/50 uppercase tracking-widest">
              Applied AI at Penn State
            </p>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}
