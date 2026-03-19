import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { supplyChainData } from '@/data/majors/supply-chain'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Supply Chain and Information Systems',
  description:
    'How AI supports supply chain optimization, logistics planning, and data driven operations.',
}

export default function SupplyChainPage() {
  return <MajorPageTemplate data={supplyChainData} />
}
