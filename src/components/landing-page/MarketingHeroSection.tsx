import { CirclePlay } from "lucide-react";

import Link from "next/link";

import { Button } from "../ui/button";

import { dashboardUrl } from "@/lib/app-urls";

function MarketingHeroSection() {
  return (
    <section className=" grid place-items-center  max-w-5xl mx-auto px-4 py-32  md:py-20 lg:pt-32">
      <div className="text-center space-y-6 mb-6">
        <h1 className=" text-3xl font-semibold leading-[1.08] tracking-tight text-black sm:text-5xl  md:text-6xl md:leading-18.75">
          Messaging Automation for <br className="hidden sm:block" />
          Business &amp; Developers
        </h1>
        <p className="leading-relaxed md:w-[60%] mx-auto tracking-normal text-[var(--color-text-muted)] text-xl sm:leading-7.5 md:leading-snug ">
          Shared inbox, automations, campaigns, AI, and APIs — everything your
          business needs to communicate at scale.
        </p>
      </div>

      <div className="mb-4 flex flex-wrap items-start justify-center gap-4 px-4">
        <div>
          <Link href={dashboardUrl("/register")} prefetch={false}>
            <Button className=" rounded-full bg-primary px-12 py-6 text-base font-medium text-white hover:bg-[var(--color-button-purple-hover)]">
              Start for free
            </Button>
          </Link>

          <p className="text-center text-xs mt-2 font-normal tracking-normal text-[var(--color-text-muted)] sm:text-base ">
            7 days free trial
          </p>
        </div>

        <Link href="/api-docs">
          <Button
            variant="outline"
            className=" text-black inline-flex items-center gap-2.5 rounded-full border border-solid border-[var(--color-border-light-interactive)] bg-white  px-8 py-6 text-base font-medium"
          >
            Watch Demo
            <CirclePlay className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default MarketingHeroSection;
