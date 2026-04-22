'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Play } from 'lucide-react';
import { TabiGlassLogoMark } from '@/components/branding/tabi-glass-logo';
import { TabiLogo } from '@/components/branding/tabi-logo';
import { APP_DISPLAY_NAME } from '@/lib/branding';
import { dashboardUrl } from '@/lib/app-urls';
import { MarketingFooterSocialRow } from '@/components/marketing/anima/marketing-footer-social';
import { Button } from '@/components/marketing/anima/ui/button';
import { CtaAndFooterSection } from '@/components/marketing/anima/sections/cta-and-footer-section';
import { FaqAccordionSection } from '@/components/marketing/anima/sections/faq-accordion-section';
import { HeroMessagingSection } from '@/components/marketing/anima/sections/hero-messaging-section';
import { PlatformCapabilitiesSection } from '@/components/marketing/anima/sections/platform-capabilities-section';
import { PricingPlansSection } from '@/components/marketing/anima/sections/pricing-plans-section';
import { MARKETING_YEARLY_DISCOUNT_PERCENT } from '@/lib/marketing-plans';
import { UseCaseHighlightsSection } from '@/components/marketing/anima/sections/use-case-highlights-section';

const navLinks: Array<{
  label: string;
  hasDropdown: boolean;
  href?: string;
  dropdownHref?: string;
}> = [
  { label: 'Pricing', hasDropdown: false, href: '#pricing' },
  { label: 'Features', hasDropdown: true, href: '#capabilities' },
  { label: 'API Docs', hasDropdown: false, href: '/api-docs' },
  { label: 'SDK', hasDropdown: false, href: '/sdks' },
  { label: 'Resources', hasDropdown: true, href: '/developers' },
];

const useCaseCards = [
  {
    label: 'Developers',
    image:
      'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    hasOverlay: true,
    overlayText: 'For developers willing to scale their OTP integration or leverage on whatsapp message automation',
  },
  {
    label: 'Government',
    image: '/images/hero-government.svg',
    hasOverlay: true,
    overlayText:
      'Reach citizens and staff with secure, traceable messaging for alerts, services, and two-way engagement at scale.',
  },
  {
    label: 'Businesses',
    image: '/images/hero-businesses.svg',
    hasOverlay: true,
    overlayText:
      'Turn WhatsApp into your sales and support channel: campaigns, shared inbox, and automations that keep customers moving.',
  },
  {
    label: 'Healthcare',
    image: '/images/hero-healthcare.svg',
    hasOverlay: true,
    overlayText:
      'Send reminders, follow-ups, and patient-friendly updates on WhatsApp while your team stays in one coordinated inbox.',
  },
];

const footerColumns = [
  { title: 'PRODUCT', links: ['Developers', 'SDKs', 'Business'] },
  { title: 'Resources', links: ['API docs', 'Support', 'Guides'] },
  { title: 'Company', links: ['About us'] },
];

function NavLinkItem({
  link,
}: {
  link: (typeof navLinks)[number];
}) {
  const inner = (
    <>
      <span className="whitespace-nowrap text-[1.0625rem] font-medium leading-normal tracking-normal text-black md:text-[1.125rem] [font-family:'Mundial_Narrow-Medium',Helvetica]">
        {link.label}
      </span>
      {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5 shrink-0 text-black md:h-4 md:w-4" />}
    </>
  );

  const className =
    'inline-flex cursor-pointer items-center justify-center gap-[3px] px-2.5 py-[5px] rounded-md hover:bg-slate-50';

  if (link.href?.startsWith('/')) {
    return (
      <Link href={link.href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={link.href ?? '#'} className={className}>
      {inner}
    </a>
  );
}

export function AnimaMarketingHomepage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white text-slate-900 [color-scheme:light] dark:bg-white dark:text-slate-900">
      <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 py-4 sm:px-[45px]">
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex flex-shrink-0 items-center">
              <TabiLogo className="h-8 w-auto text-[#4E46E5] sm:h-9" />
            </Link>
            <div className="hidden flex-wrap items-center gap-1 md:inline-flex lg:gap-2">
              {navLinks.map((link) => (
                <NavLinkItem key={link.label} link={link} />
              ))}
            </div>
            <div className="inline-flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                className="h-auto rounded-md bg-white px-3.5 py-3 text-base font-medium text-black md:text-[1.0625rem] [font-family:'Mundial_Narrow-Medium',Helvetica]"
                asChild
              >
                <Link href={dashboardUrl('/login')}>Login</Link>
              </Button>
              <Button
                className="h-auto rounded-[36px] bg-[#5e4cff] px-4 py-3 text-base font-medium text-white hover:bg-[#4e3cef] md:px-5 md:text-[1.0625rem] [font-family:'Mundial_Narrow-Medium',Helvetica]"
                asChild
              >
                <Link href={dashboardUrl('/register')} prefetch={false}>Start for free</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* First viewport: headline top, use-case row bottom — avoid flex-1/min-h-0 chains (fragile in nested flex) */}
      <div className="flex min-h-[calc(100svh-4rem)] w-full max-w-[100vw] flex-col justify-between">
        <section className="flex w-full flex-col items-center px-4 pb-8 pt-14 sm:pb-10 sm:pt-20 lg:pt-24">
          <h1 className="mb-6 max-w-5xl px-2 text-center text-[2.125rem] font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl sm:leading-[1.1] md:text-6xl md:leading-[1.1] lg:text-7xl lg:leading-[1.12] [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
            Messaging Automation for <br className="hidden sm:block" />
            Business &amp; Developers
          </h1>
          <p className="mb-8 max-w-3xl px-4 text-center text-lg font-normal leading-relaxed tracking-normal text-[#666d80] sm:text-xl sm:leading-[30px] md:text-2xl md:leading-snug [font-family:'Mundial_Narrow-Regular',Helvetica]">
            Shared inbox, automations, campaigns, AI, and APIs — everything your business needs to communicate at scale.
          </p>
          <div className="mb-4 inline-flex flex-wrap items-center justify-center gap-4 px-4">
            <Button
              className="h-12 rounded-[36px] bg-[#5e4cff] px-8 py-4 text-base font-medium text-white hover:bg-[#4e3cef] sm:h-14 sm:px-10 sm:text-lg [font-family:'Mundial_Narrow-Medium',Helvetica]"
              asChild
            >
              <Link href={dashboardUrl('/register')} prefetch={false}>Start for free</Link>
            </Button>
            <Button
              variant="outline"
              className="inline-flex h-12 items-center gap-2.5 rounded-[26px] border border-solid border-[#dfe2e6] bg-white px-5 py-3 text-base font-medium text-black sm:h-14 sm:px-6 sm:text-lg [font-family:'Mundial_Narrow-Medium',Helvetica]"
              asChild
            >
              <Link href="/api-docs">
                Watch Demo
                <Play className="h-5 w-5 fill-black stroke-none sm:h-6 sm:w-6" />
              </Link>
            </Button>
          </div>
          <p className="text-center text-sm font-normal tracking-normal text-[#666d80] sm:text-base [font-family:'Mundial_Narrow-Regular',Helvetica]">
            7 days free trial
          </p>
        </section>

        <section className="w-full px-4 pb-12 sm:px-[45px] sm:pb-16">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-stretch gap-6 lg:flex-row lg:justify-center lg:gap-5">
            {useCaseCards.map((card) => (
              <div
                key={card.label}
                className="flex w-full flex-col items-start gap-3 lg:min-w-0 lg:flex-1"
              >
                <div className="h-px w-full bg-gray-200" />
                <span className="text-lg font-normal leading-normal tracking-normal text-black sm:text-xl [font-family:'Mundial_Narrow-Regular',Helvetica]">
                  {card.label}
                </span>
                <div
                  className="group relative isolate z-0 min-h-[220px] w-full overflow-hidden rounded-[13px] bg-cover bg-center sm:min-h-[min(44vh,480px)] lg:min-h-[min(42vh,520px)]"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  {card.overlayText ? (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 opacity-0 transition-opacity duration-300 ease-out motion-reduce:transition-none group-hover:opacity-100">
                      <div className="bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-4 pt-12 sm:px-5 sm:pb-5 sm:pt-14">
                        <p className="line-clamp-5 text-left text-sm font-normal leading-snug text-white sm:text-base [font-family:'Mundial_Narrow-Regular',Helvetica]">
                          {card.overlayText}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section
        aria-label="Trusted by teams"
        className="flex w-full flex-col items-center px-4 pb-[60px] sm:px-[45px]"
      >
        <h2 className="mb-8 max-w-[985px] text-center text-[28px] font-medium leading-normal tracking-normal text-black sm:text-[32px] [font-family:'Mundial_Narrow-Medium',Helvetica]">
          Trusted by Teams At
        </h2>
        <div className="w-full max-w-[985px]">
          <img
            src="/images/trusted-by-teams.svg"
            alt="Trusted by teams at leading companies"
            width={985}
            height={44}
            className="h-auto w-full object-contain object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <HeroMessagingSection />
      <UseCaseHighlightsSection />

      <section
        id="capabilities"
        className="flex w-full flex-col items-center px-4 pb-[40px] pt-[60px] sm:px-[45px]"
      >
        <h2 className="mb-6 max-w-4xl text-center text-4xl font-semibold leading-normal tracking-normal text-black sm:text-5xl [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
          Everything you need to build on WhatsApp
        </h2>
        <Button
          className="h-auto rounded-[36px] bg-[#5e4cff] px-[30px] py-[18px] text-base font-semibold text-white hover:bg-[#4e3cef] [font-family:'Mundial_Narrow-SemiBold',Helvetica]"
          asChild
        >
          <Link href={dashboardUrl('/register')} prefetch={false}>Get started in Minutes</Link>
        </Button>
      </section>

      <div className="px-4 pb-[60px] sm:px-[45px]">
        <div className="mx-auto max-w-[1280px]">
          <PlatformCapabilitiesSection />
        </div>
      </div>

      <FaqAccordionSection />

      <section id="pricing" className="relative w-full overflow-hidden">
        {/* Continuous gradient behind title + cards + footer CTA (no separate white strip) */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-[#f3f0ff] to-[#e8e0ff]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-385px] top-0 h-[2707px] w-[2022px]">
            <div className="absolute left-0 top-0 h-[1955px] w-[1955px] rounded-[977.53px] bg-[#ffd8d1] blur-[137.91px]" />
            <div className="absolute left-[29px] top-[196px] h-[1955px] w-[1955px] rounded-[977.53px] bg-[#8166ed] blur-[137.91px]" />
            <div className="absolute left-[58px] top-[360px] h-[1955px] w-[1955px] rounded-[977.53px] bg-[#321978] blur-[137.91px]" />
            <div className="absolute left-[67px] top-[626px] h-[1955px] w-[1955px] rounded-[977.53px] bg-[#5037a2] blur-[137.91px]" />
            <div className="absolute left-[67px] top-[752px] h-[1955px] w-[1955px] rounded-[977.53px] bg-[#110339] blur-[137.91px]" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-4 pb-6 pt-14 text-center sm:px-[45px]">
          <h2 className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 text-4xl font-semibold tracking-normal text-black sm:text-5xl [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
            <span>Pricing</span>
            <span className="text-xl font-medium leading-none text-[#666d80] sm:text-2xl [font-family:'Mundial_Narrow-Medium',Helvetica]">
              / {MARKETING_YEARLY_DISCOUNT_PERCENT}% off Yearly
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-[#666d80] sm:text-base [font-family:'Mundial_Narrow-Regular',Helvetica]">
            Start small and scale. All plans include important features.
          </p>
          <div className="mt-6 flex h-[43px] w-[min(100%,280px)] flex-col rounded-[10px] border border-white/40 bg-white/25 p-[1.5px] shadow-sm backdrop-blur-sm">
            <div className="flex h-full w-full items-center gap-1">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`flex h-10 min-h-0 flex-1 items-center justify-center rounded-[9px] text-sm font-semibold transition-colors sm:text-base [font-family:'Mundial_Narrow-SemiBold',Helvetica] ${
                  billingPeriod === 'monthly' ? 'bg-white text-black shadow-sm' : 'bg-transparent text-black/80'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('yearly')}
                className={`flex h-10 min-h-0 flex-1 items-center justify-center rounded-[10px] px-1 text-sm font-semibold transition-colors sm:text-base [font-family:'Mundial_Narrow-SemiBold',Helvetica] ${
                  billingPeriod === 'yearly' ? 'bg-white text-black shadow-sm' : 'bg-transparent text-black/80'
                }`}
              >
                Yearly ({MARKETING_YEARLY_DISCOUNT_PERCENT}%)
              </button>
            </div>
          </div>
          {billingPeriod === 'yearly' && (
            <p className="mt-3 max-w-md text-sm text-[#666d80] [font-family:'Mundial_Narrow-Regular',Helvetica]">
              Yearly pricing reflects {MARKETING_YEARLY_DISCOUNT_PERCENT}% off the monthly rate, billed annually.
            </p>
          )}
        </div>

        <div className="relative z-10 px-4 pb-10 pt-2 sm:px-[45px] sm:pb-14">
          <div className="mx-auto max-w-[1280px]">
            <PricingPlansSection billingPeriod={billingPeriod} />
          </div>
        </div>
        <div className="relative z-10 mt-12 px-4 pb-8 pt-2 sm:mt-16 sm:px-[45px] sm:pb-10 sm:pt-4">
          <div className="mx-auto max-w-[1280px]">
            <CtaAndFooterSection />
          </div>
        </div>
        <footer className="relative z-10 w-full bg-[#200f53] px-4 pb-10 pt-8 sm:px-[45px]">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-8 flex w-full flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <MarketingFooterSocialRow />
              <div className="flex flex-wrap items-start gap-12 sm:gap-[120px] sm:justify-end">
                {footerColumns.map((col) => (
                  <div key={col.title} className="flex flex-col gap-[20.4px]">
                    <div className="flex flex-col gap-[8.1px]">
                      <span className="whitespace-nowrap text-sm font-semibold tracking-normal text-white [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
                        {col.title}
                      </span>
                      <div className="h-px w-[172px] bg-white/20" />
                    </div>
                    <div className="flex flex-col items-start gap-2.5">
                      {col.links.map((link) => (
                        <span
                          key={link}
                          className="cursor-pointer text-sm font-normal tracking-normal text-gray-200 transition-colors hover:text-white [font-family:'Mundial_Narrow-Regular',Helvetica]"
                        >
                          {link}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
              <div className="flex items-center gap-3">
                <TabiGlassLogoMark size="footer" framed />
                <span className="whitespace-nowrap text-xs font-normal tracking-normal text-white/90 [font-family:'Mundial_Narrow-Regular',Helvetica]">
                  © {new Date().getFullYear()} {APP_DISPLAY_NAME} Africa
                </span>
              </div>
              <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-9">
                <span className="cursor-pointer whitespace-nowrap text-xs text-white hover:underline [font-family:'Mundial_Narrow-Regular',Helvetica]">
                  Terms of use
                </span>
                <span className="cursor-pointer whitespace-nowrap text-xs text-white hover:underline [font-family:'Mundial_Narrow-Regular',Helvetica]">
                  Privacy policy
                </span>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
