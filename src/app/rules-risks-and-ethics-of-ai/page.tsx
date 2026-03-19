import { PageLayout, FeaturedSourceCard, YouTubeEmbed } from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rules, Risks, and Ethics of AI',
  description:
    'An overview of academic integrity, risk, and ethical considerations related to the use of artificial intelligence.',
}

export default function RulesRisksEthicsPage() {
  return (
    <PageLayout title="Rules, Risks, and Ethics of AI">
      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          Artificial intelligence is used in many settings to support analysis, decision-making, and
          automation. These systems can be useful, but they also raise questions about
          responsibility, risk, and oversight.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          This page explains why rules, risks, and ethics matter in AI. It summarizes common
          concerns in research and policy and connects them to academic and professional contexts.
          The goal is to give students a clear, steady framework for how these issues are discussed.
        </p>
      </div>

      <YouTubeEmbed title="What is AI Ethics?" />

      <FeaturedSourceCard
        title="UNESCO -- Recommendation on the Ethics of Artificial Intelligence"
        description="Global ethical framework outlining principles, governance priorities, and safeguards for AI systems."
        url="https://www.unesco.org/en/artificial-intelligence/recommendation-ethics"
        institution="UNESCO"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Why Governance and Ethics Matter</h2>
      </div>

      <FeaturedSourceCard
        title="NIST -- AI Standards: Federal Engagement"
        description="Overview of U.S. federal standards activity and guidance focused on trustworthy AI."
        url="https://www.nist.gov/artificial-intelligence/ai-standards-federal-engagement"
        institution="NIST"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          As AI systems become more capable and more common, questions about fairness,
          accountability, and transparency become harder to ignore. Many AI tools rely on large
          datasets and complex models that are difficult to interpret. That makes it harder to see
          how decisions are produced and whether those decisions are appropriate.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Ethical concerns also include privacy and surveillance, environmental costs, and the ways
          automated systems can reinforce existing inequalities. These issues show up across
          sectors, which is why many organizations treat AI governance as a core part of responsible
          technology use.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Common Risks and Harms</h2>

        <h3 className="text-xl font-semibold text-hub-white">Bias and unequal impact.</h3>
        <p className="text-hub-text text-base leading-relaxed">
          Data-intensive systems can produce outcomes that disadvantage historically marginalized
          groups. This happens when data reflects past inequities or when systems are deployed
          without careful evaluation in real-world contexts.
        </p>

        <h3 className="text-xl font-semibold text-hub-white">
          High-stakes decisions and explainability.
        </h3>
        <p className="text-hub-text text-base leading-relaxed">
          AI systems are used in areas like admissions, lending, hiring, and assessment. Many
          ethical frameworks cite explainability as a basic criterion for acceptability. The
          &quot;black box&quot; problem refers to the fact that some AI outputs cannot be easily
          explained in human terms, even when those outputs carry real consequences.
        </p>

        <h3 className="text-xl font-semibold text-hub-white">Academic integrity and learning.</h3>
        <p className="text-hub-text text-base leading-relaxed">
          In higher education, concerns about generative AI often focus on plagiarism and the
          erosion of learning outcomes. Some educators distinguish between dishonesty and failure to
          learn, noting that both affect academic development. These concerns shape how institutions
          discuss AI use in coursework and research.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">
          Policy, Standards, and Institutional Frameworks
        </h2>
        <p className="text-hub-text text-base leading-relaxed">
          Global and national bodies have developed guidance on AI ethics. UNESCO&apos;s
          Recommendation on the Ethics of AI outlines broad principles and governance priorities. In
          the United States, federal agencies have produced standards activity focused on
          trustworthiness, security, and accountability.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Within higher education, institutional guidance is uneven. Some universities provide clear
          guidelines on privacy, accessibility, and appropriate AI use. Others are still developing
          policy, which can make expectations inconsistent across courses, departments, or programs.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">What This Means for Students</h2>
        <p className="text-hub-text text-base leading-relaxed">
          Students may encounter AI tools in coursework, research, internships, and campus services.
          Institutional guidance often focuses on what kinds of data can be entered into AI systems,
          especially when tools are public or third-party services. This matters for privacy and
          confidentiality.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Academic expectations vary. Some institutions treat AI assistance similarly to receiving
          help from another person, which brings expectations around disclosure and transparency.
          Other settings restrict or prohibit certain uses. As a result, student experiences with AI
          rules can differ even within the same institution.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Equity and accessibility also matter. AI tools are not equally usable for all students,
          and reliance on AI can widen gaps for those with limited access to technology or assistive
          resources. Many institutional frameworks highlight the need for accessibility and careful
          evaluation before AI tools are integrated into learning.
        </p>
      </div>
    </PageLayout>
  )
}
