'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useMarketingSession } from '@/hooks/use-marketing-session';
import { dashboardUrl } from '@/lib/app-urls';

export function LandingHeroCtas() {
  const loggedIn = useMarketingSession();

  if (loggedIn) {
    return (
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href={dashboardUrl('/overview')}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-xl"
        >
          Go to dashboard <ArrowRight className="h-5 w-5" />
        </Link>
        <a
          href="#solutions"
          className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          Explore solutions
        </a>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <Link
        href={dashboardUrl('/register')}
        className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition hover:bg-brand-500 hover:shadow-xl"
      >
        Get started free <ArrowRight className="h-5 w-5" />
      </Link>
      <a
        href="#solutions"
        className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        Explore solutions
      </a>
    </div>
  );
}
