import { useSettings } from "../../context/SettingsContext";
import { countries } from "../../data/countries";
import { tools } from "../../data/tools";
import { Marquee } from "./Marquee";

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-4 px-6">
      <span className="h-px flex-1 max-w-[60px] sm:max-w-[100px] bg-black/10 dark:bg-white/10" />
      <span className="text-base sm:text-lg font-medium uppercase tracking-[0.15em] text-muted dark:text-muted-dark">
        {text}
      </span>
      <span className="h-px flex-1 max-w-[60px] sm:max-w-[100px] bg-black/10 dark:bg-white/10" />
    </div>
  );
}

export function MarqueeSection() {
  const { language, copy } = useSettings();

  const countryItems = countries.map((country) => (
    <span
      key={country.code}
      className="inline-flex items-center gap-2.5 rounded-full border border-black/10 dark:border-white/10 bg-bg/70 dark:bg-bg-dark/50 pl-2.5 pr-4 py-1.5"
    >
      <img
        src={`https://flagcdn.com/24x18/${country.code}.png`}
        alt=""
        width={24}
        height={18}
        className="rounded-sm"
        loading="lazy"
      />
      <span className="text-sm sm:text-base text-ink dark:text-ink-dark">{country[language]}</span>
    </span>
  ));

  const toolItems = tools.map((tool) => (
    <span
      key={tool.name}
      className="inline-flex items-center gap-2.5 rounded-full border border-black/10 dark:border-white/10 bg-bg/70 dark:bg-bg-dark/50 pl-1.5 pr-4 py-1.5"
    >
      <span className="grid place-items-center w-7 h-7 rounded-full bg-ink/5 dark:bg-white/10 text-[10px] font-bold tracking-tight text-gold dark:text-gold-dark">
        {tool.mono}
      </span>
      <span className="text-sm sm:text-base text-ink dark:text-ink-dark">{tool.name}</span>
    </span>
  ));

  return (
    <section className="py-16 sm:py-20 space-y-10">
      <SectionLabel text={copy.marquee.countriesLabel} />
      <Marquee items={countryItems} direction="left" />

      <SectionLabel text={copy.marquee.toolsLabel} />
      <Marquee items={toolItems} direction="right" />
    </section>
  );
}
