"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import InstaCard from "@/components/InstaCard";
import GalleryModal from "@/components/GalleryModal";
import VideoModal from "@/components/VideoModal";

import { galleryData, Artwork } from "@/data/galleryData";
import { videoData, PortfolioVideo } from "@/data/videoData";

export default function GallerySection() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);

  return (
    <section id="gallery" className="py-32 relative min-h-screen" style={{ backgroundColor: "var(--theme-bg)", color: "var(--theme-text)" }}>
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-brass/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-coffee/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Gallery" subtitle="A collection of my finest pieces" />
        </ScrollReveal>

        {/* ===== VIDEOS - Horizontal scroll, reel ratio, muted ===== */}
        <div className="mb-20">
          <ScrollReveal animation="fade" delay={0.1}>
            <h3 className="text-xs uppercase tracking-[0.3em] mb-6 ml-1" style={{ color: "var(--theme-text-muted)" }}>
              Reels
            </h3>
          </ScrollReveal>

          <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4">
              {videoData.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => setSelectedVideo(video)}
                  className="snap-center shrink-0 w-[200px] sm:w-[220px] md:w-[240px] aspect-[9/16] relative rounded-2xl overflow-hidden cursor-pointer group shadow-2xl" style={{ backgroundColor: "var(--theme-surface)" }}
                >
                  <video
                    src={video.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <h4 className="text-white font-serif text-sm tracking-wide translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      {video.title}
                    </h4>
                    <div className="h-0.5 w-0 bg-brass mt-2 group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== IMAGES - Instagram-style cards in Pinterest masonry grid ===== */}
        <ScrollReveal animation="fade" delay={0.1}>
          <h3 className="text-xs uppercase tracking-[0.3em] mb-6 ml-1" style={{ color: "var(--theme-text-muted)" }}>
            Artworks
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {galleryData.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
            >
              <InstaCard
                artwork={artwork}
                onClick={() => setSelectedArtwork(artwork)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <GalleryModal
        artwork={selectedArtwork}
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

      <VideoModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
