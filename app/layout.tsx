import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PromoModal from "@/components/PromoModal";
import AutoInjectedUI from "@/components/AutoInjectedUI";
import ScrollRevealEngine from "@/components/ScrollRevealEngine";
import ScrollToTop from "@/components/ScrollToTop";
import LeaderModalProvider from "@/components/LeaderModal";

export const viewport: Viewport = {
  themeColor: "#005a30",
};

const siteUrl = "https://www.evergreenlogistics.com.gh";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "DEGOONY EVERGREEN LOGISTICS GHANA LTD | Tricycles, Evergreen Electric Fleet & Evergreen Academy",
    template: "%s | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
  },
  description:
    "Dealers in Bajaj and TVS Pragia tricycles, genuine spare parts, and the Evergreen electric fleet. Home of the Evergreen Academy — Ghana's structured driver training and fleet-governance institution. Every Ride Creates Opportunity.",
  icons: { icon: "/assets/logo-256.png", apple: "/assets/logo-256.png" },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    images: [
      { url: "/assets/banner-herobg.webp", width: 1200, height: 630, alt: "Evergreen electric tricycle fleet" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEGOONY EVERGREEN LOGISTICS GHANA LTD",
    description: "Tricycles, electric fleet, genuine parts, and the Evergreen Academy in Ghana.",
    images: ["/assets/banner-herobg.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="preload" href="/assets/css/font-awesome.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
      </head>
      <body suppressHydrationWarning>
        <a className="skip-link" href="#top">
          Skip to main content
        </a>
        <LeaderModalProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <PromoModal />
          <AutoInjectedUI />
        </LeaderModalProvider>
        <ScrollRevealEngine />
        <ScrollToTop />
      </body>
    </html>
  );
}
