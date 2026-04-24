"use client";

import { FaqAccordionSection } from "@/components/landing-page/FaqAccordionSection";
import { WhatsAppApi } from "@/components/landing-page/WhatsAppApi";
import { PlatformCapabilitiesSection } from "@/components/landing-page/PlatformCapabilitiesSection";

import WhatsAppIntegrationSection from "@/components/landing-page/WhatsAppIntegrationSection";
import NavBar from "@/components/ui/NavBar";
import MarketingHero from "@/components/landing-page/MarketingHeroSection";
import MarketingSectors from "@/components/landing-page/MarketingSectors";
import TrustedAt from "@/components/landing-page/TrustedAt";
import Footer from "@/components/landing-page/Footer";

import LastSectionsLinearGradientWrapper from "@/components/landing-page/LastSectionsLinearGradientWrapper";
import { PricingSection } from "@/components/landing-page/PricingSection";
import FooterCallToAction from "@/components/landing-page/FooterCallToAction";

export default function LandingPage() {
  return (
    <div className="bg-white">
      <div className=" mx-auto max-w-8xl">
        {" "}
        <NavBar />
        <MarketingHero />
        <MarketingSectors />
        <TrustedAt />
        <WhatsAppApi />
        <WhatsAppIntegrationSection />
        <PlatformCapabilitiesSection />
        <FaqAccordionSection />
        <LastSectionsLinearGradientWrapper>
          <PricingSection />
          <FooterCallToAction />
        </LastSectionsLinearGradientWrapper>
        <Footer />
      </div>
    </div>
  );
}
