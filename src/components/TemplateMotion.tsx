"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import Lenis from "lenis";

export function TemplateMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    AOS.init({
      duration: reduced ? 0 : 800,
      easing: "ease-out-cubic",
      once: true,
    });

    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const docEl = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reduced) {
      docEl.classList.add("ws-js-ready");
    }

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".ftco-animate:not(.ftco-animated)"),
    );

    if (reduced) {
      revealElements.forEach((el) => {
        el.classList.add("fadeInUp", "ftco-animated");
      });
    }

    const revealObserver = !reduced
      ? new IntersectionObserver(
          (entries) => {
            const visibleBatch = entries
              .filter((e) => e.isIntersecting)
              .map((e) => e.target as HTMLElement);

            visibleBatch.forEach((el, idx) => {
              revealObserver?.unobserve(el);
              window.setTimeout(() => {
                const effect = el.dataset.animateEffect || "fadeInUp";
                el.classList.add(effect, "ftco-animated");
              }, idx * 55);
            });
          },
          { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
        )
      : null;

    if (revealObserver) {
      revealElements.forEach((el) => revealObserver.observe(el));
    }

    // Counter animation matching Whitespace #section-counter
    const counterNodes = Array.from(
      document.querySelectorAll<HTMLElement>("#section-counter .number[data-number]"),
    );
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          if (node.dataset.counted === "1") return;
          node.dataset.counted = "1";
          counterObserver.unobserve(node);

          const target = Number(node.dataset.number || "0");
          if (reduced || !Number.isFinite(target) || target <= 0) {
            node.textContent = target.toLocaleString();
            return;
          }
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            node.textContent = Math.round(target * eased).toLocaleString();
            if (progress < 1) {
              window.requestAnimationFrame(tick);
            }
          };
          window.requestAnimationFrame(tick);
        });
      },
      { threshold: 0.2 },
    );
    counterNodes.forEach((n) => counterObserver.observe(n));

    // Whitespace navbar scroll state (.scrolled / .awake / .sleep)
    const onScroll = () => {
      const navbar = document.getElementById("ftco-navbar");
      if (!navbar) return;
      const st = window.scrollY;
      if (st > 150) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled", "sleep");
      }
      if (st > 350) {
        navbar.classList.add("awake");
        navbar.classList.remove("sleep");
      } else if (st <= 350 && navbar.classList.contains("awake")) {
        navbar.classList.remove("awake");
        navbar.classList.add("sleep");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    AOS.refresh();

    return () => {
      revealObserver?.disconnect();
      counterObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
