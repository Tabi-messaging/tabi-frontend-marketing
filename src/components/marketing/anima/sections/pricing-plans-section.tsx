import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/marketing/anima/ui/badge';
import { Button } from '@/components/marketing/anima/ui/button';
import { Card, CardContent } from '@/components/marketing/anima/ui/card';
import { Separator } from '@/components/marketing/anima/ui/separator';
import {
  MARKETING_PLANS,
  MARKETING_YEARLY_DISCOUNT_PERCENT,
  formatUsd,
  yearlyMonthlyUsd,
  yearlyTotalUsd,
  type MarketingPlan,
} from '@/lib/marketing-plans';
import { dashboardUrl } from '@/lib/app-urls';

function PlanPrice({
  plan,
  billingPeriod,
}: {
  plan: MarketingPlan;
  billingPeriod: 'monthly' | 'yearly';
}) {
  if (plan.slug === 'enterprise') {
    return (
      <span className="text-[44px] font-semibold leading-none tracking-normal text-black sm:text-[50px] [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
        Custom
      </span>
    );
  }

  const yMo = yearlyMonthlyUsd(plan);
  const yTot = yearlyTotalUsd(plan);

  if (billingPeriod === 'yearly' && yMo != null && yTot != null) {
    return (
      <div className="flex min-h-[5.25rem] flex-col items-start gap-1.5">
        <span className="text-[44px] font-semibold leading-none tracking-tight text-black sm:text-[50px] [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
          {formatUsd(yMo)}
        </span>
        <p className="m-0 w-full text-left text-[13px] leading-snug text-[#666d80] sm:text-sm [font-family:'Mundial_Narrow-Regular',Helvetica]">
          <span className="inline-block whitespace-nowrap">/mo · {formatUsd(yTot)}/yr</span>
          <span className="whitespace-nowrap"> ({MARKETING_YEARLY_DISCOUNT_PERCENT}% off)</span>
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[5.25rem] flex-col items-start gap-1.5">
      <span className="text-[44px] font-semibold leading-none tracking-tight text-black sm:text-[50px] [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
        {formatUsd(plan.priceMonthly)}
      </span>
      <p className="m-0 text-left text-[13px] leading-snug text-[#666d80] sm:text-sm [font-family:'Mundial_Narrow-Regular',Helvetica]">
        /mo
      </p>
    </div>
  );
}

export function PricingPlansSection({
  billingPeriod,
}: {
  billingPeriod: 'monthly' | 'yearly';
}) {
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-0 py-2">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl">
        <Image
          src="/images/marketing/pricing-watermark.png"
          alt=""
          width={420}
          height={420}
          className="max-h-[min(85vw,380px)] w-auto object-contain opacity-[0.06]"
          aria-hidden
        />
      </div>
      <div className="relative z-[1] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {MARKETING_PLANS.map((plan) => (
          <PricingCard key={plan.slug} plan={plan} billingPeriod={billingPeriod} />
        ))}
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  billingPeriod,
}: {
  plan: MarketingPlan;
  billingPeriod: 'monthly' | 'yearly';
}) {
  return (
    <Card className="relative flex min-h-0 w-full min-w-0 max-w-none overflow-hidden rounded-2xl border border-white/70 bg-white/85 shadow-[0_8px_40px_rgba(17,3,57,0.08)] backdrop-blur-md">
      <CardContent className="flex min-h-[480px] flex-col p-0 sm:min-h-[500px]">
        <div className="px-4 pb-0 pt-6 sm:px-5 sm:pt-8">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xl font-semibold leading-normal tracking-normal text-black sm:text-2xl [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
              {plan.name}
            </span>
            {plan.popular && (
              <Badge
                variant="outline"
                className="shrink-0 rounded-lg border-[#4e46e5] bg-transparent px-2 py-0.5 text-[10px] font-semibold leading-normal tracking-normal text-[#5e4cff] sm:px-2.5 sm:py-[5px] sm:text-xs [font-family:'Mundial_Narrow-SemiBold',Helvetica]"
              >
                POPULAR
              </Badge>
            )}
          </div>
        </div>
        <div className="px-4 pb-0 pt-3 sm:px-5">
          <PlanPrice plan={plan} billingPeriod={billingPeriod} />
        </div>
        <div className="mt-4 px-4 sm:px-5">
          <Separator className="bg-[#e5e5e5]/90" />
        </div>
        <div className="flex flex-1 flex-col items-start gap-2.5 px-4 pb-0 pt-5 sm:gap-3 sm:px-5 sm:pt-6">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" strokeWidth={2.5} />
              <span className="text-[13px] font-normal leading-snug tracking-normal text-[#36394a] sm:text-sm [font-family:'Mundial_Narrow-Regular',Helvetica]">
                {feature}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-center px-4 pb-6 pt-6 sm:px-5 sm:pb-8 sm:pt-8">
          {plan.buttonVariant === 'default' ? (
            <Button
              className="h-auto w-full max-w-[220px] whitespace-nowrap rounded-[36px] border-0 bg-[#5e4cff] px-6 py-3 text-sm font-semibold leading-normal tracking-normal text-white hover:bg-[#4e3de8] sm:px-10 sm:py-[15px] sm:text-base [font-family:'Mundial_Narrow-SemiBold',Helvetica]"
              asChild
            >
              <Link href={dashboardUrl('/register')} prefetch={false}>{plan.buttonLabel}</Link>
            </Button>
          ) : plan.slug === 'enterprise' ? (
            <Button
              variant="outline"
              className="h-auto w-full max-w-[220px] whitespace-nowrap rounded-[36px] border border-solid border-gray-300/90 bg-white/50 px-6 py-3 text-sm font-semibold leading-normal tracking-normal text-black hover:bg-white/80 sm:px-10 sm:py-[15px] sm:text-base [font-family:'Mundial_Narrow-SemiBold',Helvetica]"
              asChild
            >
              <Link href="mailto:sales@tabi.africa">{plan.buttonLabel}</Link>
            </Button>
          ) : (
            <Button
              variant="outline"
              className="h-auto w-full max-w-[220px] whitespace-nowrap rounded-[36px] border border-solid border-gray-300/90 bg-white/50 px-6 py-3 text-sm font-semibold leading-normal tracking-normal text-black hover:bg-white/80 sm:px-10 sm:py-[15px] sm:text-base [font-family:'Mundial_Narrow-SemiBold',Helvetica]"
              asChild
            >
              <Link href={dashboardUrl('/register')} prefetch={false}>{plan.buttonLabel}</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
