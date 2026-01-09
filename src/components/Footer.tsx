"use client";

import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@/data/social";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <FaGithub className="w-9 h-9" />;
      case "linkedin":
        return <FaLinkedin className="w-9 h-9" />;
      default:
        return null;
    }
  };

  return (
    <footer className="py-8 px-6 lg:px-12 border-t border-white/5 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Navigation Links */}
        <nav className="flex-1 flex items-center justify-center sm:justify-start gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-gray-500 hover:text-rose-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Attribution */}
        <div className="flex-1 flex items-center justify-center gap-1 text-sm text-gray-600">
          <span>Made with </span>
          < FaHeart className="w-4 h-4 text-rose-500" />
          <span> by Sagar Sahu</span>
          <span className="mx-2 text-gray-700">|</span>
          <span>© {new Date().getFullYear()} All Rights Reserved.</span>
        </div>

        {/* Social Links */}
        <div className="flex-1 flex items-center justify-center sm:justify-end gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
              aria-label={link.name}
            >
              {getSocialIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
