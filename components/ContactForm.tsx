"use client";

import { useState } from "react";

export default function ContactForm({
  formAction,
}: {
  formAction: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const required = Array.from(form.querySelectorAll<HTMLInputElement>("[required]"));
    let valid = true;
    required.forEach((f) => {
      if (!f.value.trim()) {
        valid = false;
        f.style.borderColor = "#e74c3c";
      } else {
        f.style.borderColor = "#d0d0d0";
      }
    });
    if (!valid) return;
    setSubmitting(true);
    try {
      await fetch(formAction, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      setDone(true);
    } catch {
      setSubmitting(false);
      alert("Something went wrong. Please try again or call us on +233 550 593182.");
    }
  }

  if (done) {
    return (
      <div className="form-completed" style={{ padding: "60px 40px", textAlign: "center" }}>
        <div
          style={{
            width: 64,
            height: 64,
            background: "linear-gradient(135deg,#4db848,#00703c)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style={{ color: "#00703c", fontSize: 24, marginBottom: 12, fontFamily: "'Lora',Georgia,serif" }}>
          Thank You!
        </h3>
        <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7 }}>
          Your enquiry has been sent to our Kumasi team.
          <br />
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="form_type" value="General Enquiry Form" />
      <div className="form-fields form-pad">
        <div className="form-heading">
          <span className="kicker">Contact</span>
          <h2 className="dark-green">Get a quote or apply to the Academy</h2>
          <p>
            Tell us what you need — a tricycle, spare parts, an Evergreen fleet
            lease, or an Academy application — and our Kumasi team will get back
            to you within one business day.
          </p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" id="firstName" name="FirstName" className="form-control" required />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" id="lastName" name="LastName" className="form-control" required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="form-group">
              <label htmlFor="phone">Phone*</label>
              <input type="tel" id="phone" name="PhoneNumber" className="form-control" required />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="interest">I&apos;m interested in*</label>
              <select id="interest" name="Interest" className="form-control" required defaultValue="">
                <option value="" disabled>Select an option…</option>
                <option value="bajaj-tvs">Buying a Bajaj or TVS Pragia</option>
                <option value="spare-parts">Spare Parts</option>
                <option value="Evergreen-leasing">Evergreen Electric Fleet — Leasing</option>
                <option value="academy-application">Evergreen Academy Application</option>
                <option value="general">General Enquiry</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="Message" className="form-control" rows={4} placeholder="Tell us about your routes, quantities, or training needs…"></textarea>
            </div>
          </div>
        </div>
        <div className="row form-footer-row">
          <div className="col-xs-12 col-sm-8">
            <p className="small required-note">(*) Required field</p>
          </div>
          <div className="col-xs-12 col-sm-4">
            <button type="submit" className="btn primary btn-block" disabled={submitting}>
              {submitting ? "Sending..." : "Send Enquiry"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
