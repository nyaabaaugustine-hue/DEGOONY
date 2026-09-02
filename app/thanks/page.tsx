import Link from "next/link";
import Script from "next/script";
import "./thanks.css";

export const metadata = {
  title: "Message Received | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
  description:
    "Thank you for contacting DEGOONY EVERGREEN LOGISTICS GHANA LTD. Our Kumasi team will respond within one business day.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thanks" },
  openGraph: {
    title: "Message Received | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description: "Our Kumasi team will get back to you within one business day.",
    images: ["/assets/logo-256.png"],
  },
};

export default function ThanksPage() {
  return (
    <main className="main-container" id="top">
      <Script
        id="thanks-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Message Received",
            description: "Thank you for contacting DEGOONY EVERGREEN LOGISTICS GHANA LTD.",
            url: "https://www.evergreenlogistics.com.gh/thanks",
            isPartOf: {
              "@type": "WebSite",
              name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
              url: "https://www.evergreenlogistics.com.gh",
            },
          }),
        }}
      />
      <section className="component thanks-page">
        <div className="thanks-card">
          <div className="thanks-check">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1>Message Received</h1>
          <p>
            Thank you for reaching out to DEGOONY EVERGREEN LOGISTICS GHANA LTD.
            <br />
            Our Kumasi team will get back to you within one business day.
          </p>
          <Link className="btn" href="/">
            Back to Home
          </Link>
          <p className="motto">&ldquo;Every Ride Creates Opportunity.&rdquo;</p>
        </div>
      </section>
    </main>
  );
}