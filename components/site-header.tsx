"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#prica", label: "Priča" },
  { href: "#kuhinja", label: "Kuhinja" },
  { href: "#ambijent", label: "Ambijent" },
  { href: "#lokacija", label: "Lokacija" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Header: fixed, backdrop-blur when scrolled. The mobile nav below is
          a SIBLING of this element (not nested inside it) — a backdrop-blur
          on a fixed header would otherwise clip/trap a nested fixed nav. */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-md shadow-[0_1px_0_var(--surface-line)] py-3.5" : "py-6"
        }`}
        style={{ background: scrolled ? "rgba(250, 243, 228, 0.92)" : "transparent" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#" className="font-display text-2xl tracking-tight" style={{ color: "var(--ink)" }}>
            Brunac
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-label transition-colors hover:opacity-70"
                style={{ color: "var(--muted-foreground)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+38522443319"
              className="rounded-sm border px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.12em] transition-all hover:bg-[var(--rust)] hover:text-[var(--background)]"
              style={{ borderColor: "var(--rust)", color: "var(--rust)" }}
            >
              +385 22 443 319
            </a>
          </nav>

          <button
            aria-label="Izbornik"
            aria-expanded={open}
            className="md:hidden z-50 text-2xl leading-none"
            style={{ color: "var(--ink)" }}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile nav — independent fixed element, sibling of <header>. */}
      <nav
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "var(--background)" }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-2xl"
            style={{ color: "var(--ink)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="tel:+38522443319"
          onClick={() => setOpen(false)}
          className="rounded-sm px-6 py-3 text-sm uppercase tracking-[0.12em]"
          style={{ background: "var(--rust)", color: "var(--background)" }}
        >
          +385 22 443 319
        </a>
      </nav>
    </>
  );
}
