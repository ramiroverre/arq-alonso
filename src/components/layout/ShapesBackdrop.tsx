import type { ReactNode } from "react";
import { ElegantShape } from "../ui/elegant-shape";

export function ShapesBackdrop({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-surface dark:bg-surface-dark">
      <div className="pointer-events-none absolute inset-0">
        <ElegantShape
          delay={0.1}
          width={400}
          height={100}
          rotate={12}
          gradient="from-gold/[0.3] dark:from-gold-dark/[0.3]"
          className="left-[4%] top-[2%]"
        />
        <ElegantShape
          delay={0.15}
          width={320}
          height={80}
          rotate={-12}
          gradient="from-ink/[0.12] dark:from-white/[0.16]"
          className="right-[8%] top-[18%]"
        />
        <ElegantShape
          delay={0.2}
          width={250}
          height={62}
          rotate={-10}
          gradient="from-gold/[0.26] dark:from-gold-dark/[0.26]"
          className="left-[10%] top-[42%]"
        />
        <ElegantShape
          delay={0.25}
          width={190}
          height={50}
          rotate={18}
          gradient="from-ink/[0.1] dark:from-white/[0.14]"
          className="right-[14%] top-[58%]"
        />
        <ElegantShape
          delay={0.3}
          width={225}
          height={58}
          rotate={-16}
          gradient="from-gold/[0.26] dark:from-gold-dark/[0.26]"
          className="left-[18%] top-[76%]"
        />
        <ElegantShape
          delay={0.35}
          width={275}
          height={70}
          rotate={10}
          gradient="from-ink/[0.1] dark:from-white/[0.14]"
          className="right-[6%] top-[90%]"
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
