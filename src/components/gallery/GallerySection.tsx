import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { gallery } from "../../data/gallery";
import { GalleryGrid } from "./GalleryGrid";
import { Lightbox } from "./Lightbox";

// Mobile is a single column, so 10 images = 10 rows.
const MOBILE_VISIBLE_COUNT = 10;
// ~7 rows on the most common desktop layout (3 columns).
const DESKTOP_VISIBLE_COUNT = 21;

export function GallerySection() {
  const { copy } = useSettings();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const [expanded, setExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [pendingCollapseScroll, setPendingCollapseScroll] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  const initialVisibleCount = isMobile ? MOBILE_VISIBLE_COUNT : DESKTOP_VISIBLE_COUNT;

  const visibleItems = expanded ? gallery : gallery.slice(0, initialVisibleCount);
  const canToggle = gallery.length > initialVisibleCount;

  function handleCollapse() {
    setExpanded(false);
    setPendingCollapseScroll(true);
  }

  useEffect(() => {
    if (pendingCollapseScroll) {
      toggleRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setPendingCollapseScroll(false);
    }
  }, [pendingCollapseScroll]);

  return (
    <section id="gallery" className="px-6 pt-8 sm:pt-10 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ink-dark">{copy.gallery.title}</h2>
          <p className="mt-3 text-muted dark:text-muted-dark max-w-xl mx-auto">{copy.gallery.subtitle}</p>
        </div>

        <GalleryGrid items={visibleItems} onOpen={setOpenIndex} />

        {canToggle && (
          <div ref={toggleRef} className="mt-10 flex justify-center">
            {expanded ? (
              <button
                onClick={handleCollapse}
                className="inline-flex items-center gap-2 rounded-full border border-muted/20 px-6 py-3 text-sm text-muted dark:text-muted-dark hover:border-gold dark:hover:border-gold-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
              >
                {copy.gallery.showLess}
                <ChevronUp className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 rounded-full border border-muted/20 px-6 py-3 text-sm text-muted dark:text-muted-dark hover:border-gold dark:hover:border-gold-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
              >
                {copy.gallery.showMore}
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={visibleItems}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
