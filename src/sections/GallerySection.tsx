"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RiPlayCircleLine } from "@remixicon/react";
import clsx from "clsx";

import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import GalleryModal from "@/components/GalleryModal";
import VideoModal from "@/components/VideoModal";

import { galleryData, categories, ArtworkCategory, Artwork } from "@/data/galleryData";
import { videoData, PortfolioVideo } from "@/data/videoData";

type Tab = "artworks" | "videos";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<Tab>("artworks");
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory | "All">("All");

  // Modal states
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);

  // Filter artworks
  const filteredArtworks = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(art => art.category === activeCategory);

  return (
    <section id="gallery" className="py-32 bg-chinese-black relative min-h-screen">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-brass/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] bg-coffee/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Portfolio" subtitle="A collection of my finest pieces" />
        </ScrollReveal>

        {/* Tab Selection */}
        <ScrollReveal animation="fade" delay={0.2} className="flex justify-center mb-16">
          <div className="inline-flex glass rounded-full p-2 gap-2 relative z-20">
            {(["artworks", "videos"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "relative px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-all duration-300 font-medium",
                  activeTab === tab ? "text-chinese-black" : "text-gray-400 hover:text-white"
                )}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#e6b999] to-brass rounded-full shadow-[0_0_15px_rgba(207,157,123,0.5)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {activeTab === "artworks" ? (
            <motion.div
              key="artworks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button
                  onClick={() => setActiveCategory("All")}
                  className={clsx(
                    "px-6 py-2 rounded-full text-xs uppercase tracking-widest border transition-all duration-300",
                    activeCategory === "All"
                      ? "border-brass text-brass bg-brass/10"
                      : "border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300"
                  )}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={clsx(
                      "px-6 py-2 rounded-full text-xs uppercase tracking-widest border transition-all duration-300",
                      activeCategory === category
                        ? "border-brass text-brass bg-brass/10"
                        : "border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Masonry Grid (CSS columns for Pinterest style) */}
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {filteredArtworks.map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl glass mb-6"
                    onClick={() => setSelectedArtwork(artwork)}
                  >
                    <div className="relative w-full aspect-[3/4]">
                       {/* Note: In a real app with varied aspect ratios, we'd remove fixed aspect ratios 
                           and just use Next.js Image with layout responsive, but for placeholders 
                           we'll maintain a slight vertical orientation */}
                      <Image
                        src={artwork.images[0]}
                        alt={artwork.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-chinese-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        <h4 className="text-white font-serif text-xl tracking-wide mb-1">
                          {artwork.title}
                        </h4>
                        <p className="text-brass text-xs uppercase tracking-widest">
                          {artwork.category} • {artwork.images.length} Image{artwork.images.length > 1 ? 's' : ''}
                        </p>
                      </motion.div>
                    </div>

                    {/* Multi-image indicator */}
                    {artwork.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-chinese-black/60 backdrop-blur-md rounded-full px-3 py-1 text-[10px] text-white tracking-widest uppercase border border-white/10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="w-1.5 h-1.5 rounded-full bg-brass animate-pulse" />
                        Gallery
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[60vh] flex flex-col items-center justify-center p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent relative overflow-hidden"
            >
              {/* Videos Carousel - Horizontal Scroll */}
              <div className="w-full h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex gap-8 pb-8 scrollbar-hide">
                {videoData.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setSelectedVideo(video)}
                    className="snap-center shrink-0 w-[280px] md:w-[320px] aspect-[9/16] relative rounded-2xl overflow-hidden cursor-pointer group bg-jet shadow-2xl"
                  >
                    {/* Placeholder image representation since we won't auto-load all videos */}
                    {video.thumbnail ? (
                      <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-jungle-green to-chinese-black" />
                    )}
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex flex-col items-center justify-center z-10">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-brass/20 transition-all duration-300">
                        <RiPlayCircleLine className="w-8 h-8 text-white group-hover:text-brass transition-colors" />
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
                      <h4 className="text-white font-serif text-lg tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {video.title}
                      </h4>
                      <div className="h-1 w-0 bg-brass mt-2 group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
