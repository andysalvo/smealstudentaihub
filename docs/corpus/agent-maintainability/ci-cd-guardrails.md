# Agent-Safe CI/CD

> Last updated: 2026-03-24
> Category: agent-maintainability
> Confidence: Official (Anthropic, GitHub) + Community

---

## Claude Code GitHub Actions

**Source:** [Anthropic - Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions)
**Source:** [GitHub - anthropics/claude-code-action](https://github.com/anthropics/claude-code-action)
**Source:** [GitHub - anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

### Setup

Run `/install-github-app` in Claude Code terminal, or manually install the Claude GitHub app and add `ANTHROPIC_API_KEY` as a repo secret.

### Automated PR Code Review

```yaml
name: Code Review
on:
  pull_request:
    types: [opened, synchronize]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: 'Review this pull request for code quality, correctness, and security.'
          claude_args: '--max-turns 5'
```

### Interactive @claude Mentions

Respond to `@claude` in issue/PR comments to analyze code, implement features, fix bugs.

### Security Review Action

`anthropics/claude-code-security-review` specifically scans for security vulnerabilities in code changes.

---

## Security Risks and Mitigations

**Source:** [StepSecurity - AI Meets CI/CD](https://www.stepsecurity.io/blog/when-ai-meets-ci-cd-coding-agents-in-github-actions-pose-hidden-security-risks)
**Accessed:** 2026-03-24 | **Confidence:** Community (security vendor) | **Method:** WebSearch

### Attack Vectors

- **Behavioral manipulation:** Attackers trick agents into generating malicious code
- **GITHUB_TOKEN compromise:** Coding agents operate with elevated privileges
- **Trusted domain exploitation:** Malware distributed via legitimate endpoints (like the tj-actions incident)
- **Pull request injection:** Agents create PRs with subtle vulnerabilities that reviewers miss

### Recommended Protections

- Runtime monitoring with behavioral tracking of agent-generated code
- Baseline-driven anomaly detection in CI/CD pipelines
- Always require human approval before merging agent PRs
- Use GitHub secrets for API keys, restrict permissions with GitHub App scopes
- Branch protection: agents can only push to prefixed branches (e.g., `copilot/*`)

---

## Open-Source AI Code Quality Gates

**Source:** [open-code-review](https://github.com/raye-deng/open-code-review)
**Accessed:** 2026-03-24 | **Confidence:** Community | **Method:** WebSearch

- First open-source CI/CD quality gate built specifically for AI-generated code
- Detects hallucinated imports, stale APIs, over-engineering, and security anti-patterns
- Available as MCP Server, CLI, and CI/CD Action

---

## General Branch Protection Patterns

**Source:** [Augment Code - AI Code Review in CI/CD](https://www.augmentcode.com/guides/ai-code-review-ci-cd-pipeline)
**Accessed:** 2026-03-24 | **Confidence:** Community | **Method:** WebSearch

- Configure AI code review as a required status check (but advisory, not blocking)
- AI review findings should be advisory -- LLM tools produce false positives
- Use AI review as complement to human review, not replacement
- Let human reviewers decide whether to act on AI suggestions
- Copilot coding agent is restricted to `copilot/` branch prefix as a built-in guardrail

---

## Key Takeaways for Our Project

1. Set up branch protection on `main` -- require PR review before merge.
2. Claude Code GitHub Actions for automated PR review is free and high-value.
3. AI review should be advisory (warning), not blocking (required check).
4. Agent PRs should always go through human review before merge.
5. Consider `claude-code-security-review` action for security scanning on PRs.
