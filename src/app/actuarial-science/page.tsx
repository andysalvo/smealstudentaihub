import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { actuarialScienceData } from '@/data/majors/actuarial-science'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Actuarial Science',
  description:
    'How AI supports risk modeling, predictive analytics, and financial forecasting in insurance and actuarial decision-making.',
}

export default function ActuarialSciencePage() {
  return <MajorPageTemplate data={actuarialScienceData} />
}
