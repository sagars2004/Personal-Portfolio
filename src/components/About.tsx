"use client";

import Image from "next/image";
import { FaGraduationCap, FaAward, FaCertificate, FaUsers } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { education } from "@/data/education";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-rose-500/30 flex-shrink-0">
                <Image
                  src="/profile_pic.jpeg"
                  alt="Sagar Sahu"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Sagar Sahu</h3>
                <p className="text-rose-400">Software Developer & AI Enthusiast</p>
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
          </div>

          {/* Education Card */}
          <div className="card p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={education.logo}
                  alt={education.school}
                  fill
                  className="object-contain filter invert brightness-0 grayscale"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-rose-400">
                  {education.degree}
                </h3>
                <p className="text-gray-300 text-sm">{education.school}</p>
                <p className="text-gray-400 text-sm">
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Concentration & Minor */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400">
                  {education.concentration}
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
                  Minor: {education.minor}
                </span>
              </div>

              {/* Honors */}
              <div>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <FaAward className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold">Honors</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-1 pl-6">
                  {education.honors.map((honor, index) => (
                    <li key={index} className="list-disc">
                      {honor}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extracurriculars */}
              <div>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <FaUsers className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold">Extracurriculars</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-1 pl-6">
                  {education.extracurriculars.map((activity, index) => (
                    <li key={index} className="list-disc">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <FaCertificate className="w-4 h-4 text-rose-400" />
                  <span className="font-semibold">Certifications</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-1 pl-6">
                  {education.certifications.map((cert, index) => (
                    <li key={index} className="list-disc">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="mt-12">
          <div className="flex items-center gap-2 text-gray-300 mb-4">
            <FaGraduationCap className="w-5 h-5 text-rose-400" />
            <span className="font-semibold text-lg">Relevant Coursework</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-lg bg-[#23232a] border border-white/10 text-gray-300 hover:border-rose-500/30 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
