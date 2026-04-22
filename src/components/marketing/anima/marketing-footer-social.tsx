const SOCIAL_LINKS: Array<{ href: string; label: string; icon: string }> = [
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: '/images/brands/social-instagram.svg' },
  { href: 'https://medium.com/', label: 'Medium', icon: '/images/brands/social-medium.svg' },
  { href: 'https://www.youtube.com/', label: 'YouTube', icon: '/images/brands/social-youtube.svg' },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn', icon: '/images/brands/social-linkedin.svg' },
  { href: 'https://x.com/', label: 'X', icon: '/images/brands/social-x.svg' },
];

export function MarketingFooterSocialRow(): React.JSX.Element {
  return (
    <nav aria-label="Social links" className="flex flex-wrap items-center gap-5 sm:gap-6">
      {SOCIAL_LINKS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="opacity-90 transition-opacity hover:opacity-100"
        >
          <img src={s.icon} alt="" width={22} height={22} className="h-[22px] w-[22px]" aria-hidden />
        </a>
      ))}
    </nav>
  );
}
