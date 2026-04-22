'use client';

import Link from 'next/link';
import { TabiLogo } from '@/components/branding/tabi-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { useMarketingSession } from '@/hooks/use-marketing-session';
import { dashboardUrl } from '@/lib/app-urls';

export function MarketingLandingNav() {
  const loggedIn = useMarketingSession();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <TabiLogo className="h-9 max-h-10 w-auto text-[#4E46E5] dark:text-white" />
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#platform"
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Platform
          </a>
          <a
            href="#solutions"
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Solutions
          </a>
          <a
            href="#partners"
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Partners
          </a>
          <a
            href="#pricing"
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            FAQ
          </a>
          <Link
            href="/developers"
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Developers
          </Link>
          <Link
            href="/api-docs"
            className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            API docs
          </Link>
          <Link
            href="/sdks"
            className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            SDKs
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          {loggedIn ? (
            <Link
              href={dashboardUrl('/overview')}
              className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700 sm:px-4"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={dashboardUrl('/login')}
                className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:inline dark:text-slate-300 dark:hover:text-white"
              >
                Sign in
              </Link>
              <Link
                href={dashboardUrl('/register')}
                className="rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-brand-700 sm:px-4"
              >
                Start free
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
