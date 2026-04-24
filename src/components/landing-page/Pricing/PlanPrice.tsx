import {
  MARKETING_YEARLY_DISCOUNT_PERCENT,
  formatUsd,
  yearlyMonthlyUsd,
  yearlyTotalUsd,
  type MarketingPlan,
} from "@/lib/marketing-plans";

export default function PlanPrice({
  plan,
  billingPeriod,
}: {
  plan: MarketingPlan;
  billingPeriod: "monthly" | "yearly";
}) {
  if (plan.slug === "enterprise") {
    return (
      <p className="text-[44px] font-semibold leading-none tracking-tight text-black sm:text-[50px]">
        Custom
      </p>
    );
  }

  const yMo = yearlyMonthlyUsd(plan);
  const yTot = yearlyTotalUsd(plan);

  return (
    <div className="flex  flex-col items-start justify-center gap-1.5">
      <p className="text-[44px] font-semibold leading-none tracking-tight text-black sm:text-[50px]">
        {billingPeriod === "yearly" && yMo != null
          ? formatUsd(yMo)
          : formatUsd(plan.priceMonthly)}
      </p>

      {billingPeriod === "yearly" && yTot != null && (
        <p className="m-0 text-left text-[13px] leading-snug text-text-muted sm:text-sm">
          <span className="font-medium text-primary">
            {formatUsd(yTot)} billed yearly
          </span>
          <span className="ml-1 opacity-80">
            ({MARKETING_YEARLY_DISCOUNT_PERCENT}% off)
          </span>
        </p>
      )}
    </div>
  );
}
