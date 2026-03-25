import Link from 'next/link'

export default function RulesRisksAndEthics() {
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
          Rules, Risks, and Ethics of AI
        </h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16 space-y-10">
        <div>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Artificial intelligence is used in many settings to support analysis, decision-making,
            and automation. These systems can be useful, but they also raise questions about
            fairness, accountability, and unintended consequences.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            This page explains why rules, risks, and ethics matter in AI. It summarizes common
            concerns in research and policy, and connects them to academic and professional
            contexts. The goal is to give students a clear, usable framework for how these issues
            are discussed.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Why Governance and Ethics Matter
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            As AI systems become more capable and more common, the consequences of their decisions
            become harder to ignore. Many AI tools rely on large datasets and complex models that
            are difficult to interpret. That makes it harder to see how decisions are produced and
            whether those decisions are appropriate.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Ethical concerns also include privacy and surveillance, environmental costs, and the
            ways automated systems can reinforce existing inequalities. These issues show up across
            sectors, which is why many organizations treat AI governance as a core part of
            responsible technology use.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Common Risks and Harms
          </h2>
          <div className="space-y-6">
            <div className="p-5 bg-surface rounded-lg border border-border">
              <h3 className="text-[15px] font-semibold text-navy">Bias and unequal impact.</h3>
              <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
                Data-driven systems can produce outcomes that disadvantage historically marginalized
                groups. This happens when data reflects past inequities or when systems are deployed
                without careful evaluation in real-world contexts.
              </p>
            </div>
            <div className="p-5 bg-surface rounded-lg border border-border">
              <h3 className="text-[15px] font-semibold text-navy">
                High-stakes decisions and explainability.
              </h3>
              <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
                AI systems are used in areas like admissions, lending, hiring, and assessment. Many
                ethical frameworks cite explainability as a basic criterion for accountability. The
                &quot;black box&quot; problem refers to the fact that some AI outputs cannot be
                easily explained in human terms, even when those outputs carry real consequences.
              </p>
            </div>
            <div className="p-5 bg-surface rounded-lg border border-border">
              <h3 className="text-[15px] font-semibold text-navy">
                Academic integrity and learning.
              </h3>
              <p className="mt-2 text-[13px] text-text-muted leading-relaxed">
                In higher education, concerns about generative AI often focus on plagiarism and the
                erosion of learning outcomes. Some educators distinguish between dishonesty and
                failure to learn, noting that both affect academic development. These concerns shape
                how institutions discuss AI use in coursework and research.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Policy, Standards, and Institutional Frameworks
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Global and national bodies have developed guidance on AI ethics. UNESCO&apos;s
            Recommendation on the Ethics of AI outlines broad principles and governance priorities.
            In the United States, federal agencies have produced frameworks such as the NIST AI Risk
            Management Framework.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Within higher education, institutional guidance is uneven. Some universities provide
            clear guidelines on privacy, accessibility, and appropriate AI use. Others are still
            developing policy, which can make expectations inconsistent across courses, departments,
            or programs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            What This Means for Students
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Students may encounter AI tools in coursework, research, internships, and campus
            services. Institutional guidance often focuses on what kinds of data can be entered into
            AI systems, especially when tools are public or third-party services. The baseline for
            privacy and confidentiality matters.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Equity and accessibility also matter. AI tools are not equally usable for all students,
            and reliance on AI can widen gaps for those with limited access to technology or
            appropriate resources. Many institutional frameworks highlight the need for
            accessibility and careful evaluation before AI tools are integrated into learning.
          </p>
        </div>
      </section>
    </div>
  )
}
