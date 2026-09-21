import Script from "next/script";

export const metadata = {
  title: "TVS Pragia — Passenger & Cargo Tricycle",
  description:
    "TVS Pragia tricycle with refined 199.26 cc Duralife engine, 15 Nm torque, 60 km/h top speed. Electric start, easy reverse gear, and car-like cabin. Popular with owner-operators across Ashanti.",
  alternates: { canonical: "/products/tvs-pragia" },
  openGraph: {
    title: "TVS Pragia — Passenger & Cargo | DEGOONY EVERGREEN",
    description:
      "Smooth handling and lower running costs. Refined Duralife engine with electric start and patented easy reverse gear.",
    images: ["/assets/bbbb.webp"],
    url: "https://www.evergreenlogistics.com.gh/products/tvs-pragia",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

const specs = [
  { icon: "fas fa-cog", value: "199.26 cc", label: "Duralife Engine" },
  { icon: "fas fa-hand-rock", value: "15 Nm", label: "Peak Torque" },
  { icon: "fas fa-tachometer-alt", value: "60 km/h", label: "Max Speed" },
  { icon: "fas fa-oil-can", value: "8 L", label: "Fuel Tank" },
  { icon: "fas fa-car", value: "Car-Like Cabin", label: "Ride Comfort" },
  { icon: "fas fa-undo-alt", value: "Easy Reverse", label: "Patented Gear" },
];

const features = [
  {
    icon: "fas fa-user-check",
    title: "Passenger & Cargo",
    desc: "Dual-purpose body design for both fare collection and goods transport — maximising revenue per trip.",
  },
  {
    icon: "fas fa-key",
    title: "Electric & Hand Start",
    desc: "Dual starting system ensures reliable ignition in all conditions — no dead mornings.",
  },
  {
    icon: "fas fa-exchange-alt",
    title: "4-Speed + Reverse Gear",
    desc: "Patented easy reverse gear with four forward speeds for smooth, responsive handling.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Hydraulic Drum Brakes",
    desc: "Reliable stopping power with hydraulic drum brakes on all wheels — safety first.",
  },
  {
    icon: "fas fa-car-crash",
    title: "Chassis-Mounted Bumper",
    desc: "Heavy-duty bumper integrated into the chassis frame for maximum collision protection.",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Twin Headlamps",
    desc: "Dual headlamp configuration for superior night visibility on poorly lit rural and urban routes.",
  },
];

export default function TvsPragiaPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="tvs-pragia-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "TVS Pragia — Passenger & Cargo Tricycle",
            description:
              "TVS Pragia tricycle with refined 199.26 cc Duralife engine, 15 Nm torque, 60 km/h top speed, electric start, and easy reverse gear.",
            brand: { "@type": "Brand", name: "TVS" },
            image: "https://www.evergreenlogistics.com.gh/assets/bbbb.webp",
            url: "https://www.evergreenlogistics.com.gh/products/tvs-pragia",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "GHS",
              seller: {
                "@type": "Organization",
                name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
              },
            },
          }),
        }}
      />

      {/* HERO */}
      <div className="page-hero product-hero product-hero-tvs">
        <div className="product-hero-bg">
          <img src="/assets/bbbb.webp" alt="TVS Pragia tricycle" />
        </div>
        <div className="container">
          <div className="product-hero-content">
            <span className="hero-eyebrow kicker">
              <i className="fas fa-motorcycle"></i> TVS
            </span>
            <h1>TVS Pragia &mdash; Passenger &amp; Cargo</h1>
            <p>
              Smooth handling and lower running costs &mdash; popular with
              owner-operators across the Ashanti Region. Refined
              200&nbsp;cc&nbsp;Duralife engine with a car-like cabin, electric
              start, and patented easy reverse gear &mdash; longer life, more
              profit.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn primary">
                <span>Enquire Now</span>
              </a>
              <a href="/spare-parts" className="btn ghost">
                <span>Genuine Parts</span>
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
            <li>TVS Pragia</li>
          </ol>
        </div>
      </div>

      {/* QUICK SPECS */}
      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Specifications</span>
              <h2 className="dark-green">Duralife Performance</h2>
              <p className="section-intro">
                Refined engineering for owner-operators who demand reliability
                and low running costs every single day.
              </p>
            </div>
            <div className="product-spec-grid reveal-stagger">
              {specs.map((s) => (
                <div className="product-spec-card" key={s.label}>
                  <span className="spec-icon"><i className={s.icon}></i></span>
                  <span className="spec-value">{s.value}</span>
                  <span className="spec-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* FEATURES */}
      <div className="section">
        <section className="component bg-white reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Why TVS Pragia</span>
              <h2 className="dark-green">Built for Owner-Operators</h2>
              <p className="section-intro">
                Every design choice serves the rider who lives and dies by daily
                earnings — comfort, durability, and low maintenance.
              </p>
            </div>
            <div className="product-feature-grid reveal-stagger">
              {features.map((f) => (
                <div className="product-feature-card" key={f.title}>
                  <span className="feature-icon"><i className={f.icon}></i></span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* QR VERIFICATION */}
      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container">
            <div className="qr-banner text-center">
              <span className="qr-icon"><i className="fas fa-qrcode"></i></span>
              <h2 className="dark-green">QR-Code Verified Parts</h2>
              <p>
                Every TVS part we stock carries a QR-code verification stamp for
                full traceability and authenticity. Scan it, verify it, trust it.
              </p>
              <div className="hero-actions">
                <a href="/spare-parts" className="btn primary">
                  <span>Browse TVS Parts</span>
                </a>
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
              <h2>Smooth handling, lower costs.</h2>
              <p>
                Passenger &amp; cargo bodies fitted to order. Financing
                enquiries welcome. Get today&apos;s price list.
              </p>
              <div className="hero-actions">
                <a href="/contact" className="btn primary">
                  <span>Get a Quote</span>
                </a>
                <a href="/spare-parts" className="btn ghost">
                  <span>Shop Parts</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mobile-cta-bar">
        <a
          className="btn primary"
          href="https://wa.me/233550593182?text=Hello%20Degoony%20Evergreen!%20I%20am%20interested%20in%20the%20TVS%20Pragia."
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
