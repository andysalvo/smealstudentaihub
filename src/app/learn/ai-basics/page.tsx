import Link from 'next/link'

export default function AIBasics() {
  return (
    <div className="pt-14">
      <section className="max-w-3xl mx-auto px-6 py-14">
        <Link
          href="/learn"
          className="text-[12px] text-beaver-blue hover:text-navy transition-colors"
        >
          &larr; Learn
        </Link>
        <h1 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy">AI Basics</h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16 space-y-10">
        <div>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Artificial intelligence is a broad term used to describe computer systems that can
            perform tasks typically associated with human decision-making, such as recognizing
            patterns, making predictions, or supporting decisions. These systems don&apos;t think or
            understand in a human way. They operate by analyzing data and following learned
            patterns.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            This section introduces the foundational ideas behind AI: what it is, how systems work,
            what AI can and can&apos;t do, and why these basics matter for students. The goal is to
            give students a shared baseline for understanding the tools that appear across business
            disciplines.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            What is Artificial Intelligence?
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Artificial intelligence refers to computer systems designed to perform tasks that
            usually require human judgment, such as recognizing patterns, making predictions, or
            supporting decisions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">How AI Systems Work</h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Most AI systems work by analyzing data and identifying patterns rather than following
            fixed instructions. Instead of being programmed step by step, these systems are trained
            using examples. Over time, they learn which patterns are useful for making predictions
            or decisions.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            At a high level, this process involves three main pieces: data, models, and feedback.
            Data provides examples, models look for patterns, and feedback helps the model improve.
            The key is that the system gets better not from someone writing rules, but from exposure
            to more data.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            AI systems do not understand context or meaning in the way humans do. They generate
            outputs based on correlations in data, not on lived experience or awareness.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Machine Learning and Training
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Machine learning is a common approach used in AI. Rather than programming specific
            rules, a dataset is used so the system can make predictions or classification based on
            patterns. For example, a system trained on past sales data might learn to forecast
            demand, or a model trained on images might learn to recognize objects.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            Because training data reflects real-world conditions, models can inherit existing biases
            or gaps. Understanding how training works helps evaluate both the strengths and
            weaknesses of AI tools.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            What AI Can and Can&apos;t Do
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            AI systems are effective at processing large volumes of data, identifying patterns, and
            supporting decisions. They can increase speed and consistency in tasks that involve
            repetitive analysis.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            At the same time, AI systems can make mistakes, generate misleading outputs, or reflect
            biases in their training data. They are not aware of goals, values, or consequences
            unless those considerations are explicitly built into the system.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            This is why AI should be treated as a tool that supports human judgment, not one that
            replaces it.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-display font-semibold text-navy mb-4">
            Why These Basics Matter for Students
          </h2>
          <p className="text-[15px] text-text-muted leading-relaxed">
            Understanding how AI works at a foundational level helps students use these tools more
            carefully. It gives you the vocabulary to ask better questions, evaluate outputs
            critically, and recognize when AI is being used appropriately.
          </p>
          <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
            These basics are especially important in academic and professional settings, where
            accuracy, integrity, and accountability shape how tools are used. Students benefit from
            understanding enough of the fundamental models to navigate later topics such as ethical
            use, policy, and real-world applications.
          </p>
        </div>

        {/* Continue Exploring */}
        <div className="pt-8 border-t border-border">
          <p className="text-[13px] font-semibold text-navy mb-3">Continue Exploring</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/learn/rules-risks-and-ethics"
              className="p-4 bg-surface rounded-lg border border-border hover:border-beaver-blue/40 transition-all"
            >
              <p className="text-[13px] font-semibold text-navy">Rules, Risks, and Ethics of AI</p>
              <p className="text-[12px] text-text-muted mt-1">
                An overview of academic integrity, bias, and ethical considerations related to the
                use of artificial intelligence.
              </p>
            </Link>
            <Link
              href="/learn/using-ai-for-school-and-work"
              className="p-4 bg-surface rounded-lg border border-border hover:border-beaver-blue/40 transition-all"
            >
              <p className="text-[13px] font-semibold text-navy">Using AI for School and Work</p>
              <p className="text-[12px] text-text-muted mt-1">
                Guidance on how AI tools are commonly used in academic and professional settings.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
