const sources = [
  // AI Fundamentals
  {
    title: 'Artificial Intelligence',
    source: 'IBM',
    url: 'https://www.ibm.com/think/topics/artificial-intelligence',
  },
  {
    title: 'Introduction to Retrieval Augmented Generation',
    source: 'Google Cloud',
    url: 'https://cloud.google.com/use-cases/retrieval-augmented-generation',
  },
  {
    title: 'AI & Machine Learning',
    source: 'AWS',
    url: 'https://aws.amazon.com/machine-learning/',
  },
  {
    title: 'AI vs. Machine Learning',
    source: 'Columbia Engineering',
    url: 'https://ai.engineering.columbia.edu/ai-vs-machine-learning/',
  },
  {
    title: 'Machine Learning, Explained',
    source: 'MIT Sloan',
    url: 'https://mitsloan.mit.edu/ideas-made-to-matter/machine-learning-explained',
  },
  {
    title: '"Black Box" AI',
    source: 'Johns Hopkins University',
    url: 'https://hub.jhu.edu/2023/02/08/what-is-black-box-ai/',
  },
  {
    title: 'AI & Digital Education',
    source: 'MIT',
    url: 'https://web.mit.edu/ai/',
  },
  // Education & Student Use
  {
    title: 'Artificial Intelligence',
    source: 'Stanford HAI',
    url: 'https://hai.stanford.edu',
  },
  {
    title: 'AI and Your Career',
    source: 'Stanford HAI',
    url: 'https://hai.stanford.edu/education/ai-and-your-career',
  },
  {
    title: 'AI in Higher Education',
    source: 'EDUCAUSE',
    url: 'https://www.educause.edu',
  },
  {
    title: 'Using Artificial Intelligence',
    source: 'Oregon State University',
    url: 'https://guides.library.oregonstate.edu/ai',
  },
  {
    title: 'Artificial Intelligence and Academic Integrity',
    source: 'AAUP',
    url: 'https://www.aaup.org/article/artificial-intelligence-and-academic-integrity',
  },
  {
    title: 'Artificial Intelligence and the Future of Teaching and Learning',
    source: 'AAC&U',
    url: 'https://www.aacu.org/trending-topics/artificial-intelligence',
  },
  // Business
  {
    title: 'AI for Business Leaders',
    source: 'Harvard Business Review',
    url: 'https://hbr.org',
  },
  {
    title: 'Artificial Intelligence in Business',
    source: 'IBM',
    url: 'https://www.ibm.com/think/topics/artificial-intelligence-business',
  },
  {
    title: 'The State of AI',
    source: 'McKinsey',
    url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
  },
  {
    title: 'Generative AI for Business Leaders',
    source: 'LinkedIn Learning',
    url: 'https://www.linkedin.com/learning/generative-ai-for-business-leaders',
  },
  // Ethics, Policy & Governance
  {
    title: 'Using AI Responsibly',
    source: 'Responsible AI Institute',
    url: 'https://www.responsible.ai/',
  },
  {
    title: 'Artificial Intelligence and Ethics',
    source: 'Stanford Encyclopedia of Philosophy',
    url: 'https://plato.stanford.edu/entries/ethics-ai/',
  },
  {
    title: 'Recommendation on the Ethics of Artificial Intelligence',
    source: 'UNESCO',
    url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics',
  },
  {
    title: 'AI Standards: Federal Engagement',
    source: 'NIST',
    url: 'https://www.nist.gov/artificial-intelligence',
  },
  {
    title: 'AI Tools and Resources',
    source: 'OpenAI',
    url: 'https://openai.com',
  },
]

export default function FoundationalSources() {
  return (
    <div className="pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pugh-blue/[0.18] rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-8%] w-[400px] h-[400px] bg-navy/[0.08] rounded-full blur-[100px]" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
            Foundational Sources
          </h1>
          <p className="mt-3 text-base text-text-muted max-w-xl">
            These sources reflect the initial foundation of the Student AI Hub. They document the
            materials used to develop the Hub&apos;s core reference sections. Pages on the site may
            also contain links to specific resources that are not part of the foundational set.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 pb-24">
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left px-6 py-3 text-xs font-semibold text-text-muted uppercase tracking-[0.15em]">
                  Source
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-text-muted uppercase tracking-[0.15em] hidden md:table-cell">
                  Publisher
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-text-muted uppercase tracking-[0.15em]">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {sources.map((s, i) => (
                <tr
                  key={i}
                  className={`border-b border-border last:border-0 ${i % 2 === 1 ? 'bg-surface/50' : ''}`}
                >
                  <td className="px-6 py-3 text-sm text-text">{s.title}</td>
                  <td className="px-6 py-3 text-sm text-text-muted hidden md:table-cell">
                    {s.source}
                  </td>
                  <td className="px-6 py-3 text-sm">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link hover:text-link-hover"
                    >
                      {s.url.replace('https://', '').replace('www.', '').split('/')[0]}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-text-muted">
          {sources.length} sources total.
        </p>
      </section>
    </div>
  )
}
