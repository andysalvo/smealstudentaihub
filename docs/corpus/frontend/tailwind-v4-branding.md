# Tailwind CSS v4 Design System for Branded Sites

> Last updated: 2026-03-24
> Category: frontend
> Confidence: Official (Tailwind CSS docs)

---

## The Big Shift: CSS-First Configuration

**Source:** [Tailwind CSS v4.0 Release Blog](https://tailwindcss.com/blog/tailwindcss-v4)
**Source:** [Tailwind CSS Theme Variables Docs](https://tailwindcss.com/docs/theme)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

Tailwind v4 eliminates `tailwind.config.js`. Everything is configured in CSS using `@theme`. This is not optional -- it is the new canonical approach.

### Installation

```bash
npm i tailwindcss @tailwindcss/postcss
```

### postcss.config.js

```js
export default { plugins: ["@tailwindcss/postcss"] }
```

### CSS Entry Point

```css
@import "tailwindcss";
```

One import line. No more `@tailwind base; @tailwind components; @tailwind utilities;`.

---

## Setting Up a Branded Design System

For the Student AI Hub with Penn State / Smeal branding:

```css
@import "tailwindcss";

@theme {
  /* Wipe Tailwind defaults -- use ONLY brand colors */
  --color-*: initial;

  /* Penn State / Club brand colors (replace with actual values after research) */
  --color-navy: oklch(0.25 0.05 260);
  --color-white: #ffffff;
  --color-accent: oklch(0.65 0.15 200);
  --color-surface: oklch(0.97 0.01 260);
  --color-text: oklch(0.20 0.02 260);
  --color-text-muted: oklch(0.45 0.02 260);
  --color-border: oklch(0.88 0.01 260);
  --color-success: oklch(0.70 0.15 145);
  --color-warning: oklch(0.80 0.15 80);
  --color-error: oklch(0.65 0.20 25);

  /* Typography */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  --font-display: "Cal Sans", "Inter", sans-serif;

  /* Spacing base */
  --spacing: 4px;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}
```

This gives you utilities like `bg-navy`, `text-accent`, `font-display` -- all type-safe, all available as CSS variables at runtime.

---

## Key v4 Features

| Feature | Why It Matters |
|---------|---------------|
| `--color-*: initial` | Wipe Tailwind defaults. Use ONLY brand colors. No stray `bg-red-500` leaking in. |
| OKLCH colors | Wider gamut, better gradients, more vivid on modern displays |
| Container queries (`@container`, `@sm:`, `@lg:`) | Built-in, no plugin. Useful for card layouts in resource grids. |
| CSS cascade layers | `@layer theme, base, components, utilities` -- clean override behavior |
| `@tailwindcss/typography` plugin | Apply `prose` class for styled Markdown/MDX content rendering |
| No autoprefixer needed | Built into v4 via Lightning CSS |
| Automatic content detection | No `content: ['./src/**/*.tsx']` config needed. Reads `.gitignore` automatically. |

---

## Performance

Full builds: 3.78x faster than v3. Incremental (no new CSS): 182x faster. Measured in microseconds.

---

## Migration Tool

```bash
npx @tailwindcss/upgrade
```

Automatically converts v3 config to v4 `@theme` directives.

---

## Sources

- [Tailwind CSS v4.0 Release Blog (official)](https://tailwindcss.com/blog/tailwindcss-v4) -- accessed 2026-03-24
- [Tailwind CSS Theme Variables Docs (official)](https://tailwindcss.com/docs/theme) -- accessed 2026-03-24
- [Bryan Anthonio: Setting Up Tailwind CSS v4.0](https://bryananthonio.com/blog/configuring-tailwind-css-v4/) -- accessed 2026-03-24
- [Mavik Labs: Design Tokens That Scale in 2026](https://www.maviklabs.com/blog/design-tokens-tailwind-v4-2026) -- accessed 2026-03-24
