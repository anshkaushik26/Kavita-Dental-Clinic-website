/**
 * generate-favicon.mjs
 *
 * Renders the Kavita Dental Clinic tooth SVG at 16×16, 32×32 and 48×48,
 * then packs all three PNG frames into a valid ICO binary.
 *
 * Run: node generate-favicon.mjs
 * Output: public/favicon.ico
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "public", "favicon.ico");

// ── Brand colours ──────────────────────────────────────────────────
const BLUE   = "#1A56DB";   // --primary
const BG     = "#FFFFFF";   // white background

// ── The tooth path (from ToothIcon component) ──────────────────────
const TOOTH_PATH =
  "M7 3C5 3 4 4.5 4 6.5C4 9 5.5 10.5 6 12.5L7.5 17.5C8 19.5 8.5 21 9.5 21C10.5 21 11 20 11.5 18.5L12 17L12.5 18.5C13 20 13.5 21 14.5 21C15.5 21 16 19.5 16.5 17.5L18 12.5C18.5 10.5 20 9 20 6.5C20 4.5 19 3 17 3C15.5 3 14.5 3.5 13.5 4C13 4.3 12.5 4.5 12 4.5C11.5 4.5 11 4.3 10.5 4C9.5 3.5 8.5 3 7 3Z";

/**
 * Build an SVG at any pixel size.
 * The tooth occupies the central 20/24 of the viewport; we add a 10% inset
 * on each side via the viewBox so it never bleeds to the edge.
 */
function buildSvg(size) {
  // stroke-width scales with size (thinner at 16px, bolder at 48px)
  const sw = size <= 16 ? 1.4 : size <= 32 ? 1.6 : 1.75;

  return `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${size}" height="${size}"
    viewBox="1 1 22 22"
  >
    <rect width="${size}" height="${size}" fill="${BG}" rx="${Math.round(size * 0.18)}"/>
    <path
      d="${TOOTH_PATH}"
      fill="none"
      stroke="${BLUE}"
      stroke-width="${sw}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`;
}

/**
 * Render an SVG string to a raw PNG Buffer at the exact given size.
 */
async function renderPng(size) {
  const svgBuf = Buffer.from(buildSvg(size));
  return sharp(svgBuf)
    .resize(size, size)
    .png()
    .toBuffer();
}

/**
 * Pack multiple PNG buffers into a valid Windows ICO binary.
 *
 * ICO format:
 *   6-byte header  +  (N × 16-byte directory entries)  +  N PNG data blobs
 *
 * Modern browsers (Chrome, Firefox, Edge) fully support PNG-compressed ICO.
 */
function buildIco(pngBuffers, sizes) {
  const N = pngBuffers.length;
  const HEADER_SIZE = 6;
  const DIR_ENTRY_SIZE = 16;
  const dataOffset0 = HEADER_SIZE + N * DIR_ENTRY_SIZE;

  // Pre-calculate offsets
  const offsets = [];
  let offset = dataOffset0;
  for (const buf of pngBuffers) {
    offsets.push(offset);
    offset += buf.length;
  }

  const totalSize = offset;
  const ico = Buffer.alloc(totalSize);

  // ICONDIR header
  ico.writeUInt16LE(0, 0);          // reserved
  ico.writeUInt16LE(1, 2);          // type: 1 = ICO
  ico.writeUInt16LE(N, 4);          // image count

  // ICONDIRENTRY for each image
  for (let i = 0; i < N; i++) {
    const base = HEADER_SIZE + i * DIR_ENTRY_SIZE;
    const sz = sizes[i];
    const icoSize = sz >= 256 ? 0 : sz;   // ICO stores 256 as 0
    ico.writeUInt8(icoSize, base);          // width
    ico.writeUInt8(icoSize, base + 1);      // height
    ico.writeUInt8(0, base + 2);            // colour count (0 = no palette)
    ico.writeUInt8(0, base + 3);            // reserved
    ico.writeUInt16LE(1, base + 4);         // colour planes
    ico.writeUInt16LE(32, base + 6);        // bits per pixel
    ico.writeUInt32LE(pngBuffers[i].length, base + 8);  // data size
    ico.writeUInt32LE(offsets[i], base + 12);            // data offset
  }

  // Write PNG data blobs
  let writePos = dataOffset0;
  for (const buf of pngBuffers) {
    buf.copy(ico, writePos);
    writePos += buf.length;
  }

  return ico;
}

// ── Main ──────────────────────────────────────────────────────────
const SIZES = [16, 32, 48];

console.log("Rendering PNG frames…");
const pngs = await Promise.all(SIZES.map(renderPng));
SIZES.forEach((s, i) =>
  console.log(`  ${s}×${s}  →  ${pngs[i].length} bytes`)
);

console.log("Packing ICO…");
const ico = buildIco(pngs, SIZES);
fs.writeFileSync(OUT, ico);
console.log(`✓  Written ${ico.length} bytes → ${OUT}`);
