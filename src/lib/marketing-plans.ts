/**
 * Public marketing pricing (USD, website). In-app billing may still use NGN / regional
 * checkout — update this file when marketing pricing changes.
 */
export const MARKETING_YEARLY_DISCOUNT_PERCENT = 10;

export type MarketingPlan = {
  name: string;
  slug: string;
  /** USD per month when billed monthly */
  priceMonthly: number;
  popular: boolean;
  buttonLabel: string;
  buttonVariant: 'default' | 'outline';
  features: string[];
};

export const MARKETING_PLANS: MarketingPlan[] = [
  {
    name: 'Starter',
    slug: 'starter',
    priceMonthly: 13,
    popular: false,
    buttonLabel: 'Get Started',
    buttonVariant: 'outline',
    features: [
      '1 Whatsapp channel',
      '2 team members',
      'Shared inbox & quick replies',
      'Unlimited messaging & media',
      '5-day free trial',
      'Upgrade for API & developer tools',
    ],
  },
  {
    name: 'Growth',
    slug: 'growth',
    priceMonthly: 25,
    popular: true,
    buttonLabel: 'Get Started',
    buttonVariant: 'default',
    features: [
      '2 Whatsapp channels',
      '5 team members',
      'All automations',
      'Campaigns',
      'API access & keys',
      'AI features',
    ],
  },
  {
    name: 'Business',
    slug: 'business',
    priceMonthly: 50,
    popular: false,
    buttonLabel: 'Get Started',
    buttonVariant: 'outline',
    features: [
      '5 Whatsapp channels',
      '10 team members',
      'Everything in Growth',
      'Priority support',
      'Audit log & webhooks',
    ],
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    priceMonthly: 0,
    popular: false,
    buttonLabel: 'Contact Sales',
    buttonVariant: 'outline',
    features: [
      'Volume & security tailored to you',
      'Dedicated support',
      'Custom SLA',
      'White-label & on-prem',
      'Audit log & webhooks',
    ],
  },
];

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/** Effective monthly rate when paying yearly (10% off list monthly). */
export function yearlyMonthlyUsd(plan: MarketingPlan): number | null {
  if (plan.slug === 'enterprise' || plan.priceMonthly <= 0) return null;
  const factor = 1 - MARKETING_YEARLY_DISCOUNT_PERCENT / 100;
  return Math.round(plan.priceMonthly * factor * 100) / 100;
}

export function yearlyTotalUsd(plan: MarketingPlan): number | null {
  const m = yearlyMonthlyUsd(plan);
  if (m == null) return null;
  return Math.round(m * 12 * 100) / 100;
}
