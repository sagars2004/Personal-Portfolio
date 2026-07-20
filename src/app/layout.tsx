import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sagar Sahu | Software Engineer",
  description:
    "Personal portfolio of Sagar Sahu — software engineer building useful systems at the intersection of product, AI, and finance.",
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
      <body>{children}</body>
    </html>
  );
}
