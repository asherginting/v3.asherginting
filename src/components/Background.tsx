"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const underline = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};

export default function Background() {
  return (
    <section
      id="background"
      className="px-6 sm:px-10 md:px-20 lg:px-25 py-16 sm:py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[140px_1fr] lg:grid-cols-[180px_1fr] gap-10 md:gap-14 lg:gap-20">
        <motion.h1
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm sm:text-base font-bold text-accent tracking-[0.2em] text-center md:text-left"
        >
          BACKGROUND
        </motion.h1>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-5 sm:gap-6 md:gap-7 text-sm sm:text-base font-light leading-relaxed"
        >
          <motion.p variants={item}>
            I’m a software engineer focused on building scalable web and mobile
            applications. Most recently, I worked at{" "}
            <motion.a
              href="https://www.banksinarmas.com/id/personal&lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block font-bold"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.span
                variants={underline}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-current"
              />
              <span className="relative">Bank Sinarmas</span>
            </motion.a>
            , where I developed secure, production-grade systems for lending and
            payment workflows, with a focus on reliability, performance, and
            usability in high-impact environments.
          </motion.p>
          <motion.p variants={item}>
            Previously, I collaborated with international teams across
            Singapore, Australia, and Indonesia at{" "}
            <motion.a
              href="https://xcidic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block font-bold"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.span
                variants={underline}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-current"
              />
              <span className="relative">Xcidic</span>
            </motion.a>
            , delivering web and mobile solutions in a fully remote,
            multi-timezone environment.
          </motion.p>
          <motion.p variants={item}>
            I hold a Bachelor’s degree in Computer Science from{" "}
            <motion.a
              href="https://www.upbatam.ac.id/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block font-bold"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.span
                variants={underline}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-current"
              />
              <span className="relative">Putera Batam University</span>
            </motion.a>
            , and later completed a Fullstack JavaScript Bootcamp at Fazztrack
            (now rebranded as{" "}
            <motion.a
              href="https://www.kodacademy.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block font-bold"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <motion.span
                variants={underline}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="absolute left-0 bottom-0 h-0.5 w-full origin-left bg-current"
              />
              <span className="relative">Koda Academy</span>
            </motion.a>
            ).
          </motion.p>
          <motion.p variants={item}>
            I’m particularly interested in building systems that feel simple on
            the surface but are well-structured underneath, with a strong focus
            on performance, clarity, and long-term maintainability. Currently,{" "}
            <span className="font-bold">I’m open to remote opportunities</span>{" "}
            where I can contribute to impactful products and continue growing as
            an engineer.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
