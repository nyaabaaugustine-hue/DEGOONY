import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Driver Careers | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
  description:
    "Drive with Evergreen — a guaranteed salary plus commission on our certified electric fleet. Complete the Evergreen Academy, get certified, and grow through six levels. No vehicle to buy, no lease to carry.",
  alternates: { canonical: "/driver-careers" },
  openGraph: {
    title: "Driver Careers | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Earn a guaranteed salary plus commission driving Evergreen's certified electric fleet. A career ladder, not a loan.",
    images: ["/assets/leadership-bg.webp"],
    url: "https://www.evergreenlogistics.com.gh/driver-careers",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function DriverCareersPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="driver-careers-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Evergreen Certified Driver (Salary + Commission)",
            description:
              "Drive company-owned, GPS-tracked electric tricycles with a guaranteed salary plus commission. Complete the Evergreen Academy six-level certification pathway.",
            employmentType: "FULL_TIME",
            hiringOrganization: {
              "@type": "Organization",
              name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kumasi",
                addressRegion: "Ashanti Region",
                addressCountry: "GH",
              },
            },
          }),
        }}
      />

      <div className="page-hero academy-hero-bg">
        <div className="container">
          <span className="kicker">Driver Careers</span>
          <h1>Drive with Evergreen</h1>
          <blockquote className="motto-quote">
            &ldquo;Clean Mobility. Local Empowerment. Global Impact.&rdquo;
          </blockquote>
          <p className="hero-body-light">
            No vehicle to buy. No lease to carry. Complete the Evergreen Academy,
            drive our certified electric fleet, and earn a guaranteed salary plus
            commission on every single ride.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn primary">
              <span>Apply to Drive</span>
            </Link>
            <Link href="/academy" className="btn light">
              <span>About the Academy</span>
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
            <li>Driver Careers</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Your Earnings</span>
              <h2 className="dark-green">Income Stability, By Design</h2>
              <p className="section-intro">
                Evergreen drivers are certified professionals on the payroll
                &mdash; not owner-operators carrying all the risk.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-battery">
                    <i className="fas fa-money-check-alt"></i>
                  </span>
                  <h3>Salary + Commission</h3>
                  <p>
                    A guaranteed base salary every month, plus a share of every
                    fare you complete. Your effort moves your earnings up.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-trophy"></i>
                  </span>
                  <h3>Performance Bonuses</h3>
                  <p>
                    Safe-riding streaks, top customer ratings, and high utilisation
                    all unlock bonus incentives.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-account">
                    <i className="fas fa-clock"></i>
                  </span>
                  <h3>Flexible Shifts</h3>
                  <p>
                    Pick shift patterns that fit your life. Flexible scheduling
                    with fair rotation across zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="section">
        <section className="component bg-dark-green reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker kicker-light">The Evergreen Model</span>
              <h2 className="white">A Career Ladder, Not a Loan</h2>
              <p className="section-intro intro-light">
                We do not sell drivers their vehicles. We put Academy-certified
                drivers on company-owned electric tricycles &mdash; maintained,
                insured, and charged by us &mdash; and pay them salary plus
                commission while they grow through six certification levels.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-3 col-xs-6">
                <div className="model-step">
                  <span className="step-num">1</span>
                  <h4>Join the Academy</h4>
                  <p>Start at Orientation &mdash; no experience required, no purchase required.</p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="model-step">
                  <span className="step-num">2</span>
                  <h4>Get Certified</h4>
                  <p>Progress through six levels of demonstrated competence.</p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="model-step">
                  <span className="step-num">3</span>
                  <h4>Drive Our Fleet</h4>
                  <p>Take the handlebars of a maintained, GPS-tracked electric trike.</p>
                </div>
              </div>
              <div className="col-md-3 col-xs-6">
                <div className="model-step">
                  <span className="step-num">4</span>
                  <h4>Earn More Per Level</h4>
                  <p>Higher certification levels unlock better routes, bonuses, and leadership roles.</p>
                </div>
              </div>
            </div>
            <p className="text-center model-link-row">
              <Link href="/academy#certification" className="btn light">
                <span>See the Six-Level Pathway</span>
              </Link>
            </p>
          </div>
        </section>
      </div>

      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Built Around You</span>
              <h2 className="dark-green">Training, Health &amp; Support</h2>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-charging-station"></i>
                  </span>
                  <h3>Certified EV Operation</h3>
                  <p>Hands-on electric tricycle training: battery care, charging discipline, and efficient riding.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-account">
                    <i className="fas fa-comments"></i>
                  </span>
                  <h3>Customer Service Excellence</h3>
                  <p>Passenger care standards that build ratings, tips, and repeat riders.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-battery">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                  <h3>Road Safety &amp; Defensive Riding</h3>
                  <p>Defensive riding, incident response, and road-law fluency &mdash; tested before deployment.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-account">
                    <i className="fas fa-piggy-bank"></i>
                  </span>
                  <h3>Financial Literacy Workshops</h3>
                  <p>Budgeting, savings goals, and growth planning for your salary + commission income.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-battery">
                    <i className="fas fa-heartbeat"></i>
                  </span>
                  <h3>Health Benefits</h3>
                  <p>Healthcare access, insurance coverage, free annual checkups, and wellness programmes.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-life-ring"></i>
                  </span>
                  <h3>24/7 Driver Support</h3>
                  <p>Round-the-clock roadside assistance, technical hotline, and in-app help.</p>
                </div>
              </div>
            </div>
            <div className="community-band">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3>
                    <i className="fas fa-users"></i> The Evergreen Driver Community
                  </h3>
                  <p>
                    Monthly driver meetups, an online support community, and a peer
                    mentoring programme &mdash; because no one drives alone at
                    Evergreen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to earn the Evergreen way?</h2>
              <p>
                Apply today &mdash; tell us you want to drive, and we will start
                your Academy journey.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn primary">
                  <span>Apply to Drive</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}