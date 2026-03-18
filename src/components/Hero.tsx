"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import TypingEffect from "./ui/TypingEffect";
import ParticleBackground from "./ui/ParticleBackground";
import { socialLinks, location } from "@/data/social";
import { SplineScene } from "@/components/ui/splite";

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
      case "linktree":
        return <SiLinktree className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pt-28 pb-24 sm:pt-32 sm:pb-28"
    >
      {/* Particle Background */}
      <ParticleBackground starCount={100} speed={0.12} />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layered Gradient Orbs - Vibrant and sharp */}
        <div
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full blur-[20px] animate-blob"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.75) 0%, rgba(168,85,247,0.55) 30%, rgba(244,63,94,0.25) 55%, transparent 70%)'
          }}
        />
        <div
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[18px] animate-blob-reverse animation-delay-2000"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.75) 0%, rgba(139,92,246,0.55) 30%, rgba(59,130,246,0.2) 55%, transparent 70%)'
          }}
        />
        <div
          className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] rounded-full blur-[20px] animate-blob-drift animation-delay-4000"
          style={{
            background: 'radial-gradient(circle, rgba(34,197,94,0.7) 0%, rgba(6,182,212,0.5) 30%, rgba(168,85,247,0.2) 55%, transparent 70%)'
          }}
        />
        <div
          className="absolute top-[50%] right-[30%] w-[350px] h-[350px] rounded-full blur-[16px] animate-blob-pulse animation-delay-1000"
          style={{
            background: 'radial-gradient(circle, rgba(251,146,60,0.75) 0%, rgba(244,63,94,0.55) 30%, rgba(236,72,153,0.2) 55%, transparent 70%)'
          }}
        />
        <div
          className="absolute bottom-[30%] right-[5%] w-[300px] h-[300px] rounded-full blur-[14px] animate-blob animation-delay-3000"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.75) 0%, rgba(59,130,246,0.55) 30%, rgba(6,182,212,0.2) 55%, transparent 70%)'
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
      <div className="relative z-10 mx-auto mt-4 grid w-full max-w-6xl grid-cols-1 items-center gap-10 sm:mt-0 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: existing hero content */}
        <div className="text-center">
          {/* Greeting with Typing Effect */}
          <h1 className="mb-4 text-5xl font-bold sm:mb-6 sm:text-6xl lg:text-7xl">
            <TypingEffect text="Hi, I'm Sagar!" className="text-white" speed={80} />
          </h1>

          {/* Location Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-grey-500/30 bg-grey-500/10 px-4 py-2 text-sm text-gray-400 animate-float sm:mb-8">
            <FaMapMarkerAlt className="h-4 w-4" />
            <span>{location}</span>
          </div>

          {/* Headline */}
          <h2 className="mx-auto mb-4 max-w-3xl text-xl font-medium text-gray-200 sm:mb-6 sm:text-2xl lg:text-3xl">
            I build{" "}
            <span className="font-semibold text-rose-400">intelligent, scalable, and impactful</span>{" "}
            solutions in AI, machine learning, and software engineering.
          </h2>

          {/* Description */}
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:mb-10">
            A rather passionate developer focused on creating elegant products that deliver real-world
            value in the worlds of tech and finance.
          </p>

          {/* Life Timer */}
          {timeElapsed && (
            <div className="mb-8 flex justify-center sm:mb-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
                <p className="mb-3 text-xs uppercase tracking-wider text-gray-300">My Time on Earth</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-white sm:text-3xl">{timeElapsed.years}</span>
                    <p className="text-xs text-gray-300">years</p>
                  </div>
                  <span className="text-gray-400">:</span>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-white sm:text-3xl">{timeElapsed.months}</span>
                    <p className="text-xs text-gray-300">months</p>
                  </div>
                  <span className="text-gray-400">:</span>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-white sm:text-3xl">{timeElapsed.days}</span>
                    <p className="text-xs text-gray-300">days</p>
                  </div>
                  <span className="text-gray-400">:</span>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-rose-400 sm:text-3xl">
                      {String(timeElapsed.hours).padStart(2, "0")}
                    </span>
                    <p className="text-xs text-gray-300">hrs</p>
                  </div>
                  <span className="text-gray-400">:</span>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-rose-400 sm:text-3xl">
                      {String(timeElapsed.minutes).padStart(2, "0")}
                    </span>
                    <p className="text-xs text-gray-300">min</p>
                  </div>
                  <span className="text-gray-400">:</span>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-rose-400 sm:text-3xl">
                      {String(timeElapsed.seconds).padStart(2, "0")}
                    </span>
                    <p className="text-xs text-gray-300">sec</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Social Links & Resume */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-400"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <button onClick={handleResumeClick} className="btn-accent flex items-center gap-2">
              <FaFileAlt className="h-4 w-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Right: Spline robot only */}
        <div className="relative mx-auto w-full max-w-[700px] lg:mx-0 lg:justify-self-end">
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 sm:h-[520px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              zoom={0.55}
              forceZoomMs={2000}
              className="h-full w-full spline-transparent"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-subtle-bounce">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-rose-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
