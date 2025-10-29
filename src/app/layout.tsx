import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitalSwap | Transparent Fee Calculator & Swap Simulator",
  description:
    "Discover transparent VitalSwap fees with our interactive calculator. Simulate swap outcomes, compare user-specific rates, and make informed trading decisions with our comprehensive fee transparency platform.",
  keywords: [
    "VitalSwap",
    "swap fees",
    "fee calculator",
    "foreign exchange",
    "FX rates",
    "swap simulator",
    "transparent pricing",
    "cross-currency swaps",
  ],
  authors: [{ name: "VitalSwap Team" }],
  creator: "VitalSwap",
  publisher: "VitalSwap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vitalswap.com"),
  openGraph: {
    title: "VitalSwap | Transparent Fee Calculator & Swap Simulator",
    description:
      "Discover transparent VitalSwap fees with our interactive calculator. Simulate swap outcomes, compare user-specific rates, and make informed trading decisions.",
    url: "https://vitalswap.com",
    siteName: "VitalSwap",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalSwap | Transparent Fee Calculator & Swap Simulator",
    description:
      "Discover transparent VitalSwap fees with our interactive calculator. Simulate swap outcomes, compare user-specific rates, and make informed trading decisions.",
    creator: "@vitalswap",
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
        {children}
      </body>
    </html>
  );
}
