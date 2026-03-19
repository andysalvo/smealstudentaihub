import { PageLayout } from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foundational Sources',
  description: 'The documented sources used to build the initial foundation of the Student AI Hub.',
}

const sources = [
  {
    title: 'Artificial Intelligence',
    url: 'https://www.ibm.com/think/topics/artificial-intelligence',
    domain: 'ibm.com',
  },
  {
    title: 'Kroger And Lowe Test AI Agents Without Handing Control To Google',
    url: 'https://www.artificialintelligence-news.com/news/kroger-and-lowe-test-ai-agents-without-handing-control-to-google/',
    domain: 'artificialintelligence-news.com',
  },
  {
    title: 'AI Vs Machine Learning',
    url: 'https://ai.engineering.columbia.edu/ai-vs-machine-learning/',
    domain: 'columbia.edu',
  },
  {
    title: 'Approaching the Black Box: How AI Works in 5 Definitions',
    url: 'https://www.library.jhu.edu/news/2025/09/approaching-the-black-box-how-ai-works-in-5-definitions/',
    domain: 'jhu.edu',
  },
  {
    title: 'Artificial Intelligence Explained',
    url: 'https://www.heinz.cmu.edu/media/2023/July/artificial-intelligence-explained',
    domain: 'cmu.edu',
  },
  {
    title: 'Machine learning, explained',
    url: 'https://mitsloan.mit.edu/ideas-made-to-matter/machine-learning-explained',
    domain: 'mit.edu',
  },
  {
    title: 'AI and Your Learning: A Guide for Students',
    url: 'https://ctl.stanford.edu/aimes/ai-learning-guide-students',
    domain: 'stanford.edu',
  },
  {
    title: 'AI In Higher Education: A Summary Of Recent Surveys Of Students And Faculty',
    url: 'https://sites.campbell.edu/academictechnology/2025/03/06/ai-in-higher-education-a-summary-of-recent-surveys-of-students-and-faculty/',
    domain: 'campbell.edu',
  },
  {
    title: 'Using Artificial Intelligence',
    url: 'https://scs.oregonstate.edu/using-artificial-intelligence',
    domain: 'oregonstate.edu',
  },
  {
    title: 'Artificial Intelligence And Academic',
    url: 'https://www.aaup.org/reports-publications/aaup-policies-reports/topical-reports/artificial-intelligence-and-academic',
    domain: 'aaup.org',
  },
  {
    title: 'How To Use Artificial Intelligence As A Study Tool',
    url: 'https://blog.methodistcollege.edu/how-to-use-artificial-intelligence-as-a-study-tool',
    domain: 'methodistcollege.edu',
  },
  {
    title: 'AI Business Education New Era Opportunity',
    url: 'https://www.flagler.edu/news-events/news/ai-business-education-new-era-opportunity',
    domain: 'flagler.edu',
  },
  {
    title: 'Artificial Intelligence Business',
    url: 'https://www.ibm.com/think/topics/artificial-intelligence-business',
    domain: 'ibm.com',
  },
  {
    title: 'AI Small Business',
    url: 'https://www.sba.gov/business-guide/manage-your-business/ai-small-business',
    domain: 'sba.gov',
  },
  {
    title: 'How digital business models are evolving in the age of agentic AI',
    url: 'https://mitsloan.mit.edu/ideas-made-to-matter/how-digital-business-models-are-evolving-age-agentic-ai',
    domain: 'mit.edu',
  },
  {
    title: 'Generative AI Tool Comparison',
    url: 'https://www.huit.harvard.edu/ai/tools',
    domain: 'harvard.edu',
  },
  {
    title: 'AI Tools - Artificial Intelligence Guidebook',
    url: 'https://aiguidebook.vcu.edu/tools/',
    domain: 'vcu.edu',
  },
  {
    title: 'AI Tools for Research - Artificial Intelligence (Generative) Resources',
    url: 'https://guides.library.georgetown.edu/ai/tools',
    domain: 'georgetown.edu',
  },
  {
    title: 'Ethics In AI: Why It Matters',
    url: 'https://professional.dce.harvard.edu/blog/ethics-in-ai-why-it-matters/',
    domain: 'harvard.edu',
  },
  {
    title: 'Ethics Of Artificial Intelligence',
    url: 'https://iep.utm.edu/ethics-of-artificial-intelligence/',
    domain: 'utm.edu',
  },
  {
    title: 'Recommendation Ethics',
    url: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics',
    domain: 'unesco.org',
  },
  {
    title: 'AI Standards: Federal Engagement',
    url: 'https://www.nist.gov/artificial-intelligence/ai-standards-federal-engagement',
    domain: 'nist.gov',
  },
]

export default function FoundationalSourcesPage() {
  return (
    <PageLayout title="Foundational Sources">
      <div className="max-w-4xl space-y-6">
        <div className="space-y-4">
          <p className="text-hub-text text-base leading-relaxed">
            These sources reflect the initial foundation (v0) of the Student AI Hub. They document
            the materials used to develop the hub&rsquo;s core reference sections.
          </p>
          <p className="text-hub-text-muted text-sm leading-relaxed">
            Pages on the site may include additional links or institution-specific resources that
            are not part of this foundational set.
          </p>
        </div>

        <h2 className="text-xl font-bold text-hub-white pt-4">
          Sources Used in the Student AI Hub (v0)
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-hub-border">
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-hub-text-muted font-semibold">
                  Title
                </th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-hub-text-muted font-semibold">
                  Source
                </th>
              </tr>
            </thead>
            <tbody>
              {sources.map((source, i) => (
                <tr
                  key={i}
                  className="border-b border-hub-border/50 hover:bg-hub-card/50 transition-colors"
                >
                  <td className="py-3 px-4">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-hub-accent hover:underline text-sm"
                    >
                      {source.title}
                    </a>
                  </td>
                  <td className="py-3 px-4 text-hub-text-muted text-sm">{source.domain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-3">
          {sources.map((source, i) => (
            <div key={i} className="bg-hub-card border border-hub-border rounded-lg p-4">
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-hub-accent hover:underline text-sm font-medium leading-snug block mb-1"
              >
                {source.title}
              </a>
              <span className="text-hub-text-muted text-xs">{source.domain}</span>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
