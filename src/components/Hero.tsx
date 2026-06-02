"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        min-h-dvh
        flex flex-col justify-center
        px-6 sm:px-10 md:px-25
        py-16 sm:py-20 md:py-30
      "
    >
      <p className="my-4 sm:my-5 md:my-6 text-2xl sm:text-3xl md:text-[36px] font-light">
        Hi!
        <motion.span
          className="inline-block origin-bottom-right select-none ml-2"
          animate={{ rotate: [0, 15, -10, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        >
          👋
        </motion.span>
      </p>
      <h1
        className="
          my-4 sm:my-5 md:my-6
          max-w-md sm:max-w-xl md:max-w-180
          text-2xl sm:text-3xl md:text-[36px]
          font-light leading-relaxed md:leading-normal
        "
      >
        I&apos;m <span className="font-bold">Asher Azriel Ginting</span>, a
        software engineer focused on building scalable products with a strong
        emphasis on performance, usability, and clean user experiences{" "}
        <span className="select-none pointer-events-none" aria-hidden="true">
          👨‍💻
        </span>
      </h1>
      <div className="my-4 sm:my-5 text-base sm:text-lg md:text-[20px] font-normal flex items-center gap-1.5">
        <span>Get in touch</span>
        <span className="select-none pointer-events-none" aria-hidden="true">
          👉
        </span>
        <motion.a
          href="mailto:asherginting3@gmail.com"
          className="relative inline-block px-2"
          initial="rest"
          whileHover="hover"
          whileTap="hover"
          animate="rest"
        >
          <motion.span
            variants={{
              rest: { scaleY: 0 },
              hover: { scaleY: 1 },
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 origin-bottom bg-(--color-accent) z-0"
          />
          <motion.span
            variants={{
              rest: {
                color: "var(--color-text-primary)",
              },
              hover: {
                color: "#ffffff",
              },
            }}
            transition={{ duration: 0.2 }}
            className="
              relative z-10
              underline
              decoration-underline
              decoration-2
              underline-offset-6
            "
          >
            asherginting3@gmail.com
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
