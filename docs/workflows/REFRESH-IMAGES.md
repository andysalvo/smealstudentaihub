# Workflow: Refresh Module Images

Time: ~5 minutes (plus a few minutes for downloads).

The site uses images from Pexels for the major module concept cards. The script `scripts/fetch-module-images.js` downloads them automatically.

---

## Step 1: Get a Pexels API key

1. Go to https://www.pexels.com/api/
2. Sign up for a free account
3. Copy your API key

---

## Step 2: Set up .env.local

Create a file called `.env.local` in the repo root (if it does not already exist):

```
PEXELS_API_KEY=your_key_here
```

This file is gitignored. It stays on your machine.

---

## Step 3: Run the script

**Full run** (all majors, skips images that already exist):

```
node scripts/fetch-module-images.js
```

**Single major** (only fetch images for one major):

```
node scripts/fetch-module-images.js --major=accounting
```

Valid major slugs: `accounting`, `actuarial-science`, `corporate-innovation`, `finance`, `management`, `marketing`, `mis`, `real-estate`, `risk-management`, `supply-chain`

**Dry run** (see what would be fetched without downloading):

```
node scripts/fetch-module-images.js --dry-run
```

**Force re-download** (replace existing images):

```
node scripts/fetch-module-images.js --force
```

---

## What the script does

1. Reads `content/smeal-majors-data.json` for all concepts
2. Builds a search query from the major name and concept title
3. Searches Pexels for a landscape image matching that query
4. Downloads it to `public/images/modules/{major}/{concept-id}.jpg`
5. Updates the JSON data file with the local image path

The script respects Pexels rate limits (400ms between requests). A full run across all majors takes a few minutes.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "Missing .env.local" | Create the file with your PEXELS_API_KEY |
| "PEXELS_API_KEY not found" | Check that the key is on its own line: `PEXELS_API_KEY=abc123` |
| "[no result]" for a concept | The search query did not match. The image will be missing. You can add one manually. |
| Images look wrong | Run with `--force` to re-download, or replace individual images manually in `public/images/modules/` |
