"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/utils/cn";
import SupportIcon from "@/components/ui/icons/SupportIcon";
import MultipleUsersIcon from "@/components/ui/icons/MultipleUsersIcon";
import ChatCodeIcon from "@/components/ui/icons/ChatCodeIcon";
import FilmIcon from "@/components/ui/icons/FilmIcon";
import PenMessageIcon from "@/components/ui/icons/PenMessageIcon";

type MessagingCard = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
};

const CARDS: MessagingCard[] = [
  {
    id: "stable-api",
    title: "Stable Multi-Device API",
    icon: <ChatCodeIcon />,
    description:
      "Connect and manage messaging across multiple devices with a reliable API.",
  },
  {
    id: "engagement-1",
    title: "Group Statuses, Channels",
    icon: <MultipleUsersIcon />,
    description:
      "Engage your audience in more dynamic ways by supporting group messaging, broadcast statuses, and channel-based communication.",
  },
  {
    id: "media",
    title: "All Media, Interactive Messages",
    icon: <FilmIcon />,
    description:
      "Send images, documents, audio, and video with the same reliability as text.",
  },
  {
    id: "dev-help",
    title: "Fast & Help Development",
    icon: <SupportIcon />,
    description:
      "Orchestrate campaigns and follow-ups that feel personal at scale.",
  },
  {
    id: "no-message",
    title: "No Per-Message Charges and No Approval",
    icon: <PenMessageIcon />,
    description:
      "Own your stack: APIs, webhooks, and exports without vendor lock-in.",
  },
];

export function WhatsAppApi(): React.JSX.Element {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="w-full py-16 mx-auto max-w-7xl px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-semibold mb-1">
          WhatsApp without limit
        </h2>
        <p className="text-base md:text-xl">
          Start building with WhatsApp API in seconds
        </p>
      </div>

      <div className="relative">
        <div className="no-scrollbar flex w-full gap-4 overflow-x-auto pb-8 pt-2 outline-none">
          {CARDS.map((card, index) => {
            const expanded = activeIndex === index;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative h-105 shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ease-in-out",
                  expanded
                    ? "w-75 md:w-120 bg-section-light-accent"
                    : "w-35 md:w-45 bg-ui-light-card",
                )}
              >
                {expanded ? (
                  <div className="flex h-full flex-col p-6 animate-in fade-in duration-700">
                    <div className="flex items-start justify-between ">
                      <h3 className="text-xl font-semibold  text-black max-w-[70%]">
                        {card.title}
                      </h3>
                      <span className="flex h-7 w-7 text-black">
                        {card.icon}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <p className="text-base leading-relaxed text-gray-800">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col p-5">
                    <h3 className="text-xl font-semibold leading-tight text-black line-clamp-1">
                      {card.title}
                    </h3>
                    <div className="mt-auto flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
                      <Plus className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Indicator Track */}
        <div className="h-0.5 w-full bg-gray-200 relative">
          <div
            className="absolute h-full bg-primary transition-all duration-500 ease-out"
            style={{
              width: `${100 / CARDS.length}%`,
              left: `${(activeIndex * 100) / CARDS.length}%`,
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
