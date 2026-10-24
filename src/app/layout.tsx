import type { Metadata, Viewport } from "next";
import { Antic, Fira_Code, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { contact } from "@/data/resume";
import { SITE_URL, absoluteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-code",
});

const antic = Antic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-antic",
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
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className="antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${antic.variable} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
