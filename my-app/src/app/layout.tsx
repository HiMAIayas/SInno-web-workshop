import type { Metadata } from "next";
import localFont from "next/font/local";
import { League_Spartan, Lemon, Lilita_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartContextProvider from "@/contexts/CartContext";

const spartan = League_Spartan({
  subsets: ["latin"]
});

const lilita = Lilita_One({
  weight: ["400"],
  variable: "--font-lilita",
  subsets: ["latin"]
})

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
const lemon = Lemon({
  weight: ["400"],
  variable: "--font-lemon",
  subsets: ["latin"]
})

  ;

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
      <CartContextProvider>
        <body 
        className={`${lilita.variable} ${lemon.variable} ${geistSans.variable} ${geistMono.variable} ${spartan.className} antialiased bg-white text-black text-lg md:text-2xl`}
        >
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </body>
      </CartContextProvider>
    </html>
  );
}
