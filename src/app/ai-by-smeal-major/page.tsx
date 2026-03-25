import Link from 'next/link'

const majors = [
  {
    slug: 'accounting',
    title: 'Accounting',
    field:
      'Accounting practice involves auditing, reporting, compliance, and financial control at scale.',
    ai: 'In accounting, AI is often discussed where transaction volume, review processes, and compliance requirements intersect.',
  },
  {
    slug: 'actuarial-science',
    title: 'Actuarial Science',
    field:
      'Actuarial science centers on estimating future risk using statistical models and mathematical information to balance risk and cost.',
    ai: 'In this field, AI is often discussed where data volume intersecting and probabilistic modeling overlap with traditional actuarial frameworks.',
  },
  {
    slug: 'corporate-innovation-and-entrepreneurship',
    title: 'Corporate Innovation and Entrepreneurship',
    field:
      'Entrepreneurship focuses on problem discovery, rapid experimentation, venture development, and corporate strategy.',
    ai: 'In this field, AI is often discussed where market signals, customer feedback, and pattern detection intersect with early-stage decision making.',
  },
  {
    slug: 'finance',
    title: 'Finance',
    field:
      'Finance involves investment analysis, managing risk, and making strategic capital allocation decisions.',
    ai: 'In this field, AI is often discussed where market data, risk models, and portfolio decisions intersect with real-time analytics and software-driven forecasting.',
  },
  {
    slug: 'management',
    title: 'Management',
    field:
      'Management focuses on guiding organizations through planning, operations, workforce decisions, and performance oversight.',
    ai: 'In this field, AI is often discussed where data-driven performance analysis intersects with human judgment, accountability, and decision-making.',
  },
  {
    slug: 'management-information-systems',
    title: 'Management Information Systems',
    field:
      'MIS involves designing, managing, and improving information systems that organizations use to support their operations.',
    ai: 'In this field, AI is often discussed where business intelligence, system design, and enterprise data management overlap.',
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    field:
      'Marketing focuses on understanding consumer behavior, developing strategy, managing brands, and analyzing markets.',
    ai: 'In this field, AI is often discussed where customer data, campaign optimization, and content strategy intersect with analytics and personalization.',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    field:
      'Real estate involves property valuation, investment analysis, and portfolio and asset management operations.',
    ai: 'In this field, AI is often discussed where property data, market trends, and valuation models intersect with transaction and portfolio decisions.',
  },
  {
    slug: 'risk-management',
    title: 'Risk Management',
    field:
      'Risk management involves identifying, evaluating, and mitigating business, financial, and operational risks.',
    ai: 'In this field, AI is often discussed where claims data, underwriting analysis, and regulatory compliance intersect with predictive modeling.',
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain and Information Systems',
    field:
      'Supply chain and information systems focuses on logistics, procurement, and enterprise technology.',
    ai: 'In this field, AI is often discussed where demand planning, logistics optimization, and data integration overlap with enterprise-scale coordination.',
  },
]

export default function AIBySmealMajor() {
  return (
    <div className="pt-14">
      <section className="max-w-5xl mx-auto px-6 py-14">
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
          AI by Smeal Major
        </h1>
        <p className="mt-3 text-[15px] text-text-muted max-w-xl">
          How artificial intelligence is discussed across Smeal majors and business fields.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="space-y-4">
          {majors.map((major, i) => (
            <Link
              key={major.slug}
              href={`/ai-by-smeal-major/${major.slug}`}
              className={`group block rounded-lg border border-border hover:border-beaver-blue/40 hover:shadow-sm transition-all ${
                i % 2 === 0 ? 'bg-white' : 'bg-surface'
              }`}
            >
              <div className="p-6">
                <h2 className="text-lg font-display font-semibold text-navy group-hover:text-beaver-blue transition-colors">
                  {major.title}
                </h2>
                <p className="mt-2 text-[13px] text-text-muted leading-relaxed">{major.field}</p>
                <p className="mt-2 text-[13px] text-text-muted leading-relaxed">{major.ai}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
