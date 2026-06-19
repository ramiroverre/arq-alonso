import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

export function About() {
  const { copy } = useSettings();

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="relative max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="px-6 md:pl-10 lg:pl-20 md:pr-6 max-w-xl md:max-w-none order-1"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gold dark:text-gold-dark">{copy.about.kicker}</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink dark:text-ink-dark mt-4 mb-6 leading-tight">
            {copy.about.title}
          </h2>
          <div className="space-y-4 max-w-lg">
            {copy.about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-muted dark:text-muted-dark leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted dark:text-muted-dark tracking-wide">{copy.about.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="px-6 md:pl-6 lg:pl-0 md:pr-10 lg:pr-20 order-2"
        >
          <div className="relative h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden">
            <img
              src="/images-optimized/portrait/ignacio-alonso.webp"
              alt="Ignacio Alonso"
              className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
