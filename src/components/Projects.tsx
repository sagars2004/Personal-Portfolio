"use client";

import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="min-h-screen py-24 px-4 scroll-mt-16 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-rose-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="Projects" />

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="card p-8 group"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
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
            <h3 className="text-lg font-semibold text-gray-300 mb-6">
              Other Notable Projects
            </h3>
            <div className="space-y-3">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:border-rose-500/30 hover:bg-white/[0.07] transition-all"
                >
                  <div className="flex items-center gap-4">
                    <FaArrowRight className="w-4 h-4 text-rose-400 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <span className="text-white font-medium group-hover:text-rose-400 transition-colors">
                        {project.title}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{project.description.slice(0, 80)}...</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-rose-400 transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
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
