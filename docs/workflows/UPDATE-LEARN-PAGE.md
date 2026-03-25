# Workflow: Add a Source Card to a Learn Page

Time: ~5 minutes.

---

## Before you start

You need:
- The URL of the source you want to add
- The name of the Learn page you want to update

The four Learn pages are:
- `src/app/learn/ai-basics/page.tsx`
- `src/app/learn/how-businesses-are-using-ai/page.tsx`
- `src/app/learn/rules-risks-and-ethics/page.tsx`
- `src/app/learn/using-ai-for-school-and-work/page.tsx`

---

## Step 1: Tell the agent what to add

Open Claude Code in the repo directory and paste this prompt (replace the bracketed parts):

```
Add a SourceCard for [source name] at [url] to the
[section name] section of src/app/learn/[page]/page.tsx.

The description should be 1 sentence explaining what the source covers.
Follow the voice brief at content/VOICE_BRIEF.md.
```

Example:

```
Add a SourceCard for "Stanford HAI - AI Index Report" at
https://aiindex.stanford.edu/report/ to the AI Basics section
of src/app/learn/ai-basics/page.tsx.

The description should be 1 sentence explaining what the source covers.
Follow the voice brief at content/VOICE_BRIEF.md.
```

---

## Step 2: Verify the build

```
npm run build
```

---

## How the SourceCard component works

The `SourceCard` component lives at `src/components/ui/SourceCard.tsx`. It takes four props:

```tsx
<SourceCard
  title="Columbia Engineering - AI vs. Machine Learning"
  description='A clear overview of AI, machine learning, and deep learning.'
  source="Columbia Engineering"
  url="https://ai.engineering.columbia.edu/ai-vs-machine-learning/"
/>
```

| Prop | What it is |
|------|-----------|
| `title` | Display name of the source |
| `description` | One sentence about what it covers |
| `source` | Publisher name (e.g. "MIT Technology Review") |
| `url` | Full URL to the source |

The card is already styled. You just need to place it in the right spot in the page file.

---

## If it should also be a Foundational Source

The Foundational Sources table is at `src/app/learn/foundational-sources/page.tsx`. If the source is important enough to be listed there, tell the agent:

```
Also add this source to the Foundational Sources table at
src/app/learn/foundational-sources/page.tsx with the
appropriate category and publisher.
```
