import {
  PageLayout,
  FeaturedSourceCard,
  LinkedInLearningLink,
  YouTubeEmbed,
} from '@/components/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Using AI for School and Work',
  description:
    'How AI tools are commonly used in academic and professional settings, with attention to appropriate, responsible, and ethical use.',
}

export default function UsingAIPage() {
  return (
    <PageLayout title="Using AI for School and Work">
      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          AI tools are increasingly used in academic and professional settings. Students may
          encounter them while studying, writing, coding, analyzing data, or organizing information
          for work.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          This section describes common ways AI shows up in school and workplace contexts. It
          focuses on how these tools are typically used, what they are capable of, and where careful
          judgment is needed, rather than offering instructions or recommendations.
        </p>
      </div>

      <LinkedInLearningLink
        title="How to Boost Your Productivity with AI Tools (2023)"
        url="https://www.linkedin.com/learning/how-to-boost-your-productivity-with-ai-tools-2023/ai-is-a-dream-for-productivity?u=76811570"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Common Ways AI is Used</h2>
        <p className="text-hub-text text-base leading-relaxed">
          In school and work environments, AI tools are often used to support tasks that involve
          language, information processing, or pattern recognition.
        </p>
        <p className="text-hub-text text-base leading-relaxed">Common uses include:</p>
        <ul className="list-disc list-inside text-hub-text text-base leading-relaxed space-y-2">
          <li>generating or refining written text</li>
          <li>summarizing readings or documents</li>
          <li>assisting with coding or debugging</li>
          <li>organizing notes or outlining ideas</li>
          <li>analyzing large amounts of information</li>
        </ul>
        <p className="text-hub-text text-base leading-relaxed">
          In many cases, AI is used to speed up routine work or to help users get unstuck when
          starting a task. The tools themselves do not understand the goals of an assignment or the
          expectations of an instructor or employer.
        </p>
      </div>

      <FeaturedSourceCard
        title="Stanford -- AI and Your Learning"
        description="An overview of how AI tools are commonly used in learning contexts, including benefits, risks, and expectations around appropriate academic use."
        url="https://ctl.stanford.edu/aimes/ai-learning-guide-students"
        institution="Stanford Center for Teaching and Learning"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">AI as Support, not Replacement</h2>
      </div>

      <LinkedInLearningLink
        title="Developing a Learning Mindset in the Age of AI"
        url="https://www.linkedin.com/learning/developing-a-learning-mindset-in-the-age-of-ai/the-importance-of-developing-a-learning-mindset?u=76811570"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          In both academic and professional settings, AI is typically used as a support tool rather
          than a replacement for human judgment.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          While AI systems can generate text, suggestions, or code, they do not understand context
          in the way people do. They rely on patterns from existing data and may produce outputs
          that sound confident but are incomplete, misleading, or incorrect.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          As a result, AI-generated material usually requires review, interpretation, and revision
          by a person before it is appropriate for use in school or work.
        </p>
      </div>

      <LinkedInLearningLink
        title="Learning with Agility in the Age of AI"
        url="https://www.linkedin.com/learning/learning-with-agility-in-the-age-of-ai/the-importance-of-learning-agility-in-the-age-of-ai?u=76811570"
      />

      <YouTubeEmbed title="AI & Education: Generative AI & the Future of Critical Thinking" />

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Accuracy and Reliability</h2>
        <p className="text-hub-text text-base leading-relaxed">
          AI tools can produce errors, make incorrect assumptions, or generate information that
          appears credible but is not accurate. This is especially common when tools are asked to
          explain complex topics, summarize unfamiliar material, or provide sources.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Because of this, AI output is often treated as a starting point rather than a final
          answer. Information generated by AI typically needs to be checked against course
          materials, original sources, or other reliable references.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">
          Academic and Professional Expectations
        </h2>
        <p className="text-hub-text text-base leading-relaxed">
          Expectations around AI use vary widely across classes, disciplines, workplaces, and
          organizations.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          In academic settings, instructors may have different policies or expectations regarding
          whether and how AI tools can be used. In professional settings, organizations may have
          guidelines related to confidentiality, data use, or acceptable applications of AI.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          Understanding these expectations usually requires consulting:
        </p>
        <ul className="list-disc list-inside text-hub-text text-base leading-relaxed space-y-2">
          <li>course syllabi or assignment instructions</li>
          <li>instructors or supervisors</li>
          <li>institutional or organizational policies</li>
        </ul>
        <p className="text-hub-text text-base leading-relaxed">
          AI tools do not account for these expectations on their own.
        </p>
      </div>

      <div className="prose-hub max-w-3xl space-y-6">
        <h2 className="text-2xl font-bold text-hub-white">Data, Privacy, and Confidentiality</h2>
      </div>

      <FeaturedSourceCard
        title="Oregon State University -- Using Artificial Intelligence"
        description="An institutional guide outlining appropriate uses of AI in academic and professional settings, with attention to boundaries, judgment, and responsibility."
        url="https://scs.oregonstate.edu/using-artificial-intelligence"
        institution="Oregon State University"
      />

      <FeaturedSourceCard
        title="AAUP -- Artificial Intelligence and Academic Integrity"
        description="A discussion of how AI intersects with academic standards, faculty expectations, and institutional policies across disciplines."
        url="https://www.aaup.org/reports-publications/aaup-policies-reports/topical-reports/artificial-intelligence-and-academic"
        institution="American Association of University Professors"
      />

      <div className="prose-hub max-w-3xl space-y-6">
        <p className="text-hub-text text-base leading-relaxed">
          Some AI tools store user inputs or use them to improve their systems. This can raise
          concerns when working with sensitive, personal, or confidential information.
        </p>
        <p className="text-hub-text text-base leading-relaxed">
          In school and work contexts, this may include:
        </p>
        <ul className="list-disc list-inside text-hub-text text-base leading-relaxed space-y-2">
          <li>unpublished research or assignments</li>
          <li>personal data</li>
          <li>proprietary or organizational information</li>
        </ul>
        <p className="text-hub-text text-base leading-relaxed">
          For this reason, the type of information entered into an AI tool can matter as much as the
          task the tool is used for.
        </p>
      </div>

      <YouTubeEmbed title="How artificial intelligence is reshaping college for students and professors" />
    </PageLayout>
  )
}
