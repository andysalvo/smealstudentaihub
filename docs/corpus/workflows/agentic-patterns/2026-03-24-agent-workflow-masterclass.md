---
title: "Building AI Agents That Actually Work — Greg Isenberg x Remy Gaskell"
status: done
priority: high
tags: [workflows, agents, skills, claude-code, mcp, automation]
requested: 2026-03-24
completed: 2026-03-24
output: this file
source: https://www.youtube.com/watch?v=eA9Zf2-qYYM
duration: 58:55
---

# Full Video Notes

## Core Framework: The Agent Stack

Remy's framework for building agents that compound over time:

1. **Agent Loop**: observe → think → act (repeat until task complete)
2. **Context File** (agents.md / claude.md): persistent identity, role, preferences, business context
3. **Memory File** (memory.md): self-updating preferences learned across sessions
4. **MCP Tools**: connected services (Gmail, Calendar, Stripe, Notion, etc.)
5. **Skills**: reusable SOPs as markdown files — the real compounding layer

## Key Concepts

### Context Engineering > Prompt Engineering
- Load your agent with rich context so prompts can be simple ("write me a cold email")
- Result: 2-word prompts → fully informed outputs
- The shift from "craft the perfect prompt" to "build the perfect context"

### Memory as Self-Improving Loop
- Add instruction to agents.md: "When I correct you or you learn something new, update memory.md"
- Memory compounds over time: fewer errors, more personalized output
- Best practice: keep agents.md under ~200 lines
- Only save substantial corrections, not trivial things

### Skills = SOPs for AI
- "Once you explain something once, you never have to explain it again"
- Two creation methods:
  1. **From source material**: Upload a course/doc → "create a skill from this"
  2. **From live process**: Do something manually → "create a skill for what we just did"
- Skills are markdown files with instructions + optional reference folders
- Build 3-5 new skills per week → compounds exponentially

### Skill Chaining
- Skills can invoke other skills
- Example: morning brief skill → calls meeting prep skill → calls podcast research skill
- Chain with scheduled tasks (cron) for full automation

### Scheduled Tasks
- Run skills on cron schedules (morning briefs, market scrapes, weekly research)
- Examples shown:
  - Daily 9am morning brief
  - Every 3 hours car marketplace scrape
  - Weekly Thursday AI news research

### Global vs Project-Level
- **Global skills**: things you want in every session (e.g., "truncate" skill)
- **Project skills**: role-specific (e.g., "refer to Sebastian" only in exec assistant)
- Same split applies to: claude.md, memory.md, MCPs

### Department Folder Structure
```
workspaces/
├── executive-assistant/
│   ├── claude.md (role + prefs + memory instruction)
│   ├── memory.md (learned preferences)
│   └── .claude/skills/ (department skills)
├── content-team/
│   ├── claude.md
│   ├── memory.md
│   └── .claude/skills/
│       ├── viral-hooks/ (skill.md + references/)
│       ├── ads-analyst/
│       └── weekly-research/
├── head-of-marketing/
│   ├── claude.md
│   └── ...
└── head-of-sales/
    └── ...
```

## Real-World Skill Examples Shown

1. **Ads Analyst Skill**: Paste ad library URL → scrapes all ads, screenshots landing pages, visual analysis, copy analysis, master report. Replaced a 3-4 hour manual process.

2. **Sebastian Refer Skill**: Tiny 15-min task automated — draft referral email with meeting context from Granola.

3. **Morning Brief Skill**: Summarize calendar, inbox, projects in Notion. Scheduled at 9am daily.

4. **Car Search Skill**: Scrape CarMax, cars.com, Autotrader every 3 hours. Notify when match found.

5. **Viral Hooks Skill**: Created from uploaded course transcript. Used by content team.

6. **Weekly Research Skill**: Scrapes Twitter + Reddit for AI news every Thursday.

## Platform Comparison

| Platform | Ease | Notes |
|----------|------|-------|
| Cowork | Easiest | Nice UI, good for beginners |
| Perplexity Computer | Easy | Simple setup |
| Manus | Easy | Good tool connection |
| Claude Code | Moderate | Best loop visibility, power-user favorite |
| Codex | Moderate | Similar to Claude Code |
| Antigravity | Moderate | Clean UI |
| OpenClaw | Hardest | Most autonomous, "wild west" |

Remy's recommendation: Build and validate in Claude Code first → migrate to OpenClaw for autonomous operation.

## The "AI Operating System" Vision
- Everyone will have a personal AIOS that compounds over time
- Context files + tools + skills = your AI operating system
- Employees bring their pre-built AIOS to new roles
- Stop entering individual tools — work from one central agent interface
