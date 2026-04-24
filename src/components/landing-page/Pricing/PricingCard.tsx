import { Check } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { type MarketingPlan } from "@/lib/marketing-plans";
import { dashboardUrl } from "@/lib/app-urls";
import PlanPrice from "./PlanPrice";

export default function PricingCard({
  plan,
  billingPeriod,
}: {
  plan: MarketingPlan;
  billingPeriod: "monthly" | "yearly";
}) {
  const isEnterprise = plan.slug === "enterprise";
  const buttonHref = isEnterprise
    ? "mailto:sales@tabi.africa"
    : dashboardUrl("/register");

  return (
    <Card className="relative flex flex-col overflow-hidden rounded-[20px] border border-white/70 bg-linear-to-b from-white/95 to-white/80 shadow-[0_12px_32px_-4px_rgba(17,3,57,0.06)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
      <CardContent className="flex flex-1 flex-col p-0">
        <div className="px-5 pt-8">
          <span className="text-xl font-semibold tracking-tight text-black sm:text-2xl">
            {plan.name}
          </span>

          <div className="mb-4 flex items-center justify-between">
            <PlanPrice plan={plan} billingPeriod={billingPeriod} />
            {plan.popular && (
              <Badge className="rounded-xl bg-white px-2.5 py-1 text-xs font-semibold border-primary border-solid border text-primary hover:bg-primary/10">
                POPULAR
              </Badge>
            )}
          </div>
        </div>

        <div className="mt-2 px-5">
          <Separator className="bg-black/5" />
        </div>

        <div className="flex flex-1 flex-col gap-3.5 px-5 pt-7">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-[#666D80]"
                strokeWidth={2.5}
              />
              <span className="text-sm leading-snug text-[#666D80] sm:text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="px-5 pb-8 pt-8 mt-14">
          <Button
            asChild
            variant={plan.buttonVariant === "default" ? "default" : "outline"}
            className={`h-12 w-full rounded-full text-sm font-bold transition-all sm:text-base ${
              plan.buttonVariant === "default"
                ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-[#4e3de8] hover:shadow-[#4e3de8]/30"
                : "border-gray-200 bg-white text-black hover:bg-gray-50"
            }`}
          >
            <Link href={buttonHref} prefetch={isEnterprise ? undefined : false}>
              {plan.buttonLabel}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
