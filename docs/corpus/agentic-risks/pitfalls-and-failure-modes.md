# Agentic Development Pitfalls and Failure Modes

> Last updated: 2026-03-24
> Category: agentic-risks
> Confidence: Official (Anthropic, Google DORA, METR) + Community (production reports)
> Author: ajs10845

---

## Top Risks for Our Project (Ranked)

1. **Style drift** -- biggest ongoing risk
2. **Stale instructions** -- will bite us every semester during officer turnover
3. **Security vulnerabilities** -- highest consequence
4. **Context loss** -- will frustrate contributors
5. **Non-technical onboarding** -- our differentiator opportunity
6. **Cost** -- manageable at student org scale

---

## 1. Agent Conflict and Coordination

**What happens:** Two agents edit the same file. You get merge conflicts, duplicated implementations, or semantic contradictions that compile individually but break together.

**How common:** Very common in naive setups. Microsoft's "Swarm Diaries" had 3 of 6 branches conflict before adopting contract-first planning. Cursor's equal-status approach saw 20-agent throughput collapse to 2-3 agents' worth of work.

**Real incidents:**

- Steve Yegge's "Gas Town" project: agent erased production database passwords, autonomously merged PRs even when tests failed
- Microsoft experiment: LLM integrator ran `git restore --source=HEAD` and destroyed an entire agent's implementation

**How we prevent it:**

- Git worktrees: each agent gets its own isolated workspace
- Define interfaces before implementations
- Sequential merging: merge one branch, rebase remaining on top
- Never let two agents touch the same file

**Sources:** [Microsoft Swarm Diaries](https://techcommunity.microsoft.com/blog/appsonazureblog/the-swarm-diaries-what-happens-when-you-let-ai-agents-loose-on-a-codebase/4501393), [Running Multiple AI Agents in Parallel](https://zenvanriel.com/ai-engineer-blog/running-multiple-ai-coding-agents-parallel/)

---

## 2. Content and Style Drift

**What happens:** Agents optimize for locally plausible output, not global consistency. Naming patterns, architecture, and formatting slowly diverge. CodeRabbit study of 470 PRs: AI code has 2.66x more formatting problems, 2x more naming inconsistencies, 3x worse readability.

**How common:** Near-universal without countermeasures. AI PRs average 10.83 issues vs 6.45 for human PRs. Duplicated code increased from 8.3% to 12.3%. Refactoring dropped from 25% to under 10% of commits.

**How we prevent it:**

- Pre-commit hooks (ESLint, Prettier) catch formatting drift automatically
- Tailwind `no-arbitrary-value` rule prevents off-brand colors
- Provide 2-3 code snippets as "style anchors" in AGENTS.md
- Keep agent tasks small -- large tasks force agents to invent structure from generic patterns
- TDD forces incremental changes, prevents drift accumulation

**Sources:** [CodeRabbit: AI vs Human Code Report](https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report), [Avoid AI Code Drift with Small Steps](https://henko.net/blog/avoid-ai-code-drift-with-small-well-defined-steps/)

---

## 3. Context Window Limitations

**What happens:** As conversation fills, Claude Code compresses earlier messages (compaction). Agents lose track of decisions, re-read files, contradict their own choices. One developer: compaction triggered around 15-20 tool calls, then Claude lost its schema decisions.

**How common:** 65% of developers cite missing context as top cause of poor AI quality (Stack Overflow 2026). One user burned 71% of monthly tokens in 3 days, ~30% wasted on context rebuilding.

**How we prevent it:**

- CLAUDE.md provides persistent context without spending conversation tokens
- Subagents for discrete tasks -- separate context windows, report back summaries
- Fresh sessions for distinct tasks, not marathon sessions
- `/clear` between tasks

**Sources:** [Claude Code 200K Context Window Limits](https://aiproductivity.ai/news/claude-code-200k-context-window-limits/), [Anthropic: Effective Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

---

## 4. Hallucinated Dependencies

**What happens:** Agents generate imports referencing packages that don't exist. Attackers register those names as malicious packages ("slopsquatting"). USENIX Security 2025: 1 in 5 AI code samples references non-existent packages. 43% of hallucinations are repeatable -- same fake name across queries.

**Real incidents:**

- "huggingface-cli" (hallucinated PyPI package): 30,000+ downloads in 3 months
- "react-codeshift" spread to 237 repositories through forks
- "unused-imports" confirmed malicious, 233 downloads/week

**How we prevent it:**

- Open Code Review L1 checks npm registry for every import
- lockfile-lint validates registry integrity
- Socket.dev catches behavioral anomalies in new dependencies
- Never let agents run `npm install` without review

**Sources:** [Aikido: Slopsquatting](https://www.aikido.dev/blog/slopsquatting-ai-package-hallucination-attacks), [BleepingComputer: AI-Hallucinated Dependencies](https://www.bleepingcomputer.com/news/security/ai-hallucinated-code-dependencies-become-new-supply-chain-risk/)

---

## 5. Visual Regression

**What happens:** Agents modify CSS/layout in ways that pass tests but break visual appearance. Pixel shifts, broken responsive layouts, misaligned components invisible to unit tests.

**How common:** One staff engineer reported 100% failure rate on CSS layout tasks in early agent testing. Since AI code has 8x more performance issues, visual side effects are frequent.

**How we prevent it:**

- Playwright `toHaveScreenshot()` in CI catches layout changes
- PR preview deployments so reviewers see changes before merge
- Design system enforcement via Tailwind `@theme` + no-arbitrary-value

**Sources:** [Percy Visual Testing](https://www.browserstack.com/percy), [Chromatic for Storybook](https://www.chromatic.com/storybook)

---

## 6. Security Vulnerabilities

**What happens:** 45% of AI-generated code contains OWASP Top 10 vulnerabilities. AI code has 2.74x more security vulnerabilities than human code. Models are NOT improving at security even as coding accuracy improves.

**Specific rates:**

- 86% failed to defend against XSS (CWE-80)
- 88% vulnerable to log injection (CWE-117)
- One production report: Claude introduced XSS via unvalidated `javascript:` URLs that passed all functional tests

**How we prevent it:**

- CodeQL in CI on every PR (already in FFC scaffold)
- Gitleaks pre-commit hook + CI for secrets
- Never give agents access to production credentials
- Human review required for auth, input handling, data access paths

**Sources:** [Veracode: AI Code Security Report](https://www.veracode.com/blog/genai-code-security-report/), [OWASP Agentic AI Top 10](https://www.legitsecurity.com/blog/from-chatbot-to-code-threat-owasps-agentic-ai-top-10-and-the-specialized-risks-of-coding-agents)

---

## 7. Stale Instructions

**What happens:** CLAUDE.md / AGENTS.md files rot as the project evolves. New conventions undocumented. Old rules linger after refactors. Agents revert to deprecated patterns.

**How common:** Universal. "If you use more than one tool, things drift fast."

**How we prevent it:**

- AGENTS.md as single source of truth -- model-specific files are thin redirects
- Under 200 lines -- bloated files waste context and get ignored
- Update instructions when codebase changes, review in PRs
- If agent keeps making same mistake, add the missing instruction
- Semester transition: incoming officers review AGENTS.md as onboarding task

**Sources:** [Keep Your AGENTS.md in Sync](https://kau.sh/blog/agents-md/), [Anthropic: Using CLAUDE.md Files](https://claude.com/blog/using-claude-md-files)

---

## 8. Non-Technical Onboarding

**What happens:** Non-developers must articulate outcomes in natural language, make architecture decisions they don't understand, and review code they can't fully evaluate.

**The reality:** First attempt will be 95% garbage (Sanity). METR found experienced developers were 19% slower with AI tools while believing they were 24% faster -- non-developers face an even larger perception gap.

**How we prevent it:**

- CI pipeline catches problems automatically before code ships
- Pair non-technical members with a developer for first sessions
- Provide IDE (VS Code) alongside terminal for visual file management
- Issue-based contribution: describe what you want, agent builds it, maintainer reviews
- Plan mode for ambiguous features before jumping to implementation

**Sources:** [Sanity: First Attempt Will Be 95% Garbage](https://www.sanity.io/blog/first-attempt-will-be-95-garbage), [Non-Technical Founder's Claude Code Playbook](https://stormy.ai/blog/claude-code-startup-playbook-2026)

---

## 9. Cost and Token Usage

**Real data:**

- Average: $6/developer/day, 90% of users below $12/day
- Multi-agent coordination: ~7x more tokens than single-agent
- Context rebuilding after compaction wastes ~30% of tokens
- One user: 71% of monthly allocation in 3 days during unoptimized early use

**How we manage it:**

- Sonnet for routine work, Opus for architecture and security decisions
- Kill idle agent teammates -- they continue consuming tokens
- Start with 2 agents max, scale after mastering the review cycle
- Fresh sessions over marathon sessions (avoids context rebuilding waste)

**For our project:** A single Claude Pro subscription ($20/month) handles light maintenance. Budget for Max ($100-200/month) only during active development sprints.

**Sources:** [Claude Code: Manage Costs](https://code.claude.com/docs/en/costs), [Token-Per-Dollar Math](https://dev.to/yurukusa/the-token-per-dollar-math-running-claude-max-for-30-days-2k1o)

---

## Real Team Experiences

### Sanity (Staff Engineer, 6 weeks)

- AI writes 80% of initial implementations, first attempts are 95% garbage
- Three-attempt reality: 1st 95% wrong, 2nd 50% wrong, 3rd workable
- Features ship 2-3x faster after calibration period
- Cost: $1,000-1,500/month per senior engineer going all-in

### Expo Web Team (1 month)

- Long sessions cause output quality to deteriorate; must clear between tasks
- "LLMs still produce poorly architected solutions with surprising frequency"
- Enabled MCP integrations (Linear, Sentry, Figma, Graphite) to enrich context

### iximiuz (Production SaaS, 1 month)

- 50,000+ lines generated, all requiring authorship-level review
- Comprehensive fix prompts (500-750 words) produced worse results than fixing individually
- Reworking five catalogs "by analogy" took 30 min instead of a full day -- 10-100x velocity on well-scoped tasks

### Google DORA Report (2025)

- 90% AI adoption increase correlated with 9% climb in bug rates
- 91% increase in code review time, 154% increase in PR size
- 67.3% of AI-generated PRs rejected vs 15.6% for manual code

### METR Randomized Controlled Trial

- Experienced developers 19% slower with AI tools while believing they were 24% faster
- 39-percentage-point perception gap between belief and reality

### Amazon Kiro Incident (2026)

- After mandating 80% weekly AI coding assistant usage, suffered six-hour outage
- Knocked out checkout, login, product pricing
- Estimated 6.3 million lost orders

**Sources:** [sanity.io](https://www.sanity.io/blog/first-attempt-will-be-95-garbage), [expo.dev](https://expo.dev/blog/what-our-web-team-learned-using-claude-code-for-a-month), [iximiuz.com](https://iximiuz.com/en/posts/grounded-take-on-agentic-coding/), [Mike Mason](https://mikemason.ca/writing/ai-coding-agents-jan-2026/)
