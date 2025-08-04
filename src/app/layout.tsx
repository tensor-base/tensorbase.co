import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // 1. IMPORT THE NAVBAR

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tensor Base: Unobtrusive AI/ML development",
  description: "A platform for seamless AI/ML development",
};

// This is the main layout Next.js uses
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Navbar /> {/* 2. ADD THE NAVBAR COMPONENT HERE */}
        <main>{children}</main> {/* 3. WRAP THE PAGE CONTENT */}
      </body>
    </html>
  );
}
