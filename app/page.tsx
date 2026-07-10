import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1764377723223-2353064702b1",
  alley: "https://images.unsplash.com/photo-1769079453451-9ca7d4beba49",
  fishVeg: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
  grilledFish: "https://images.unsplash.com/photo-1515669097368-22e68427d265",
  clamsWine: "https://images.unsplash.com/photo-1672636401225-ec3d4025a4af",
  boatSunset: "https://images.unsplash.com/photo-1635358082731-76d23328bf71",
  courtyard: "https://images.unsplash.com/photo-1663323744937-421f66782e03",
  patioCity: "https://images.unsplash.com/photo-1684578706274-db960a34431d",
  diningTable: "https://images.unsplash.com/photo-1692444866957-12c4c5d7a54e",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const KITCHEN = [
  {
    title: "Riba dana",
    image: IMG.fishVeg,
    desc: "Svježa riba i školjke, onakve kakve donese jutarnji ulov s vodičke rive — pripremljene jednostavno, uz maslinovo ulje i limun.",
  },
  {
    title: "S gradela",
    image: IMG.grilledFish,
    desc: "Riba i meso s roštilja, na način na koji se u ovom kraju radi otkad znamo — bez suvišnih začina, bez žurbe.",
  },
  {
    title: "Stol za dijeljenje",
    image: IMG.clamsWine,
    desc: "Manji tanjuri za dijeljenje uz čašu domaćeg vina — večera koja traje dulje nego što planirate.",
  },
];

const GALLERY = [
  { src: IMG.courtyard, alt: "Stol u kamenom dvorištu, mediteranski ugođaj", tall: true },
  { src: IMG.patioCity, alt: "Terasa sa stolovima i pogledom na stari grad" },
  { src: IMG.boatSunset, alt: "Barka na moru u sumrak" },
  { src: IMG.diningTable, alt: "Stol postavljen za goste, čaše vina", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Stare kamene kuće u sumrak, starija ulica dalmatinskog grada"
            className="h-full w-full object-cover scale-[1.12] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--paper-50, #FAF3E4)" }}>
            Obitelj Pelajić · Ulica Brunac, Vodice
          </span>
          <h1
            className="font-display reveal max-w-[18ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "#FAF3E4" }}
          >
            Restoran koji se ne reklamira. <em className="italic" style={{ color: "#C9BFB0" }}>Samo kuha.</em>
          </h1>
          <p className="reveal mt-6 max-w-[46ch] text-[1.05rem]" style={{ color: "#DEC9A0" }}>
            Brunac stoji u mirnoj ulici starijeg dijela Vodica, nekoliko koraka od luke — obiteljski vođen, sezonski
            otvoren, bez interneta i bez žurbe otkad ga pamtimo.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-5">
            <a
              href="tel:+38522443319"
              className="rounded-sm px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--rust)", color: "#FAF3E4" }}
            >
              Nazovite za stol
            </a>
            <a
              href="#lokacija"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:opacity-70"
              style={{ borderColor: "rgba(250,243,228,0.4)", color: "#FAF3E4" }}
            >
              Pogledajte lokaciju →
            </a>
          </div>
        </div>
      </section>

      {/* PROOF STRIP — verified facts only */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-9 text-center">
          <div>
            <div className="font-display text-3xl" style={{ color: "var(--ink)" }}>1995. · 1997.</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>
              Među 100 najboljih restorana Hrvatske
            </div>
          </div>
          <div>
            <div className="font-display text-3xl" style={{ color: "var(--ink)" }}>Travanj – listopad</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Sezona rada</div>
          </div>
          <div>
            <div className="font-display text-3xl" style={{ color: "var(--ink)" }}>Obitelj Pelajić</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Obrt za ugostiteljstvo</div>
          </div>
        </div>
      </div>

      {/* STORY */}
      <section id="prica" className="py-24 paper-grain">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--rust)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--ink)" }}>
              Ime koje je ostalo <em className="italic">isto</em>
            </h2>
            <p className="reveal mb-4 max-w-[48ch]" style={{ color: "var(--muted-foreground)" }}>
              Restoran Brunac posluje u Vodicama, u ulici koja nosi isto ime — Ulica Brunac, u starijem dijelu grada,
              tek nekoliko koraka od luke. Vodi ga obitelj Pelajić, prijavljena kao samostalni obrt za ugostiteljstvo.
            </p>
            <p className="reveal mb-4 max-w-[48ch]" style={{ color: "var(--muted-foreground)" }}>
              Devedesetih je restoran dva puta ušao u izbor 100 najboljih restorana Hrvatske — 1995. i 1997. godine.
              Otad nije trčao za pažnjom: nema velike kampanje, do sada nije imao ni internetsku stranicu — samo
              telefon na koji se odgovara.
            </p>
            <p className="reveal mb-8 max-w-[48ch]" style={{ color: "var(--muted-foreground)" }}>
              Otvoren je sezonski, od sredine travnja do kraja listopada — onda kad je Vodice pravi, živi grad, a ne
              samo ljetna razglednica.
            </p>
            <div className="reveal inline-flex items-center gap-4">
              <div className="stamp flex flex-col items-center justify-center rounded-full w-24 h-24 text-center px-2">
                <span className="text-label" style={{ fontSize: "0.55rem", lineHeight: 1.2 }}>100 najboljih</span>
                <span className="font-display text-lg leading-none mt-1">1995 · 1997</span>
              </div>
              <p className="font-display italic text-lg" style={{ color: "var(--rust)" }}>
                — obitelj Pelajić, Vodice
              </p>
            </div>
          </div>
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-sm">
            <img
              src={img(IMG.alley, 1000)}
              alt="Mirna kamena uličica u sumrak, stari dio dalmatinskog grada"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* KITCHEN */}
      <section id="kuhinja" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-6 max-w-2xl">
            <span className="text-label block mb-4" style={{ color: "var(--rust)" }}>Kuhinja</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] mb-5" style={{ color: "var(--ink)" }}>
              Onoliko koliko <em className="italic">donese dan</em>
            </h2>
            <p style={{ color: "var(--muted-foreground)" }}>
              Ne objavljujemo jelovnik unaprijed — kuhinja prati sezonu, tržnicu i ulov ribara s vodičke rive. Ono što
              je zajedničko svim jelima jest jednostavnost: malo sastojaka, dobro odabranih, pripremljenih bez žurbe.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {KITCHEN.map((k) => (
              <div key={k.title} className="reveal overflow-hidden rounded-sm" style={{ background: "var(--background)" }}>
                <div className="h-56 overflow-hidden">
                  <img src={img(k.image, 800)} alt={k.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-7">
                  <div className="font-display text-xl mb-2" style={{ color: "var(--ink)" }}>{k.title}</div>
                  <p className="text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMBIANCE */}
      <section id="ambijent" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 max-w-2xl">
            <span className="text-label block mb-4" style={{ color: "var(--rust)" }}>Ambijent</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)] mb-5" style={{ color: "var(--ink)" }}>
              Tiho, malo <em className="italic">podalje</em> od gužve
            </h2>
            <p style={{ color: "var(--muted-foreground)" }}>
              Restoran stoji podalje od najprometnijih dijelova rive — u mirnijoj, stambenoj ulici starijeg dijela
              Vodica. Nema pogleda na jahte ni reda za stol; ima kamenu kuću, platneni stolnjak i večeri koje traju
              dulje nego što planirate.
            </p>
          </div>

          <div className="reveal mb-14 max-w-2xl rounded-sm border-l-2 pl-6 py-1" style={{ borderColor: "var(--verdigris)" }}>
            <p className="text-[0.92rem] italic" style={{ color: "var(--muted-foreground)" }}>
              Zanimljivost: prema povijesti grada, upravo je u Ulici Brunac nekoć stajao &quot;badž han&quot; — mjesto gdje su
              putnici prije ulaska u naselje ostavljali konje i oružje. Danas je to jedan od tiših kutaka Vodica,
              daleko od gužve s rive.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-sm ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="lokacija" className="py-24" style={{ background: "var(--card)" }}>
        <div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-sm md:grid-cols-2"
          style={{ background: "var(--background)" }}
        >
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--rust)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--ink)" }}>
              Tu smo, u <em className="italic">Ulici Brunac</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--rust)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Ulica Brunac, 22211 Vodice</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--rust)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>
                Isključivo telefonom — nema online sustava, ni prije, ni sada.
              </p>
              <a href="tel:+38522443319" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--rust)" }}>
                +385 22 443 319
              </a>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--rust)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[320px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--ink)" }}>
                <span>Sezona</span><span>sredina travnja – listopad</span>
              </div>
              <p className="mt-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                Dnevno radno vrijeme prilagođava se sezoni — za dostupnost nazovite.
              </p>
            </div>

            <a
              href="tel:+38522443319"
              className="reveal inline-block rounded-sm px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--rust)", color: "#FAF3E4" }}
            >
              Nazovite za stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Ulica+Brunac,+Vodice,+Croatia&output=embed"
              loading="lazy"
              title="Restoran Brunac — Ulica Brunac, Vodice"
              className="h-full w-full min-h-[360px] border-0 grayscale-[15%]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--verdigris-dim)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "#FAF3E4" }}>Brunac</div>
              <p className="max-w-[34ch] text-sm" style={{ color: "#C9BFB0" }}>
                Obiteljski restoran u Ulici Brunac, Vodice. Sezonski otvoren od sredine travnja do listopada, bez
                velike reklame — otkad ga pamtimo.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "#9DBFAE" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "#C9BFB0" }}>
                <a href="#prica" className="hover:opacity-70">Priča</a>
                <a href="#kuhinja" className="hover:opacity-70">Kuhinja</a>
                <a href="#ambijent" className="hover:opacity-70">Ambijent</a>
                <a href="#lokacija" className="hover:opacity-70">Lokacija</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "#9DBFAE" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "#C9BFB0" }}>
                <a href="tel:+38522443319" className="font-display text-lg" style={{ color: "#FAF3E4" }}>
                  +385 22 443 319
                </a>
                <p>Ulica Brunac, 22211 Vodice, Hrvatska</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "rgba(250,243,228,0.15)", color: "#9DBFAE" }}
          >
            <span>© 2026 Restoran Brunac · Vodice</span>
            <span>Obitelj Pelajić · Sezonski, travanj–listopad</span>
          </div>
        </div>
      </footer>
    </>
  );
}
