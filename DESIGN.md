# Design System — "PATINA"

Restoran Brunac, Vodice. Obiteljski restoran koji od devedesetih ne juri za pažnjom
— dva puta uvršten među 100 najboljih restorana Hrvatske (1995., 1997.), a do sada
nikad nije imao internetsku stranicu. Site se ponaša kao **arhivski dokument**, ne
kao reklama: topli papir, patinirana bakrena zelena, pečat umjesto lažnih statistika.

## 1. Koncept

Za razliku od ostalih 11 restorana u ovom setu (koji redom koriste tamne, gold/brass
ili morske palete), Brunac gradi identitet oko svoje stvarne, provjerene priče:
tihe, obiteljske, bez marketinga, ali s pravim priznanjem iz devedesetih. Dizajn
citira taj papirnati, arhivski osjećaj — svijetla pozadina boje starog papira,
tekst boje osušene tinte, patinirana bakrena zelena (verdigris) kao primarni
naglasak, i "pečat" u boji rđe koji doslovno prikazuje 1995 · 1997 kao značku.

## 2. Boje (tokeni)

| Token                  | Hex       | Uloga                                          |
|-------------------------|-----------|------------------------------------------------|
| `--background` (paper.50) | `#FAF3E4` | Pozadina — topli, izblijedjeli papir           |
| `--card` (paper.100)     | `#F2E6CC` | Povišene površine, naizmjenične sekcije        |
| `--border` (paper.300)   | `#DEC9A0` | Rubovi, linije, hairline separatori             |
| `--foreground` / `--ink` (paper.900) | `#2A2117` | Primarni tekst — boja osušene tinte     |
| `--muted-foreground` (paper.600) | `#8C7B5E` | Sekundarni tekst                         |
| `--verdigris` (500)      | `#587F6B` | Patinirana bakrena zelena — sekundarni naglasak, linkovi u footeru |
| `--verdigris-dim` (900)  | `#1E3226` | Tamna zelena pozadina (footer)                  |
| `--rust` (500)           | `#A8522E` | JEDINI topli naglasak — CTA, pečat, kickeri     |

Pravila: nema gold/brass/coral tonova (koriste ih susjedni projekti). Rust se koristi
štedljivo — CTA gumbi, kickeri, pečat značka. Verdigris nosi mirnije, hladnije akcente
(footer, linkovi, obrub "zanimljivost" bloka).

## 3. Tipografija

| Uloga     | Font              | Karakter                                          |
|-----------|--------------------|----------------------------------------------------|
| Display   | **Newsreader** (var, italic) | Novinski/arhivski serif — čitljiv, topao, s pravim italicom |
| Body / UI | **Public Sans**    | Građanski, dokumentaran sans — miran, ne konkurira displayu |
| Label     | **Space Mono**     | Kickeri, meta — UPPERCASE, tracking `0.22em`, "otisak pisaćeg stroja" |

Namjerno izbjegava Fraunces/Cormorant/Manrope/Inter/Geist — koje koriste susjedni
projekti u istom batchu.

## 4. Oblik i prostor

- Radius: `0.25rem` (blago zaobljen, arhivski, ne oštar ni pilulast).
- Bordure: `1px` `--border`, hairline separatori (dotted za radno vrijeme).
- "Pečat" (`.stamp` utility): kružna značka, `1.5px` rust obrub, rotirana `-4deg`,
  koristi se isključivo za stvarnu, provjerenu činjenicu (1995 · 1997), nikad
  dekorativno.
- `.paper-grain`: suptilna SVG fractal-noise tekstura (multiply blend, opacity 0.5)
  na priča sekciji — papirnati dojam bez fotografske teksture.

## 5. Motion

- Smooth scroll: **Lenis** (`lerp: 0.1`), globalno.
- Reveal: GSAP + ScrollTrigger, `.reveal` fade+translateY, `power2.out`, `1.1s`.
- Hero slika: suptilan parallax + settle-scale (1.12 → 1.02), scrub uz scroll.
- Mirno, ne kinematografski — obiteljski restoran, ne filmski portfolio. Bez teških
  choreografija; `prefers-reduced-motion` isključuje sve.

## 6. Implementacija (tri sloja tokena)

- `design/tokens.json` — izvor istine: **primitive → semantic → component** sloj.
- `app/tokens.css` — auto-generirano
  (`node .../generate-tokens.cjs --config design/tokens.json -o app/tokens.css`).
- `app/globals.css` — mapira semantic tokene u Tailwind `@theme` i utility klase
  (`.text-label`, `.paper-grain`, `.stamp`).
- Fontovi: `next/font` u `app/layout.tsx`.
- Mobile nav: `components/site-header.tsx` — nav je **sibling** od `<header>`,
  ne dijete (poznati bug: backdrop-blur na fixed headeru hvata ugniježđeni nav).

## 7. Ton sadržaja

Samo provjerene činjenice: adresa (Ulica Brunac, Vodice), obitelj Pelajić, obrt
za ugostiteljstvo, dvostruko priznanje 1995./1997., sezona travanj–listopad,
rezervacije isključivo telefonom. Bez izmišljenih jelovnika, ocjena, recenzija ili
godine osnutka koja nije potvrđena.
