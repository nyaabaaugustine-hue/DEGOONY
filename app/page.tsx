import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import HeroCarousel from "@/components/HeroCarousel";
import TriCarousel from "@/components/TriCarousel";
import VideoFacade from "@/components/VideoFacade";
import { LeaderProfileCard } from "@/components/LeaderModal";
import Script from "next/script";

import "./home-gallery.css";

const FORMSPREE = "https://formspree.io/f/meajwbky";

export const metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Bajaj & TVS Pragia tricycles, genuine spare parts, the Evergreen electric fleet, and the Evergreen Academy. Every Ride Creates Opportunity.",
    images: ["/assets/banner-herobg.webp"],
    url: "https://www.evergreenlogistics.com.gh",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

const heroSlides = [
  {
    img: "/assets/banner-01.webp",
    alt: "Bajaj and TVS Pragia tricycle banner",
    logo: "/assets/logo-256.png",
    content: (
      <>
        <h1 className="hero-title">Hope on Three Wheels has arrived.</h1>
        <p className="hero-body">
          Dealers in all types of Bajaj and TVS Pragia tricycles and genuine
          spare parts. Every unit inspected before it leaves our Kumasi yard,
          backed by a dealer warranty.
        </p>
        <div className="hero-actions">
          <a href="#tricycles" className="btn primary">
            <span>Browse Bajaj &amp; TVS Pragia</span>
          </a>
          <a href="#contact" className="btn secondary">
            <span>Request a Price List</span>
          </a>
        </div>
      </>
    ),
  },
  {
    img: "/assets/banner-maxima.webp",
    alt: "Bajaj Maxima Z tricycle banner",
    logo: "/assets/logo-256.png",
    content: (
      <>
        <h2 className="hero-title">Reliable workhorses, dealer-backed.</h2>
        <p className="hero-body">
          Market-run cargo tricycles and passenger Pragias, inspected and
          warranted from our Kumasi yard &mdash; with leasing and genuine parts
          on hand.
        </p>
        <div className="hero-actions">
          <a href="#tricycles" className="btn primary">
            <span>Browse Bajaj &amp; TVS Pragia</span>
          </a>
        </div>
      </>
    ),
  },
  {
    img: "/assets/banner-herobg.webp",
    alt: "Evergreen electric tricycle fleet",
    logo: "/assets/logo-256.png",
    content: (
      <>
        <span className="hero-eyebrow">
          <i className="fas fa-bolt"></i> Evergreen Electric Fleet
        </span>
        <h2 className="hero-title">Evergreen: the Evergreen electric fleet.</h2>
        <p className="hero-body">
          Structured, supervised, and battery-managed electric tricycles for
          operators who want disciplined fleet economics &mdash; GPS-tracked and
          geofenced end to end.
        </p>
        <div className="hero-actions">
          <a href="#elcerc" className="btn primary">
            <span>Explore the Evergreen Fleet</span>
          </a>
        </div>
      </>
    ),
  },
  {
    img: "/assets/banner-chatgpt.webp",
    alt: "Evergreen Academy driver training",
    logo: "/assets/logo-256.png",
    content: (
      <>
        <span className="hero-eyebrow">
          <i className="fas fa-user-graduate"></i> Evergreen Academy
        </span>
        <h2 className="hero-title">Competence before deployment.</h2>
        <p className="hero-body">
          Every Evergreen driver completes the Evergreen Academy before touching
          a route &mdash; six certification levels, from Orientation to Executive
          Development.
        </p>
        <div className="hero-actions">
          <a href="#academy" className="btn primary">
            <span>See the Academy pathway</span>
          </a>
        </div>
      </>
    ),
  },
  {
    img: "/assets/banner-ghana.webp",
    alt: "DEGOONY EVERGREEN LOGISTICS GHANA LTD â€” Ghana",
    logo: "/assets/logo-256.png",
    content: (
      <>
        <span className="hero-eyebrow">
          <i className="fas fa-leaf"></i> DEGOONY EVERGREEN LOGISTICS GHANA LTD
        </span>
        <h2 className="hero-title">Every Ride Creates Opportunity.</h2>
        <p className="hero-body">
          Dealers in Bajaj &amp; TVS Pragia tricycles, genuine parts, the
          Evergreen electric fleet, and the Evergreen Academy &mdash; serving
          Ghana&apos;s last-mile economy.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn primary">
            <span>Get a Quote</span>
          </a>
        </div>
      </>
    ),
  },
];

const triSlides = [
  { img: "/assets/red.webp", label: "BAJAJ PRAGIA", title: "The workhorse of Ghanaâ€™s streets." },
  { img: "/assets/bajaj-pragia.webp", label: "BAJAJ PRAGIA CARGO", title: "Built to carry. Priced to move business forward." },
  { img: "/assets/bbbb.webp", label: "TVS KING DELUXE", title: "Comfort engineered for daily routes." },
  { img: "/assets/tvs-green.webp", label: "TVS PRAGIA", title: "Efficiency that pays for itself." },
  { img: "/assets/tvs-display.webp", label: "SHOWROOM LINE-UP", title: "See the full range at our Kumasi showroom." },
];

export default function Home() {
  return (
    <main className="main-container" id="top">
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDealer",
            name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
            url: "https://www.evergreenlogistics.com.gh/",
            logo: "https://www.evergreenlogistics.com.gh/assets/logo-256.png",
            image: [
              "https://www.evergreenlogistics.com.gh/assets/banner-herobg.webp",
              "https://www.evergreenlogistics.com.gh/assets/banner-01.webp",
            ],
            telephone: "+233 550 593182",
            email: "evergreenlogisticsghana@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Suame-Makro",
              addressLocality: "Kumasi",
              addressRegion: "Ashanti Region",
              addressCountry: "GH",
            },
            geo: { "@type": "GeoCoordinates", latitude: 6.6951, longitude: -1.63089 },
            priceRange: "$$",
            sameAs: [
              "https://www.facebook.com/evergreenlogisticsghana",
              "https://www.linkedin.com/company/degoony-evergreen-logistics-company-ltd",
              "https://instagram.com/degoonyevergreen",
              "https://youtube.com/@degoonyevergreen",
              "https://wa.me/233550593182",
            ],
            openingHours: "Mo-Sa 08:00-18:00",
            slogan: "Every Ride Creates Opportunity.",
            description:
              "Dealers in Bajaj and TVS Pragia tricycles, genuine spare parts, the Evergreen electric fleet, and the Evergreen Academy in Ghana.",
          }),
        }}
      />

      {/* HERO */}
      <div className="homepage-hero section">
        <HeroCarousel slides={heroSlides} />
      </div>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-inner reveal-stagger visible">
          <div className="trust-item">
            <i className="fas fa-clipboard-check"></i>
            <span>
              <strong>Inspected</strong> before dispatch
            </span>
          </div>
          <div className="trust-item">
            <i className="fas fa-shield-alt"></i>
            <span>
              <strong>Dealer warranty</strong> on every unit
            </span>
          </div>
          <div className="trust-item">
            <i className="fas fa-certificate"></i>
            <span>
              <strong>Academy-certified</strong> drivers only
            </span>
          </div>
          <div className="trust-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>
              <strong>Kumasi yard</strong> &mdash; Suame&ndash;Makro
            </span>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="section" id="tricycles">
        <section className="component bg-light-grey reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Products</span>
              <h2 className="dark-green">
                Bajaj &amp; TVS Pragia &mdash; Sales, Leasing &amp; Genuine Parts.
              </h2>
              <p className="section-intro">
                We sell, service, and supply parts for the tricycles Ghana&apos;s
                operators already trust &mdash; and we hold every unit to the same
                inspection standard as our own fleet. Request today&apos;s price list.
              </p>
            </div>
            <div className="grid-2 reveal-stagger">
              <div className="row">
                <div className="col-md-4">
                  <div className="product-card">
                    <div className="product-visual visual-bajaj">
                      <img src="/assets/red.webp" alt="Bajaj Pragia tricycle â€” cargo and passenger"  loading="lazy" decoding="async" />
                      <span className="visual-tag">Bi-Fuel</span>
                    </div>
                    <div className="product-body">
                      <span className="eyebrow">BAJAJ</span>
                      <h3 className="product-title">Bajaj Pragia &mdash; Cargo &amp; Passenger</h3>
                      <p>
                        The reliable workhorse for market runs and short-haul
                        cargo. Best-in-class gradeability with extra power, an
                        inhand reverse gear, and a digital instrument cluster
                        &mdash; backed by warranty up to 1&nbsp;lakh&nbsp;km /
                        3&nbsp;years.
                      </p>
                      <div className="mini-specs">
                        <div className="mini-spec"><strong>236.2 cc</strong><span>Engine</span></div>
                        <div className="mini-spec"><strong>8 kW</strong><span>Net Power</span></div>
                        <div className="mini-spec"><strong>Oil-Cooled</strong><span>Cooling</span></div>
                        <div className="mini-spec"><strong>Axle Drive</strong><span>Drivetrain</span></div>
                      </div>
                      <ul className="spec-chips">
                        <li>Cargo &amp; Passenger</li>
                        <li>Digital Instrument Cluster</li>
                        <li>Inhand Reverse Gear</li>
                        <li>Wet Multiplate Clutch</li>
                        <li>CNG / LPG / Diesel Variants</li>
                        <li>Eco Green Colour Option</li>
                      </ul>
                      <a href="/contact" className="text-link has-arrow">Enquire about the Bajaj Pragia</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-card">
                    <div className="product-visual visual-tvs">
                      <img src="/assets/bbbb.webp" alt="TVS King Deluxe three-wheeler"  loading="lazy" decoding="async" />
                      <span className="visual-tag">Petrol</span>
                    </div>
                    <div className="product-body">
                      <span className="eyebrow">TVS</span>
                      <h3 className="product-title">TVS Pragia &mdash; Passenger &amp; Cargo</h3>
                      <p>
                        Smooth handling and lower running costs &mdash; popular
                        with owner-operators across the Ashanti Region. Refined
                        200&nbsp;cc Duralife engine with a car-like cabin,
                        electric start, and patented easy reverse gear &mdash;
                        longer life, more profit.
                      </p>
                      <div className="mini-specs">
                        <div className="mini-spec"><strong>199.26 cc</strong><span>Duralife Engine</span></div>
                        <div className="mini-spec"><strong>15 Nm</strong><span>Peak Torque</span></div>
                        <div className="mini-spec"><strong>60 km/h</strong><span>Max Speed</span></div>
                        <div className="mini-spec"><strong>8 L</strong><span>Fuel Tank</span></div>
                      </div>
                      <ul className="spec-chips">
                        <li>Passenger &amp; Cargo</li>
                        <li>Electric &amp; Hand Start</li>
                        <li>4-Speed + Reverse Gear</li>
                        <li>Hydraulic Drum Brakes</li>
                        <li>Chassis-Mounted Bumper</li>
                        <li>Twin Headlamps</li>
                      </ul>
                      <a href="/contact" className="text-link has-arrow">Enquire about the TVS Pragia</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-card">
                    <div className="product-visual visual-parts">
                      <img src="/assets/nnnn.avif" alt="Genuine engine spare parts for Bajaj and TVS tricycles"  loading="lazy" decoding="async" />
                      <span className="visual-tag">2,300+ parts</span>
                    </div>
                    <div className="product-body">
                      <span className="eyebrow">SPARE PARTS</span>
                      <h3 className="product-title">Genuine Bajaj &amp; TVS Parts</h3>
                      <p>
                        Sourced as <strong>Bajaj Genuine Parts</strong> and{" "}
                        <strong>TVS Genuine Parts</strong> &mdash; the only
                        original components engineered for your Pragia, each
                        backed by the manufacturer&apos;s quality standard and a
                        verifiable supply chain-of-custody.
                      </p>
                      <div className="parts-source">
                        <div className="parts-col">
                          <span className="parts-brand">Bajaj Genuine Parts</span>
                          <ul className="parts-list">
                            <li>Brake Shoe &amp; Brake Pads</li>
                            <li>Clutch Friction Plate</li>
                            <li>Chain Sprocket Kit</li>
                            <li>Cylinder Block Piston</li>
                            <li>Spark Plug &amp; Air / Oil Filters</li>
                            <li>Shock Absorber &amp; Head Lamp</li>
                          </ul>
                        </div>
                        <div className="parts-col">
                          <span className="parts-brand">TVS Genuine Parts</span>
                          <ul className="parts-list">
                            <li>Brake Pads &amp; Brakes</li>
                            <li>Chain &amp; Sprocket</li>
                            <li>Block Piston Kit</li>
                            <li>Clutch Plate</li>
                            <li>Spark Plug</li>
                            <li>Bearing</li>
                          </ul>
                        </div>
                      </div>
                      <p className="parts-note">
                        TVS parts carry QR-code verification &middot; Bajaj supplied via
                        700+ dealers &amp; 3,000 service centres.
                      </p>
                      <a href="/contact" className="text-link has-arrow">Request parts availability</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-foot text-center">
              <p>
                Cargo &amp; passenger bodies fitted to order -+ Financing
                enquiries welcome -+{" "}
                <a href="/contact" className="text-link dark-green">
                  Get today&apos;s price list
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FLEET SHOWCASE */}
      <div className="section" id="fleet-showcase">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Fleet Showcase</span>
              <h2 className="dark-green">The machines we stand behind.</h2>
              <p className="section-intro">
                Bajaj &amp; TVS Pragia tricycles, displayed in our Kumasi
                showroom and delivered across Ghana.
              </p>
            </div>
            <TriCarousel slides={triSlides} />
          </div>
        </section>
      </div>

      {/* PHOTO GALLERY */}
      <div className="section fleet-wall" id="gallery">
        <section className="component reveal">
          <div className="container-fluid">
            <div className="fleet-wall__intro">
              <div>
                <span className="kicker">The Yard &middot; Kumasi</span>
                <h2>Every unit leaves the yard inspected.</h2>
              </div>
              <p className="fleet-wall__lede">
                Bajaj and TVS Pragias checked on our stands and stamped ready
                &mdash; the showroom floor, the training circle, and the
                machines that carry Ghana&rsquo;s trade.
              </p>
            </div>
            <Gallery autoPlayMs={6000}>
              <figure className="gallery-item gallery-feature">
                <span className="fw-clip" aria-hidden="true"></span>
                <img src="/assets/A1.webp" alt="Evergreen showroom operations" loading="lazy" />
                <span className="gallery-num">01</span>
                <span className="fw-plate">Showroom &middot; KSI-01</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i></i>Inspected &amp; Warranted</span>
                  <span className="gallery-caption">
                    Evergreen Showroom
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
              <div
                className="gallery-item gallery-video"
                data-video-src="https://res.cloudinary.com/dwsl2ktt2/video/upload/degoony_longcut_square_du5yqp.mp4"
              >
                <video className="gallery-video-element" controls playsInline preload="none" loop></video>
                <div className="gallery-video-poster">
                  <img
                    src="https://res.cloudinary.com/dwsl2ktt2/video/upload/so_0.5,ar_16:9,c_fill,w_1400/degoony_longcut_square_du5yqp.jpg"
                    alt="Evergreen fleet film"
                    loading="lazy"
                  />
                </div>
                <span className="fw-stamp" aria-hidden="true">
                  <b>Inspected</b>
                  <b>&amp; Warranted</b>
                  <i>Evergreen Ops</i>
                </span>
                <span className="video-caption">
                  <span className="caption-icon"><i className="fas fa-film"></i></span>
                  Evergreen in Motion
                  <span className="gallery-video-badge">Feature Film</span>
                </span>
                <button className="video-play-btn" type="button" aria-label="Play Evergreen film">
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <figure className="gallery-item gallery-std">
                <span className="fw-clip" aria-hidden="true"></span>
                <img src="/assets/red.webp" alt="Bajaj Pragia tricycle in red" loading="lazy" />
                <span className="gallery-num">02</span>
                <span className="fw-plate">Bajaj Pragia &middot; KSI-02</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i></i>Inspected &amp; Warranted</span>
                  <span className="gallery-caption">
                    Bajaj Pragia
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
              <figure className="gallery-item gallery-sq">
                <span className="fw-clip" aria-hidden="true"></span>
                <img src="/assets/bajaj-pragia.webp" alt="Bajaj Pragia cargo tricycle" loading="lazy" />
                <span className="gallery-num">03</span>
                <span className="fw-plate">Pragia Cargo &middot; KSI-03</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i></i>Ready for Delivery</span>
                  <span className="gallery-caption">
                    Bajaj Pragia Cargo
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
              <figure className="gallery-item gallery-sq">
                <span className="fw-clip" aria-hidden="true"></span>
                <img src="/assets/banna-3.webp" alt="Evergreen Academy driver training" loading="lazy" />
                <span className="gallery-num">04</span>
                <span className="fw-plate">Academy &middot; TRG-04</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i></i>In Training</span>
                  <span className="gallery-caption">
                    Evergreen Academy
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
              <figure className="gallery-item gallery-sq">
                <span className="fw-clip" aria-hidden="true"></span>
                <img src="/assets/banner-maxima.webp" alt="Bajaj Maxima Z tricycle" loading="lazy" />
                <span className="gallery-num">05</span>
                <span className="fw-plate">Maxima Z &middot; KSI-05</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i></i>Ready for Delivery</span>
                  <span className="gallery-caption">
                    Bajaj Maxima Z
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
            </Gallery>
            <div className="fleet-wall__foot">
              <span className="fleet-wall__count">
                5 units in the fleet &middot; <strong>Kumasi Yard</strong>
              </span>
              <a className="text-link" href="/tricycles">
                View the full fleet <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ELECER */}
      <div className="section" id="elcerc">
        <section className="component evergreen-photo-bg Evergreen-section reveal">
          <div className="container-fluid">
            <div className="row Evergreen-top">
              <div className="col-xs-12 col-md-6">
                <div className="heading section">
                  <span className="kicker kicker-light">Electric Mobility</span>
                  <h2 className="white">Evergreen: structured electric mobility</h2>
                </div>
                <div className="cmp-text section">
                  <p>
                    Evergreen vehicles run under the same operating discipline as
                    the rest of our fleet &mdash; supervised, tracked, and
                    battery-managed, not left to informal street operation.
                  </p>
                </div>
                <div className="hero-actions left-align">
                  <a href="/contact" className="btn light"><span>Talk to Fleet Operations</span></a>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="built-on-panel">
                  <h3 className="panel-title">Built on</h3>
                  <ul className="chip-grid reveal-stagger">
                    <li className="feature-chip"><i className="fas fa-satellite-dish"></i>GPS Tracking</li>
                    <li className="feature-chip"><i className="fas fa-draw-polygon"></i>Geofencing</li>
                    <li className="feature-chip"><i className="fas fa-exchange-alt"></i>Battery Swap Stations</li>
                    <li className="feature-chip"><i className="fas fa-clipboard-list"></i>Charging Logs</li>
                    <li className="feature-chip"><i className="fas fa-clipboard-check"></i>Daily Pre-Deployment Check</li>
                    <li className="feature-chip"><i className="fas fa-exclamation-triangle"></i>Fault Reporting</li>
                    <li className="feature-chip"><i className="fas fa-lock"></i>Remote Immobilization</li>
                    <li className="feature-chip"><i className="fas fa-tachometer-alt"></i>Centralized Oversight</li>
                    <li className="feature-chip"><i className="fas fa-key"></i>Fleet Leasing for Operators</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Operating Discipline</span>
              <h2 className="dark-green">What &ldquo;Structured&rdquo; means, in practice.</h2>
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
                    <span className="tile-icon icon-tech"><i className="fas fa-crosshairs"></i></span>
                    <span className="eyebrow">TECHNOLOGY</span>
                    <h3>Continuous GPS Supervision</h3>
                    <p>Active tracking and geofencing on every deployed vehicle &mdash; used for safety and dispatch, never punitive surveillance.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="structured-tile">
                    <span className="tile-icon icon-battery"><i className="fas fa-battery-three-quarters"></i></span>
                    <span className="eyebrow">BATTERY CARE</span>
                    <h3>Disciplined Charging Standards</h3>
                    <p>Approved charging stations only, logged time-in/time-out, and immediate removal of any abnormal battery from service.</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="structured-tile">
                    <span className="tile-icon icon-account"><i className="fas fa-file-invoice-dollar"></i></span>
                    <span className="eyebrow">ACCOUNTABILITY</span>
                    <h3>Structured Remittance Systems</h3>
                    <p>Standardized, transparent daily reconciliation &mdash; replacing arbitrary, unstructured cash setups.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BRAND VIDEO */}
      <div className="section" id="video">
        <section className="component video-story-section">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Product Knowledge</span>
              <h2 className="dark-green">Inside the Bajaj RE 4S.</h2>
              <p className="section-intro">
                Watch the official walkthrough of the workhorse tricycle
                powering our fleet &mdash; engineering, durability, and everyday
                performance.
              </p>
            </div>
            <VideoFacade />
          </div>
        </section>
      </div>

      {/* ACADEMY */}
      <div className="section" id="academy">
        <section className="component academy-bg-section">
          <div className="container-fluid">
            <div className="row academy-row">
              <div className="col-xs-12 col-md-6">
                <span className="kicker">Training Institution</span>
                <h2 className="dark-green">Evergreen Academy</h2>
                <blockquote className="motto-quote">
                  &ldquo;Learn. Practice. Demonstrate. Certify.&rdquo;
                </blockquote>
                <div className="cmp-text section">
                  <p>
                    Certification is earned through demonstrated competence, not
                    attendance alone. Completion is mandatory before any
                    operational deployment.
                  </p>
                </div>
                <div className="hero-actions left-align">
                  <a href="/apply" className="btn primary"><span>Apply to the Academy</span></a>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="pathway-card reveal">
                  <h3 className="pathway-title">
                    <i className="fas fa-layer-group"></i> Driver Certification Pathway
                  </h3>
                  <ol className="cert-pathway reveal-stagger">
                    <li className="pathway-step">
                      <span className="step-num">1</span>
                      <div className="step-body">
                        <h4>Orientation</h4>
                        <p>Foundations, safety culture, and the Evergreen way of operating.</p>
                      </div>
                    </li>
                    <li className="pathway-step">
                      <span className="step-num">2</span>
                      <div className="step-body">
                        <h4>Basic Qualification</h4>
                        <p>Core riding skills, vehicle checks, and road-law fluency.</p>
                      </div>
                    </li>
                    <li className="pathway-step">
                      <span className="step-num">3</span>
                      <div className="step-body">
                        <h4>Operational Certification</h4>
                        <p>Route readiness, passenger care, and daily discipline.</p>
                      </div>
                    </li>
                    <li className="pathway-step">
                      <span className="step-num">4</span>
                      <div className="step-body">
                        <h4>Advanced Certification</h4>
                        <p>Defensive riding, incident response, and efficiency standards.</p>
                      </div>
                    </li>
                    <li className="pathway-step">
                      <span className="step-num">5</span>
                      <div className="step-body">
                        <h4>Leadership Development</h4>
                        <p>Mentoring, zone coordination, and team accountability.</p>
                      </div>
                    </li>
                    <li className="pathway-step step-final">
                      <span className="step-num"><i className="fas fa-medal"></i></span>
                      <div className="step-body">
                        <h4>Executive Development</h4>
                        <p>Fleet governance, performance management, and growth.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* GOVERNANCE */}
      <div className="section governance-section">
        <section className="component bg-navy-blue reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker kicker-light">Governance &amp; Trust</span>
              <h2 className="white">Governed like an institution, not a taxi rank</h2>
              <p className="section-intro intro-light">
                Every driver, vehicle, and route operates under the EOS
                Governance Charter &mdash; the highest internal governing document
                at DEGOONY EVERGREEN LOGISTICS GHANA LTD, setting policy,
                accountability, and performance standards.
              </p>
            </div>
            <div className="kpi-grid reveal-stagger">
              {[
                { target: 100, suffix: "%", label: "Training Attendance" },
                { target: 100, suffix: "%", label: "Certification Compliance" },
                { target: 70, suffix: "%+", label: "Written Assessment Pass" },
                { target: 98, suffix: "%+", label: "GPS Uptime" },
                { target: 95, suffix: "%+", label: "Fleet Availability" },
                { target: 12, suffix: "-Month", label: "Certification Validity" },
              ].map((k) => (
                <div className="kpi-card" key={k.label}>
                  <div className="kpi-value">
                    <span className="kpi-number" data-target={k.target}>0</span>
                    <span className="kpi-suffix">{k.suffix}</span>
                  </div>
                  <div className="kpi-label">{k.label}</div>
                </div>
              ))}
            </div>
            <p className="kpi-note text-center">Academy KPIs we hold ourselves to.</p>
          </div>
        </section>
      </div>

      {/* LEADERSHIP */}
      <div className="section">
        <section className="component leadership-photo-bg reveal">
          <div className="container-fluid">
            <div className="leadership-block">
              <div className="section-head text-center">
                <span className="kicker kicker-light">Our People</span>
                <h3 className="leadership-title white">Evergreen Leadership</h3>
              </div>
              <div className="leader-feature reveal-stagger">
                <LeaderProfileCard
                  profile="jefflean"
                  className="leader-card leader-feature-card"
                >
                  <div className="leader-photo leader-photo-lg">
                    <img src="/assets/JEFFLEAN.webp" alt="Jefflean K. Ntow, Chief Executive Officer" width="320" height="320"  loading="lazy" decoding="async" />
                  </div>
                  <div className="leader-info">
                    <span className="leader-eyebrow">Co-Founder &amp; Chief Executive Officer</span>
                    <h4>Jefflean K. Ntow</h4>
                    <p className="leader-role">
                      DEGOONY EVERGREEN LOGISTICS GHANA LTD &middot; Financial strategy and leadership
                    </p>
                    <p className="leader-message" id="leaderMessage">
                      &ldquo;This isn&apos;t just a business for us &mdash; it&apos;s a movement to restore dignity, climate resilience, and opportunity in our communities.&rdquo;
                    </p>
                    <a href="/contact" className="btn primary leader-cta"><span>Work with us</span></a>
                  </div>
                </LeaderProfileCard>
              </div>
              <div className="leader-secondary reveal-stagger">
                <LeaderProfileCard profile="nadia" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="/assets/NADIA.webp" alt="Nadia Ahmed" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Nadia Ahmed</h4>
                    <p>Co-Founder &middot; Operations &amp; Expansion Lead &mdash; logistics, Ghana operations, and cybersecurity.</p>
                  </div>
                </LeaderProfileCard>
                <LeaderProfileCard profile="donna" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="/assets/DONNA.webp" alt="Donna Hall" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Donna Hall</h4>
                    <p>Legal &amp; Compliance / Procurement.</p>
                  </div>
                </LeaderProfileCard>
                <LeaderProfileCard profile="felix" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="/assets/felix.webp" alt="Felix Gymah" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Felix Gymah</h4>
                    <p>Quality Control Expert &amp; Vendor Liaison.</p>
                  </div>
                </LeaderProfileCard>
                <LeaderProfileCard profile="yussuff" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1788460493/YUSSUFF_we0rms.jpg" alt="Issifu Moro" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Issifu Moro</h4>
                    <p>Portfolio Operations.</p>
                  </div>
                </LeaderProfileCard>
                <LeaderProfileCard profile="augustine" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1788594879/professional_profile_image_g7um3q.png" alt="Augustine A. Nyaaba" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Augustine A. Nyaaba</h4>
                    <p>Full-Stack Engineer | AI &amp; Blockchain Systems | Scalable Web Infrastructure &amp; Automation | Founder.</p>
                  </div>
                </LeaderProfileCard>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* DECLARATION QUOTES */}
      <div className="section declaration-photo-bg" id="declaration">
        <section className="component reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Our Convictions</span>
              <h2>From the Evergreen Declaration</h2>
            </div>
            <div className="quote-cards reveal-stagger">
              <div className="quote-card">
                <i className="fas fa-quote-left quote-mark"></i>
                <p className="quote-text">&ldquo;Transportation is our platform. Opportunity is our purpose.&rdquo;</p>
                <p className="quote-source">&mdash; Movement III, The People We Serve</p>
              </div>
              <div className="quote-card quote-featured">
                <i className="fas fa-quote-left quote-mark"></i>
                <p className="quote-text">&ldquo;Safety before speed. Discipline through standards. Growth through readiness.&rdquo;</p>
                <p className="quote-source">&mdash; Article II, EOS Governance Charter, Governing Principles</p>
              </div>
              <div className="quote-card">
                <i className="fas fa-quote-left quote-mark"></i>
                <p className="quote-text">&ldquo;A vehicle can move a person. But a purpose-driven institution can move lives forward.&rdquo;</p>
                <p className="quote-source">&mdash; Movement IX, The Benediction</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* TESTIMONIALS */}
      <div className="section testimonials-photo-bg" id="testimonials">
        <section className="component">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Trusted On The Road</span>
              <h2>What Our Customers Say</h2>
              <p className="section-intro">Riders, fleet operators, and graduates who put Evergreen to work every day.</p>
            </div>
            <div className="row reveal-stagger">
              {[
                {
                  full: true,
                  quote: "My Pragia has carried me through two years of daily Kumasiâ€“Ejisu runs. When a part wears out, the showroom has the genuine one on the shelf â€” same day.",
                  name: "Kwabena Mensah",
                  role: "Commercial rider, Kumasi",
                },
                {
                  full: true,
                  quote: "We lease six electric tricycles from Evergreen. GPS tracking and the battery-swap system mean my drivers never lose earning hours to charging.",
                  name: "Ama Serwaa",
                  role: "Fleet operator, Ashanti Region",
                },
                {
                  full: true,
                  quote: "The Academy changed how I ride. Defensive riding and road-law training got me certified â€” passengers notice the difference and request me by name.",
                  name: "Yaw Osei",
                  role: "Academy graduate, Level 4",
                },
                {
                  full: false,
                  quote: "Ordering spare parts over WhatsApp took five minutes. They confirmed stock, held my order, and the prices beat every shop around Suame.",
                  name: "Adwoa Nyarko",
                  role: "Parts buyer, Suame",
                },
              ].map((t) => (
                <div className="col-md-3" key={t.name}>
                  <figure className="testimonial-card">
                    <span className="stars" aria-hidden="true">
                      {[1, 2, 3, 4].map((i) => (
                        <i className="fas fa-star" key={i} />
                      ))}
                      <i className={t.full ? "fas fa-star" : "fas fa-star-half-alt"} />
                    </span>
                    <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption>
                      <strong>{t.name}</strong>
                      <span>{t.role}</span>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* NEWS */}
      <div className="section" id="news">
        <section className="component bg-light-grey reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Latest Updates</span>
              <h2 className="dark-green">Our News &amp; Stories</h2>
              <p className="section-intro">
                Behind every ride is a story of discipline, growth, and community
                impact. Here is what is happening at DEGOONY EVERGREEN LOGISTICS
                GHANA LTD.
              </p>
            </div>
            <div className="news-grid reveal-stagger">
              <div className="news-card">
                <div className="news-image">
                  <img src="/assets/banner-ghana.webp" alt="Evergreen Academy graduation"  loading="lazy" decoding="async" />
                  <span className="news-date">August 2026</span>
                </div>
                <div className="news-body">
                  <span className="news-tag">Academy</span>
                  <h3 className="news-title">First Cohort Completes Evergreen Academy Certification</h3>
                  <p className="news-excerpt">Six drivers have completed all six certification levels â€” from Orientation to Executive Development â€” and are now deployed on Kumasi routes with full GPS tracking and governance compliance.</p>
                  <a href="/academy" className="text-link has-arrow">Read more</a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-image">
                  <img src="/assets/banner-maxima.webp" alt="Bajaj Maxima Z fleet"  loading="lazy" decoding="async" />
                  <span className="news-date">July 2026</span>
                </div>
                <div className="news-body">
                  <span className="news-tag">Fleet</span>
                  <h3 className="news-title">Expanding the Bajaj &amp; TVS Pragia Fleet Across Ashanti</h3>
                  <p className="news-excerpt">New Bajaj Maxima Z and TVS King Deluxe units have arrived at our Kumasi yard â€” inspected, warranted, and ready for passenger and cargo deployment across the Ashanti Region.</p>
                  <a href="/tricycles" className="text-link has-arrow">Read more</a>
                </div>
              </div>
              <div className="news-card">
                <div className="news-image">
                  <img src="/assets/banner-herobg.webp" alt="Evergreen electric fleet"  loading="lazy" decoding="async" />
                  <span className="news-date">June 2026</span>
                </div>
                <div className="news-body">
                  <span className="news-tag">Electric Fleet</span>
                  <h3 className="news-title">Evergreen Electric Fleet Reaches GPS Uptime Milestone</h3>
                  <p className="news-excerpt">Our electric tricycle fleet has achieved 98%+ GPS uptime across all deployed units â€” a testament to the battery-swap network and geofencing discipline that defines structured electric mobility.</p>
                  <a href="/elecer" className="text-link has-arrow">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CONTACT FORM */}
      <div className="section" id="contact">
        <section className="component contact-section-bg">
          <div className="container-fluid">
            <div className="form-container efleets-form-container reveal reveal-scale">
              <ContactForm formAction={FORMSPREE} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
