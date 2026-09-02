import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Level 5: Leadership Development | Evergreen Academy",
  description:
    "Mentoring, zone coordination, and team accountability — Certification Level 5 of 6 at DEGOONY EVERGREEN LOGISTICS GHANA LTD.",
  alternates: { canonical: "/academy/level-5-leadership-development" },
  openGraph: {
    title: "Level 5: Leadership Development | Evergreen Academy",
    description:
      "Mentoring, zone coordination, and team accountability.",
    images: ["/assets/banna-3.webp"],
    url: "https://www.evergreenlogistics.com.gh/academy/level-5-leadership-development",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function Level5LeadershipDevelopmentPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="level-5-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Evergreen Academy — Level 5: Leadership Development",
            description:
              "Mentoring, zone coordination, and team accountability.",
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
            Evergreen Academy &middot; Certification Level 5 of 6
          </span>
          <h1>Leadership Development</h1>
          <blockquote className="motto-quote">
            &ldquo;Mentoring, zone coordination, and team
            accountability.&rdquo;
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
            <li>Level 5: Leadership Development</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Curriculum</span>
              <h2 className="dark-green">What Level 5 Covers</h2>
              <p className="section-intro">
                Mentoring, zone coordination, and team accountability.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-book-open"></i>
                  </span>
                  <h3>Mentoring New Drivers</h3>
                  <p>
                    Coaching techniques, feedback culture, and how to bring
                    Orientation recruits up to standard.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h3>Zone Coordination</h3>
                  <p>
                    Managing route coverage, driver allocation, and communication
                    across an operating zone.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-handshake"></i>
                  </span>
                  <h3>Team Accountability Systems</h3>
                  <p>
                    Running stand-ups, tracking standards, and addressing
                    performance gaps early.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-chart-line"></i>
                  </span>
                  <h3>Conflict &amp; Escalation Management</h3>
                  <p>
                    Resolving disputes among drivers, with passengers, and with
                    the public fairly and fast.
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
                <h2 className="dark-green">How You Earn Level 5</h2>
                <p>
                  Leadership project: mentor two recruits through a
                  certification level while running a zone schedule.
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
                    <strong>Duration:</strong> 4 weeks
                  </li>
                  <li>
                    <i className="fas fa-key"></i>{" "}
                    <strong>Entry requirement:</strong> Advanced Certification
                    completed
                  </li>
                  <li>
                    <i className="fas fa-medal"></i> <strong>Award:</strong>{" "}
                    Level 5 Certification &mdash; Leadership Development
                  </li>
                  <li>
                    <i className="fas fa-layer-group"></i>{" "}
                    <strong>Pathway position:</strong> Step 5 of 6
                  </li>
                </ul>
              </div>
            </div>
            <div className="level-pager">
              <Link
                className="pager-link"
                href="/academy/level-4-advanced-certification"
              >
                <i className="fas fa-arrow-left"></i> Level 4: Advanced
                Certification
              </Link>
              <Link
                className="pager-link pager-next"
                href="/academy/level-6-executive"
              >
                Level 6: Executive Development{" "}
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
              <h2>Ready to earn Level 5?</h2>
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