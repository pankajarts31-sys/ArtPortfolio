"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import { Artwork } from "@/data/galleryData";

interface InstaCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export default function InstaCard({ artwork, onClick }: InstaCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const hasMultiple = artwork.images.length > 1;

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < artwork.images.length) {
        setCurrentIndex(index);
      }
    },
    [artwork.images.length]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0 && currentIndex < artwork.images.length - 1) {
        goTo(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        goTo(currentIndex - 1);
      }
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden group" style={{ backgroundColor: "var(--theme-surface)", border: "1px solid var(--theme-border)" }}>
      {/* Image carousel area */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden"
        onTouchStart={hasMultiple ? handleTouchStart : undefined}
        onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
      >
        {/* Images */}
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {artwork.images.map((src, i) => (
            <div key={i} className="relative w-full h-full shrink-0 cursor-pointer" onClick={onClick}>
              <Image
                src={src}
                alt={`${artwork.title} - ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Left/Right arrow buttons - only on hover, only for multi-image */}
        {hasMultiple && currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goTo(currentIndex - 1);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 hover:bg-black/70"
          >
            <RiArrowLeftSLine size={18} />
          </button>
        )}
        {hasMultiple && currentIndex < artwork.images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goTo(currentIndex + 1);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 hover:bg-black/70"
          >
            <RiArrowRightSLine size={18} />
          </button>
        )}

        {/* Image count badge - top right */}
        {hasMultiple && (
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 text-[10px] text-white tracking-wider font-medium z-10">
            {currentIndex + 1}/{artwork.images.length}
          </div>
        )}
      </div>

      {/* Bottom bar - dots + title (Instagram style) */}
      {hasMultiple && (
        <div className="flex justify-center gap-1 py-2">
          {artwork.images.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full"
              animate={{
                width: i === currentIndex ? 6 : 4,
                height: i === currentIndex ? 6 : 4,
                backgroundColor:
                  i === currentIndex
                    ? "#857861"
                    : "rgba(133, 120, 97, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      )}

      {/* Title */}
      <div className="px-3 pb-3 pt-1">
        <p className="text-xs font-light tracking-wide truncate" style={{ color: "var(--theme-text-muted)" }}>
          {artwork.title}
        </p>
      </div>
    </div>
  );
}
