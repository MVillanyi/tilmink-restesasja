// Kontrollerer den byggede side i dist/: at alle lokale links, billeder,
// skrifttyper og scripts findes og ligger under base-stien.
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;

// Base-stien læses fra selve den byggede side, medmindre BASE_PATH er sat.
async function findBase() {
  if (process.env.BASE_PATH !== undefined) return process.env.BASE_PATH;
  try {
    const html = await readFile(join(dist, 'index.html'), 'utf8');
    const m = html.match(/(?:href|src)="([^"]*?)_astro\//);
    if (m) return m[1];
  } catch {}
  return '/tilmink-restesasja';
}
const base = ('/' + (await findBase()).replace(/^\/+|\/+$/g, '') + '/').replace(/^\/\/$/, '/');

async function* filerI(dir) {
  for (const navn of await readdir(dir)) {
    const sti = join(dir, navn);
    if ((await stat(sti)).isDirectory()) yield* filerI(sti);
    else yield sti;
  }
}

const fejl = [];
const tjekket = new Set();

async function tjek(url, fra) {
  if (!url || /^(data:|mailto:|tel:|https?:|#|%23|javascript:)/i.test(url)) return;
  const ren = decodeURI(url.split('#')[0].split('?')[0]);
  if (!ren) return;
  const nøgle = `${fra}→${ren}`;
  if (tjekket.has(nøgle)) return;
  tjekket.add(nøgle);
  if (!ren.startsWith('/')) {
    fejl.push(`${fra}: relativ sti "${url}" (forventede en sti under ${base})`);
    return;
  }
  if (!ren.startsWith(base) && ren + '/' !== base) {
    fejl.push(`${fra}: "${url}" ligger ikke under base-stien ${base}`);
    return;
  }
  let sti = join(dist, ren.slice(base.length));
  try {
    if ((await stat(sti)).isDirectory()) sti = join(sti, 'index.html');
    await stat(sti);
  } catch {
    fejl.push(`${fra}: "${url}" findes ikke i dist/`);
  }
}

let antal = 0;
for await (const fil of filerI(dist)) {
  const navn = relative(dist, fil).split(sep).join('/');
  if (fil.endsWith('.html')) {
    const html = await readFile(fil, 'utf8');
    for (const [, url] of html.matchAll(/\s(?:src|href|poster|data-fuld)="([^"]+)"/g)) await tjek(url, navn);
    for (const [, sæt] of html.matchAll(/\ssrcset="([^"]+)"/g))
      for (const del of sæt.split(',')) await tjek(del.trim().split(/\s+/)[0], navn);
    for (const [, url] of html.matchAll(/url\((?:'|")?([^'")]+)(?:'|")?\)/g)) await tjek(url, navn);
    antal++;
  } else if (fil.endsWith('.css')) {
    const css = await readFile(fil, 'utf8');
    for (const [, url] of css.matchAll(/url\((?:'|")?([^'")]+)(?:'|")?\)/g)) await tjek(url, navn);
  }
}

if (antal === 0) fejl.push('Ingen HTML-filer fundet i dist/. Er siden bygget?');
if (fejl.length) {
  console.error(`✗ ${fejl.length} problem(er):\n  ` + fejl.join('\n  '));
  process.exit(1);
}
console.log(`✓ ${antal} side(r) og ${tjekket.size} henvisninger kontrolleret under ${base}`);
