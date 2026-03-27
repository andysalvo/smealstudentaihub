import Link from 'next/link'

export default function AnthropicInjunction() {
  return (
    <div className="pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/40 to-white" />
        <div className="relative max-w-[65ch] mx-auto px-6 py-24 md:py-32">
          <Link
            href="/ai-news"
            className="text-xs text-beaver-blue hover:text-navy transition-colors duration-300"
          >
            &larr; AI News
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-beaver-blue/70">
            March 2026
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-display font-bold tracking-tight text-navy leading-tight">
            Anthropic Wins Injunction in Court Battle With Trump Administration
          </h1>
          <p className="mt-4 text-base text-text-muted leading-relaxed">
            A federal judge ruled that the government&apos;s measures appear designed to punish
            Anthropic in a standoff over military use of AI. The preliminary injunction blocks the
            Pentagon&apos;s &quot;supply chain risk&quot; designation.
          </p>
        </div>
      </section>

      <section className="max-w-[65ch] mx-auto px-6 py-12 pb-24">
        <div className="space-y-5 text-[15px] text-text-muted leading-relaxed">
          <p>
            U.S. District Judge Rita Lin granted Anthropic a preliminary injunction on March 26,
            2026, blocking the Trump administration from enforcing a designation that had
            effectively banned the company&apos;s Claude AI from all government use. The ruling came
            after weeks of escalation between the AI company and the Department of Defense over what
            restrictions should apply to military applications of the technology.
          </p>

          <p>
            The dispute began in February 2026 during contract negotiations between Anthropic and
            the Pentagon. Anthropic refused to agree to &quot;all lawful use&quot; contract clauses,
            citing safety concerns about two specific applications:{' '}
            <strong className="text-text">fully autonomous weapons without human oversight</strong>{' '}
            and <strong className="text-text">mass domestic surveillance</strong>. The company
            argued that Claude had not been adequately tested for those purposes and that removing
            its safety guardrails in those areas would be irresponsible.
          </p>

          <p>
            On February 27, Defense Secretary Pete Hegseth designated Anthropic as a &quot;national
            security supply chain risk,&quot; a classification that prohibited the Department of
            Defense and all government contractors from using the company&apos;s technology.
            President Trump directed federal agencies to cease Anthropic use the same day.
          </p>

          <div className="my-8 p-6 bg-surface-alt rounded-xl border-l-3 border-l-beaver-blue">
            <p>
              <strong className="text-navy">What is a supply chain risk designation?</strong> Under
              federal procurement rules, the government can flag companies as risks to the national
              security supply chain. The designation goes beyond simply ending a contract. It bars
              not just direct government use, but also use by any company that does business with
              the government. For a technology company, it functions as an effective ban from the
              entire federal ecosystem.
            </p>
          </div>

          <p>
            Anthropic filed suit on March 9, alleging First Amendment retaliation, Administrative
            Procedure Act violations, and Fifth Amendment due process violations. The company argued
            that the designation was &quot;unprecedented and unlawful&quot; retaliation for
            advocating responsible AI practices.
          </p>

          <p>
            The government countered that the dispute involved &quot;contract negotiations and
            national security concerns rather than retaliation,&quot; and that officials were
            worried about Anthropic&apos;s &quot;potential future conduct&quot; if the company
            retained access to government infrastructure.
          </p>

          <p>
            At the March 24 hearing in San Francisco, Judge Lin was skeptical of the
            government&apos;s arguments. She questioned whether Anthropic faced punishment
            specifically for criticizing the government publicly, and referenced an amicus brief
            that described the situation as &quot;attempted corporate murder.&quot; &quot;I
            don&apos;t know if it&apos;s murder,&quot; she said, &quot;but it looks like an attempt
            to cripple Anthropic.&quot;
          </p>

          <p>
            In her ruling two days later, Judge Lin wrote: &quot;Punishing Anthropic for bringing
            public scrutiny to the government&apos;s contracting position is classic illegal First
            Amendment retaliation.&quot;
          </p>

          <p>
            Microsoft, Google, OpenAI researchers, and retired military officers filed amicus briefs
            supporting Anthropic. The American Federation of Government Employees argued that the
            administration used national security as a &quot;pretext for retaliation.&quot;
          </p>

          <p>
            <strong className="text-navy">Why this matters for students.</strong> This case sits at
            the intersection of AI safety, government power, and corporate speech. Anthropic built
            safety restrictions into its product and refused to remove them when a government
            customer demanded it. The government responded by attempting to cut the company off from
            the entire federal market. The court ruled that the government cannot use procurement
            authority to punish companies for their public positions on how their technology should
            be used. For students entering careers where AI is increasingly present, the question of
            who decides the boundaries of AI deployment, and what happens when those boundaries are
            contested, is not theoretical.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs font-semibold text-navy uppercase tracking-[0.15em] mb-4">
            Sources
          </p>
          <ul className="space-y-2">
            {[
              {
                title:
                  'Wall Street Journal: Anthropic Wins Injunction in Court Battle With Trump Administration',
                url: 'https://www.wsj.com/tech/ai/anthropic-wins-injunction-in-court-battle-with-trump-administration-c6b4f8a2',
              },
              {
                title: 'Fortune: Anthropic and Department of War spar in court',
                url: 'https://fortune.com/2026/03/24/anthropic-hegseth-trump-risk-ai-court-ruling/',
              },
              {
                title: 'Al Jazeera: Anthropic challenges US Pentagon ban in court showdown',
                url: 'https://www.aljazeera.com/economy/2026/3/24/anthropic-challenges-us-pentagons-ban-in-san-francisco-court-showdown',
              },
              {
                title: 'TechCrunch: Pentagon told Anthropic the two sides were nearly aligned',
                url: 'https://techcrunch.com/2026/03/20/new-court-filing-reveals-pentagon-told-anthropic-the-two-sides-were-nearly-aligned-a-week-after-trump-declared-the-relationship-kaput/',
              },
            ].map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-link hover:text-link-hover transition-colors duration-300"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
