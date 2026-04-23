"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setShow(scrollPercent > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0 }}
      animate={show ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: show ? "auto" : "none" }}
      className="
        fixed bottom-6 right-6
        w-10 h-10
        rounded-full
        border border-(--color-foreground)/20
        bg-background/70
        backdrop-blur-sm
        flex items-center justify-center
        text-lg
        text-(--color-foreground)
        transition
        hover:scale-105
        z-50
        will-change-transform
        transform-gpu
        touch-manipulation
        cursor-default md:cursor-pointer
      "
    >
      ☝
    </motion.button>
  );
}
