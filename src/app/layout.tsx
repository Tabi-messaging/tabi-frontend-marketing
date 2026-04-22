import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { APP_DISPLAY_NAME, APP_TAGLINE } from '@/lib/branding';

export const metadata: Metadata = {
  title: `${APP_DISPLAY_NAME} — ${APP_TAGLINE}`,
  description: `Automate your WhatsApp business communications with ${APP_DISPLAY_NAME}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
