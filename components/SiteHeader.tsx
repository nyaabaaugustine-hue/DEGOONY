"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const pageNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "News", href: "/news" },
  { label: "Spare Parts Shop", href: "/spare-parts-shop" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openChild, setOpenChild] = useState<string | null>("tricycles");
  const navRef = useRef<HTMLUListElement>(null);

  // Align the page-nav tab track's left edge under "Tricycles & Parts" (mega menu start)
  function alignPageNav() {
    const pn = navRef.current;
    if (!pn) return;
    const megaNav = document.querySelector(".mega-menu .mega-nav");
    const cont = pn.closest(".container-fluid");
    if (!megaNav || !cont) return;
    if (window.innerWidth < 1280) {
      pn.style.marginLeft = "";
      return;
    }
    const offset = Math.max(
      0,
      Math.round(
        (megaNav as HTMLElement).getBoundingClientRect().left -
          cont.getBoundingClientRect().left -
          (parseFloat(getComputedStyle(cont).paddingLeft) || 0)
      )
    );
    pn.style.marginLeft = offset + "px";
  }

  // Segmented-tab slider: injects the sliding green indicator and glides it to
  // the hovered tab, snapping back to the active tab on mouseleave / route change.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let ind = nav.querySelector<HTMLElement>(".page-nav-indicator");
    if (!ind) {
      ind = document.createElement("span");
      ind.className = "page-nav-indicator";
      nav.appendChild(ind);
    }
    const links = Array.prototype.slice.call(nav.querySelectorAll("li > a")) as HTMLElement[];
    if (!links.length) return;

    const moveTo = (el: HTMLElement | null) => {
      if (!el || !ind) return;
      const r = el.getBoundingClientRect();
      const nr = nav.getBoundingClientRect();
      ind.style.width = r.width + "px";
      ind.style.transform =
        "translateX(" + Math.round(r.left - nr.left) + "px)";
    };

    const snapToActive = () => {
      const activeLink =
        (nav.querySelector("li.active > a") as HTMLElement) || links[0];
      moveTo(activeLink);
    };

    links.forEach((a) => {
      a.addEventListener("mouseenter", () => moveTo(a));
    });
    nav.addEventListener("mouseleave", snapToActive);
    window.addEventListener("resize", snapToActive);
    window.addEventListener("load", snapToActive);

    requestAnimationFrame(snapToActive);
    return () => {
      links.forEach((a) => a.removeEventListener("mouseenter", () => moveTo(a)));
      nav.removeEventListener("mouseleave", snapToActive);
      window.removeEventListener("resize", snapToActive);
      window.removeEventListener("load", snapToActive);
      ind?.remove();
    };
  }, [pathname]);

  useEffect(() => {
    alignPageNav();
    window.addEventListener("resize", alignPageNav);
    return () => window.removeEventListener("resize", alignPageNav);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleChild = (key: string) =>
    setOpenChild((cur) => (cur === key ? null : key));

  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelectorAll(".sub-menu-mobile.active").forEach((sm) => {
      sm.classList.remove("active");
    });
    document.querySelectorAll(".mega-nav-mobile .has-children.active").forEach((li) => {
      li.classList.remove("active");
    });
  };

  return (
    <>
      <header
        className={`home-page-header ${scrolled ? "scrolled" : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <Link
              className="logo-anchor brand-lockup"
              href="/"
              aria-label="DEGOONY EVERGREEN LOGISTICS GHANA LTD home"
            >
              <span className="brand-mark">
                <img
                  src="/assets/logo-256.png"
                  alt="DEGOONY EVERGREEN LOGISTICS GHANA LTD logo"
                />
              </span>
              <span className="brand-text">
                <span className="brand-line1">DEGOONY</span>
                <span className="brand-line2">EVERGREEN</span>
              </span>
            </Link>
          </div>
          <div className="hamburger-menu" id="hamburger">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(true);
              }}
              aria-label="Open menu"
              className="hamburger-btn"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="menu-alt-text">Menu</span>
            </a>
          </div>
          <div className="navigation-links">
            <div className="nav-links">
              <div className="utility-nav">
                <ul className="nav-utility">
                  <li>
                    <Link className="login-link" href="/contact">
                      Academy Login
                    </Link>
                  </li>
                  <li>
                    <Link href="/academy">Driver Resources</Link>
                  </li>
                  <li>
                    <Link href="/driver-careers">Drive with Evergreen</Link>
                  </li>
                  <li>
                    <Link href="/contact#location">Find Our Showroom</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mega-menu">
              <div className="menu-list">
                <ul className="mega-nav">
                  <li>
                    <Link href="/tricycles">Tricycles &amp; Parts</Link>
                    <div className="sub-menu">
                      <p>
                        <Link href="/tricycles">
                          Tricycles &amp; Parts{" "}
                          <i className="fas fa-arrow-circle-right sub-menu-arrow"></i>
                        </Link>
                      </p>
                      <ul className="large-dropdown">
                        <li>
                          <Link href="/tricycles#bajaj">Bajaj Pragia</Link>
                        </li>
                        <li>
                          <Link href="/tricycles#tvs">TVS Pragia</Link>
                        </li>
                        <li>
                          <Link href="/spare-parts">Genuine Spare Parts</Link>
                        </li>
                        <li>
                          <Link href="/tricycles">Cargo &amp; Passenger Bodies</Link>
                        </li>
                        <li>
                          <Link href="/contact">Request a Price List</Link>
                        </li>
                        <li>
                          <Link href="/contact">Financing Enquiries</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link href="/elecer">Evergreen Electric Fleet</Link>
                    <div className="sub-menu">
                      <p>
                        <Link href="/elecer">
                          Evergreen Electric Fleet{" "}
                          <i className="fas fa-arrow-circle-right sub-menu-arrow"></i>
                        </Link>
                      </p>
                      <ul className="large-dropdown">
                        <li>
                          <Link href="/elecer">Battery &amp; Charging Management</Link>
                        </li>
                        <li>
                          <Link href="/elecer#geofencing">GPS &amp; Geofencing</Link>
                        </li>
                        <li>
                          <Link href="/elecer#battery-swap">Battery Swap Network</Link>
                        </li>
                        <li>
                          <Link href="/elecer#leasing">Fleet Leasing for Operators</Link>
                        </li>
                        <li>
                          <Link href="/academy">Daily Inspection Standards</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link href="/academy">Evergreen Academy</Link>
                    <div className="sub-menu">
                      <p>
                        <Link href="/academy">
                          Evergreen Academy{" "}
                          <i className="fas fa-arrow-circle-right sub-menu-arrow"></i>
                        </Link>
                      </p>
                      <ul className="large-dropdown">
                        <li>
                          <Link href="/academy#certification">
                            Driver Certification Levels
                          </Link>
                        </li>
                        <li>
                          <Link href="/academy">Orientation Programme</Link>
                        </li>
                        <li>
                          <Link href="/academy#safety">Safety &amp; Defensive Riding</Link>
                        </li>
                        <li>
                          <Link href="/apply">Apply to the Academy</Link>
                        </li>
                        <li>
                          <Link href="/driver-careers">
                            Driver Careers — Salary + Commission
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="btn primary small">
                Get a Quote
              </Link>
            </div>
          </div>
          <ul className="page-nav" ref={navRef}>
            {pageNav.map((p) => (
              <li className={active(p.href) ? "active" : ""} key={p.href}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-links active" id="mobileMenu">
          <div className="mobile-nav-links">
            <div className="utility-nav-mobile">
              <Link
                className="logo-anchor brand-lockup"
                href="/"
                onClick={closeMenu}
              >
                <span className="brand-mark">
                  <img
                    src="/assets/logo-256.png"
                    alt="DEGOONY EVERGREEN LOGISTICS GHANA LTD logo"
                  />
                </span>
                <span className="brand-text">
                  <span className="brand-line1">DEGOONY</span>
                  <span className="brand-line2">EVERGREEN</span>
                </span>
              </Link>
              <span
                className="close-icon"
                id="closeMobile"
                onClick={closeMenu}
              ></span>
              <ul className="nav-utility">
                <li>
                  <Link href="/contact" onClick={closeMenu}>
                    Academy Login
                  </Link>
                </li>
                <li>
                  <Link href="/academy" onClick={closeMenu}>
                    Driver Resources
                  </Link>
                </li>
                <li>
                  <Link href="/contact#location" onClick={closeMenu}>
                    Find Our Showroom
                  </Link>
                </li>
              </ul>
              <ul className="page-nav-mobile">
                {pageNav.map((p) => (
                  <li
                    className={active(p.href) ? "active" : ""}
                    key={p.href}
                  >
                    <Link href={p.href} onClick={closeMenu}>
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="menu-list">
                <ul className="mega-nav-mobile">
                  <li className={`has-children ${openChild === "tricycles" ? "active" : ""}`}>
                    <Link href="/tricycles" onClick={closeMenu}>Tricycles &amp; Parts</Link>
                    <span
                      className="sub-menu-trigger"
                      onClick={() => toggleChild("tricycles")}
                    ></span>
                    <div className={`sub-menu-mobile ${openChild === "tricycles" ? "active" : ""}`}>
                      <ul className="large-dropdown">
                        <li>
                          <Link href="/tricycles#bajaj" onClick={closeMenu}>Bajaj Pragia</Link>
                        </li>
                        <li>
                          <Link href="/tricycles#tvs" onClick={closeMenu}>TVS Pragia</Link>
                        </li>
                        <li>
                          <Link href="/spare-parts" onClick={closeMenu}>Genuine Spare Parts</Link>
                        </li>
                        <li>
                          <Link href="/spare-parts-shop" onClick={closeMenu}>Spare Parts Shop</Link>
                        </li>
                        <li>
                          <Link href="/tricycles" onClick={closeMenu}>Cargo &amp; Passenger Bodies</Link>
                        </li>
                        <li>
                          <Link href="/contact" onClick={closeMenu}>Request a Price List</Link>
                        </li>
                        <li>
                          <Link href="/contact" onClick={closeMenu}>Financing Enquiries</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={`has-children ${openChild === "elecer" ? "active" : ""}`}>
                    <Link href="/elecer" onClick={closeMenu}>Evergreen Electric Fleet</Link>
                    <span
                      className="sub-menu-trigger"
                      onClick={() => toggleChild("elecer")}
                    ></span>
                    <div className={`sub-menu-mobile ${openChild === "elecer" ? "active" : ""}`}>
                      <ul className="large-dropdown">
                        <li>
                          <Link href="/elecer" onClick={closeMenu}>Battery &amp; Charging Management</Link>
                        </li>
                        <li>
                          <Link href="/elecer#geofencing" onClick={closeMenu}>GPS &amp; Geofencing</Link>
                        </li>
                        <li>
                          <Link href="/elecer#battery-swap" onClick={closeMenu}>Battery Swap Network</Link>
                        </li>
                        <li>
                          <Link href="/elecer#leasing" onClick={closeMenu}>Fleet Leasing for Operators</Link>
                        </li>
                        <li>
                          <Link href="/academy" onClick={closeMenu}>Daily Inspection Standards</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={`has-children ${openChild === "academy" ? "active" : ""}`}>
                    <Link href="/academy" onClick={closeMenu}>Evergreen Academy</Link>
                    <span
                      className="sub-menu-trigger"
                      onClick={() => toggleChild("academy")}
                    ></span>
                    <div className={`sub-menu-mobile ${openChild === "academy" ? "active" : ""}`}>
                      <ul className="large-dropdown">
                        <li>
                          <Link href="/academy#certification" onClick={closeMenu}>
                            Driver Certification Levels
                          </Link>
                        </li>
                        <li>
                          <Link href="/academy" onClick={closeMenu}>Orientation Programme</Link>
                        </li>
                        <li>
                          <Link href="/academy#safety" onClick={closeMenu}>Safety &amp; Defensive Riding</Link>
                        </li>
                        <li>
                          <Link href="/apply" onClick={closeMenu}>Apply to the Academy</Link>
                        </li>
                        <li>
                          <Link href="/driver-careers" onClick={closeMenu}>
                            Driver Careers — Salary + Commission
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="btn primary small"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
