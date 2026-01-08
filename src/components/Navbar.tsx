"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "technologies", label: "Technologies" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center">
          {/* Logo - pushed to left */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-white hover:text-rose-400 transition-colors flex-shrink-0"
          >
            SS<span className="text-rose-500">.</span>
          </button>

          {/* Desktop Navigation - centered and spaced out */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative">
              <ul className="flex items-center gap-8 lg:gap-12">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`px-3 py-2 text-sm font-medium transition-all ${
                        activeSection === link.id
                          ? "text-rose-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              {/* Accent bar under links */}
              <div className="absolute -bottom-3 left-0 right-0 h-[2px] bg-rose-500" />
            </div>
          </div>

          {/* Spacer to balance the logo on desktop */}
          <div className="hidden md:block w-[52px] flex-shrink-0" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-auto text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="glass border-t border-rose-500/10 px-4 py-4 space-y-1 mt-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? "text-rose-400 bg-rose-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile accent bar */}
        <div className="h-[2px] bg-rose-500 mx-4" />
      </div>
    </nav>
  );
}
