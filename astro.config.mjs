// @ts-check
import { defineConfig } from 'astro/config';
import { readFile, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/*
 * Adresse og undermappe
 * ---------------------
 * GitHub Actions sætter SITE_URL og BASE_PATH automatisk ud fra
 * Settings → Pages (se .github/workflows/udgiv.yml).
 *
 *  - Uden eget domæne:  https://mvillanyi.github.io  +  /tilmink-restesasja
 *  - Med eget domæne:   https://ditdomæne.dk         +  /   (sker af sig selv)
 *
 * Standardværdierne herunder bruges, når du kører siden lokalt.
 */
const site = process.env.SITE_URL || 'https://mvillanyi.github.io';
const base = process.env.BASE_PATH ?? '/tilmink-restesasja';

/** Fjerner billedfiler, som siden ikke bruger (fx reservebilleder og originaler). */
const kunBrugteBilleder = {
  name: 'kun-brugte-billeder',
  hooks: {
    /** @param {{ dir: URL, logger: { info: (m: string) => void } }} param0 */
    'astro:build:done': async ({ dir, logger }) => {
      const rodmappe = fileURLToPath(dir);
      const aktiver = join(rodmappe, '_astro');
      const filer = await readdir(aktiver);
      let brugt = '';
      for (const f of filer) if (/\.(css|js)$/.test(f)) brugt += await readFile(join(aktiver, f), 'utf8');
      for (const f of await readdir(rodmappe)) if (f.endsWith('.html')) brugt += await readFile(join(rodmappe, f), 'utf8');
      let fjernet = 0;
      for (const f of filer) {
        if (/\.(jpe?g|png|webp|avif)$/i.test(f) && !brugt.includes(`_astro/${f}`)) {
          await rm(join(aktiver, f));
          fjernet++;
        }
      }
      logger.info(`Fjernede ${fjernet} ubrugte billedfiler`);
    },
  },
};

export default defineConfig({
  site,
  base: base || '/',
  devToolbar: { enabled: false },
  integrations: [kunBrugteBilleder],
});
