"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiSunLine, RiMoonLine } from "@remixicon/react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync state with actual html class on mount
    setIsDark(!document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] md:top-5 md:right-5 md:bottom-auto z-50 w-11 h-11 rounded-full glass flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(133,120,97,0.45)] hover:scale-110"
      style={{ borderColor: "var(--theme-border)" }}
    >
      <motion.div
        key={isDark ? "moon" : "sun"}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <RiSunLine size={18} className="text-brass" />
        ) : (
          <RiMoonLine size={18} className="text-brass" />
        )}
      </motion.div>
    </motion.button>
  );
}
