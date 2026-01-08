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
      className="py-20 px-4 scroll-mt-16 bg-[#1a1a1d]/50"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Technologies" />

        <div className="space-y-12">
          {/* Languages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4 text-center">
              Languages
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {languages.map((tech) => (
                <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Libraries & Frameworks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4 text-center">
              Libraries & Frameworks
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {libraries.map((tech) => (
                <TechIcon key={tech.name} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4 text-center">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
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
