"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * Premium lightbox gallery with cinematic "zoom-out-from-grid" reveal.
 *
 * Clicking any gallery thumbnail captures the tile's on-screen position,
 * then the lightbox content morphs outward from that spot into a fullscreen
 * viewer — a smooth zoom-out reveal. Includes caption, counter, prev/next,
 * keyboard navigation, and focus management.
 */
export default function Gallery({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

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

    function bindFeatureVideos() {
      container.querySelectorAll<HTMLElement>(".gallery-video").forEach((tile) => {
        if (tile.getAttribute("data-video-bound") === "1") return;
        tile.setAttribute("data-video-bound", "1");
        const video = tile.querySelector<HTMLVideoElement>(
          ".gallery-video-element"
        );
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
    }
    bindFeatureVideos();

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

      // Fade the image in when navigating between slides
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

      // Start the lightbox tiny, exactly over the clicked thumbnail.
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
        }, 540);
      } else {
        overlay.style.display = "none";
        document.body.style.overflow = "";
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
  }, []);

  return (
    <div className="gallery-grid reveal-stagger" ref={containerRef}>
      {children}
    </div>
  );
}
