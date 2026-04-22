import Image from 'next/image';

const PARTNERS = [
  { name: 'Zeustek', src: '/images/partners/zeustek.jpg' },
  { name: 'Enterprise partner', src: '/images/partners/partner-enterprise.png' },
  { name: 'AxiaHub', src: '/images/partners/axiahub.png' },
];

function PartnerLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-16 shrink-0 items-center justify-center px-10 opacity-85 transition-opacity hover:opacity-100 md:h-20 md:px-14">
      <Image
        src={src}
        alt={name}
        width={220}
        height={80}
        className="h-10 w-auto max-w-[200px] object-contain md:h-12 md:max-w-[240px]"
      />
    </div>
  );
}

export function LandingPartnersMarquee() {
  const loop = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="border-b border-slate-200/80 bg-slate-50/90 py-14 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Trusted by teams at
        </p>
      </div>
      <div className="relative mx-auto mt-8 max-w-7xl overflow-hidden mask-marquee-edges">
        <div className="animate-landing-partners-marquee flex w-max items-center gap-2 pr-8">
          {loop.map((p, i) => (
            <PartnerLogo key={`${p.name}-${i}`} name={p.name} src={p.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
