export default function AINews() {
  return (
    <div className="pt-14">
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
          AI News That Matters
        </h1>
        <p className="mt-3 text-[15px] text-text-muted max-w-xl">
          Impactful news, recent developments, important info. Researched and produced by Applied
          AI.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16 space-y-5">
        <a
          href="#"
          className="block bg-white p-6 rounded-lg border border-border hover:border-beaver-blue/40 hover:shadow-sm transition-all"
        >
          <p className="text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
            March 2026
          </p>
          <h2 className="mt-2 text-lg font-display font-semibold text-navy">
            Yann LeCun&apos;s AMI Labs Raises $1B to Build AI That Learns From the Physical World
          </h2>
          <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
            The Turing Award winner left Meta to bet against the technology that powers ChatGPT. His
            startup just raised the largest seed round ever recorded for a European company.
          </p>
        </a>

        <a
          href="#"
          className="block bg-white p-6 rounded-lg border border-border hover:border-beaver-blue/40 hover:shadow-sm transition-all"
        >
          <p className="text-[11px] font-semibold text-beaver-blue uppercase tracking-wide">
            November 2025 to March 2026
          </p>
          <h2 className="mt-2 text-lg font-display font-semibold text-navy">
            OpenClaw: How a Weekend Project Became the Fastest-Growing Open Source AI Agent in
            History
          </h2>
          <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
            An Austrian developer built an AI assistant that runs on your own machine. Then China
            adopted it. Then OpenAI acquired it.
          </p>
        </a>
      </section>
    </div>
  )
}
