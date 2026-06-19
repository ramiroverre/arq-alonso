import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";
import { WhatsAppIcon } from "../../icons/WhatsAppIcon";

export function FloatingWhatsApp() {
  const { copy } = useSettings();
  const [showBubble, setShowBubble] = useState(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const target = document.getElementById("gallery");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggeredRef.current) {
          triggeredRef.current = true;
          setShowBubble(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -85% 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showBubble) return;
    const timeout = setTimeout(() => setShowBubble(false), 4000);
    return () => clearTimeout(timeout);
  }, [showBubble]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-full right-0 mb-3 w-60 rounded-2xl rounded-br-md border border-black/10 dark:border-white/10 bg-bg dark:bg-bg-dark shadow-xl p-4"
          >
            <button
              onClick={() => setShowBubble(false)}
              aria-label={copy.whatsappBubble.close}
              className="absolute top-2 right-2 grid place-items-center w-6 h-6 rounded-full text-muted dark:text-muted-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
            >
              ✕
            </button>
            <a
              href="https://wa.me/5492615074929"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm leading-snug text-ink dark:text-ink-dark pr-4 hover:text-gold dark:hover:text-gold-dark transition-colors"
            >
              {copy.whatsappBubble.message}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/5492615074929"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
        className="relative grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" aria-hidden="true" />
        <WhatsAppIcon className="relative w-7 h-7" />
      </motion.a>
    </div>
  );
}
