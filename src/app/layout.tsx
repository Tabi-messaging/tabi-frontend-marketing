import type { Metadata } from "next";
import { APP_DISPLAY_NAME, APP_TAGLINE } from "@/lib/branding";

import localFont from "next/font/local";

import "@/styles/globals.css";

const mundialNarrowFont = localFont({
  src: [
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-Thin-BF67624ba5ab00e.otf",
      weight: "100",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-ExtraLight-BF67624ba5a79c4.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-Light-BF67624ba5a4e5e.otf",
      weight: "300",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-Regular-BF67624ba586d07.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-Medium-BF67624ba5a687e.otf",
      weight: "500",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-SemiBold-BF67624ba5a98c1.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-Bold-BF67624ba588290.otf",
      weight: "700",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-ExtraBold-BF67624ba569d13.otf",
      weight: "800",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-Black-BF67624ba5a4e5e.otf",
      weight: "900",
    },
    {
      path: "../../public/fonts/mundial-narrow-font-family/MundialNarrow-ExtraBlack-BF67624ba541867.otf",
      weight: "950",
    },
  ],
  variable: "--font-mundial",
});

export const metadata: Metadata = {
  title: `${APP_DISPLAY_NAME} — ${APP_TAGLINE}`,
  description: `Automate your WhatsApp business communications with ${APP_DISPLAY_NAME}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`text-black ${mundialNarrowFont.variable} font-mundial`}
      >
        {children}
      </body>
    </html>
  );
}
