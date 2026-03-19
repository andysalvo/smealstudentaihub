import { PageLayout } from '@/components/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn',
  description:
    'Explore AI topics covered in the Student AI Hub, from basics to business applications.',
}

const topics = [
  {
    title: 'AI Basics',
    href: '/ai-basics',
    description: 'What AI is, how it works, and why it matters.',
    subDescription:
      'Foundational concepts including machine learning, training data, and the capabilities and limitations of current AI systems.',
  },
  {
    title: 'AI by Smeal Major',
    href: '/ai-by-smeal-major',
    description:
      'How artificial intelligence is discussed across Smeal majors and business fields.',
    subDescription:
      'Major-specific content covering where AI appears, how it helps, its current limitations, and what students should keep in mind.',
  },
  {
    title: 'AI at Penn State',
    href: '/ai-at-penn-state',
    description: 'How Penn State approaches AI in education, research, and policy.',
    subDescription:
      'An overview of institutional resources, academic programs, and university policies related to artificial intelligence.',
  },
  {
    title: 'Using AI for School and Work',
    href: '/using-ai-for-school-and-work',
    description:
      'How to use AI tools thoughtfully and effectively in academic and professional settings.',
    subDescription:
      'Practical guidance on common AI use cases, reliability, expectations, and the importance of judgment.',
  },
  {
    title: 'AI News That Matters',
    href: '/ai-news-that-matters',
    description: 'Impactful news, recent developments, important info.',
    subDescription:
      'A growing collection of curated news and significant developments in AI relevant to students and professionals.',
  },
  {
    title: 'How Businesses Are Using AI',
    href: '/how-businesses-are-using-ai',
    description:
      'How companies are using AI across industries to support operations, decisions, and strategy.',
    subDescription:
      'Examples from manufacturing, finance, healthcare, and retail along with tradeoffs and ongoing challenges.',
  },
  {
    title: 'Rules, Risks, and Ethics of AI',
    href: '/rules-risks-and-ethics-of-ai',
    description:
      'What students should know about the ethical, legal, and institutional dimensions of AI.',
    subDescription:
      'Key topics including bias, privacy, academic integrity, evolving policy, and how to approach AI responsibly.',
  },
  {
    title: 'AI Tools You Might Use',
    href: '/ai-tools-you-might-use',
    description: 'Commonly used AI tools and what to know before using them.',
    subDescription:
      'A curated overview of tools students may encounter in academic and professional settings.',
  },
]

export default function LearnPage() {
  return (
    <PageLayout
      title="Explore AI Topics"
      subtitle="The Student AI Hub is organized by topic to help you explore how artificial intelligence works, how it's used in school and business, and what to consider when using it responsibly."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {topics.map((topic) => (
          <div
            key={topic.href}
            className="bg-hub-card border border-hub-border rounded-lg p-6 flex flex-col"
          >
            <h3 className="text-lg font-bold text-hub-white mb-2">{topic.title}</h3>
            <p className="text-hub-text text-sm font-medium mb-2">{topic.description}</p>
            <p className="text-hub-text-muted text-xs mb-5 flex-1">{topic.subDescription}</p>
            <Link
              href={topic.href}
              className="inline-flex items-center gap-2 px-5 py-2 bg-hub-accent hover:bg-hub-accent-hover text-white text-sm font-medium rounded transition-colors w-fit"
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
