"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // On every route change, scroll to top unless we're navigating to an
    // in-page anchor (which should scroll to that section instead).
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  // On initial load / hard reload: disable the browser's scroll restoration
  // (which can reopen mid-page) and start at the top, unless a hash deep-link
  // is present (e.g. /tricycles#bajaj) which should jump to that section.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}