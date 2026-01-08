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
  title: "Sagar Sahu | Software Developer",
  description:
    "Personal portfolio of Sagar Sahu - Software Developer, AI Enthusiast, and Computer Science student at RPI. Building intelligent, scalable, and impactful solutions.",
  keywords: [
    "Sagar Sahu",
    "Software Developer",
    "AI",
    "Machine Learning",
    "Full Stack Developer",
    "RPI",
    "Computer Science",
  ],
  authors: [{ name: "Sagar Sahu" }],
  openGraph: {
    title: "Sagar Sahu | Software Developer",
    description:
      "Building intelligent, scalable, and impactful solutions in AI, ML, and software engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0b] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
