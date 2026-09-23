"use client";

import { motion } from "framer-motion";
import experiences from "@/data/experience.json";

type Role = {
  title: string;
  type?: string;
  period: string;
  location: string;
  workMode?: "Remote" | "On-site";
};

type Experience = {
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

export default function Experience() {
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
          EXPERIENCE
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10 md:gap-12"
        >
          {(experiences as Experience[]).map((exp) => (
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
              <div className="flex flex-col">
                {exp.roles.map((role, i) => {
                  const isMulti = exp.roles.length > 1;
                  const isLast = i === exp.roles.length - 1;
                  return (
                    <div
                      key={i}
                      className="
                        flex flex-row items-stretch
                        gap-3
                      "
                    >
                      {isMulti && (
                        <div className="flex flex-col items-center w-2 shrink-0">
                          <span className="h-2 w-2 rounded-full bg-accent shrink-0 mt-1.5" />
                          {!isLast && (
                            <span className="w-px flex-1 bg-(--color-foreground)/20 mt-1" />
                          )}
                        </div>
                      )}
                      <div className="flex flex-col flex-1">
                        <div
                          className="
                            flex flex-col gap-1.5
                            sm:flex-row sm:justify-between sm:items-start
                            sm:gap-4
                          "
                        >
                          <div className="min-w-0 sm:max-w-[70%]">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                              <p className="text-xs sm:text-sm text-(--color-foreground)">
                                {role.title}
                              </p>
                              {role.type && (
                                <span
                                  className="
                                    text-[10px]
                                    font-medium
                                    text-(--color-foreground)/60
                                    bg-(--color-foreground)/8
                                    rounded-full
                                    px-2 py-0.5
                                    leading-none
                                  "
                                >
                                  {role.type}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-(--color-foreground)/70 mt-1">
                              {role.location}
                              {role.workMode && (
                                <span className="ml-2 inline-flex items-center gap-1.5 whitespace-nowrap align-middle">
                                  <span className="h-1 w-1 rounded-full shrink-0 bg-(--color-foreground)/50" />
                                  {role.workMode}
                                </span>
                              )}
                            </p>
                          </div>
                          <div
                            className="
                              text-xs sm:text-sm
                              text-(--color-foreground)/70
                              whitespace-nowrap
                              sm:text-right
                            "
                          >
                            {role.period}
                          </div>
                        </div>
                        {!isLast && <div className="h-5" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
          <motion.div variants={item} className="pt-2">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                text-base
                font-bold
                text-(--color-foreground)
              "
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              animate="rest"
            >
              <span>View Resume</span>
              <motion.span
                variants={{
                  rest: { x: 0, scale: 1 },
                  hover: { x: 6, scale: 1.1 },
                }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-accent inline-block"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
