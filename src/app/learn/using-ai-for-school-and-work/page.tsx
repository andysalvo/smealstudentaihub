import Link from 'next/link'
import { SourceCard } from '@/components/ui/SourceCard'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'

export default function UsingAIForSchoolAndWork() {
  return (
    <div className="pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-alt via-white to-surface opacity-80" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-pugh-blue/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-5xl mx-auto px-6 py-14">
          <Link
            href="/learn"
            className="text-[12px] text-beaver-blue hover:text-navy transition-colors"
          >
            &larr; Learn
          </Link>
          <h1 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy">
            Using AI for School and Work
          </h1>
          <p className="mt-3 text-[15px] text-text-muted max-w-2xl">
            AI tools are increasingly used in academic and professional settings. Students may
            encounter them when writing, researching, analyzing data, or organizing information for
            work.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 pb-16">
        {/* Common Ways - two column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold text-navy mb-4">
              Common Ways AI is Used
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed">
              In school and work environments, AI tools are often used to support tasks that involve
              language, information retrieval, or pattern analysis. Common uses include:
            </p>
            <ul className="mt-3 space-y-2 text-[15px] text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-beaver-blue mt-1">&#x2022;</span>
                Drafting or editing written content
              </li>
              <li className="flex items-start gap-2">
                <span className="text-beaver-blue mt-1">&#x2022;</span>
                Summarizing readings or documents
              </li>
              <li className="flex items-start gap-2">
                <span className="text-beaver-blue mt-1">&#x2022;</span>
                Translating content or languages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-beaver-blue mt-1">&#x2022;</span>
                Organizing notes or outlining ideas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-beaver-blue mt-1">&#x2022;</span>
                Analyzing large amounts of information
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <SourceCard
              title="Stanford — AI and Your Career"
              description="An overview of how AI tools are becoming part of academic study and professional work."
              source="Stanford HAI"
              url="https://hai.stanford.edu"
            />
            <YouTubeEmbed
              videoId="jPhJbKBuNnA"
              title="How to Boost Your Productivity with AI Tools"
            />
          </div>
        </div>

        {/* AI as Support - two column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold text-navy mb-4">
              AI as Support, not Replacement
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed">
              In both academic and professional settings, AI is typically cast as a support tool
              rather than a replacement for human judgment.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              While AI systems can generate text, suggestions, or code, they do not understand
              context in the same way people do. They may produce outputs that sound confident but
              are incomplete, misleading, or incorrect.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              As a result, AI-generated material usually requires review, interpretation, and
              judgment by a person before it is appropriate for use in school or work.
            </p>
          </div>
          <div className="space-y-4">
            <YouTubeEmbed videoId="cW_5DsMJxGM" title="Learning with Agility in the Age of AI" />
          </div>
        </div>

        {/* Accuracy */}
        <div className="mb-12">
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Accuracy and Reliability
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            AI tools can produce errors, make incorrect assumptions, or generate information that
            appears credible but is not accurate. This is especially common when tools are asked to
            retrieve factual information or cite sources. Models may generate plausible-sounding
            references that do not exist.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Because of this, AI output is often treated as a starting point rather than a final
            answer. Information generated by AI usually requires the user to check it against known,
            original sources or other reliable references.
          </p>
        </div>

        {/* Expectations */}
        <div className="mb-12">
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Academic and Professional Expectations
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Expectations around AI can vary widely across classes, disciplines, employers, and
            institutions. In academic settings, instructors may have different policies regarding
            whether and how AI tools can be used. In professional settings, organizations may have
            guidelines related to data handling, intellectual property, and decision accountability.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Understanding these expectations usually requires consulting the specific policies of
            your course, instructor, or organization. AI tools do not account for these expectations
            on their own.
          </p>
        </div>

        {/* Privacy */}
        <div className="mb-12">
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Data, Privacy, and Confidentiality
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Some AI tools store user input or use them to improve their systems. This can lead to
            situations where sensitive information enters third-party services, creating privacy or
            confidentiality concerns.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            In school and work contexts, this may include unpublished research or an
            organization&apos;s proprietary information. The types of information entered into an AI
            tool can matter as much as the task the tool is used for.
          </p>
        </div>

        {/* Continue Exploring */}
        <div className="pt-8 border-t border-border">
          <p className="text-[15px] font-display font-semibold text-navy mb-4">
            Continue Exploring
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/learn/how-businesses-are-using-ai"
              className="p-5 bg-surface rounded-lg border border-border hover:border-beaver-blue/40 transition-all"
            >
              <p className="text-[14px] font-display font-semibold text-navy">
                How Businesses Are Using AI
              </p>
              <p className="text-[12px] text-text-muted mt-1">
                Common applications, industry differences, and ongoing challenges.
              </p>
            </Link>
            <Link
              href="/learn/rules-risks-and-ethics"
              className="p-5 bg-surface rounded-lg border border-border hover:border-beaver-blue/40 transition-all"
            >
              <p className="text-[14px] font-display font-semibold text-navy">
                Rules, Risks, and Ethics of AI
              </p>
              <p className="text-[12px] text-text-muted mt-1">
                Fairness, accountability, and the frameworks being developed.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
