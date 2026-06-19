import { Clock, Layers, Globe, Building2 } from "lucide-react";
import { useSettings } from "../../context/SettingsContext";
import { StatCard } from "./StatCard";

const ICONS = [
  <Clock className="w-7 h-7" />,
  <Layers className="w-7 h-7" />,
  <Globe className="w-7 h-7" />,
  <Building2 className="w-7 h-7" />,
];

export function StatsSection() {
  const { copy } = useSettings();

  return (
    <section id="stats" className="px-6 pt-20 sm:pt-28 pb-8 sm:pb-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl text-center text-ink dark:text-ink-dark mb-12">
          {copy.stats.title}
        </h2>
        <div className="border border-black/10 dark:border-white/10 rounded-md grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x divide-black/10 dark:divide-white/10">
          {copy.stats.items.map((stat, i) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              icon={ICONS[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
