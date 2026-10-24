import type { Metadata, Viewport } from "next";
import { STIX_Two_Text } from "next/font/google";
import "./globals.css";
import { contact } from "@/data/resume";
import { SITE_URL, absoluteUrl } from "@/lib/site";

const stix = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-stix",
  display: "swap",
});

const title = `${contact.shortName} | ${contact.headline}, NT Government`;
const description =
  "Avery Doan is a Data Analyst in the NT Government (Department of Children and Families). Evidence-based reporting, Power BI dashboards, data pipelines and plain-English insights.";
const ogImage = {
  url: absoluteUrl("/og.jpg"),
  width: 1200,
  height: 630,
  alt: "Avery Doan, Data Analyst, Darwin NT",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: contact.shortName,
    title,
    description,
    locale: "en_AU",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#e8e8e3",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: contact.name,
  givenName: "Avery",
  jobTitle: contact.headline,
  url: absoluteUrl("/"),
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Darwin", addressRegion: "NT", addressCountry: "AU" },
  worksFor: { "@type": "Organization", name: "Department of Children and Families, NT Government" },
  sameAs: [contact.github, contact.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${stix.variable} antialiased`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
