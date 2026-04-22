'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/marketing/anima/ui/accordion';

const faqData = [
  {
    id: 'item-1',
    question: 'What is Tabi?',
    answer:
      'Tabi is a WhatsApp business messaging platform: shared inbox, automations, campaigns, AI helpers, and a full HTTP API so your team and your product can send and receive messages at scale.',
  },
  {
    id: 'item-2',
    question: 'Do I need WhatsApp Business API approval to start?',
    answer:
      'You can explore the product and integrate using our guides immediately. Production messaging follows WhatsApp and provider rules; we help you connect numbers and stay compliant as you scale.',
  },
  {
    id: 'item-3',
    question: 'Can my developers integrate with our CRM or ERP?',
    answer:
      'Yes. Use webhooks for real-time events, REST endpoints for sends and contacts, and official SDKs where you want typed clients. Many teams connect CRMs, billing stacks, and internal tools.',
  },
  {
    id: 'item-4',
    question: 'How does billing work?',
    answer:
      'Plans are billed on a subscription basis with local payment options where supported. You can start on a trial or entry tier and upgrade as channels, seats, or API usage grow.',
  },
  {
    id: 'item-5',
    question: 'How many languages does the API support?',
    answer:
      'Message content is UTF-8: you can send and receive text in the languages your customers use. Dashboard and docs are primarily English today.',
  },
  {
    id: 'item-6',
    question: 'What AI features do you offer?',
    answer:
      'Workspace-configurable AI can assist with drafts, summaries, and workflow steps depending on your plan. Exact capabilities are shown in-product and in the API reference.',
  },
];

export function FaqAccordionSection(): React.JSX.Element {
  return (
    <section id="faq" className="flex w-full flex-col bg-[#200f53] py-12 sm:py-16 md:py-[88px]">
      <h2 className="max-w-[min(100%,42rem)] self-center px-4 text-center text-[1.75rem] font-semibold leading-tight tracking-normal text-white sm:text-4xl md:text-5xl [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
        Frequently Asked Questions
      </h2>
      <p className="mt-5 max-w-2xl self-center px-4 text-center text-base font-normal leading-relaxed tracking-normal text-white/95 sm:text-lg sm:leading-[26px] md:text-xl [font-family:'Mundial_Narrow-Regular',Helvetica]">
        Straight answers about getting started, APIs, and billing.
      </p>
      <div className="mt-[55px] w-full max-w-[873px] self-center px-4">
        <Accordion type="single" defaultValue="item-1" collapsible className="flex flex-col gap-[13px]">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="overflow-hidden rounded-[15px] border-none bg-[#372765] px-[26px]"
            >
              <AccordionTrigger className="py-[22px] text-xl font-semibold leading-[26px] tracking-normal text-white hover:no-underline [font-family:'Mundial_Narrow-SemiBold',Helvetica]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-[22px] text-base text-white/90 [font-family:'Mundial_Narrow-Regular',Helvetica]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
