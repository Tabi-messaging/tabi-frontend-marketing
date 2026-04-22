'use client';

import * as React from 'react';
import { useCallback, useState } from 'react';
import { Plus, Code as Code2, Zap, Shield, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

type MessagingCard = {
  id: string;
  title: string;
  shortLabel: string;
  icon: React.ReactNode;
  description: string;
  /** First card: API endpoint mockup */
  showApiMock?: boolean;
};

const CARDS: MessagingCard[] = [
  {
    id: 'stable-api',
    title: 'Stable Multi-Device API',
    shortLabel: 'Stable API',
    icon: <Code2 className="h-5 w-5 text-[#5e4cff]" aria-hidden />,
    description:
      'Connect and manage messaging across multiple devices with a reliable API built for consistency, uptime, and seamless scaling as your business grows.',
    showApiMock: true,
  },
  {
    id: 'engagement-1',
    title: 'Engagement',
    shortLabel: 'Engagement',
    icon: <Zap className="h-5 w-5 text-[#5e4cff]" aria-hidden />,
    description:
      'Build rich customer journeys with automated replies, interactive messaging, and experiences that keep conversations moving.',
  },
  {
    id: 'media',
    title: 'All Media Messages',
    shortLabel: 'Media',
    icon: <Layers className="h-5 w-5 text-[#5e4cff]" aria-hidden />,
    description:
      'Send images, documents, audio, and video with the same reliability as text — perfect for receipts, catalogs, and rich support.',
  },
  {
    id: 'engagement-2',
    title: 'Engagement',
    shortLabel: 'Engage',
    icon: <Zap className="h-5 w-5 text-[#5e4cff]" aria-hidden />,
    description:
      'Orchestrate campaigns and follow-ups that feel personal at scale while your team stays aligned in one inbox.',
  },
  {
    id: 'freedom',
    title: 'Freedom',
    shortLabel: 'Freedom',
    icon: <Shield className="h-5 w-5 text-[#5e4cff]" aria-hidden />,
    description:
      'Own your stack: APIs, webhooks, and exports that let you integrate WhatsApp without vendor lock-in.',
  },
];

function CollapsedFace({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-0 w-full flex-col items-center justify-between gap-4 py-4">
      <div
        className="flex min-h-0 flex-1 items-center justify-center px-1 text-center text-[13px] font-semibold leading-snug text-black [font-family:'Mundial_Narrow-SemiBold',Helvetica] [writing-mode:vertical-rl] sm:text-sm"
        style={{ textOrientation: 'mixed' as const }}
      >
        {label}
      </div>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200">
        <Plus className="h-5 w-5 text-gray-500" aria-hidden />
      </div>
    </div>
  );
}

function ExpandedFace({ card }: { card: MessagingCard }) {
  const bigIcon = React.isValidElement(card.icon)
    ? React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, {
        className: 'h-16 w-16 text-[#5e4cff] opacity-90 sm:h-20 sm:w-20',
      })
    : null;

  return (
    <div className="flex h-full min-h-0 flex-col p-5 sm:p-6">
      <div className="flex shrink-0 items-start justify-between gap-3">
        <h3 className="pr-2 text-[18px] font-semibold leading-snug tracking-normal text-black sm:text-[22px] [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
          {card.title}
        </h3>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/40">{card.icon}</div>
      </div>

      {card.showApiMock ? (
        <>
          <div className="mt-4 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[12px] bg-white/30 px-4 py-12 sm:py-8">
            <div className="flex w-full flex-col gap-3">
              {['GET /messages', 'POST /send', 'WS /events'].map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white/60 px-4 py-2.5">
                  <div
                    className={`h-2 w-2 shrink-0 rounded-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                  />
                  <span className="font-mono text-sm text-black [font-family:'Mundial_Narrow-Regular',Helvetica]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 shrink-0 text-base font-normal leading-[1.55] tracking-normal text-black sm:text-lg [font-family:'Mundial_Narrow-Regular',Helvetica]">
            {card.description}
          </p>
        </>
      ) : (
        <>
          <div className="mt-4 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[12px] bg-white/30 px-4 py-10">
            {bigIcon}
          </div>
          <p className="mt-4 shrink-0 text-base font-normal leading-[1.55] tracking-normal text-black sm:text-lg [font-family:'Mundial_Narrow-Regular',Helvetica]">
            {card.description}
          </p>
        </>
      )}
    </div>
  );
}

export function HeroMessagingSection(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const resetToFirst = useCallback(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className="flex w-full flex-col gap-[59px] overflow-hidden bg-white py-[84px]">
      <div className="flex flex-col items-center gap-3.5 self-center px-4">
        <h2 className="text-center text-3xl font-semibold leading-normal tracking-normal text-black sm:text-4xl md:text-5xl [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
          WhatsApp without limit
        </h2>
        <p className="max-w-2xl text-center text-base font-normal leading-normal tracking-normal text-black sm:text-lg md:text-xl [font-family:'Mundial_Narrow-Regular',Helvetica]">
          Start building with WhatsApp API in seconds
        </p>
      </div>

      <div className="flex flex-col gap-[47.6px] px-4 sm:px-[44.5px]">
        <div
          className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-3"
          onMouseLeave={resetToFirst}
          role="list"
          aria-label="WhatsApp capabilities"
        >
          {CARDS.map((card, index) => {
            const expanded = activeIndex === index;
            return (
              <div
                key={card.id}
                role="listitem"
                aria-expanded={expanded}
                className={cn(
                  'relative cursor-pointer overflow-hidden rounded-[11px] border-0 shadow-none outline-none transition-[flex-basis,width,min-width] duration-300 ease-out focus-visible:ring-2 focus-visible:ring-[#5e4cff] focus-visible:ring-offset-2 motion-reduce:transition-none',
                  'w-full',
                  expanded
                    ? 'min-h-[min(430px,70vh)] bg-[#dddafe] lg:min-h-[430px] lg:min-w-[min(484px,40%)] lg:flex-[1_1_45%] lg:bg-[#dddafe]'
                    : 'bg-[#f2f2f2] max-lg:min-h-[72px] lg:min-h-[430px] lg:w-[80px] lg:max-w-[80px] lg:flex-[0_0_80px] lg:shrink-0 lg:bg-[#f2f2f2] lg:hover:bg-[#ebebeb]',
                  expanded && 'max-lg:min-h-[380px]',
                )}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
              >
                {expanded ? (
                  <ExpandedFace card={card} />
                ) : (
                  <>
                    <div className="flex h-full items-center justify-between gap-3 px-4 py-4 lg:hidden">
                      <span className="text-left text-base font-semibold leading-snug text-black [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
                        {card.title}
                      </span>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200">
                        <Plus className="h-5 w-5 text-gray-500" aria-hidden />
                      </div>
                    </div>
                    <div className="hidden h-full min-h-[430px] lg:block">
                      <CollapsedFace label={card.shortLabel} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="h-px w-full bg-gray-200" />
      </div>
    </section>
  );
}
