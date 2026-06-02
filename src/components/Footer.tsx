"use client";

import { motion } from "framer-motion";
import footer from "@/data/footer.json";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center md:items-center text-center md:text-left gap-7 md:gap-6 pt-12 md:pt-20 pb-12 px-6 sm:px-10 md:px-25">
      <div className="text-[13px] md:text-[14px] font-bold text-(--color-foreground) leading-normal">
        Built by AAG
        <br />© {year}
      </div>
      <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-7">
        {footer.social.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative inline-block
              font-bold
              text-[11px] md:text-[14px]
              tracking-[0.15em]
              text-accent
            "
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {s.label}
            <motion.span
              variants={{
                rest: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute left-0 -bottom-1
                h-px w-full
                bg-current
                origin-left
              "
            />
          </motion.a>
        ))}
      </div>
    </footer>
  );
}
