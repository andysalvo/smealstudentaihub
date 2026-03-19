import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { marketingData } from '@/data/majors/marketing'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Marketing',
  description:
    'How AI supports market analysis, customer insights, and targeted marketing strategies.',
}

export default function MarketingPage() {
  return <MajorPageTemplate data={marketingData} />
}
