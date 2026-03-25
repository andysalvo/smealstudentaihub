# Next.js 16 Static Export + GitHub Pages

> Last updated: 2026-03-24
> Category: frontend
> Confidence: Official (Next.js docs v16.2.1, updated 2026-03-20)

---

## Core Configuration

**Source:** [Next.js Static Exports Guide](https://nextjs.org/docs/app/guides/static-exports)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebFetch

The single required setting:

```ts
// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath only needed if NOT using a custom domain
  // basePath: '/repo-name',
};
```

---

## What Works in Static Export

- **Server Components** run at build time and render to static HTML
- **Client Components** prerender to HTML, then hydrate with `'use client'` directive
- **Route Handlers** with GET verb render static JSON/HTML/TXT at build time
- **MDX pages** compile at build time into static HTML with embedded React components
- **Dynamic routes** work IF you provide `generateStaticParams()` and set `dynamicParams: false`
- **SWR** for client-side data fetching after hydration

---

## What Does NOT Work

Explicitly unsupported with static export:
- Dynamic Routes without `generateStaticParams()`
- Route Handlers that read `Request`
- Cookies, Rewrites, Redirects, Headers, Proxy
- Incremental Static Regeneration (ISR)
- Default image optimization (must use `unoptimized: true` or custom loader)
- Server Actions
- Intercepting Routes
- Draft Mode

---

## GitHub Pages Deployment

**Source:** [GitHub Actions Starter Workflow](https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebFetch

### Workflow Steps

1. Set permissions: `contents: read`, `pages: write`, `id-token: write`
2. Use `actions/configure-pages@v5` with `static_site_generator: next`
3. Cache `.next/cache` between builds
4. Build with `next build` (output goes to `./out`)
5. Upload with `actions/upload-pages-artifact@v3` pointing at `./out`
6. Deploy with `actions/deploy-pages@v4`

### Critical Files

- `/public/.nojekyll` -- empty file, prevents GitHub's Jekyll processor from ignoring `_next/` directory
- `/public/CNAME` -- contains your custom domain (only if using one)

### basePath Gotcha

If deploying to `username.github.io/repo-name/` (no custom domain), you MUST set `basePath: '/repo-name'` and manually prefix image `src` attributes. With a custom domain, skip basePath entirely.

---

## Sources

- [Next.js Static Exports Guide (official, v16.2.1)](https://nextjs.org/docs/app/guides/static-exports) -- accessed 2026-03-24
- [Next.js Project Structure (official)](https://nextjs.org/docs/app/getting-started/project-structure) -- accessed 2026-03-24
- [GitHub Actions Starter Workflow for Next.js](https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml) -- accessed 2026-03-24
- [gregrickaby/nextjs-github-pages](https://github.com/gregrickaby/nextjs-github-pages) -- accessed 2026-03-24
- [Deploying Next.js Static Site on GitHub Pages](https://hiteshshetty.com/blogs/deploying-a-next-js-static-site-on-github-pages-with-a-custom-domain) -- accessed 2026-03-24
