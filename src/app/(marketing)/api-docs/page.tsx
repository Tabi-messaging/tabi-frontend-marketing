'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { TabiLogo } from '@/components/branding/tabi-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { SwaggerApiExplorer } from '@/components/developer/swagger-api-explorer';
import { PublicDocsGuide } from '@/components/marketing/public-docs-guide';
import { dashboardUrl } from '@/lib/app-urls';
import { BookOpen, ArrowRight, Lock } from 'lucide-react';

function publicOpenApiUrl(): string {
  const base =
    (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '')) || '';
  return `${base}/api/v1/public/openapi`;
}

export default function PublicApiDocsPage() {
  const [spec, setSpec] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    try {
      const res = await fetch(publicOpenApiUrl(), {
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) {
        setError(await res.text().catch(() => res.statusText));
        setSpec(null);
        return;
      }
      setSpec((await res.json()) as Record<string, unknown>);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load documentation');
      setSpec(null);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center text-sm font-semibold text-slate-900 dark:text-white">
            <TabiLogo className="h-8 w-auto text-[#4E46E5] dark:text-white" />
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
            <Link href="/developers" className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400">
              Developers
            </Link>
            <Link
              href="/api-docs"
              className="text-sm font-medium text-brand-600 dark:text-brand-400"
            >
              API docs
            </Link>
            <ThemeToggle />
            <Link
              href={dashboardUrl('/login')}
              className="hidden text-sm text-slate-600 hover:text-slate-900 sm:inline dark:text-slate-400 dark:hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href={dashboardUrl('/register')}
              className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white hover:bg-brand-700"
            >
              Start free
            </Link>
          </div>
        </div>
      </nav>

      <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800 dark:bg-brand-950/50 dark:text-brand-200">
            <BookOpen className="h-3.5 w-3.5" />
            Public reference
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            API documentation
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Guides, copy-paste examples, and the full <strong>public integration</strong> OpenAPI catalog (same surface as the workspace
            Developer role). This page is read-only; sign in for <strong>Try it out</strong> and webhook tools. Super admins get the
            full operator catalog under <strong>Platform API</strong> in the dashboard.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={dashboardUrl('/login')}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              <Lock className="h-4 w-4" />
              Interactive API (signed in)
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="self-center text-xs text-slate-500 dark:text-slate-500">
              Developer hub → API reference after login
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-2 py-8 sm:px-4">
        <div className="mb-14">
          <PublicDocsGuide />
        </div>

        <div className="mb-6 border-t border-slate-200 pt-12 dark:border-slate-800">
          <h2 id="openapi-explorer" className="scroll-mt-24 text-xl font-bold text-slate-900 dark:text-white">
            Endpoint reference
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            Generated from the live OpenAPI document — schemas, parameters, and request snippets for every public route.
          </p>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950 dark:border-amber-900/40 dark:bg-amber-950/30 dark:text-amber-100">
            <p className="font-medium">Could not load the API specification.</p>
            <p className="mt-1 opacity-90">{error}</p>
            <p className="mt-2 text-xs">
              Ensure the API is running and reachable (same host or set <code className="rounded bg-black/10 px-1">NEXT_PUBLIC_API_URL</code> when building the web app).
            </p>
          </div>
        )}
        {spec && (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <SwaggerApiExplorer spec={spec} tryItOutEnabled={false} />
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-500">
        <Link href="/" className="hover:text-brand-600">
          ← Back to home
        </Link>
        {' · '}
        <Link href={dashboardUrl('/register')} className="hover:text-brand-600">
          Create account
        </Link>
      </footer>
    </div>
  );
}
