import Script from "next/script";

export const metadata = {
  title: "ELECER Electric Carriage — Zero-Emission Tricycle",
  description:
    "ELECER Electric Tricycle Carriage with 2000W motor, 50 km/h speed, 80 km range, and lithium battery. Zero-emission transport for commercial deliveries and family outings in Ghana.",
  alternates: { canonical: "/products/elecer-carriage" },
  openGraph: {
    title: "ELECER Electric Carriage | DEGOONY EVERGREEN",
    description:
      "Zero-emission electric tricycle with 2000W motor, 80 km range, lithium battery, and modern ride features.",
    images: ["/assets/elecer-tricycle.jpg"],
    url: "https://www.evergreenlogistics.com.gh/products/elecer-carriage",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

const specs = [
  { icon: "fas fa-bolt", value: "2000 W", label: "Motor Power" },
  { icon: "fas fa-tachometer-alt", value: "50 km/h", label: "Max Speed" },
  { icon: "fas fa-road", value: "80 km", label: "Range" },
  { icon: "fas fa-car-battery", value: "Lithium", label: "Battery Type" },
  { icon: "fas fa-plug", value: "220 V", label: "Charger" },
  { icon: "fas fa-ruler-combined", value: "195 × 70 × 105", label: "Dimensions (cm)" },
];

const features = [
  {
    icon: "fas fa-hand-paper",
    title: "Precision Handbrake",
    desc: "Safety and control come first with the carriage's precision-engineered handbrake system.",
  },
  {
    icon: "fas fa-desktop",
    title: "Monitor Screen",
    desc: "Essential ride data always in view — enhances safety with a modern touch to the design.",
  },
  {
    icon: "fas fa-broadcast-tower",
    title: "Built-in Radio",
    desc: "Stay connected and entertained, making every journey more enjoyable.",
  },
  {
    icon: "fas fa-sliders-h",
    title: "Fingertip Controls",
    desc: "Speed adjustment, headlights, and horn — everything conveniently placed for seamless operation.",
  },
  {
    icon: "fas fa-users",
    title: "Passenger & Cargo",
    desc: "Spacious seating for passengers with room for cargo — perfect for commercial and family use.",
  },
  {
    icon: "fas fa-leaf",
    title: "Zero Emission",
    desc: "100% electric drive — no fuel costs, no emissions, just clean efficient transport.",
  },
];

export default function ElecerCarriagePage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="elecer-carriage-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "ELECER Electric Carriage — Zero-Emission Tricycle",
            description:
              "ELECER Electric Tricycle with 2000W motor, 50 km/h speed, 80 km range, and lithium battery.",
            brand: { "@type": "Brand", name: "ELECER" },
            image: "https://www.evergreenlogistics.com.gh/assets/elecer-tricycle.jpg",
            url: "https://www.evergreenlogistics.com.gh/products/elecer-carriage",
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
      <div className="page-hero product-hero product-hero-elecer">
        <div className="product-hero-bg">
          <img src="/assets/elecer-tricycle.jpg" alt="ELECER Electric Tricycle Carriage" />
        </div>
        <div className="container">
          <div className="product-hero-content">
            <span className="hero-eyebrow kicker">
              <i className="fas fa-charging-station"></i> ELECER
            </span>
            <h1>ELECER Electric Carriage</h1>
            <p>
              A revolutionary blend of functionality and style &mdash;
              zero-emission electric transport for commercial deliveries and
              family outings. Spacious seating, modern ride features, and an
              eco-friendly ride on every route.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn primary">
                <span>Enquire Now</span>
              </a>
              <a href="/elecer" className="btn ghost">
                <span>Evergreen Fleet</span>
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
            <li>ELECER Electric Carriage</li>
          </ol>
        </div>
      </div>

      {/* QUICK SPECS */}
      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Specifications</span>
              <h2 className="dark-green">Electric Performance</h2>
              <p className="section-intro">
                Powered by a 2000W motor and a lithium battery, the ELECER
                Carriage delivers reliable electric transport with zero
                emissions and low running costs.
              </p>
            </div>
            <div className="product-spec-grid reveal-stagger">
              {specs.map((s) => (
                <div className="product-spec-card spec-card-electric" key={s.label}>
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
              <span className="kicker">Smart Design</span>
              <h2 className="dark-green">Built for Modern Transport</h2>
              <p className="section-intro">
                Every detail is designed for the driver and passenger experience
                &mdash; safety, comfort, and connectivity in one package.
              </p>
            </div>
            <div className="product-feature-grid reveal-stagger">
              {features.map((f) => (
                <div className="product-feature-card feature-card-electric" key={f.title}>
                  <span className="feature-icon feature-icon-electric"><i className={f.icon}></i></span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CHARGING NETWORK */}
      <div className="section">
        <section className="component elecer-section reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker kicker-light">Charging &amp; Delivery</span>
              <h2 className="white">ELECER Deliveries</h2>
              <p className="section-intro" style={{ color: "#a9e8ab" }}>
                We employ a streamlined logistics system that guarantees timely
                and safe delivery to all designated locations.
              </p>
            </div>
            <div className="elecer-delivery-grid reveal-stagger">
              <div className="elecer-delivery-card">
                <span className="delivery-icon"><i className="fas fa-truck"></i></span>
                <h3>Scheduled Bulk Deliveries</h3>
                <p>Regular, scheduled deliveries in bulk to ensure sufficient inventory at consistent intervals.</p>
              </div>
              <div className="elecer-delivery-card">
                <span className="delivery-icon"><i className="fas fa-bolt"></i></span>
                <h3>On-Demand Deliveries</h3>
                <p>Urgent restocking for agents who need quick turnaround.</p>
              </div>
              <div className="elecer-delivery-card">
                <span className="delivery-icon"><i className="fas fa-satellite-dish"></i></span>
                <h3>GPS-Tracked Transport</h3>
                <p>All deliveries are GPS-tracked — monitor location and estimated arrival time in real time.</p>
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
              <h2>Go electric with ELECER</h2>
              <p>
                Zero-emission transport for Ghana&apos;s roads. Commercial
                deliveries and family outings, powered clean.
              </p>
              <div className="hero-actions">
                <a href="/contact" className="btn primary">
                  <span>Get a Quote</span>
                </a>
                <a href="/elecer" className="btn ghost">
                  <span>Explore Evergreen Fleet</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mobile-cta-bar">
        <a
          className="btn primary"
          href="https://wa.me/233550593182?text=Hello%20Degoony%20Evergreen!%20I%20am%20interested%20in%20the%20ELECER%20Electric%20Carriage."
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
