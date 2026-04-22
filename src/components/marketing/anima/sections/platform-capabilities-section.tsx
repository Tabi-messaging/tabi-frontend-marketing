import { Phone, Webhook, Code, ShoppingCart, Smartphone, Image, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/marketing/anima/ui/card';

const capabilityRows = [
  [
    {
      title: 'Whatsapp number validation',
      description:
        'Check if phone numbers are registered on WhatsApp before sending messages-globally',
      icon: <Phone className="h-6 w-6 text-[#5e4cff]" />,
      multiLineTitle: false,
    },
    {
      title: 'Real-time webhooks',
      description:
        'Receive instant updates on message status, events, and user actions, enabling faster reactions and smarter automation.',
      icon: <Webhook className="h-6 w-6 text-[#5e4cff]" />,
      multiLineTitle: false,
    },
    {
      title: 'Low-code & no-code friendly',
      description:
        'Build and launch messaging workflows without heavy engineering effort, making it accessible for both developers and non-technical teams.',
      icon: <Code className="h-6 w-6 text-[#5e4cff]" />,
      multiLineTitle: false,
    },
  ],
  [
    {
      title: 'Orders & product automation',
      description:
        'Automate order flows, product inquiries, and purchase journeys directly within chats to streamline your business operations.',
      icon: <ShoppingCart className="h-6 w-6 text-[#5e4cff]" />,
      multiLineTitle: false,
    },
    {
      title: 'Multiple device connection',
      description:
        'Programmatically manage and publish status updates to keep your audience informed and engaged.',
      icon: <Smartphone className="h-6 w-6 text-[#5e4cff]" />,
      multiLineTitle: false,
    },
    {
      title: 'All media & message types',
      description:
        'Support for text, images, videos, documents, and more, so you can communicate in the most effective format every time.',
      icon: <Image className="h-6 w-6 text-[#5e4cff]" />,
      multiLineTitle: false,
    },
  ],
  [
    {
      title: 'WhatsApp channels, groups & communities',
      description:
        'Programmatically post and manage WhatsApp status, channels, communities & groups updates to engage your audience passively.',
      icon: <Users className="h-6 w-6 text-[#5e4cff]" />,
      multiLineTitle: true,
    },
    {
      title: 'No templates or approvals',
      description:
        'Send messages freely without pre-approved templates or platform restrictions, giving you full control over your communication.',
      icon: <Code className="h-6 w-6 text-[#5e4cff]" />,
      multiLineTitle: false,
    },
  ],
];

export function PlatformCapabilitiesSection(): React.JSX.Element {
  return (
    <section className="flex w-full flex-col items-start gap-[19px]">
      {capabilityRows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex w-full flex-col items-stretch gap-[25px] lg:flex-row">
          {row.map((card, cardIndex) => (
            <Card
              key={`card-${rowIndex}-${cardIndex}`}
              className="min-h-[291px] flex-1 overflow-hidden rounded-[30px] border-0 bg-[#f7f7f7] shadow-none"
            >
              <CardContent className="relative h-full min-h-[291px] p-0">
                <div className="absolute left-[21px] top-[29px] flex h-10 w-10 items-center justify-center rounded-[10px] bg-white shadow-sm">
                  {card.icon}
                </div>
                <div
                  className={`absolute left-[21px] text-2xl font-medium leading-normal tracking-normal text-black [font-family:'Mundial_Narrow-Medium',Helvetica] ${
                    card.multiLineTitle ? 'top-[94px] h-[46px]' : 'top-[96px] flex h-[23px] items-center whitespace-nowrap'
                  }`}
                >
                  {card.title}
                </div>
                <div className="absolute left-5 right-5 top-[165px] text-base font-normal leading-[26px] tracking-normal text-black [font-family:'Mundial_Narrow-Regular',Helvetica]">
                  {card.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </section>
  );
}
