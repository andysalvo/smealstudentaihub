# Agent Workflow Patterns: Proven Approaches

> Last updated: 2026-03-24
> Category: agentic-risks
> Confidence: Official (GitHub, Anthropic, Microsoft) + Community
> Author: ajs10845

---

## 1. Issue-to-PR Agent Workflow

**Source:** [GitHub Copilot Coding Agent docs](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent)
**Source:** [Ten Months with CCA in dotnet/runtime](https://devblogs.microsoft.com/dotnet/ten-months-with-cca-in-dotnet-runtime/)
**Accessed:** 2026-03-24 | **Confidence:** Official

The proven flow:

1. Issue created with clear description
2. Agent assigned (via @copilot mention, label, or direct assignment)
3. Agent boots VM, clones repo, analyzes codebase
4. Agent plans work, creates branch, codes
5. Draft PR opened -- agent pushes commits and updates description as it works
6. Agent runs tests, iterates on failures
7. Human reviews, leaves comments or requests changes
8. Agent revises based on feedback
9. Human merges

**Real data from Microsoft's dotnet/runtime:**

- 2,963 Copilot Coding Agent PRs across seven .NET repos
- 67.9% merge rate in dotnet/runtime (535 merged out of 878)
- Success rate jumped from 38.1% (before writing copilot-instructions.md) to ~71% after
- Cleanup/removal tasks: 84.7% success rate (highest)
- Performance tasks: hardest

**Key lesson:** Instructions matter enormously. Success rates nearly doubled after adding structured agent instructions.

---

## 2. Agent Task Scoping

**Source:** [30 Tips for Claude Code Agent Teams](https://getpushtoprod.substack.com/p/30-tips-for-claude-code-agent-teams)
**Source:** [Claude Code Agent Teams Best Practices](https://claudefa.st/blog/guide/agents/agent-teams-best-practices)
**Accessed:** 2026-03-24 | **Confidence:** Community (well-cited)

### Sizing Rules

- 3-5 agents/teammates is the sweet spot
- Each agent must own different files -- two agents editing the same file leads to overwrites
- Plan before implementation -- orchestrator must understand full scope before spawning agents

### Task Size Guide

| Size       | Example                                                                                                                                                           | Verdict                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Too big    | "Implement the feature" with no file refs                                                                                                                         | Agent goes off in random directions |
| Too small  | Single-line changes, trivial renames                                                                                                                              | More overhead than doing it by hand |
| Just right | "Add login form in src/components/LoginForm.tsx using AuthContext from src/context/auth.ts. Include validation. Write tests in src/**tests**/LoginForm.test.tsx." | Clear deliverable, specific files   |

---

## 3. Human-in-the-Loop Review

**Source:** [Addy Osmani: Code Review in the Age of AI](https://addyo.substack.com/p/code-review-in-the-age-of-ai)
**Source:** [HubSpot Sidekick: Multi-Model AI Code Review](https://www.infoq.com/news/2026/03/hubspot-ai-code-review-agent/)
**Source:** [Martin Fowler: Humans and Agents in Software Engineering Loops](https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html)
**Accessed:** 2026-03-24 | **Confidence:** Official + Community

### The Data

- PRs are ~18% larger as AI adoption increases
- AI errors are 75% more common in logic alone
- ~45% of AI-generated code contains security flaws
- 38% of developers say reviewing AI code requires MORE effort than human code

### Review Template for Agent PRs

1. **What/why** -- intent in 1-2 sentences
2. **Proof it works** -- tests passed, manual verification
3. **Risk + AI role** -- risk tier and which parts were AI-generated
4. **Review focus** -- 1-2 specific areas where human input matters most

### HubSpot's Judge Agent Pattern

Two-stage review: AI reviews the code, then a "judge agent" evaluates the review comments before posting. Result: 90% reduction in time-to-first-feedback, 80% engineer approval rating.

### Martin Fowler's Framework

Three positions: **in the loop** (review every artifact), **on the loop** (design specs/tests/feedback that guide agents), **out of the loop** (fully autonomous). Most teams will work "on the loop."

---

## 4. Content Contribution Patterns

**Source:** [Decap CMS: Editorial Workflows](https://decapcms.org/docs/editorial-workflows/)
**Source:** [GitHub Agentic Workflows](https://github.blog/ai-and-ml/automate-repository-tasks-with-github-agentic-workflows/)
**Accessed:** 2026-03-24 | **Confidence:** Official + Community

Three patterns for non-developer contributors:

**Pattern A: Git-based CMS (most proven)**
Decap CMS / Pages CMS gives WYSIWYG interface. Every edit creates a PR via GitHub API. Contributor never sees git or markdown. Supports draft/review/publish states.

**Pattern B: Issue-based contribution**
Non-developer creates a GitHub Issue describing content. Agent picks up the issue, creates MDX file, opens PR. Maintainer reviews and merges.

**Pattern C: GitHub Agentic Workflows**
Define automation in Markdown. Non-developer describes content in issue, agentic workflow converts to formatted MDX and opens PR.

---

## 5. Rollback and Recovery

**Source:** [GitAgent: 14 Patterns for AI Agents](https://medium.com/@shreyas.kapale/gitagent-all-ai-agents-should-follow-these-14-patterns-ffc0a79bac0e)
**Source:** [Refact.ai Agent Rollback docs](https://docs.refact.ai/features/autonomous-agent/rollback/)
**Accessed:** 2026-03-24 | **Confidence:** Community

### Recovery Hierarchy

1. **PR-level revert** -- `git revert` on the merge commit (handles 90% of cases)
2. **Checkpoint rollback** -- use tool-level checkpoints if available
3. **Tag-based rollback** -- redeploy previous tagged release
4. **Append-only logs** -- for data operations, never overwrite

### Key Pattern

Each agent task = one PR = one revertable unit. Atomic PRs are the foundation of safe agent development.

---

## 6. Multi-Model Strategy

**Source:** [Claude Code vs Cursor vs GitHub Copilot 2026 Showdown](https://dev.to/alexcloudstar/claude-code-vs-cursor-vs-github-copilot-the-2026-ai-coding-tool-showdown-53n4)
**Accessed:** 2026-03-24 | **Confidence:** Community

| Task                                   | Best Tool                 | Why                                |
| -------------------------------------- | ------------------------- | ---------------------------------- |
| Daily feature work, inline suggestions | Cursor or Windsurf        | Low latency                        |
| Multi-file refactors, subtle bugs      | Claude Code               | 200K token context, best reasoning |
| GitHub-centric workflows, issue-to-PR  | Copilot Coding Agent      | Native GitHub integration          |
| Automation, scripting, CI/CD           | Claude Code or Gemini CLI | Terminal-native                    |
| Quick inline completions               | Cursor with fast model    | Lowest latency                     |

---

## 7. Progressive Autonomy

**Source:** [Anthropic: Measuring AI Agent Autonomy in Practice](https://www.anthropic.com/research/measuring-agent-autonomy)
**Source:** [Swarmia: Five Levels of AI Coding Agent Autonomy](https://www.swarmia.com/blog/five-levels-ai-agent-autonomy/)
**Accessed:** 2026-03-24 | **Confidence:** Official (Anthropic)

### Anthropic's Data (millions of interactions)

- New users (<50 sessions): auto-approve ~20% of the time
- Experienced users (750+ sessions): auto-approve >40%
- Session duration nearly doubled (25 min to 45+ min) over 4 months
- Increase was gradual -- reflects growing trust, not capability jumps
- 80% of tool calls have at least one safeguard in place
- Only 0.8% of actions appear irreversible

### For Our Project

Start restrictive (require review on every PR, manual approval in agents). Gradually loosen as trust builds. The data shows this is how every team does it.

---

## 8. Agent-Maintained Open Source

**Source:** [dotnet/runtime Ten-Month Retrospective](https://devblogs.microsoft.com/dotnet/ten-months-with-cca-in-dotnet-runtime/)
**Source:** [RedMonk: AI Slopageddon](https://redmonk.com/kholterhoff/2026/02/03/ai-slopageddon-and-the-oss-maintainers/)
**Accessed:** 2026-03-24 | **Confidence:** Official + Community

### What Works

Intentional, human-directed agent contributions with:

- Clear issue scoping
- Instruction files (AGENTS.md, copilot-instructions.md)
- Mandatory human review on every PR

### What Doesn't Work

Autonomous bots making unsolicited PRs. The "AI Slopageddon" of 2026 forced curl to shut down its bug bounty program, Ghostty to permanently ban bad AI contributors, and tldraw to auto-close all external PRs.

**The distinction:** Our project uses intentional, directed agent work -- not autonomous bots.

---

## How This Applies to Our Project

| Pattern              | Our Implementation                                                            |
| -------------------- | ----------------------------------------------------------------------------- |
| Issue-to-PR          | Club member creates issue, agent picks it up, creates PR, human reviews       |
| Task scoping         | Each issue is one clear deliverable in one directory                          |
| Human review         | Required on every PR to main, CODEOWNERS for critical files                   |
| Content contribution | Pattern B (issue-based) for now, Pattern A (CMS) when scale demands           |
| Rollback             | Atomic PRs, git revert, tagged releases                                       |
| Multi-model          | Claude Code for architecture, Copilot for issue-to-PR, Cursor for quick edits |
| Progressive autonomy | Start with full review, loosen as we build trust                              |
