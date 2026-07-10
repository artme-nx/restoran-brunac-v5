"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealInit() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      document.querySelectorAll(".reveal").forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "none";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      const heroImg = document.getElementById("heroImg");
      if (heroImg) {
        gsap.fromTo(
          heroImg,
          { scale: 1.12 },
          { scale: 1.02, duration: 2.4, ease: "power2.out" }
        );
        gsap.to(heroImg, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: { trigger: heroImg, start: "top top", end: "bottom top", scrub: true },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
