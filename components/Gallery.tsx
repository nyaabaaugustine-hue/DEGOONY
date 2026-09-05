"use client";

import {
  Children,
  CSSProperties,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * Premium auto-playing carousel gallery with a cinematic "zoom-out" lightbox.
 *
 * A full-width feature video (if present) sits above, and the image slides run
 * in an auto-advancing, scroll-snap carousel with arrows and dots. Clicking any
 * slide opens the zoom-out lightbox with caption, counter, prev/next and
 * keyboard navigation. Autoplay runs slowly and continuously; it only pauses
 * while the visitor is dragging the track or while the lightbox is open.
 */
export default function Gallery({
  children,
  autoPlayMs = 4000,
}: {
  children: ReactNode;
  autoPlayMs?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const pausedRef = useRef(false);
  const openRef = useRef(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef(0);
  const dragStartX = useRef(0);
  const dragDragging = useRef(false);
  const [mounted, setMounted] = useState(false);

  // Split the provided children: feature video vs. image slides.
  const kids = Children.toArray(children) as ReactElement[];
  const videoChild = kids.find((k) => {
    const cls = (k.props as { className?: unknown })?.className;
    return typeof cls === "string" && cls.includes("gallery-video");
  });
  const slides = kids.filter((k) => k !== videoChild);

  useEffect(() => {
    setMounted(true);
    setSlideCount(slides.length);
  }, [slides.length]);

  // Recompute slide width so the track steps one full slide at a time.
  const getStep = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return 0;
    const slide = track.firstElementChild as HTMLElement;
    const gap = parseFloat(getComputedStyle(track).gap || "18");
    return slide.getBoundingClientRect().width + (isNaN(gap) ? 18 : gap);
  }, []);

  const applyTransform = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getStep();
    track.style.transform = `translateX(${-index * step + dragOffset.current}px)`;
  }, [index, getStep]);

  useEffect(() => {
    if (!mounted) return;
    applyTransform();
    const onResize = () => applyTransform();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [applyTransform, mounted]);

  // Autoplay: advance every autoPlayMs unless paused (hover/focus) or lightbox open.
  useEffect(() => {
    if (!mounted || slideCount < 2) return;
    const t = setInterval(() => {
      if (pausedRef.current || openRef.current) return;
      setIndex((i) => (i + 1) % slideCount);
    }, autoPlayMs);
    return () => clearInterval(t);
  }, [mounted, slideCount, autoPlayMs]);

  // If slideCount changes and index is out of range, clamp.
  useEffect(() => {
    if (slideCount && index >= slideCount) setIndex(0);
  }, [slideCount, index]);

  /* ------------------------------------------------------------------ *
   * Lightbox (zoom-out morph), same premium behavior as the grid gallery.
   * ------------------------------------------------------------------ */
  useEffect(() => {
    const container = containerRef.current!;
    if (!container) return;

    const overlay = document.createElement("div");
    overlay.className = "gallery-lightbox";
    overlay.innerHTML = `<div class="lightbox-content"><button class="lightbox-close" type="button" aria-label="Close gallery"><i class="fas fa-times"></i></button><figure><img alt="" /><figcaption></figcaption></figure><span class="lightbox-prev"><i class="fas fa-chevron-left"></i></span><span class="lightbox-next"><i class="fas fa-chevron-right"></i></span><span class="lightbox-counter"></span></div>`;
    overlay.style.cssText =
      "position:fixed;inset:0;background:rgba(0,0,0,.9);z-index:99999;display:none;align-items:center;justify-content:center;";
    container.appendChild(overlay);

    const img = overlay.querySelector("img") as HTMLImageElement;
    const figcap = overlay.querySelector("figcaption") as HTMLElement;
    const counter = overlay.querySelector(".lightbox-counter") as HTMLElement;
    const closeBtn = overlay.querySelector(".lightbox-close") as HTMLElement;
    const prevBtn = overlay.querySelector(".lightbox-prev") as HTMLElement;
    const nextBtn = overlay.querySelector(".lightbox-next") as HTMLElement;
    const content = overlay.querySelector(".lightbox-content") as HTMLElement;

    let items: { src: string; alt: string; caption: string }[] = [];
    let current = 0;
    let openIndex = -1;

    function indexItems() {
      let idx = 0;
      container.querySelectorAll<HTMLElement>(".gallery-item").forEach((el) => {
        if (el.classList.contains("gallery-video")) return;
        if (!el.querySelector("img")) return;
        el.setAttribute("data-gallery-idx", String(idx));
        idx++;
      });
    }
    indexItems();

    function show(index: number, animate = false) {
      if (!items.length) return;
      current = index;
      img.src = items[index].src;
      img.alt = items[index].alt || "";
      figcap.textContent = items[index].caption || "";
      counter.textContent =
        String(index + 1).padStart(2, "0") +
        " / " +
        String(items.length).padStart(2, "0");
      if (animate) {
        img.classList.remove("lightbox-img-ready");
        void img.offsetWidth;
        img.classList.add("lightbox-img-ready");
      } else {
        img.classList.add("lightbox-img-ready");
      }
    }

    function open(index: number) {
      items = [];
      let idx = 0;
      container.querySelectorAll<HTMLElement>(".gallery-item").forEach((el) => {
        if (el.classList.contains("gallery-video")) return;
        const im = el.querySelector("img");
        if (!im) return;
        const cap = el.querySelector(".gallery-caption");
        el.setAttribute("data-gallery-idx", String(idx));
        items.push({
          src: im.getAttribute("data-full") || (im as HTMLImageElement).src,
          alt: im.alt || "",
          caption: cap ? cap.textContent!.trim() : "",
        });
        idx++;
      });
      if (!items.length) return;

      openIndex = index;
      openRef.current = true;
      const origin = container.querySelector<HTMLElement>(
        `[data-gallery-idx="${index}"] img`
      );
      const originRect = origin
        ? origin.getBoundingClientRect()
        : {
            left: window.innerWidth / 2,
            top: window.innerHeight / 2,
            width: 80,
            height: 80,
          };

      overlay.style.display = "flex";
      overlay.style.opacity = "0";
      overlay.classList.add("gallery-morphing");
      content.style.transform =
        `translate(${originRect.left}px, ${originRect.top}px) scale(0.12)`;
      content.style.transformOrigin = "0 0";
      content.style.opacity = "0";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          content.style.transition =
            "transform .7s cubic-bezier(.16,1,.3,1), opacity .5s ease";
          overlay.style.transition = "background-color .5s ease";
          overlay.style.opacity = "1";
          overlay.style.background = "rgba(2, 8, 4, 0.92)";
          content.style.transform = "translate(0px, 0px) scale(1)";
          content.style.opacity = "1";
          setTimeout(() => {
            overlay.classList.remove("gallery-morphing");
            content.style.transition = "";
          }, 720);
        });
      });

      show(index);
      document.body.style.overflow = "hidden";
    }

    function close() {
      const origin = container.querySelector<HTMLElement>(
        `[data-gallery-idx="${openIndex}"] img`
      );
      const originRect = origin
        ? origin.getBoundingClientRect()
        : {
            left: window.innerWidth / 2,
            top: window.innerHeight / 2,
            width: 80,
            height: 80,
          };
      if (originRect) {
        content.style.transition =
          "transform .55s cubic-bezier(.7,0,.84,0), opacity .45s ease";
        overlay.style.transition =
          "background-color .5s ease, opacity .4s ease";
        content.style.transform =
          `translate(${originRect.left}px, ${originRect.top}px) scale(0.12)`;
        content.style.opacity = "0";
        overlay.style.opacity = "0";
        overlay.style.background = "rgba(2, 8, 4, 0)";
        setTimeout(() => {
          overlay.style.display = "none";
          overlay.style.background = "rgba(0,0,0,.9)";
          content.style.transition = "";
          document.body.style.overflow = "";
          openRef.current = false;
        }, 540);
      } else {
        overlay.style.display = "none";
        document.body.style.overflow = "";
        openRef.current = false;
      }
      openIndex = -1;
    }

    function navigate(dir: number) {
      show((current + dir + items.length) % items.length, true);
    }

    container.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const item = target.closest(".gallery-item") as HTMLElement | null;
      if (!item) return;
      if (item.classList.contains("gallery-video")) return;
      const idx = item.getAttribute("data-gallery-idx");
      if (idx !== null && idx !== undefined) open(parseInt(idx, 10));
    });

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigate(-1);
    });
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigate(1);
    });
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", function onKey(e) {
      if (overlay.style.display !== "flex") return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    });

    return () => {
      overlay.remove();
      document.body.style.overflow = "";
    };
  }, [mounted]);

  // Bind the feature video: only loads the source on play (perf friendly).
  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current!;
    if (!container) return;
    container.querySelectorAll<HTMLElement>(".gallery-video").forEach((tile) => {
      if (tile.getAttribute("data-video-bound") === "1") return;
      tile.setAttribute("data-video-bound", "1");
      const video = tile.querySelector<HTMLVideoElement>(".gallery-video-element");
      const playBtn = tile.querySelector<HTMLElement>(".video-play-btn");
      if (!video || !playBtn) return;
      const v: HTMLVideoElement = video;
      const pBtn: HTMLElement = playBtn;
      function play() {
        if (!v.getAttribute("src")) {
          v.setAttribute("src", tile.getAttribute("data-video-src") || "");
        }
        v.play();
        tile.classList.add("playing");
      }
      pBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        play();
      });
      tile.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).closest(".video-play-btn")) return;
        if ((e.target as HTMLElement).closest("video")) return;
        if (!tile.classList.contains("playing") || v.paused) {
          play();
        }
      });
      v.addEventListener("play", () => tile.classList.add("playing"));
      v.addEventListener("pause", () => {
        if (v.ended) tile.classList.remove("playing");
      });
    });
  }, [mounted]);

  const goTo = (i: number) =>
    setIndex(((i % slideCount) + slideCount) % slideCount);

  // Touch / pointer swipe support for a native mobile carousel feel.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (slideCount < 2 || openRef.current) return;
    dragDragging.current = true;
    dragStartX.current = e.clientX;
    dragOffset.current = 0;
    const track = trackRef.current;
    if (track) {
      track.style.transition = "none";
      try {
        (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    }
    pausedRef.current = true;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragDragging.current || !trackRef.current) return;
    dragOffset.current = e.clientX - dragStartX.current;
    const step = getStep();
    trackRef.current.style.transform =
      `translateX(${-index * step + dragOffset.current}px)`;
  };

  const endDrag = (delta: number) => {
    const track = trackRef.current;
    if (track) track.style.transition = "";
    dragDragging.current = false;
    const step = getStep() || 1;
    const moved = delta;
    dragOffset.current = 0;
    if (Math.abs(moved) > step * 0.25) {
      goTo(moved < 0 ? index + 1 : index - 1);
    } else {
      applyTransform();
    }
    pausedRef.current = false;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragDragging.current) return;
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    endDrag(dragOffset.current);
  };

  const onPointerCancel = () => {
    if (!dragDragging.current) return;
    endDrag(0);
  };

  return (
    <div
      className="gallery-carousel"
      ref={containerRef}
      style={{ "--carousel-ms": `${autoPlayMs}ms` } as CSSProperties}
    >
      {videoChild && (
        <div className="carousel-feature">
          {videoChild}
        </div>
      )}

      {slides.length > 0 && (
        <>
          <div
            className="carousel-viewport"
            ref={viewportRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            style={{ touchAction: "pan-y" }}
          >
            <div className="carousel-track" ref={trackRef}>
              {slides.map((s, i) => (
                <div className="carousel-slide" data-slide={i} key={i}>
                  {s}
                </div>
              ))}
            </div>
            {slideCount > 1 && (
              <>
                <button
                  type="button"
                  className="carousel-arrow carousel-prev"
                  aria-label="Previous image"
                  onClick={() => goTo(index - 1)}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className="carousel-arrow carousel-next"
                  aria-label="Next image"
                  onClick={() => goTo(index + 1)}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
          </div>

          <div className="carousel-dots" role="tablist" aria-label="Gallery slides">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`carousel-dot ${i === index ? "active" : ""}`}
                key={i === index ? `active-${index}` : i}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
