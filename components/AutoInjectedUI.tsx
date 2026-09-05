"use client";

import { useEffect, useState } from "react";

export default function AutoInjectedUI() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("evergreen-theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if ((theme || (prefersDark ? "dark" : "light")) === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaderDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  function toggleTheme() {
    const dark =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (dark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("evergreen-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("evergreen-theme", "dark");
    }
  }

  return (
    <>
      <div
        className={`svg-loader${loaderDone ? " hidden" : ""}`}
        id="svgLoader"
        role="status"
        aria-label="Loading"
      >
        <div className="svg-frame">
          <svg viewBox="0 0 344 344" aria-hidden="true">
            <circle id="out1" cx="172" cy="172" r="160" fill="none" stroke="rgba(77,184,72,0.22)" strokeWidth="3" />
            <circle id="out2" cx="172" cy="172" r="146" fill="none" stroke="rgba(0,112,60,0.35)" strokeWidth="3" strokeDasharray="12 16" strokeLinecap="round" />
            <circle id="out3" cx="172" cy="172" r="128" fill="none" strokeWidth="4" strokeDasharray="60 42" strokeLinecap="round" />
            <circle id="inner1" cx="172" cy="172" r="84" fill="none" stroke="rgba(0,112,60,0.28)" strokeWidth="2.5" />
            <circle id="inner3" cx="172" cy="172" r="52" fill="none" stroke="rgba(77,184,72,0.5)" strokeWidth="2" strokeDasharray="5 9" strokeLinecap="round" />
            <circle id="center1" cx="172" cy="172" r="20" />
          </svg>
        </div>
        <p className="loader-brand">
          DEGOONY <span>EVERGREEN</span>
        </p>
        <p className="loader-tag">Logistics &amp; Mobility for Ghana</p>
      </div>

      <a
        className="whatsapp-float"
        href={
          "https://wa.me/233550593182?text=" +
          encodeURIComponent("Hello Degoony Evergreen! I'd like to make an enquiry.")
        }
        target="_blank"
        rel="noopener"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
          <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.7 31.3l7.9-2.1c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm0 27.7c-2.4 0-4.7-.7-6.7-1.9l-.5-.3-4.7 1.2 1.3-4.5-.3-.5c-1.3-2-2-4.4-2-6.8C3.1 8.9 8.9 3.1 16 3.1S28.9 8.9 28.9 16 23.1 28.5 16 28.5zm7-9.5c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.6-.9-.7h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 6 1 .4 1.7.7 2.3.9 1 .3 1.9.3 2.6.2.8-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
        </svg>
      </a>

      <button
        type="button"
        className="theme-float"
        aria-label="Toggle dark mode"
        onClick={toggleTheme}
      >
        <svg className="icon-moon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
        <svg
          className="icon-sun"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </button>

      {backToTop && (
        <button
          id="backToTop"
          type="button"
          className="show"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}

      <div id="socialRail" aria-label="Follow Degoony Evergreen">
        <a
          href="https://share.google/wTE1KsipxZ8YcIzFv"
          target="_blank"
          rel="noopener noreferrer"
          className="social-rail-cta"
          aria-label="Add a review for Degoony Evergreen"
        >
          <i className="fas fa-star" aria-hidden="true"></i>
          <span>Add Review</span>
        </a>
        <a
          href="https://facebook.com/degoonyevergreen"
          target="_blank"
          rel="noopener noreferrer"
          className="social-rail-btn"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a
          href="https://instagram.com/degoonyevergreen"
          target="_blank"
          rel="noopener noreferrer"
          className="social-rail-btn"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/degoony-evergreen-logistics-company-ltd"
          target="_blank"
          rel="noopener noreferrer"
          className="social-rail-btn"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a
          href="https://tiktok.com/@degoonyevergreen"
          target="_blank"
          rel="noopener noreferrer"
          className="social-rail-btn"
          aria-label="TikTok"
        >
          <i className="fab fa-tiktok" aria-hidden="true"></i>
        </a>
        <a
          href="https://youtube.com/@degoonyevergreen"
          target="_blank"
          rel="noopener noreferrer"
          className="social-rail-btn"
          aria-label="YouTube"
        >
          <i className="fab fa-youtube" aria-hidden="true"></i>
        </a>
      </div>
    </>
  );
}
