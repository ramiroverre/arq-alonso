import { readdirSync, mkdirSync, statSync } from "fs";
import { join, extname, basename } from "path";
import sharp from "sharp";

const ROOT = join(import.meta.dirname, "..");
const SRC_DIR = join(ROOT, "images");
const OUT_DIR = join(ROOT, "public", "images-optimized");

const GALLERY_DIR = join(OUT_DIR, "gallery");
const FULL_DIR = join(OUT_DIR, "full");
const PORTRAIT_DIR = join(OUT_DIR, "portrait");
const HERO_DIR = join(OUT_DIR, "hero");

for (const dir of [GALLERY_DIR, FULL_DIR, PORTRAIT_DIR, HERO_DIR]) {
  mkdirSync(dir, { recursive: true });
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/#/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function categoryFromName(name) {
  const lower = name.toLowerCase();
  if (lower.includes("poolroom")) return "poolroom";
  if (lower.includes("finished")) return "finished";
  return "base";
}

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

async function writeVariant(inputPath, outputPath, { width, quality }) {
  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true, fit: "inside" })
    .webp({ quality })
    .toFile(outputPath);
}

async function run() {
  const files = readdirSync(SRC_DIR).filter((f) => [".jpg", ".jpeg"].includes(extname(f).toLowerCase()));
  const rows = [];

  for (const file of files) {
    const inputPath = join(SRC_DIR, file);
    const beforeSize = statSync(inputPath).size;
    const name = basename(file, extname(file));

    if (name === "Ignacio-Alonso") {
      const outputPath = join(PORTRAIT_DIR, "ignacio-alonso.webp");
      await writeVariant(inputPath, outputPath, { width: 900, quality: 80 });
      rows.push([file, "portrait", fmtKB(beforeSize), fmtKB(statSync(outputPath).size)]);
      continue;
    }

    if (name === "hero-background") {
      const outputPath = join(HERO_DIR, "hero-background.webp");
      await writeVariant(inputPath, outputPath, { width: 2400, quality: 72 });
      rows.push([file, "hero", fmtKB(beforeSize), fmtKB(statSync(outputPath).size)]);
      continue;
    }

    const match = name.match(/^Render#(\d+)\s*-\s*\(([^)]+)\)\s*-\s*(.+)$/i);
    if (!match) {
      console.warn(`Skipping unrecognized file: ${file}`);
      continue;
    }
    const [, number, , category] = match;
    const slug = `render-${number}-${slugify(category)}`;

    const galleryPath = join(GALLERY_DIR, `${slug}.webp`);
    await writeVariant(inputPath, galleryPath, { width: 800, quality: 73 });

    const fullPath = join(FULL_DIR, `${slug}.webp`);
    await writeVariant(inputPath, fullPath, { width: 1920, quality: 80 });

    rows.push([
      file,
      categoryFromName(category),
      fmtKB(beforeSize),
      `${fmtKB(statSync(galleryPath).size)} / ${fmtKB(statSync(fullPath).size)}`,
    ]);
  }

  console.log("\nFile                                              Category   Before    After (gallery/full)");
  console.log("-".repeat(100));
  for (const [file, category, before, after] of rows) {
    console.log(`${file.padEnd(50)} ${category.padEnd(10)} ${before.padEnd(9)} ${after}`);
  }
  console.log(`\nDone. Optimized ${rows.length} images into ${OUT_DIR}`);
}

run();
