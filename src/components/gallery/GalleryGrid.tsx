import { motion } from "framer-motion";
import type { GalleryItem } from "../../data/gallery";
import { getGalleryAlt } from "../../data/gallery";
import { useSettings } from "../../context/SettingsContext";

interface GalleryGridProps {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}

export function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  const { language } = useSettings();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          onClick={() => onOpen(index)}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-muted/10"
        >
          <img
            src={item.gallerySrc}
            alt={getGalleryAlt(item, language)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-gold dark:ring-gold-dark rounded-xl transition-all" />
        </motion.button>
      ))}
    </div>
  );
}
