import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Level 2: Basic Qualification | Evergreen Academy",
  description:
    "Core riding skills, vehicle checks, and road-law fluency — Certification Level 2 of 6 at DEGOONY EVERGREEN LOGISTICS GHANA LTD.",
  alternates: { canonical: "/academy/level-2-basic-qualification" },
  openGraph: {
    title: "Level 2: Basic Qualification | Evergreen Academy",
    description:
      "Core riding skills, vehicle checks, and road-law fluency.",
    images: ["/assets/banna-3.webp"],
    url: "https://www.evergreenlogistics.com.gh/academy/level-2-basic-qualification",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function Level2BasicQualificationPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="level-2-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Evergreen Academy — Level 2: Basic Qualification",
            description:
              "Core riding skills, vehicle checks, and road-law fluency.",
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
            Evergreen Academy &middot; Certification Level 2 of 6
          </span>
          <h1>Basic Qualification</h1>
          <blockquote className="motto-quote">
            &ldquo;Core riding skills, vehicle checks, and road-law
            fluency.&rdquo;
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
            <li>Level 2: Basic Qualification</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Curriculum</span>
              <h2 className="dark-green">What Level 2 Covers</h2>
              <p className="section-intro">
                Core riding skills, vehicle checks, and road-law fluency.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-book-open"></i>
                  </span>
                  <h3>Core Riding Skills</h3>
                  <p>
                    Clutch control, braking discipline, low-speed manoeuvres,
                    and safe load handling on a Pragia tricycle.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h3>Daily Vehicle Checks</h3>
                  <p>
                    Tyres, brakes, lights, chain, oil &mdash; the pre-route
                    inspection routine that keeps drivers and passengers safe.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-handshake"></i>
                  </span>
                  <h3>Road-Law Fluency I</h3>
                  <p>
                    Ghana road signs, right-of-way rules, licensing
                    requirements, and operator obligations.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-chart-line"></i>
                  </span>
                  <h3>Fuel, Battery &amp; Fluid Discipline</h3>
                  <p>
                    Correct fuelling procedure, battery-care basics for the
                    electric fleet, and fluid-check standards.
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
                <h2 className="dark-green">How You Earn Level 2</h2>
                <p>
                  Practical riding evaluation on a closed course plus a written
                  road-law test.
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
                    <strong>Duration:</strong> 2 weeks
                  </li>
                  <li>
                    <i className="fas fa-key"></i>{" "}
                    <strong>Entry requirement:</strong> Orientation completed
                  </li>
                  <li>
                    <i className="fas fa-medal"></i> <strong>Award:</strong>{" "}
                    Level 2 Certification &mdash; Basic Qualification
                  </li>
                  <li>
                    <i className="fas fa-layer-group"></i>{" "}
                    <strong>Pathway position:</strong> Step 2 of 6
                  </li>
                </ul>
              </div>
            </div>
            <div className="level-pager">
              <Link className="pager-link" href="/academy/level-1-orientation">
                <i className="fas fa-arrow-left"></i> Level 1: Orientation
              </Link>
              <Link
                className="pager-link pager-next"
                href="/academy/level-3-operational-certification"
              >
                Level 3: Operational Certification{" "}
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
              <h2>Ready to earn Level 2?</h2>
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