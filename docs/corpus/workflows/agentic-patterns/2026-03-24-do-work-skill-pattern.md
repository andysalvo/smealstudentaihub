---
title: "The Most Powerful Claude Code Pattern I've Found"
source: https://www.youtube.com/watch?v=I9-tdhxiH7w
speaker: Matt Maher
channel: Matt Maher
duration: 17:27
status: done
tags: [claude-code, skills, workflow, sub-agents, task-queue, do-work, automation, orchestrator-pattern]
date: 2026-03-24
---

## Key Takeaways

1. **Claude is excellent at building tools for itself.** Skills are just markdown files. Claude writes them. You build them by having conversations, not by writing code.
2. **Two-terminal pattern: Capture + Build.** One Claude instance captures ideas/requests into a queue folder; a second Claude instance works through the queue autonomously -- planning, building, testing, committing in a loop.
3. **Atomic requests prevent context pollution.** Each request gets its own fresh sub-agent context (equivalent to `/clear` between tasks), which avoids the problem of stacking unrelated requests into one session.
4. **Orchestrator pattern over nested sub-agents.** Instead of a builder sub-agent spawning its own planner sub-agent (risk of infinite loops and token runaway), flatten to a top-level orchestrator that calls planner, evaluator, executor, and builder as peers.
5. **Capture is fast, planning is deferred.** The capture skill does zero planning -- it preserves the full nuance of the request and files it. The work loop decides later whether planning is needed or if it can one-shot the task.
6. **Smart request grouping.** The capture skill analyzes whether multiple items belong together (same surface area) or should be separate requests. This prevents inconsistency (e.g., three separate "change to blue" tasks each picking a different shade).
7. **Skills are the new plugins.** What people tried to solve with VS Code extensions for years can now be done with natural language conversations that produce markdown skill files.

## Detailed Notes

### The Problem: Context Interruption (00:50)

Matt demonstrates the core pain point: you are building something, a new idea hits you, and you type it into the active Claude session. This forces the agent to re-plan mid-execution. His example: Claude is already working on an app, and he drops in two unrelated requests -- moving a description panel and fixing a copy icon overlap. Claude stops and asks how to handle the interruption. The workflow breaks.

First workaround: a `docs/ideas.md` file where you paste ideas manually, then feed them to Claude later. Problem: you are still waiting for the current work to finish, and it is manual.

### The Idea: File-Based Task Queue (03:02)

The breakthrough came from a simple question to Claude: "Can you keep working through files in a folder until the list is done?" Claude said yes.

Design decisions that emerged from the conversation:
- Dedicated folder called `do-work/` for request files
- Each request is a single file
- When the agent picks up a request, it moves the file so no other agent grabs it
- Completed requests go to an archive folder
- If the agent has questions, there is a mechanism for that
- Screenshots of changes are saved alongside archived requests for review

### Two-Terminal Setup (05:19)

The full pattern:
- **Terminal 1 (Capture / "Duke"):** Has a `/do-work` slash command skill. You talk naturally -- "capture this idea" -- and it writes a request file into the queue folder. Fast, no planning.
- **Terminal 2 (Build / "Work"):** Runs `/do-work` and starts the work loop. Picks up requests, plans if needed, builds, tests, commits. Loops until the queue is empty or tokens run out.

Matt reports running this for 1.5 hours at a time, processing 25+ changes, with high success rates because each change is atomic.

### Skills Fundamentals (05:19 - 08:17)

Key points about skills:
- Skills in Claude Code are markdown files. Claude writes them.
- Building a skill is just having a conversation: "Let's write an action that does X."
- The conversation is essentially a PRD session -- you describe the workflow you want.
- Skills are not limited to coding. Any repetitive workflow pattern can become a skill.
- Start small: ask Claude to build a trivial skill (e.g., "when I ask for a joke, refuse") to understand the mechanics.
- Once you see how easy it is, you realize any repetitive pattern you do can be automated.

### The do-work Skill Architecture (08:17 - 13:19)

**Installation:** `npx add-skill` from the GitHub repo (`bladnman/do-work`). Anthropic wrote the `add-skill` tool for easy skill distribution. Matt installs skills globally via symlink since he uses them across projects.

**Capture skill behavior:**
- When you give it multiple items, it determines whether they belong together or are separate
- Related items (same surface area) become one request
- Unrelated items become separate request files
- Intent is preserved without losing nuance, but no planning happens at capture time

**Work loop behavior:**
- Checks the `do-work/` folder for unfinished request documents
- For each request: evaluates complexity, decides if planning is needed
- Simple requests: one-shot execution
- Complex requests: planning sub-agent runs first, output feeds into builder sub-agent
- Each piece of work gets a fresh context (new sub-agent = equivalent of `/clear`)
- No context pollution between tasks

**Orchestrator pattern (Claude's own suggestion):**
Matt originally had the builder sub-agent decide internally whether to spawn a planner sub-agent. Claude flagged this as risky -- nested sub-agents can create infinite loops and burn tokens. Claude proposed flattening to an orchestrator:
- Top-level agent is the orchestrator
- It calls four peer sub-agents as needed: planner, evaluator, executor, builder
- No nesting, no runaway recursion

This is a significant architectural insight: flatten your agent hierarchy rather than nesting.

### Live Demo (13:19 - 16:04)

Matt opens two Claude Code terminals side by side. On the capture side, he drops in requests about the app UI:
- Remove collapsible disclosure on the left-side description in web mode (make it a plain label)
- Fix copy icon being occluded by text in description panel
- Rework the header area -- keep name/avatar/stats but remove bare "add tags" and description placeholders

The capture skill files these as requests. The work loop processes them in the background. Completed requests get archived with screenshots. The system keeps working as long as there are requests or tokens remain.

### Handoff / Conclusion (16:04)

Core message: allow Claude to explore building tools for you. Have conversations. Build skills. They solve workflow problems, not just API integrations. If you keep doing the same thing repeatedly, that is a skill candidate. Once you install the do-work pattern, you can iterate on it: change file naming, process multiple requests at once, add batch-delete commands -- all through conversation.

**GitHub repo:** https://github.com/bladnman/do-work

## Applicable to Us

**Directly relevant -- high priority:**

1. **Two-terminal capture/build pattern for our video pipeline.** We already want full automation (feedback_full_automation.md). This pattern maps cleanly: one Claude session captures Andy's creative direction and shot notes, another Claude session works through the production queue (generating assets, running ElevenLabs TTS, building Remotion compositions). The queue-based architecture prevents context pollution between unrelated production tasks.

2. **Skills as our pipeline building blocks.** We already have a superpowers/skills system. Matt's insight that skills are just "conversations turned into markdown automation" validates our approach. Every repeatable step in our pipeline (research brief generation, script formatting, asset generation, Remotion rendering) should be a skill that Claude can invoke.

3. **Orchestrator pattern for production.** Instead of nesting sub-agents (a video-production agent that spawns a script agent that spawns a research agent), flatten to an orchestrator that calls peer skills: researcher, scriptwriter, asset-generator, renderer, publisher. This avoids token runaway and keeps each step in a clean context.

4. **Atomic task decomposition for video production.** Each shot, each scene, each asset request should be a separate file in a queue -- not a giant prompt. This matches Matt's finding that atomic tasks have higher success rates. Our GRIDMIND video production could use this: each building task, each camera movement, each voice line as a queued request.

5. **Content angle: we should cover this pattern.** This is exactly the kind of power-user Claude Code content our channel is about. We could demonstrate the capture/build pattern applied to our own video production -- self-demonstrating as per our brand. A video showing Claude building a video using the do-work pattern would be meta and compelling.

**Architecture notes to steal:**
- File-based queue (not database) keeps everything inspectable and git-friendly
- Archive with screenshots for audit trail -- we could archive production artifacts the same way
- Smart grouping of related requests -- useful when Andy drops multiple related creative notes at once
- Fresh context per task via sub-agents to prevent drift
