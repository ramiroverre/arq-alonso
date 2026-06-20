import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface ServiceCardProps {
  name: string;
  tagline: string;
  isExpanded?: boolean;
  isPlaceholder?: boolean;
  comingSoonLabel?: string;
  onClick?: () => void;
}

export function ServiceCard({
  name,
  tagline,
  isExpanded = false,
  isPlaceholder = false,
  comingSoonLabel,
  onClick,
}: ServiceCardProps) {
  const Comp = isPlaceholder ? "div" : motion.button;

  return (
    <Comp
      {...(!isPlaceholder && {
        onClick,
        whileTap: { scale: 0.98 },
      })}
      className={cn(
        "group relative w-full text-left rounded-md border bg-surface dark:bg-surface-dark px-8 py-10 sm:py-12 transition-colors",
        isPlaceholder
          ? "border-black/10 dark:border-white/10 cursor-default opacity-70"
          : cn(
              "cursor-pointer border-black/10 dark:border-white/10 hover:border-gold dark:hover:border-gold-dark",
              isExpanded && "border-gold dark:border-gold-dark"
            )
      )}
    >
      <span
        className={cn(
          "absolute top-4 left-4 w-4 h-4 border-t border-l border-black/25 dark:border-white/25 transition-all duration-300",
          !isPlaceholder && "group-hover:border-gold dark:group-hover:border-gold-dark group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        )}
      />
      <span
        className={cn(
          "absolute top-4 right-4 w-4 h-4 border-t border-r border-black/25 dark:border-white/25 transition-all duration-300",
          !isPlaceholder && "group-hover:border-gold dark:group-hover:border-gold-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        )}
      />
      <span
        className={cn(
          "absolute bottom-4 left-4 w-4 h-4 border-b border-l border-black/25 dark:border-white/25 transition-all duration-300",
          !isPlaceholder && "group-hover:border-gold dark:group-hover:border-gold-dark group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
        )}
      />
      <span
        className={cn(
          "absolute bottom-4 right-4 w-4 h-4 border-b border-r border-black/25 dark:border-white/25 transition-all duration-300",
          !isPlaceholder && "group-hover:border-gold dark:group-hover:border-gold-dark group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        )}
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-ink dark:text-ink-dark">{name}</h3>
          <p className="mt-2 text-sm text-muted dark:text-muted-dark">{tagline}</p>
        </div>

        {isPlaceholder ? (
          <span className="shrink-0 rounded-full border border-muted/30 px-3 py-1 text-xs text-muted dark:text-muted-dark">
            {comingSoonLabel}
          </span>
        ) : (
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 text-muted dark:text-muted-dark group-hover:text-gold dark:group-hover:text-gold-dark transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.span>
        )}
      </div>
    </Comp>
  );
}
