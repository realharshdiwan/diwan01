import type { Metadata, Viewport } from "next";
import { Handjet, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { REGISTRATION, SITE } from "@/lib/site";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const dot = Handjet({
  subsets: ["latin"],
  variable: "--font-handjet",
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
  themeColor: "#f7f5ef",
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
    <html lang="en-IN" className={`${mono.variable} ${dot.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-[12px] focus:text-field"
        >
          Skip to content
        </a>

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
