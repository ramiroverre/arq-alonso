import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";
import { TextReveal } from "../ui/cascade-text";

export function ContactCTA() {
  const { theme, copy } = useSettings();

  return (
    <section id="contact" className="px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="group relative max-w-3xl mx-auto text-center rounded-md border border-black/10 dark:border-white/10 bg-surface dark:bg-surface-dark px-8 py-14 sm:py-16"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute top-4 left-4 w-4 h-4 border-t border-l border-black/25 dark:border-white/25 transition-all duration-300 group-hover:border-gold dark:group-hover:border-gold-dark group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute top-4 right-4 w-4 h-4 border-t border-r border-black/25 dark:border-white/25 transition-all duration-300 group-hover:border-gold dark:group-hover:border-gold-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-black/25 dark:border-white/25 transition-all duration-300 group-hover:border-gold dark:group-hover:border-gold-dark group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
        />
        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-black/25 dark:border-white/25 transition-all duration-300 group-hover:border-gold dark:group-hover:border-gold-dark group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        />

        <h2 className="font-serif text-2xl sm:text-3xl text-ink dark:text-ink-dark">{copy.contact.title}</h2>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-4 mx-auto block h-[2px] w-10 bg-gold dark:bg-gold-dark origin-center transition-all duration-300 group-hover:w-14"
        />
        <p className="mt-4 text-muted dark:text-muted-dark">{copy.contact.subtitle}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5492615074929"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden w-full text-center rounded-full bg-gold dark:bg-gold-dark text-white text-sm font-medium py-3.5 px-7 transition-transform active:scale-[0.97]"
          >
            {copy.contact.whatsapp}
          </a>
          <a
            href="https://www.linkedin.com/in/ignacioalonsoarq/"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden w-full text-center rounded-full border border-muted/30 text-ink dark:text-ink-dark text-sm font-medium py-3.5 px-7 transition-colors active:bg-black/5 dark:active:bg-white/10"
          >
            {copy.contact.linkedin}
          </a>

          <TextReveal
            as="a"
            href="https://wa.me/5492615074929"
            target="_blank"
            text={copy.contact.whatsapp}
            fontSize="0.875rem"
            color="#FFFFFF"
            hoverColor="#FFFFFF"
            className="hidden sm:inline-block text-center rounded-full bg-gold dark:bg-gold-dark hover:opacity-90 transition-opacity"
            style={{ padding: "0.875rem 1.75rem" }}
          />
          <TextReveal
            as="a"
            href="https://www.linkedin.com/in/ignacioalonsoarq/"
            target="_blank"
            text={copy.contact.linkedin}
            fontSize="0.875rem"
            color={theme === "dark" ? "#FFFFFF" : "#1A1A1A"}
            hoverColor={theme === "dark" ? "#D9663F" : "#C1502E"}
            className="hidden sm:inline-block text-center rounded-full border border-muted/30 transition-colors"
            style={{ padding: "0.875rem 1.75rem" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
