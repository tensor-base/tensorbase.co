import "./globals.css";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import SimpleNavbar from "../components/SimpleNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tensor Base: Unobtrusive AI/ML development",
  description: "A platform for seamless AI/ML development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased bg-black`}
      >
        <SimpleNavbar />
        {children}
      </body>
    </html>
  );
}
