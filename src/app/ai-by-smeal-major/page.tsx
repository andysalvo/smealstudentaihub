import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from '@/components/ui/FadeIn'
import { StaggerGrid, StaggerItem } from '@/components/ui/StaggerGrid'

const majors = [
  {
    slug: 'accounting',
    title: 'Accounting',
    subtitle: 'Auditing, reporting, compliance, and financial control',
    field:
      'In accounting, AI is often discussed where transaction volume, review processes, and compliance requirements intersect.',
    image: '/images/site/major-accounting.jpg',
  },
  {
    slug: 'actuarial-science',
    title: 'Actuarial Science',
    subtitle: 'Risk modeling, statistical analysis, and future cost estimation',
    field:
      'In this field, AI is often discussed where data volume and probabilistic modeling overlap with traditional actuarial frameworks.',
    image: '/images/site/major-actuarial.jpg',
  },
  {
    slug: 'corporate-innovation',
    title: 'Corporate Innovation and Entrepreneurship',
    subtitle: 'Problem discovery, experimentation, and venture development',
    field:
      'In this field, AI is often discussed where market signals, customer feedback, and pattern detection intersect with early-stage decision making.',
    image: '/images/site/major-corp-innovation.jpg',
  },
  {
    slug: 'finance',
    title: 'Finance',
    subtitle: 'Investment analysis, risk management, and capital allocation',
    field:
      'In this field, AI is often discussed where market data, risk models, and portfolio decisions intersect with real-time analytics.',
    image: '/images/site/major-finance.jpg',
  },
  {
    slug: 'management',
    title: 'Management',
    subtitle: 'Planning, operations, workforce decisions, and performance',
    field:
      'In this field, AI is often discussed where data-driven performance analysis intersects with human judgment and accountability.',
    image: '/images/site/major-management.jpg',
  },
  {
    slug: 'mis',
    title: 'Management Information Systems',
    subtitle: 'Data systems, business intelligence, and enterprise technology',
    field:
      'In this field, AI is often discussed where business intelligence, system design, and enterprise data management overlap.',
    image: '/images/site/major-mis.jpg',
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    subtitle: 'Consumer behavior, strategy, brands, and market analysis',
    field:
      'In this field, AI is often discussed where customer data, campaign optimization, and content strategy intersect with analytics.',
    image: '/images/site/major-marketing.jpg',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    subtitle: 'Property valuation, investment analysis, and asset management',
    field:
      'In this field, AI is often discussed where property data, market trends, and valuation models intersect with transaction decisions.',
    image: '/images/site/major-real-estate.jpg',
  },
  {
    slug: 'risk-management',
    title: 'Risk Management',
    subtitle: 'Risk identification, evaluation, and mitigation',
    field:
      'In this field, AI is often discussed where claims data, underwriting analysis, and regulatory compliance intersect with predictive modeling.',
    image: '/images/site/major-risk-mgmt.jpg',
  },
  {
    slug: 'supply-chain',
    title: 'Supply Chain and Information Systems',
    subtitle: 'Logistics, procurement, and enterprise coordination',
    field:
      'In this field, AI is often discussed where demand planning, logistics optimization, and data integration overlap with enterprise-scale coordination.',
    image: '/images/site/major-supply-chain.jpg',
  },
]

export default function AIBySmealMajor() {
  return (
    <div className="pt-14">
      {/* Header with gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pugh-blue/[0.18] rounded-full blur-[120px]" />
        <div className="absolute bottom-[0%] left-[-8%] w-[400px] h-[400px] bg-navy/[0.08] rounded-full blur-[100px]" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-navy">
            AI by Smeal Major
          </h1>
          <p className="mt-3 text-base text-text-muted max-w-xl">
            How artificial intelligence is discussed across Smeal majors and business fields. Each
            module covers four areas: where AI appears, what it helps with, where it falls short,
            and what to keep in mind.
          </p>
        </div>
      </section>

      {/* Major grid */}
      <section className="max-w-5xl mx-auto px-6 py-12 pb-24">
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {majors.map((major) => (
            <StaggerItem key={major.slug}>
              <Link
                href={`/ai-by-smeal-major/${major.slug}`}
                className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="relative h-32 w-full">
                  <Image
                    src={major.image}
                    alt={major.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h2 className="text-base font-display font-bold text-white drop-shadow-sm">
                      {major.title}
                    </h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-beaver-blue">{major.subtitle}</p>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">{major.field}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>
    </div>
  )
}
