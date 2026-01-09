"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";
import TypingEffect from "./ui/TypingEffect";
import ParticleBackground from "./ui/ParticleBackground";
import { socialLinks, location } from "@/data/social";

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const BIRTH_DATE = new Date("2004-03-01T10:00:00");

function calculateTimeElapsed(): TimeElapsed {
  const now = new Date();
  
  let years = now.getFullYear() - BIRTH_DATE.getFullYear();
  let months = now.getMonth() - BIRTH_DATE.getMonth();
  let days = now.getDate() - BIRTH_DATE.getDate();
  let hours = now.getHours() - BIRTH_DATE.getHours();
  let minutes = now.getMinutes() - BIRTH_DATE.getMinutes();
  let seconds = now.getSeconds() - BIRTH_DATE.getSeconds();

  // Handle negative seconds
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  
  // Handle negative minutes
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  
  // Handle negative hours
  if (hours < 0) {
    hours += 24;
    days--;
  }
  
  // Handle negative days
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months--;
  }
  
  // Handle negative months
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds };
}

export default function Hero() {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed | null>(null);

  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Initial calculation
    setTimeElapsed(calculateTimeElapsed());

    // Update every second
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleResumeClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    // Dispatch custom event for Contact to show toast
    window.dispatchEvent(new CustomEvent("showResumeToast"));
  };

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
      {/* Particle Background */}
      <ParticleBackground particleCount={120} speed={0.25} maxDistance={200} />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layered Gradient Orbs - Vibrant with sharp edges */}
        <div 
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[40px] animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(168,85,247,0.45) 25%, rgba(244,63,94,0.2) 45%, transparent 60%)'
          }}
        />
        <div 
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[35px] animate-blob-reverse animation-delay-2000"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.6) 0%, rgba(139,92,246,0.45) 25%, rgba(59,130,246,0.15) 50%, transparent 65%)'
          }}
        />
        <div 
          className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] rounded-full blur-[38px] animate-blob-drift animation-delay-4000"
          style={{
            background: 'radial-gradient(circle, rgba(34,197,94,0.55) 0%, rgba(6,182,212,0.4) 25%, rgba(168,85,247,0.15) 45%, transparent 60%)'
          }}
        />
        <div 
          className="absolute top-[50%] right-[30%] w-[350px] h-[350px] rounded-full blur-[32px] animate-blob-pulse animation-delay-1000"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.6) 0%, rgba(244,63,94,0.45) 25%, rgba(236,72,153,0.15) 50%, transparent 65%)'
          }}
        />
        <div 
          className="absolute bottom-[30%] right-[5%] w-[300px] h-[300px] rounded-full blur-[28px] animate-blob animation-delay-3000"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(59,130,246,0.45) 25%, rgba(6,182,212,0.15) 45%, transparent 60%)'
          }}
        />
        
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
        {/* Greeting with Typing Effect */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <TypingEffect
            text="Hi, I'm Sagar!"
            className="text-white"
            speed={80}
          />
        </h1>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-grey-500/10 border border-grey-500/30 text-grey-400 text-sm mb-8 animate-float">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>{location}</span>
        </div>

        {/* Headline */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-6 max-w-3xl mx-auto font-medium">
          I build{" "}
          <span className="text-rose-400 font-semibold">
            intelligent, scalable, and impactful
          </span>{" "}
          solutions in AI, machine learning, and software engineering.
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A rather passionate developer focused on
          creating elegant products that deliver real-world value in the worlds of tech and finance.
        </p>

        {/* Life Timer */}
        {timeElapsed && (
          <div className="flex justify-center mb-10">
            <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">My Time on Earth</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{timeElapsed.years}</span>
                  <p className="text-xs text-gray-500">years</p>
                </div>
                <span className="text-gray-600">:</span>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{timeElapsed.months}</span>
                  <p className="text-xs text-gray-500">months</p>
                </div>
                <span className="text-gray-600">:</span>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{timeElapsed.days}</span>
                  <p className="text-xs text-gray-500">days</p>
                </div>
                <span className="text-gray-600">:</span>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-rose-400">{String(timeElapsed.hours).padStart(2, '0')}</span>
                  <p className="text-xs text-gray-500">hrs</p>
                </div>
                <span className="text-gray-600">:</span>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-rose-400">{String(timeElapsed.minutes).padStart(2, '0')}</span>
                  <p className="text-xs text-gray-500">min</p>
                </div>
                <span className="text-gray-600">:</span>
                <div className="text-center">
                  <span className="text-2xl sm:text-3xl font-bold text-rose-400">{String(timeElapsed.seconds).padStart(2, '0')}</span>
                  <p className="text-xs text-gray-500">sec</p>
                </div>
              </div>
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
          <button
            onClick={handleResumeClick}
            className="btn-accent flex items-center gap-2"
          >
            <FaFileAlt className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-subtle-bounce">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-rose-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
