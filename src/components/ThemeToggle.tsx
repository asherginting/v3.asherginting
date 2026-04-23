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
    <div className="absolute top-6 right-6 z-50 flex items-center">
      <SunIcon className="w-4.5 text-primary" />
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="relative mx-3 h-6 w-11 rounded-full transition-colors duration-300 cursor-pointer focus:outline-none"
      >
        <span
          className={`absolute inset-0 rounded-full ${
            isDark ? "bg-toggle-on" : "bg-toggle-off"
          }`}
        />
        <span
          className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform duration-300 ${
            isDark ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      <MoonIcon className="w-4.5 text-primary" />
    </div>
  );
}
