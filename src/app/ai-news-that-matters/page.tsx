import { PageLayout } from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI News That Matters',
  description: 'Impactful news, recent developments, important info about AI.',
}

export default function AINewsPage() {
  return (
    <PageLayout
      title="AI News That Matters"
      subtitle="Impactful news, recent developments, important info."
    >
      <div className="bg-hub-card border border-hub-border rounded-lg p-8 text-center">
        <p className="text-hub-text-muted italic">
          Content is being curated. Check back soon for updates.
        </p>
      </div>
    </PageLayout>
  )
}
