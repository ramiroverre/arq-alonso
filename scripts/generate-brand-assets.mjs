import { mkdirSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const ROOT = join(import.meta.dirname, "..");
const PUBLIC_DIR = join(ROOT, "public");
mkdirSync(PUBLIC_DIR, { recursive: true });

const INK = "#1A1A1A";
const GOLD = "#C1502E";
const BG = "#F5F1EC";
const MUTED = "#6B6560";

function markSvg({ size, radius }) {
  const s = size;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${radius}" fill="${INK}" />
  <path d="M32 14 L48 46 H16 Z" fill="none" stroke="${GOLD}" stroke-width="3.4" stroke-linejoin="round" />
  <line x1="24.5" y1="38" x2="39.5" y2="38" stroke="${GOLD}" stroke-width="3.4" stroke-linecap="round" />
</svg>`;
}

const faviconSvg = markSvg({ size: 64, radius: 14 });

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BG}" />
  <path d="M600 140 L680 260 L520 260 Z" fill="none" stroke="${GOLD}" stroke-width="7" stroke-linejoin="round" />
  <line x1="565" y1="220" x2="635" y2="220" stroke="${GOLD}" stroke-width="7" stroke-linecap="round" />
  <text x="600" y="340" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="52" letter-spacing="4" fill="${INK}">IGNACIO ALONSO</text>
  <text x="600" y="382" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="20" letter-spacing="2" fill="${MUTED}">ARQUITECTURA Y RENDER 3D &#183; MENDOZA, ARGENTINA</text>
</svg>`;

async function run() {
  await Promise.all([
    sharp(Buffer.from(faviconSvg)).resize(16, 16).png().toFile(join(PUBLIC_DIR, "favicon-16x16.png")),
    sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile(join(PUBLIC_DIR, "favicon-32x32.png")),
    sharp(Buffer.from(markSvg({ size: 180, radius: 0 })))
      .resize(180, 180)
      .png()
      .toFile(join(PUBLIC_DIR, "apple-touch-icon.png")),
    sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toFile(join(PUBLIC_DIR, "og-image.png")),
  ]);

  const fs = await import("fs");
  fs.writeFileSync(join(PUBLIC_DIR, "favicon.svg"), faviconSvg);

  console.log("Brand assets generated in /public");
}

run();
