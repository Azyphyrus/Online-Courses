import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Hydration from "@/components/Hydration";
import { Suspense } from "react";
import DisclaimerBanner from "@/components/DisclaimerBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitano Studio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased tracking-tighter`}
      >
        <Header />
        <Hydration />
        <Suspense>
          {children}
          <DisclaimerBanner />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
