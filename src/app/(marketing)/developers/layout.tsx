import type { Metadata } from 'next';
import { APP_DISPLAY_NAME } from '@/lib/branding';

export const metadata: Metadata = {
  title: `Developers | ${APP_DISPLAY_NAME}`,
  description: `Integrate ${APP_DISPLAY_NAME}: REST API, webhooks, authentication, and links to interactive documentation.`,
};

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
