import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Genuine Spare Parts | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
  description:
    "Genuine OEM spare parts for Bajaj and TVS Pragia tricycles in Ghana — brake systems, engine internals, clutch, chain sprocket kits, and more. Never aftermarket.",
  alternates: { canonical: "/spare-parts" },
  openGraph: {
    title: "Genuine Spare Parts | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Genuine OEM Bajaj and TVS spare parts for every service interval. Buy online or contact our parts desk.",
    images: ["/assets/nnnn.avif"],
    url: "https://www.evergreenlogistics.com.gh/spare-parts",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function SparePartsPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="spare-parts-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD — Genuine Spare Parts",
            url: "https://www.evergreenlogistics.com.gh/spare-parts",
            description:
              "Genuine OEM spare parts for Bajaj and TVS Pragia tricycles — never aftermarket.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kumasi",
              addressRegion: "Ashanti Region",
              addressCountry: "GH",
            },
          }),
        }}
      />

      <div className="page-hero">
        <div className="container">
          <span className="kicker">Parts</span>
          <h1>Genuine Bajaj &amp; TVS Parts</h1>
          <p>
            Every component we stock is sourced as an original equipment
            manufacturer part &mdash; built to factory specification, tested for
            road conditions across Ghana, and backed by the brands that made your
            tricycle.
          </p>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Spare Parts</li>
          </ol>
        </div>
      </div>

      <div className="section">
        <section className="component bg-light-grey">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">What We Stock</span>
              <h2 className="dark-green">
                Genuine Parts for Every Service Interval
              </h2>
              <p className="section-intro">
                From brake systems to engine internals, every part is genuine OEM
                &mdash; never aftermarket. We keep stock for both Bajaj and TVS
                tricycles so your fleet stays on the road.
              </p>
            </div>
            <div className="parts-source">
              <div className="parts-col">
                <div className="parts-brand-header">
                  <h3>Bajaj Genuine Parts</h3>
                  <p className="parts-brand-subtitle">
                    Supplied via 700+ authorised dealers and 3,000 service centres
                    across India and export markets.
                  </p>
                </div>
                <ul className="parts-list">
                  <li><i className="fas fa-check-circle"></i> Brake Shoe &amp; Brake Pads</li>
                  <li><i className="fas fa-check-circle"></i> Clutch Friction Plate</li>
                  <li><i className="fas fa-check-circle"></i> Chain Sprocket Kit</li>
                  <li><i className="fas fa-check-circle"></i> Cylinder Block Piston</li>
                  <li><i className="fas fa-check-circle"></i> Spark Plug &amp; Air / Oil Filters</li>
                  <li><i className="fas fa-check-circle"></i> Shock Absorber &amp; Head Lamp</li>
                </ul>
              </div>
              <div className="parts-col">
                <div className="parts-brand-header">
                  <h3>TVS Genuine Parts</h3>
                  <p className="parts-brand-subtitle">
                    Every TVS part carries a QR-code verification stamp for full
                    traceability and authenticity.
                  </p>
                </div>
                <ul className="parts-list">
                  <li><i className="fas fa-check-circle"></i> Brake Pads &amp; Brakes</li>
                  <li><i className="fas fa-check-circle"></i> Chain &amp; Sprocket</li>
                  <li><i className="fas fa-check-circle"></i> Block Piston Kit</li>
                  <li><i className="fas fa-check-circle"></i> Clutch Plate</li>
                  <li><i className="fas fa-check-circle"></i> Spark Plug</li>
                  <li><i className="fas fa-check-circle"></i> Bearing</li>
                </ul>
              </div>
            </div>
            <p className="parts-note text-center">
              <i className="fas fa-info-circle"></i> TVS parts carry QR-code
              verification &middot; Bajaj supplied via 700+ dealers &amp; 3,000
              service centres.
            </p>
            <div className="parts-cta text-center">
              <Link href="/spare-parts-shop" className="btn primary">
                <span>Shop Parts Online</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Need a specific part?</h2>
              <p>
                If it&rsquo;s not listed above, we can likely source it. Our parts
                desk handles bulk fleet orders and one-off requests alike.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn primary">
                  <span>Contact Our Parts Team</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}