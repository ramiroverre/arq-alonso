import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface MarqueeProps {
  items: ReactNode[];
  direction?: "left" | "right";
  className?: string;
}

export function Marquee({ items, direction = "left", className }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-4 whitespace-nowrap",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            {item}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-surface dark:from-surface-dark to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-surface dark:from-surface-dark to-transparent" />
    </div>
  );
}
