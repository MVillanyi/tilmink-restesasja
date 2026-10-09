# Til Sasja ♥

En lille hjemmeside til Sasja på vores seksmånedersdag, 19. oktober 2026.
Hun åbner en kuvert, og så kommer forsiden, seks ting jeg elsker ved hende,
hendes fjollede side, små minder, et album, et brev og en afslutning.

Siden er statisk (ingen server, ingen database) og bygges med
[Astro](https://astro.build). Den udgives automatisk på GitHub Pages:
**https://mvillanyi.github.io/tilmink-restesasja/**

---

## Ret teksten

**Al tekst og alle billedvalg ligger i én fil: [`src/indhold.ts`](src/indhold.ts).**

- Ret ordene direkte mellem anførselstegnene `' '`.
- `\n` giver et linjeskift, og `♥` bliver automatisk til et lille tegnet hjerte.
- Kommentarerne ved teksten fortæller, hvor ordene kommer fra:
  - `(dine ord)` er dine egne formuleringer fra jeres beskeder, let rettet.
  - `(Sasjas ord)` er hendes formulering, gengivet som hendes.
  - `(udkast)` er ny tekst skrevet til gaven. Den må du rette frit.
- **Brevet er et udkast.** Læs det, ret det, og sæt `godkendt: true`.
  Indtil da viser `npm run dev` en lille påmindelse over brevet, og
  udgivelsen på GitHub Pages stopper med beskeden *Brevet er ikke godkendt*,
  så et uredigeret udkast aldrig kommer ud ved et uheld. Sasja ser aldrig
  påmindelsen.
- Et kort eller en ting fjernes ved at slette hele `{ ... },`-blokken.
- De små skjulte noter (`hemmelighed`) og efterskriften (`ps`) kan rettes
  eller fjernes på samme måde.

## Billeder

Billederne ligger i [`src/assets/billeder/`](src/assets/billeder/).
Siden laver selv små, hurtige webkopier i flere størrelser, når den bygges.

**Nyt billede:** læg filen i mappen (jpg, png eller webp) og skriv filnavnet i
`src/indhold.ts`. Til albummet kopierer du bare en eksisterende blok:

```ts
{
  fil: 'nyt-billede.jpg',
  alt: 'Kort beskrivelse til skærmlæsere.',
  tekst: 'Billedtekst under billedet.',   // kan udelades
  dato: '19. oktober 2026',                // kun hvis du er sikker
  fokus: '50% 20%',                        // hvad der skal blive synligt ved beskæring
},
```

`fokus` styrer beskæringen: `'50% 0%'` holder toppen af billedet (godt, når
ansigterne er højt oppe), `'50% 50%'` holder midten. Ubrugte billeder kommer
ikke med på den udgivne side.

| Fil i projektet           | Original                                   | Bruges til                     |
| :------------------------ | :----------------------------------------- | :----------------------------- |
| `os-spejl-smil.jpg`       | IMG_0014.jpeg                              | Forsiden                       |
| `os-spejl-sloejfe.jpg`    | IMG_0015.jpeg                              | Reserve (samme øjeblik)        |
| `sasja-ved-bordet.jpg`    | IMG_0010.jpeg                              | Dit smil                       |
| `os-fjollede-ansigter.jpg`| IMG_2587.jpeg                              | Din fjollede side              |
| `os-frisoer-grin.jpg`     | 74030329-7465-4670-91B3-F15CC3B3A01E.jpeg  | Albummet                       |
| `sasja-folie.jpg`         | IMG_0093.jpeg                              | Din fjollede side              |
| `os-elevator.jpg`         | IMG_2870.jpeg                              | Albummet                       |
| `sasja-spejl-graa.jpg`    | 35AAFD3F-F3FD-400C-9CC1-858B678C96E5.jpeg  | Albummet                       |
| `sasja-laeser.jpg`        | IMG_0024(1).jpeg                           | Brevet                         |
| `sasja-laeser-2.jpg`      | IMG_0023(1).jpeg                           | Reserve                        |
| `sasja-laeser-taet.jpg`   | IMG_0025(1).jpeg                           | Reserve (tættere udsnit)       |

Originalerne i din ZIP-fil er ikke ændret.

## Se siden på din egen computer

Kræver [Node.js](https://nodejs.org) 22.12 eller nyere.

```sh
npm install
npm run dev
```

Åbn **http://localhost:4321/tilmink-restesasja/**. Siden opdaterer sig selv,
når du gemmer en ændring.

Sådan ser du den færdige udgave, præcis som den bliver udgivet:

```sh
npm run build      # tjekker indhold.ts for stavefejl i nøglerne og bygger til dist/
npm run kontrol    # tjekker, at alle billeder og links findes
npm run preview    # viser dist/ på http://localhost:4321/tilmink-restesasja/
```

Skriver du fx `tkest:` i stedet for `tekst:` i `src/indhold.ts`, stopper
`npm run build` med en besked om, hvad der er galt, i stedet for stille at
springe teksten over.

## Udgiv på GitHub Pages

Det sker automatisk via [`.github/workflows/udgiv.yml`](.github/workflows/udgiv.yml),
hver gang `main` opdateres. Første gang skal du kun gøre én ting:

1. Gå til repositoryets **Settings → Pages**.
2. Under **Build and deployment → Source** vælger du **GitHub Actions**.
3. Sæt `godkendt: true` ved brevet i `src/indhold.ts`, når du er tilfreds.
4. Flet pull requesten ind i `main` (eller kør workflowet
   **Actions → Udgiv på GitHub Pages → Run workflow**).

Efter et minuts tid ligger siden på https://mvillanyi.github.io/tilmink-restesasja/.

Godt at vide:

- Alle med linket kan se siden. Søgemaskiner bliver bedt om at holde sig væk
  (`noindex`), og forhåndsvisningen, når du sender linket, viser kun kuverten.
- **Mens repositoryet er offentligt, kan alt i det læses på github.com**. Det gælder
  også brevudkastet, de skjulte noter, kommentarerne i `indhold.ts`,
  reservebillederne og hele historikken. Hold det privat, indtil gaven er
  givet, og gør det offentligt lige før du udgiver.
- GitHub Pages fra et **privat** repository kræver GitHub Pro (eller en betalt
  organisation). På en gratis konto går siden offline, mens repositoryet er
  privat, og kommer igen, når det bliver offentligt, og workflowet har kørt.
- Pull requests bygges og kontrolleres af [`kontrol.yml`](.github/workflows/kontrol.yml),
  men udgives ikke.

## Eget domæne senere

Der skal ikke ændres noget i koden. Undermappen `/tilmink-restesasja/`
forsvinder af sig selv, fordi workflowet læser adressen fra Settings → Pages.

1. Køb domænet, og opret DNS-poster hos udbyderen:
   - **Hele domænet** (fx `sasjaogmarcus.dk`): fire `A`-poster til
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153` og `185.199.111.153`
     (og gerne `AAAA`-poster til `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153` og `2606:50c0:8003::153`).
   - **Et underdomæne** (fx `www.` eller `sasja.`): én `CNAME`-post til
     `mvillanyi.github.io`.
2. **Settings → Pages → Custom domain**: skriv domænet, tryk **Save**, og sæt
   flueben i **Enforce HTTPS**, når GitHub tillader det.
3. Kør workflowet igen (**Actions → Udgiv på GitHub Pages → Run workflow**).

En `CNAME`-fil er ikke nødvendig, når siden udgives med GitHub Actions.
Vil du bygge til et domæne på din egen computer, kan du sætte adressen selv:

```sh
SITE_URL=https://ditdomæne.dk BASE_PATH= npm run build
npm run kontrol
BASE_PATH= npm run preview
```

## Opbygning

```
src/
  indhold.ts            ← al tekst og alle billedvalg
  assets/billeder/      ← fotografierne
  components/           ← kuverten, forsiden, seks ting, fjollet, minder, album, brev, slut
  styles/side.css       ← farver, skrift og layout
  scripts/gave.ts       ← fotovisning, rolige overgange og dagtæller
astro.config.mjs        ← adresse og undermappe
.github/workflows/      ← udgivelse og kontrol
```

Skrifttyperne (Fraunces, Instrument Sans og Caveat) ligger på siden selv, så
der hentes intet fra Google. Siden respekterer telefonens indstilling for
mindre bevægelse og kan bruges med tastatur og skærmlæser.
