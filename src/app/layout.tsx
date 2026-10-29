import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "./globals.css";
import { site } from "@/lib/data/site";
import { getServerLocale } from "@/lib/locale";
import { I18nProvider } from "@/components/I18nProvider";
import { SavedProvider } from "@/components/SavedProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingStack } from "@/components/FloatingStack";
import { ScrollTop } from "@/components/ScrollTop";
import { CookieConsent } from "@/components/CookieConsent";
import { Preloader } from "@/components/Preloader";
import { TemplateMotion } from "@/components/TemplateMotion";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcd307",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.oneLiner,
  applicationName: site.name,
  keywords: [
    "Apollos Studios",
    "rehearsal rooms Africa",
    "recording studios Nairobi",
    "Lagos rehearsal studio",
    "Accra maker studio",
    "Johannesburg art studio",
    "Kampala podcast booth",
    "Dakar creative workspace",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.oneLiner,
    url: site.url,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 800,
        alt: `${site.name} creative workspace directory`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.oneLiner,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getServerLocale();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    alternateName: site.tagline,
    description: site.oneLiner,
    url: site.url,
  };

  return (
    <html lang={locale}>
      <body style={{ fontFamily: "'Poppins', Arial, sans-serif" }}>
        <a href="#main-content" className="ws-skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider initialLocale={locale}>
          <SavedProvider>
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <FloatingStack />
            <ScrollTop />
            <CookieConsent />
            <Preloader />
            <TemplateMotion />
          </SavedProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
