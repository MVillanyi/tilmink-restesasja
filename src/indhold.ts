/*
 * ════════════════════════════════════════════════════════════════════
 *   AL TEKST OG ALLE BILLEDVALG PÅ SIDEN BOR HER
 * ════════════════════════════════════════════════════════════════════
 *
 *   Tekst ........ ret direkte mellem anførselstegnene ' '.
 *                  Brug \n for et linjeskift.
 *   Billeder ..... læg filen i  src/assets/billeder/  og skriv filnavnet
 *                  i  fil: '...'.  Ubrugte reserver ligger allerede der:
 *                    os-spejl-sloejfe.jpg     (samme øjeblik som forsiden)
 *                    sasja-laeser-2.jpg       (samme som brevbilledet)
 *                    sasja-laeser-taet.jpg    (tættere udgave af brevbilledet)
 *   Fokus ........ hvilken del af billedet der skal blive synlig, når det
 *                  beskæres: '50% 0%' = midt for og helt oppe.
 *   Albummet ..... tilføj flere billeder ved at kopiere en { ... }-blok.
 *
 *   Kommentarerne ved teksten siger, hvor ordene kommer fra:
 *     (dine ord)    dine egne formuleringer fra jeres beskeder, let rettet
 *     (Sasjas ord)  hendes formulering, gengivet som hendes
 *     (udkast)      ny tekst skrevet til gaven – ret frit
 *
 *   HUSK: Brevet er et udkast. Læs det, ret det, og sæt  godkendt: true.
 *   Indtil da står der en lille påmindelse, men KUN når du kører siden
 *   lokalt. Sasja ser den aldrig.
 * ════════════════════════════════════════════════════════════════════
 */
import type { Billede, Minde, Ting } from './lib/typer';

export const indhold = {
  side: {
    titel: 'Til Sasja ♥',
    beskrivelse: 'En lille gave. Fra mig.',
  },

  // 1 · Kuverten, hun åbner først
  kuvert: {
    til: 'Til Sasja.',
    fra: 'Fra mig. ♥',
    knap: 'Åbn din gave',
    kort: 'Seks måneder', // står på kortet, der glider op
    stempel: ['SEKS MÅNEDER', '19.10.2026'], // poststemplet; slet linjen for at fjerne det
  },

  // 2 · Det første syn
  forside: {
    overskrift: ['Sasja.', 'Min yndlings.'],
    undertekst: 'Seks måneder med dig. Og så mange små øjeblikke, jeg holder af.',
    datolinje: '19. april · 19. oktober 2026',
    videre: 'Der er noget, jeg gerne vil fortælle dig.',
    billede: {
      fil: 'os-spejl-smil.jpg',
      alt: 'Sasja og Marcus i et spejl. Sasja har en sort sløjfe i håret og tager billedet, Marcus står tæt bag hende og smiler.',
      fokus: '50% 0%',
    } satisfies Billede,
  },

  // Lille dagtæller. Regnes i dansk tid fra kærestedagen.
  dage: {
    vis: true,
    start: '2026-04-19',
    tekst: '{dage} dage med dig – og vi tæller videre.',
    // På selve seksmånedersdagen står der i stedet:
    jubilaeum: '2026-10-19',
    jubilaeumTekst: 'Seks måneder i dag ♥',
  },

  // 3 · Seks ting, jeg elsker ved dig
  seksTing: {
    overskrift: 'Seks ting, jeg elsker ved dig',
    ting: [
      {
        titel: 'Dit smil.',
        note: '(Måske lige nu?)', // (udkast – gaven er jo selv en overraskelse)
        // (dine ord)
        tekst: 'Det helt særlige smil, du får, når jeg gør dig glad med noget, du ikke havde regnet med. Det er så meget det værd at se dig smile sådan.',
        billede: {
          fil: 'sasja-ved-bordet.jpg',
          alt: 'Sasja ved et bord med spisepinde i hånden og et lille smil.',
          tekst: 'Dig, på den anden side af bordet.', // (udkast)
          fokus: '50% 22%',
        },
      },
      {
        titel: 'Din fjollede side.',
        // (dine ord: "sødt grin", "smile som et fjols")
        tekst: 'Dit søde grin og alle dine fjollerier. Du får mig til at smile som et fjols.',
      },
      {
        titel: 'Dit store hjerte.',
        // (dine ord)
        tekst: 'Du har masser af plads i hjertet til andre mennesker. Det siger så meget om, hvem du er.',
      },
      {
        titel: 'Dine kram.',
        // (dine ord: "stå kramme, putte kramme, sidde kramme")
        // Hvert ord står, ligger og sidder lidt, som det siger.
        stillinger: ['Stå-kramme,', 'putte-kramme,', 'sidde-kramme.'],
        tekst: 'Jeg er stadig ret stor fan af dem alle sammen.',
        hemmelighed: { knap: 'Et kram mere?', tekst: 'Ja, også lige ét mere.' },
      },
      {
        titel: 'Dine øjne.',
        // (dine ord)
        tekst: 'Du har smukke øjne. Og du er smuk hver dag i mine.',
      },
      {
        titel: 'Din kærlige side.',
        // (udkast ud fra Sasjas beskeder, hvor hun lige skriver for at minde dig om,
        //  at hun elsker dig – og dine ord om at passe på hinanden)
        tekst: 'Når du lige skriver for at minde mig om, at du elsker mig. Og at du har lyst til at passe på mig, ligesom jeg vil med dig.',
      },
    ] satisfies Ting[],
  },

  // 3½ · Din fjollede side får sit eget opslag med de fjollede billeder
  fjollet: {
    overtekst: 'Bevismateriale', // (udkast)
    overskrift: ['Vi kan også godt være seriøse.', 'Nogle gange.'], // (udkast)
    billeder: [
      {
        fil: 'os-fjollede-ansigter.jpg',
        alt: 'Sasja og Marcus i et tæt spejlbillede. Hun rækker tunge og blinker, og han laver trutmund og holder om hende.',
        fokus: '50% 0%',
      },
      {
        fil: 'sasja-folie.jpg',
        alt: 'Sasja smiler med folie i hele håret.',
        tekst: 'Også sådan her er du min yndlings.', // (udkast)
        fokus: '50% 0%',
      },
    ] satisfies Billede[],
  },

  // 4 · Små minder om os (uden datoer)
  minder: {
    overskrift: 'Små minder om os',
    // (Sasjas ord, gengivet – og så dit svar)
    indledning: 'Du skrev engang, at du får sommerfugle i maven, når du tænker tilbage på nogle af vores øjeblikke. Her er et par af mine.',
    kort: [
      {
        titel: 'Dig, mig og paraplyen.',
        // (dine ord)
        tekst: 'Vores første ordentlige date. Dig med paraplyen og den glæde, jeg stadig husker.',
        tegning: 'paraply',
      },
      {
        titel: 'Vores tur til Sverige.',
        // (dine ord: "super hyggelig")
        tekst: 'Den var superhyggelig. Jeg vil rigtig gerne af sted med dig igen.',
        tegning: 'sverige',
      },
      {
        titel: 'En dør ind til din verden.',
        // (dine ord fra aftenen 30. maj; 'Roskilde-pladsen' er Sasjas ord fra dagen efter)
        tekst: 'Dagen på Roskilde-pladsen. Tak, fordi du lukkede mig ind. Jeg glæder mig til at være med mange gange endnu.',
        tegning: 'doer',
      },
      {
        titel: 'Morgenputte kl. 6.',
        // (dine ord)
        tekst: 'Rammer bare anderledes. Hverdagsmorgener er skidehårde, fordi jeg bare har lyst til at blive liggende med dig.',
        tegning: 'morgen',
      },
      {
        titel: 'Skildpaddeisen.',
        // (dine ord + udkast i den skjulte note)
        tekst: 'Jeg mener stadig, du burde blive sponsoreret.',
        tegning: 'skildpadde',
        stempel: 'Sponsor søges', // (udkast)
        hemmelighed: {
          knap: 'Og sponsoratet?',
          tekst: 'Din ansøgning om skildpaddeis-sponsorat er stadig under behandling.',
        },
      },
    ] satisfies Minde[],
  },

  // 5 · Vores lille album. Tilføj gerne flere billeder.
  album: {
    overskrift: 'Små øjeblikke med dig.',
    billeder: [
      {
        fil: 'os-elevator.jpg',
        alt: 'Sasja og Marcus i et spejlbillede. Han har jakken over armen og en pose i hånden.',
        tekst: 'Dig og mig.', // (udkast)
        fokus: '50% 0%',
      },
      {
        fil: 'os-frisoer-grin.jpg',
        alt: 'Marcus griner tæt på kameraet. Bag ham sidder Sasja med folie i håret, rækker tunge og laver peacetegn.',
        // (udkast ud fra dine ord: "mærkelige ting for at se dig smile", "yndlingsaktivitet")
        tekst: 'At gøre mærkelige ting for at se dig smile. Stadig en yndlingsaktivitet.',
        fokus: '50% 70%',
      },
      {
        fil: 'sasja-spejl-graa.jpg',
        alt: 'Sasja tager et roligt spejlbillede i en grå frakke.',
        tekst: 'Du er helt fantastisk, som du er.', // (dine ord)
        format: '3 / 4',
        fokus: '50% 20%',
      },
    ] satisfies Billede[],
  },

  // 6 · Brevet. UDKAST – læs og ret, før du giver gaven.
  //     Bygget op omkring dine egne ord fra jeres beskeder.
  brev: {
    godkendt: true,
    overskrift: 'Et brev til dig',
    billede: {
      fil: 'sasja-laeser.jpg',
      alt: 'Sasja læser en bog i lyset fra en lampe.',
      tekst: 'En god bog. Lidt nus. Dig helt tæt på.', // (udkast)
      fokus: '50% 20%',
    } satisfies Billede,
    hilsen: 'Min skat,',
    // Hvert afsnit adskilles af en tom linje.
    tekst: `
Et halvt år med dig. Jeg ville gerne give dig noget, du kan vende tilbage til. Et sted, hvor jeg får sat ord på, hvor meget jeg elsker dig, og på alle de små ting ved dig, der betyder så meget for mig.

Du er det dejligste, sødeste menneske, og jeg er så glad for den tid, vi har sammen. Du giver mig så meget varme i hjertet. Jeg elsker de små øjeblikke, hvor du pludselig dukker op i mine tanker, og jeg sidder og smiler helt fjollet for mig selv.

Jeg elsker din kærlige side. Og din fjollede side, og hvor tossede vi kan være sammen. Når jeg overrasker dig og ser dig blive glad, gør det også mig så glad.

Jeg tænker stadig på vores første ordentlige date, og hvordan du løb med paraplyen. Du var så hamrende glad. Det er sådan et lille øjeblik, jeg kan se helt tydeligt for mig, fordi det var så meget dig.

Men det er nok de helt almindelige ting, jeg holder allermest af. At vågne med dig og ikke have travlt. At holde dig på låret, mens vi kører. At kunne dufte dig på puden i sofaen. At se dig forsvinde ind i en bog. Og at holde om dig og høre dit hjerte banke af sted og så stille og roligt falde til ro. Den ro, der kommer, når vi er tæt på hinanden, er noget af det dejligste, jeg kender.

Og jeg glæder mig til alt det, der kommer. Flere ture, flere morgener, flere kram, flere bøger og alle de minder, vi ikke kender endnu.

Tillykke med vores seks måneder, min skat.

Og så siger jeg det bare igen, for tusinde gang, og der kommer mange tusinde endnu:
`,
    afslutning: 'Jeg elsker dig så så så så så meget, min yndlings. ♥',
    underskrift: 'Din Marcus',
    // Lille efterskrift under brevet. Sæt til '' for at fjerne det.
    ps: 'PS. Ja, din kæmpe softy har lavet en hel hjemmeside.', // (udkast ud fra Sasjas "kæmpe softy")
  },

  // 7 · Afslutningen
  slut: {
    forLinje: '', // en lille linje over afslutningen, hvis du vil have en
    linje: 'Min yndlings. Jeg elsker dig.',
    underskrift: 'Din Marcus ♥',
    tilbage: 'Tilbage til begyndelsen',
    kuvertIgen: 'Åbn kuverten igen',
  },

  // Små ord til knapper i fotovisningen
  fotovisning: {
    luk: 'Luk',
    forrige: 'Forrige billede',
    naeste: 'Næste billede',
    aabn: 'Vis billedet i fuld størrelse',
  },
};
