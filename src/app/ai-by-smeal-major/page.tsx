import { PageLayout } from '@/components/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI by Smeal Major',
  description: 'How artificial intelligence is discussed across Smeal majors and business fields.',
}

const majors = [
  {
    name: 'Accounting',
    href: '/major-accounting',
    p1: 'Accounting centers on accuracy, consistency, and reliability in financial information.',
    p2: 'In accounting, AI is mainly used to review large volumes of data and flag issues, while professional judgment remains central.',
  },
  {
    name: 'Actuarial Science',
    href: '/actuarial-science',
    p1: 'Actuarial Science applies mathematical and statistical methods to assess risk and evaluate potential outcomes.',
    p2: 'In actuarial contexts, AI is often discussed where modeling and prediction support risk estimation and claims evaluation, while expert judgment remains essential.',
  },
  {
    name: 'Corporate Innovation and Entrepreneurship',
    href: '/corporate-innovation',
    p1: 'Corporate Innovation and Entrepreneurship focuses on problem solving, creative thinking, and recognizing opportunities.',
    p2: 'In this field, AI is often discussed where teams scan trends, test ideas, and support planning decisions, while direction and responsibility remain human.',
  },
  {
    name: 'Finance',
    href: '/finance',
    p1: 'Finance focuses on analyzing markets, managing risk, and making strategic financial decisions.',
    p2: 'In this field, AI is often discussed where teams process complex financial data, support forecasting and portfolio analysis, and enhance risk monitoring, while human judgment and oversight remain essential.',
  },
  {
    name: 'Management',
    href: '/management',
    p1: 'Management focuses on guiding organizational strategy, coordinating people, and making decisions under uncertainty.',
    p2: 'In this field, AI is often discussed where leaders analyze performance data, support planning and evaluation, and streamline organizational processes, while human judgment, accountability, and leadership remain central.',
  },
  {
    name: 'Management Information Systems',
    href: '/management-information-systems',
    p1: 'Management information systems focus on designing and managing technology-enabled systems that support data-driven business decisions.',
    p2: 'In this field, AI is often discussed where professionals integrate analytics tools, automate data processing, and enhance business intelligence systems, while governance, systems alignment, and human interpretation remain central.',
  },
  {
    name: 'Marketing',
    href: '/marketing',
    p1: 'Marketing focuses on understanding consumers, shaping brand strategy, and delivering value through targeted communication.',
    p2: 'In this field, AI is often discussed where teams analyze customer data, personalize messaging, optimize campaigns, and monitor performance across digital channels, while creativity, strategic judgment, and brand stewardship remain central.',
  },
  {
    name: 'Real Estate',
    href: '/real-estate',
    p1: 'Real estate focuses on evaluating property value, market conditions, and investment performance across locations and asset types.',
    p2: 'In this field, AI is often discussed where professionals process large market datasets, support pricing and portfolio analysis, and optimize building operations, while human oversight and market expertise remain essential.',
  },
  {
    name: 'Risk Management',
    href: '/risk-management',
    p1: 'Risk management focuses on identifying, measuring, and mitigating uncertainty across financial, operational, and strategic contexts.',
    p2: 'In this field, AI is often discussed where teams analyze large datasets, enhance risk modeling and early-warning systems, and monitor exposures across portfolios, while governance, regulatory compliance, and professional judgment remain central.',
  },
  {
    name: 'Supply Chain and Information Systems',
    href: '/supply-chain',
    p1: 'Supply Chain and Information Systems focuses on coordinating the flow of goods, services, and information across interconnected global networks.',
    p2: 'In this field, AI is often discussed where teams enhance forecasting, optimize inventory and logistics decisions, and monitor supply chain performance through integrated information systems, while strategic oversight and operational judgment remain central.',
  },
]

export default function AIBySmealMajorPage() {
  return (
    <PageLayout
      title="AI by Smeal Major"
      subtitle="How artificial intelligence is discussed across Smeal majors and business fields."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {majors.map((major) => (
          <div
            key={major.name}
            className="bg-hub-card border border-hub-border rounded-lg p-6 flex flex-col"
          >
            <h2 className="text-lg font-semibold text-hub-text mb-4">{major.name}</h2>
            <p className="text-hub-text text-sm leading-relaxed mb-3">{major.p1}</p>
            <p className="text-hub-text-muted text-sm leading-relaxed mb-6">{major.p2}</p>
            <div className="mt-auto">
              <Link
                href={major.href}
                className="inline-flex items-center text-hub-accent font-medium text-sm hover:underline"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
