"use client";

import { useState, useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import {
  RiHome4Line,
  RiHome4Fill,
  RiUser3Line,
  RiUser3Fill,
  RiGalleryLine,
  RiGalleryFill,
  RiMailLine,
  RiMailFill,
} from "@remixicon/react";

const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: RiHome4Line,
    activeIcon: RiHome4Fill,
  },
  {
    label: "About",
    href: "#about",
    icon: RiUser3Line,
    activeIcon: RiUser3Fill,
  },
  {
    label: "Gallery",
    href: "#gallery",
    icon: RiGalleryLine,
    activeIcon: RiGalleryFill,
  },
  {
    label: "Contacts",
    href: "#contact",
    icon: RiMailLine,
    activeIcon: RiMailFill,
  },
];

export default function BubbleNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "about", "gallery", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-10% 0px -10% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-full glass shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        style={{ borderColor: "var(--theme-border)" }}
      >
        <LayoutGroup>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            const Icon = isActive ? item.activeIcon : item.icon;

            return (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full outline-none transition-colors duration-300"
              >
                {/* Active bubble background */}
                {isActive && (
                  <motion.div
                    layoutId="nav-bubble"
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: "rgba(133, 120, 97, 0.25)",
                      border: "1px solid rgba(133, 120, 97, 0.4)",
                      boxShadow: "0 0 12px rgba(133, 120, 97, 0.15)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 28,
                    }}
                  />
                )}

                <motion.div
                  className="relative z-10"
                  animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  <Icon
                    size={22}
                    style={{
                      color: isActive ? "#857861" : "var(--theme-text-muted)",
                    }}
                    className="transition-colors duration-200 group-hover:brightness-125"
                  />
                </motion.div>

                {/* Label - only shown when active */}
                <motion.span
                  className="relative z-10 text-sm font-medium tracking-wider uppercase overflow-hidden whitespace-nowrap"
                  initial={false}
                  animate={
                    isActive
                      ? { width: "auto", opacity: 1, marginLeft: 2 }
                      : { width: 0, opacity: 0, marginLeft: 0 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 28,
                  }}
                  style={{
                    color: isActive ? "#857861" : "var(--theme-text-muted)",
                  }}
                >
                  {item.label}
                </motion.span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>
    </motion.nav>
  );
}
