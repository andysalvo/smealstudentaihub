# Multi-Agent Workflows in VS Code

> Last updated: 2026-03-24
> Category: agent-maintainability
> Confidence: Official (VS Code)
> Source video: [Multi-agent workflows in VS Code](https://www.youtube.com/watch?v=J5KTpq7hVn4) (Visual Studio Code, 2026-03-18, 35.8k views)
> Accessed: 2026-03-24 | Method: YouTube transcript

---

## What It Is

VS Code supports running **multiple Copilot sessions simultaneously**, each using different models and working in parallel on different parts of the codebase.

---

## How It Works

1. Open VS Code with Copilot
2. Start a session for Task A (e.g., color schemes) -- assign a model like Claude Sonnet 4.6
3. While that runs, open a new session for Task B (e.g., backend storage) -- assign Claude Opus 4.6
4. Open another session for Task C (e.g., documentation) -- assign GPT-5/4
5. All three work simultaneously on different parts of the codebase

### Model Selection per Task

The video demonstrates selecting the right model for each task's complexity:

| Task | Model | Reasoning |
|------|-------|-----------|
| Color schemes (styling) | Claude Sonnet 4.6 | Not in-depth, doesn't need heavy reasoning |
| Backend architecture | Claude Opus 4.6 | In-depth task, used plan mode first |
| Documentation | GPT-5/4 | Straightforward writing task |

### Avoiding Conflicts

**Key rule:** Don't work on the same pieces of the codebase across sessions. The demo specifically chose non-overlapping tasks:
- Color schemes (CSS/styling)
- Backend storage (new files)
- Documentation (markdown files)

### Git Worktrees for Isolation

For extra safety, you can switch a session to **worktree mode**. This creates a git worktree off your branch so the session works on an isolated copy -- no conflicts with other sessions even if they touch nearby files.

### Approval Modes

For hands-off parallel work, you can set approval methods per session:
- **Manual** -- approve each step
- **Bypass approvals** -- agent works without asking
- **Autopilot** -- fully autonomous

### Plan Mode

For complex tasks, start in **plan mode** to get an architecture plan before implementation. Once you approve the plan, click "Start Implementation" or "Start with Autopilot" and it begins working -- all while other sessions continue.

---

## How This Fits Our Project

### Club Members Running Parallel Tasks

A club member maintaining the Student AI Hub could run parallel sessions:
- Session 1: "Add the March workshop event to the events page"
- Session 2: "Update the AI Basics resource with new content"
- Session 3: "Fix the accessibility issue on the leadership page"

All three run simultaneously, touching different parts of `/content/` and `/src/`.

### Agent Task Definitions

Our planned `.claude/agents/` task definitions could be designed to work in parallel. If tasks are scoped to non-overlapping directories (e.g., content updates vs. component changes), multiple agents can work simultaneously.

### Model Selection Guidance

We could document recommended models per task type in our AGENTS.md:
- Content updates: lighter model (Sonnet/Haiku)
- New feature development: heavier model (Opus) with plan mode
- Documentation: any model

---

## Source

- Video: [Multi-agent workflows in VS Code](https://www.youtube.com/watch?v=J5KTpq7hVn4)
- Channel: Visual Studio Code
- Published: 2026-03-18
