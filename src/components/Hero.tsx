"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";
import TypingEffect from "./ui/TypingEffect";
import { socialLinks, githubUsername, resumeUrl, location } from "@/data/social";

export default function Hero() {
  const [githubStats, setGithubStats] = useState<number | null>(null);

  useEffect(() => {
    // Fetch GitHub contribution count
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
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm mb-6">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>{location}</span>
        </div>

        {/* Greeting with Typing Effect */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <TypingEffect
            text="Hi, I'm Sagar!"
            className="gradient-text"
            speed={80}
          />
        </h1>

        {/* Headline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          I build{" "}
          <span className="text-rose-400 font-semibold">
            intelligent, scalable, and impactful
          </span>{" "}
          solutions in AI, ML, software engineering, and fintech.
        </p>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Undergraduate student and passionate software developer focused on
          creating elegant solutions that deliver real-world value. I love
          exploring the intersection of machine learning, data, and modern web
          technologies.
        </p>

        {/* GitHub Stats Counter */}
        {githubStats !== null && (
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#23232a] rounded-lg border border-white/10">
              <FaGithub className="w-5 h-5 text-gray-400" />
              <span className="text-2xl font-bold text-white">{githubStats}</span>
              <span className="text-gray-400 text-sm">public repos</span>
            </div>
          </div>
        )}

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#23232a] border border-white/10 text-gray-300 hover:text-rose-400 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-1"
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
          className="inline-flex items-center gap-2 btn-accent"
        >
          <FaFileAlt className="w-4 h-4" />
          <span>Resume</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-rose-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
