import { gallery, type GalleryItem } from "./gallery";

export type RoomCategory = "living" | "dining" | "bedroom";

export interface PricingTier {
  id: "base" | "premium" | "elite";
  minSqm: number;
  maxSqm: number | null;
  minPrice: number;
  maxPrice: number | null;
}

export const gentlemenDesignPricing: PricingTier[] = [
  { id: "base", minSqm: 40, maxSqm: 80, minPrice: 3500, maxPrice: 7000 },
  { id: "premium", minSqm: 80, maxSqm: 150, minPrice: 7500, maxPrice: 14000 },
  { id: "elite", minSqm: 150, maxSqm: null, minPrice: 15000, maxPrice: null },
];

export const gentlemenDesignGallery: Record<RoomCategory, string[]> = {
  living: [
    "render-1-finished",
    "render-1-poolroom",
    "render-2-finished",
    "render-8-base",
    "render-9-base",
    "render-20-base",
    "render-21-base",
    "render-22-base",
  ],
  dining: [
    "render-3-finished",
    "render-3-poolroom",
    "render-4-finished",
    "render-10-base",
    "render-11-base",
    "render-23-base",
    "render-24-base",
    "render-25-base",
  ],
  bedroom: [
    "render-5-finished",
    "render-6-finished",
    "render-7-finished",
    "render-12-base",
    "render-13-base",
    "render-26-base",
    "render-27-base",
    "render-28-base",
  ],
};

export function resolveGalleryItems(ids: string[]): GalleryItem[] {
  return ids
    .map((id) => gallery.find((item) => item.id === id))
    .filter((item): item is GalleryItem => Boolean(item));
}
