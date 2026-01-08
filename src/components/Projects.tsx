"use client";

import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" />

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="card p-6 hover:border-rose-500/30 group"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded bg-rose-500/10 text-rose-400 border border-rose-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects List */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
              Other Projects
            </h3>
            <div className="space-y-3">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group flex items-center justify-between p-4 rounded-lg bg-[#23232a] border border-white/10 hover:border-rose-500/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <FaArrowRight className="w-3 h-3 text-rose-400 group-hover:translate-x-1 transition-transform" />
                    <span className="text-white group-hover:text-rose-400 transition-colors">
                      {project.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-rose-400 transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
