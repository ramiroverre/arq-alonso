import { useState } from "react";
import { GalleryGrid } from "../gallery/GalleryGrid";
import { Lightbox } from "../gallery/Lightbox";
import { gentlemenDesignGallery, resolveGalleryItems, type RoomCategory } from "../../data/services";
import { useSettings } from "../../context/SettingsContext";
import { cn } from "../../lib/utils";

const TABS: RoomCategory[] = ["living", "dining", "bedroom"];

export function ServiceGalleryTabs() {
  const { copy } = useSettings();
  const [activeTab, setActiveTab] = useState<RoomCategory>("living");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = resolveGalleryItems(gentlemenDesignGallery[activeTab]);

  function handleTabChange(tab: RoomCategory) {
    setActiveTab(tab);
    setOpenIndex(null);
  }

  return (
    <div>
      <h4 className="font-serif text-lg text-ink dark:text-ink-dark">
        {copy.services.gentlemenDesign.galleryTitle}
      </h4>

      <div className="mt-4 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm transition-colors",
              activeTab === tab
                ? "bg-gold dark:bg-gold-dark text-white border-transparent"
                : "border-muted/20 text-muted dark:text-muted-dark hover:border-gold dark:hover:border-gold-dark hover:text-gold dark:hover:text-gold-dark"
            )}
          >
            {copy.services.gentlemenDesign.tabs[tab]}
          </button>
        ))}
      </div>

      <div key={activeTab} className="mt-6">
        <GalleryGrid items={items} onOpen={setOpenIndex} />
      </div>

      {openIndex !== null && (
        <Lightbox items={items} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}
    </div>
  );
}
