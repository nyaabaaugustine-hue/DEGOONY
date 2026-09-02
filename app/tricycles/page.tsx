export const metadata = {
  title: "Tricycles",
  description:
    "Bajaj Pragia and TVS King Deluxe tricycles for sale in Kumasi, Ghana. Cargo and passenger bodies fitted to order with financing enquiries welcome.",
  alternates: { canonical: "/tricycles" },
  openGraph: {
    title: "Tricycles & Parts | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Bajaj and TVS Pragia tricycles from our Kumasi yard - inspected, documented, fleet-ready.",
    images: ["/assets/tvs-display.webp"],
    url: "https://www.evergreenlogistics.com.gh/tricycles",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function Tricycles() {
  return (
    <main className="main-container" id="top">
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="hero-slide active">
          <div className="ad-image">
            <img src="/assets/banner-maxima.webp" alt="Bajaj and TVS Pragia tricycles at the Kumasi yard" fetchPriority="high" decoding="async" />
          </div>
          <div className="item-shade"></div>
          <div className="container item-container">
            <div className="hero-copy col-xs-12 col-md-8">
              <span className="hero-eyebrow kicker">
                <i className="fas fa-motorcycle"></i> Tricycles &amp; Parts
              </span>
              <h1 className="hero-title">Bajaj &amp; TVS Pragia, ready to work.</h1>
              <p className="hero-body">
                Cargo and passenger tricycles supplied from our Kumasi yard &mdash;
                inspected, documented, and backed by genuine parts and driver
                training.
              </p>
              <div className="hero-actions">
                <a href="#bajaj" className="btn primary">
                  <span>Explore Models</span>
                </a>
                <a href="/contact" className="btn ghost">
                  <span>Get Today&rsquo;s Price List</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BREADCRUMB BAR */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Tricycles &amp; Parts</li>
          </ol>
        </div>
      </div>

      {/* MODELS */}
      <div className="section" id="models">
        <section className="component bg-light-grey">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">The Line-Up</span>
              <h2 className="dark-green">Two brands. One standard.</h2>
              <p className="section-intro">
                We sell the tricycles Ghana&rsquo;s roads already trust &mdash;
                and we stock every part needed to keep them earning.
              </p>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6 reveal-left" id="bajaj">
                <article className="model-card reveal">
                  <div className="model-image">
                    <img src="/assets/red.webp" alt="Bajaj Pragia tricycle"  loading="lazy" decoding="async" />
                  </div>
                  <div className="model-body">
                    <span className="kicker">BAJAJ</span>
                    <h3>Pragia</h3>
                    <ul className="model-specs">
                      <li><i className="fas fa-check-circle"></i> Cargo &amp; passenger bodies</li>
                      <li><i className="fas fa-check-circle"></i> Fuel-efficient 4-stroke engine</li>
                      <li><i className="fas fa-check-circle"></i> Heavy-duty suspension for rough roads</li>
                    </ul>
                    <div className="hero-actions left-align">
                      <a href="/contact" className="btn primary small">
                        <span>Request Bajaj Price</span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-xs-12 col-md-6 reveal-right" id="tvs">
                <article className="model-card reveal">
                  <div className="model-image">
                    <img src="/assets/bbbb.webp" alt="TVS Pragia tricycle"  loading="lazy" decoding="async" />
                  </div>
                  <div className="model-body">
                    <span className="kicker">TVS</span>
                    <h3>King Deluxe</h3>
                    <ul className="model-specs">
                      <li><i className="fas fa-check-circle"></i> Passenger comfort seating</li>
                      <li><i className="fas fa-check-circle"></i> QR-verified genuine parts supply</li>
                      <li><i className="fas fa-check-circle"></i> Strong resale value nationwide</li>
                    </ul>
                    <div className="hero-actions left-align">
                      <a href="/contact" className="btn primary small">
                        <span>Request TVS Price</span>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="section-foot text-center">
              <p>
                Cargo &amp; passenger bodies fitted to order &middot; Financing
                enquiries welcome &middot;{" "}
                <a href="/contact" className="text-link dark-green">
                  Get today's price list
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* SPEC COMPARISON */}
      <div className="section" id="compare">
        <section className="component bg-white reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Side By Side</span>
              <h2 className="dark-green">Which one fits your work?</h2>
              <p className="section-intro">
                Both brands are sold, serviced, and stocked with parts at our
                Suame&ndash;Makro yard. Full specification sheets available at the
                showroom.
              </p>
            </div>
            <div className="spec-table-wrap reveal">
              <table className="spec-table">
                <caption className="sr-only">
                  Comparison of Bajaj Pragia and TVS King Deluxe tricycles
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Specification</th>
                    <th scope="col">
                      <span className="kicker">Bajaj</span>
                      <strong>Pragia</strong>
                    </th>
                    <th scope="col">
                      <span className="kicker">TVS</span>
                      <strong>King Deluxe</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Body options</th>
                    <td>Cargo &amp; passenger</td>
                    <td>Passenger-focused</td>
                  </tr>
                  <tr>
                    <th scope="row">Engine</th>
                    <td>4-stroke, fuel-efficient</td>
                    <td>4-stroke, tuned for torque</td>
                  </tr>
                  <tr>
                    <th scope="row">Ride character</th>
                    <td>Workhorse &mdash; loads &amp; rough roads</td>
                    <td>Comfort seating for fare work</td>
                  </tr>
                  <tr>
                    <th scope="row">Suspension</th>
                    <td colSpan={2}>Heavy-duty duty-rated on both platforms</td>
                  </tr>
                  <tr>
                    <th scope="row">Parts availability</th>
                    <td colSpan={2}>Same-day from our Suame&ndash;Makro counter</td>
                  </tr>
                  <tr>
                    <th scope="row">Servicing</th>
                    <td colSpan={2}>Evergreen inspection standards applied</td>
                  </tr>
                  <tr>
                    <th scope="row">Best for</th>
                    <td>Haulage &amp; mixed routes</td>
                    <td>Passenger transport</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="section-foot text-center">
              <p>
                Detailed spec sheets &amp; current pricing &mdash;{" "}
                <a href="/contact" className="text-link dark-green">
                  request from the showroom
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* PARTS TEASER */}
      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Genuine parts, stocked deep.</h2>
              <p>
                Brake pads, chain kits, plugs, filters &mdash; order online with
                upfront prices and collect in Suame&ndash;Makro.
              </p>
              <div className="hero-actions">
                <a href="/spare-parts-shop" className="btn primary">
                  <span>Shop Spare Parts</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
