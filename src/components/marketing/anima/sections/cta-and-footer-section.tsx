import { Smartphone, MessageSquare, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { TabiGlassLogoMark } from '@/components/branding/tabi-glass-logo';
import { Button } from '@/components/marketing/anima/ui/button';
import { dashboardUrl } from '@/lib/app-urls';

const steps = [
  {
    icon: <Smartphone className="h-4 w-4 text-white" />,
    number: '1',
    label: 'Pair a number',
  },
  {
    icon: <MessageSquare className="h-4 w-4 text-white" />,
    number: '2',
    label: 'Send first message',
  },
  {
    icon: <MessageCircle className="h-4 w-4 text-white" />,
    number: '3',
    label: 'Receive message and replies',
  },
];

const techStack = [
  { name: 'Python', src: '/images/brands/python.svg' },
  { name: 'PHP', src: '/images/brands/php.svg' },
  { name: 'Android', src: '/images/brands/android.svg' },
  { name: 'Flutter', src: '/images/brands/flutter.svg' },
] as const;

export function CtaAndFooterSection(): React.JSX.Element {
  return (
    <section className="flex w-full min-w-0 items-center overflow-hidden rounded-[18px] border border-white/20 bg-[#2a1a52]/95 px-4 py-8 shadow-[0_12px_40px_rgba(17,3,57,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:px-8 sm:py-10 md:px-[35px] md:py-[38px]">
      <div className="flex w-full min-w-0 flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left column — compact heading + step pills */}
        <div className="flex w-full min-w-0 shrink-0 flex-col items-start gap-4 lg:w-[260px]">
          <h2 className="m-0 max-w-full text-3xl font-semibold leading-[1.1] tracking-normal text-white sm:text-4xl md:text-[42px] md:leading-[1.08] [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
            Get Started <br />
            in Minutes
          </h2>
          <div className="flex w-full flex-col items-start gap-[11px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex h-[37px] w-full items-center overflow-hidden rounded-[10px] bg-[#3d2d6e]/85 px-2.5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-[#5e4cff]">
                    {step.icon}
                  </div>
                  <span className="whitespace-nowrap text-[15px] font-semibold leading-normal tracking-normal text-white [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center — glass logo + tech icons */}
        <div className="flex flex-1 flex-col items-center justify-center gap-5 px-2">
          <TabiGlassLogoMark size="cta" framed />
          <div
            className="flex flex-wrap items-center justify-center gap-5 sm:gap-7"
            aria-label="SDKs and platforms"
          >
            {techStack.map((t) => (
              <img
                key={t.name}
                src={t.src}
                alt={t.name}
                width={26}
                height={26}
                className="h-6 w-6 opacity-90 sm:h-7 sm:w-7"
              />
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex w-full min-w-0 shrink-0 flex-col items-start gap-[18px] lg:w-[280px]">
          <p className="m-0 max-w-full self-stretch text-xl font-medium leading-snug tracking-normal text-white sm:text-2xl sm:leading-8 md:text-[28px] md:leading-[36px] [font-family:'Mundial_Narrow-Medium',Helvetica]">
            No Moderation <br />
            Required Use any WhatsApp Number
          </p>
          <Button
            className="h-auto whitespace-nowrap rounded-[36px] bg-white px-10 py-[15px] text-base font-semibold leading-normal tracking-normal text-black hover:bg-white/90 [font-family:'Mundial_Narrow-SemiBold',Helvetica]"
            variant="ghost"
            asChild
          >
            <Link href={dashboardUrl('/register')} prefetch={false}>Start for free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
