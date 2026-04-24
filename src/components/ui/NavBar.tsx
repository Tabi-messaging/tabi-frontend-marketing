"use client";

import { useState } from "react";
import { TabiLogo } from "@/components/branding/tabi-logo";
import Link from "next/link";
import { dashboardUrl } from "@/lib/app-urls";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/utils/cn";


const navLinks = [
  { label: "Pricing", hasDropdown: false, href: "#pricing" },
  { label: "Features", hasDropdown: true, href: "#capabilities" },
  { label: "Api Docs", hasDropdown: false, href: "/api-docs" },
  { label: "SDK", hasDropdown: false, href: "/sdks" },
  { label: "Resource", hasDropdown: true, href: "/developers" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex py-4 px-5 items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center">
          <TabiLogo className="h-8 w-auto text-primary" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <NavLinkItem key={link.label} link={link} />
          ))}
        </div>

        {/* Desktop Actions / Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className=" inline-flex h-auto rounded-md px-3.5 py-2 text-base font-medium text-black"
            asChild
          >
            <Link href={dashboardUrl("/login")}>Login</Link>
          </Button>

          <Button
            className="hidden md:block rounded-full bg-primary px-5 py-2 text-base font-medium text-white hover:bg-[#4e3cef]"
            asChild
          >
            <Link href={dashboardUrl("/register")} prefetch={false}>
              Start for free
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 md:hidden text-black"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* --- Mobile Overlay --- */}
      <div
        className={cn(
          "fixed inset-0 z-60 bg-white transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="flex flex-col h-full p-5">
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full mb-12">
            <TabiLogo className="h-8 w-auto text-primary" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 text-lg font-medium flex items-center gap-1"
            >
              Close
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[32px] font-medium text-black tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 pb-10 w-full max-w-sm mx-auto">
            <Button
              className="w-full h-14 rounded-full bg-[#5e4cff] text-lg font-semibold text-white hover:bg-[#4e3cef]"
              asChild
            >
              <Link href={dashboardUrl("/register")}>Start for free</Link>
            </Button>

            <Button
              variant="outline"
              className="w-full h-14 rounded-full border-gray-200 text-lg font-semibold text-black"
              asChild
            >
              <Link href={dashboardUrl("/login")}>Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLinkItem({ link }: { link: (typeof navLinks)[number] }) {
  return (
    <Link
      href={link.href}
      className="inline-flex cursor-pointer items-center justify-center gap-1 px-3 py-2 rounded-md text-black hover:bg-slate-50 font-medium"
    >
      {link.label}
      {link.hasDropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
    </Link>
  );
}
