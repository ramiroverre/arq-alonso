import { motion } from "framer-motion";

function GoldBeam({ className }: { className?: string }) {
  return (
    <svg
      width="220"
      height="90"
      viewBox="0 0 220 90"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M44 1h46M0 1h46M88 45h46m0 0h46M88 89h46M88 1V45M198 89V45"
        stroke="url(#gold-beam-gradient)"
        strokeWidth={1.5}
      />
      <defs>
        <motion.linearGradient
          id="gold-beam-gradient"
          variants={{
            initial: { x1: "40%", x2: "50%", y1: "160%", y2: "180%" },
            animate: { x1: "0%", x2: "10%", y1: "-40%", y2: "-20%" },
          }}
          animate="animate"
          initial="initial"
          transition={{ duration: 2.4, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 1.6 }}
        >
          <stop stopColor="#D9663F" stopOpacity="0" />
          <stop stopColor="#D9663F" />
          <stop offset="0.5" stopColor="#F0A37E" />
          <stop offset="1" stopColor="#D9663F" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src="/images-optimized/hero/hero-background.webp"
        alt=""
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
      <GoldBeam className="absolute top-[18%] left-[8%] hidden sm:block opacity-60" />
      <GoldBeam className="absolute bottom-[12%] right-[6%] hidden sm:block opacity-40 rotate-180" />
    </div>
  );
}
