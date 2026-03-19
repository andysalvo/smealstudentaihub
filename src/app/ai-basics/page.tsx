import {
  PageLayout,
  FeaturedSourceCard,
  LinkedInLearningLink,
  YouTubeEmbed,
  CrossLinkCard,
} from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Basics',
  description:
    'Foundational concepts behind artificial intelligence -- what these systems are, how they work, and where their capabilities and limits lie.',
}

export default function AIBasicsPage() {
  return (
    <PageLayout title="AI Basics">
      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          Artificial intelligence is a broad term used to describe computer systems that can perform
          tasks typically associated with human decision-making, such as recognizing patterns,
          making predictions, or supporting judgments.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          This section introduces the foundational ideas behind AI: what these systems are, how they
          work at a high level, and where their capabilities and limits lie. The goal is to give
          students a shared baseline for understanding AI concepts that appear throughout the
          Student AI Hub.
        </p>
      </div>

      <FeaturedSourceCard
        title="IBM -- What Is Artificial Intelligence?"
        description="A plain-language overview of artificial intelligence, including core definitions and common examples."
        url="https://www.ibm.com/think/topics/artificial-intelligence"
        institution="IBM Think"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">What is Artificial Intelligence?</h2>
        <p className="text-hub-text text-base leading-relaxed">
          Artificial intelligence refers to computer systems designed to perform tasks that usually
          require human judgment, such as recognizing patterns, making predictions, or supporting
          decisions. These systems don&apos;t think or understand in a human sense. They operate by
          analyzing data and following learned patterns.
        </p>
      </div>

      <FeaturedSourceCard
        title="Columbia Engineering -- AI vs. Machine Learning"
        description="A clear, university-level explanation of how artificial intelligence and machine learning are related, how they differ, and why the distinction matters when discussing modern AI systems."
        url="https://ai.engineering.columbia.edu/ai-vs-machine-learning/"
        institution="Columbia Engineering"
      />

      <LinkedInLearningLink
        title="Introduction to artificial intelligence (AI)"
        url="https://www.linkedin.com/learning/responsible-ai-principles-and-practical-applications/introduction-to-artificial-intelligence-ai?u=76811570"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">How AI Systems Work</h2>
        <p className="text-hub-text text-base leading-relaxed">
          Most modern AI systems work by analyzing data and identifying patterns rather than
          following fixed instructions. Instead of being programmed step by step, these systems are
          trained using examples. Over time, they learn which patterns are useful for making
          predictions or decisions.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          At a high level, this process involves three main pieces: data, models, and feedback. Data
          provides examples, models look for patterns, and feedback helps the system improve. This
          is why AI systems often get better with more relevant data, but also why their behavior
          depends heavily on what data they are trained on.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          AI systems do not understand context or meaning in the way humans do. They generate
          outputs based on learned relationships in data, not intent or awareness.
        </p>
      </div>

      <LinkedInLearningLink
        title="Explore machine learning in the AI age"
        url="https://www.linkedin.com/learning/machine-learning-with-scikit-learn-28473142/explore-machine-learning-in-the-ai-age?u=76811570"
      />

      <YouTubeEmbed title="What Is Artificial Intelligence? (5-minute overview)" />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Machine Learning and Training</h2>
        <p className="text-hub-text text-base leading-relaxed">
          Machine learning is a common approach used in AI systems. In machine learning, a system is
          trained on a dataset so it can make predictions or classifications when it encounters new
          information.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          For example, a system trained on past sales data might learn to forecast demand, while a
          system trained on images might learn to recognize objects. The quality of the output
          depends on the quality, scope, and limitations of the training data.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Because training data reflects real-world conditions, machine learning systems can also
          reflect real-world biases or gaps. Understanding how training works helps explain both the
          strengths and weaknesses of AI tools.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">What AI Can and Can&apos;t Do</h2>
        <p className="text-hub-text text-base leading-relaxed">
          AI systems are effective at handling large amounts of information, identifying patterns,
          and supporting decisions. They can increase efficiency, assist with analysis, and help
          automate repetitive tasks.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          At the same time, AI systems can make mistakes, generate misleading outputs, or reflect
          biases in their training data. They do not understand goals, values, or consequences
          unless those considerations are explicitly built into how they are used.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          This is why AI should be treated as a tool that supports human judgment, not a replacement
          for it.
        </p>
      </div>

      <FeaturedSourceCard
        title="MIT Sloan -- Machine Learning Explained"
        description="A clear, business-oriented explanation of how machine learning systems work, what they are good at, and where their limitations lie. Emphasizes why human judgment and oversight remain essential when using AI tools."
        url="https://mitsloan.mit.edu/ideas-made-to-matter/machine-learning-explained"
        institution="MIT Sloan Management Review"
      />

      <FeaturedSourceCard
        title='Johns Hopkins University -- How AI Works and the "Black Box"'
        description='An accessible explanation of why many AI systems are difficult to interpret, how models make decisions, and what the "black box" problem means in practice. Helps clarify why AI outputs should be evaluated carefully rather than taken at face value.'
        url="https://www.library.jhu.edu/news/approaching-the-black-box-how-ai-works"
        institution="Johns Hopkins University"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Why These Basics Matter for Students</h2>
        <p className="text-hub-text text-base leading-relaxed">
          Understanding how AI works at a foundational level helps students use these tools more
          effectively and responsibly. It allows users to ask better questions, evaluate outputs
          critically, and recognize when AI is being used appropriately.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          These basics are especially important in academic and professional settings, where
          accuracy, integrity, and accountability matter. A clear understanding of AI fundamentals
          makes it easier to navigate later topics such as ethical use, policy, and real-world
          applications.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Continue Exploring</h2>
        <p className="text-hub-text text-base leading-relaxed">
          Now that you&apos;ve covered the basics, you can explore how AI is used in academic and
          professional settings, or review the rules and risks that guide responsible use.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <CrossLinkCard
          title="Rules, Risks, and Ethics of AI"
          description="An overview of academic integrity, risk, and ethical considerations related to the use of artificial intelligence. Featuring sources from UNESCO, NIST, the AAUP, Harvard University, and academic research organizations."
          href="/rules-risks-and-ethics-of-ai"
        />
        <CrossLinkCard
          title="Using AI for School and Work"
          description="Guidance on how AI tools are commonly used in academic and professional settings, with attention to appropriate, responsible, and ethical use. Featuring guidance from Stanford University, Oregon State University, and other higher-education institutions."
          href="/using-ai-for-school-and-work"
        />
      </div>
    </PageLayout>
  )
}
