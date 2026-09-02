"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Slide = {
  img: string;
  alt: string;
  logo: string;
  content: ReactNode;
};

export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const transitioning = useRef(false);
  const touchStartX = useRef(0);

  function goTo(n: number) {
    if (transitioning.current) return;
    transitioning.current = true;
    const total = slides.length;
    let next = n;
    if (next > total - 1) next = 0;
    if (next < 0) next = total - 1;
    setCurrent(next);
    setTimeout(() => {
      transitioning.current = false;
    }, 1000);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (window.pageYOffset > window.innerHeight) return;
      if (!document.querySelector(".hero-carousel")) return;
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div
      className="hero-carousel"
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0].screenX;
      }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
          goTo(current + (diff > 0 ? 1 : -1));
        }
      }}
    >
      {slides.map((slide, i) => (
        <div
            className={`hero-slide ${i === current ? "active" : ""} ${
              i === slides.length - 1 ? "slide-declaration" : ""
            }`}
            data-slide={i + 1}
            key={i}
          >
          <div className="ad-image">
            <img
              src={slide.img}
              alt={slide.alt}
              decoding="async"
              fetchPriority={i === current ? "high" : "auto"}
              loading={i === current ? "eager" : "lazy"}
            />
          </div>
          <div className="item-shade"></div>
          <div className="declaration-pattern" aria-hidden="true"></div>
          <img className="slide-logo" src={slide.logo} alt="DEGOONY EVERGREEN LOGISTICS GHANA LTD" decoding="async" fetchPriority={i === current ? "high" : "auto"} loading={i === current ? "eager" : "lazy"} />
          <div className="container item-container">
            <div className="hero-copy col-xs-12 col-md-9">{slide.content}</div>
          </div>
        </div>
      ))}
      <div className="carousel-dots" role="group" aria-label="Hero slides">
        {slides.map((s, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            data-slide={i + 1}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
