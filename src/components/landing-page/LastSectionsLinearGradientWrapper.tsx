interface LastSectionsLinearGradientWrapperProps {
  children: React.ReactNode;
}

export default function LastSectionsLinearGradientWrapper({
  children,
}: LastSectionsLinearGradientWrapperProps) {
  return (
    <section id="pricing" className="relative w-full overflow-hidden">
      {/* 1. Base Linear Gradient Layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-section-light-gradient-1 to-section-light-gradient-2"
        aria-hidden
      />

      {/* 2. Responsive Decorative Blobs Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* On mobile: centered and scaled to 150% of viewport
            On desktop: shifted left and fixed size as per original design 
        */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[150vw] h-[150vh] md:-left-96 md:translate-x-0 md:h-676.75 md:w-505.5">
          {/* Blobs: Scaled using % to ensure they don't break small screens */}
          <div className="absolute left-0 top-0 h-[80%] w-[80%] rounded-full bg-section-light-salmon blur-[80px] md:h-488.75 md:w-488.75 md:blur-[137.91px] opacity-40 md:opacity-100" />

          <div className="absolute left-[5%] top-[10%] h-full w-[80%] rounded-full bg-icon-location blur-[80px] md:left-7.25 md:top-49 md:h-488.75 md:w-488.75 md:blur-[137.91px] opacity-30 md:opacity-100" />
          
          <div className="absolute left-[10%] top-[20%] h-full w-[80%] rounded-full bg-gradient-purple-dark-1 blur-[80px] md:left-14.5 md:top-90 md:h-488.75 md:w-488.75 md:blur-[137.91px] opacity-40 md:opacity-100" />

          <div className="absolute left-[15%] top-[30%] h-full w-[80%] rounded-full bg-gradient-purple-dark-2 blur-[100px] md:left-16 md:top-626 md:h-488.75 md:w-488.75 md:blur-[137.91px]" />

          <div className="absolute left-[15%] top-[40%] h-full w-[80%] rounded-full bg-section-dark-secondary blur-[100px] md:left-16 md:top-752 md:h-488.75 md:w-488.75 md:blur-[137.91px]" />
        </div>
      </div>

      {/* 3. Content Layer */}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
