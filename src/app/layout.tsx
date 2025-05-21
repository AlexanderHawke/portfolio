import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./styles/globals.css";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Alexander Hawke - Portfolio',
  description: 'Personal portfolio of Alexander Hawke, Computer Science professional.',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}