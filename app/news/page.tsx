import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "News & Stories | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
  description:
    "Latest updates from DEGOONY EVERGREEN LOGISTICS GHANA LTD — Evergreen Academy cohorts, fleet expansion across Ashanti, and clean mobility milestones.",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "News & Stories | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description:
      "Behind every ride is a story. Read the latest from Evergreen Academy, fleet operations, and electric mobility.",
    images: ["/assets/banner-ghana.webp"],
    url: "https://www.evergreenlogistics.com.gh/news",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function NewsPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="news-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsMediaOrganization",
            name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
            url: "https://www.evergreenlogistics.com.gh",
            description:
              "Latest updates from Evergreen Academy cohorts, fleet expansion, and clean mobility.",
          }),
        }}
      />

      <div className="page-hero">
        <div className="hero-slide active">
          <div className="ad-image">
            <img
              src="/assets/header-bg.webp"
              alt="DEGOONY EVERGREEN LOGISTICS GHANA LTD tricycles on the road"
            />
          </div>
          <div className="item-shade"></div>
          <div className="container item-container">
            <div className="hero-copy col-xs-12 col-md-8">
              <span className="hero-eyebrow kicker">
                <i className="fas fa-newspaper"></i> Latest Updates
              </span>
              <h1 className="hero-title">Our News &amp; Stories</h1>
              <p className="hero-body">
                Behind every ride is a story &mdash; of certified drivers, growing
                fleets, and communities moved forward. Here are the latest from
                DEGOONY EVERGREEN LOGISTICS GHANA LTD.
              </p>
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
            <li>News</li>
          </ol>
        </div>
      </div>

      <div className="section" id="press-release">
        <section className="component bg-white reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Press Release &middot; September 2025</span>
              <h2 className="dark-green">
                DEGOONY EVERGREEN LOGISTICS GHANA LTD Launches Clean Mobility
                Mission in Ghana
              </h2>
            </div>
            <div className="press-body">
              <p className="press-dateline">
                <strong>ACCRA, GHANA</strong> &mdash; DEGOONY EVERGREEN LOGISTICS
                GHANA LTD, a woman-led clean mobility startup, today announced the
                official launch of its operations in Ghana. The company&rsquo;s
                mission is to revolutionize last-mile transportation across West
                Africa using affordable electric tricycles, motorbikes, and
                solar-powered charging infrastructure.
              </p>
              <p>
                Under the banner{" "}
                <strong>
                  &ldquo;Clean Mobility. Local Empowerment. Global Impact,&rdquo;
                </strong>{" "}
                Evergreen combines climate action with community empowerment. Its
                Evergreen Academy certification pathway prepares youth and women to
                become professional drivers &mdash; employed on guaranteed salaries
                plus commission aboard company-owned electric vehicles &mdash;
                creating dignified jobs, reducing emissions, and cutting congestion
                in urban centres.
              </p>
              <h3>Phased Rollout for Maximum Impact</h3>
              <p>
                The Phase 1 pilot programme will deploy 25&ndash;30 electric
                vehicles (EVs) in Accra. This initial fleet is supported by a
                central solar-powered charging hub and a battery swap programme
                designed for efficiency and minimal downtime for drivers.
              </p>
              <p>
                Future phases of expansion are already planned for Kumasi &mdash;
                where operations now run through DEGOONY EVERGREEN LOGISTICS GHANA
                LTD &mdash; other regions in Ghana, and neighbouring West African
                countries.
              </p>
              <h3>A Movement Backed by Expertise</h3>
              <p>
                Evergreen&rsquo;s model has drawn early support from sustainability
                experts, logistics professionals, and local field leaders &mdash;
                all committed to building a smarter, cleaner, and more inclusive
                transportation future for the region.
              </p>
              <p>
                The company is actively seeking public-private partnerships,
                mission-aligned grants, and catalytic funding to scale its impact.
              </p>
              <blockquote className="press-quote">
                <p>
                  &ldquo;This isn&rsquo;t just a business for us &mdash; it&rsquo;s
                  a movement to restore dignity, climate resilience, and
                  opportunity in our communities.&rdquo;
                </p>
                <cite>
                  &mdash; Jefflean K. Ntow, CEO, DEGOONY EVERGREEN LOGISTICS GHANA
                  LTD
                </cite>
              </blockquote>
            </div>
            <div className="row press-boxes">
              <div className="col-md-6">
                <div className="press-box">
                  <h4>About DEGOONY EVERGREEN LOGISTICS GHANA LTD</h4>
                  <p>
                    DEGOONY EVERGREEN LOGISTICS GHANA LTD is a woman-led clean
                    mobility startup registered in the United States, launching
                    operations in Ghana. Our mission is to revolutionize last-mile
                    transportation across West Africa, combining environmental
                    sustainability with profound community empowerment and job
                    creation.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="press-box">
                  <h4>Media Contact</h4>
                  <ul className="contact-list">
                    <li>
                      <a href="mailto:info@evergreenlogistics.com">
                        <i className="fas fa-envelope"></i>{" "}
                        info@evergreenlogistics.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+18045643466">
                        <i className="fas fa-phone-alt"></i> +1 (804) 564-3466
                      </a>
                    </li>
                    <li>
                      <a href="tel:+233243901731">
                        <i className="fas fa-phone-alt"></i> +233 24 390 1731
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="section">
        <section className="component bg-light-grey reveal">
          <div className="container">
            <div className="section-head text-center">
              <span className="kicker">Stories</span>
              <h2 className="dark-green">News &amp; Updates</h2>
            </div>
            <div className="news-grid">
              <article className="news-card">
                <div className="news-image">
                  <img
                    src="/assets/banner-ghana.webp"
                    alt="Evergreen Academy graduates in front of the training centre"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="news-date">August 2026</span>
                </div>
                <div className="news-body">
                  <span className="news-tag">Academy</span>
                  <h3 className="news-title">
                    First Cohort Completes Evergreen Academy Certification
                  </h3>
                  <p className="news-excerpt">
                    Six drivers have completed the full Evergreen Academy
                    certification programme, covering safety, defensive riding,
                    customer service, and daily vehicle inspection standards.
                  </p>
                  <Link href="/academy" className="text-link has-arrow">
                    Read more <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>

              <article className="news-card">
                <div className="news-image">
                  <img
                    src="/assets/banner-maxima.webp"
                    alt="New Bajaj and TVS Pragia units at the Kumasi yard"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="news-date">July 2026</span>
                </div>
                <div className="news-body">
                  <span className="news-tag">Fleet</span>
                  <h3 className="news-title">
                    Expanding the Bajaj &amp; TVS Pragia Fleet Across Ashanti
                  </h3>
                  <p className="news-excerpt">
                    New Bajaj and TVS Pragia units arrived at our Kumasi yard this
                    month, bringing the total fleet count to a new high as we
                    expand routes across the Ashanti region.
                  </p>
                  <Link href="/tricycles" className="text-link has-arrow">
                    Read more <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>

              <article className="news-card">
                <div className="news-image">
                  <img
                    src="/assets/banner-herobg.webp"
                    alt="Evergreen electric fleet vehicles charging"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="news-date">June 2026</span>
                </div>
                <div className="news-body">
                  <span className="news-tag">Electric Fleet</span>
                  <h3 className="news-title">
                    Evergreen Electric Fleet Reaches GPS Uptime Milestone
                  </h3>
                  <p className="news-excerpt">
                    Our Evergreen electric fleet has achieved over 98% GPS uptime,
                    reinforcing our commitment to transparency, real-time
                    tracking, and operator accountability.
                  </p>
                  <Link href="/elecer" className="text-link has-arrow">
                    Read more <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}