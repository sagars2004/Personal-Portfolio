"use client";

import { FaBriefcase, FaFlask, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 scroll-mt-16 bg-[#1a1a1d]/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-500/30 transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-rose-500 border-4 border-[#1a1a1d] transform -translate-x-1/2 md:-translate-x-1/2 z-10" />

                {/* Card */}
                <div
                  className={`flex-1 ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="card p-6 hover:border-rose-500/30">
                    {/* Type Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      {exp.type === "work" ? (
                        <FaBriefcase className="w-4 h-4 text-rose-400" />
                      ) : (
                        <FaFlask className="w-4 h-4 text-rose-400" />
                      )}
                      <span className="text-xs uppercase tracking-wider text-rose-400 font-semibold">
                        {exp.type === "work" ? "Work" : "Research"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <p className="text-rose-400 font-medium mb-2">{exp.company}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="w-3 h-3" />
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
