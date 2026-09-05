"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      await fetch("https://formspree.io/f/meajwbky", {
        method: "POST",
        body: new FormData(
          document.getElementById("newsletterForm") as HTMLFormElement
        ),
        headers: { Accept: "application/json" },
      }).catch(() => {});
    } catch {}
    setSubscribed(true);
  }

  return (
    <footer id="showroom">
      <div className="super-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-brand-col">
              <Link className="logo-anchor brand-lockup" href="/">
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
              <p className="footer-tagline">
                &ldquo;Governance Creates Stability. Stability Creates Growth.&rdquo;
              </p>
              <p className="footer-mission">Every Ride Creates Opportunity.</p>
            </div>
            <div className="col-md-4">
              <div className="email-subscription section">
                <div className="subscription-section">
                  <div>
                    <h3>Academy &amp; fleet updates</h3>
                    <p className="small">
                      We&apos;ll send price-list, Academy intake, and
                      fleet-availability updates.
                    </p>
                  </div>
                  <div className="input-section">
                    {subscribed ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "8px 0",
                        }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{ color: "#00703c", fontSize: 20 }}
                        ></i>
                        <p
                          style={{
                            color: "#00703c",
                            fontWeight: 700,
                            fontSize: 14,
                            margin: 0,
                          }}
                        >
                          Thank you for subscribing!
                        </p>
                      </div>
                    ) : (
                      <form
                        className="newsletter-form"
                        method="POST"
                        id="newsletterForm"
                        action="https://formspree.io/f/meajwbky"
                        onSubmit={handleSubscribe}
                      >
                        <input
                          type="hidden"
                          name="form_type"
                          value="Newsletter Signup"
                        />
                        <label htmlFor="newsletterEmail">Email</label>
                        <div className="input-group">
                          <input
                            type="email"
                            id="newsletterEmail"
                            name="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <button
                            type="submit"
                            className="btn-subscribe"
                            aria-label="Subscribe to newsletter"
                          >
                            <span>Subscribe</span>
                            <i className="fas fa-arrow-right" aria-hidden="true"></i>
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="location-finder-cta section">
                <div className="locator-section">
                  <h3>
                    <i className="fas fa-map-marker-alt"></i> Visit our Kumasi
                    showroom
                  </h3>
                  <address className="location-address">
                    Near MTN Office, Suame&ndash;Makro
                    <br />
                    Ashanti, Kumasi, Ghana
                    <br />
                    <br />
                    <strong>Accra HQ:</strong> 45 Independence Ave, Accra
                    <br />
                    <strong>US Office:</strong> 123 Innovation Drive, Richmond,
                    VA, USA
                  </address>
                  <ul className="contact-list">
                    <li>
                      <a href="tel:+233550593182">
                        <i className="fas fa-phone-alt"></i> +233 550 593182
                      </a>
                    </li>
                    <li>
                      <a href="tel:+233558444062">
                        <i className="fas fa-phone-alt"></i> +233 558 444062
                      </a>
                    </li>
                    <li>
                      <a href="tel:+233243901731">
                        <i className="fas fa-phone-alt"></i> +233 24 390 1731
                        (Accra)
                      </a>
                    </li>
                    <li>
                      <a href="tel:+18045643466">
                        <i className="fas fa-phone-alt"></i> +1 (804) 564-3466
                        (USA)
                      </a>
                    </li>
                    <li>
                      <a href="mailto:stowjenfa@gmail.com">
                        <i className="fas fa-envelope"></i> stowjenfa@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@evergreenlogistics.com">
                        <i className="fas fa-envelope"></i>{" "}
                        info@evergreenlogistics.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="primary-footer-section">
        <div className="container-fluid wrapper">
          <div className="row">
            <div className="company-links">
              <p className="section-title detail">COMPANY</p>
              <div className="links-wrapper">
                <ul className="company-links-list">
                  <li>
                    <Link href="/about">About / Declaration</Link>
                  </li>
                  <li>
                    <Link href="/contact">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact#location">Our Kumasi Location</Link>
                  </li>
                  <li>
                    <Link href="/academy">Evergreen Academy</Link>
                  </li>
                </ul>
                <ul className="company-links-list">
                  <li>
                    <Link href="/tricycles">Tricycle Sales</Link>
                  </li>
                  <li>
                    <Link href="/elecer">Evergreen Fleet Leasing</Link>
                  </li>
                  <li>
                    <Link href="/contact">Partnerships</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="services-links">
              <p className="section-title detail">SERVICES</p>
              <div className="links-wrapper">
                <ul className="services-links-list">
                  <li>
                    <Link href="/tricycles#bajaj">Bajaj Pragia Sales</Link>
                  </li>
                  <li>
                    <Link href="/tricycles#tvs">TVS Pragia Sales</Link>
                  </li>
                  <li>
                    <Link href="/spare-parts">Genuine Spare Parts</Link>
                  </li>
                  <li>
                    <Link href="/elecer#geofencing">GPS &amp; Geofencing</Link>
                  </li>
                  <li>
                    <Link href="/elecer">Battery &amp; Charging Management</Link>
                  </li>
                </ul>
                <ul className="services-links-list">
                  <li>
                    <Link href="/academy#certification">Driver Certification</Link>
                  </li>
                  <li>
                    <Link href="/driver-careers">Driver Careers</Link>
                  </li>
                  <li>
                    <Link href="/academy#safety">Safety &amp; Defensive Riding</Link>
                  </li>
                  <li>
                    <Link href="/elecer#leasing">Fleet Leasing</Link>
                  </li>
                  <li>
                    <Link href="/contact">Transparent Pricing</Link>
                  </li>
                  <li>
                    <Link href="/about">Governance Charter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="utility-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="footer-links col-xs-12 col-lg-7">
              <p className="copy-right-text no-margin">
                &copy; 2026 DEGOONY EVERGREEN LOGISTICS GHANA LTD. All Rights
                Reserved.
              </p>
            </div>
            <div className="efleets-links col-xs-12 col-lg-5">
              <p className="copy-right-text motto-line">
                &ldquo;Governance Creates Stability. Stability Creates
                Growth.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
