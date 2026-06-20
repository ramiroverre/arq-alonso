import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";
import { gentlemenDesignPricing } from "../../data/services";
import { PricingTiers } from "./PricingTiers";
import { ServiceGalleryTabs } from "./ServiceGalleryTabs";

interface ServiceExpansionPanelProps {
  onCollapse: () => void;
}

export function ServiceExpansionPanel({ onCollapse }: ServiceExpansionPanelProps) {
  const { copy } = useSettings();

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div className="mt-6 rounded-md border border-black/10 dark:border-white/10 bg-surface dark:bg-surface-dark px-6 py-8 sm:px-10 sm:py-10 space-y-10">
        <p className="text-muted dark:text-muted-dark max-w-2xl">{copy.services.gentlemenDesign.description}</p>

        <PricingTiers tiers={gentlemenDesignPricing} />

        <ServiceGalleryTabs />
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={onCollapse}
          className="inline-flex items-center gap-2 rounded-full border border-muted/20 px-6 py-3 text-sm text-muted dark:text-muted-dark hover:border-gold dark:hover:border-gold-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
        >
          {copy.services.collapse}
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
