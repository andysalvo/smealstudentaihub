const sources = [
  {
    title: 'Artificial Intelligence',
    url: 'https://www.ibm.com/think/topics/artificial-intelligence',
  },
  {
    title: 'Google and Lyria & Rigoletto Official Hearing Correct To Google',
    url: 'https://cloud.withgoogle.com/gen-app-builder/docs/introduction-rag',
  },
  { title: 'AI & Machine Learning', url: 'https://aws.amazon.com/machine-learning/' },
  {
    title: 'Approaching the Next Steps: How AI Works at Stanford',
    url: 'https://hai.stanford.edu',
  },
  { title: 'AI & Digital Education at MIT', url: 'https://web.mit.edu/ai/' },
  { title: 'AI in Higher Education', url: 'https://www.educause.edu' },
  { title: 'AI for Business Leaders', url: 'https://hbr.org' },
  {
    title: 'How To Use Artificial Intelligence in Business',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights',
  },
  { title: 'AI Tools You Might Use', url: 'https://openai.com' },
  { title: 'Using AI Responsibly', url: 'https://www.responsible.ai/' },
  {
    title: 'Artificial Intelligence and Ethics',
    url: 'https://plato.stanford.edu/entries/ethics-ai/',
  },
  { title: 'NIST AI Standards', url: 'https://www.nist.gov/artificial-intelligence' },
  {
    title: 'UNESCO Recommendation on the Ethics of AI',
    url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics',
  },
]

export default function FoundationalSources() {
  return (
    <div className="pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-pugh-blue/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-5xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
            Foundational Sources
          </h1>
          <p className="mt-3 text-[15px] text-text-muted max-w-xl">
            These sources reflect the initial foundation of the Student AI Hub. They document the
            materials used to develop the Hub&apos;s core reference sections.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 pb-16">
        <div className="bg-white rounded-lg border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-text-muted uppercase tracking-wide">
                  Source
                </th>
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-text-muted uppercase tracking-wide">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {sources.map((source, i) => (
                <tr
                  key={i}
                  className={`border-b border-border last:border-0 ${i % 2 === 1 ? 'bg-surface/50' : ''}`}
                >
                  <td className="px-6 py-3 text-[13px] text-text">{source.title}</td>
                  <td className="px-6 py-3 text-[13px]">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-link-hover"
                    >
                      {source.url.replace('https://', '').replace('www.', '').split('/')[0]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[12px] text-text-muted">
          Pages on the site may also contain links to specific resources that are not part of the
          foundational set.
        </p>
      </section>
    </div>
  )
}
