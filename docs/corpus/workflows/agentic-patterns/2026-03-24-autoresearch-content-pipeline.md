---
title: "Claude Code + Karpathy's Autoresearch = GOD MODE!"
source: https://www.youtube.com/watch?v=vjJwgXsMfjM
speaker: AI Andy (Andy Hafell)
channel: AI Andy
duration: 11:16
status: done
tags: [autoresearch, karpathy, content-automation, self-improving-prompts, eval-criteria, n8n, airtable, meta-graph-api, claude-code]
date: 2026-03-24
---

## Key Takeaways

1. **Karpathy's autoresearch framework is not limited to ML** -- any system with a file to change, instructions on what to optimize, and a measurable output can use the same loop. Andy applied it to a content pipeline where the "train.py" is the prompt, the "program.md" is the loop instructions, and the eval is real view counts from Instagram and Facebook.

2. **Binary eval criteria are the core innovation.** Instead of subjective "is this engaging?" ratings, the system uses 10 strict yes/no questions (e.g., "Does the hook describe a result or transformation, not just a feature?"). This makes the eval machine-readable -- feed a script into Gemini, get a score out of 10 with zero subjectivity.

3. **The 24-hour feedback loop is the engine.** Every morning at 8 AM: pull yesterday's view counts, match to Airtable records, score published scripts with the 10-question eval, correlate eval scores against actual views, then rewrite the production prompt based on what the data says works.

4. **False positive detection sharpens the eval itself.** When a script scores high on the eval but gets low views, the system flags it as a false positive, meaning the eval criteria themselves need adjustment -- not just the prompts.

5. **The research log is the most valuable asset** (quoting Karpathy directly). Every prompt change is logged with the data that caused it, so when a better model drops, you hand it the full history and it continues where the last model left off.

6. **Five meaningful prompt revisions in two days** without human intervention. The system evolved from basic hook/detail/tone/close structure through curiosity triggers, broader dramatic framing, personalization with life-altering language, universal/timeless hooks, and finally sharpened "secrets about to be revealed" framing.

7. **Near-full automation with one human checkpoint.** A team member watches each of the five daily shorts and either schedules or rejects. The rejection itself feeds back into the system, making even the human QA step part of the learning loop.

## Detailed Notes

### What is Autoresearch (0:28)

Andrej Karpathy (OpenAI co-founder, former Tesla AI head) released the autoresearch repo. The concept: give an AI agent three things -- (1) a file to change, (2) instructions on what to optimize, (3) a way to measure improvement. Then let it run in a loop. Karpathy ran it on ML training scripts, got 11% improvement from hundreds of overnight experiments. The agent tweaks code, runs it, checks results, keeps changes if improved, discards if not, repeats.

Andy's insight: his content pipeline has all three components. The prompt template is the file to change, the pipeline instructions are the optimization target, and Instagram/Facebook views are the measurable output.

### Pulling the Data (1:44)

Andy posted the Karpathy repo into Claude Code and asked whether it could work with social media view counts instead of ML loss metrics. Key difference: the loop is slow (24-hour cycle time vs. seconds for ML experiments).

**Data source setup:**
- Meta Graph API (completely free)
- Created a new app in Meta developer tools
- Used Graph API Explorer with Instagram basic permissions + read pages
- Initially pulled 30 most recent reels sorted by views (top and bottom performers)
- First pattern: "wow factor visual demos crush it, Claude Code or productivity content underperforms"
- Andy questioned this, so expanded to 200 Instagram reels for more robust patterns
- Also pulled Facebook data separately so the system could sandbox analysis per platform

**Initial finding from 200+ shorts:** There is a clear separation between 100K-view videos and 56-view flops, and the difference is framing, not topic.

### Building the Eval (3:57)

This is where Andy says "most people screw up autoresearch." The common mistake: making eval criteria subjective like "is this engaging?" or "does it sound good?" -- that is just vibes.

**The 10 binary eval criteria (yes/no only):**

Hook quality:
1. Does the hook describe a result or transformation? (Not just a feature)
2. Does the hook feature a person or story? (Not just a company)

Content framing:
3. Is the short framed around what you can do? (Not what it is)
4. Does the script avoid sounding like a press release or change log?

Visual/scroll-stop:
5. Would the first frame of this video make someone stop scrolling?

(Plus 5 more criteria not explicitly listed in the video, totaling 10)

**Why binary matters:** You feed a script into Gemini and ask the 10 questions. You get a score out of 10. No "rate on a scale of 1-10" subjectivity. Just yes or no, which is machine-readable and consistent.

### Wiring the Loop (5:22)

The full system, written as ~1,000 lines of code by Claude Code:

**Step 1 -- Pull views:** Every morning, pull view counts from Facebook and Instagram via Meta Graph API.

**Step 2 -- Match to Airtable:** Update the Airtable production database with new view counts. Airtable serves as the central content hub where all videos are stored with metadata, eval scores, and performance tiers.

**Step 3 -- Pre-score new ideas:** Scrape social media every morning for content ideas. Run a separate eval on source material (before creation). Ideas scoring above 5 enter the creation queue.

**Step 4 -- Score published scripts:** Gemini reads each published script and answers the 10 yes/no eval questions, outputting a score.

**Step 5 -- Correlate:**
- High eval + high views = validated winners (the eval is working)
- High eval + low views = false positives (the eval needs fixing)
- Tracks handle rankings and approval rates

**Step 6 -- Generate and push:** Write an improved prompt from correlation data (winners + failures). Push the new prompt to the N8N workflow via API.

**Self-improvement loop runs every 24 hours starting at 8 AM.**

### How It Evolves (7:37)

Tracked prompt evolution over two days with five meaningful revisions:

1. **Original:** Basic structure with hook, detail, tone, close, word budget
2. **Revision 1:** Reframed from announcement style to curiosity trigger
3. **Revision 2:** Pushed to be broader, more dramatic
4. **Revision 3:** Deepened personalization with "life-altering" language
5. **Revision 4:** Hook scoped away from events toward universal/timeless discoveries
6. **Revision 5:** Hook framing sharpened with "secrets about to be revealed"

All revisions stored in an `auto_research_prompt.json` file that updates daily based on criteria.

### How to Run It Daily (8:26)

**Execution:** Python script runs every morning at 8:00 AM via `launchd` (macOS task launcher).

**Daily flow:**
- Pull yesterday's view counts
- Run full correlation and eval pipeline
- Generate daily report with: top performers, prompt updates with changelog, top handles, human approval status

**Current production setup:**
- Team member uses "ContentMate v2.0.3" manually
- ContentMate v2.1 has auto-improvement feature built in
- Five videos produced daily
- Human role: watch each video, schedule if good, reject if not
- Rejections feed back into the AI learning loop
- Described as "almost 100% fully automated besides quality inspection"

### The Compounding Effect

- Day 1: pipeline publishes 5 shorts
- 24 hours later: loop checks what happened
- Prompts get slightly better
- After 1 week: 7 iterations
- After 1 month: 30 iterations
- Unlike manual tweaking, every change is logged with the data that caused it
- When a smarter model releases, hand it the research log and it picks up exactly where the last model left off

**Tech stack summary:**
- Claude Code -- runs the autoresearch agent, rewrites prompts
- Meta Graph API -- pulls Instagram/Facebook view counts into Airtable
- N8N + Airtable -- the content pipeline being optimized
- Gemini -- evaluates scripts against binary criteria
- launchd -- macOS daily scheduler
- Karpathy's autoresearch framework -- the open-source foundation

## Applicable to Us

**Directly applicable -- high priority:**

1. **Binary eval criteria for our own scripts.** We should build 10 yes/no questions specific to Claude Code power-user content. Ours would focus on different signals than AI Andy's (e.g., "Does the video show real terminal output?" "Does it teach a technique the viewer can use in their next session?" "Does it show a failure or debugging moment?"). We can score every script before production and track which criteria correlate with actual performance.

2. **The research log as institutional memory.** This maps directly to our CLAUDE.md + memory system. We could store prompt evolution history in `.claude/docs/` so that when we start a new session or upgrade models, the agent has the full optimization history. The insight that "the research log might be the most valuable asset" validates our memory architecture approach.

3. **Autoresearch on our CLAUDE.md itself.** Our CLAUDE.md is the "train.py" equivalent. We could set up a loop that scores our video outputs against binary criteria, correlates with YouTube analytics (views, retention, CTR), and proposes CLAUDE.md refinements. This is meta -- using autoresearch to improve the agent that makes the videos, which is exactly the kind of self-demonstrating content our channel is about.

4. **Pre-scoring content ideas before production.** Andy pre-screens scraped ideas with a separate eval before they enter the creation queue. We could do the same with our research corpus -- score video ideas against binary criteria before investing production time.

**Architecturally relevant:**

5. **N8N + Airtable as the production backbone.** Andy uses N8N for workflow automation and Airtable as the content database. We already have a different stack (Claude Code + MCP servers), but the pattern of having a central database where every video has metadata, eval scores, and performance tiers is worth replicating -- potentially in a simple JSON or Supabase setup.

6. **The false positive detection pattern.** When our eval says a video should perform well but it doesn't, that is signal to fix the eval, not just the content. This prevents the system from optimizing for the wrong thing.

7. **Framing over topic.** Andy's data from 200+ shorts showed that framing determines performance, not topic. This is a key content insight: a Claude Code video about the same feature can perform wildly differently based on how it is framed (transformation/result vs. feature announcement).

**Video idea:** A natural video for our channel would be building this exact autoresearch loop for our own pipeline, on camera, showing the real Claude Code terminal work. Self-demonstrating the concept while teaching it.
