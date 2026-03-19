import { PageLayout } from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About the Student AI Hub at Penn State',
}

export default function AboutPage() {
  return (
    <PageLayout title="About the Student AI Hub">
      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          The Student AI Hub is a student-led initiative dedicated to building meaningful AI fluency
          at Penn State. Created through the Smeal College of Business, the Hub serves as a
          centralized resource where students, faculty, and staff can access reliable, well-sourced
          information about artificial intelligence -- what it is, how it works, and how it applies
          to academic and professional life.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Rather than promoting any specific tool or perspective, the Hub is designed to offer
          grounded, research-backed content that supports informed decision-making and responsible
          use of AI technologies.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          As artificial intelligence continues to reshape industries, institutions, and the way we
          work, Penn State students need access to thoughtful, well-organized resources that support
          real understanding -- not just surface-level familiarity. The Hub exists to support that
          preparation.
        </p>
        <p className="text-hub-text-muted text-sm italic mt-8">
          Designed and curated by Applied AI at Penn State.{' '}
          <a
            href="http://appliedaipsu.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-hub-accent hover:underline"
          >
            Visit appliedaipsu.com
          </a>
        </p>
      </div>
    </PageLayout>
  )
}
