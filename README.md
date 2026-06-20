# goocampus-domain-hub

The source for **`goocampusevents.com`** — the homepage, the country landing pages it serves, and the routing rules.

This repo is connected to the Netlify project `goocampus-university-webinar` (the project name is historical — don't be fooled by it). Every push to `main` auto-deploys to `goocampusevents.com`.

## Layout

| Path on goocampusevents.com | Where it lives in this repo |
|---|---|
| `/` | `index.html` (the "Global Opportunities for Doctors Abroad" homepage) |
| `/amc-pathway/*` | `amc-pathway/` folder (Astro build output of [`beast-clone/amc-blueprint-landing`](https://github.com/beast-clone/amc-blueprint-landing)) |
| `/nz-pathway/*` | proxied via `_redirects` to [`goocampus-nz-pathway.netlify.app`](https://goocampus-nz-pathway.netlify.app) |

So this repo holds the homepage and the AMC build, and forwards NZ traffic to a standalone Netlify site.

## How to update each section

### Homepage
Edit `index.html` directly. Push. Netlify auto-deploys in ~30 seconds.

### `/amc-pathway/` (Australia)
1. Clone [`beast-clone/amc-blueprint-landing`](https://github.com/beast-clone/amc-blueprint-landing)
2. Make sure `astro.config.mjs` has `base: '/amc-pathway'`
3. Run `npm install && npm run build`
4. Copy the contents of `dist/` into this repo's `amc-pathway/` folder (replacing existing files)
5. Commit and push this repo. AMC re-deploys.

### `/nz-pathway/` (New Zealand)
Edit [`beast-clone/nz-pathway`](https://github.com/beast-clone/nz-pathway) directly. It auto-deploys to its own Netlify site. No change to this repo needed.

## Why AMC is baked in but NZ is proxied

History: AMC was deployed before the proxy pattern existed. Its build was uploaded into this repo's deployment folder, so we keep it that way.
NZ was set up with a cleaner pattern (separate Netlify site + proxy) which lets the NZ team iterate without touching this repo.

When you add the next country (UK, US, etc.), use the **NZ pattern** — it's cleaner.

## Adding a new country (recommended pattern)

1. Build the country landing page in its own GitHub repo (e.g. `beast-clone/uk-pathway`).
2. Configure Astro with `base: '/uk-pathway/'` and add `public/_redirects` containing `/uk-pathway/*  /:splat  200!`.
3. Deploy it to its own Netlify project (e.g. `goocampus-uk-pathway`).
4. Add a single line to this repo's `_redirects` file:
   ```
   /uk-pathway/*  https://goocampus-uk-pathway.netlify.app/:splat  200!
   ```
5. Push. `goocampusevents.com/uk-pathway/` is live in ~1 minute.

## Current `_redirects`

```
/nz-pathway/*  https://goocampus-nz-pathway.netlify.app/:splat  200!
```
