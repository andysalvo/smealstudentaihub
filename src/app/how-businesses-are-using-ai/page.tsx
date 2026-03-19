import {
  PageLayout,
  FeaturedSourceCard,
  LinkedInLearningLink,
  YouTubeEmbed,
} from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Businesses Are Using AI',
  description:
    'How businesses across industries are using artificial intelligence to support decision-making, improve efficiency, and manage data.',
}

export default function HowBusinessesUseAIPage() {
  return (
    <PageLayout title="How Businesses Are Using AI">
      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          Businesses across many industries are using artificial intelligence to support
          decision-making, improve efficiency, and manage large volumes of data. Rather than
          replacing human workers, AI systems are most often used to assist with tasks that involve
          pattern recognition, prediction, and automation at scale.
        </p>
      </div>

      <LinkedInLearningLink
        title="Generative AI for Business Leaders"
        url="https://www.linkedin.com/learning/generative-ai-for-business-leaders/generative-ai-for-business-leaders?u=76811570"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          In practice, organizations use AI to analyze data, improve customer experiences, generate
          content, optimize internal operations, and detect risks such as fraud or system failures.
          These systems work by identifying patterns in historical data and using those patterns to
          make predictions or recommendations. As a result, AI is often embedded into existing
          workflows rather than operating as a standalone tool.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          While these applications can offer benefits, they also come with limits and tradeoffs. AI
          systems may be difficult to explain, can reflect bias present in their training data, and
          often require ongoing maintenance as models and tools change over time. Because of this,
          organizations typically pair AI systems with human oversight and governance frameworks
          rather than treating them as fully autonomous decision-makers.
        </p>
      </div>

      <YouTubeEmbed title="How AI Could Empower Any Business | Andrew Ng | TED" />

      <FeaturedSourceCard
        title="IBM -- Artificial Intelligence in Business"
        description="An overview of how organizations use artificial intelligence across business functions such as operations, decision-making, customer experience, and automation."
        url="https://www.ibm.com/think/topics/artificial-intelligence-business"
        institution="IBM"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Common Business Applications of AI</h2>
        <p className="text-hub-text text-base leading-relaxed">
          Across industries, businesses tend to use AI in a few recurring ways. One of the most
          common is data analysis and decision support. AI systems can process large datasets more
          quickly than humans and identify patterns that help organizations forecast demand, assess
          risk, or support strategic decisions.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Another major area is customer experience. Many companies use AI-powered tools like
          chatbots, recommendation systems, and personalization engines to respond to customers,
          tailor content, or suggest products. These systems are designed to scale interactions that
          would be difficult to manage manually.
        </p>
      </div>

      <LinkedInLearningLink
        title="Integrating Generative AI into Business Strategy"
        url="https://www.linkedin.com/learning/integrating-generative-ai-into-business-strategy/why-a-strategic-framework-is-essential-for-ai-adoption?u=76811570"
      />

      <YouTubeEmbed title="The Rise of Generative AI for Business" />

      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          AI is also widely used for automation and operational efficiency. Organizations apply AI
          to tasks such as workflow automation, IT operations monitoring, cybersecurity threat
          detection, and internal process optimization. In these cases, AI supports human teams by
          handling repetitive or data-intensive tasks.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          In sales and marketing, AI tools are often used to analyze customer behavior, generate
          content, and predict which leads are most likely to convert. While these systems can
          increase efficiency, they still rely on human judgment to interpret results and make final
          decisions.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">
          How AI Shows Up in Different Industries
        </h2>
        <p className="text-hub-text text-base leading-relaxed">
          AI is not used the same way in every industry. While the underlying technologies are often
          similar, organizations apply them to different problems depending on their data,
          operations, and constraints.
        </p>
      </div>

      <FeaturedSourceCard
        title="MIT Sloan -- How Digital Business Models Are Evolving"
        description="An academic analysis of how organizations are adapting their business models as AI technologies become more common."
        url="https://mitsloan.mit.edu/ideas-made-to-matter/how-digital-business-models-are-evolving-age-agentic-ai"
        institution="MIT Sloan School of Management"
      />

      <FeaturedSourceCard
        title="Flagler College -- AI in Business Education"
        description="A university-authored perspective on how artificial intelligence is being introduced and discussed in business contexts."
        url="https://www.flagler.edu/news-events/news/ai-business-education-new-era-opportunity"
        institution="Flagler College"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          In manufacturing, AI is closely tied to physical systems. Companies analyze data from
          sensors and machines to anticipate equipment failures and identify defects in products.
          These systems help organizations respond earlier to problems, reducing downtime and waste
          in complex production environments.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Financial institutions tend to focus on risk and monitoring. Banks and other financial
          organizations use AI to analyze transaction data, flag suspicious activity, and support
          fraud detection efforts. AI is also used to help manage high volumes of customer
          interactions, especially in customer service settings where scale is a challenge.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Healthcare organizations apply AI in more cautious and constrained ways. AI systems are
          used to support clinical decision-making and analyze patient data to identify patterns
          related to outcomes or treatment options. Because these decisions can have serious
          consequences, AI tools are typically used to assist professionals rather than replace
          them.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Retail provides a different example, where AI is often visible to customers. Retailers use
          AI to recommend products, personalize shopping experiences, and forecast demand. Behind
          the scenes, these systems also help manage inventory and supply chains by analyzing
          historical sales and customer behavior.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">
          Limits, Tradeoffs, and Ongoing Challenges
        </h2>
        <p className="text-hub-text text-base leading-relaxed">
          While AI is widely used in business settings, it comes with important limits and
          tradeoffs. One challenge is explainability. Many AI systems operate as complex models with
          internal processes that are difficult to interpret, making it hard for organizations to
          fully understand how certain predictions or recommendations are produced.
        </p>
      </div>

      <LinkedInLearningLink
        title="Leveraging Generative AI in Finance and Accounting"
        url="https://www.linkedin.com/learning/leveraging-generative-ai-in-finance-and-accounting/introduction-to-generative-ai-in-finance?u=76811570"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          Another concern is bias. Because AI systems are trained on historical data, they can
          reflect existing inequalities or patterns of discrimination present in that data. In
          business contexts, this can affect decisions related to hiring, lending, marketing, or
          customer targeting if systems are not carefully monitored.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          AI systems also require ongoing maintenance. Models and tools can change quickly, and
          systems that perform well at one point in time may degrade or behave differently as data,
          environments, or objectives shift. As a result, using AI effectively often requires
          continuous oversight rather than a one-time implementation.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          For these reasons, businesses rarely treat AI as a fully autonomous decision-maker.
          Instead, AI is typically combined with human judgment, organizational governance, and
          review processes. Understanding both the capabilities and the limits of AI helps
          organizations decide where it makes sense to use these tools - and where human involvement
          remains essential.
        </p>
      </div>
    </PageLayout>
  )
}
