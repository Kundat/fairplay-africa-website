import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCtaBar from "@/components/layout/StickyCtaBar";
import ConsentBanner from "@/components/layout/ConsentBanner";
import AnalyticsLoader from "@/components/layout/AnalyticsLoader";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-montserrat", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL("https://www.fairplay.africa"),
  title: "FairPlay Africa — Create. Own. Protect. Earn.",
  description: "Register your work, protect it with invisible watermarking and fingerprinting, and know where it appears online. One trusted home for African creators and filmmakers.",
  openGraph: { title: "FairPlay Africa", description: "Protecting African creativity.", type: "website", images: ["/opengraph-image.png"] },
  twitter: { card: "summary_large_image", title: "FairPlay Africa", description: "Protecting African creativity." },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top" className={montserrat.variable}><Preloader/><Header/><main>{children}</main><Footer/><StickyCtaBar/><ConsentBanner/><AnalyticsLoader/></body></html>;
}
