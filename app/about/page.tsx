import Gallery from "@/components/Gallery";
import { LeaderProfileCard } from "@/components/LeaderModal";

export const metadata = {
  title: "About Us",
  description:
    "Learn about DEGOONY EVERGREEN LOGISTICS GHANA LTD &mdash; governed like an institution, not a taxi rank. Our founding conviction, leadership, governance charter, and the Evergreen Declaration.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Governed like an institution, not a taxi rank. Our founding conviction, leadership, and the Evergreen Declaration.",
    images: ["/assets/executive_director1.webp"],
    url: "https://www.evergreenlogistics.com.gh/about",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="main-container" id="top">
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="hero-slide active">
          <div className="ad-image">
            <img src="/assets/banna-3.webp" alt="DEGOONY EVERGREEN LOGISTICS GHANA LTD fleet in motion" fetchPriority="high" decoding="async" />
          </div>
          <div className="item-shade"></div>
          <div className="container item-container">
            <div className="hero-copy col-xs-12 col-md-8">
              <span className="hero-eyebrow kicker"><i className="fas fa-users"></i> About Us</span>
              <h1 className="hero-title">Governed like an institution, not a taxi rank</h1>
              <p className="hero-body">Every driver, vehicle, and route at DEGOONY EVERGREEN LOGISTICS GHANA LTD operates under the EOS Governance Charter &mdash; the highest internal governing document, setting policy, accountability, and performance standards for every ride we deliver.</p>
              <div className="hero-actions">
                <a href="#declaration" className="btn light"><span>Read the Declaration</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BREADCRUMB BAR */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ol>
            <li><a href="/">Home</a></li>
            <li>About Us</li>
          </ol>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div className="section" id="who-we-are">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <span className="kicker">Who We Are</span>
                <h2 className="dark-green">A woman-led venture, built for West Africa&rsquo;s streets</h2>
                <p><strong>DEGOONY EVERGREEN LOGISTICS GHANA LTD</strong> is a woman-led clean mobility venture founded by Nadia Ahmed and Jefflean K. Ntow &mdash; registered in the United States, with operations launching across Ghana. We exist to transform urban transportation across West Africa with sustainable, affordable, tech-enabled electric vehicle taxi solutions: tricycles and motorbikes designed for African roads.</p>
                <p><strong>DEGOONY EVERGREEN LOGISTICS GHANA LTD</strong> is our Ghanaian operating company &mdash; running tricycle sales, genuine spare parts, the Evergreen electric fleet, and the Evergreen Academy from our Kumasi base. Together, we serve cities like Accra, Kumasi, and Lagos with cleaner, cost-effective transport.</p>
              </div>
              <div className="col-md-5">
                <div className="vm-card vm-vision">
                  <span className="kicker kicker-light">Vision</span>
                  <p>To lead Africa&rsquo;s transition to clean and inclusive mobility solutions.</p>
                </div>
                <div className="vm-card vm-mission">
                  <span className="kicker">Mission</span>
                  <p>To empower underserved communities with electric vehicle taxi solutions that promote certified employment, salary-and-commission earnings, financial independence, and environmental sustainability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CORE VALUES */}
      <div className="section" id="values">
        <section className="component bg-light-grey reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">What Guides Us</span>
              <h2 className="dark-green">Core Values</h2>
            </div>
            <div className="row reveal-stagger">
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech"><i className="fas fa-leaf"></i></span>
                  <h3>Sustainability</h3>
                  <p>Zero-emission mobility that cleans the air while it moves people.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-account"><i className="fas fa-balance-scale"></i></span>
                  <h3>Equity &amp; Empowerment</h3>
                  <p>Certified jobs and fair pay for youth and women drivers.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-battery"><i className="fas fa-lightbulb"></i></span>
                  <h3>Innovation</h3>
                  <p>App-based hailing, smart charging, and battery-swap technology.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-tech"><i className="fas fa-handshake"></i></span>
                  <h3>Integrity</h3>
                  <p>Governance, accountability, and transparency in every operation.</p>
                </div>
              </div>
              <div className="col-md-4 col-xs-6">
                <div className="structured-tile">
                  <span className="tile-icon icon-account"><i className="fas fa-users"></i></span>
                  <h3>Community Upliftment</h3>
                  <p>Profits reinvested where our drivers live and work.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CHALLENGES & SOLUTIONS */}
      <div className="section" id="why-it-matters">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Why It Matters</span>
              <h2 className="dark-green">The Challenge &mdash; and Our Answer</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h3 className="list-heading"><i className="fas fa-exclamation-triangle"></i> The Challenges</h3>
                <ul className="check-list challenge-list">
                  <li><i className="fas fa-times"></i> Urban congestion from inefficient transport systems</li>
                  <li><i className="fas fa-times"></i> High fuel costs and vehicle maintenance expenses</li>
                  <li><i className="fas fa-times"></i> Limited economic opportunities for drivers</li>
                  <li><i className="fas fa-times"></i> Air and noise pollution from traditional vehicles</li>
                  <li><i className="fas fa-times"></i> Inadequate last-mile connectivity in growing cities</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="list-heading"><i className="fas fa-check-circle"></i> Our Solutions</h3>
                <ul className="check-list solution-list">
                  <li><i className="fas fa-check"></i> Electric tricycles with zero emissions and low operating costs</li>
                  <li><i className="fas fa-check"></i> Evergreen Academy certification with salaried, commission-earning driving careers</li>
                  <li><i className="fas fa-check"></i> App-based hailing platform for efficient service delivery</li>
                  <li><i className="fas fa-check"></i> Comprehensive training and support programmes</li>
                  <li><i className="fas fa-check"></i> Affordable urban mobility for underserved communities</li>
                </ul>
              </div>
            </div>
            <div className="social-impact-band">
              <h3 className="text-center dark-green">Social Impact</h3>
              <p className="text-center">We reinvest part of our profits into community initiatives:</p>
              <div className="impact-chips text-center">
                <span className="chip"><i className="fas fa-seedling"></i> Youth entrepreneurship</span>
                <span className="chip"><i className="fas fa-solar-panel"></i> Clean energy education</span>
                <span className="chip"><i className="fas fa-shield-alt"></i> Public safety awareness</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHAT WE OFFER */}
      <div className="section" id="what-we-offer">
        <section className="component offers-photo-bg reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Our Work</span>
              <h2 className="dark-green">What We Offer</h2>
            </div>
            <div className="offers-grid reveal-stagger">
              <div className="structured-tile">
                <span className="tile-icon icon-battery"><i className="fas fa-charging-station"></i></span>
                <h3>Electric Tricycles &amp; Motorbikes</h3>
                <p>Vehicles designed for African roads &mdash; sold, serviced, and supported locally.</p>
              </div>
              <div className="structured-tile">
                <span className="tile-icon icon-account"><i className="fas fa-graduation-cap"></i></span>
                <h3>Evergreen Academy</h3>
                <p>Six-level driver certification leading to salaried, commission-earning driving careers.</p>
              </div>
              <div className="structured-tile">
                <span className="tile-icon icon-tech"><i className="fas fa-mobile-alt"></i></span>
                <h3>Ride-Hailing App</h3>
                <p>Seamless booking, payments, and ride tracking for passengers and operators.</p>
              </div>
              <div className="structured-tile">
                <span className="tile-icon icon-battery"><i className="fas fa-tools"></i></span>
                <h3>Fleet Maintenance &amp; Support</h3>
                <p>Servicing, spare parts, roadside assistance, and driver support services.</p>
              </div>
              <div className="structured-tile">
                <span className="tile-icon icon-account"><i className="fas fa-map-marked-alt"></i></span>
                <h3>Affordable Urban Mobility</h3>
                <p>Last-mile connectivity priced for the communities that need it most.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* DECLARATION QUOTES */}
      <div className="section" id="declaration">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Our Convictions</span>
              <h2 className="dark-green">From the Evergreen Declaration</h2>
              <p className="section-intro">The Evergreen Declaration is our founding document &mdash; why DEGOONY EVERGREEN LOGISTICS GHANA LTD exists, who we serve, and the promise we have made to every passenger, driver, and community.</p>
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

      {/* GOVERNANCE KPIs */}
      <div className="section governance-section">
        <section className="component bg-navy-blue reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker kicker-light">Governance &amp; Trust</span>
              <h2 className="white">Governed like an institution, not a taxi rank</h2>
              <p className="section-intro intro-light">Every driver, vehicle, and route operates under the EOS Governance Charter &mdash; the highest internal governing document at DEGOONY EVERGREEN LOGISTICS GHANA LTD, setting policy, accountability, and performance standards.</p>
            </div>
            <div className="kpi-grid reveal-stagger">
              <div className="kpi-card">
                <div className="kpi-value"><span className="kpi-number" data-target="100">0</span><span className="kpi-suffix">%</span></div>
                <div className="kpi-label">Training Attendance</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-value"><span className="kpi-number" data-target="100">0</span><span className="kpi-suffix">%</span></div>
                <div className="kpi-label">Certification Compliance</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-value"><span className="kpi-number" data-target="70">0</span><span className="kpi-suffix">%+</span></div>
                <div className="kpi-label">Written Assessment Pass</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-value"><span className="kpi-number" data-target="98">0</span><span className="kpi-suffix">%+</span></div>
                <div className="kpi-label">GPS Uptime</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-value"><span className="kpi-number" data-target="95">0</span><span className="kpi-suffix">%+</span></div>
                <div className="kpi-label">Fleet Availability</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-value"><span className="kpi-number" data-target="12">0</span><span className="kpi-suffix">-Month</span></div>
                <div className="kpi-label">Certification Validity</div>
              </div>
            </div>
            <p className="kpi-note text-center">Academy KPIs we hold ourselves to.</p>
          </div>
        </section>
      </div>

      {/* LEADERSHIP */}
      <div className="section">
        <section className="component leadership-photo-bg">
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
                    <img src="/assets/JEFFLEAN.webp" alt="Jefflean K. Ntow, Chief Executive Officer of DEGOONY EVERGREEN LOGISTICS GHANA LTD" width="320" height="320"  loading="lazy" decoding="async" />
                  </div>
                  <div className="leader-info">
                    <span className="leader-eyebrow">Co-Founder &amp; Chief Executive Officer</span>
                    <h4>Jefflean K. Ntow</h4>
                    <p className="leader-role">DEGOONY EVERGREEN LOGISTICS GHANA LTD &middot; Financial strategy and leadership</p>
                    <p className="leader-message" id="leaderMessage">
                      &ldquo;This isn&apos;t just a business for us &mdash; it&apos;s a movement to restore dignity, climate resilience, and opportunity in our communities.&rdquo;
                    </p>
                    <a href="/contact" className="btn primary leader-cta"><span>Work with us</span></a>
                  </div>
                </LeaderProfileCard>
              </div>
              <div className="leader-secondary reveal-stagger">
                <LeaderProfileCard profile="nadia" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="/assets/NADIA.webp" alt="Nadia Ahmed, Co-Founder and Operations and Expansion Lead" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Nadia Ahmed</h4>
                    <p>Co-Founder &middot; Operations &amp; Expansion Lead &mdash; logistics, Ghana operations, and cybersecurity.</p>
                  </div>
                </LeaderProfileCard>
                <LeaderProfileCard profile="donna" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="/assets/DONNA.webp" alt="Donna Hall, Legal and Compliance / Procurement" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Donna Hall</h4>
                    <p>Legal &amp; Compliance / Procurement.</p>
                  </div>
                </LeaderProfileCard>
                <LeaderProfileCard profile="felix" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="/assets/felix.webp" alt="Felix Gymah, Quality Control Expert and Vendor Liaison" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Felix Gymah</h4>
                    <p>Quality Control Expert &amp; Vendor Liaison.</p>
                  </div>
                </LeaderProfileCard>
                <LeaderProfileCard profile="yussuff" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1788460493/YUSSUFF_we0rms.jpg" alt="Issifu Moro, Portfolio Operations" width="160" height="160"  loading="lazy" decoding="async" /></div>
                  <div className="leader-meta">
                    <h4>Issifu Moro</h4>
                    <p>Portfolio Operations.</p>
                  </div>
                </LeaderProfileCard>
                <LeaderProfileCard profile="augustine" className="leader-card leader-mini">
                  <div className="leader-photo leader-photo-sm"><img src="/assets/CYBER.webp" alt="Augustine A. Nyaaba, Full-Stack Engineer" width="160" height="160"  loading="lazy" decoding="async" /></div>
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

      {/* ROADMAP */}
      <div className="section" id="roadmap">
        <section className="component roadmap-bg reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Our Journey</span>
              <h2 className="dark-green">The Evergreen Roadmap</h2>
              <p className="section-intro">From pilot to regional network &mdash; where we have been, and where we are going.</p>
            </div>
            <div className="roadmap-timeline">
              <div className="timeline-item done">
                <div className="tl-marker"><i className="fas fa-check"></i></div>
                <div className="tl-body">
                  <span className="tl-date">Q3 2025</span>
                  <span className="status-badge badge-done">Completed</span>
                  <h3>App Development &amp; Testing</h3>
                  <p>Completed development of the ride-hailing platform and initiated pilot testing in Accra.</p>
                </div>
              </div>
              <div className="timeline-item done">
                <div className="tl-marker"><i className="fas fa-check"></i></div>
                <div className="tl-body">
                  <span className="tl-date">Q4 2025</span>
                  <span className="status-badge badge-done">Completed</span>
                  <h3>Official Launch in Ghana</h3>
                  <p>Full commercial launch from our Accra base, scaling a Phase 1 pilot fleet of 25&ndash;30 electric tricycles toward 50 &mdash; backed by a solar-powered charging hub.</p>
                </div>
              </div>
              <div className="timeline-item done">
                <div className="tl-marker"><i className="fas fa-check"></i></div>
                <div className="tl-body">
                  <span className="tl-date">Q1 2026</span>
                  <span className="status-badge badge-done">Completed</span>
                  <h3>Battery Swap Network</h3>
                  <p>Battery swap stations established and the driver loyalty programme launched.</p>
                </div>
              </div>
              <div className="timeline-item active">
                <div className="tl-marker"><i className="fas fa-sync-alt"></i></div>
                <div className="tl-body">
                  <span className="tl-date">Q2 2026</span>
                  <span className="status-badge badge-active">In Progress</span>
                  <h3>Regional Expansion</h3>
                  <p>Kumasi operations now running through DEGOONY EVERGREEN LOGISTICS GHANA LTD &mdash; plans for neighbouring West African countries underway.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* PHOTO GALLERY */}
      <div className="section photo-gallery-section" id="gallery">
        <section className="component bg-white reveal">
          <div className="container-fluid">
            <div className="section-head text-center">
              <span className="kicker">Visual Journey</span>
              <h2 className="dark-green">Our Journey in Pictures</h2>
              <p className="section-intro">From showroom floor to training sessions &mdash; every image tells the story of a governed fleet in action.</p>
            </div>
            <Gallery>
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
                <span className="video-caption">
                  <span className="caption-icon"><i className="fas fa-film"></i></span>
                  Evergreen in Motion
                  <span className="gallery-video-badge">Feature Film</span>
                </span>
                <button className="video-play-btn" type="button" aria-label="Play Evergreen film">
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <figure className="gallery-item gallery-feature">
                <img src="/assets/A1.webp" alt="Evergreen showroom operations" loading="lazy" />
                <span className="gallery-num">01</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i className="fas fa-tag"></i>Showroom</span>
                  <span className="gallery-caption">
                    Evergreen Showroom
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
              <figure className="gallery-item gallery-std">
                <img src="/assets/banner-chatgpt.webp" alt="Driver training programme" loading="lazy" />
                <span className="gallery-num">02</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i className="fas fa-tag"></i>Academy</span>
                  <span className="gallery-caption">
                    Driver Training
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
              <figure className="gallery-item gallery-sq">
                <img src="/assets/banna-3.webp" alt="Evergreen Academy graduation" loading="lazy" />
                <span className="gallery-num">03</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i className="fas fa-tag"></i>Academy</span>
                  <span className="gallery-caption">
                    Academy Graduation
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
              <figure className="gallery-item gallery-sq">
                <img src="/assets/banner-maxima.webp" alt="Bajaj Maxima Z fleet" loading="lazy" />
                <span className="gallery-num">04</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i className="fas fa-tag"></i>Fleet</span>
                  <span className="gallery-caption">
                    Bajaj Maxima Z
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
              <figure className="gallery-item gallery-sq">
                <img src="/assets/bajaj-pragia.webp" alt="Bajaj Pragia cargo tricycle" loading="lazy" />
                <span className="gallery-num">05</span>
                <div className="gallery-overlay">
                  <span className="gallery-tag"><i className="fas fa-tag"></i>Fleet</span>
                  <span className="gallery-caption">
                    Bajaj Pragia Cargo
                    <span className="gallery-arrow"><i className="fas fa-arrow-right"></i></span>
                  </span>
                </div>
              </figure>
            </Gallery>
          </div>
        </section>
      </div>

      {/* CTA BANNER */}
      <div className="section">
        <section className="component cta-banner">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to work with a governed fleet?</h2>
              <p>Whether you need tricycles, parts, fleet leasing, or Academy-trained drivers &mdash; our Kumasi team is ready to help.</p>
              <div className="hero-actions">
                <a href="/contact" className="btn primary"><span>Get a Quote</span></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
