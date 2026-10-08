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
 *   Fokus ........ hvilken del af billedet der skal blive synlig når det
 *                  beskæres: '50% 0%' = midt for og helt oppe.
 *   Albummet ..... tilføj flere billeder ved at kopiere en { ... }-blok.
 *
 *   Kommentarerne ved teksten siger hvor ordene kommer fra:
 *     (dine ord)    dine egne formuleringer fra jeres beskeder, let rettet
 *     (Sasjas ord)  hendes formulering, gengivet som hendes
 *     (udkast)      ny tekst skrevet til gaven. Ret frit.
 *
 *   Teksten bruger få kommaer og ingen tankestreger. Sådan skriver du selv.
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

  // 1 · Kuverten hun åbner først
  kuvert: {
    til: 'Til Sasja.',
    fra: 'Fra mig. ♥',
    knap: 'Åbn din gave',
    kort: 'Seks måneder', // står på kortet der glider op
    stempel: ['SEKS MÅNEDER', '19.10.2026'], // poststemplet; slet linjen for at fjerne det
  },

  // 2 · Det første syn
  forside: {
    overskrift: ['Sasja.', 'Min yndlings.'],
    // (dine ord: "du fylder mit hjerte helt helt helt op")
    undertekst: 'Seks måneder med dig. Og du fylder mit hjerte helt helt helt op.',
    datolinje: '19. april · 19. oktober 2026',
    videre: 'Jeg har så meget jeg gerne vil fortælle dig.', // (udkast)
    billede: {
      fil: 'os-spejl-smil.jpg',
      alt: 'Sasja og Marcus i et spejl. Sasja har en sort sløjfe i håret og tager billedet. Marcus står tæt bag hende og smiler.',
      fokus: '50% 0%',
    } satisfies Billede,
  },

  // Lille dagtæller. Regnes i dansk tid fra kærestedagen.
  dage: {
    vis: true,
    start: '2026-04-19',
    tekst: '{dage} dage som din kæreste. Og jeg er stadig helt vild med dig.', // (udkast)
    // På selve seksmånedersdagen står der i stedet:
    jubilaeum: '2026-10-19',
    jubilaeumTekst: 'Seks måneder i dag ♥',
  },

  // 3 · Seks ting jeg elsker ved dig
  seksTing: {
    overskrift: 'Seks ting jeg elsker ved dig',
    indledning: 'Jeg kunne sagtens have skrevet hundrede.', // (udkast) Sæt til '' for at fjerne den
    ting: [
      {
        titel: 'Dit smil.',
        note: '(Måske lige nu?)', // (udkast, gaven er jo selv en overraskelse)
        // (dine ord: "helt specielt smil", "så meget det værd", "det gør også mig så glad")
        tekst: 'Du får sådan et helt specielt smil når jeg gør dig glad med noget du ikke havde regnet med. Det er så meget det værd at se dig smile sådan. For det gør også mig så glad.',
        billede: {
          fil: 'sasja-ved-bordet.jpg',
          alt: 'Sasja ved et bord med spisepinde i hånden og et lille smil.',
          tekst: 'På den anden side af bordet sidder min yndlings.', // (udkast)
          fokus: '50% 22%',
        },
      },
      {
        titel: 'Din fjollede side.',
        // (dine ord: "sødt grin", "smile som et fjols")
        tekst: 'Dit søde grin og alle dine fjollerier. Du får mig til at smile som et fjols. Hver eneste gang.',
      },
      {
        titel: 'Dit store hjerte.',
        // (dine ord)
        tekst: 'Du har masser af plads i hjertet til andre mennesker. Det siger så mange gode ting om hvem du er. Du er bare den dejligste person.',
      },
      {
        titel: 'Dine kram.',
        // (dine ord: "stå kramme, putte kramme, sidde kramme",
        //  "glæder mig så meget til at holde om dig igen")
        // Hvert ord står, ligger og sidder lidt som det siger.
        stillinger: ['Stå-kramme.', 'Putte-kramme.', 'Sidde-kramme.'],
        tekst: 'Jeg er kæmpe fan af dem alle sammen. Og jeg glæder mig altid til at holde om dig igen.',
        hemmelighed: { knap: 'Et kram mere?', tekst: 'Ja. Altid lige ét mere.' },
      },
      {
        titel: 'Dine øjne.',
        // (dine ord)
        tekst: 'Du har så smukke øjne. Og du er smuk hver eneste dag i mine.',
      },
      {
        titel: 'Din kærlige side.',
        // (udkast ud fra Sasjas beskeder hvor hun lige skriver for at minde dig om
        //  at hun elsker dig, og dine ord om at passe på hinanden)
        tekst: 'Når du lige skriver for at minde mig om at du elsker mig. Og det gør mig så glad at du har lyst til at passe på mig ligesom jeg vil med dig.',
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
        alt: 'Sasja og Marcus i et tæt spejlbillede. Hun rækker tunge og blinker. Han laver trutmund og holder om hende.',
        fokus: '50% 0%',
      },
      {
        fil: 'sasja-folie.jpg',
        alt: 'Sasja smiler med folie i hele håret.',
        tekst: 'Også med folie i håret er du min yndlings.', // (udkast)
        fokus: '50% 0%',
      },
    ] satisfies Billede[],
  },

  // 4 · Små minder om os (uden datoer)
  minder: {
    overskrift: 'Mine sommerfugle', // (udkast ud fra Sasjas "sommerfugle i maven")
    // (Sasjas ord gengivet, og så dit svar som udkast)
    indledning: 'Du skrev engang at du får sommerfugle i maven når du tænker tilbage på nogle af vores øjeblikke. Det gør jeg også. Her er et par af mine.',
    kort: [
      {
        titel: 'Dig og mig og paraplyen.',
        // (dine ord: "vores første ordentlige date", "du løb med paraplyen", "så hamrende glad")
        tekst: 'Vores første ordentlige date. Du løb med paraplyen og var så hamrende glad. Jeg kan stadig se dig for mig.',
        tegning: 'paraply',
      },
      {
        titel: 'Vores tur til Sverige.',
        // (dine ord: "super hyggelig", og din idé om at tage bogen med og læse sammen)
        tekst: 'Den var super hyggelig. Jeg vil så gerne af sted med dig igen. Og så tager vi en bog med og læser sammen.',
        tegning: 'sverige',
      },
      {
        titel: 'En dør ind til din verden.',
        // (dine ord fra aftenen 30. maj; 'Roskilde-pladsen' er Sasjas ord fra dagen efter)
        tekst: 'Dagen på Roskilde-pladsen. Tak fordi du lukkede mig ind. Jeg glæder mig til at være med dig mange gange endnu.',
        tegning: 'doer',
      },
      {
        titel: 'Morgenputte kl. 6.',
        // (dine ord + udkast i den skjulte note)
        tekst: 'Rammer bare anderledes. Det er så dejligt at vågne med dig. Hverdagsmorgener er skidehårde fordi jeg bare har lyst til at blive liggende.',
        tegning: 'morgen',
        hemmelighed: { knap: 'Snooze?', tekst: 'Bare fem minutter mere med dig.' },
      },
      {
        titel: 'Skildpaddeisen.',
        // (dine ord + udkast i den skjulte note)
        tekst: 'Jeg mener stadig du burde blive sponsoreret.',
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
    overskrift: 'Mine yndlingsbilleder af dig', // (udkast)
    billeder: [
      {
        fil: 'os-elevator.jpg',
        alt: 'Sasja og Marcus i et spejlbillede. Han har jakken over armen og en pose i hånden.',
        tekst: 'Mig og min lækre søde kærlige kæreste.', // (dine ord)
        fokus: '50% 0%',
      },
      {
        fil: 'os-frisoer-grin.jpg',
        alt: 'Marcus griner tæt på kameraet. Bag ham sidder Sasja med folie i håret. Hun rækker tunge og laver peacetegn.',
        // (udkast ud fra dine ord: "mærkelige ting for at se dig smile", "yndlingsaktivitet")
        tekst: 'At gøre mærkelige ting for at se dig smile. Stadig min yndlingsaktivitet.',
        fokus: '50% 70%',
      },
      {
        fil: 'sasja-spejl-graa.jpg',
        alt: 'Sasja tager et roligt spejlbillede i en grå frakke.',
        tekst: 'Du er helt fantastisk som du er.', // (dine ord)
        format: '3 / 4',
        fokus: '50% 20%',
      },
    ] satisfies Billede[],
  },

  // 6 · Brevet. Bygget op omkring dine egne ord fra jeres beskeder.
  //     Læs og ret det, før du giver gaven.
  brev: {
    godkendt: true,
    overskrift: 'Et kærlighedsbrev til dig',
    billede: {
      fil: 'sasja-laeser.jpg',
      alt: 'Sasja læser en bog i lyset fra en lampe.',
      tekst: 'En god bog. Lidt nus. Dig helt tæt på.', // (udkast)
      fokus: '50% 20%',
    } satisfies Billede,
    hilsen: 'Min skat',
    // Hvert afsnit adskilles af en tom linje.
    tekst: `
Et halvt år med dig. Jeg ville give dig noget du kan vende tilbage til. Så her er et lille sted hvor jeg har samlet alt det jeg elsker ved dig. Eller i hvert fald en start.

Du er det dejligste og sødeste menneske og jeg er så glad for den tid vi har sammen. Du giver mig simpelthen så meget varme i hjertet.

Jeg elsker de små øjeblikke hvor du pludselig dukker op i mine tanker. Nogle gange er det dig der løber med paraplyen og er så hamrende glad. Nogle gange er det bare dit søde grin. Så sidder jeg der og smiler helt fjollet for mig selv.

Jeg elsker din kærlige side og din fjollede side. Og hvor tossede vi kan være sammen. Du gør mig så glad skat. Det skal du bare vide.

Men det er nok de helt almindelige ting jeg elsker allermest. At vågne med dig og ikke have travlt. At holde dig på låret mens vi kører. At kunne dufte dig på min pude i sofaen. At se dig forsvinde ind i en bog. Og at holde om dig og høre dit hjerte banke af sted og så stille og roligt falde til ro. Den ro der kommer når vi er tæt på hinanden er noget af det dejligste jeg kender.

Og jeg glæder mig så meget til alt det der kommer. Flere ture og flere morgener. Flere kram og flere bøger. Og alle de minder vi ikke kender endnu.

Tillykke med vores første seks måneder.

Og så siger jeg det bare igen for tusinde gang. Og der kommer mange tusinde endnu.
`,
    // (dine ord, med alle syv "så")
    afslutning: 'Jeg elsker dig så så så så så så så meget min yndlings ♥',
    underskrift: 'Din Marcus',
    // Lille efterskrift under brevet. Sæt til '' for at fjerne det.
    ps: 'PS. Jeg ved det godt. Din kæmpe softy har lavet en hel hjemmeside til dig.', // (udkast ud fra Sasjas "kæmpe softy")
  },

  // 7 · Afslutningen
  slut: {
    forLinje: '', // en lille linje over afslutningen hvis du vil have en
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
