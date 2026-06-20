import { motion } from "framer-motion";
import type { PricingTier } from "../../data/services";
import { cn } from "../../lib/utils";
import { useSettings } from "../../context/SettingsContext";

interface PricingTiersProps {
  tiers: PricingTier[];
}

export function PricingTiers({ tiers }: PricingTiersProps) {
  const { copy } = useSettings();
  const { tierLabels } = copy.services.gentlemenDesign;

  return (
    <div>
      <h4 className="font-serif text-lg text-ink dark:text-ink-dark">
        {copy.services.gentlemenDesign.pricingTitle}
      </h4>
      <p className="mt-1 text-sm text-muted dark:text-muted-dark">
        {copy.services.gentlemenDesign.pricingNote}
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "rounded-md border bg-surface dark:bg-surface-dark px-6 py-6 text-center",
              tier.id === "elite" ? "border-gold dark:border-gold-dark" : "border-black/10 dark:border-white/10"
            )}
          >
            <p className="font-serif text-lg text-ink dark:text-ink-dark">{tierLabels[tier.id]}</p>
            <p className="mt-1 text-sm text-muted dark:text-muted-dark">
              {tier.maxSqm !== null ? `${tier.minSqm}–${tier.maxSqm}` : `${tier.minSqm}+`} {copy.services.sqmUnit}
            </p>
            <p className="mt-4 text-xl font-semibold text-ink dark:text-ink-dark">
              {tier.maxPrice !== null
                ? `$${tier.minPrice.toLocaleString()} – $${tier.maxPrice.toLocaleString()}`
                : `${copy.services.from} $${tier.minPrice.toLocaleString()}`}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
