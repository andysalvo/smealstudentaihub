import Link from 'next/link'

export default function HowBusinessesAreUsingAI() {
  return (
    <div className="pt-14">
      <section className="max-w-3xl mx-auto px-6 py-14">
        <Link
          href="/learn"
          className="text-[12px] text-beaver-blue hover:text-navy transition-colors"
        >
          &larr; Learn
        </Link>
        <h1 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy">
          How Businesses Are Using AI
        </h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16 space-y-10">
        <div>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Businesses across many industries are using artificial intelligence to support
            decision-making, improve efficiency, and manage large volumes of data. Rather than
            replacing human workers, AI systems are most often used to assist with tasks that
            involve pattern recognition, prediction, and automation at scale.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            In practice, organizations use AI to analyze customer behavior, optimize internal
            operations, and detect trends such as fraud or supply-chain bottlenecks. These systems
            typically work by learning from historical data and using those patterns to inform
            future actions. The emphasis is on operating within existing workflows rather than
            operating as a standalone system.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Common Business Applications of AI
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Across industries, businesses tend to use AI in a few recurring ways. One of the most
            common is data analytics and decision support. AI systems can process large datasets and
            surface patterns or forecasts that help organizations forecast demand, assess risk, or
            support strategy decisions.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Another major area is customer experience. Many companies use AI-powered tools for
            chatbots, recommendation engines, personalization engines to responding to customer
            service queries, or to suggest products.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            In sales and marketing, AI tools are often used to analyze customer behavior, generate
            content, and predict which leads are most likely to convert. Many CRM platforms now
            include AI features that help users interpret results and make final decisions.
          </p>
        </div>

        <div>
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
            sensors and production equipment to predict maintenance needs, detect quality control
            problems, reducing downtime and waste in complex production environments.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Financial institutions combine risk and marketing analytics. Banks and other financial
            organizations use AI to analyze transaction data, flag suspicious transactions, and
            assess credit risk. It is often used alongside human review, so AI supports
            decision-making but scale is a challenge.
          </p>
        </div>

        <div>
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
            reflect existing inequalities or patterns of discrimination present in that data. In
            business contexts, this can affect decisions related to hiring, lending, marketing, and
            pricing.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            AI systems also require ongoing maintenance. Models and tools can change quickly, and
            systems that perform well at one point in time may degrade as data, environments, or
            objectives shift.
          </p>
        </div>
      </section>
    </div>
  )
}
