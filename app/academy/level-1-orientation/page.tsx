import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Level 1: Orientation | Evergreen Academy",
  description:
    "Foundations, safety culture, and the Evergreen way of operating — Certification Level 1 of 6 at DEGOONY EVERGREEN LOGISTICS GHANA LTD.",
  alternates: { canonical: "/academy/level-1-orientation" },
  openGraph: {
    title: "Level 1: Orientation | Evergreen Academy",
    description:
      "Foundations, safety culture, and the Evergreen way of operating.",
    images: ["/assets/banna-3.webp"],
    url: "https://www.evergreenlogistics.com.gh/academy/level-1-orientation",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function Level1OrientationPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="level-1-orientation-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Evergreen Academy — Level 1: Orientation",
            description:
              "Foundations, safety culture, and the Evergreen way of operating.",
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
            Evergreen Academy &middot; Certification Level 1 of 6
          </span>
          <h1>Orientation</h1>
          <blockquote className="motto-quote">
            &ldquo;Foundations, safety culture, and the Evergreen way of
            operating.&rdquo;
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
            <li>Level 1: Orientation</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Curriculum</span>
              <h2 className="dark-green">What Level 1 Covers</h2>
              <p className="section-intro">
                Foundations, safety culture, and the Evergreen way of operating.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-book-open"></i>
                  </span>
                  <h3>The Evergreen Story</h3>
                  <p>
                    Who we are, why governance matters, and what Every Ride
                    Creates Opportunity means behind the handlebars.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h3>Safety Culture Foundations</h3>
                  <p>
                    Why competence beats confidence. The mindset standards every
                    Evergreen driver is measured against.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-handshake"></i>
                  </span>
                  <h3>Company Code of Conduct</h3>
                  <p>
                    Uniform, courtesy, passenger care, and the non-negotiables
                    of representing the brand on the road.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-chart-line"></i>
                  </span>
                  <h3>Training Pathway Walkthrough</h3>
                  <p>
                    How the six certification levels work, how you are assessed,
                    and what it takes to progress.
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
                <h2 className="dark-green">How You Earn Level 1</h2>
                <p>
                  Written orientation check and a culture-readiness conversation
                  with an Academy instructor.
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
                    <i className="fas fa-clock"></i> <strong>Duration:</strong> 1
                    week
                  </li>
                  <li>
                    <i className="fas fa-key"></i>{" "}
                    <strong>Entry requirement:</strong> None &mdash; open to every
                    new recruit
                  </li>
                  <li>
                    <i className="fas fa-medal"></i> <strong>Award:</strong>{" "}
                    Level 1 Certification &mdash; Orientation
                  </li>
                  <li>
                    <i className="fas fa-layer-group"></i>{" "}
                    <strong>Pathway position:</strong> Step 1 of 6
                  </li>
                </ul>
              </div>
            </div>
            <div className="level-pager">
              <span></span>
              <Link
                className="pager-link pager-next"
                href="/academy/level-2-basic-qualification"
              >
                Level 2: Basic Qualification{" "}
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
              <h2>Ready to earn Level 1?</h2>
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