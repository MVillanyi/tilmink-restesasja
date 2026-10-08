// Lidt JavaScript til fotovisningen, de rolige overgange og dagtælleren.
// (Kuverten har sit eget lille script i Kuvert.astro.)
// Siden kan læses uden – det her gør den bare lidt rarere.

const rod = document.documentElement;

/* ── Rolige overgange, når noget kommer til syne ─────────────── */
function overgange() {
  const ting = document.querySelectorAll<HTMLElement>('[data-vis]');
  if (!('IntersectionObserver' in window)) {
    ting.forEach((el) => el.classList.add('er-synlig'));
    return;
  }
  const io = new IntersectionObserver(
    (poster) => {
      for (const p of poster) {
        if (p.isIntersecting) {
          p.target.classList.add('er-synlig');
          io.unobserve(p.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  ting.forEach((el) => io.observe(el));
}

/* ── Fotovisning ────────────────────────────────────────────── */
function fotovisning() {
  const dialog = document.querySelector<HTMLDialogElement>('[data-lysbord]');
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[data-foto]'));
  if (!dialog || !links.length || typeof dialog.showModal !== 'function') return;

  const img = dialog.querySelector<HTMLImageElement>('[data-lysbord-billede]')!;
  const tekst = dialog.querySelector<HTMLElement>('[data-lysbord-tekst]')!;
  const taeller = dialog.querySelector<HTMLElement>('[data-lysbord-taeller]')!;
  const forrige = dialog.querySelector<HTMLButtonElement>('[data-lysbord-forrige]')!;
  const naeste = dialog.querySelector<HTMLButtonElement>('[data-lysbord-naeste]')!;
  const luk = dialog.querySelector<HTMLButtonElement>('[data-lysbord-luk]')!;
  let nu = 0;
  let udloeser: HTMLElement | null = null;

  const vis = (i: number) => {
    nu = (i + links.length) % links.length;
    const a = links[nu];
    img.classList.remove('klar');
    img.onload = () => img.classList.add('klar');
    img.src = a.href;
    img.alt = a.dataset.alt ?? '';
    tekst.textContent = a.dataset.tekst ?? '';
    tekst.hidden = !a.dataset.tekst;
    taeller.textContent = `${nu + 1} / ${links.length}`;
    if (img.complete) img.classList.add('klar');
  };

  links.forEach((a, i) =>
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      udloeser = a;
      vis(i);
      dialog.showModal();
      rod.classList.add('lysbord-aabent');
      luk.focus();
    }),
  );

  const flere = links.length > 1;
  forrige.hidden = naeste.hidden = !flere;
  forrige.addEventListener('click', () => vis(nu - 1));
  naeste.addEventListener('click', () => vis(nu + 1));
  luk.addEventListener('click', () => dialog.close());

  dialog.addEventListener('close', () => {
    rod.classList.remove('lysbord-aabent');
    img.removeAttribute('src');
    udloeser?.focus({ preventScroll: true });
  });

  // Tryk uden for billedet lukker.
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog || (e.target as HTMLElement).hasAttribute('data-lysbord-scene')) dialog.close();
  });

  dialog.addEventListener('keydown', (e) => {
    if (!flere) return;
    if (e.key === 'ArrowLeft') vis(nu - 1);
    if (e.key === 'ArrowRight') vis(nu + 1);
  });

  // Swipe på telefonen.
  let x0: number | null = null;
  let y0 = 0;
  dialog.addEventListener('touchstart', (e) => {
    x0 = e.touches[0].clientX;
    y0 = e.touches[0].clientY;
  }, { passive: true });
  dialog.addEventListener('touchend', (e) => {
    if (x0 === null || !flere) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    x0 = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) vis(nu + (dx < 0 ? 1 : -1));
  }, { passive: true });
}

/* ── Dagtæller i dansk tid ──────────────────────────────────── */
function dagtaeller() {
  document.querySelectorAll<HTMLElement>('[data-dage]').forEach((el) => {
    const { start = '', tekst = '', jubilaeum = '', jubilaeumTekst = '' } = el.dataset;
    const idag = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Copenhagen',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());
    const utc = (iso: string) => {
      const [y, m, d] = iso.split('-').map(Number);
      return Date.UTC(y, m - 1, d);
    };
    const dage = Math.round((utc(idag) - utc(start)) / 86_400_000);
    if (!Number.isFinite(dage) || dage < 1) return;
    const linje =
      idag === jubilaeum && jubilaeumTekst
        ? jubilaeumTekst
        : tekst.replace('{dage}', dage.toLocaleString('da-DK'));
    // ♥ bliver til det samme tegnede hjerte som resten af siden.
    const hjerte = document.querySelector<HTMLTemplateElement>('template[data-hjerte]');
    el.replaceChildren();
    linje.split('♥').forEach((del, i) => {
      if (i > 0 && hjerte) el.append(hjerte.content.cloneNode(true));
      el.append(del);
    });
    el.hidden = false;
  });
}

/* ── Det ekstra kram ────────────────────────────────────────── */
function kram() {
  document.querySelectorAll<HTMLDetailsElement>('[data-hemmelighed]').forEach((d) => {
    d.addEventListener('toggle', () => {
      if (!d.open) return;
      const hjerte = d.querySelector<HTMLElement>('[data-hjerteslag]');
      if (!hjerte) return;
      hjerte.classList.remove('slaar');
      void hjerte.offsetWidth;
      hjerte.classList.add('slaar');
    });
  });
}

overgange();
fotovisning();
dagtaeller();
kram();
