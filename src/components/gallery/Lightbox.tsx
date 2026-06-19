import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "../../data/gallery";
import { getGalleryAlt } from "../../data/gallery";
import { useSettings } from "../../context/SettingsContext";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const { language, copy } = useSettings();
  const current = items[index];

  const goPrev = () => onNavigate((index - 1 + items.length) % items.length);
  const goNext = () => onNavigate((index + 1) % items.length);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          aria-label={copy.gallery.lightboxClose}
          className="absolute top-5 right-5 z-10 text-white/80 hover:text-white transition-colors text-2xl"
        >
          ✕
        </button>

        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 z-10 text-white/80 hover:text-white transition-colors text-3xl"
          >
            ‹
          </button>
        )}

        <motion.div
          className="relative max-w-5xl max-h-[85vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={current.id}
            src={current.fullSrc}
            alt={getGalleryAlt(current, language)}
            className="w-full h-full max-h-[85vh] object-contain rounded-md"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>

        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 z-10 text-white/80 hover:text-white transition-colors text-3xl"
          >
            ›
          </button>
        )}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-1.5 rounded-full">
          {getGalleryAlt(current, language)} · {index + 1}/{items.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
