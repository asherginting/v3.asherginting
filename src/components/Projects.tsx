"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/data/projects.json";

type Project = {
  title: string;
  description: string;
  problem: string;
  tech: string[];
  image: string;
  live?: string;
  repo?: string;
  note?: string;
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageAnim = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 sm:px-10 md:px-20 lg:px-25 py-16 sm:py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] gap-10 md:gap-14 lg:gap-20">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base font-bold text-accent tracking-[0.2em] text-center"
        >
          PROJECTS
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-24"
        >
          {(projects as Project[]).map((project, i) => {
            const isReverse = i % 2 !== 0;

            return (
              <motion.div
                key={project.title}
                variants={item}
                className={`
                  flex flex-col md:flex-row gap-10 md:gap-14 items-center
                  ${isReverse ? "md:flex-row-reverse" : ""}
                `}
              >
                <div className="w-full md:w-1/2">
                  <motion.div
                    variants={imageAnim}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="
                        rounded-xl
                        border border-black/5 dark:border-white/10
                        shadow-sm
                      "
                      priority={i === 0}
                    />
                  </motion.div>
                </div>
                <motion.div
                  variants={textContainer}
                  className="w-full md:w-1/2 flex flex-col gap-4"
                >
                  <motion.h3
                    variants={textItem}
                    className="text-base sm:text-base font-semibold text-(--color-foreground)"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    variants={textItem}
                    className="text-sm text-(--color-foreground)/70 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  <motion.p
                    variants={textItem}
                    className="text-sm text-(--color-foreground)/70 leading-relaxed"
                  >
                    {project.problem}
                  </motion.p>
                  <motion.div
                    variants={textItem}
                    className="flex flex-wrap gap-2 mt-2"
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-2 py-1 text-xs
                          border border-(--color-foreground)/20
                          rounded-md
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    variants={textItem}
                    className="flex items-center gap-5 mt-4"
                  >
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block font-semibold text-(--color-foreground)"
                        initial="rest"
                        whileHover="hover"
                        whileTap="hover"
                        animate="rest"
                      >
                        Live
                        <motion.span
                          variants={{
                            rest: { scaleX: 0 },
                            hover: { scaleX: 1 },
                          }}
                          transition={{ duration: 0.25 }}
                          className="absolute left-0 -bottom-1 h-px w-full bg-current origin-left"
                        />
                      </motion.a>
                    )}
                    {project.repo && (
                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block font-semibold text-(--color-foreground)"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                      >
                        Repository
                        <motion.span
                          variants={{
                            rest: { scaleX: 0 },
                            hover: { scaleX: 1 },
                          }}
                          transition={{ duration: 0.25 }}
                          className="absolute left-0 -bottom-1 h-px w-full bg-current origin-left"
                        />
                      </motion.a>
                    )}
                  </motion.div>
                  {project.note && (
                    <motion.p
                      variants={textItem}
                      className="text-sm text-(--color-foreground)/70 mt-2 leading-relaxed"
                    >
                      {project.note}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
