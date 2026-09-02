import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Evergreen Academy",
  description:
    "Evergreen Academy — Ghana\u2019s structured driver certification programme. Six certification levels from Orientation to Executive Development. Learn. Practice. Demonstrate. Certify.",
  alternates: { canonical: "/academy" },
  openGraph: {
    title: "Evergreen Academy | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Ghana\u2019s structured driver certification programme — six levels from Orientation to Executive Development. Competence before deployment.",
    images: ["/assets/banna-3.webp"],
    url: "https://www.evergreenlogistics.com.gh/academy",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function AcademyPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="academy-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who must complete the Evergreen Academy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Every Evergreen driver completes the Academy before touching a route. Completion of all six certification levels is mandatory before any operational deployment.",
                },
              },
              {
                "@type": "Question",
                name: "What are the six certification levels?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Orientation, Basic Qualification, Operational Certification, Advanced Certification, Leadership Development, and Executive Development.",
                },
              },
              {
                "@type": "Question",
                name: "Is certification earned through attendance alone?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Certification is earned through demonstrated competence, written assessment, and practical evaluation \u2014 not attendance alone.",
                },
              },
              {
                "@type": "Question",
                name: "What safety skills does the Academy cover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Three core competencies: defensive riding, incident response, and road-law fluency covering Ghana\u2019s road-traffic regulations.",
                },
              },
              {
                "@type": "Question",
                name: "How do I apply to the Academy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Apply through our contact page or visit the Kumasi showroom near MTN Office, Suame-Makro, Ashanti, Ghana.",
                },
              },
            ],
          }),
        }}
      />

      {/* ===== PAGE HERO ===== */}
      <div className="page-hero academy-hero-bg">
        <div className="container">
          <span className="kicker">Training Institution</span>
          <h1>Evergreen Academy</h1>
          <blockquote className="motto-quote">
            &ldquo;Learn. Practice. Demonstrate. Certify.&rdquo;
          </blockquote>
          <p>
            Certification is earned through demonstrated competence, not
            attendance alone. Every Evergreen driver completes the Academy before
            touching a route &mdash; six levels of progressive certification,
            from Orientation to Executive Development.
          </p>
          <div className="hero-actions">
            <Link href="/apply" className="btn primary">
              <span>Apply to the Academy</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== BREADCRUMB BAR ===== */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Evergreen Academy</li>
          </ol>
        </div>
      </div>

      {/* ===== CERTIFICATION PATHWAY ===== */}
      <div className="section" id="certification">
        <section className="component academy-bg-section">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Certification Programme</span>
              <h2 className="dark-green">Driver Certification Pathway</h2>
              <p className="section-intro">
                Six progressive levels of certification &mdash; each earned
                through demonstrated competence, written assessment, and
                practical evaluation. Completion of all levels is mandatory
                before any operational deployment.
              </p>
            </div>
            <div className="pathway-card reveal visible">
              <h3 className="pathway-title">
                <i className="fas fa-layer-group"></i> Six-Level Pathway
              </h3>
              <ol className="cert-pathway reveal-stagger visible">
                <li className="pathway-step">
                  <span className="step-num">1</span>
                  <div className="step-body">
                    <h4>
                      <Link href="/academy/level-1-orientation">
                        Orientation
                      </Link>
                    </h4>
                    <p>
                      Foundations, safety culture, and the Evergreen way of
                      operating.
                    </p>
                  </div>
                </li>
                <li className="pathway-step">
                  <span className="step-num">2</span>
                  <div className="step-body">
                    <h4>
                      <Link href="/academy/level-2-basic-qualification">
                        Basic Qualification
                      </Link>
                    </h4>
                    <p>
                      Core riding skills, vehicle checks, and road-law fluency.
                    </p>
                  </div>
                </li>
                <li className="pathway-step">
                  <span className="step-num">3</span>
                  <div className="step-body">
                    <h4>
                      <Link href="/academy/level-3-operational-certification">
                        Operational Certification
                      </Link>
                    </h4>
                    <p>
                      Route readiness, passenger care, and daily discipline.
                    </p>
                  </div>
                </li>
                <li className="pathway-step">
                  <span className="step-num">4</span>
                  <div className="step-body">
                    <h4>
                      <Link href="/academy/level-4-advanced-certification">
                        Advanced Certification
                      </Link>
                    </h4>
                    <p>
                      Defensive riding, incident response, and efficiency
                      standards.
                    </p>
                  </div>
                </li>
                <li className="pathway-step">
                  <span className="step-num">5</span>
                  <div className="step-body">
                    <h4>
                      <Link href="/academy/level-5-leadership-development">
                        Leadership Development
                      </Link>
                    </h4>
                    <p>
                      Mentoring, zone coordination, and team accountability.
                    </p>
                  </div>
                </li>
                <li className="pathway-step step-final">
                  <span className="step-num">
                    <i className="fas fa-medal"></i>
                  </span>
                  <div className="step-body">
                    <h4>
                      <Link href="/academy/level-6-executive">
                        Executive Development
                      </Link>
                    </h4>
                    <p>
                      Fleet governance, performance management, and growth.
                    </p>
                  </div>
                </li>
              </ol>
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

      {/* ===== SAFETY & DEFENSIVE RIDING ===== */}
      <div className="section" id="safety">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Core Competencies</span>
              <h2 className="dark-green">Safety &amp; Defensive Riding</h2>
              <p className="section-intro">
                Every Academy graduate must demonstrate mastery in three
                critical safety areas before advancing to operational
                deployment.
              </p>
            </div>
            <div className="grid-2 reveal-stagger">
              <div className="row">
                <div className="col-md-4">
                  <div className="structured-tile">
                    <span className="tile-icon icon-tech">
                      <i className="fas fa-shield-alt"></i>
                    </span>
                    <span className="eyebrow">SAFETY</span>
                    <h3>Defensive Riding</h3>
                    <p>
                      Anticipating hazards, maintaining safe following distances,
                      and adapting to road conditions &mdash; defensive riding is
                      the foundation of every Evergreen driver&apos;s skill set.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="structured-tile">
                    <span className="tile-icon icon-battery">
                      <i className="fas fa-first-aid"></i>
                    </span>
                    <span className="eyebrow">RESPONSE</span>
                    <h3>Incident Response</h3>
                    <p>
                      Knowing exactly what to do in the event of an accident
                      &mdash; scene management, first aid, reporting protocols,
                      and post-incident accountability.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="structured-tile">
                    <span className="tile-icon icon-account">
                      <i className="fas fa-balance-scale"></i>
                    </span>
                    <span className="eyebrow">COMPLIANCE</span>
                    <h3>Road-Law Fluency</h3>
                    <p>
                      Full working knowledge of Ghana&apos;s road-traffic
                      regulations, licensing requirements, and operator
                      obligations &mdash; tested and verified before
                      certification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dl-actions">
              <a
                href="/assets/Evergreen_Logistics_Operations_Handbook.pdf"
                download="Evergreen-Operations-Safety-Handbook.pdf"
                className="btn secondary"
              >
                <i className="fas fa-download"></i>{" "}
                <span>
                  Download Operations &amp; Safety Handbook (PDF)
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ===== FAQ ===== */}
      <div className="section" id="faq">
        <section className="component bg-white">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Questions</span>
              <h2 className="dark-green">Academy FAQs</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Who must complete the Evergreen Academy?</summary>
                <p>
                  Every Evergreen driver completes the Academy before touching a
                  route. Completion of all six certification levels is mandatory
                  before any operational deployment.
                </p>
              </details>
              <details className="faq-item">
                <summary>What are the six certification levels?</summary>
                <p>
                  Orientation, Basic Qualification, Operational Certification,
                  Advanced Certification, Leadership Development, and Executive
                  Development.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Is certification earned through attendance alone?
                </summary>
                <p>
                  No. Certification is earned through demonstrated competence,
                  written assessment, and practical evaluation &mdash; not
                  attendance alone.
                </p>
              </details>
              <details className="faq-item">
                <summary>What safety skills does the Academy cover?</summary>
                <p>
                  Three core competencies: defensive riding, incident response,
                  and road-law fluency covering Ghana&apos;s road-traffic
                  regulations.
                </p>
              </details>
              <details className="faq-item">
                <summary>How do I apply to the Academy?</summary>
                <p>
                  Use the{" "}
                  <Link href="/contact">contact page</Link> or visit our Kumasi
                  showroom near MTN Office, Suame&ndash;Makro, Ashanti.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>

      {/* ===== CTA BANNER ===== */}
      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to join the Academy?</h2>
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
