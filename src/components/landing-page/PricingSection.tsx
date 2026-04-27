import { useState } from "react";

import {
  MARKETING_PLANS,
  MARKETING_YEARLY_DISCOUNT_PERCENT,
} from "@/lib/marketing-plans";
import PricingCard from "./Pricing/PricingCard";

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "yearly",
  );

  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-6 pt-14 text-center sm:px-11.25">
        <h2 className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 text-4xl font-semibold tracking-normal text-black sm:text-5xl">
          Most flexible pricing ever
        </h2>
        <p className="mt-3 max-w-xl text-sm text-text-muted sm:text-base">
          Start small and scale. All plans include important features
        </p>

        <div className="mt-6 flex w-[min(100%,280px)] flex-col rounded-[10px] border border-white/40 bg-white/25 p-[1.5px] shadow-sm backdrop-blur-sm">
          <div className="flex h-full w-full items-center gap-1">
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`flex cursor-pointer h-10 min-h-0 flex-1 items-center justify-center rounded-[9px] text-sm font-semibold transition-colors sm:text-base ${
                billingPeriod === "monthly"
                  ? "bg-white text-black shadow-sm"
                  : "bg-transparent text-black/80"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("yearly")}
              className={`flex cursor-pointer h-10 min-h-0 flex-1 items-center justify-center rounded-[10px] px-1 text-sm font-semibold transition-colors sm:text-base ${
                billingPeriod === "yearly"
                  ? "bg-white text-black shadow-sm"
                  : "bg-transparent text-black/80"
              }`}
            >
              Yearly ({MARKETING_YEARLY_DISCOUNT_PERCENT}%)
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-10 pt-2 sm:px-11.25 sm:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="relative mx-auto w-full max-w-7xl px-0 py-2">
            <div className="relative z-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MARKETING_PLANS.map((plan) => (
                <PricingCard
                  key={plan.slug}
                  plan={plan}
                  billingPeriod={billingPeriod}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
