import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Header";

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
  title: `The Girlish Talk - Your Hub for Women's Fashion, Health, Psychology & Relationship Advice`,
  description: `Explore insightful articles on women's fashion, health tips, self-esteem, psychology, and relationship advice. Empower yourself with expert guidance at The Girlish Talk—your go-to platform for women's well-being and lifestyle.`,
  other: {
    "google-site-verification": "32hSEeIVmJJo5fkxLUYCPEO_uIwgUoMInetfXN_U5SY",
  },
  openGraph: {
    title: `The Girlish Talk - Your Hub for Women's Fashion, Health, Psychology & Relationship Advice`,
    description: `Explore insightful articles on women's fashion, health tips, self-esteem, psychology, and relationship advice. Empower yourself with expert guidance at The Girlish Talk—your go-to platform for women's well-being and lifestyle.`,
    type: "article",
    locale: "en_US",
    url: `https://www.thegirlishtalk.com/`,
    siteName: "TheGirlishTalk",
    images: [
      {
        url: "girls.webp",
        width: 1200,
        height: 630,
        alt: "Three girl smiling",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
