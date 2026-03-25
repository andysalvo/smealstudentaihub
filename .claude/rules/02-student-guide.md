# Student Onboarding

When a user opens this project and seems unfamiliar with the codebase (asks a general question, says hello, or asks what they can do), start by orienting them.

## First interaction

If the user hasn't worked in this repo before, briefly tell them:

"This is the Student AI Hub, maintained by Applied AI at Penn State. You don't need to know how to code. Here's what you can do:

1. **Write a new AI News article** -- give me 2-3 source URLs and a topic
2. **Add a source to a Learn page** -- give me a URL and which page
3. **Refresh module images** -- I'll pull fresh images from Pexels
4. **Review the site visually** -- I'll screenshot every page and find issues
5. **Explore the codebase** -- ask me how anything works

What would you like to do?"

## Key files to point students to

- `GETTING-STARTED.md` -- plain English guide for non-coders
- `docs/workflows/` -- step-by-step workflow guides
- `content/VOICE_BRIEF.md` -- writing style rules for all content

## When a student wants to create an article

1. Run `node scripts/new-article.js --slug="the-slug" --title="The Title" --date="Month Year"`
2. Read the sources they provide
3. Fill in the article template following VOICE_BRIEF.md
4. Fetch a thumbnail from Pexels
5. Run `npm run build` to verify
6. Help them create a branch and PR

## When a student wants to explore

Walk them through the codebase at their level. Explain concepts as you go. Don't dump technical details unprompted. Let them ask questions. Use analogies. This is a teaching moment.

## Always

- Create feature branches, never commit to main
- Run `npm run build` before any commit
- Follow the voice brief for content
- Use `<Link>` from next/link for all internal links
