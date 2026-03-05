"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownLine } from "@remixicon/react";

const PROFILE_IMAGES = [
  "/profile/IMG_1.jpg",
  "/profile/IMG_1.jpg",
  "/profile/IMG_1.jpg",
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % PROFILE_IMAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brass/20 rounded-full blur-[100px] animate-glow pointer-events-none" />

      {/* Profile Image Carousel */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mb-8 rounded-full z-10 p-1 bg-gradient-to-br from-brass/50 to-transparent"
      >
        <div className="w-full h-full rounded-full overflow-hidden relative glass">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={PROFILE_IMAGES[currentImageIndex]}
                alt="Pankaj - Pencil Artist"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Text Reveal content */}
      <div className="text-center z-10 flex flex-col items-center px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight mb-4 text-gradient uppercase"
        >
          Pankaj
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-300 font-light tracking-widest mb-12 uppercase"
        >
          Pencil & Charcoal Realism Artist
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          onClick={scrollToNext}
          className="group relative px-8 py-4 bg-transparent border border-brass/50 rounded-full overflow-hidden transition-all duration-300 hover:border-brass hover:shadow-[0_0_30px_rgba(207,157,123,0.3)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brass/0 via-brass/10 to-brass/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          <span className="relative text-brass uppercase tracking-widest text-sm font-medium pr-2">
            View My Work
          </span>
        </motion.button>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-gray-500 text-xs uppercase tracking-widest mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <RiArrowDownLine className="text-brass/50 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
