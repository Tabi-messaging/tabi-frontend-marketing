'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { APP_DISPLAY_NAME } from '@/lib/branding';
import { dashboardUrl } from '@/lib/app-urls';
import { useMarketingSession } from '@/hooks/use-marketing-session';

export function LandingFinalCta() {
  const loggedIn = useMarketingSession();

  return (
    <section className="border-t border-slate-200 bg-brand-600 py-16 dark:border-slate-800 dark:bg-brand-900 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to automate WhatsApp?</h2>
        <p className="mt-3 text-brand-100">Join teams using {APP_DISPLAY_NAME} for customer communication.</p>
        {loggedIn ? (
          <Link
            href={dashboardUrl('/overview')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
          >
            Open dashboard <ArrowRight className="h-5 w-5" />
          </Link>
        ) : (
          <Link
            href={dashboardUrl('/register')}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-base font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
          >
            Start free <ArrowRight className="h-5 w-5" />
          </Link>
        )}
      </div>
    </section>
  );
}
