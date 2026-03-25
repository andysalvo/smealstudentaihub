# GitHub Pages Deployment + Custom Domain Path

> Last updated: 2026-03-24
> Category: frontend
> Confidence: Official (GitHub docs)

---

## Phase 1: Default GitHub Pages (Immediate)

**Source:** [GitHub Docs: Managing a Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
**Accessed:** 2026-03-24 | **Confidence:** Official | **Method:** WebSearch + WebFetch

1. Repository at `github.com/andysalvo/smealstudentaihub`
2. Site available at `andysalvo.github.io/smealstudentaihub`
3. Set `basePath: '/smealstudentaihub'` in `next.config.ts`
4. Place `.nojekyll` in `/public/`

---

## Phase 2: Custom Domain (When Ready)

### Step 1: Register Domain

Register domain (e.g., `studentaihub.org` or a subdomain of `appliedaipsu.com`).

### Step 2: Configure DNS

For an apex domain (e.g., `studentaihub.org`):

**A records (IPv4):**

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**AAAA records (IPv6):**

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

For `www` subdomain:

- CNAME record: `www` -> `andysalvo.github.io`

GitHub auto-redirects between apex and www.

### Step 3: Create CNAME File

Create `/public/CNAME` containing just the domain:

```
studentaihub.org
```

### Step 4: Remove basePath

Remove `basePath` from `next.config.ts` (no longer needed with custom domain).

### Step 5: Enable in GitHub

In repo Settings > Pages, enter the custom domain and enable "Enforce HTTPS."

### Step 6: Wait for DNS

Usually 15 minutes, up to 24 hours. Verify with:

```bash
dig studentaihub.org +noall +answer -t A
```

### Step 7: Verify Domain

Settings > Pages > Verified domains -- prevents other users from claiming it.

---

## Gotchas

- Some registrars add default A records for their landing page -- delete those before adding GitHub's IPs
- The CNAME file in `/public/` survives builds because Next.js copies `public/` to `out/`
- Never use wildcard DNS records (`*.example.com`) -- risk domain takeover
- HTTPS certificate provisioning can take up to 24 hours after domain verification

---

## Sources

- [GitHub Docs: Managing a Custom Domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) -- accessed 2026-03-24
- [Deploying Next.js Static Site with Custom Domain](https://hiteshshetty.com/blogs/deploying-a-next-js-static-site-on-github-pages-with-a-custom-domain) -- accessed 2026-03-24
