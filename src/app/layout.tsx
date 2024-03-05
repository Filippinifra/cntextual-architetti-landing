import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cntextual",
  description: "Quello che fa per voi e i vostri progetti",
  openGraph: {
    type: "website",
    url: "https://www.cntextual.it",
    title: "cntextual",
    description: "Quello che fa per voi e i vostri progetti",
    siteName: "cntextual",
    images: [
      {
        url: "https://www.cntextual.it/android-chrome-256x256.png",
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
        <body className={inter.className} style={{ height: "100%" }}>
          {children}
        </body>
      </html>
    </>
  );
}
