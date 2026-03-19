import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { financeData } from '@/data/majors/finance'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Finance',
  description:
    'How AI supports financial analysis, forecasting, risk management, and investment decisions at scale.',
}

export default function FinancePage() {
  return <MajorPageTemplate data={financeData} />
}
