# Workflow: Create a New AI News Article

Time: ~10 minutes. No coding required.

---

## Before you start

You need 2-3 URLs about an AI news topic. Good sources: TechCrunch, MIT Technology Review, Ars Technica, The Verge, CNBC, Wired, company blogs. Pick something recent that matters to business students.

You also need [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and the repo cloned.

---

## Step 1: Run the scaffolding script

Open a terminal in the repo root and run:

```
node scripts/new-article.js --slug="your-slug" --title="Your Article Title" --date="April 2026"
```

Rules for the flags:
- `--slug` is the URL path. Lowercase, hyphens, no spaces. Example: `deepseek-r2`
- `--title` is the full headline. Use quotes if it has spaces.
- `--date` is the date label shown on the article. Example: `April 2026` or `March to April 2026`

The script creates the article template, downloads a thumbnail from Pexels, and adds a card to the listing page.

---

## Step 2: Tell the agent to fill in the article

Open Claude Code in the repo directory and paste this prompt (replace the bracketed parts):

```
Read the sources at:
- [url 1]
- [url 2]
- [url 3]

Then fill in the article template at src/app/ai-news/[your-slug]/page.tsx
following the voice brief at content/VOICE_BRIEF.md.

Also update the listing card summary in src/app/ai-news/page.tsx
(find the TODO line in the [your-slug] card and replace it with a
1-2 sentence summary).
```

The agent will replace all the TODO placeholders with real content, add real source URLs, and write the listing card summary.

---

## Step 3: Verify it builds

```
npm run build
```

If the build passes, the article is structurally correct. If it fails, tell the agent what the error says and ask it to fix it.

To preview locally:

```
npm run dev
```

Then open http://localhost:3000/ai-news/[your-slug] in your browser.

---

## Step 4: Commit and open a PR

```
git checkout -b article/[your-slug]
git add .
git commit -m "feat: add [your-slug] article"
git push -u origin article/[your-slug]
```

Then open a pull request on GitHub. The main branch requires one review before merging.

---

## What the template includes

Every article follows the same structure:
- ReadingProgress bar at the top
- Hero section with back link, date, title, lede
- Body paragraphs at max-w-[65ch]
- Callout box (navy border, light background) explaining a key concept
- "Why this matters for students" closing section
- Sources list with external links

This matches the existing articles (AMI Labs, OpenClaw). The voice brief at `content/VOICE_BRIEF.md` defines the tone: calm, clear, no hype, describe rather than instruct.
