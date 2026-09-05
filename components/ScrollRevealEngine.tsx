"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Global client component that replicates the original script.js
 * behaviors that depend on the DOM after render:
 *  - Scroll reveal classes (.reveal, .reveal-left, etc.) via IntersectionObserver
 *  - KPI counter animation
 *  - Smooth-scroll for in-page anchors
 *  - Stagger footer reveal
 *
 * Because it lives in the root layout it persists across client-side
 * navigations. We re-initialise the reveal/KPI observers whenever the
 * pathname changes so freshly rendered pages never stay hidden
 * (opacity: 0) — which would otherwise render as a blank page.
 */
export default function ScrollRevealEngine() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    let revealObserver: IntersectionObserver | null = null;
    let kpiObserver: IntersectionObserver | null = null;

    const revealSelector =
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger";

    function animateCounter(el: HTMLElement, target: number, duration = 1800) {
      const startTime = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.floor(target * eased));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = String(target);
        }
      }
      requestAnimationFrame(tick);
    }

    function autoAddRevealClasses() {
      document
        .querySelectorAll(
          ".component.bg-light-grey, .component.bg-white, .component.bg-dark-green, .component.bg-medium-green, .governance-section .component"
        )
        .forEach((el) => {
          if (!el.classList.contains("reveal") && !el.closest(".form-container")) {
            el.classList.add("reveal");
          }
        });
      document.querySelectorAll(".form-container").forEach((el) => {
        if (!el.classList.contains("reveal-scale")) el.classList.add("reveal-scale");
      });
    }

    function initReveal() {
      revealObserver?.disconnect();
      revealObserver = null;

      const els = document.querySelectorAll(revealSelector);
      els.forEach((el) => el.classList.remove("visible"));

      if (reduceMotion) return;

      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => revealObserver!.observe(el));
    }

    function initKpi() {
      kpiObserver?.disconnect();
      kpiObserver = null;
      const kpiEls = document.querySelectorAll<HTMLElement>(".kpi-number[data-target]");
      if (!kpiEls.length || reduceMotion) return;
      kpiObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              animateCounter(el, parseInt(el.getAttribute("data-target")!, 10));
              kpiObserver!.unobserve(el);
            }
          });
        },
        { threshold: 0.5 }
      );
      kpiEls.forEach((el) => kpiObserver!.observe(el));
    }

    // Re-observe any reveal elements added to the DOM later (modals, chips,
    // lazy content) so nothing is left permanently hidden.
    const domObserver = new MutationObserver(() => {
      if (!revealObserver) return;
      document.querySelectorAll(revealSelector).forEach((el) => {
        revealObserver!.observe(el);
      });
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    autoAddRevealClasses();
    initReveal();
    initKpi();

    // Smooth scroll for anchors
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#" || href.length < 2) return;
      const dest = document.querySelector(href);
      if (!dest) return;
      e.preventDefault();
      const headerOffset = 80;
      const top = dest.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: top - headerOffset, behavior: "smooth" });
    }
    document.addEventListener("click", handleAnchorClick);

    return () => {
      revealObserver?.disconnect();
      kpiObserver?.disconnect();
      domObserver.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [pathname]);

  return null;
}
