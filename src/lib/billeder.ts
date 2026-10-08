import type { ImageMetadata } from 'astro';

const filer = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/billeder/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

/** Finder et billede i src/assets/billeder/ ud fra filnavnet i indhold.ts. */
export function hentBillede(fil: string): ImageMetadata {
  const fundet = filer[`../assets/billeder/${fil}`];
  if (!fundet) {
    const findes = Object.keys(filer).map((k) => k.split('/').pop()).join(', ');
    throw new Error(
      `Billedet "${fil}" findes ikke i src/assets/billeder/. ` +
        `Tjek stavningen i src/indhold.ts. Disse findes: ${findes}`,
    );
  }
  return fundet.default;
}
