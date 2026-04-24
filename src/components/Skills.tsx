"use client";

import { motion } from "framer-motion";
import SKILLS from "@/data/skills.json";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        px-6 sm:px-10 md:px-20 lg:px-25
        py-16 sm:py-20 md:py-28
      "
    >
      <div
        className="
          max-w-5xl mx-auto
          grid grid-cols-1
          md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr]
          gap-10 md:gap-14 lg:gap-20
        "
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="
            text-sm sm:text-base
            font-bold text-accent
            tracking-[0.2em]
            text-center
          "
        >
          SKILLS
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid
            grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10
          "
        >
          {SKILLS.map((group) => (
            <motion.div key={group.title} variants={item}>
              <h3
                className="
                  text-xs sm:text-sm
                  font-semibold
                  text-(--color-foreground)
                  mb-3
                  tracking-wide
                "
              >
                {group.title}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {group.items.map((it) => (
                  <li
                    key={it}
                    className="
                      text-xs sm:text-sm
                      // text-(--color-foreground)/70
                      leading-relaxed
                    "
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
