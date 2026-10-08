export type Billede = {
  /** Filnavn i src/assets/billeder/ */
  fil: string;
  /** Kort beskrivelse til skærmlæsere (ses ikke på siden). */
  alt: string;
  /** Billedtekst under billedet. Kan udelades. */
  tekst?: string;
  /** Bekræftet dato, fx "19. april 2026". Vises kun, hvis den er udfyldt. */
  dato?: string;
  /**
   * Hvilken del af billedet der skal blive synlig, når det beskæres.
   * "50% 0%" = midt for, helt oppe. "50% 50%" = midten.
   */
  fokus?: string;
};

/** En lille skjult note, der kan foldes ud med et tryk. */
export type Hemmelighed = { knap: string; tekst: string };

export type Ting = {
  titel: string;
  tekst: string;
  billede?: Billede;
  hemmelighed?: Hemmelighed;
  /** Ord, der sættes i hver sin "stilling" (står, ligger, sidder). */
  stillinger?: string[];
};

export type Tegning = 'paraply' | 'sverige' | 'doer' | 'morgen' | 'skildpadde' | 'kram' | 'hjerte';

export type Minde = {
  titel: string;
  tekst: string;
  /** Lille tegning på kortet. */
  tegning?: Tegning;
  hemmelighed?: Hemmelighed;
};
