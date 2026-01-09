"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import ParticleBackground from "./ui/ParticleBackground";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="min-h-screen py-24 px-4 scroll-mt-16 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground particleCount={90} speed={0.18} maxDistance={180} />

      {/* Background accents - animated */}
      <div 
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[70px] animate-blob-drift animation-delay-3000"
        style={{
          background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(6,182,212,0.15) 35%, rgba(59,130,246,0.1) 70%, transparent 100%)'
        }}
      />
      <div 
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full blur-[60px] animate-blob animation-delay-1000"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(236,72,153,0.18) 40%, rgba(244,63,94,0.1) 75%, transparent 100%)'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="Notable Projects" />

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
      </div>
    </section>
  );
}
