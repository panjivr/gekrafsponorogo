import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { org } from "@/lib/content";

const siteUrl = "https://gekrafsponorogo.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GEKRAFS Ponorogo — Gerakan Ekonomi Kreatif Nasional",
    template: "%s · GEKRAFS Ponorogo",
  },
  description: org.description,
  keywords: [
    "GEKRAFS Ponorogo",
    "Ekonomi Kreatif Ponorogo",
    "Gerakan Ekonomi Kreatif Nasional",
    "Ekraf Ponorogo",
    "UMKM Ponorogo",
    "Reog Ponorogo",
    "17 subsektor ekraf",
  ],
  authors: [{ name: org.longName }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: org.name,
    title: "GEKRAFS Ponorogo — Gerakan Ekonomi Kreatif Nasional",
    description: org.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "GEKRAFS Ponorogo",
    description: org.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "organization",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: org.longName,
  alternateName: "GEKRAFS Ponorogo",
  url: siteUrl,
  email: org.email,
  slogan: org.tagline,
  description: org.description,
  areaServed: "Ponorogo, Jawa Timur, Indonesia",
  sameAs: [org.socials.instagram, org.socials.youtube, org.socials.tiktok],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
