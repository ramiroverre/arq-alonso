import { useSettings } from "../../context/SettingsContext";

const RV_STUDIO_WHATSAPP_MESSAGE =
  "¡Hola! Vi esta web y me gustaría cotizar una página similar para mi negocio.";

export function Footer() {
  const { copy } = useSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-muted/15 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="font-serif text-lg text-ink dark:text-ink-dark">Ignacio Alonso</p>
          <p className="text-sm text-muted dark:text-muted-dark mt-1 max-w-md">{copy.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5492615074929"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-sm text-muted dark:text-muted-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/ignacioalonsoarq/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-sm text-muted dark:text-muted-dark hover:text-gold dark:hover:text-gold-dark transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="text-center text-xs text-muted dark:text-muted-dark mt-8">
        © {year} Ignacio Alonso. {copy.footer.rights}
      </p>
      <p className="text-center text-xs text-muted dark:text-muted-dark mt-2">
        {copy.footer.developedBy}{" "}
        <a
          href={`https://wa.me/5492612505160?text=${encodeURIComponent(RV_STUDIO_WHATSAPP_MESSAGE)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold dark:text-gold-dark hover:underline"
        >
          RV Studio
        </a>
      </p>
    </footer>
  );
}
