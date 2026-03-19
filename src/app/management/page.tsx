import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { managementData } from '@/data/majors/management'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Management',
  description: 'How AI supports planning, decisions, operations, and team performance.',
}

export default function ManagementPage() {
  return <MajorPageTemplate data={managementData} />
}
