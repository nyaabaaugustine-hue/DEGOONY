"use client";

import { useEffect, useState } from "react";

export default function PromoModal() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    try {
      await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (form.action) setSuccess(true);
    } catch {
      setSubmitting(false);
      alert("Something went wrong. Please try again or call us on 055 059 3182.");
    }
  }

  return (
    <div className="promo-overlay open" id="promoOverlay" aria-hidden="false">
      <div className="promo-modal" role="dialog" aria-modal="true" aria-labelledby="promoTitle">
        <button
          type="button"
          className="promo-close"
          id="promoClose"
          aria-label="Close"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <div className="promo-media" id="promoMedia">
          <img
            src="/assets/vvvvv-opt.webp"
            alt="DEGOONY EVERGREEN LOGISTICS GHANA LTD rider on a Bajaj Pragia tricycle"
          />
        </div>
        {!success ? (
          <>
            <div className="promo-head">
              <span className="promo-badge">
                <i className="fas fa-motorcycle"></i> Evergreen Partner Programme
              </span>
              <h3 id="promoTitle">
                Want to earn <em>GHS&nbsp;5,000&nbsp;&ndash;&nbsp;10,000</em>{" "}
                monthly?
              </h3>
              <p>
                Ride or own a Bajaj Pragia tricycle with Ghana&rsquo;s fastest-growing
                logistics network. Fill this form and an executive will get in touch
                with you.
              </p>
            </div>
            <form
              className="promo-form"
              id="promoForm"
              method="POST"
              action="https://formspree.io/f/meajwbky"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form_type" value="Homepage Promo Lead" />
              <div className="promo-field">
                <input
                  type="text"
                  name="FullName"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="promo-field">
                <input
                  type="tel"
                  name="PhoneNumber"
                  placeholder="Phone number (e.g. 0550 000 000)"
                  required
                />
              </div>
              <div className="promo-field">
                <select name="Interest" required defaultValue="">
                  <option value="" disabled>
                    I am interested in&hellip;
                  </option>
                  <option>Ride-to-Earn (drive &amp; earn)</option>
                  <option>Buying a tricycle</option>
                  <option>Fleet / business partnership</option>
                </select>
              </div>
              <button type="submit" className="btn primary promo-cta" disabled={submitting}>
                <span>
                  {submitting ? "Sending..." : (
                    <>
                      Get a Call Back <i className="fas fa-arrow-right"></i>
                    </>
                  )}
                </span>
              </button>
              <p className="promo-fine">
                No spam. An Evergreen executive will contact you within 24 hours.
              </p>
            </form>
          </>
        ) : (
          <div className="promo-success" id="promoSuccess">
            <i className="fas fa-check-circle"></i>
            <h4>You&rsquo;re in!</h4>
            <p>Your details are with our team. An executive will call you shortly.</p>
            <button
              type="button"
              className="btn primary"
              onClick={() => setOpen(false)}
            >
              <span>Continue to Site</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
