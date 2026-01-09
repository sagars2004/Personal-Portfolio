"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBriefcase, FaFlask, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import ParticleBackground from "./ui/ParticleBackground";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const activeExp = experiences[displayIndex];

  // Handle card transition animation
  const handleCardChange = (newIndex: number) => {
    if (newIndex === activeIndex || isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    
    // After fade out, update content and fade in
    setTimeout(() => {
      setDisplayIndex(newIndex);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section id="experience" className="min-h-screen py-24 px-4 scroll-mt-1 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground starCount={70} speed={0.1} />

      {/* Background accents - animated */}
      <div 
        className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full blur-[18px] animate-blob animation-delay-2000"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(168,85,247,0.5) 30%, rgba(244,63,94,0.18) 55%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full blur-[16px] animate-blob-pulse animation-delay-4000"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.7) 0%, rgba(236,72,153,0.5) 30%, rgba(139,92,246,0.18) 55%, transparent 70%)'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="My Experience" />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Stacked role cards */}
          <div className="lg:w-[380px] flex-shrink-0 flex flex-col justify-between h-[520px]">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => handleCardChange(index)}
                className={`w-full group flex flex-col px-5 py-3 rounded-xl text-left transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-white/15 border-l-4 border-white shadow-lg shadow-white/5"
                    : "bg-white/5 border-l-4 border-transparent hover:bg-white/10 hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Company Logo or Fallback Icon */}
                  <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden ${
                    activeIndex === index 
                      ? "bg-white/10" 
                      : "bg-white/5"
                  }`}>
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={42}
                        height={42}
                        className="object-contain"
                      />
                    ) : exp.type === "work" ? (
                      <FaBriefcase className={`w-5 h-5 ${activeIndex === index ? "text-rose-400" : "text-gray-400"}`} />
                    ) : (
                      <FaFlask className={`w-5 h-5 ${activeIndex === index ? "text-rose-400" : "text-gray-400"}`} />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-500 mt-0.5">{exp.title}</p>
                    <p className={`font-semibold text-sm ${activeIndex === index ? "text-rose-400" : "text-white"}`}>
                      {exp.company}
                    </p>
                  </div>
                </div>
                {/* Skills bubbles */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-14">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
                          activeIndex === index
                            ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                            : "bg-white/5 text-gray-400 border border-white/10"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right side - Expanded view */}
          <div className="flex-1 card p-8 lg:p-10 relative overflow-hidden h-[520px]">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Content wrapper with fade animation */}
            <div 
              className={`h-full flex flex-col justify-between transition-all duration-300 ${
                isAnimating 
                  ? "opacity-0 translate-y-4" 
                  : "opacity-100 translate-y-0"
              }`}
            >
              {/* Top content section */}
              <div>
                {/* Header with logo */}
                <div className="flex items-start gap-4 mb-6">
                {/* Large logo with pulse effect */}
                {activeExp.logo && (
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-105">
                    <Image
                      src={activeExp.logo}
                      alt={`${activeExp.company} logo`}
                      width={58}
                      height={58}
                      className="object-cover"
                    />
                  </div>
                )}
                  <div>
                    {/* Type badge with glow */}
                    <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-2 transition-all duration-300 ${
                      activeExp.type === "work" 
                        ? "bg-rose-500/10 text-rose-400 border border-rose-500/30 shadow-sm shadow-rose-500/20" 
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-sm shadow-blue-500/20"
                    }`}>
                      {activeExp.type === "work" ? "Work Experience" : "Research"}
                    </span>
                    {/* Title & Company */}
                    <h3 className="text-2xl font-bold text-white">{activeExp.title}</h3>
                    <p className="text-rose-400 font-semibold text-lg">{activeExp.company}</p>
                  </div>
                </div>

                {/* Meta info with hover effects */}
                <div className="flex flex-wrap gap-6 text-gray-400 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2 transition-colors duration-200 hover:text-gray-300">
                    <FaMapMarkerAlt className="w-4 h-4 text-rose-400/60" />
                    {activeExp.location}
                  </span>
                  <span className="flex items-center gap-2 transition-colors duration-200 hover:text-gray-300">
                    <FaCalendarAlt className="w-4 h-4 text-rose-400/60" />
                    {activeExp.startDate} — {activeExp.endDate}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-lg">
                  {activeExp.description}
                </p>
              </div>

              {/* Navigation dots with smooth transitions */}
              <div className="pt-6 flex items-center gap-4">
                <div className="flex gap-2">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleCardChange(index)}
                      className={`h-2 rounded-full transition-all duration-500 ease-out ${
                        activeIndex === index 
                          ? "bg-rose-500 w-8 shadow-md shadow-rose-500/40" 
                          : "bg-gray-600 w-2 hover:bg-gray-500 hover:w-3"
                      }`}
                      aria-label={`View experience ${index + 1}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-auto">
                  {activeIndex + 1} of {experiences.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
