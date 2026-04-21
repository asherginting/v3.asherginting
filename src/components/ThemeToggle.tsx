"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@/icons";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center select-none"
    >
      <SunIcon className="w-4.5 text-primary" />
      <span
        className={`relative mx-3 h-6 w-11 rounded-full transition-colors duration-300 ${
          isDark ? "bg-toggle-on" : "bg-toggle-off"
        }`}
      >
        <span
          className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ${
            isDark ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
      <MoonIcon className="w-4.5 text-primary" />
    </button>
  );
}
