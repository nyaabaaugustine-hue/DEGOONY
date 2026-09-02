import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Level 3: Operational Certification | Evergreen Academy",
  description:
    "Route readiness, passenger care, and daily discipline — Certification Level 3 of 6 at DEGOONY EVERGREEN LOGISTICS GHANA LTD.",
  alternates: { canonical: "/academy/level-3-operational-certification" },
  openGraph: {
    title: "Level 3: Operational Certification | Evergreen Academy",
    description:
      "Route readiness, passenger care, and daily discipline.",
    images: ["/assets/banna-3.webp"],
    url: "https://www.evergreenlogistics.com.gh/academy/level-3-operational-certification",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function Level3OperationalCertificationPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="level-3-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Evergreen Academy — Level 3: Operational Certification",
            description:
              "Route readiness, passenger care, and daily discipline.",
            provider: {
              "@type": "Organization",
              name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
            },
          }),
        }}
      />

      <div className="page-hero academy-hero-bg">
        <div className="container">
          <span className="kicker">
            Evergreen Academy &middot; Certification Level 3 of 6
          </span>
          <h1>Operational Certification</h1>
          <blockquote className="motto-quote">
            &ldquo;Route readiness, passenger care, and daily
            discipline.&rdquo;
          </blockquote>
          <div className="hero-actions">
            <Link href="/apply" className="btn primary">
              <span>Apply to the Academy</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/academy">Evergreen Academy</Link>
            </li>
            <li>Level 3: Operational Certification</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Curriculum</span>
              <h2 className="dark-green">What Level 3 Covers</h2>
              <p className="section-intro">
                Route readiness, passenger care, and daily discipline.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-book-open"></i>
                  </span>
                  <h3>Route Readiness</h3>
                  <p>
                    Reading traffic patterns, planning efficient routes, and
                    managing timing under real Kumasi conditions.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h3>Passenger Care Standards</h3>
                  <p>
                    Boarding etiquette, fare handling, vulnerable-passenger
                    care, and de-escalating conflict professionally.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-handshake"></i>
                  </span>
                  <h3>Daily Operating Discipline</h3>
                  <p>
                    Logbooks, reporting, punctuality, and the accountability
                    habits of a certified operator.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-chart-line"></i>
                  </span>
                  <h3>Road-Law Fluency II</h3>
                  <p>
                    Commercial-operation regulations, insurance basics, and what
                    to do when stopped by authorities.
                  </p>
                </div>
              </div>
            </div>
            <div className="dl-actions">
              <a
                href="/assets/Evergreen_Driver_model.pdf"
                download="Evergreen-Driver-Handbook.pdf"
                className="btn secondary"
              >
                <i className="fas fa-download"></i>{" "}
                <span>Download Driver Handbook (PDF)</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <span className="kicker">Assessment</span>
                <h2 className="dark-green">How You Earn Level 3</h2>
                <p>
                  Supervised live-route assessment with instructor scorecard
                  across five operational days.
                </p>
                <p>
                  Certification is earned through demonstrated competence
                  &mdash; not attendance alone. Instructors score every
                  exercise, and progression requires meeting the standard, not
                  just finishing the calendar.
                </p>
              </div>
              <div className="col-md-5">
                <ul className="level-facts">
                  <li>
                    <i className="fas fa-clock"></i>{" "}
                    <strong>Duration:</strong> 3 weeks
                  </li>
                  <li>
                    <i className="fas fa-key"></i>{" "}
                    <strong>Entry requirement:</strong> Basic Qualification
                    completed
                  </li>
                  <li>
                    <i className="fas fa-medal"></i> <strong>Award:</strong>{" "}
                    Level 3 Certification &mdash; Operational Certification
                  </li>
                  <li>
                    <i className="fas fa-layer-group"></i>{" "}
                    <strong>Pathway position:</strong> Step 3 of 6
                  </li>
                </ul>
              </div>
            </div>
            <div className="level-pager">
              <Link
                className="pager-link"
                href="/academy/level-2-basic-qualification"
              >
                <i className="fas fa-arrow-left"></i> Level 2: Basic
                Qualification
              </Link>
              <Link
                className="pager-link pager-next"
                href="/academy/level-4-advanced-certification"
              >
                Level 4: Advanced Certification{" "}
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to earn Level 3?</h2>
              <p>
                Start your certification journey with Evergreen Academy
                &mdash; where competence comes before deployment.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn primary">
                  <span>Apply Now</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}