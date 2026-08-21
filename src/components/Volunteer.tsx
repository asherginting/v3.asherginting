"use client";

import { motion } from "framer-motion";
import volunteer from "@/data/volunteer.json";

type Role = {
  title: string;
  period: string;
  location: string;
};

type Volunteer = {
  company: string;
  url?: string;
  roles: Role[];
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Volunteer() {
  return (
    <section
      id="experience"
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
          VOLUNTEER
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10 md:gap-12"
        >
          {(volunteer as Volunteer[]).map((exp) => (
            <motion.div key={exp.company} variants={item}>
              {exp.url ? (
                <motion.a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    relative inline-block
                    text-sm md:text-base
                    font-semibold
                    text-(--color-foreground)
                    mb-2
                  "
                  initial="rest"
                  whileHover="hover"
                  whileTap="hover"
                  animate="rest"
                >
                  {exp.company}
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
              ) : (
                <h3
                  className="
                    text-sm md:text-base
                    font-semibold
                    text-(--color-foreground)
                    mb-2
                  "
                >
                  {exp.company}
                </h3>
              )}
              <div className="flex flex-col gap-5">
                {exp.roles.map((role, i) => (
                  <div
                    key={i}
                    className="
                      flex flex-row justify-between items-start
                      gap-4
                    "
                  >
                    <div className="max-w-[70%]">
                      <p className="text-xs sm:text-sm text-(--color-foreground)">
                        {role.title}
                      </p>
                      <p className="text-xs text-(--color-foreground)/70 mt-1">
                        {role.location}
                      </p>
                    </div>
                    <div
                      className="
                        text-xs sm:text-sm
                        text-(--color-foreground)/70
                        whitespace-nowrap
                        text-right
                      "
                    >
                      {role.period}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
