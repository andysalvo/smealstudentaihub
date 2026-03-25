export default function AINews() {
  return (
    <div className="pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-pugh-blue/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-5xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
            AI News That Matters
          </h1>
          <p className="mt-3 text-[15px] text-text-muted max-w-xl">
            Impactful news, recent developments, important info. Researched and produced by Applied
            AI.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 pb-16 space-y-5">
        <a
          href="#"
          className="group block bg-white p-6 rounded-lg border border-border border-l-4 border-l-pa-sky hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <p className="text-[11px] font-semibold text-pa-sky uppercase tracking-wide">
            March 2026
          </p>
          <h2 className="mt-2 text-lg font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
            Yann LeCun&apos;s AMI Labs Raises $1B to Build AI That Learns From the Physical World
          </h2>
          <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
            The Turing Award winner left Meta to bet against the technology that powers ChatGPT. His
            startup just raised the largest seed round ever recorded for a European company.
          </p>
          <p className="mt-3 text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
            Read article &rarr;
          </p>
        </a>

        <a
          href="#"
          className="group block bg-white p-6 rounded-lg border border-border border-l-4 border-l-navy hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <p className="text-[11px] font-semibold text-navy/60 uppercase tracking-wide">
            November 2025 to March 2026
          </p>
          <h2 className="mt-2 text-lg font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
            OpenClaw: How a Weekend Project Became the Fastest-Growing Open Source AI Agent in
            History
          </h2>
          <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
            An Austrian developer built an AI assistant that runs on your own machine. Then China
            adopted it. Then OpenAI acquired it.
          </p>
          <p className="mt-3 text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
            Read article &rarr;
          </p>
        </a>
      </section>
    </div>
  )
}
