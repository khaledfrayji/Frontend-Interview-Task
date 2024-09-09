import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactPawan from "@/components/ContactPawan";
import MainComponent from "@/components/QuickContact";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alpha Finance | Khaled Frayji",
  description:
    "Alpha Finance - Offering comprehensive financial solutions in Sydney, Australia. Services include Home Loans, Refinancing, Commercial Loans, and more.",
  keywords:
    "Sydney finance, home loans, refinancing, commercial loans, asset finance, SMSF lending, financial services",
  openGraph: {
    type: "website",
    url: "https://alphaafin.com.au",
    title: "Alpha Finance | Khaled Frayji",
    description:
      "Comprehensive financial solutions including Home Loans, Refinancing, Commercial Loans, and more in Sydney, Australia.",
    images: [
      {
        url: "https://alphaafin.com.au/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Alpha Finance Sydney",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
          <Navbar />
          {children}
          <ContactPawan />
          <MainComponent />
        </>
      </body>
    </html>
  );
}
