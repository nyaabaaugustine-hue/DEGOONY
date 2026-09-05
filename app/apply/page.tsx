import AcademyForm from "./AcademyForm";
import Script from "next/script";
import "./apply.css";

const FORMSPREE = "https://formspree.io/f/meajwbky";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap";

export const metadata = {
  title: "Apply to the Academy",
  description:
    "Apply to the Evergreen Academy — the official application for tricycle (Pragia) drivers, delivery riders, and logistics roles at DEGOONY EVERGREEN LOGISTICS GHANA LTD, Kumasi.",
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "Apply to the Academy",
    description:
      "Apply to the Evergreen Academy — the official application for tricycle (Pragia) drivers, delivery riders, and logistics roles at DEGOONY EVERGREEN LOGISTICS GHANA LTD, Kumasi.",
    images: ["/assets/banner-herobg.webp"],
    url: "https://www.evergreenlogistics.com.gh/apply",
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    locale: "en_GH",
    type: "website",
  },
};

export default function ApplyPage() {
  return (
    <main className="main-container" id="top">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={FONT_HREF} />
      <Script
        id="apply-academy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Apply to the Evergreen Academy",
            url: "https://www.evergreenlogistics.com.gh/apply",
            description:
              "The official application for tricycle (Pragia) drivers, delivery riders, and logistics roles at DEGOONY EVERGREEN LOGISTICS GHANA LTD, Kumasi.",
            isPartOf: {
              "@type": "WebSite",
              name: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
              url: "https://www.evergreenlogistics.com.gh/",
            },
          }),
        }}
      />

      {/* HERO — original apply.html has no hero; the dark body bg + form spacing carry the design */}
      <AcademyForm formAction={FORMSPREE} />
    </main>
  );
}
