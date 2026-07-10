import type { Metadata } from "next";
import { Newsreader, Public_Sans, Space_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Restoran Brunac — Vodice | Obiteljski restoran od devedesetih",
  description:
    "Restoran Brunac u Vodicama — obiteljski restoran Pelajić na Ulici Brunac, dvostruko uvršten među 100 najboljih restorana Hrvatske (1995. i 1997.). Sezonski, tih, bez žurbe — od sredine travnja do listopada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${newsreader.variable} ${publicSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
