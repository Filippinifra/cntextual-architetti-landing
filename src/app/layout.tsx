import type { Metadata } from "next";
import Head from "next/head";
import { helveticaNowText } from "@/fonts/helveticaNowText";
import "./globals.css";

export const metadata: Metadata = {
  title: "cntextual",
  description: "cntextual architetti",
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
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <html lang="it" style={{ height: "100%" }}>
        <body className={helveticaNowText.className} style={{ height: "100%" }}>
          {children}
        </body>
      </html>
    </>
  );
}
