import Link from 'next/link'

export default function AMILabs() {
  return (
    <div className="pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-alt/40 to-white" />
        <div className="relative max-w-3xl mx-auto px-6 py-14">
          <Link
            href="/ai-news"
            className="text-[12px] text-beaver-blue hover:text-navy transition-colors duration-300"
          >
            &larr; AI News
          </Link>
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.15em] text-beaver-blue/70">
            March 2026
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-display font-bold tracking-tight text-navy leading-tight">
            Yann LeCun&apos;s AMI Labs Raises $1B to Build AI That Learns From the Physical World
          </h1>
          <p className="mt-4 text-[16px] text-text-muted leading-relaxed">
            The Turing Award winner left Meta to bet against the technology that powers ChatGPT. His
            startup just raised the largest seed round ever recorded for a European company.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 pb-16">
        <div className="space-y-5 text-[15px] text-text-muted leading-relaxed">
          <p>
            AMI Labs announced a $1.03 billion seed round on March 10, 2026, at a $3.5 billion
            pre-money valuation. The company was founded by Yann LeCun, who spent over a decade as
            Meta&apos;s Chief AI Scientist and is one of three researchers credited with pioneering
            deep learning.
          </p>

          <p>
            The startup is building what it calls{' '}
            <strong className="text-text">world models</strong>. Where large language models learn
            by predicting the next word in a sequence of text, world models learn by processing data
            from cameras, sensors, and physical environments. The goal is AI that can predict the
            consequences of actions, reason about cause and effect, and plan in real-world settings.
          </p>

          <div className="my-8 p-6 bg-surface-alt rounded-lg border-l-3 border-l-beaver-blue">
            <p>
              <strong className="text-navy">What is JEPA?</strong> AMI&apos;s approach is built on
              Joint Embedding Predictive Architecture, a framework LeCun developed at Meta. Large
              language models treat every piece of input as equally important and predict at the
              level of individual tokens. JEPA takes a different approach: it stores higher-level
              representations rather than pixel-by-pixel or token-by-token data, and predicts in a
              compressed latent space. The core idea is that real-world sensors contain enormous
              amounts of unpredictable noise. Rather than modeling that noise, JEPA learns compact
              representations of what matters and how actions change environments.
            </p>
          </div>

          <p>
            The round was co-led by Cathay Innovation, Greycroft, Hiro Capital, HV Capital, and
            Bezos Expeditions, with participation from Nvidia and Samsung Electronics. Individual
            backers include Jeff Bezos, Mark Cuban, Eric Schmidt, and Tim Berners-Lee.
          </p>

          <p>
            LeCun has been publicly critical of the dominant approach in AI for several years. He
            has argued that large language models cannot achieve genuine understanding because they
            learn only from text, which represents a narrow slice of how the world works. AMI is his
            attempt to prove a different architecture can do better.
          </p>

          <p>
            The leadership team includes LeBrun as CEO, Laurent Solly (formerly Meta&apos;s VP for
            Europe) as COO, Saining Xie as Chief Science Officer, and Pascale Fung as Chief Research
            and Innovation Officer.
          </p>

          <p>
            <strong className="text-navy">Why this matters for students.</strong> Most AI tools that
            students encounter today are built on large language models. AMI represents a serious,
            well-funded challenge to that approach from one of the field&apos;s most credible
            researchers. Whether world models succeed or not, the debate is worth understanding. It
            shows that the field is not settled, and that the next generation of AI systems may work
            very differently from the ones students use now.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-[12px] font-semibold text-navy uppercase tracking-wide mb-4">
            Sources
          </p>
          <ul className="space-y-2">
            {[
              {
                title: 'TechCrunch: AMI Labs raises $1.03B to build world models',
                url: 'https://techcrunch.com/2026/03/09/yann-lecuns-ami-labs-raises-1-03-billion-to-build-world-models/',
              },
              {
                title: "MIT Technology Review: LeCun's contrarian bet against LLMs",
                url: 'https://www.technologyreview.com/2026/01/22/1131661/yann-lecuns-new-venture-ami-labs/',
              },
              {
                title: 'SiliconANGLE: AMI Labs raises $1.03B to train world models',
                url: 'https://siliconangle.com/2026/03/10/yann-lecuns-new-startup-ami-labs-raises-1-03b-train-world-models/',
              },
              {
                title: 'Latent Space: AMI Labs launches with $1B seed',
                url: 'https://www.latent.space/p/ainews-yann-lecuns-ami-labs-launches',
              },
            ].map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-link hover:text-link-hover transition-colors duration-300"
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
