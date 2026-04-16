import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const apercu = localFont({
  src: [
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
  title: "Personal Portfolio",
  description: "Personal Portfolio by Asher Azriel Ginting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={apercu.variable}>
      <body>{children}</body>
    </html>
  );
}
