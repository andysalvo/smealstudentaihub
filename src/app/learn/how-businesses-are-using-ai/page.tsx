import Link from 'next/link'
import { SourceCard } from '@/components/ui/SourceCard'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'

export default function HowBusinessesAreUsingAI() {
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
            How Businesses Are Using AI
          </h1>
          <p className="mt-3 text-[15px] text-text-muted max-w-2xl">
            Businesses across many industries are using artificial intelligence to support
            decision-making, improve efficiency, and manage large volumes of data. Rather than
            replacing human workers, AI systems are most often used to assist with tasks that
            involve pattern recognition, prediction, and automation at scale.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10 pb-16">
        {/* Common Applications - two column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold text-navy mb-4">
              Common Business Applications of AI
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed">
              Across industries, businesses tend to use AI in a few recurring ways. One of the most
              common is data analytics and decision support. AI systems can process large datasets
              and surface patterns or forecasts that help organizations forecast demand, assess
              risk, or support strategy decisions.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              Another major area is customer experience. Many companies use AI-powered tools for
              chatbots, recommendation engines, and personalization to respond to customer service
              queries or to suggest products.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              In sales and marketing, AI tools are often used to analyze customer behavior, generate
              content, and predict which leads are most likely to convert. Many CRM platforms now
              include AI features that help users interpret results and make final decisions.
            </p>
          </div>
          <div className="space-y-4">
            <SourceCard
              title="IBM — Artificial Intelligence in Business"
              description="How organizations are applying AI across operations, customer service, analytics, and strategy."
              source="IBM"
              url="https://www.ibm.com/think/topics/artificial-intelligence-business"
            />
            <YouTubeEmbed
              videoId="RzkD_rTEBYs"
              title="Integrating Generative AI Into Business Strategy"
            />
          </div>
        </div>

        {/* Different Industries - two column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold text-navy mb-4">
              How AI Shows Up in Different Industries
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed">
              AI is not used the same way in every industry. While the underlying technologies are
              often similar, organizations apply them to different problems depending on their data,
              operations, and constraints.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              In manufacturing, AI is closely tied to physical systems. Companies analyze data from
              sensors and production equipment to predict maintenance needs and detect quality
              control problems.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              Financial institutions combine risk and marketing analytics. Banks and other financial
              organizations use AI to analyze transaction data, flag suspicious transactions, and
              assess credit risk.
            </p>
          </div>
          <div className="space-y-4">
            <SourceCard
              title="McKinsey — The State of AI"
              description="Annual survey data on how organizations are adopting and scaling AI across functions and industries."
              source="McKinsey"
              url="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai"
            />
            <YouTubeEmbed videoId="5dZ_lvDgevk" title="How Digital Business Models Are Evolving" />
          </div>
        </div>

        {/* Limits */}
        <div className="mb-12">
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Limits, Tradeoffs, and Ongoing Challenges
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            While AI is widely used in business settings, it comes with limits. A core challenge is
            explainability. Many AI systems operate as opaque computational processes, making it
            difficult for organizations to fully understand how certain predictions are made.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Another concern is bias. Because AI systems are trained on historical data, they can
            reflect existing inequalities or patterns of discrimination. In business contexts, this
            can affect decisions related to hiring, lending, marketing, and pricing.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            AI systems also require ongoing maintenance. Models and tools can change quickly, and
            systems that perform well at one point in time may degrade as data, environments, or
            objectives shift.
          </p>
        </div>

        {/* Continue Exploring */}
        <div className="pt-8 border-t border-border">
          <p className="text-[15px] font-display font-semibold text-navy mb-4">
            Continue Exploring
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/learn/ai-basics"
              className="p-5 bg-surface rounded-lg border border-border hover:border-beaver-blue/40 transition-all"
            >
              <p className="text-[14px] font-display font-semibold text-navy">AI Basics</p>
              <p className="text-[12px] text-text-muted mt-1">
                What AI is, how systems work, and why these fundamentals matter.
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
                Fairness, accountability, bias, and the frameworks being developed to address them.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
