import Link from "next/link";
import Script from "next/script";
import SparePartsShop from "./SparePartsShop";

export const metadata = {
  title: "Spare Parts Shop | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
  description:
    "Order genuine Bajaj and TVS spare parts online at Evergreen. Transparent GHS prices, showroom pickup in Suame–Makro, Kumasi, and one-tap WhatsApp ordering.",
  alternates: { canonical: "/spare-parts-shop" },
  openGraph: {
    title: "Spare Parts Shop | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Genuine parts. Honest prices. Tick what you need and send the order to our parts desk on WhatsApp.",
    images: ["/assets/NGK Spark Plug.jpeg"],
    url: "https://www.evergreenlogistics.com.gh/spare-parts-shop",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function SparePartsShopPage() {
  return (
    <main className="main-container" id="top">
      <div className="page-hero">
        <div className="hero-slide active">
          <div className="ad-image">
            <img
              src="/assets/header-bg.webp"
              alt="DEGOONY EVERGREEN LOGISTICS GHANA LTD genuine spare parts counter"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="item-shade"></div>
          <div className="container item-container">
            <div className="hero-copy col-xs-12 col-md-8">
              <span className="hero-eyebrow kicker">
                <i className="fas fa-tools"></i> Parts Store
              </span>
              <h1 className="hero-title">Spare Parts Shop</h1>
              <p className="hero-body">
                Genuine Bajaj &amp; TVS components, priced up front. Tick what you
                need and send the order straight to our parts desk on WhatsApp.
              </p>
              <div className="hero-actions">
                <a href="#parts-shop" className="btn primary">
                  <span>Browse Products</span>
                </a>
                <a
                  href="https://wa.me/233550593182?text=Hello%20Degoony%20Evergreen!%20I%20need%20a%20spare%20part."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary"
                >
                  <span>
                    <i className="fab fa-whatsapp"></i> Ask the Parts Desk
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Spare Parts Shop</li>
          </ol>
        </div>
      </div>

      <div className="section" id="parts-shop">
        <section className="component bg-white">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Order Online</span>
              <h2 className="dark-green">Genuine parts. Honest prices.</h2>
              <p className="section-intro">
                Tick the parts you need, then send your complete order to our
                WhatsApp desk in one tap. Prices include showroom pickup in
                Suame&ndash;Makro, Kumasi.
              </p>
            </div>

            <SparePartsShop />

            <p className="parts-note text-center">
              <i className="fas fa-info-circle"></i> Can&rsquo;t find your part? We
              source special orders weekly &mdash;{" "}
              <Link href="/contact" className="text-link dark-green">
                ask the parts desk
              </Link>
              .
            </p>
          </div>
        </section>
      </div>

      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>How ordering works</h2>
              <p>
                1 &middot; Tick your parts &nbsp;&rarr;&nbsp; 2 &middot; Tap
                &ldquo;Send order on WhatsApp&rdquo; &nbsp;&rarr;&nbsp; 3 &middot;
                Our desk confirms stock &amp; payment. Fleet discounts apply on 5+
                items.
              </p>
              <div className="hero-actions">
                <a href="#top" className="btn primary">
                  <span>Back to Products</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}