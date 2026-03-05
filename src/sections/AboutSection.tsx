"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLanguage, setActiveLanguage] = useState<"hindi" | "english">("english");
  const [subtitlesEnabled, setSubtitlesEnabled] = useState(false);

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
    <section id="about" ref={containerRef} className="relative py-32 overflow-hidden bg-chinese-black text-white">
      {/* Tilted Running Lines Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden flex flex-col justify-center -rotate-6 scale-125">
        <motion.div style={{ x: bgTextX1, WebkitTextStroke: "2px #CF9D7B" }} className="whitespace-nowrap font-serif text-[10rem] md:text-[15rem] leading-none mb-10 font-bold uppercase text-transparent stroke-text">
          Pencil • Charcoal • Realism • Portrait • Drawing • 
        </motion.div>
        <motion.div style={{ x: bgTextX2, WebkitTextStroke: "2px #CF9D7B" }} className="whitespace-nowrap font-serif text-[10rem] md:text-[15rem] leading-none font-bold uppercase text-transparent stroke-text">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-brass/20 to-coffee/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Video Player */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-jet/50">
                <video 
                  className="w-full h-full object-cover"
                  src="/videos/AQPbmmE_RrAR7ljGHBrfIgmoOZSBxgTYspxq4NM-VsPv94cpsROng0uAUkswtXJDQAd0KgA8fxYGkDdWUhAyJTjIgm8ArL35h_s27OY.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveLanguage("english")}
                    className={`text-xs px-2 py-1 rounded transition-colors ${activeLanguage === "english" ? "bg-brass text-chinese-black font-medium" : "text-gray-300 hover:text-white"}`}
                  >
                    ENG
                  </button>
                  <button 
                    onClick={() => setActiveLanguage("hindi")}
                    className={`text-xs px-2 py-1 rounded transition-colors ${activeLanguage === "hindi" ? "bg-brass text-chinese-black font-medium" : "text-gray-300 hover:text-white"}`}
                  >
                    HIN
                  </button>
                </div>
                <button 
                  onClick={() => setSubtitlesEnabled(!subtitlesEnabled)}
                  className={`text-xs px-2 py-1 border rounded transition-colors ${subtitlesEnabled ? "border-brass text-brass bg-brass/10" : "border-gray-500 text-gray-300"}`}
                >
                  CC
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Animated Text */}
          <ScrollReveal animation="slide-left" delay={0.4}>
            <div className="space-y-8 relative">
              <div className="absolute -left-10 top-0 w-1 h-full bg-gradient-to-b from-brass via-coffee to-transparent opacity-30 hidden md:block" />
              
              <h3 className="text-3xl md:text-4xl font-serif text-white/90">
                Capturing <span className="text-gradient">Reality</span>
              </h3>
              
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light max-w-2xl text-justify">
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
                  className="flex gap-8 border-t border-white/10 pt-8"
                >
                  <div>
                    <h4 className="text-brass text-3xl font-serif">10+</h4>
                    <p className="text-sm text-gray-400 font-light mt-1">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-brass text-3xl font-serif">500+</h4>
                    <p className="text-sm text-gray-400 font-light mt-1">Artworks Created</p>
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
