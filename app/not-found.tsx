import Link from "next/link";

export const metadata = {
  title: "Page Not Found | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
  description:
    "The page you are looking for does not exist. Explore DEGOONY EVERGREEN LOGISTICS GHANA LTD tricycles, spare parts, electric fleet solutions, and the Evergreen Academy.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="main-container" id="top">
      <div className="section">
        <section className="component bg-light-grey">
          <div className="container">
            <div className="notfound-wrap text-center">
              <span className="kicker">Error 404</span>
              <h2 className="dark-green">This road doesn&rsquo;t exist.</h2>
              <p className="section-intro">
                The page you&rsquo;re looking for has moved or never existed &mdash;
                but our tricycles, parts, and Academy are right where you left them.
              </p>
              <div className="hero-actions">
                <Link href="/" className="btn primary">
                  <span>Back to Homepage</span>
                </Link>
                <Link href="/contact" className="btn secondary">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}