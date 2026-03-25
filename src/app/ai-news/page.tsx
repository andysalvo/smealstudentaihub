import Link from 'next/link'
import Image from 'next/image'

export default function AINews() {
  return (
    <div className="pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pugh-blue/[0.18] rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-8%] w-[400px] h-[400px] bg-navy/[0.08] rounded-full blur-[100px]" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
            AI News That Matters
          </h1>
          <p className="mt-3 text-base text-text-muted max-w-xl">
            Impactful news, recent developments, important info. Researched and produced by Applied
            AI.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 pb-24 space-y-6">
        <Link
          href="/ai-news/ami-labs"
          className="group flex flex-col md:flex-row gap-0 md:gap-6 bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
            <Image
              src="/images/site/ami-labs-thumb.jpg"
              alt="AI research laboratory"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <p className="text-xs font-semibold text-pa-sky uppercase tracking-[0.15em]">
              March 2026
            </p>
            <h2 className="mt-2 text-lg font-display font-bold text-navy group-hover:text-beaver-blue transition-colors">
              Yann LeCun&apos;s AMI Labs Raises $1B to Build AI That Learns From the Physical World
            </h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              The Turing Award winner left Meta to bet against the technology that powers ChatGPT. His
              startup just raised the largest seed round ever recorded for a European company.
            </p>
            <p className="mt-4 text-xs font-semibold text-beaver-blue uppercase tracking-[0.15em]">
              Read article &rarr;
            </p>
          </div>
        </Link>

        <Link
          href="/ai-news/openclaw"
          className="group flex flex-col md:flex-row gap-0 md:gap-6 bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300"
        >
          <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
            <Image
              src="/images/site/openclaw-thumb.jpg"
              alt="Open source software development"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 256px"
            />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <p className="text-xs font-semibold text-navy/60 uppercase tracking-[0.15em]">
              November 2025 to March 2026
            </p>
            <h2 className="mt-2 text-lg font-display font-bold text-navy group-hover:text-beaver-blue transition-colors">
              OpenClaw: How a Weekend Project Became the Fastest-Growing Open Source AI Agent in
              History
            </h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              An Austrian developer built an AI assistant that runs on your own machine. Then China
              adopted it. Then OpenAI acquired it.
            </p>
            <p className="mt-4 text-xs font-semibold text-beaver-blue uppercase tracking-[0.15em]">
              Read article &rarr;
            </p>
          </div>
        </Link>
      </section>
    </div>
  )
}
