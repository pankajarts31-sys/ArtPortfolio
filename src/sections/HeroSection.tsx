"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RiArrowDownLine } from "@remixicon/react";

const NAME_LETTERS = "PANKAJ".split("");

const RUNNING_LINES = [
  "Pencil • Charcoal • Realism • Portrait • Drawing • ",
  "Art • Shadow • Hyperrealism • Detail • Studio • ",
  "Sketch • Texture • Light • Expression • Canvas • ",
  "Fine Art • Graphite • Depth • Emotion • Vision • ",
  "Portrait • Shading • Realism • Pencil • Craft • ",
  "Charcoal • Detail • Shadow • Artist • Creation • ",
  "Hyperrealism • Drawing • Studio • Canvas • Art • ",
  "Expression • Texture • Light • Sketch • Portrait • ",
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Alternate directions per line
  const x0 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const x4 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x5 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const x6 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x7 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const xValues = [x0, x1, x2, x3, x4, x5, x6, x7];

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* ===== Running Lines Background ===== */}
      <div className="absolute inset-0 z-0 opacity-[0.09] pointer-events-none overflow-hidden flex flex-col justify-center -rotate-6 scale-125">
        {RUNNING_LINES.map((text, i) => (
          <motion.div
            key={i}
            style={{ x: xValues[i], WebkitTextStroke: "2px #857861" }}
            className="whitespace-nowrap font-serif text-[6rem] md:text-[9rem] leading-none mb-4 font-bold uppercase text-transparent"
          >
            {text.repeat(4)}
          </motion.div>
        ))}
      </div>

      {/* ===== Other Animated Background Elements ===== */}

      {/* Central glow - breathing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brass/15 rounded-full blur-[120px] animate-glow pointer-events-none" />

      {/* Orbiting dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none">
        <div className="absolute inset-0 animate-orbit">
          <div className="w-2 h-2 rounded-full bg-brass/40 blur-[2px]" />
        </div>
        <div className="absolute inset-0 animate-orbit" style={{ animationDelay: "-7s", animationDuration: "25s" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-white/20 blur-[1px]" />
        </div>
        <div className="absolute inset-0 animate-orbit" style={{ animationDelay: "-14s", animationDuration: "30s" }}>
          <div className="w-1 h-1 rounded-full bg-brass/30 blur-[1px]" />
        </div>
      </div>

      {/* Floating blurred shapes */}
      <div className="absolute top-[15%] left-[10%] w-32 h-32 md:w-48 md:h-48 bg-brass/8 rounded-full blur-[80px] animate-drift pointer-events-none" />
      <div className="absolute bottom-[20%] right-[8%] w-40 h-40 md:w-56 md:h-56 bg-coffee/10 rounded-full blur-[90px] animate-drift pointer-events-none" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-[60%] left-[65%] w-24 h-24 md:w-36 md:h-36 bg-brass/6 rounded-full blur-[70px] animate-drift pointer-events-none" style={{ animationDelay: "-5s" }} />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(133,120,97,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(133,120,97,0.3) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, var(--theme-vignette) 80%)" }} />

      {/* ===== Content: Image Left + Text Right ===== */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

        {/* Profile Video — LEFT */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, x: -40 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 shrink-0 rounded-full p-1 bg-linear-to-br from-brass/50 to-transparent"
        >
          <div className="w-full h-full rounded-full overflow-hidden relative glass">
            <video
              src="/profile/profile-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Ring glow */}
          <div className="absolute -inset-3 rounded-full border border-brass/10 animate-pulse pointer-events-none" />
          <div className="absolute -inset-6 rounded-full border border-brass/5 pointer-events-none" />
        </motion.div>

        {/* Text Content — RIGHT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Name */}
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-[0.2em] mb-4 uppercase flex ml-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {NAME_LETTERS.map((letter, i) => (
              <span key={i} className="inline-block overflow-hidden pb-6">
                <motion.span
                  initial={{ y: 80, opacity: 0, rotateX: 90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-gradient inline-block"
                  style={{ textShadow: "0 0 60px rgba(133,120,97,0.4)" }}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Glowing line under name */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-32 md:w-48 h-px bg-linear-to-r from-transparent via-brass/60 to-transparent mb-6"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 font-light tracking-[0.3em] mb-12 uppercase"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Pencil &amp; Charcoal Realism Artist
          </motion.p>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
            onClick={scrollToNext}
            className="group relative px-8 py-4 bg-transparent border border-brass/50 rounded-full overflow-hidden transition-all duration-300 hover:border-brass hover:shadow-[0_0_30px_rgba(133,120,97,0.3)]"
          >
            <div className="absolute inset-0 bg-linear-to-r from-brass/0 via-brass/10 to-brass/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative text-brass uppercase tracking-widest text-sm font-medium" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              View My Work
            </span>
          </motion.button>
        </div>
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
