# Content Architecture: MDX, Educational Patterns, Search

> Last updated: 2026-03-24
> Category: frontend
> Confidence: Official (Next.js docs) + Community

---

## MDX as the Content Layer

**Source:** [Next.js MDX Guide (official, v16.2.1)](https://nextjs.org/docs/app/guides/mdx)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebFetch

MDX (Markdown + JSX) is the standard for content-heavy Next.js static sites. Write educational content in Markdown, embed interactive React components inline.

### Setup

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

```js
// next.config.mjs
import createMDX from '@next/mdx'

const nextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: { unoptimized: true },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-slug'],
  },
})

export default withMDX(nextConfig)
```

### Required File

`mdx-components.tsx` at project root maps Markdown elements to custom React components:

```tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8">{children}</h1>,
    a: ({ href, children }) => <a href={href} className="text-accent underline">{children}</a>,
    // map all elements to your design system
  }
}
```

---

## Content Architecture Patterns

### Pattern 1: File-Based Routing with MDX

```
app/
  resources/
    page.tsx              # Resource index (lists all resources)
    [slug]/
      page.tsx            # Dynamic route that imports MDX
content/
  resources/
    intro-to-llms.mdx
    prompt-engineering.mdx
    ai-ethics.mdx
```

Each MDX file exports metadata:

```mdx
export const metadata = {
  title: 'Introduction to LLMs',
  category: 'fundamentals',
  difficulty: 'beginner',
  lastUpdated: '2026-03-15',
}

# Introduction to Large Language Models
...
```

### Pattern 2: Nextra (Batteries-Included)

**Source:** [Nextra: Next.js Static Site Generator](https://nextra.site/)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebFetch

Nextra wraps Next.js and provides:
- File-system routing for docs
- Built-in search (Pagefind)
- Sidebar navigation from folder structure
- Syntax highlighting (Shiki)
- i18n support
- Static export with `output: 'export'`

### Pattern 3: Content Hub with Taxonomy

For a resource library with categories, difficulty levels, and search:
- Use route groups: `app/(resources)/` and `app/(learn)/`
- Build index pages that read MDX metadata at build time using `fs` and `globby`
- Implement client-side filtering with simple state machine (no server needed)

---

## Typography for Educational Content

Use `@tailwindcss/typography` for the `prose` class family:

```tsx
export default function ResourceLayout({ children }) {
  return (
    <div className="prose prose-headings:font-display prose-a:text-accent max-w-3xl mx-auto px-4">
      {children}
    </div>
  )
}
```

---

## Interactive Modules in MDX

MDX lets you embed React components directly in educational content:

```mdx
import { Quiz } from '@/components/Quiz'
import { CodePlayground } from '@/components/CodePlayground'

# Understanding Neural Networks

A neural network is a series of connected layers...

<Quiz
  question="What is the purpose of an activation function?"
  options={['Add non-linearity', 'Speed up training', 'Reduce overfitting']}
  answer={0}
/>

Try it yourself:

<CodePlayground language="python" defaultCode="import torch" />
```

---

## Search: Pagefind

**Source:** [Nextra docs on search](https://nextra.site/)
**Accessed:** 2026-03-24 | **Confidence:** Community (widely adopted) | **Method:** WebSearch

Pagefind builds a search index at build time from your static HTML output. Zero JavaScript payload for the index itself. Works with any static site generator including Next.js static export.

---

## Sources

- [Next.js MDX Guide (official)](https://nextjs.org/docs/app/guides/mdx) -- accessed 2026-03-24
- [Nextra: Next.js Static Site Generator](https://nextra.site/) -- accessed 2026-03-24
- [Josh W. Comeau: How I Built My Blog Using MDX](https://www.joshwcomeau.com/blog/how-i-built-my-blog/) -- accessed 2026-03-24
- [freeCodeCamp: Build Blog with Next.js and MDX](https://www.freecodecamp.org/news/how-to-build-your-own-blog-with-next-js-and-mdx/) -- accessed 2026-03-24
- [MDX Blog with Next.js 16](https://www.yourtechpilot.com/blog/building-mdx-blog-nextjs) -- accessed 2026-03-24
