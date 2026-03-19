import { PageLayout } from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process and Provenance',
  description:
    'How the Student AI Hub was built, sourced, and maintained, including its academic and ethical foundations.',
}

const buildSteps = [
  {
    number: 1,
    title: 'Source selection',
    description:
      'A set of 36 publicly available sources was selected by a person based on credibility, relevance to students, and academic appropriateness.',
  },
  {
    number: 2,
    title: 'Source review and access',
    description:
      'Each source was reviewed to determine whether its content could be accessed and used. Sources that could not be accessed in full were documented but were not used to generate reference content.',
  },
  {
    number: 3,
    title: 'Content drafting',
    description:
      'Accessible source material was used to draft clear, student-facing reference sections. Drafts focused on explanation and context rather than technical detail or tool recommendations.',
  },
  {
    number: 4,
    title: 'Review and revision',
    description:
      'Draft content was reviewed to address clarity, balance, and scope. Language that was unsupported or overly broad was narrowed. No new sources were added during revision.',
  },
  {
    number: 5,
    title: 'Foundation lock',
    description:
      'After review, the core reference sections were finalized. These sections form the foundation of the Student AI Hub, meaning they define the shared set of information the site is built on.',
  },
  {
    number: 6,
    title: 'Hub formation',
    description:
      'The Student AI Hub website was then built around this foundation. The finalized reference sections shape the structure and content of the site, while other pages provide context and navigation without changing the foundation itself.',
  },
]

export default function ProcessAndProvenancePage() {
  return (
    <PageLayout title="Process and Provenance">
      <div className="max-w-3xl space-y-12">
        {/* Section: Purpose */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-hub-white">The Purpose of the Student AI Hub</h2>
          <p className="text-hub-text text-base leading-relaxed">
            The Student AI Hub is a reference site.
          </p>
          <p className="text-hub-text text-base leading-relaxed">
            Its core content is built from a documented set of public sources chosen for
            credibility, relevance to students, and academic use. The goal is to explain artificial
            intelligence clearly.
          </p>
          <p className="text-hub-text text-base leading-relaxed">
            Across the hub, the material reflects deliberate choices about:
          </p>
          <ul className="list-disc list-inside space-y-2 text-hub-text text-base pl-2">
            <li>which sources were used</li>
            <li>how those sources shaped the content</li>
            <li>how information is framed and presented</li>
          </ul>
        </section>

        {/* Section: Provenance */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-hub-white">Provenance and Source-Based Content</h2>

          {/* Callout box */}
          <div className="bg-hub-card border border-hub-border border-l-4 border-l-hub-accent rounded-lg p-6">
            <p className="text-xs uppercase tracking-wider text-hub-accent mb-2 font-semibold">
              Definition
            </p>
            <p className="text-hub-white text-base font-medium leading-relaxed">
              <strong>Provenance</strong> -- The documented origin of information -- where it comes
              from, how it was selected, and how it informed the content presented.
            </p>
          </div>

          <p className="text-hub-text text-base leading-relaxed">
            In the Student AI Hub, the word provenance refers to the documented origin of
            information.
          </p>
          <p className="text-hub-text text-base leading-relaxed">
            Explanations are grounded in identifiable sources, and those sources are selected
            intentionally rather than gathered automatically. When a concept appears in the hub, it
            is because available source material supported it clearly. When sources could not
            support a claim, that claim was not included.
          </p>
          <p className="text-hub-text text-base leading-relaxed">
            This approach is used to make the basis of the hub&rsquo;s content visible and to
            support careful reading in an academic context.
          </p>
        </section>

        {/* Section: How the Foundation Was Built */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-hub-white">How the Foundation Was Built (v0)</h2>
          <p className="text-hub-text text-base leading-relaxed">
            The initial foundation of the Student AI Hub was developed using a defined, documented
            process.
          </p>
          <p className="text-hub-text text-base leading-relaxed">
            This process focused on source selection, controlled use of material, and review before
            publication.
          </p>
          <p className="text-hub-text text-base leading-relaxed">
            The steps below describe how the hub moved from an initial set of sources to the core
            reference sections available on the site.
          </p>

          <div className="space-y-6 pt-2">
            {buildSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-hub-accent/20 text-hub-accent flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-hub-white mb-1">{step.title}</h3>
                  <p className="text-hub-text text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <p className="text-hub-text text-base leading-relaxed border-t border-hub-border pt-8">
          The Student AI Hub is a reference site built on documented sources. It reflects an initial
          version of the project and is meant to support academic learning at Smeal.
        </p>
      </div>
    </PageLayout>
  )
}
