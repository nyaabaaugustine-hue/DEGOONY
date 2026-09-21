import Script from "next/script";

export const metadata = {
  title: "Bajaj Pragia — Cargo & Passenger Tricycle",
  description:
    "Bajaj Pragia tricycle for cargo and passenger transport in Ghana. 236.2 cc engine, 8 kW power, digital instrument cluster, CNG/LPG/Diesel variants. Dealer-backed warranty up to 1 lakh km / 3 years.",
  alternates: { canonical: "/products/bajaj-pragia" },
  openGraph: {
    title: "Bajaj Pragia — Cargo & Passenger | DEGOONY EVERGREEN",
    description:
      "The reliable workhorse for market runs and short-haul cargo. Best-in-class gradeability, inhand reverse gear, digital instrument cluster.",
    images: ["/assets/red.webp"],
    url: "https://www.evergreenlogistics.com.gh/products/bajaj-pragia",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

const specs = [
  { icon: "fas fa-cog", value: "236.2 cc", label: "Engine" },
  { icon: "fas fa-bolt", value: "8 kW", label: "Net Power" },
  { icon: "fas fa-thermometer-half", value: "Oil-Cooled", label: "Cooling" },
  { icon: "fas fa-cogs", value: "Axle Drive", label: "Drivetrain" },
  { icon: "fas fa-shield-alt", value: "1 Lakh km / 3 yr", label: "Warranty" },
  { icon: "fas fa-gas-pump", value: "CNG / LPG / Diesel", label: "Fuel Options" },
];

const features = [
  {
    icon: "fas fa-box",
    title: "Cargo & Passenger",
    desc: "Versatile body configuration for both goods transport and passenger routes — one platform, dual purpose.",
  },
  {
    icon: "fas fa-tachometer-alt",
    title: "Digital Instrument Cluster",
    desc: "Modern dashboard with real-time speed, fuel level, and trip data — everything at a glance.",
  },
  {
    icon: "fas fa-undo-alt",
    title: "Inhand Reverse Gear",
    desc: "Smooth, intuitive reverse engagement for tight market alleys and congested loading bays.",
  },
  {
    icon: "fas fa-cogs",
    title: "Wet Multiplate Clutch",
    desc: "Durable clutch system designed for stop-and-go urban routes and heavy-load starts.",
  },
  {
    icon: "fas fa-leaf",
    title: "Eco Green Colour Option",
    desc: "Available in a distinctive Eco Green finish that stands out on the road.",
  },
  {
    icon: "fas fa-award",
    title: "Best-in-Class Gradeability",
    desc: "Extra power for steep inclines and fully loaded climbs — built for Ghana's terrain.",
  },
];

export default function BajajPragiaPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="bajaj-pragia-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Bajaj Pragia — Cargo & Passenger Tricycle",
            description:
              "Bajaj Pragia tricycle for cargo and passenger transport. 236.2 cc engine, 8 kW power, digital instrument cluster, CNG/LPG/Diesel variants.",
            brand: { "@type": "Brand", name: "Bajaj" },
            image: "https://www.evergreenlogistics.com.gh/assets/red.webp",
            url: "https://www.evergreenlogistics.com.gh/products/bajaj-pragia",
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
      <div className="page-hero product-hero product-hero-bajaj">
        <div className="product-hero-bg">
          <img src="/assets/red.webp" alt="Bajaj Pragia tricycle" />
        </div>
        <div className="container">
          <div className="product-hero-content">
            <span className="hero-eyebrow kicker">
              <i className="fas fa-motorcycle"></i> Bajaj
            </span>
            <h1>Bajaj Pragia &mdash; Cargo &amp; Passenger</h1>
            <p>
              The reliable workhorse for market runs and short-haul cargo.
              Best-in-class gradeability with extra power, an inhand reverse
              gear, and a digital instrument cluster &mdash; backed by warranty
              up to 1&nbsp;lakh&nbsp;km / 3&nbsp;years.
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
            <li>Bajaj Pragia</li>
          </ol>
        </div>
      </div>

      {/* QUICK SPECS */}
      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Specifications</span>
              <h2 className="dark-green">Built for Ghana&apos;s Roads</h2>
              <p className="section-intro">
                Every specification is chosen for real-world performance on
                market runs, cargo hauls, and passenger routes across the Ashanti
                Region and beyond.
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
              <span className="kicker">Why Pragia</span>
              <h2 className="dark-green">Engineered for Profit</h2>
              <p className="section-intro">
                Designed to minimise downtime and maximise every trip — from the
                digital dash to the reverse gear, every detail serves the
                operator.
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

      {/* COLOUR & VARIANTS */}
      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Options</span>
              <h2 className="dark-green">Fuel &amp; Colour Variants</h2>
            </div>
            <div className="variant-grid reveal-stagger">
              <div className="variant-card">
                <span className="variant-icon"><i className="fas fa-gas-pump"></i></span>
                <h3>CNG</h3>
                <p>Compressed Natural Gas — lowest running cost for high-mileage urban routes.</p>
              </div>
              <div className="variant-card">
                <span className="variant-icon"><i className="fas fa-fire"></i></span>
                <h3>LPG</h3>
                <p>Liquefied Petroleum Gas — reliable fuelling infrastructure across Ghana.</p>
              </div>
              <div className="variant-card">
                <span className="variant-icon"><i className="fas fa-oil-can"></i></span>
                <h3>Diesel</h3>
                <p>Maximum torque for heavy cargo loads and steep gradeability demands.</p>
              </div>
              <div className="variant-card">
                <span className="variant-icon"><i className="fas fa-palette"></i></span>
                <h3>Eco Green</h3>
                <p>Distinctive green finish — the signature colour of dependable fleets.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WARRANTY BANNER */}
      <div className="section">
        <section className="component product-warranty-banner">
          <div className="container">
            <div className="warranty-content text-center">
              <span className="warranty-icon"><i className="fas fa-shield-alt"></i></span>
              <h2>Warranty: 1 Lakh km / 3 Years</h2>
              <p>
                Backed by Bajaj&apos;s manufacturer warranty — the same coverage
                you&apos;d get from any of their 700+ authorised dealers and
                3,000 service centres. Every unit we sell carries this standard.
              </p>
              <div className="hero-actions">
                <a href="/contact" className="btn primary">
                  <span>Request Price List</span>
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
              <h2>Ready to put a Pragia to work?</h2>
              <p>
                Cargo &amp; passenger bodies fitted to order. Financing
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
          href="https://wa.me/233550593182?text=Hello%20Degoony%20Evergreen!%20I%20am%20interested%20in%20the%20Bajaj%20Pragia."
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
