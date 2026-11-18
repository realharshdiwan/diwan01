import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { REGISTRATION, SITE } from "@/lib/site";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Diwan Mercantile — Independent software studio, Bengaluru",
    template: "%s · Diwan Mercantile",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: "Diwan Mercantile — Independent software studio, Bengaluru",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Diwan Mercantile — Independent software studio, Bengaluru",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f2f1ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    email: SITE.contactEmail,
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    identifier: [
      { "@type": "PropertyValue", name: "GSTIN", value: REGISTRATION.gstin },
      { "@type": "PropertyValue", name: "Udyam", value: REGISTRATION.udyam },
    ],
  };

  return (
    <html
      lang="en-IN"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[3px] focus:bg-ink focus:px-4 focus:py-2 focus:text-[13px] focus:text-field"
        >
          Skip to content
        </a>

        {/* Ruler rails: the page is measured, not decorated. */}
        <div className="rail rail-left" aria-hidden="true" />
        <div className="rail rail-right" aria-hidden="true" />

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
