"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBriefcase, FaFlask, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = experiences[activeIndex];

  return (
    <section id="experience" className="min-h-screen py-24 px-4 scroll-mt-16 relative overflow-hidden">
      {/* Background accents - animated */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[80px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[70px] animate-blob-pulse animation-delay-4000" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="My Experience" />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Stacked role cards */}
          <div className="lg:w-[380px] flex-shrink-0 space-y-3">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full group flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all ${
                  activeIndex === index
                    ? "bg-rose-500/15 border-l-4 border-rose-500"
                    : "bg-white/5 border-l-4 border-transparent hover:bg-white/10 hover:border-gray-600"
                }`}
              >
                {/* Company Logo or Fallback Icon */}
                <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden ${
                  activeIndex === index 
                    ? "bg-white/10" 
                    : "bg-white/5"
                }`}>
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  ) : exp.type === "work" ? (
                    <FaBriefcase className={`w-5 h-5 ${activeIndex === index ? "text-rose-400" : "text-gray-400"}`} />
                  ) : (
                    <FaFlask className={`w-5 h-5 ${activeIndex === index ? "text-rose-400" : "text-gray-400"}`} />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`font-semibold text-sm ${activeIndex === index ? "text-rose-400" : "text-white"}`}>
                    {exp.company}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{exp.title}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right side - Expanded view */}
          <div className="flex-1 card p-8 lg:p-10">
            {/* Header with logo */}
            <div className="flex items-start gap-4 mb-6">
              {/* Large logo */}
              {activeExp.logo && (
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                    src={activeExp.logo}
                    alt={`${activeExp.company} logo`}
                    width={70}
                    height={70}
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                {/* Type badge */}
                <span className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-2 ${
                  activeExp.type === "work" 
                    ? "bg-rose-500/10 text-rose-400 border border-rose-500/30" 
                    : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                }`}>
                  {activeExp.type === "work" ? "Work Experience" : "Research"}
                </span>
                {/* Title & Company */}
                <h3 className="text-2xl font-bold text-white">{activeExp.title}</h3>
                <p className="text-rose-400 font-semibold text-lg">{activeExp.company}</p>
              </div>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-6 text-gray-400 mb-8 pb-8 border-b border-white/10">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-rose-400/60" />
                {activeExp.location}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4 text-rose-400/60" />
                {activeExp.startDate} — {activeExp.endDate}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed text-lg">
              {activeExp.description}
            </p>

            {/* Navigation dots */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4">
              <div className="flex gap-2">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? "bg-rose-500 w-8" 
                        : "bg-gray-600 w-2 hover:bg-gray-500"
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
    </section>
  );
}
