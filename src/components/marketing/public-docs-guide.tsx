'use client';

import Link from 'next/link';
import { CodeSample } from '@/components/marketing/code-sample';
import { APP_DISPLAY_NAME } from '@/lib/branding';
import { dashboardUrl } from '@/lib/app-urls';
import {
  ArrowRight,
  BookMarked,
  KeyRound,
  Layers,
  Rocket,
  Send,
  Webhook,
  Wrench,
} from 'lucide-react';

function useApiBase(): string {
  if (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL?.trim()) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '');
  }
  return 'https://your-api.example.com';
}

export function PublicDocsGuide() {
  const apiBase = useApiBase();
  const v1 = `${apiBase}/api/v1`;

  return (
    <div className="space-y-16">
      <nav className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          On this page
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {[
            ['#quick-start', 'Quick start'],
            ['#authentication', 'Authentication'],
            ['#first-request', 'First request'],
            ['#send-message', 'Send a message'],
            ['#webhooks', 'Webhooks'],
            ['#errors', 'Errors'],
            ['#reference', 'Reference intro'],
            ['#openapi-explorer', 'All endpoints'],
            ['#roadmap', 'Coming soon'],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-brand-600 hover:underline dark:text-brand-400">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="quick-start" className="scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Rocket className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Quick start</h2>
        </div>
        <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-400">
          <p>
            Integrate <strong>{APP_DISPLAY_NAME}</strong> from your backend with a <strong>workspace or channel API key</strong>{' '}
            (create one in the dashboard after you sign in: <strong>Developer</strong> → API keys, or from a channel&apos;s settings).
            All JSON APIs live under <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm dark:bg-slate-800">/api/v1</code>.
          </p>
          <p>
            Replace <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">{apiBase}</code> in the
            examples below with your deployed public API host (set <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">NEXT_PUBLIC_API_URL</code> for this
            site at build time).
          </p>
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/90 p-4 text-sm text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/25 dark:text-amber-100">
            <strong>Public docs vs dashboard.</strong> This page is a read-only catalog of integration endpoints. After you sign in,
            <Link href={dashboardUrl('/developer/api-reference')} className="mx-1 font-medium text-brand-700 underline dark:text-brand-300">
              API reference
            </Link>
            adds <strong>Try it out</strong> with your session. The full platform operator surface is only in the admin area for super
            admins.
          </div>
        </div>
      </section>

      <section id="authentication" className="scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
            <KeyRound className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Authentication</h2>
        </div>
        <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-400">
          <p>
            <strong>Server-to-server</strong> calls use an API key. Send it as a Bearer token (recommended) or as the{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">X-API-Key</code> header.
          </p>
          <p>
            <strong>Browser / mobile apps</strong> that talk to your own backend should not embed API keys; use your backend as a
            proxy, or use the normal user <strong>JWT</strong> flows from{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">POST /api/v1/auth/login</code> when
            you control the client (dashboard and first-party apps).
          </p>
          <CodeSample
            title="Example: Bearer API key"
            language="http"
            code={`GET ${v1}/channels HTTP/1.1
Host: ${apiBase.replace(/^https?:\/\//, '')}
Authorization: Bearer YOUR_WORKSPACE_OR_CHANNEL_API_KEY
Accept: application/json`}
          />
          <CodeSample
            title="Same request with curl"
            code={`curl -sS "${v1}/channels" \\
  -H "Authorization: Bearer YOUR_WORKSPACE_OR_CHANNEL_API_KEY" \\
  -H "Accept: application/json"`}
          />
        </div>
      </section>

      <section id="first-request" className="scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
            <BookMarked className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">First request</h2>
        </div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          List WhatsApp (and other) channels for the workspace that owns the key. Adjust filters using the query parameters documented
          in the reference below.
        </p>
        <div className="mt-4">
          <CodeSample
            title="List channels"
            code={`curl -sS "${v1}/channels" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Accept: application/json" | jq .`}
          />
        </div>
      </section>

      <section id="send-message" className="scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
            <Send className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Send a message</h2>
        </div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Queue an outbound WhatsApp message on a channel by phone number. The API creates or reuses the contact and conversation,
          then hands off to the same dispatch pipeline as the inbox. Replace <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">CHANNEL_UUID</code> with a channel id from{' '}
          <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">GET /channels</code>. If your key lists scopes, include{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">messages:send</code>. Keys use the <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">tk_</code> prefix.
        </p>
        <div className="mt-4">
          <CodeSample
            title="Queue text (API key or JWT)"
            code={`curl -sS -X POST "${v1}/channels/CHANNEL_UUID/send" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"to":"+2348012345678","content":"Hello from our backend"}' | jq .`}
          />
        </div>
      </section>

      <section id="webhooks" className="scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
            <Webhook className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Webhooks</h2>
        </div>
        <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-400">
          <p>
            Subscribe to events (for example inbound messages) from the dashboard: configure an HTTPS URL, then verify deliveries
            using the signing secret shown in the UI. Event names and payload shapes match the schemas in the OpenAPI document below
            under the webhooks / inbound sections.
          </p>
          <p>
            For <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">message.inbound</code>, the{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">data</code> object includes{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">metadataSchemaVersion</code> and{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">rawEvent</code> (currently{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">messaging_inbound</code>).
            For <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">message.status</code>,{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">data</code> includes{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">metadataSchemaVersion</code>,{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">status</code>,{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">direction</code> (inbound or outbound), ids, optional{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">providerMessageId</code> /{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">error</code>, and{' '}
            <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">timestamp</code>.
          </p>
          <p>
            For quick testing without a public URL, signed-in users can use{' '}
            <Link href={dashboardUrl('/login')} className="font-medium text-brand-600 hover:underline dark:text-brand-400">
              Developer → Webhook tester
            </Link>{' '}
            after logging in.
          </p>
        </div>
      </section>

      <section id="errors" className="scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-700 text-white">
            <Layers className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Errors &amp; versioning</h2>
        </div>
        <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-400">
          <p>
            Errors return JSON with a stable <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">message</code>{' '}
            (and often a <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">statusCode</code>
            ). Treat undocumented fields as optional — we may add correlation IDs and validation details without a major version bump.
          </p>
          <p>
            The path prefix <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs dark:bg-slate-800">/api/v1</code> is the
            compatibility boundary. New query parameters and optional JSON fields are additive; removing or renaming fields will be
            announced in release notes.
          </p>
        </div>
      </section>

      <section id="reference" className="scroll-mt-24">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
            <Wrench className="h-5 w-5" />
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">OpenAPI reference</h2>
        </div>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The explorer below lists every <strong>public integration</strong> route with request/response models and copy-paste snippets.
          It is <strong>read-only</strong> here; enable <strong>Try it out</strong> from the dashboard after sign-in.
        </p>
      </section>

      <section id="roadmap" className="scroll-mt-24 rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6 dark:border-slate-600 dark:bg-slate-900/40">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Coming soon</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          We ship the integration surface first; richer product APIs are rolling out in phases. Not yet exposed as stable public HTTP
          APIs (or still in active development):
        </p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>
            <strong>Template marketplace &amp; publishing</strong> — cross-workspace discovery and install flows beyond the catalog
            API (see <strong>Automations &amp; campaigns</strong> in the reference below for current HTTP coverage).
          </li>
          <li>
            <strong>Visual flow builder import/export</strong> — portable automation graphs for CI and partners.
          </li>
          <li>
            <strong>Richer campaign analytics</strong> — reporting APIs and segmentation helpers on top of the existing campaign
            endpoints.
          </li>
          <li>
            <strong>Partner / white-label billing hooks</strong> — usage meters and reseller-facing HTTP APIs.
          </li>
        </ul>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          Need one of these for production?{' '}
          <Link href={dashboardUrl('/register')} className="font-medium text-brand-600 hover:underline dark:text-brand-400">
            Get in touch via a workspace
          </Link>{' '}
          — we prioritize APIs that unblock real integrations.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/60">
        <Link
          href={dashboardUrl('/login')}
          className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Open interactive API
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/developers" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
          ← Developers overview
        </Link>
      </div>
    </div>
  );
}
