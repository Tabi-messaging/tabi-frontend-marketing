"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleCheck,
  MapPin,
  Menu,
  Mic,
  FileText,
  Image as ImageIcon,
  Video,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TabiGlassLogoMark } from "@/components/branding/tabi-glass-logo";
import { dashboardUrl } from "@/lib/app-urls";
import { FeatureToggleRow } from "./FeatureToggleRow";

const FEATURES = [
  {
    id: "loc",
    label: "Location",
    icon: MapPin,
    color: "var(--color-icon-location)",
  },
  { id: "menu", label: "Menu", icon: Menu, color: "var(--color-icon-menu)" },
  { id: "audio", label: "Audio", icon: Mic, color: "var(--color-icon-audio)" },
  {
    id: "docs",
    label: "Documents",
    icon: FileText,
    color: "var(--color-icon-documents)",
  },
  {
    id: "pics",
    label: "Product Images",
    icon: ImageIcon,
    color: "var(--color-icon-images)",
  },
  {
    id: "vids",
    label: "Videos",
    icon: Video,
    color: "var(--color-icon-videos)",
  },
] as const;

const BENEFITS = [
  "Fast integration with any tech stack.",
  "Integrates with your CRM, website, or SaaS.",
  "All WhatsApp message types in one API",
];

export default function WhatsAppIntegrationSection() {
  return (
    <section className="bg-section-dark-secondary py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center text-white">
          <h2 className="max-w-4xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            Integrate WhatsApp Messaging into <br className="hidden md:block" />{" "}
            your own services, business or apps
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            Integrate WhatsApp into any CRM, ERP, or website with simple HTTP
            requests. Our tutorials help developers send texts, locations,
            media, and buttons for bots or customer support.
          </p>
        </div>

        <div className="mx-auto max-w-6xl relative">
          <div
            className="hidden lg:block absolute w-9/12 top-1/2 left-[20%] right-[40%] border-t-2 border-dotted border-white/30 z-0 -translate-y-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="flex flex-col items-center lg:items-start lg:w-1/3">
              <div className="lg:ml-26 lg:mt-36">
                <TabiGlassLogoMark size="cta" framed />
              </div>

              <div className="mt-12  lg:mt-6 flex flex-col items-center lg:items-start w-full">
                <ul className="space-y-4">
                  {BENEFITS.map((text) => (
                    <li key={text} className="flex items-center gap-3">
                      <CircleCheck
                        className="h-5 w-5 shrink-0 text-white/80"
                        strokeWidth={2.5}
                      />
                      <span className="text-base text-white/90">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 self-end">
                  <Button
                    asChild
                    variant="ghost"
                    className="group h-auto p-0 text-lg font-bold text-white hover:bg-transparent hover:text-white/80"
                  >
                    <Link
                      href={dashboardUrl("/register")}
                      className="flex items-center gap-3"
                    >
                      START FREE TRIAL
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Pillar: Feature Card */}
            <div className="w-full max-w-md lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
              <Card className="w-full border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl">
                <CardContent className="flex flex-col gap-3 p-6">
                  {FEATURES.map((item) => (
                    <FeatureToggleRow
                      key={item.id}
                      label={item.label}
                      Icon={item.icon}
                      bgColor={item.color}
                    />
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
