import { PageLayout } from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI at Penn State',
  description: 'How Penn State approaches AI in education, research, and policy.',
}

export default function AIAtPennStatePage() {
  return (
    <PageLayout title="AI at Penn State">
      <div className="max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          This page is presented as a demonstration of how content in the Learn section will be
          structured as the Student AI Hub continues to develop.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Its layout follows the same format used in the AI Basics page and represents how
          additional topics will be organized as content is reviewed, sourced, and added to the hub
          over time.
        </p>
      </div>
    </PageLayout>
  )
}
