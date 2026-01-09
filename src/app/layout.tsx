import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0a0a0b] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
