import type { Metadata } from "next";
import localFont from "next/font/local";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spartan = League_Spartan({
  subsets:["latin"]
});

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
  title: "Orca Pudmaijing",
  description: "Unofficial Orca Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spartan.className} antialiased bg-white text-black text-xl`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
