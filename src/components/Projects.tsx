"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import ParticleBackground from "./ui/ParticleBackground";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 scroll-mt-1 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground particleCount={90} speed={0.18} maxDistance={180} />

      {/* Background accents - animated */}
      <div 
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[50px] animate-blob-drift animation-delay-3000"
        style={{
          background: 'radial-gradient(circle, rgba(34,197,94,0.5) 0%, rgba(6,182,212,0.35) 35%, rgba(59,130,246,0.2) 70%, transparent 100%)'
        }}
      />
      <div 
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full blur-[45px] animate-blob animation-delay-1000"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.55) 0%, rgba(236,72,153,0.4) 40%, rgba(244,63,94,0.2) 75%, transparent 100%)'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading title="My Projects" />

        {/* 5 Project Cards - Evenly Spaced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card p-6 group flex flex-col min-h-[500px]"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="text-rose-400/80 text-xs font-medium mb-4">
                {project.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-rose-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Live</span>
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
