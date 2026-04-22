import Link from 'next/link';
import { TabiLogo } from '@/components/branding/tabi-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { APP_DISPLAY_NAME } from '@/lib/branding';
import { dashboardUrl } from '@/lib/app-urls';
import {
  ArrowRight,
  BookOpen,
  Code2,
  KeyRound,
  Webhook,
  LayoutDashboard,
  Shield,
} from 'lucide-react';

export default function DevelopersLandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center text-sm font-semibold text-slate-900 dark:text-white">
            <TabiLogo className="h-9 w-auto text-[#4E46E5] dark:text-white" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/api-docs"
              className="text-sm font-medium text-brand-600 dark:text-brand-400"
            >
              API reference
            </Link>
            <ThemeToggle />
            <Link href={dashboardUrl('/login')} className="hidden text-sm text-slate-600 hover:text-slate-900 sm:inline dark:text-slate-400">
              Sign in
            </Link>
            <Link
              href={dashboardUrl('/register')}
              className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Start free
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400">
          Developers
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Build on {APP_DISPLAY_NAME}
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Start with the <strong>public docs</strong>: quick start, auth, copy-paste examples, then the full endpoint list. After sign-in,
          the dashboard adds <strong>Try it out</strong> and webhook tools; super admins see the full platform catalog.
        </p>

        <ul className="mt-12 space-y-6">
          <li className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/40">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Public API docs</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                No login. Guides (quick start, authentication, webhooks), ready-to-run curl and HTTP examples, a &quot;coming soon&quot;
                roadmap, then the full OpenAPI explorer — read-only here.
              </p>
              <Link
                href="/api-docs"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
              >
                Open /api-docs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </li>

          <li className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/40">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Dashboard — workspace team</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                After sign-in: <strong>Developer</strong> role sees the integration catalog with{' '}
                <strong>Try it out</strong>. <strong>Owner / Admin</strong> see every tenant endpoint (still no
                platform-wide operator routes).
              </p>
              <Link
                href={dashboardUrl('/login')}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700 dark:text-violet-400"
              >
                Sign in to dashboard <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </li>

          <li className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/40">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white dark:bg-slate-700">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Platform operators</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Super admins get the <strong>complete</strong> OpenAPI document, including platform administration
                APIs, from the admin area after sign-in.
              </p>
            </div>
          </li>
        </ul>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <KeyRound className="h-5 w-5 text-brand-600" />
            <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Auth</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              JWT from login for dashboard flows; scoped API keys per workspace or channel for server-to-server
              calls.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <Webhook className="h-5 w-5 text-violet-600" />
            <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Webhooks</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Subscribe to inbound messages and delivery events; signed payloads to your HTTPS endpoints.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
            <Code2 className="h-5 w-5 text-emerald-600" />
            <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">Base URL</h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              All routes are under <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">/api/v1</code> on
              your deployed API host.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
