"use client";

import { useEffect } from "react";

/**
 * Global client component that replicates the original script.js
 * behaviors that depend on the DOM after render:
 *  - Scroll reveal classes (.reveal, .reveal-left, etc.) via IntersectionObserver
 *  - KPI counter animation
 *  - Smooth-scroll for in-page anchors
 *  - Stagger footer reveal
 */
export default function ScrollRevealEngine() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    let revealObserver: IntersectionObserver | null = null;
    let kpiObserver: IntersectionObserver | null = null;

    // Reveal
    if (!reduceMotion) {
      const els = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger"
      );
      els.forEach((el) => el.classList.remove("visible"));
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

    // Auto-add reveal classes (mirror addRevealClasses)
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

    // Re-observe newly added reveal classes
    if (revealObserver) {
      document
        .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger")
        .forEach((el) => {
          if (!(el as HTMLElement).dataset.revealBound) {
            (el as HTMLElement).dataset.revealBound = "1";
            revealObserver!.observe(el);
          }
        });
    }

    // KPI counters
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

    const kpiEls = document.querySelectorAll<HTMLElement>(".kpi-number[data-target]");
    if (kpiEls.length) {
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

    // Scroll reveal triggers
    function initScrollReveal() {
      const els = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger"
      );
      const nav = (document.getElementById("contentNav") ||
        document.querySelector(".main-container")) as HTMLElement | null;
      els.forEach((el) => {
        if ((el as HTMLElement).dataset.revealObserved === "1") return;
        (el as HTMLElement).dataset.revealObserved = "1";
      });
    }
    initScrollReveal();

    // Smooth scroll for anchors
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
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
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
