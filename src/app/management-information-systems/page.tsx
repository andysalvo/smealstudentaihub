import MajorPageTemplate from '@/components/content/MajorPageTemplate'
import { managementISData } from '@/data/majors/management-is'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI in Management Information Systems',
  description:
    'How AI supports managing data, analyzing systems, and improving technology decisions.',
}

export default function ManagementISPage() {
  return <MajorPageTemplate data={managementISData} />
}
