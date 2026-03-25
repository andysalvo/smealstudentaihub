# Copilot CLI: Querying Session History

> Last updated: 2026-03-24
> Category: agent-maintainability
> Confidence: Official (GitHub)
> Source video: [How to query your Copilot CLI session history | Advanced tips & tricks](https://www.youtube.com/watch?v=XHTc6XF0gdk) (GitHub, 2026-03-18)
> Accessed: 2026-03-24 | Method: YouTube transcript

---

## What It Is

Copilot CLI maintains a **local SQLite database** of all session history. It includes a full-text search index with information in different tables for:
- User messages
- System responses
- Which files were edited

Copilot CLI has a built-in tool that lets it generate SQL, query this database, and answer questions about past sessions.

---

## Use Cases

### Loading Context from Previous Sessions

When picking up work from a previous day, you can ask Copilot free-form questions about past sessions:

> "Hey, I'm pretty sure there was this bug in app.tsx yesterday that we solved. Can you pull up the info from that conversation?"

Copilot generates SQL, queries the local database, finds the relevant session, and loads that context into your current conversation.

### Self-Improvement

You can ask Copilot to analyze your own patterns:

> "Tell me about ways I could use Copilot CLI better. What are the common pitfalls I run into when prompting?"

This lets the tool learn from your history and give you personalized recommendations.

---

## How This Fits Our Project

### For Club Members Using Copilot

If club members are using Copilot CLI to maintain the site, the session history feature means:
- They can pick up where they left off without losing context
- They can learn from their own prompting patterns
- Previous maintenance sessions are queryable -- if someone fixed a similar issue before, the context is retrievable

### For Our Agent Instruction Files

This reinforces why good AGENTS.md and copilot-instructions.md matter: the better the initial instructions, the more useful the session history becomes. Well-structured sessions = better queryable history.

---

## Source

- Video: [How to query your Copilot CLI session history](https://www.youtube.com/watch?v=XHTc6XF0gdk)
- Channel: GitHub
- Published: 2026-03-18
- Speaker: Evan Boyle, GitHub Copilot CLI team
