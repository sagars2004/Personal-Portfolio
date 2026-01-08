"use client";

import SectionHeading from "./ui/SectionHeading";
import TechIcon from "./ui/TechIcon";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  const languages = technologies.filter((t) => t.category === "language");
  const libraries = technologies.filter((t) => t.category === "library");
  const tools = technologies.filter((t) => t.category === "tool");

  return (
    <section
      id="technologies"
      className="min-h-screen py-24 px-4 scroll-mt-16 relative overflow-hidden"
    >
      {/* Background accents - animated */}
      <div className="absolute top-[30%] left-[20%] w-[450px] h-[450px] bg-rose-500/10 rounded-full blur-[90px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px] animate-blob-reverse animation-delay-4000" />
      <div className="absolute top-[10%] right-[30%] w-[300px] h-[300px] bg-red-500/8 rounded-full blur-[60px] animate-blob-pulse animation-delay-1000" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="Technologies" />

        <div className="space-y-16">
          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-6 text-center">
              Languages
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
              {languages.map((tech) => (
                <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Libraries & Frameworks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-6 text-center">
              Libraries & Frameworks
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
              {libraries.map((tech) => (
                <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-6 text-center">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
              {tools.map((tech) => (
                <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
