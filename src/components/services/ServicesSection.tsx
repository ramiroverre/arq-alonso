import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ServiceCard } from "./ServiceCard";
import { ServiceExpansionPanel } from "./ServiceExpansionPanel";

export function ServicesSection() {
  const { copy } = useSettings();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  function toggleExpanded() {
    // The site sets `scroll-behavior: smooth` globally, which would race
    // against the panel's own collapse animation if we asked for a smooth
    // scroll here too — the two animations fight and can overshoot into the
    // next section. Scrolling instantly, before the collapse animation even
    // starts, avoids that entirely: the viewport snaps to the top of the
    // section first, then the panel just shrinks away below it.
    if (isExpanded) {
      sectionRef.current?.scrollIntoView({ behavior: "instant", block: "start" });
    }
    setIsExpanded((prev) => !prev);
  }

  return (
    <section id="services" className="px-6 pt-8 sm:pt-10 pb-20 sm:pb-28">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ink-dark">{copy.services.title}</h2>
          <p className="mt-3 text-muted dark:text-muted-dark max-w-xl mx-auto">{copy.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ServiceCard
              name={copy.services.gentlemenDesign.name}
              tagline={copy.services.gentlemenDesign.tagline}
              isExpanded={isExpanded}
              onClick={toggleExpanded}
            />
            {!isDesktop && (
              <AnimatePresence>
                {isExpanded && <ServiceExpansionPanel onCollapse={toggleExpanded} />}
              </AnimatePresence>
            )}
          </div>

          <ServiceCard
            name={copy.services.bimModeler.name}
            tagline={copy.services.bimModeler.tagline}
            isPlaceholder
            comingSoonLabel={copy.services.comingSoon}
          />
        </div>

        {isDesktop && (
          <AnimatePresence>
            {isExpanded && <ServiceExpansionPanel onCollapse={toggleExpanded} />}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
