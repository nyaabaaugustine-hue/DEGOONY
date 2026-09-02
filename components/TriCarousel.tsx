"use client";

import { useEffect, useRef, useState } from "react";

type Slide = { img: string; label: string; title: string };

export default function TriCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    function go(n: number) {
      setCurrent((c) => (n + slides.length) % slides.length);
    }
    function restart() {
      if (timer.current) clearInterval(timer.current);
      if (!reduceMotion) timer.current = setInterval(() => go(current + 1), 6000);
    }
    restart();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, reduceMotion]);

  function goTo(n: number) {
    if (timer.current) clearInterval(timer.current);
    setCurrent((n + slides.length) % slides.length);
    if (!reduceMotion)
      timer.current = setInterval(
        () => setCurrent((c) => (c + 1) % slides.length),
        6000
      );
  }

  return (
    <div
      className="tri-carousel reveal"
      id="triCarousel"
      onMouseEnter={() => timer.current && clearInterval(timer.current)}
      onMouseLeave={() =>
        timer.current && clearInterval(timer.current)
      }
    >
      <button
        type="button"
        className="tri-arrow tri-prev"
        aria-label="Previous vehicle"
        onClick={() => goTo(current - 1)}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="tri-track">
        {slides.map((s, i) => (
          <figure
            className={`tri-slide ${i === current ? "active" : ""}`}
            key={i}
          >
            <img src={s.img} alt={s.label} loading="lazy" />
            <figcaption>
              <span className="eyebrow">{s.label}</span>
              <h3>{s.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
      <button
        type="button"
        className="tri-arrow tri-next"
        aria-label="Next vehicle"
        onClick={() => goTo(current + 1)}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <div className="tri-dots">
        {slides.map((s, i) => (
          <button
            type="button"
            key={i}
            className={`tri-dot ${i === current ? "active" : ""}`}
            aria-label={`Show vehicle ${i + 1}`}
            onClick={() => goTo(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
