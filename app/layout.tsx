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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evergreenlogistics.com.gh"),
  title: {
    default:
      "DEGOONY EVERGREEN LOGISTICS GHANA LTD | Tricycles, Evergreen Electric Fleet & Evergreen Academy",
    template: "%s | DEGOONY EVERGREEN LOGISTICS GHANA LTD",
  },
  description:
    "Dealers in Bajaj and TVS Pragia tricycles, genuine spare parts, and the Evergreen electric fleet. Home of the Evergreen Academy — Ghana's structured driver training and fleet-governance institution. Every Ride Creates Opportunity.",
  icons: { icon: "/assets/logo-256.png", apple: "/assets/logo-256.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/css/bootstrap.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="preload" href="/assets/css/font-awesome.min.css" as="style" />
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
      </head>
      <body>
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
