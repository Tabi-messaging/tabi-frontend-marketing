const useCaseCards = [
  {
    label: "Developers",
    image: "/images/developer.jpg",
    hasOverlay: true,
    overlayText:
      "For developers willing to scale their OTP integration or leverage on whatsapp message automation",
  },
  {
    label: "Government",
    image: "/images/government.jpg",
    hasOverlay: true,
    overlayText:
      "Reach citizens and staff with secure, traceable messaging for alerts, services, and two-way engagement at scale.",
  },
  {
    label: "Businesses",
    image: "/images/businesses.jpg",
    hasOverlay: true,
    overlayText:
      "Turn WhatsApp into your sales and support channel: campaigns, shared inbox, and automations that keep customers moving.",
  },
  {
    label: "Healthcare",
    image: "/images/healthcare.png",
    hasOverlay: true,
    overlayText:
      "Send reminders, follow-ups, and patient-friendly updates on WhatsApp while your team stays in one coordinated inbox.",
  },
];

function MarketingSectors() {
  return (
    <section className="w-full px-4 pb-12 sm:px-11.25 sm:pb-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch gap-6 lg:flex-row lg:justify-center lg:gap-5">
        {useCaseCards.map((card) => (
          <div
            key={card.label}
            className="flex w-full flex-col items-start gap-3 lg:min-w-0 lg:flex-1"
          >
            <div className="h-px w-full bg-gray-200" />
            <span className="text-lg font-normal leading-normal tracking-normal text-black sm:text-xl ">
              {card.label}
            </span>
            <div
              className="group relative isolate z-0 min-h-92 w-full overflow-hidden rounded-[13px] bg-cover bg-center "
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundPosition: "center",
              }}
            >
              {card.overlayText ? (
                <div className="group-hover:opacity-100 pointer-events-none absolute inset-x-0 bottom-0 z-10 opacity-0 transition-opacity duration-500 ease-in-out will-change-opacity">
                  {/* The "Figma Layer Blur" - Isolated to prevent staggering */}
                  <div
                    className="absolute inset-0 z-0 backdrop-blur-[24px] [mask-image:linear-gradient(to_top,black_0%,transparent_100%)]"
                    style={{ transform: "translateZ(0)" }} // Forces GPU acceleration
                  />

                  {/* The Color Gradient Layer */}
                  <div
                    className="relative z-10 px-4 pb-6 pt-24 sm:px-5 sm:pb-8"
                    style={{
                      background: `linear-gradient(to top, var(--color-gradient-overlay) 0%, #3C3C3C00 100%)`,
                    }}
                  >
                    <p className="line-clamp-5 text-left text-sm font-normal leading-snug text-white sm:text-base">
                      {card.overlayText}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MarketingSectors;
