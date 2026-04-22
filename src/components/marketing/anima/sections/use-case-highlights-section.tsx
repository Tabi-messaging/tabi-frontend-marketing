import type { ReactNode } from 'react';
import {
  CircleCheck as CheckCircle,
  MapPin,
  Menu,
  Mic,
  FileText,
  Image as ImageIcon,
  Video,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { TabiGlassLogoMark } from '@/components/branding/tabi-glass-logo';
import { Button } from '@/components/marketing/anima/ui/button';
import { dashboardUrl } from '@/lib/app-urls';
import { Card, CardContent } from '@/components/marketing/anima/ui/card';
import { cn } from '@/lib/utils';

/** Icon tile backgrounds aligned with Figma (purple, orange, pink, gold, green, coral). */
const featureItems = [
  {
    id: 'location',
    label: 'Location',
    icon: <MapPin className="h-6 w-6 text-white" aria-hidden />,
    iconBg: 'bg-[#8166ed]',
  },
  {
    id: 'menu',
    label: 'Menu',
    icon: <Menu className="h-6 w-6 text-white" aria-hidden />,
    iconBg: 'bg-[#f97316]',
  },
  {
    id: 'audio',
    label: 'Audio',
    icon: <Mic className="h-6 w-6 text-white" aria-hidden />,
    iconBg: 'bg-[#ec4899]',
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: <FileText className="h-6 w-6 text-white" aria-hidden />,
    iconBg: 'bg-[#eab308]',
  },
  {
    id: 'product-images',
    label: 'Product Images',
    icon: <ImageIcon className="h-6 w-6 text-white" aria-hidden />,
    iconBg: 'bg-[#22c55e]',
  },
  {
    id: 'videos',
    label: 'Videos',
    icon: <Video className="h-6 w-6 text-white" aria-hidden />,
    iconBg: 'bg-[#fb7185]',
  },
] as const;

const bulletPoints = [
  'Fast integration with any tech stack.',
  'Integrates with your CRM, website, or SaaS.',
  'All WhatsApp message types in one API',
];

function FeatureToggleRow({
  label,
  icon,
  iconBg,
}: {
  label: string;
  icon: ReactNode;
  iconBg: string;
}) {
  return (
    <div className="relative flex h-[75px] w-full shrink-0 items-center overflow-hidden rounded-[15.51px] bg-[#1a0d40]/90">
      <div
        className={cn(
          'absolute left-[13px] flex h-[51px] w-[51px] items-center justify-center rounded-[12px] shadow-sm',
          iconBg,
        )}
      >
        {icon}
      </div>
      <span className="absolute left-[76px] whitespace-nowrap text-2xl font-semibold leading-normal tracking-normal text-white [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
        {label}
      </span>
      <div className="absolute right-[13px] flex items-center">
        <div
          className="flex h-[28px] w-[52px] items-center justify-end rounded-full bg-[#5e4cff] px-1"
          aria-hidden
        >
          <div className="h-5 w-5 rounded-full bg-white shadow-sm" />
        </div>
      </div>
    </div>
  );
}

export function UseCaseHighlightsSection(): React.JSX.Element {
  return (
    <section className="relative w-full overflow-hidden bg-[#110339] px-0 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1a0d45] via-[#110339] to-[#0a0524]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10">
        <h2 className="mb-6 text-center text-3xl font-semibold leading-tight tracking-normal text-white sm:text-4xl md:text-5xl [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
          Integrate Whatsapp Messaging into <br className="hidden sm:block" />
          your own services, business or apps
        </h2>
        <p className="mx-auto mb-12 max-w-[745px] text-center text-base font-normal leading-relaxed tracking-normal text-white/90 sm:text-lg md:text-xl [font-family:'Mundial_Narrow-Regular',Helvetica]">
          Integrate WhatsApp into any CRM, ERP, or website with simple HTTP requests. Our tutorials and code examples
          help developers send and receive texts, locations, buttons, audio, videos, and other messages for bots or
          customer support.
        </p>

        <div className="flex flex-col gap-10">
          {/* Logo → dotted line → features card (single row on lg; stacked on small screens) */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-4">
            <div className="flex shrink-0 justify-center lg:justify-start">
              <TabiGlassLogoMark size="cta" framed />
            </div>
            <div
              className="hidden h-0 min-w-[1.5rem] flex-1 border-t-2 border-dotted border-white/45 lg:block"
              aria-hidden
            />
            <div className="w-full max-w-[551px] shrink-0 lg:mx-0">
              <FeaturesCard />
            </div>
          </div>

          <div className="flex max-w-xl flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              {bulletPoints.map((point) => (
                <div key={point} className="inline-flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={2} />
                  <span className="text-base font-normal leading-relaxed tracking-normal text-white [font-family:'Mundial_Narrow-Regular',Helvetica]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <Button
              variant="ghost"
              className="h-auto w-fit gap-2 p-0 text-lg font-bold tracking-wide text-white hover:bg-transparent hover:text-white/85 sm:text-xl [font-family:'Mundial_Narrow-Bold',Helvetica]"
              asChild
            >
              <Link href={dashboardUrl('/register')} prefetch={false} className="inline-flex items-center gap-2">
                START FREE TRIAL
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesCard(): React.JSX.Element {
  return (
    <div className="w-full overflow-hidden rounded-[23.51px] border border-white/15 bg-[#ffffff0d] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_1px_0_0_rgba(255,255,255,0.22),inset_0_-1px_1px_rgba(0,0,0,0.18),inset_-1px_0_1px_rgba(0,0,0,0.12)] backdrop-blur-md">
      <Card className="border-0 bg-transparent shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col items-stretch gap-[13px] p-[23px] pt-5">
            {featureItems.map((item) => (
              <FeatureToggleRow key={item.id} label={item.label} icon={item.icon} iconBg={item.iconBg} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
