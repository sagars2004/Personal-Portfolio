"use client";

import Image from "next/image";
import { FaAward, FaCertificate, FaUsers, FaBook, FaCode } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import TechIcon from "./ui/TechIcon";
import ParticleBackground from "./ui/ParticleBackground";
import { education } from "@/data/education";
import { technologies } from "@/data/technologies";

export default function About() {
  const languages = technologies.filter((t) => t.category === "language");
  const libraries = technologies.filter((t) => t.category === "library");
  const tools = technologies.filter((t) => t.category === "tool");

  return (
    <section id="about" className="py-24 px-4 scroll-mt-1 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground starCount={70} speed={0.1} />

      {/* Background accents - animated */}
      <div 
        className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full blur-[18px] animate-blob-drift"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.7) 0%, rgba(59,130,246,0.5) 30%, rgba(6,182,212,0.2) 55%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-[20%] left-[35%] w-[350px] h-[350px] rounded-full blur-[16px] animate-blob-reverse animation-delay-3000"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.7) 0%, rgba(168,85,247,0.5) 30%, rgba(59,130,246,0.18) 55%, transparent 70%)'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="group relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-rose-500/30 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:border-rose-500 hover:shadow-lg hover:shadow-rose-500/30">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Sagar Sahu"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-5xl font-bold text-white mb-2">Sagar Sahu</h3>
                <p className="text-rose-400 font-medium">Software Developer & AI Enthusiast</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m a recent college graduate eager to build cool stuff. My expertise spans end-to-end development, including frontend engineering, backend systems, and database design. I pair strong software fundamentals with modern, cloud-native and AI-driven practices to build scalable, efficient applications using current cloud platforms, machine learning frameworks, and data engineering stacks.
            </p>

            {/* Coursework Pills */}
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-4">
                <FaBook className="w-4 h-4 text-rose-400" />
                <span className="font-semibold">Relevant Knowledge</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.slice(0, 8).map((course, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-rose-500/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
                {education.coursework.length > 8 && (
                  <span className="px-3 py-1 text-sm rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400">
                    +{education.coursework.length - 8} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="card p-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-14 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src={education.logo}
                  alt={education.school}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-rose-400">
                  {education.degree}
                </h3>
                <p className="text-gray-300 text-sm">{education.school}</p>
                <p className="text-gray-500 text-sm">
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Concentration & Minor */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 text-sm rounded-xl bg-white/5 border border-rose-500/30 text-gray-300">
                  {education.concentration}
                </span>
                <span className="px-3 py-1.5 text-sm rounded-xl bg-white/5 border border border-rose-500/30 text-gray-300">
                  Minor: {education.minor}
                </span>
              </div>

              {/* Honors */}
              <div>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <FaAward className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold text-sm">Honors & Awards</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {education.honors.map((honor, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      {honor}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extracurriculars */}
              <div>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <FaUsers className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold text-sm">Extracurriculars</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {education.extracurriculars.map((activity, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 text-gray-300 mb-3">
                  <FaCertificate className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold">Certifications</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-2">
                  {education.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <FaCode className="w-6 h-6 text-rose-400" />
            <h3 className="text-2xl font-bold text-white">Technologies</h3>
          </div>

          <div className="space-y-10">
            {/* Languages */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Languages
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {languages.map((tech) => (
                  <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
                ))}
              </div>
            </div>

            {/* Libraries & Frameworks */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Libraries & Frameworks
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {libraries.map((tech) => (
                  <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Tools & Platforms
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {tools.map((tech) => (
                  <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
