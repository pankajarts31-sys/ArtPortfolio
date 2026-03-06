"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  RiPlayFill,
  RiPauseFill,
  RiVolumeUpLine,
  RiVolumeMuteLine,
} from "@remixicon/react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else          { v.pause(); setIsPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  // Parallax effect for the background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgTextX1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const bgTextX2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const textToAnimate = 
    "I am Pankaj, a passionate pencil and charcoal artist specializing in hyper-realistic drawings. Every stroke I make is a step towards bringing emotions to life on canvas. My work is inspired by the depth of human expression and the subtle play of light and shadow.";

  // Split text for letter-by-letter animation
  const characters = textToAnimate.split("");

  return (
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden text-white" style={{ backgroundColor: "var(--theme-bg)", color: "var(--theme-text)" }}>
      {/* Tilted Running Lines Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden flex flex-col justify-center -rotate-6 scale-125">
        <motion.div style={{ x: bgTextX1, WebkitTextStroke: "2px #857861" }} className="whitespace-nowrap font-serif text-[10rem] md:text-[15rem] leading-none mb-10 font-bold uppercase text-transparent stroke-text">
          Pencil • Charcoal • Realism • Portrait • Drawing •
        </motion.div>
        <motion.div style={{ x: bgTextX2, WebkitTextStroke: "2px #857861" }} className="whitespace-nowrap font-serif text-[10rem] md:text-[15rem] leading-none font-bold uppercase text-transparent stroke-text">
          Art • Shadow • Hyperrealism • Detail • Studio •
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        <ScrollReveal>
          <SectionHeading title="About Me" subtitle="The Artist Behind the Canvas" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mt-16 items-center">
          {/* Left Column - Video Player */}
          <ScrollReveal animation="slide-right" delay={0.2} className="relative group">
            <div className="relative aspect-video rounded-2xl overflow-hidden glass shadow-2xl ring-1 ring-white/10">
              {/* Glow effect behind video */}
              <div className="absolute -inset-4 bg-linear-to-r from-brass/20 to-coffee/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Video Player */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-jet/50">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/profile/about-intro.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Centre play/pause tap target */}
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                onClick={togglePlay}
              >
                <motion.div
                  key={isPlaying ? "playing" : "paused"}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: isPlaying ? 0 : 1, scale: isPlaying ? 0.7 : 1 }}
                  className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20"
                >
                  <RiPlayFill size={28} className="text-white ml-1" />
                </motion.div>
              </div>

              {/* Bottom controls bar */}
              <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-linear-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {/* Play / Pause */}
                <button
                  onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brass/40 flex items-center justify-center transition-colors border border-white/15"
                >
                  {isPlaying
                    ? <RiPauseFill size={16} className="text-white" />
                    : <RiPlayFill  size={16} className="text-white ml-0.5" />}
                </button>

                {/* Mute / Unmute */}
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brass/40 flex items-center justify-center transition-colors border border-white/15"
                >
                  {isMuted
                    ? <RiVolumeMuteLine size={16} className="text-white" />
                    : <RiVolumeUpLine   size={16} className="text-white" />}
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Animated Text */}
          <ScrollReveal animation="slide-left" delay={0.4}>
            <div className="space-y-8 relative">
              <div className="absolute -left-10 top-0 w-1 h-full bg-linear-to-b from-brass via-coffee to-transparent opacity-30 hidden md:block" />
              
              <h3 className="text-3xl md:text-4xl text-white/90 tracking-wide font-medium" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                Capturing <span className="text-gradient">Reality</span>
              </h3>
              
              <p 
                className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light max-w-2xl text-justify"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {characters.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.1,
                      delay: index * 0.015,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </p>

              <div className="pt-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex gap-8 border-t pt-8" style={{ borderColor: "var(--theme-border)" }}
                >
                  <div>
                    <h4 className="text-brass text-3xl font-serif">5+</h4>
                    <p className="text-sm font-light mt-1" style={{ color: "var(--theme-text-muted)" }}>Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-brass text-3xl font-serif">450+</h4>
                    <p className="text-sm font-light mt-1" style={{ color: "var(--theme-text-muted)" }}>Artworks Created</p>
                  </div>
                  <div>
                    <h4 className="text-brass text-3xl font-serif">250+</h4>
                    <p className="text-sm font-light mt-1" style={{ color: "var(--theme-text-muted)" }}>Commissions Done</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
