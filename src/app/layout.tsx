import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cruz Jurado - Creative Portfolio",
  description: "Frontend Developer • UX/UI Designer • Artist",
  keywords: [
    "frontend developer",
    "ux designer",
    "ui designer",
    "artist",
    "portfolio",
  ],
  authors: [{ name: "Cruz Jurado" }],
  openGraph: {
    title: "Cruz Jurado - Creative Portfolio",
    description: "Frontend Developer • UX/UI Designer • Artist",
    url: "https://zurc.github.io/portfolio-cruz",
    siteName: "Cruz Jurado Portfolio",
    images: [
      {
        url: "https://zurc.github.io/portfolio-cruz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cruz Jurado Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruz Jurado - Creative Portfolio",
    description: "Frontend Developer • UX/UI Designer • Artist",
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
