# Tabi — marketing site

Public marketing and developer documentation for [Tabi](https://tabi.africa). This repository contains **no** backend, gateway, or private infrastructure code—only a Next.js front end that calls the **public** HTTPS API.

## Environment

Copy `.env.example` to `.env.local` and set only `NEXT_PUBLIC_*` values (never commit secrets).

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_API_URL` | Public API origin (e.g. `https://api.tabi.africa`) for OpenAPI fetch and docs examples |
| `NEXT_PUBLIC_APP_URL` | Dashboard app origin (e.g. `https://app.tabi.africa`) for sign-in and workspace links from this site |

## Scripts

- `npm run dev` — local dev (port 3001)
- `npm run build` — production build
- `npm run audit:blocklist` — pre-push check for disallowed internal-stack strings (see `scripts/audit-blocklist.sh`)

## GitHub (owner)

1. **Branch protection** on `main`: require pull requests, required reviewers, no force-push, match your org policy.
2. **CODEOWNERS**: replace the placeholder in `.github/CODEOWNERS` with your GitHub username or team, then use it as a required review rule in branch protection.
3. **Collaborators**: grant **Write** (open PRs) but not **Admin**; full stack and secrets stay in the private monorepo.

## Dashboard (later)

**Not in this repo:** authenticated app, flow builder, and deep integration UIs. Those will live in a separate `tabi-frontend-dashboard` repository when split from the private monorepo.

## Private monorepo

Full-stack integration, API, gateway, and deployment config remain in a **private** infrastructure repository; the marketing app here is a scoped extract for org-facing engineers. After production cutover, the private monorepo may stop shipping duplicate marketing routes—CORS and app URLs are adjusted in private deploy only.
