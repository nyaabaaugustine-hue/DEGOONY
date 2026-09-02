"use client";

import { useEffect, useRef, useState } from "react";

export default function AcademyForm({ formAction }: { formAction: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const confirmOverlayRef = useRef<HTMLDivElement>(null);
  const confirmRefNum = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const [progress, setProgress] = useState(0);
  const [section7Complete, setSection7Complete] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isFieldFilled = (
    el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  ) => {
    if (el.type === "checkbox") return (el as HTMLInputElement).checked;
    if (el.type === "radio") {
      return !!formRef.current?.querySelector(
        `input[name="${el.name}"]:checked`
      );
    }
    return el.value && el.value.trim().length > 0;
  };

  const calculateProgress = () => {
    const form = formRef.current;
    if (!form) return;
    const req = Array.from(
      form.querySelectorAll<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >("[required]")
    );
    const filled = req.filter(isFieldFilled);
    const pct = req.length ? Math.round((filled.length / req.length) * 100) : 0;
    setProgress(pct);
  };

  const updateSection7 = () => {
    const form = formRef.current;
    if (!form) return;
    const sec7 = form.querySelector<HTMLElement>('.f-card[data-section="7"]');
    if (!sec7) return;
    const reqFields = sec7.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >("[required]");
    const complete = Array.from(reqFields).every(isFieldFilled);
    setSection7Complete(complete);
  };

  useEffect(() => {
    // Original apply.html is a standalone page with its own dark photo
    // background; body.apply-bg recreates it around the shared layout.
    document.body.classList.add("apply-bg");
    return () => {
      document.body.classList.remove("apply-bg");
    };
  }, []);

  useEffect(() => {
    const animateOnScroll = (
      selector: string,
      cls = "visible",
      opts: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px" }
    ) => {
      const els = document.querySelectorAll(selector);
      if (!els.length) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(cls);
              obs.unobserve(entry.target);
            }
          });
        },
        opts
      );
      els.forEach((el) => obs.observe(el));
    };
    animateOnScroll(".form-title-block");
    animateOnScroll(".route-item", "animate", {
      threshold: 0.15,
      rootMargin: "0px",
    });

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".f-card"));
    const routeItems = Array.from(
      document.querySelectorAll<HTMLElement>(".route-item")
    );

    routeItems.forEach((item) => {
      item.addEventListener("click", () => {
        const target = document.getElementById(item.dataset.target || "");
        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            const idx = (entry.target as HTMLElement).dataset.section;
            routeItems.forEach((r) => r.classList.remove("active"));
            const active = document.querySelector(
              `.route-item[data-target="sec-${idx}"]`
            );
            if (active) active.classList.add("active");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px" }
    );
    cards.forEach((c) => io.observe(c));

    const timeout = window.setTimeout(() => {
      cards.forEach((c) => {
        if (c.getBoundingClientRect().top < window.innerHeight) {
          c.classList.add("in-view");
        }
      });
    }, 100);

    calculateProgress();
    updateSection7();

    return () => {
      window.clearTimeout(timeout);
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleInput() {
    calculateProgress();
    updateSection7();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    const status = statusRef.current;
    if (!form || !status) return;

    let valid = true;
    let firstInvalid: HTMLElement | null = null;

    form.querySelectorAll<HTMLElement>(".f-field").forEach((field) => {
      const input = field.querySelector<HTMLInputElement>("input,select,textarea");
      if (!input) return;
      field.classList.remove("error");
      if (input.hasAttribute("required")) {
        let ok = true;
        if (input.type === "checkbox") ok = input.checked;
        else if (input.type === "radio")
          ok = !!form.querySelector(`input[name="${input.name}"]:checked`);
        else
          ok =
            !!input.value &&
            input.value.trim().length > 0 &&
            input.checkValidity();
        if (!ok) {
          field.classList.add("error");
          valid = false;
          if (!firstInvalid) firstInvalid = field;
        }
      }
    });

    const ack = form.querySelector<HTMLInputElement>('input[name="ack"]');
    if (ack && !ack.checked) {
      valid = false;
      if (!firstInvalid) firstInvalid = ack.closest(".checkbox-row");
    }

    if (!valid) {
      if (firstInvalid)
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      status.classList.remove("show", "error");
      return;
    }

    const btn = submitBtnRef.current;
    if (btn) {
      btn.disabled = true;
      btn.textContent = "Submitting…";
    }
    setSubmitting(true);
    status.classList.remove("show", "error");

    const ref = "DEG-" + Math.floor(100000 + Math.random() * 899999);
    const payload = new FormData(form);
    payload.append("application_ref", ref);

    fetch(form.action, {
      method: "POST",
      body: payload,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("submit-failed");
        if (confirmRefNum.current)
          confirmRefNum.current.textContent = "Reference: " + ref;
        if (confirmOverlayRef.current)
          confirmOverlayRef.current.classList.add("show");
        form.reset();
        calculateProgress();
        updateSection7();
      })
      .catch(() => {
        status.textContent =
          "Your application could not be submitted right now. Please call +233 550 593 182 to apply by phone, or try again shortly.";
        status.classList.add("show", "error");
      })
      .finally(() => {
        if (btn) {
          btn.disabled = false;
          btn.textContent = "Submit Application →";
        }
        setSubmitting(false);
      });
  }

  function closeConfirm() {
    if (confirmOverlayRef.current)
      confirmOverlayRef.current.classList.remove("show");
  }

  return (
    <>
      <section className="form-section" id="apply">
        <form
          className="form-shell"
          id="academyForm"
          action={formAction}
          method="POST"
          noValidate
          ref={formRef}
          onSubmit={handleSubmit}
          onInput={handleInput}
          onChange={handleInput}
        >
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
            aria-hidden="true"
          />
          <input
            type="hidden"
            name="form_type"
            value="Evergreen Academy Application"
          />

          <div className="form-letterhead">
            <img
              src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1783946582/logo_e0i1op.jpg"
              alt="DEGOONY EVERGREEN LOGISTICS GHANA LTD letterhead"
              loading="lazy"
              decoding="async"
            />
            <div className="fh-meta">
              FORM-HR-001 (v2.0)
              <br />
              Evergreen Academy Application
            </div>
          </div>

          <div className="form-title-block">
            <span className="kicker">Evergreen Academy</span>
            <h2>Evergreen Academy Application</h2>
            <p>
              Complete every field in full and legibly. Fields marked{" "}
              <span style={{ color: "#C0392B" }}>*</span> are required before
              submission. Your details are used only for our recruiting and
              training process.
            </p>
          </div>

          <div className="progress-wrap">
            <div className="progress-bar">
              <div
                className="progress-fill"
                id="progressFill"
                style={{ width: progress + "%" }}
              ></div>
            </div>
            <div className="progress-label">
              <span id="progressText">{progress}% complete</span>
              <span>7 sections</span>
            </div>
          </div>

          {/* ROUTE NAV */}
          <nav className="route-nav" id="routeNav">
            <div className="route-item active" data-target="sec-1">
              <span className="r-num">01</span>
              <span className="r-label">Position</span>
            </div>
            <div className="route-item" data-target="sec-2">
              <span className="r-num">02</span>
              <span className="r-label">Personal Info</span>
            </div>
            <div className="route-item" data-target="sec-3">
              <span className="r-num">03</span>
              <span className="r-label">Emergency Contact</span>
            </div>
            <div className="route-item" data-target="sec-4">
              <span className="r-num">04</span>
              <span className="r-label">Education</span>
            </div>
            <div className="route-item" data-target="sec-5">
              <span className="r-num">05</span>
              <span className="r-label">Employment History</span>
            </div>
            <div className="route-item" data-target="sec-6">
              <span className="r-num">06</span>
              <span className="r-label">Driver Info</span>
            </div>
            <div className="route-item" data-target="sec-7">
              <span className="r-num">07</span>
              <span className="r-label">Guarantors &amp; Deposit</span>
            </div>
          </nav>

          {/* FORM MAIN */}
          <div className="form-main">
            {/* 01 POSITION */}
            <div className="f-card" id="sec-1" data-section="1">
              <div className="f-card-head">
                <span className="f-num">01</span>
                <h3>Position Information</h3>
              </div>
              <div className="f-grid">
                <div className="f-field">
                  <label htmlFor="position">
                    Position applied for<span className="req">*</span>
                  </label>
                  <select id="position" name="Position" required>
                    <option value="">Select a position</option>
                    <option>Tricycle (Pragia) Driver</option>
                    <option>Delivery Rider</option>
                    <option>Logistics Coordinator</option>
                    <option>Workshop / Spare Parts Assistant</option>
                    <option>Other</option>
                  </select>
                  <span className="f-error">
                    Please select the position you&apos;re applying for.
                  </span>
                </div>
                <div className="f-field">
                  <label htmlFor="dateOfApplication">
                    Date of application<span className="req">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfApplication"
                    name="DateOfApplication"
                    required
                  />
                  <span className="f-error">
                    Please enter today&apos;s date.
                  </span>
                </div>
                <div className="f-field">
                  <label htmlFor="preferredLocation">
                    Preferred work location<span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="preferredLocation"
                    name="PreferredLocation"
                    placeholder="e.g. Suame–Makro, Kumasi"
                    required
                  />
                  <span className="f-error">
                    Please tell us your preferred location.
                  </span>
                </div>
                <div className="f-field">
                  <label htmlFor="expectedStartDate">
                    Expected start date
                    <span className="opt">(optional)</span>
                  </label>
                  <input
                    type="date"
                    id="expectedStartDate"
                    name="ExpectedStartDate"
                  />
                </div>
              </div>
            </div>

            {/* 02 PERSONAL */}
            <div className="f-card" id="sec-2" data-section="2">
              <div className="f-card-head">
                <span className="f-num">02</span>
                <h3>Personal Information</h3>
              </div>
              <div className="f-grid">
                <div className="f-field full">
                  <label htmlFor="fullName">
                    Full name<span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="FullName"
                    placeholder="As it appears on your Ghana Card"
                    required
                  />
                  <span className="f-error">Please enter your full name.</span>
                </div>
                <div className="f-field">
                  <label htmlFor="dateOfBirth">
                    Date of birth<span className="req">*</span>
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="DateOfBirth"
                    required
                  />
                  <span className="f-error">
                    Please enter your date of birth.
                  </span>
                </div>
                <div className="f-field">
                  <label htmlFor="ghanaCardNumber">
                    Ghana Card number<span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="ghanaCardNumber"
                    name="GhanaCardNumber"
                    placeholder="GHA-XXXXXXXXX-X"
                    pattern="GHA-[0-9]{9}-[0-9]"
                    required
                  />
                  <span className="f-hint">Format: GHA-000000000-0</span>
                  <span className="f-error">
                    Please enter a valid Ghana Card number.
                  </span>
                </div>
                <div className="f-field">
                  <label htmlFor="licenceNumber">
                    Driver&apos;s licence number
                    <span className="opt">(if applicable)</span>
                  </label>
                  <input
                    type="text"
                    id="licenceNumber"
                    name="LicenceNumber"
                    placeholder="e.g. DVLA licence number"
                  />
                </div>
                <div className="f-field">
                  <label htmlFor="phone">
                    Phone number<span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="Phone"
                    placeholder="+233 5X XXX XXXX"
                    required
                  />
                  <span className="f-error">
                    Please enter a valid phone number.
                  </span>
                </div>
                <div className="f-field">
                  <label htmlFor="email">
                    Email address
                    <span className="opt">(optional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="f-field full">
                  <label htmlFor="residentialAddress">
                    Residential address<span className="req">*</span>
                  </label>
                  <textarea
                    id="residentialAddress"
                    name="ResidentialAddress"
                    placeholder="Include a nearby landmark"
                    required
                  ></textarea>
                  <span className="f-error">
                    Please include your address and a landmark.
                  </span>
                </div>
              </div>
            </div>

            {/* 03 EMERGENCY */}
            <div className="f-card" id="sec-3" data-section="3">
              <div className="f-card-head">
                <span className="f-num">03</span>
                <h3>Emergency Contact</h3>
              </div>
              <div className="f-note">
                This is a next-of-kin contact for personal emergencies —
                separate from the two Guarantors required in Section 7.
              </div>
              <div className="f-grid">
                <div className="f-field">
                  <label htmlFor="emergencyName">
                    Name<span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="emergencyName"
                    name="EmergencyName"
                    required
                  />
                  <span className="f-error">Please enter a contact name.</span>
                </div>
                <div className="f-field">
                  <label htmlFor="emergencyRelationship">
                    Relationship<span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="emergencyRelationship"
                    name="EmergencyRelationship"
                    placeholder="e.g. Mother, Brother, Spouse"
                    required
                  />
                  <span className="f-error">
                    Please enter the relationship.
                  </span>
                </div>
                <div className="f-field full">
                  <label htmlFor="emergencyPhone">
                    Phone number<span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="EmergencyPhone"
                    placeholder="+233 5X XXX XXXX"
                    required
                  />
                  <span className="f-error">
                    Please enter a valid phone number.
                  </span>
                </div>
              </div>
            </div>

            {/* 04 EDUCATION */}
            <div className="f-card" id="sec-4" data-section="4">
              <div className="f-card-head">
                <span className="f-num">04</span>
                <h3>Education</h3>
              </div>
              <div className="f-grid">
                <div className="f-field">
                  <label htmlFor="educationLevel">
                    Highest educational level<span className="req">*</span>
                  </label>
                  <select id="educationLevel" name="EducationLevel" required>
                    <option value="">Select level</option>
                    <option>Basic Education Certificate (BECE)</option>
                    <option>Senior High School (SHS/WASSCE)</option>
                    <option>Technical / Vocational Certificate</option>
                    <option>Diploma</option>
                    <option>Bachelor&apos;s Degree</option>
                    <option>Other / None</option>
                  </select>
                  <span className="f-error">
                    Please select your highest level of education.
                  </span>
                </div>
                <div className="f-field">
                  <label htmlFor="institution">
                    Institution<span className="opt">(optional)</span>
                  </label>
                  <input type="text" id="institution" name="Institution" />
                </div>
                <div className="f-field full">
                  <label htmlFor="course">
                    Programme / course
                    <span className="opt">(optional)</span>
                  </label>
                  <input type="text" id="course" name="Course" />
                </div>
              </div>
            </div>

            {/* 05 EMPLOYMENT HISTORY */}
            <div className="f-card" id="sec-5" data-section="5">
              <div className="f-card-head">
                <span className="f-num">05</span>
                <h3>Employment History</h3>
              </div>
              <div className="f-grid">
                <div className="f-field">
                  <label htmlFor="recentEmployer">
                    Most recent employer
                    <span className="opt">(if applicable)</span>
                  </label>
                  <input type="text" id="recentEmployer" name="RecentEmployer" />
                </div>
                <div className="f-field">
                  <label htmlFor="employerPhone">
                    Employer phone / contact
                  </label>
                  <input type="tel" id="employerPhone" name="EmployerPhone" />
                </div>
                <div className="f-field">
                  <label htmlFor="positionHeld">Position held</label>
                  <input type="text" id="positionHeld" name="PositionHeld" />
                </div>
                <div className="f-field">
                  <label htmlFor="reasonForLeaving">Reason for leaving</label>
                  <input
                    type="text"
                    id="reasonForLeaving"
                    name="ReasonForLeaving"
                  />
                </div>
              </div>
            </div>

            {/* 06 DRIVER INFO */}
            <div className="f-card" id="sec-6" data-section="6">
              <div className="f-card-head">
                <span className="f-num">06</span>
                <h3>Driver Information</h3>
              </div>
              <div className="f-grid">
                <div className="f-field">
                  <label htmlFor="licenceClass">
                    Licence class<span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="licenceClass"
                    name="LicenceClass"
                    placeholder="e.g. Class B"
                    required
                  />
                  <span className="f-error">
                    Please enter your licence class.
                  </span>
                </div>
                <div className="f-field">
                  <label htmlFor="yearsExperience">
                    Years of driving experience<span className="req">*</span>
                  </label>
                  <input
                    type="number"
                    id="yearsExperience"
                    name="YearsExperience"
                    min={0}
                    max={70}
                    required
                  />
                  <span className="f-error">
                    Please enter your years of experience.
                  </span>
                </div>
                <div className="f-field full">
                  <label htmlFor="accidentHistory">
                    Accident history
                    <span className="opt">(if any)</span>
                  </label>
                  <textarea
                    id="accidentHistory"
                    name="AccidentHistory"
                    placeholder="Describe briefly, or write 'None'"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* 07 GUARANTORS */}
            <div className="f-card" id="sec-7" data-section="7">
              <div className="f-card-head">
                <span className="f-num">07</span>
                <h3>Guarantors &amp; Security Deposit</h3>
                <span className="f-sub">
                  Section 4 of the Onboarding Booklet
                </span>
              </div>
              <div
                className={
                  "section-guidance" + (section7Complete ? " show" : "")
                }
                data-section-complete="7"
              >
                <div className="check-icon">✓</div>
                <div className="section-guidance-text">
                  <h4>All sections complete!</h4>
                  <p>
                    You&apos;ve provided all required information, including
                    your two guarantors and deposit preference.
                  </p>
                  <div className="next-steps">
                    ✅ You&apos;re ready to submit. Review your information and
                    click <strong>&quot;Submit Application&quot;</strong> below
                    to send your application to our recruiting team.
                  </div>
                </div>
              </div>
              <div className="f-note">
                A Guarantor is not a character reference — they accept
                responsibility for helping recover company property if the
                applicant absconds, defaults on remittance, or is found liable
                for loss or damage. A civil/public servant or someone with a
                fixed address or visible employment in your community is
                preferred.
              </div>

              <div className="guarantor-block">
                <h4>
                  <span className="g-badge">01</span> Guarantor One
                </h4>
                <div className="f-grid">
                  <div className="f-field">
                    <label>
                      Full name<span className="req">*</span>
                    </label>
                    <input type="text" name="g1_name" required />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>
                      Ghana Card number<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="g1_card"
                      placeholder="GHA-XXXXXXXXX-X"
                      required
                    />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>
                      Occupation<span className="req">*</span>
                    </label>
                    <input type="text" name="g1_occupation" required />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>Employer / business name</label>
                    <input type="text" name="g1_employer" />
                  </div>
                  <div className="f-field full">
                    <label>
                      Residential address<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="g1_address"
                      placeholder="Include a landmark"
                      required
                    />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>
                      Phone number<span className="req">*</span>
                    </label>
                    <input type="tel" name="g1_phone" required />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>
                      Relationship to applicant<span className="req">*</span>
                    </label>
                    <input type="text" name="g1_relationship" required />
                    <span className="f-error">Required.</span>
                  </div>
                </div>
              </div>

              <div className="guarantor-block" style={{ marginTop: 18 }}>
                <h4>
                  <span className="g-badge">02</span> Guarantor Two
                </h4>
                <div className="f-grid">
                  <div className="f-field">
                    <label>
                      Full name<span className="req">*</span>
                    </label>
                    <input type="text" name="g2_name" required />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>
                      Ghana Card number<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="g2_card"
                      placeholder="GHA-XXXXXXXXX-X"
                      required
                    />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>
                      Occupation<span className="req">*</span>
                    </label>
                    <input type="text" name="g2_occupation" required />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>Employer / business name</label>
                    <input type="text" name="g2_employer" />
                  </div>
                  <div className="f-field full">
                    <label>
                      Residential address<span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      name="g2_address"
                      placeholder="Include a landmark"
                      required
                    />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>
                      Phone number<span className="req">*</span>
                    </label>
                    <input type="tel" name="g2_phone" required />
                    <span className="f-error">Required.</span>
                  </div>
                  <div className="f-field">
                    <label>
                      Relationship to applicant<span className="req">*</span>
                    </label>
                    <input type="text" name="g2_relationship" required />
                    <span className="f-error">Required.</span>
                  </div>
                </div>
              </div>

              <div className="f-field" style={{ marginTop: 22 }}>
                <label>
                  Security deposit / bond
                  <span className="opt">
                    (if position requires a company vehicle)
                  </span>
                </label>
                <div className="deposit-options" style={{ marginTop: 10 }}>
                  <label className="radio-card">
                    <input
                      type="radio"
                      name="deposit"
                      value="full"
                      required
                    />{" "}
                    Deposit paid in full before deployment
                  </label>
                  <label className="radio-card">
                    <input
                      type="radio"
                      name="deposit"
                      value="withholding"
                      required
                    />{" "}
                    Recovered via commission withholding
                  </label>
                </div>
                <span className="f-error">
                  Please select a deposit option.
                </span>
              </div>

              <div style={{ marginTop: 20 }}>
                <label className="checkbox-row">
                  <input
                    type="checkbox"
                    id="ack"
                    name="ack"
                    value="accepted"
                    required
                  />
                  <span>
                    I confirm that the information provided is accurate, and
                    that I have read and understood the Company Policy Summary,
                    including the Guarantor and Security Deposit terms.
                    <span className="req">*</span>
                  </span>
                </label>
              </div>
            </div>

            {/* SUBMIT */}
            <div className="submit-card">
              <div>
                <h3>Ready to submit?</h3>
                <p>
                  Our recruiting team will contact your Guarantors and verify
                  your Ghana Card and Driver&apos;s Licence before final
                  approval.
                </p>
              </div>
              <button
                type="submit"
                className="submit-btn"
                id="submitBtn"
                ref={submitBtnRef}
                disabled={submitting}
              >
                Submit Application →
              </button>
            </div>
          </div>
        </form>
        <p className="submit-status" id="submitStatus" ref={statusRef}></p>
      </section>

      {/* ================= CONFIRMATION OVERLAY ================= */}
      <div
        className="confirm-overlay"
        id="confirmOverlay"
        ref={confirmOverlayRef}
      >
        <div className="confirm-card">
          <div className="confirm-icon">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3>Application received</h3>
          <p>
            Thank you for applying to the Evergreen Academy. Our recruiting
            office will reach out by phone once your details and Guarantors have
            been reviewed.
          </p>
          <div className="confirm-ref" id="confirmRef" ref={confirmRefNum}>
            Reference: DEG-000000
          </div>
          <div className="confirm-actions">
            <button className="btn-solid" onClick={() => window.print()}>
              Save / print copy
            </button>
            <button className="btn-outline" onClick={closeConfirm}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
