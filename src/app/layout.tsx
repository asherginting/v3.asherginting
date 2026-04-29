import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const apercu = localFont({
  src: [
    {
      path: "../fonts/apercu_light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/apercu_regular_pro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/apercu_medium_pro.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/apercu_bold_pro.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-apercu",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.asherginting.dev"),
  title: {
    default: "Asher Azriel Ginting - Software Engineer",
    template: "%s | Asher Ginting",
  },
  description:
    "Asher Azriel Ginting is a software engineer specializing in scalable web and mobile applications, performance, and clean user experiences.",
  keywords: [
    "Asher Ginting",
    "Asher Azriel Ginting",
    "Software Engineer Indonesia",
    "Frontend Engineer",
    "Next.js Developer",
  ],
  authors: [{ name: "Asher Azriel Ginting" }],
  creator: "Asher Azriel Ginting",
  applicationName: "Asher Ginting Portfolio",
  alternates: {
    canonical: "https://www.asherginting.dev",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Asher Azriel Ginting",
    description:
      "Software engineer building scalable web & mobile applications.",
    url: "https://www.asherginting.dev",
    siteName: "Asher Ginting Portfolio",
    images: [
      {
        url: "https://www.asherginting.dev/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asher Azriel Ginting",
    description: "Software engineer building scalable products.",
    images: ["https://www.asherginting.dev/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={apercu.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Asher Azriel Ginting",
              url: "https://www.asherginting.dev",
              sameAs: [
                "https://github.com/asherginting",
                "https://www.linkedin.com/in/asherginting",
              ],
              jobTitle: "Software Engineer",
              description:
                "Software engineer focused on scalable web and mobile applications.",
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
