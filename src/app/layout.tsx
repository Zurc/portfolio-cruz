import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Morgan - Creative Portfolio",
  description: "Frontend Developer • UX/UI Designer • Digital Artist",
  keywords: [
    "frontend developer",
    "ux designer",
    "ui designer",
    "digital artist",
    "portfolio",
  ],
  authors: [{ name: "Alex Morgan" }],
  openGraph: {
    title: "Alex Morgan - Creative Portfolio",
    description: "Frontend Developer • UX/UI Designer • Digital Artist",
    url: "https://alexmorgan.dev",
    siteName: "Alex Morgan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Morgan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan - Creative Portfolio",
    description: "Frontend Developer • UX/UI Designer • Digital Artist",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
