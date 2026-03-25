export default function About() {
  return (
    <div className="pt-14">
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-display font-bold tracking-tight text-navy">
          About the Student AI Hub
        </h1>
        <div className="mt-6 space-y-5 text-[15px] text-text-muted leading-relaxed">
          <p>
            The Student AI Hub is a student-led initiative dedicated to building AI fluency at Penn
            State. It provides structured, source-based material designed to help students
            understand how AI systems function, how they are used in business and education, and how
            to apply them responsibly.
          </p>
          <p>
            The Hub was produced by Applied AI at Penn State, a registered student organization in
            the Smeal College of Business. All content was developed using AI tools directed by club
            members, following an editorial process documented in our voice brief and sourced from
            public references.
          </p>

          <h2 className="text-xl font-display font-semibold text-navy pt-4">How it was built</h2>
          <p>
            The reference sections were built from 22 curated public sources using
            retrieval-augmented generation. The AI could only use information from pre-approved
            material.
          </p>
          <p>
            The AI by Smeal Major modules were produced in two phases. Students drafted the
            conceptual content using AI tools and shared templates. That content was then designed
            into interactive HTML modules using AI development tools.
          </p>

          <h2 className="text-xl font-display font-semibold text-navy pt-4">
            Process and standards
          </h2>
          <p>
            Every piece of content follows the voice brief: field first, AI second. Sections stand
            alone. Limits are field-native. No conclusions. Describe, don&apos;t instruct.
          </p>
          <p>
            The site itself is open source and maintained through GitHub. Future updates are made
            through pull requests reviewed by club members. The research corpus, architecture
            decisions, and editorial standards are all documented in the repository.
          </p>

          <h2 className="text-xl font-display font-semibold text-navy pt-4">
            Applied AI at Penn State
          </h2>
          <p>
            Applied AI is a registered student organization at Penn State University Park. The club
            focuses on events and programming, applied research through Applied AI Labs, and
            curating tools and resources for students across Smeal.
          </p>
          <p className="text-[13px]">
            Contact:{' '}
            <a href="mailto:appliedaipsu@gmail.com" className="text-link hover:text-link-hover">
              appliedaipsu@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
