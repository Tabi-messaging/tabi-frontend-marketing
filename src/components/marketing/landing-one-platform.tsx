import Image from 'next/image';
import { APP_DISPLAY_NAME } from '@/lib/branding';

const ILLUSTRATION = '/images/marketing/1.png';

export function LandingOnePlatformSection() {
  return (
    <section
      id="platform"
      className="border-b border-slate-200/80 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/40 md:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
          One Platform. Every Business. On WhatsApp.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          From commerce to government services, healthcare, delivery, restaurants, and developer integrations —{' '}
          {APP_DISPLAY_NAME} powers customer experiences across every sector.
        </p>
      </div>

      {/* Full-width illustration — no card; larger than the text column */}
      <div className="relative mx-auto mt-10 w-full max-w-[88rem] px-4 sm:mt-14 sm:px-6 lg:mt-16 lg:px-10">
        <div className="relative h-[min(72vw,28rem)] w-full sm:h-[min(68vw,36rem)] md:h-[min(62vw,42rem)] lg:h-[min(56vw,48rem)] xl:h-[52rem]">
          <Image
            src={ILLUSTRATION}
            alt={`${APP_DISPLAY_NAME} — one platform on WhatsApp`}
            fill
            className="object-contain object-center"
            sizes="(min-width: 1536px) 88rem, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
