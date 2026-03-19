import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { accountingData } from '@/data/majors/accounting'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Accounting',
  description: 'How AI supports audits, reporting, tax, and internal controls at scale.',
}

export default function AccountingPage() {
  return <MajorPageTemplate data={accountingData} />
}
