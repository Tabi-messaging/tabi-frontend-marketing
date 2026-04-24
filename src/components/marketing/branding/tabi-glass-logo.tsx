import { cn } from "@/utils/cn";


type TabiGlassLogoMarkProps = {
  className?: string;
  size?: 'cta' | 'footer';
  framed?: boolean;
};

/**
 * Glass / 3D Tabi mark with glossy edge highlights.
 * Light-source is top-left; edges brighten there and fade toward bottom-right.
 */
export function TabiGlassLogoMark({
  className,
  size = 'cta',
  framed = true,
}: TabiGlassLogoMarkProps) {
  const imgClass =
    size === 'cta'
      ? 'h-[min(30vw,130px)] w-[min(30vw,130px)] sm:h-[140px] sm:w-[140px]'
      : 'h-9 w-9 sm:h-10 sm:w-10';

  const img = (
    <img
      src="/images/tabi-logo-glass.svg"
      alt="Tabi"
      width={187}
      height={187}
      className={cn('relative z-[1] object-contain', imgClass, className)}
    />
  );

  if (!framed) return img;

  if (size === 'footer') {
    return (
      <div className="relative rounded-[14px] border border-white/30 bg-white/[0.08] p-1 shadow-[0_6px_24px_rgba(17,3,57,0.35)] backdrop-blur-lg">
        <div className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),inset_1px_0_1px_rgba(255,255,255,0.2)]" />
        {img}
      </div>
    );
  }

  return (
    <div className="group relative">
      {/* Outer glow */}
      <div className="absolute -inset-3 rounded-[3.5rem] bg-white/[0.04] blur-2xl" />

      {/* Glass panel */}
      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/20 bg-white/[0.06] p-3 shadow-[0_32px_80px_rgba(17,3,57,0.55)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-4">
        {/* Top-left glossy highlight sweep */}
        <div
          className="pointer-events-none absolute -left-[10%] -top-[10%] z-0 h-[65%] w-[65%] rounded-full opacity-70"
          style={{
            background:
              'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.08) 50%, transparent 75%)',
          }}
        />

        {/* Top edge bright border line */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.15) 100%)',
          }}
        />

        {/* Left edge bright border line */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-0 w-px"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0.30) 40%, rgba(255,255,255,0.05) 100%)',
          }}
        />

        {/* Inner edge shadows for depth */}
        <div className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.30),inset_1.5px_0_1px_rgba(255,255,255,0.18),inset_0_-1px_2px_rgba(0,0,0,0.18),inset_-1px_0_2px_rgba(0,0,0,0.10)]" />

        {/* Bottom-right subtle dark edge */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 20%, rgba(0,0,0,0.12) 60%, rgba(0,0,0,0.18) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-px"
          style={{
            background:
              'linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0.15) 100%)',
          }}
        />

        {img}
      </div>
    </div>
  );
}
