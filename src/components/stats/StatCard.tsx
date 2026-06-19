import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useCountUp } from "../../hooks/useCountUp";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  icon: ReactNode;
  index: number;
}

export function StatCard({ label, value, suffix = "", icon, index }: StatCardProps) {
  const { ref, value: animatedValue } = useCountUp({ end: value });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col items-center gap-3 px-6 py-10 sm:py-12 cursor-default"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute top-3 left-3 w-3 h-3 border-t border-l border-black/25 dark:border-white/25 transition-all duration-300 group-hover:border-gold dark:group-hover:border-gold-dark group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
      />
      <motion.span
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-black/25 dark:border-white/25 transition-all duration-300 group-hover:border-gold dark:group-hover:border-gold-dark group-hover:translate-x-0.5 group-hover:translate-y-0.5"
      />

      <div className="text-ink/70 dark:text-white/70 transition-all duration-300 group-hover:text-gold dark:group-hover:text-gold-dark group-hover:-translate-y-1">
        {icon}
      </div>

      <p className="text-4xl sm:text-5xl font-bold tabular-nums text-ink dark:text-white">
        {animatedValue}
        {suffix}
      </p>

      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        className="h-[2px] w-8 bg-gold dark:bg-gold-dark origin-left transition-all duration-300 group-hover:w-12"
      />

      <p className="text-xs uppercase tracking-wider text-muted dark:text-muted-dark text-center">{label}</p>
    </motion.div>
  );
}
