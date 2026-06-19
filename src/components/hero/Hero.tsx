import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";
import { HeroBackground } from "./HeroBackground";
import { TextReveal } from "../ui/cascade-text";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export function Hero() {
  const { copy } = useSettings();

  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <HeroBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-dark/40 bg-black/30 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
          <span className="text-sm text-white/90 tracking-wide">{copy.hero.eyebrow}</span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight"
        >
          {copy.hero.headline}
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          {copy.hero.subheadline}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#gallery"
            className="sm:hidden w-full text-center rounded-full bg-gold-dark text-white text-sm font-medium py-3.5 px-7 transition-transform active:scale-[0.97]"
          >
            {copy.hero.ctaPrimary}
          </a>
          <a
            href="https://wa.me/5492615074929"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden w-full text-center rounded-full border border-white/40 text-white text-sm font-medium py-3.5 px-7 transition-colors active:bg-white/10"
          >
            {copy.hero.ctaSecondary}
          </a>

          <TextReveal
            as="a"
            href="#gallery"
            text={copy.hero.ctaPrimary}
            fontSize="0.875rem"
            color="#FFFFFF"
            hoverColor="#FFFFFF"
            className="hidden sm:inline-block text-center rounded-full bg-gold-dark hover:opacity-90 transition-opacity"
            style={{ padding: "0.875rem 1.75rem" }}
          />
          <TextReveal
            as="a"
            href="https://wa.me/5492615074929"
            target="_blank"
            text={copy.hero.ctaSecondary}
            fontSize="0.875rem"
            color="#FFFFFF"
            hoverColor="#D9663F"
            className="hidden sm:inline-block text-center rounded-full border border-white/40 hover:border-gold-dark transition-colors"
            style={{ padding: "0.875rem 1.75rem" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
