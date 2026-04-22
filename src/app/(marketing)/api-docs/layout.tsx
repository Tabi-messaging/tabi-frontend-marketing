import type { Metadata } from 'next';
import { APP_DISPLAY_NAME } from '@/lib/branding';

export const metadata: Metadata = {
  title: `API documentation | ${APP_DISPLAY_NAME}`,
  description: `Public HTTP API reference for ${APP_DISPLAY_NAME} — authentication, channels, inbox, webhooks, and integrations.`,
};

export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
