import Link from 'next/link'
import { ReadingProgress } from '@/components/ui/ReadingProgress'

export default function OpenClaw() {
  return (
    <div className="pt-14">
      <ReadingProgress />
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
            November 2025 to March 2026
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-display font-bold tracking-tight text-navy leading-tight">
            OpenClaw: How a Weekend Project Became the Fastest-Growing Open Source AI Agent in
            History
          </h1>
          <p className="mt-4 text-base text-text-muted leading-relaxed">
            An Austrian developer built an AI assistant that runs on your own machine, works through
            the chat apps you already use, and hit 138,000 GitHub stars in under three months. Then
            OpenAI hired him.
          </p>
        </div>
      </section>

      <section className="max-w-[65ch] mx-auto px-6 py-12 pb-24">
        <div className="space-y-5 text-[15px] text-text-muted leading-relaxed">
          <p>
            OpenClaw is an open-source AI agent platform created by Peter Steinberger. It started as
            a weekend project in November 2025 under the name &quot;WhatsApp Relay.&quot; Within two
            months it had over 100,000 GitHub stars and attracted 2 million visitors in a single
            week. As of March 2026, the project has surpassed 138,000 stars.
          </p>

          <p>
            Unlike standard chatbots, OpenClaw runs locally on the user&apos;s own hardware and
            connects to messaging platforms they already use. It supports WhatsApp, Telegram,
            Discord, Slack, Teams, Twitch, and Google Chat. It can perform autonomous actions:
            managing calendars, sorting emails, running system commands, sharing images, and
            coordinating tasks across applications.
          </p>

          <div className="my-8 p-6 bg-surface-alt rounded-xl border-l-3 border-l-beaver-blue">
            <p>
              <strong className="text-navy">What makes it different?</strong> OpenClaw is not an AI
              model. It is an <strong className="text-text">agentic harness</strong> -- a framework
              that enables AI agents to decompose goals into subtasks, connect to software tools,
              and maintain memory of their actions. It works with multiple underlying models and
              runs on user-controlled infrastructure. As Steinberger puts it: &quot;Your assistant.
              Your machine. Your rules.&quot;
            </p>
          </div>

          <p>
            The project went through three names before landing on OpenClaw. The original name
            &quot;Clawd&quot; drew a legal challenge from Anthropic. It became &quot;Moltbot&quot;
            briefly, referencing the lobster&apos;s process of molting as a metaphor for growth. The
            red lobster mascot stuck, and the phrase &quot;raise a lobster&quot; became shorthand
            for setting up your own AI agent.
          </p>

          <p>
            <strong className="text-text">The China phenomenon.</strong> In March 2026, OpenClaw
            adoption exploded in China. Nearly 1,000 people queued at Tencent&apos;s Shenzhen
            headquarters to install it. Major cloud providers -- Alibaba Cloud, Tencent Cloud,
            ByteDance&apos;s Volcano Engine, JD.com, and Baidu -- all launched their own
            OpenClaw-compatible products. Shenzhen&apos;s Longgang district offered up to 10 million
            yuan ($1.4 million) in subsidies for startup projects built on the platform.
          </p>

          <p>
            On February 14, 2026, Steinberger announced he was joining OpenAI and that the OpenClaw
            project would be transferred to an open-source foundation. The move signals that even
            the largest AI companies see agentic frameworks -- not just models -- as a critical part
            of the next phase of AI infrastructure.
          </p>

          <p>
            <strong className="text-navy">Why this matters for students.</strong> OpenClaw
            demonstrates a shift in how AI is deployed. The most-used AI tools today are cloud
            services accessed through a browser. OpenClaw runs locally, connects to existing tools,
            and acts on your behalf. It also shows that a single developer with a clear idea can
            create something that scales globally in weeks. For business students, the speed of
            adoption, the platform dynamics in China, and the open-source-to-acquisition pipeline
            are all worth studying.
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
                title: 'OpenClaw Blog: Introducing OpenClaw',
                url: 'https://openclaw.ai/blog/introducing-openclaw',
              },
              {
                title: "Fortune: How OpenClaw is transforming China's AI sector",
                url: 'https://fortune.com/2026/03/14/openclaw-china-ai-agent-boom-open-source-lobster-craze-minimax-qwen/',
              },
              {
                title: "CNBC: China's tech firms feast on OpenClaw",
                url: 'https://www.cnbc.com/2026/03/12/china-openclaw-ai-agent-adoption-tech-companies-government-support-lobster-shrimp.html',
              },
              {
                title: "MIT Technology Review: Hustlers are cashing in on China's OpenClaw craze",
                url: 'https://www.technologyreview.com/2026/03/11/1134179/china-openclaw-gold-rush/',
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
