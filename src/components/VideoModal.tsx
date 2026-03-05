"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine } from "@remixicon/react";
import { PortfolioVideo } from "@/data/videoData";

interface VideoModalProps {
  video: PortfolioVideo | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!video) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-chinese-black/95 backdrop-blur-xl p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[110] p-2 text-gray-400 hover:text-white transition-colors bg-chinese-black/50 rounded-full hover:bg-white/10"
          >
            <RiCloseLine size={32} />
          </button>

          {/* Video Container (9:16 aspect ratio roughly limit for reels) */}
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300, delay: 0.1 }}
            className="relative w-full max-w-md aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(207,157,123,0.15)] ring-1 ring-white/10"
          >
            <video
              src={video.src}
              poster={video.thumbnail}
              controls
              autoPlay
              controlsList="nodownload"
              className="w-full h-full object-cover"
              playsInline
            />
            
            {/* Title overlay gradient */}
            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none p-6">
              <h3 className="text-white font-sans font-medium text-lg drop-shadow-md">
                {video.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
