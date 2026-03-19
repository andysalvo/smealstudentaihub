import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { corporateInnovationData } from '@/data/majors/corporate-innovation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Corporate Innovation and Entrepreneurship',
  description:
    'How AI supports market discovery, hypothesis testing, portfolio prioritization, and venture scaling in corporate innovation.',
}

export default function CorporateInnovationPage() {
  return <MajorPageTemplate data={corporateInnovationData} />
}
