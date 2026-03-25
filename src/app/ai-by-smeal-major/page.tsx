import Link from 'next/link'

const majors = [
  {
    slug: 'accounting',
    title: 'Accounting',
    subtitle: 'Auditing, reporting, compliance, and financial control',
    field:
      'In accounting, AI is often discussed where transaction volume, review processes, and compliance requirements intersect.',
  },
  {
    slug: 'actuarial-science',
    title: 'Actuarial Science',
    subtitle: 'Risk modeling, statistical analysis, and future cost estimation',
    field:
      'In this field, AI is often discussed where data volume and probabilistic modeling overlap with traditional actuarial frameworks.',
  },
  {
    slug: 'corporate-innovation-and-entrepreneurship',
    title: 'Corporate Innovation and Entrepreneurship',
    subtitle: 'Problem discovery, experimentation, and venture development',
    field:
      'In this field, AI is often discussed where market signals, customer feedback, and pattern detection intersect with early-stage decision making.',
  },
  {
    slug: 'finance',
    title: 'Finance',
    subtitle: 'Investment analysis, risk management, and capital allocation',
    field:
      'In this field, AI is often discussed where market data, risk models, and portfolio decisions intersect with real-time analytics.',
  },
  {
    slug: 'management',
    title: 'Management',
    subtitle: 'Planning, operations, workforce decisions, and performance',
    field:
      'In this field, AI is often discussed where data-driven performance analysis intersects with human judgment and accountability.',
  },
  {
    slug: 'management-information-systems',
    title: 'Management Information Systems',
    subtitle: 'Data systems, business intelligence, and enterprise technology',
    field:
      'In this field, AI is often discussed where business intelligence, system design, and enterprise data management overlap.',
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    subtitle: 'Consumer behavior, strategy, brands, and market analysis',
    field:
      'In this field, AI is often discussed where customer data, campaign optimization, and content strategy intersect with analytics.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    subtitle: 'Property valuation, investment analysis, and asset management',
    field:
      'In this field, AI is often discussed where property data, market trends, and valuation models intersect with transaction decisions.',
  },
  {
    slug: 'risk-management',
    title: 'Risk Management',
    subtitle: 'Risk identification, evaluation, and mitigation',
    field:
      'In this field, AI is often discussed where claims data, underwriting analysis, and regulatory compliance intersect with predictive modeling.',
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain and Information Systems',
    subtitle: 'Logistics, procurement, and enterprise coordination',
    field:
      'In this field, AI is often discussed where demand planning, logistics optimization, and data integration overlap with enterprise-scale coordination.',
  },
]

export default function AIBySmealMajor() {
  return (
    <div className="pt-14">
      {/* Header with gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-pugh-blue/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-5xl mx-auto px-6 py-14">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
            AI by Smeal Major
          </h1>
          <p className="mt-3 text-[15px] text-text-muted max-w-xl">
            How artificial intelligence is discussed across Smeal majors and business fields. Each
            module covers four areas: where AI appears, what it helps with, where it falls short,
            and what to keep in mind.
          </p>
        </div>
      </section>

      {/* Major grid */}
      <section className="max-w-5xl mx-auto px-6 py-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {majors.map((major) => (
            <Link
              key={major.slug}
              href={`/ai-by-smeal-major/${major.slug}`}
              className="group bg-white p-5 rounded-lg border border-border hover:border-beaver-blue/40 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <h2 className="text-[15px] font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
                {major.title}
              </h2>
              <p className="mt-1 text-[12px] text-beaver-blue">{major.subtitle}</p>
              <p className="mt-2 text-[13px] text-text-muted leading-relaxed">{major.field}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
