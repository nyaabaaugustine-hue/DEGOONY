"use client";

import { useRef } from "react";

export default function VideoFacade() {
  const shellRef = useRef<HTMLDivElement>(null);
  const facadeRef = useRef<HTMLDivElement>(null);

  function play() {
    const facade = facadeRef.current;
    const shell = shellRef.current;
    if (!facade || !shell) return;
    if (facade.classList.contains("playing")) return;
    facade.classList.add("playing");
    const ifr = document.createElement("iframe");
    ifr.src = "https://www.youtube-nocookie.com/embed/iU7TFtw2dEk?rel=0&autoplay=1";
    ifr.title = "Bajaj RE 4S Tricycle product knowledge video";
    ifr.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    );
    ifr.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    ifr.allowFullscreen = true;
    ifr.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0;";
    shell.appendChild(ifr);
  }

  function onKey(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      play();
    }
  }

  return (
    <div className="video-shell reveal" id="videoShell" ref={shellRef}>
      <div
        className="video-facade"
        id="videoFacade"
        role="button"
        tabIndex={0}
        aria-label="Play video: Bajaj RE 4S Tricycle product knowledge"
        onClick={play}
        onKeyDown={onKey}
        ref={facadeRef}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="videoThumb"
          src="https://i.ytimg.com/vi/iU7TFtw2dEk/maxresdefault.jpg"
          alt="Bajaj RE 4S Tricycle product knowledge video"
        />
        <span className="video-play">
          <i className="fas fa-play"></i>
        </span>
      </div>
    </div>
  );
}
