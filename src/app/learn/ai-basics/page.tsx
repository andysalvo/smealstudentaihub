import Link from 'next/link'
import { SourceCard } from '@/components/ui/SourceCard'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'

export default function AIBasics() {
  return (
    <div className="pt-14">
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <Link
          href="/learn"
          className="text-xs text-beaver-blue hover:text-navy transition-colors"
        >
          &larr; Learn
        </Link>
        <h1 className="mt-4 text-3xl font-display font-bold tracking-tight text-navy">AI Basics</h1>
        <p className="mt-3 text-[15px] text-text-muted max-w-2xl">
          Artificial intelligence is a broad term used to describe computer systems that can perform
          tasks typically associated with human decision-making, such as recognizing patterns,
          making predictions, or supporting decisions.
        </p>
        <p className="mt-3 text-[15px] text-text-muted max-w-2xl">
          This section introduces the foundational ideas behind AI, what it can and can&apos;t do,
          and why understanding these basics matters. The goal is to give students a shared baseline
          for understanding AI concepts that appear throughout the site.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        {/* What is AI - two column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold text-navy mb-4">
              What is Artificial Intelligence?
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed">
              Artificial intelligence refers to computer systems designed to perform tasks that
              usually require human judgment, such as recognizing patterns, making predictions, or
              supporting decisions.
            </p>
            <div className="mt-4">
              <SourceCard
                title="Columbia Engineering — AI vs. Machine Learning"
                description='A clear overview of AI, machine learning, and deep learning: "what they are, how they differ, and why they matter."'
                source="Columbia Engineering"
                url="https://ai.engineering.columbia.edu/ai-vs-machine-learning/"
              />
            </div>
          </div>
          <div className="space-y-4">
            <SourceCard
              title="IBM — What is Artificial Intelligence?"
              description="A wider-ranging overview of artificial intelligence covering history, approaches, and applications."
              source="IBM Think"
              url="https://www.ibm.com/think/topics/artificial-intelligence"
            />
            <YouTubeEmbed
              videoId="2ePf9rue1Ao"
              title="Introduction to artificial intelligence (AI)"
            />
          </div>
        </div>

        {/* How AI Systems Work - two column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold text-navy mb-4">
              How AI Systems Work
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed">
              Most AI systems work by analyzing data and identifying patterns rather than following
              fixed instructions. Instead of being programmed step by step, these systems are
              trained using examples. Over time, they learn which patterns are useful for making
              predictions or decisions.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              At a high level, this process involves three main pieces: data, models, and feedback.
              Data provides examples, models look for patterns, and feedback helps the model
              improve. The key is that the system gets better not from someone writing rules, but
              from exposure to more data.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              AI systems do not understand context or meaning in the way humans do. They generate
              outputs based on correlations in data, not on lived experience or awareness.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-[15px] font-display font-semibold text-navy">
              Machine Learning and Training
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Machine learning is a common approach used in AI. Rather than programming specific
              rules, a dataset is used so the system can make predictions or classifications based
              on patterns.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              Because training data reflects real-world conditions, models can inherit existing
              biases or gaps. Understanding how training works helps evaluate both the strengths and
              weaknesses of AI tools.
            </p>
            <YouTubeEmbed videoId="ukzFI9rgwfU" title="Explore machine learning in the AI Age" />
          </div>
        </div>

        {/* What AI Can and Can't Do - two column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-semibold text-navy mb-4">
              What AI Can and Can&apos;t Do
            </h2>
            <p className="text-[15px] text-text-muted leading-relaxed">
              AI systems are effective at processing large volumes of data, identifying patterns,
              and supporting decisions. They can increase speed and consistency in tasks that
              involve repetitive analysis.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              At the same time, AI systems can make mistakes, generate misleading outputs, or
              reflect biases in their training data. They are not aware of goals, values, or
              consequences unless those considerations are explicitly built into the system.
            </p>
            <p className="mt-4 text-[15px] text-text-muted leading-relaxed">
              This is why AI should be treated as a tool that supports human judgment, not one that
              replaces it.
            </p>
            <div className="mt-4">
              <SourceCard
                title='Johns Hopkins University — "Black Box" AI'
                description="An accessible explanation of how AI models make decisions, and why the results aren't always transparent."
                source="Johns Hopkins University"
                url="https://hub.jhu.edu/2023/02/08/what-is-black-box-ai/"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-[15px] font-display font-semibold text-navy">
              Why These Basics Matter for Students
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Understanding how AI works at a foundational level helps students use these tools more
              carefully. It gives you the vocabulary to ask better questions, evaluate outputs
              critically, and recognize when AI is being used appropriately.
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              These basics are especially important in academic and professional settings, where
              accuracy, integrity, and accountability shape how tools are used.
            </p>
            <YouTubeEmbed videoId="ad79nYk2keg" title="MIT Sloan — Machine Learning Explained" />
          </div>
        </div>

        {/* Continue Exploring */}
        <div className="pt-8 border-t border-border">
          <p className="text-[15px] font-display font-semibold text-navy mb-4">
            Continue Exploring
          </p>
          <p className="text-sm text-text-muted mb-4">
            Now that you&apos;ve covered the basics, you can explore how AI is used in academic and
            professional settings, or review the risks and rules that guide its responsible use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/learn/rules-risks-and-ethics"
              className="p-6 bg-surface rounded-xl border border-border hover:border-beaver-blue/40 hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-sm font-display font-semibold text-navy">
                Rules, Risks, and Ethics of AI
              </p>
              <p className="text-xs text-text-muted mt-1">
                An overview of academic integrity, bias, and ethical considerations related to the
                use of artificial intelligence.
              </p>
            </Link>
            <Link
              href="/learn/using-ai-for-school-and-work"
              className="p-6 bg-surface rounded-xl border border-border hover:border-beaver-blue/40 hover:shadow-lg hover:shadow-navy/[0.06] hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-sm font-display font-semibold text-navy">
                Using AI for School and Work
              </p>
              <p className="text-xs text-text-muted mt-1">
                Guidance on how AI tools are commonly used in academic and professional settings.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
