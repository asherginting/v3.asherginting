"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import CONTACT from "@/data/contact.json";
import {
  EmailIcon,
  WhatsappIcon,
  LinkedinIcon,
  GithubIcon,
  DocumentIcon,
  CodeIcon,
} from "@/icons";

const ICONS = {
  email: EmailIcon,
  whatsapp: WhatsappIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  document: DocumentIcon,
  code: CodeIcon,
} as const;

type IconKey = keyof typeof ICONS;

type ContactLink = {
  label: string;
  href: string;
  external: boolean;
  icon: IconKey;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-dvh flex flex-col">
      <ThemeToggle />
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full max-w-105 flex flex-col"
        >
          <motion.div
            variants={item}
            className="flex flex-col items-center text-center mb-10 md:mb-12"
          >
            <div
              className="
                relative mb-6 w-25 h-25
                rounded-full overflow-hidden
                ring-1 ring-(--color-foreground)/15
                shadow-sm
              "
            >
              <Image
                src="/profile.jpg"
                alt="Asher Azriel Ginting"
                fill
                sizes="100px"
                priority
                className="object-cover"
              />
            </div>
            <h1 className="text-xl sm:text-[22px] font-bold leading-tight mb-2">
              Asher Azriel Ginting
            </h1>
            <p className="text-sm text-(--color-foreground)/70 font-light">
              Software Engineer
            </p>
          </motion.div>
          <motion.h2
            variants={item}
            className="
              text-xs sm:text-sm
              font-bold text-accent
              tracking-[0.2em]
              text-center
              mb-6
            "
          >
            LET&apos;S CONNECT
          </motion.h2>
          <div className="flex flex-col gap-3">
            {(CONTACT as ContactLink[]).map((link) => (
              <motion.div key={link.label} variants={item}>
                <ContactButton {...link} />
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={item}
            className="
              mt-6 text-[13px] md:text-[14px] font-bold text-(--color-foreground) leading-normal text-center
            "
          >
            Built by AAG
            <br />© {year}
          </motion.p>
        </motion.div>
      </main>
    </div>
  );
}

function ContactButton({ label, href, external, icon }: ContactLink) {
  const Icon = ICONS[icon];
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial="rest"
      whileHover="hover"
      whileTap="hover"
      animate="rest"
      className="
        relative overflow-hidden
        block
        border border-(--color-foreground)/20
        rounded-md
      "
    >
      <motion.span
        aria-hidden="true"
        variants={{
          rest: { scaleY: 0 },
          hover: { scaleY: 1 },
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 origin-bottom bg-(--color-accent) z-0"
      />
      <motion.span
        variants={{
          rest: { color: "var(--color-text-primary)" },
          hover: { color: "#ffffff" },
        }}
        transition={{ duration: 0.2 }}
        className="
          relative z-10
          flex items-center gap-3
          px-4 py-3.5
        "
      >
        <span className="shrink-0">
          <Icon className="w-5 h-5" />
        </span>
        <span className="flex-1 text-sm font-semibold">{label}</span>
        <motion.span
          aria-hidden="true"
          variants={{
            rest: { x: 0 },
            hover: { x: 4 },
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-base leading-none"
        >
          →
        </motion.span>
      </motion.span>
    </motion.a>
  );
}
