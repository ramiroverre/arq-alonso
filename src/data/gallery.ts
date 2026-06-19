import type { Language } from "./copy";

export type GalleryCategory = "base" | "finished" | "poolroom";

export interface GalleryItem {
  id: string;
  number: number;
  category: GalleryCategory;
  gallerySrc: string;
  fullSrc: string;
}

const categoryAlt: Record<GalleryCategory, Record<Language, string>> = {
  base: { es: "estudio de render", en: "render study" },
  finished: { es: "render final", en: "final render" },
  poolroom: { es: "espacio con piscina", en: "pool space" },
};

function item(number: number, category: GalleryCategory): GalleryItem {
  const id = `render-${number}-${category}`;
  return {
    id,
    number,
    category,
    gallerySrc: `/images-optimized/gallery/${id}.webp`,
    fullSrc: `/images-optimized/full/${id}.webp`,
  };
}

export const gallery: GalleryItem[] = [
  item(1, "base"),
  item(1, "finished"),
  item(1, "poolroom"),
  item(2, "base"),
  item(2, "finished"),
  item(2, "poolroom"),
  item(3, "base"),
  item(3, "finished"),
  item(3, "poolroom"),
  item(4, "base"),
  item(4, "finished"),
  item(4, "poolroom"),
  item(5, "base"),
  item(5, "finished"),
  item(6, "base"),
  item(6, "finished"),
  item(7, "base"),
  item(7, "finished"),
  item(8, "base"),
  item(9, "base"),
  item(10, "base"),
  item(11, "base"),
  item(12, "base"),
  item(13, "base"),
  item(14, "base"),
  item(15, "base"),
  item(20, "base"),
  item(21, "base"),
  item(22, "base"),
  item(23, "base"),
  item(24, "base"),
  item(25, "base"),
  item(26, "base"),
  item(27, "base"),
  item(28, "base"),
  item(29, "base"),
];

export function getGalleryAlt(item: GalleryItem, language: Language): string {
  const label = categoryAlt[item.category][language];
  return language === "es"
    ? `Render arquitectónico 3D N°${item.number} — ${label}`
    : `3D architectural render #${item.number} — ${label}`;
}
