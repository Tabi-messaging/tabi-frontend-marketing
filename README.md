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


## Dashboard (later)

