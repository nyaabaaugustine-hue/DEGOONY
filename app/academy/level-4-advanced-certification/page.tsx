import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Level 4: Advanced Certification | Evergreen Academy",
  description:
    "Defensive riding, incident response, and efficiency standards — Certification Level 4 of 6 at DEGOONY EVERGREEN LOGISTICS GHANA LTD.",
  alternates: { canonical: "/academy/level-4-advanced-certification" },
  openGraph: {
    title: "Level 4: Advanced Certification | Evergreen Academy",
    description:
      "Defensive riding, incident response, and efficiency standards.",
    images: ["/assets/banna-3.webp"],
    url: "https://www.evergreenlogistics.com.gh/academy/level-4-advanced-certification",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function Level4AdvancedCertificationPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="level-4-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Evergreen Academy — Level 4: Advanced Certification",
            description:
              "Defensive riding, incident response, and efficiency standards.",
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
            Evergreen Academy &middot; Certification Level 4 of 6
          </span>
          <h1>Advanced Certification</h1>
          <blockquote className="motto-quote">
            &ldquo;Defensive riding, incident response, and efficiency
            standards.&rdquo;
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
            <li>Level 4: Advanced Certification</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Curriculum</span>
              <h2 className="dark-green">What Level 4 Covers</h2>
              <p className="section-intro">
                Defensive riding, incident response, and efficiency standards.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-book-open"></i>
                  </span>
                  <h3>Defensive Riding Mastery</h3>
                  <p>
                    Hazard anticipation, safe following distances, blind-spot
                    management, and wet-season adaptation.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h3>Incident Response</h3>
                  <p>
                    Scene management, first aid fundamentals, accident reporting
                    protocols, and post-incident accountability.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-handshake"></i>
                  </span>
                  <h3>Efficiency &amp; Economy</h3>
                  <p>
                    Riding techniques that cut fuel and battery costs while
                    extending vehicle life.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-chart-line"></i>
                  </span>
                  <h3>Night &amp; Adverse-Condition Riding</h3>
                  <p>
                    Visibility, lighting discipline, and judgement calls in rain,
                    dust, and low light.
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
                <h2 className="dark-green">How You Earn Level 4</h2>
                <p>
                  Advanced practical examination including simulated hazard
                  scenarios and an incident-response drill.
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
                    <strong>Entry requirement:</strong> Operational Certification
                    completed
                  </li>
                  <li>
                    <i className="fas fa-medal"></i> <strong>Award:</strong>{" "}
                    Level 4 Certification &mdash; Advanced Certification
                  </li>
                  <li>
                    <i className="fas fa-layer-group"></i>{" "}
                    <strong>Pathway position:</strong> Step 4 of 6
                  </li>
                </ul>
              </div>
            </div>
            <div className="level-pager">
              <Link
                className="pager-link"
                href="/academy/level-3-operational-certification"
              >
                <i className="fas fa-arrow-left"></i> Level 3: Operational
                Certification
              </Link>
              <Link
                className="pager-link pager-next"
                href="/academy/level-5-leadership-development"
              >
                Level 5: Leadership Development{" "}
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
              <h2>Ready to earn Level 4?</h2>
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