import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { realEstateData } from '@/data/majors/real-estate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Real Estate',
  description: 'How AI supports property valuation, market analysis, and investment decisions.',
}

export default function RealEstatePage() {
  return <MajorPageTemplate data={realEstateData} />
}
