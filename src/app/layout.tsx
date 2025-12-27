import type { Metadata } from "next";
import { Antic, Fira_Code, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Avery Doan | Data & Product Portfolio",
  description:
    "Portfolio for Le Quynh Nhu Doan (Avery) spanning data science, marketing analytics, and civic tech projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} ${antic.variable} bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
