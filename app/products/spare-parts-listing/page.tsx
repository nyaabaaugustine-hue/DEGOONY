import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Genuine Spare Parts — Bajaj & TVS Tricycle Parts",
  description:
    "Genuine OEM spare parts for Bajaj and TVS Pragia tricycles — 2,300+ parts including brake systems, engine internals, clutch plates, chain kits, and spark plugs. QR-verified TVS parts.",
  alternates: { canonical: "/products/spare-parts-listing" },
  openGraph: {
    title: "Genuine Bajaj & TVS Spare Parts | DEGOONY EVERGREEN",
    description:
      "2,300+ genuine OEM parts for Bajaj and TVS Pragia tricycles. QR-verified TVS parts, same-day availability from Suame–Makro.",
    images: ["/assets/nnnn.avif"],
    url: "https://www.evergreenlogistics.com.gh/products/spare-parts-listing",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

const bajajParts = [
  { name: "Brake Shoe & Brake Pads", icon: "fas fa-hand-paper" },
  { name: "Clutch Friction Plate", icon: "fas fa-cogs" },
  { name: "Chain Sprocket Kit", icon: "fas fa-link" },
  { name: "Cylinder Block Piston", icon: "fas fa-engine" },
  { name: "Spark Plug", icon: "fas fa-bolt" },
  { name: "Air / Oil Filters", icon: "fas fa-filter" },
  { name: "Shock Absorber", icon: "fas fa-arrows-alt-v" },
  { name: "Head Lamp", icon: "fas fa-lightbulb" },
];

const tvsParts = [
  { name: "Brake Pads & Brakes", icon: "fas fa-hand-paper" },
  { name: "Chain & Sprocket", icon: "fas fa-link" },
  { name: "Block Piston Kit", icon: "fas fa-engine" },
  { name: "Clutch Plate", icon: "fas fa-cogs" },
  { name: "Spark Plug", icon: "fas fa-bolt" },
  { name: "Bearing", icon: "fas fa-circle-notch" },
];

export default function SparePartsListingPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="spare-parts-listing-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Genuine Bajaj & TVS Spare Parts — DEGOONY EVERGREEN",
            description:
              "2,300+ genuine OEM parts for Bajaj and TVS Pragia tricycles.",
            url: "https://www.evergreenlogistics.com.gh/products/spare-parts-listing",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kumasi",
              addressRegion: "Ashanti Region",
              addressCountry: "GH",
            },
          }),
        }}
      />

      {/* HERO */}
      <div className="page-hero product-hero product-hero-parts">
        <div className="product-hero-bg">
          <img src="/assets/nnnn.avif" alt="Genuine spare parts" />
        </div>
        <div className="container">
          <div className="product-hero-content">
            <span className="hero-eyebrow kicker">
              <i className="fas fa-wrench"></i> Parts
            </span>
            <h1>Genuine Bajaj &amp; TVS Parts</h1>
            <p>
              2,300+ genuine OEM components sourced as Bajaj Genuine Parts and
              TVS Genuine Parts &mdash; the only original components engineered
              for your Pragia, each backed by the manufacturer&apos;s quality
              standard and a verifiable supply chain-of-custody.
            </p>
            <div className="hero-actions">
              <a href="/spare-parts-shop" className="btn primary">
                <span>Shop Parts Online</span>
              </a>
              <a href="/contact" className="btn ghost">
                <span>Request Availability</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/#tricycles">Products</a></li>
            <li>Spare Parts</li>
          </ol>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="section">
        <section className="component bg-dark-green">
          <div className="container">
            <div className="parts-stats-bar">
              <div className="stat-item">
                <span className="stat-number">2,300+</span>
                <span className="stat-label">Genuine Parts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">700+</span>
                <span className="stat-label">Bajaj Dealers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3,000+</span>
                <span className="stat-label">Service Centres</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">QR</span>
                <span className="stat-label">TVS Verified</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BAJAJ PARTS */}
      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Bajaj</span>
              <h2 className="dark-green">Bajaj Genuine Parts</h2>
              <p className="section-intro">
                Supplied via 700+ authorised dealers and 3,000 service centres
                across India and export markets. Every part is genuine OEM
                engineered for the Pragia platform.
              </p>
            </div>
            <div className="parts-grid reveal-stagger">
              {bajajParts.map((p) => (
                <div className="part-card part-card-bajaj" key={p.name}>
                  <span className="part-icon"><i className={p.icon}></i></span>
                  <span className="part-name">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* TVS PARTS */}
      <div className="section">
        <section className="component bg-white reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">TVS</span>
              <h2 className="dark-green">TVS Genuine Parts</h2>
              <p className="section-intro">
                Every TVS part carries a QR-code verification stamp for full
                traceability and authenticity. Scan, verify, trust.
              </p>
            </div>
            <div className="parts-grid reveal-stagger">
              {tvsParts.map((p) => (
                <div className="part-card part-card-tvs" key={p.name}>
                  <span className="part-icon"><i className={p.icon}></i></span>
                  <span className="part-name">{p.name}</span>
                </div>
              ))}
            </div>
            <p className="parts-note text-center">
              <i className="fas fa-qrcode"></i> TVS parts carry QR-code
              verification for full traceability.
            </p>
          </div>
        </section>
      </div>

      {/* HOW TO ORDER */}
      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">How It Works</span>
              <h2 className="dark-green">Order in 3 Steps</h2>
            </div>
            <div className="order-steps reveal-stagger">
              <div className="order-step">
                <span className="step-number">01</span>
                <h3>Request</h3>
                <p>WhatsApp or call our parts desk with your part number or description.</p>
              </div>
              <div className="order-step">
                <span className="step-number">02</span>
                <h3>Confirm</h3>
                <p>We confirm stock, price, and hold your order at the Suame–Makro counter.</p>
              </div>
              <div className="order-step">
                <span className="step-number">03</span>
                <h3>Collect</h3>
                <p>Collect in person or arrange delivery across the Ashanti Region.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Need a specific part?</h2>
              <p>
                If it&apos;s not listed, we can likely source it. Our parts desk
                handles bulk fleet orders and one-off requests alike.
              </p>
              <div className="hero-actions">
                <a href="/spare-parts-shop" className="btn primary">
                  <span>Shop Parts Online</span>
                </a>
                <a href="/contact" className="btn ghost">
                  <span>Contact Parts Team</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mobile-cta-bar">
        <a
          className="btn primary"
          href="https://wa.me/233550593182?text=Hello%20Degoony%20Evergreen!%20I%20need%20a%20spare%20part."
          target="_blank"
          rel="noopener noreferrer"
        >
          <span><i className="fab fa-whatsapp"></i> WhatsApp</span>
        </a>
        <a className="btn secondary" href="tel:+233550593182">
          <span><i className="fas fa-phone-alt"></i> Call</span>
        </a>
        <a className="btn secondary" href="/contact">
          <span>Get a Quote</span>
        </a>
      </div>
      <div className="mobile-cta-spacer" aria-hidden="true"></div>
    </main>
  );
}
