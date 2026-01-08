"use client";

import Image from "next/image";
import { FaAward, FaCertificate, FaUsers, FaBook } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { education } from "@/data/education";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 px-4 scroll-mt-16 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-rose-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="About" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-rose-500/30 flex-shrink-0 glow">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Sagar Sahu"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Sagar Sahu</h3>
                <p className="text-rose-400 font-medium">Software Developer & AI Enthusiast</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m an undergraduate student at Rensselaer Polytechnic Institute
              pursuing a B.S. in Computer Science with a concentration in AI and
              Data. My passion lies in building impactful solutions at the
              intersection of machine learning, software engineering, and fintech.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether it&apos;s developing neural networks for research, building
              full-stack applications, or analyzing financial data, I strive to
              create elegant, maintainable solutions that deliver real-world value.
              I&apos;m always eager to learn new technologies and collaborate on
              challenging projects.
            </p>

            {/* Coursework Pills */}
            <div>
              <div className="flex items-center gap-2 text-gray-300 mb-4">
                <FaBook className="w-4 h-4 text-rose-400" />
                <span className="font-semibold">Relevant Coursework</span>
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
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 flex-shrink-0 bg-white/10 rounded-xl p-2">
                <Image
                  src={education.logo}
                  alt={education.school}
                  fill
                  className="object-contain filter invert"
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
                <span className="px-4 py-2 text-sm rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                  {education.concentration}
                </span>
                <span className="px-4 py-2 text-sm rounded-xl bg-white/5 border border-white/10 text-gray-300">
                  Minor: {education.minor}
                </span>
              </div>

              {/* Honors */}
              <div>
                <div className="flex items-center gap-2 text-gray-300 mb-3">
                  <FaAward className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold">Honors & Awards</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-2">
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
                <div className="flex items-center gap-2 text-gray-300 mb-3">
                  <FaUsers className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold">Extracurriculars</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-2">
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
      </div>
    </section>
  );
}
