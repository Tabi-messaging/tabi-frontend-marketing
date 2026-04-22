import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';

export function LandingFeatureSplit({
  title,
  description,
  bullets,
  icon: Icon,
  imageSrc,
  imageAlt,
  /** Desktop: image column on the right (text left) or left (text right). Mobile: text stacks first. */
  imageSide,
}: {
  title: string;
  description: string;
  bullets?: string[];
  icon: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  imageSide: 'left' | 'right';
}) {
  const visual = (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-brand-50 via-white to-slate-50 shadow-sm dark:border-slate-800 dark:from-brand-950/30 dark:via-slate-900 dark:to-slate-950">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-contain p-3 sm:p-4"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      ) : (
        <div className="flex h-full min-h-[200px] w-full items-center justify-center p-8">
          <Icon className="h-24 w-24 text-brand-500/90 dark:text-brand-400/90" strokeWidth={1.15} />
        </div>
      )}
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center py-2 lg:py-6">
      <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
      {bullets && bullets.length > 0 ? (
        <ul className="mt-6 space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );

  const imageRight = imageSide === 'right';

  return (
    <section className="border-b border-slate-200/80 py-16 dark:border-slate-800 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {imageRight ? (
            <>
              <div className="order-1 lg:order-1">{textBlock}</div>
              <div className="order-2 lg:order-2">{visual}</div>
            </>
          ) : (
            <>
              <div className="order-2 lg:order-1">{visual}</div>
              <div className="order-1 lg:order-2">{textBlock}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
