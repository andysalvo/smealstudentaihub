import Link from 'next/link'

const sections = [
  {
    title: 'AI Basics',
    description:
      "What artificial intelligence is, how AI systems work, what AI can and can't do, and why these basics matter for students.",
    href: '/learn/ai-basics',
  },
  {
    title: 'How Businesses Are Using AI',
    description:
      'Common business applications of AI, how it shows up in different industries, and the limits, tradeoffs, and ongoing challenges.',
    href: '/learn/how-businesses-are-using-ai',
  },
  {
    title: 'Rules, Risks, and Ethics of AI',
    description:
      'Why governance and ethics matter, common risks and harms, and the policy, standards, and institutional frameworks being developed.',
    href: '/learn/rules-risks-and-ethics',
  },
  {
    title: 'Using AI for School and Work',
    description:
      'Common ways AI is used in school and work, accuracy and reliability, academic and professional expectations, and data privacy.',
    href: '/learn/using-ai-for-school-and-work',
  },
]

export default function Learn() {
  return (
    <div className="pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-pugh-blue/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-5xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
            Learn
          </h1>
          <p className="mt-3 text-[15px] text-text-muted max-w-xl">
            Foundational reference material on AI. All content is sourced from 22 curated public
            references and follows our editorial standards.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group bg-white p-6 rounded-lg border border-border hover:border-beaver-blue/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <h2 className="text-lg font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
                {section.title}
              </h2>
              <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
