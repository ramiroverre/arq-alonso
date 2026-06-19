import { useState } from "react";
import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";
import { cn } from "../../lib/utils";
import { TextReveal } from "../ui/cascade-text";

export function Navbar() {
  const { theme, toggleTheme, language, toggleLanguage, copy } = useSettings();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl border border-muted/15 bg-surface/80 dark:bg-surface-dark/70 backdrop-blur-md shadow-lg",
        open ? "rounded-none" : "rounded-full"
      )}
    >
      <nav className="flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between px-5 py-3">
        <a
          href="#top"
          className="justify-self-start whitespace-nowrap font-serif text-lg font-semibold tracking-wide text-ink dark:text-ink-dark"
        >
          Ignacio Alonso
        </a>

        <div className="hidden md:flex items-center gap-6 justify-self-center">
          {copy.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted dark:text-muted-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 justify-self-end">
          <button
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="text-xs font-medium tracking-wide text-muted dark:text-muted-dark hover:text-gold dark:hover:text-gold-dark border border-muted/20 rounded-full px-2.5 py-1 transition-colors"
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="grid place-items-center w-8 h-8 rounded-full border border-muted/20 text-muted dark:text-muted-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
          >
            {theme === "dark" ? "☼" : "☾"}
          </button>

          <TextReveal
            as="a"
            href="https://wa.me/5492615074929"
            target="_blank"
            text={copy.nav.whatsapp}
            fontSize="0.8rem"
            color="#FFFFFF"
            hoverColor="#FFFFFF"
            className="hidden sm:inline-block text-center rounded-full bg-gold dark:bg-gold-dark hover:opacity-90 transition-opacity"
            style={{ padding: "0.5rem 1rem" }}
          />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden grid place-items-center w-8 h-8 text-ink dark:text-ink-dark"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-3 px-5 pb-4">
          {copy.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted dark:text-muted-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
