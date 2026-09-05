import Script from "next/script";

export const metadata = {
  title: "Evergreen Electric Fleet",
  description:
    "Evergreen — structured electric mobility from DEGOONY EVERGREEN LOGISTICS GHANA LTD. GPS-tracked, geofenced, battery-managed electric tricycles with fleet leasing for disciplined operators.",
  alternates: { canonical: "/elecer" },
  openGraph: {
    title: "Evergreen Electric Fleet | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Structured electric mobility — GPS-tracked, geofenced, and battery-managed. Fleet leasing for disciplined operators.",
    images: ["/assets/evergreen-opt.webp"],
    url: "https://www.evergreenlogistics.com.gh/elecer",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

const specs = [
  { label: "MOTOR POWER", value: "2000 W" },
  { label: "TOP SPEED", value: "50 km/h" },
  { label: "RANGE", value: "80 km" },
  { label: "BATTERY", value: "Lithium" },
  { label: "CHARGER", value: "220 V" },
  { label: "COLOUR", value: "Yellow & White" },
];

export default function ElecerPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="elecer-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Evergreen Electric Fleet",
            provider: {
              "@type": "Organization",
              name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
            },
            description:
              "Structured electric mobility — GPS-tracked, geofenced, and battery-managed electric tricycles with fleet leasing for disciplined operators.",
            url: "https://www.evergreenlogistics.com.gh/elecer",
            areaServed: { "@type": "Country", name: "Ghana" },
          }),
        }}
      />

      {/* HERO */}
      <div className="page-hero">
        <div className="container">
          <span className="kicker">Electric Mobility</span>
          <h1>Evergreen: structured electric mobility</h1>
          <p>
            Supervised, tracked, and battery-managed electric tricycles for
            operators who want disciplined fleet economics &mdash; GPS-tracked
            and geofenced end to end.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn primary">
              <span>Talk to Fleet Operations</span>
            </a>
          </div>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Evergreen Fleet</li>
          </ol>
        </div>
      </div>

      {/* BUILT ON PANEL */}
      <div className="section">
        <section className="component evergreen-photo-bg Evergreen-section reveal visible">
          <div className="container-fluid">
            <div className="row Evergreen-top">
              <div className="col-xs-12 col-md-6">
                <div className="heading section">
                  <span className="kicker kicker-light">
                    Electric Mobility
                  </span>
                  <h2 className="white">
                    Evergreen: structured electric mobility
                  </h2>
                </div>
                <div className="cmp-text section">
                  <p>
                    Evergreen vehicles run under the same operating discipline as
                    the rest of our fleet &mdash; supervised, tracked, and
                    battery-managed, not left to informal street operation.
                  </p>
                </div>
                <div className="hero-actions left-align">
                  <a href="/contact" className="btn light">
                    <span>Talk to Fleet Operations</span>
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="built-on-panel">
                  <h3 className="panel-title">Built on</h3>
                  <ul className="chip-grid reveal-stagger visible">
                    <li className="feature-chip">
                      <i className="fas fa-satellite-dish"></i>GPS Tracking
                    </li>
                    <li className="feature-chip">
                      <i className="fas fa-draw-polygon"></i>Geofencing
                    </li>
                    <li className="feature-chip">
                      <i className="fas fa-exchange-alt"></i>Battery Swap Stations
                    </li>
                    <li className="feature-chip">
                      <i className="fas fa-clipboard-list"></i>Charging Logs
                    </li>
                    <li className="feature-chip">
                      <i className="fas fa-clipboard-check"></i>Daily Pre-Deployment
                      Check
                    </li>
                    <li className="feature-chip">
                      <i className="fas fa-exclamation-triangle"></i>Fault Reporting
                    </li>
                    <li className="feature-chip">
                      <i className="fas fa-lock"></i>Remote Immobilization
                    </li>
                    <li className="feature-chip">
                      <i className="fas fa-tachometer-alt"></i>Centralized Oversight
                    </li>
                    <li className="feature-chip">
                      <i className="fas fa-key"></i>Fleet Leasing for Operators
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHAT STRUCTURED MEANS */}
      <div className="section">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Operating Discipline</span>
              <h2 className="dark-green">
                What &ldquo;Structured&rdquo; means, in practice.
              </h2>
              <p className="section-intro">
                Evergreen does not operate as an informal street-transport
                system. Every zone, every driver, every vehicle functions under
                measurable standards.
              </p>
            </div>
            <div className="grid-2 reveal-stagger">
              <div className="row">
                <div className="col-md-4">
                  <div className="structured-tile">
                    <span className="tile-icon icon-tech">
                      <i className="fas fa-crosshairs"></i>
                    </span>
                    <span className="eyebrow">TECHNOLOGY</span>
                    <h3>Continuous GPS Supervision</h3>
                    <p>
                      Active tracking and geofencing on every deployed vehicle
                      &mdash; used for safety and dispatch, never punitive
                      surveillance.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="structured-tile">
                    <span className="tile-icon icon-battery">
                      <i className="fas fa-battery-three-quarters"></i>
                    </span>
                    <span className="eyebrow">BATTERY CARE</span>
                    <h3>Disciplined Charging Standards</h3>
                    <p>
                      Approved charging stations only, logged time-in/time-out,
                      and immediate removal of any abnormal battery from service.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="structured-tile">
                    <span className="tile-icon icon-account">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </span>
                    <span className="eyebrow">ACCOUNTABILITY</span>
                    <h3>Structured Remittance Systems</h3>
                    <p>
                      Standardized, transparent daily reconciliation &mdash;
                      replacing arbitrary, unstructured cash setups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* VEHICLE SPEC SHEET */}
      <div className="section" id="tricycle-specs">
        <section className="component bg-light-grey reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">The Vehicle</span>
              <h2 className="dark-green">
                Evergreen Electric Tricycle.
              </h2>
              <p className="section-intro">
                A revolutionary blend of functionality and style &mdash;
                spacious seating for passengers, robust performance for commerce,
                and an eco-friendly ride on every route.
              </p>
            </div>
            <div className="grid-2 reveal-stagger">
              <div className="row">
                {specs.map((s) => (
                  <div className="col-md-2 col-sm-6" key={s.label}>
                    <div className="structured-tile spec-tile">
                      <span className="eyebrow">{s.label}</span>
                      <span className="spec-value">{s.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="spec-features reveal">
              <ul className="feature-chip-list">
                <li className="feature-chip">
                  <i className="fas fa-hand-paper"></i>Precision handbrake system
                  &mdash; safety and control first
                </li>
                <li className="feature-chip">
                  <i className="fas fa-desktop"></i>Monitor screen &mdash;
                  essential ride data always in view
                </li>
                <li className="feature-chip">
                  <i className="fas fa-broadcast-tower"></i>Built-in radio
                  &mdash; connected and entertained en route
                </li>
                <li className="feature-chip">
                  <i className="fas fa-sliders-h"></i>Fingertip controls
                  &mdash; speed, headlights &amp; horn in reach
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* SMART RIDE-HAILING */}
      <div className="section" id="hailing">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Smart Ride-Hailing</span>
              <h2 className="dark-green">
                One App. Booking to Payment.
              </h2>
              <p className="section-intro">
                Our technology platform makes every Evergreen ride seamless
                &mdash; for the passenger in the cabin and the operations team
                behind it.
              </p>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <h3>Seamless Booking</h3>
                  <p>
                    Request a ride in seconds and watch your driver arrive in
                    real time &mdash; no haggling, no waiting by the roadside.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-battery">
                    <i className="fas fa-wallet"></i>
                  </span>
                  <h3>Cashless Payments</h3>
                  <p>
                    Pay in-app with transparent fares and an automatic digital
                    receipt for every trip.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-account">
                    <i className="fas fa-chart-line"></i>
                  </span>
                  <h3>Operations Efficiency</h3>
                  <p>
                    Dispatch, ride tracking, and payment records feed one
                    platform &mdash; keeping fleets efficient and passengers
                    safe.
                  </p>
                </div>
              </div>
            </div>
            <div className="community-band">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3>
                    <i className="fas fa-user-tie"></i> Who Drives For Evergreen
                  </h3>
                  <p>
                    Every Evergreen vehicle is handled by an Academy-certified
                    professional on our payroll &mdash; paid a guaranteed salary
                    plus commission, backed by 24/7 support and full health
                    benefits.{" "}
                    <a href="/driver-careers">Become a driver &rarr;</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA BANNER */}
      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready for structured electric mobility?</h2>
              <div className="hero-actions">
                <a href="/contact" className="btn primary">
                  <span>Talk to Fleet Operations</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
