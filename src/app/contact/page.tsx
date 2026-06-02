import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Asher Azriel Ginting",
  alternates: {
    canonical: "https://asherginting.dev/contact",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  return <Contact />;
}
