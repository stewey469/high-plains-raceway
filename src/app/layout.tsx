import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.highplainsraceway.com"),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Experience Colorado's premier amateur road racing facility. 2.55 miles, 15 turns, 300+ feet of elevation change. Open lapping, club racing, instruction, and track rentals from April through October in Deer Trail, CO.",
  keywords: [
    "High Plains Raceway",
    "Colorado racing",
    "amateur racing",
    "track days",
    "open lapping",
    "road racing",
    "Deer Trail Colorado",
    "SCCA",
    "NASA",
    "PCA",
    "vintage racing",
    "driving instruction",
    "track rental",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "2.55 miles of rolling Colorado terrain with 15 turns and 300+ feet of elevation change. The only motorsports facility in America conceived, financed, designed, and built entirely by amateur racing clubs.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Colorado's premier amateur road racing facility. Open lapping, club racing, instruction, and private rentals.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.highplainsraceway.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: SITE.name,
    description:
      "Colorado's premier amateur road racing facility — 2.55 miles, 15 turns, 300+ feet of elevation change. Open lapping days, club racing, driving instruction, and track rentals.",
    url: "https://www.highplainsraceway.com",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "Open during scheduled events, primarily April through October",
    },
    sameAs: [SITE.social.facebook],
    priceRange: "$$",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Road Course", value: true },
      { "@type": "LocationFeatureSpecification", name: "RV Hookups", value: true },
      { "@type": "LocationFeatureSpecification", name: "Covered Carports", value: true },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#dc2626" />
        <link rel="manifest" href="/manifest.json" />
        <LocalBusinessJsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
