import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Best Crypto Casinos 2025 | Top Bitcoin & Cryptocurrency Gambling Sites",
  description: "Discover the best crypto casinos in 2025. Expert reviews of top Bitcoin gambling sites with instant payouts, anonymous betting, and exclusive crypto bonuses. Find your perfect crypto casino today!",
  keywords: "crypto casino, bitcoin casino, cryptocurrency gambling, crypto betting, anonymous casino, instant payouts, crypto bonuses, blockchain gambling",
  authors: [{ name: "Smart Betting Guide" }],
  creator: "Smart Betting Guide",
  publisher: "Smart Betting Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://smartbettingguide.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Crypto Casinos 2025 | Top Bitcoin & Cryptocurrency Gambling Sites",
    description: "Discover the best crypto casinos in 2025. Expert reviews of top Bitcoin gambling sites with instant payouts, anonymous betting, and exclusive crypto bonuses.",
    url: "https://smartbettingguide.com",
    siteName: "Smart Betting Guide",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Crypto Casinos 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Crypto Casinos 2025 | Top Bitcoin & Cryptocurrency Gambling Sites",
    description: "Discover the best crypto casinos in 2025. Expert reviews of top Bitcoin gambling sites with instant payouts, anonymous betting, and exclusive crypto bonuses.",
    images: ["/og-image.jpg"],
    creator: "@smartbettingguide",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
