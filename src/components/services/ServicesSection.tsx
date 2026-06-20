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
  const cardRef = useRef<HTMLDivElement>(null);

  function toggleExpanded() {
    setIsExpanded((prev) => !prev);
  }

  // Wait for the panel's exit animation to finish collapsing before scrolling,
  // otherwise the page reflow (content shrinking) shifts the next section into
  // view at the scroll position we just centered on.
  function scrollToCardAfterCollapse() {
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section id="services" className="px-6 pt-8 sm:pt-10 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ink-dark">{copy.services.title}</h2>
          <p className="mt-3 text-muted dark:text-muted-dark max-w-xl mx-auto">{copy.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div ref={cardRef}>
            <ServiceCard
              name={copy.services.gentlemenDesign.name}
              tagline={copy.services.gentlemenDesign.tagline}
              isExpanded={isExpanded}
              onClick={toggleExpanded}
            />
            {!isDesktop && (
              <AnimatePresence onExitComplete={scrollToCardAfterCollapse}>
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
          <AnimatePresence onExitComplete={scrollToCardAfterCollapse}>
            {isExpanded && <ServiceExpansionPanel onCollapse={toggleExpanded} />}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
