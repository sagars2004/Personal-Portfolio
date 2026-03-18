"use client";

import { FaGithub, FaExternalLinkAlt, FaStar, FaGlobe, FaApple, FaShieldAlt } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import ParticleBackground from "./ui/ParticleBackground";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 scroll-mt-1 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground starCount={60} speed={0.1} />

      {/* Background accents - animated */}
      <div
        className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full blur-[18px] animate-blob-drift animation-delay-3000"
        style={{
          background: 'radial-gradient(circle, rgba(34,197,94,0.65) 0%, rgba(6,182,212,0.45) 30%, rgba(59,130,246,0.18) 55%, transparent 70%)'
        }}
      />
      <div
        className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full blur-[16px] animate-blob animation-delay-1000"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.7) 0%, rgba(236,72,153,0.5) 30%, rgba(244,63,94,0.18) 55%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading title="My Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            let LinkIcon = FaGithub;
            let linkText = "View GitHub";

            if (project.id === "finsh") {
              LinkIcon = FaApple;
              linkText = "Download Finsh on the App Store today!";
            } else if (project.id === "rentpad") {
              LinkIcon = FaGlobe;
              linkText = "View Website";
            } else if (project.id === "do-hackathon") {
              LinkIcon = FaGlobe;
              linkText = "View DigitalOcean AI Hackathon Demo";
            } else if (project.id === "ibm-hackathon") {
              LinkIcon = FaGlobe;
              linkText = "View IBM 2026 AI Hackathon Pitch";
            }

            return (
              <div
                key={project.id}
                className={`card p-6 group flex flex-col min-h-[250px] relative ${project.featured
                  ? "md:col-span-2 lg:col-span-3 border border-purple-600/60 shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_-5px_rgba(168,85,247,0.7)] transition-all duration-300"
                  : ""
                  }`}
              >
                {project.featured && (
                  <div className="absolute -top-3 -left-3 z-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg uppercase tracking-wider">
                    <FaStar className="w-3 h-3" />
                    Featured
                  </div>
                )}
                {project.featured ? (
                  <div className="flex flex-col lg:flex-row gap-8 h-full">
                    {/* Left Column: Text */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-rose-400/80 text-lg font-medium mb-4">
                        {project.tagline}
                      </p>
                      <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-rose-400 transition-colors"
                          >
                            <LinkIcon className="w-5 h-5" />
                            <span>{linkText}</span>
                            <FaExternalLinkAlt className="w-3 h-3 ml-1" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-rose-400 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            <span>Live</span>
                            <FaExternalLinkAlt className="w-3 h-3 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 flex items-center justify-center min-h-[300px] lg:min-h-auto transition-colors">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} Preview`}
                          className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full text-gray-500 bg-white/5 rounded-xl border border-white/10">
                          <span>Project Preview</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-rose-400/80 text-sm font-medium mb-4">
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
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-rose-400 transition-colors"
                        >
                          <LinkIcon className="w-5 h-5" />
                          <span>{linkText}</span>
                          <FaExternalLinkAlt className="w-3 h-3 ml-1" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-rose-400 transition-colors"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          <span>Live</span>
                          <FaExternalLinkAlt className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
