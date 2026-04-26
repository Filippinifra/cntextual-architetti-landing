import type { Metadata, Viewport } from "next";
import { helveticaNowText } from "@/fonts/helveticaNowText";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cntextual.it"),
  title: "cntextual",
  description: "cntextual architetti",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ffffff",
      },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
  },
  openGraph: {
    type: "website",
    url: "https://www.cntextual.it",
    title: "cntextual",
    description: "cntextual architetti",
    siteName: "cntextual",
    images: [
      {
        url: "https://www.cntextual.it/og-photo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${helveticaNowText.className} ${helveticaNowText.variable}`}
      style={{ height: "100%" }}
    >
      <body style={{ height: "100%" }}>{children}</body>
    </html>
  );
}
