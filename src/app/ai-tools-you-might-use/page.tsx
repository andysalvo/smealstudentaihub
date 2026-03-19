import { PageLayout } from '@/components/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Helpful AI Tools',
  description:
    'AI tools students may encounter, with explanations of their intended use and constraints.',
}

export default function AIToolsPage() {
  return (
    <PageLayout title="Helpful AI Tools">
      <div className="max-w-3xl space-y-10">
        {/* Demo placeholder text */}
        <div className="space-y-6">
          <p className="text-hub-text text-base leading-relaxed">
            This page is presented as a demonstration of how content in the Learn section will be
            structured as the Student AI Hub continues to develop.
          </p>
          <p className="text-hub-text text-base leading-relaxed">
            When complete, this section will outline categories of AI tools students may encounter,
            along with high-level explanations of their intended use and constraints. The focus will
            be on understanding capabilities and tradeoffs, not on directing usage.
          </p>
        </div>

        {/* Anthropic Certificates */}
        <section className="bg-hub-card border border-hub-border rounded-lg p-8 space-y-4">
          <h2 className="text-xl font-semibold text-hub-text">Anthropic Certificates</h2>
          <p className="text-hub-text text-base leading-relaxed">
            Anthropic offers structured learning paths for using AI effectively. Their certificate
            courses cover practical topics like prompt engineering and building AI-powered
            workflows.
          </p>
        </section>

        {/* Spreadsheet button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://docs.google.com/spreadsheets/d/1EZZPpRb0yiXx6qoRoYBU6Tp8LdDKPhUtxZoSTS7UOvY/edit?gid=0#gid=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-hub-accent text-white font-medium rounded-lg hover:bg-hub-accent/90 transition-colors"
          >
            View the Full AI Tools Spreadsheet
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}
