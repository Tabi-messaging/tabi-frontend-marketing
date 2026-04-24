"use client";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dashboardUrl } from "@/lib/app-urls";
import ChatCodeIcon from "@/components/ui/icons/ChatCodeIcon";
import ChecklistIcon from "@/components/ui/icons/CheckListIcon";
import ClockIcon from "@/components/ui/icons/ClockIcon";

import DeliverySendingIcon from "@/components/ui/icons/DeliverySendingIcon";
import MultipleDevicesIcon from "@/components/ui/icons/MultipleDevicesIcon";
import WhatsAppIcon from "@/components/ui/icons/WhatsAppIcon";
import MessageCheckIcon from "@/components/ui/icons/MessageCheckIcon";
import ReelsIcon from "@/components/ui/icons/ReelsIcon";

const CAPABILITIES = [
  {
    title: "WhatsApp number validation",
    description:
      "Check if phone numbers are registered on WhatsApp before sending messages globally.",
    icon: <MessageCheckIcon className="h-6 w-6 mb-3" />,
  },
  {
    title: "Real-time webhooks",
    description:
      "Receive instant updates on message status, events, and user actions for smarter automation.",
    icon: <ClockIcon className="h-6 w-6 mb-3" />,
  },
  {
    title: "Low-code & no-code friendly",
    description:
      "Build messaging workflows without heavy engineering effort, accessible for all teams.",
    icon: <ChatCodeIcon className="h-6 w-6 mb-3" fill="black" stroke="white" />,
  },
  {
    title: "Orders & product automation",
    description:
      "Automate order flows and product inquiries directly within chats to streamline operations.",
    icon: <DeliverySendingIcon className="h-6 w-6 mb-3" />,
  },
  {
    title: "Multiple device connection",
    description:
      "Programmatically manage and publish status updates to keep your audience engaged.",
    icon: <MultipleDevicesIcon className="h-6 w-6 mb-3" />,
  },
  {
    title: "All media & message types",
    description:
      "Support for text, images, videos, and documents to communicate effectively every time.",
    icon: <ReelsIcon className="h-6 w-6 mb-3" />,
  },
  {
    title: "WhatsApp channels, groups & communities",
    description:
      "Programmatically post and manage WhatsApp status, channels, and groups updates.",
    icon: <WhatsAppIcon className="h-6 w-6 mb-3" />,
  },
  {
    title: "No templates or approvals",
    description:
      "Send messages freely without pre-approved templates or platform restrictions.",
    icon: <ChecklistIcon className="h-6 w-6 mb-3" />,
  },
];

export function PlatformCapabilitiesSection(): React.JSX.Element {
  return (
    <section id="capabilities" className="w-full bg-white mx-auto max-w-7xl py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-8 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Everything you need to build on WhatsApp
          </h2>
          <Button
            className="h-auto rounded-full bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--color-button-purple-hover)] hover:shadow-indigo-300"
            asChild
          >
            <Link href={dashboardUrl("/register")} prefetch={false}>
              Get started in Minutes
            </Link>
          </Button>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item) => (
            <div key={item.title} className="h-full">
              <Card className="group flex h-full flex-col rounded-4xl border-0 shadow-none transition-all" style={{ backgroundColor: "var(--color-ui-light-card)" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--color-ui-light-card-hover)"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--color-ui-light-card)"}>
                <CardContent className="flex flex-1 flex-col p-8">
                  <span> {item.icon}</span>

                  <h3 className="mb-3 text-xl font-medium tracking-tight text-slate-900 md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="flex-1 text-base leading-relaxed text-slate-600 my-7">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
