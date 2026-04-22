'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { APP_DISPLAY_NAME } from '@/lib/branding';

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: `What is ${APP_DISPLAY_NAME}?`,
    a: `${APP_DISPLAY_NAME} is a WhatsApp operations platform: shared inbox, automations, campaigns, billing in Naira, and a developer API — built for teams that outgrow chatting from a single phone.`,
  },
  {
    q: 'Do I need a WhatsApp Business API approval to start?',
    a: 'You connect your number through our guided pairing flow (QR / device session). You can explore the product on a trial while you scale messaging responsibly with built-in throttling and warm-up guidance.',
  },
  {
    q: 'Can my developers integrate with our CRM or ERP?',
    a: 'Yes. Use REST endpoints, API keys, and signed webhooks for inbound messages and delivery events. Growth and Business plans include API access suited to production integrations.',
  },
  {
    q: 'How does billing work?',
    a: 'Plans are billed in Nigerian Naira via Paystack. Starter includes a trial; you can upgrade when you need more channels, team seats, or API access.',
  },
];

export function LandingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-slate-200/80 py-20 dark:border-slate-800 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-600 dark:text-slate-400">
          Straight answers about getting started, APIs, and billing.
        </p>
        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800/80"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown
                    className={cn('h-5 w-5 shrink-0 text-slate-500 transition-transform', isOpen && 'rotate-180')}
                  />
                </button>
                {isOpen ? (
                  <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-400">
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
