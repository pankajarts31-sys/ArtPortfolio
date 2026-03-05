"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Artwork } from "@/data/galleryData";

interface GalleryModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ artwork, isOpen, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when opening a new artwork
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const nextImage = useCallback(() => {
    if (!artwork) return;
    setCurrentIndex((prev) => (prev === artwork.images.length - 1 ? 0 : prev + 1));
  }, [artwork]);

  const prevImage = useCallback(() => {
    if (!artwork) return;
    setCurrentIndex((prev) => (prev === 0 ? artwork.images.length - 1 : prev - 1));
  }, [artwork]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !artwork) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, artwork, onClose, prevImage, nextImage]);

  if (!artwork) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-chinese-black/95 backdrop-blur-xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] p-2 text-gray-400 hover:text-white transition-colors bg-chinese-black/50 rounded-full hover:bg-white/10"
          >
            <RiCloseLine size={32} />
          </button>

          {/* Controls */}
          {artwork.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-[110] p-3 text-white/50 hover:text-white transition-all hover:scale-110 bg-chinese-black/30 hover:bg-chinese-black/60 rounded-full"
              >
                <RiArrowLeftSLine size={40} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-[110] p-3 text-white/50 hover:text-white transition-all hover:scale-110 bg-chinese-black/30 hover:bg-chinese-black/60 rounded-full"
              >
                <RiArrowRightSLine size={40} />
              </button>
            </>
          )}

          {/* Main Image Container */}
          <div className="relative w-full h-full max-w-7xl max-h-screen p-4 md:p-12 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center"
              >
                <Image
                  src={artwork.images[currentIndex]}
                  alt={`${artwork.title} - View ${currentIndex + 1}`}
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Metadata overlay */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-0 right-0 text-center pointer-events-none"
            >
              <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wider mb-2">
                {artwork.title}
              </h3>
              <p className="text-brass/80 text-sm tracking-widest font-light uppercase">
                {artwork.category}
              </p>
              
              {/* Pagination Dots */}
              {artwork.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-6 pointer-events-auto">
                  {artwork.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-8 bg-brass" : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
