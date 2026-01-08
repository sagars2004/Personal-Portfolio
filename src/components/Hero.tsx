"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";
import TypingEffect from "./ui/TypingEffect";
import { socialLinks, githubUsername, resumeUrl, location } from "@/data/social";

export default function Hero() {
  const [githubStats, setGithubStats] = useState<number | null>(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );
        const data = await response.json();
        setGithubStats(data.public_repos || 0);
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      }
    };

    fetchGithubStats();
  }, []);

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <FaGithub className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-blob-reverse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0b]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm mb-8 animate-float">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>{location}</span>
        </div>

        {/* Greeting with Typing Effect */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
          <TypingEffect
            text="Hi, I'm Sagar!"
            className="gradient-text"
            speed={80}
          />
        </h1>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6 max-w-3xl mx-auto font-medium">
          I build{" "}
          <span className="text-rose-400 font-semibold">
            intelligent, scalable, and impactful
          </span>{" "}
          solutions in AI, ML, software engineering, and fintech.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Undergraduate student and passionate software developer focused on
          creating elegant solutions that deliver real-world value.
        </p>

        {/* GitHub Stats Counter */}
        {githubStats !== null && (
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <FaGithub className="w-6 h-6 text-gray-400" />
              <span className="text-3xl font-bold text-white">{githubStats}</span>
              <span className="text-gray-400 text-sm">public repos</span>
            </div>
          </div>
        )}

        {/* Social Links & Resume */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-rose-400 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all duration-300"
                aria-label={link.name}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent flex items-center gap-2"
          >
            <FaFileAlt className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-rose-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
