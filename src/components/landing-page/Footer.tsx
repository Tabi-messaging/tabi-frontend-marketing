import { APP_DISPLAY_NAME } from "@/lib/branding";
import { TabiGlassLogoMark } from "../marketing/branding/tabi-glass-logo";
import Image from "next/image";

const footerColumns = [
  { title: "PRODUCT", links: ["Developers", "SDKs", "Business"] },
  { title: "Resources", links: ["API docs", "Support", "Guides"] },
  { title: "Company", links: ["About us"] },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: "/images/brands/social-instagram.svg",
  },
  {
    href: "https://medium.com/",
    label: "Medium",
    icon: "/images/brands/social-medium.svg",
  },
  {
    href: "https://www.youtube.com/",
    label: "YouTube",
    icon: "/images/brands/social-youtube.svg",
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: "/images/brands/social-linkedin.svg",
  },
  { href: "https://x.com/", label: "X", icon: "/images/brands/social-x.svg" },
];

function Footer() {
  return (
    <footer className="relative z-10 w-full bg-section-dark-secondary px-4 pb-10 pt-20 sm:px-11.25">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex w-full flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <nav
            aria-label="Social links"
            className="flex flex-wrap items-center gap-5 sm:gap-6"
          >
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <Image
                  src={s.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-5.5 w-5.5"
                  aria-hidden
                />
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap items-start gap-12 sm:gap-30 sm:justify-end">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-[20.4px]">
                <div className="flex flex-col gap-[8.1px]">
                  <span className="whitespace-nowrap text-sm font-semibold tracking-normal text-white ">
                    {col.title}
                  </span>
                  <div className="h-px w-43 bg-white/20" />
                </div>
                <div className="flex flex-col items-start gap-2.5">
                  {col.links.map((link) => (
                    <span
                      key={link}
                      className="cursor-pointer text-sm font-normal tracking-normal text-gray-200 transition-colors hover:text-white "
                    >
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <TabiGlassLogoMark size="footer" framed />
            <span className="whitespace-nowrap text-xs font-normal tracking-normal text-white/90 ">
              © {new Date().getFullYear()} {APP_DISPLAY_NAME} Africa
            </span>
          </div>
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-9">
            <span className="cursor-pointer whitespace-nowrap text-xs text-white hover:underline ">
              Terms of use
            </span>
            <span className="cursor-pointer whitespace-nowrap text-xs text-white hover:underline ">
              Privacy policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
