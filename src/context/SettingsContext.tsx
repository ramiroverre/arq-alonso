import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { copy, type Language } from "../data/copy";

type Theme = "light" | "dark";

interface SettingsContextValue {
  theme: Theme;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
  copy: (typeof copy)[Language];
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

function getInitialLanguage(): Language {
  const stored = localStorage.getItem("language");
  return stored === "en" ? "en" : "es";
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleLanguage = () => setLanguage((prev) => (prev === "es" ? "en" : "es"));

  return (
    <SettingsContext.Provider
      value={{ theme, toggleTheme, language, toggleLanguage, copy: copy[language] }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within a SettingsProvider");
  return ctx;
}
