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
      className="min-h-screen py-24 px-4 scroll-mt-16 relative"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl" />
      
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
