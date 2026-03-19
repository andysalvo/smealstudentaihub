import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { riskManagementData } from '@/data/majors/risk-management'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Risk Management',
  description: 'How AI supports risk analysis, threat detection, and data driven decision making.',
}

export default function RiskManagementPage() {
  return <MajorPageTemplate data={riskManagementData} />
}
