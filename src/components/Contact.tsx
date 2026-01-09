"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaPaperPlane, FaEnvelope, FaFileAlt, FaTimes } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import ParticleBackground from "./ui/ParticleBackground";
import { socialLinks, email } from "@/data/social";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [showResumeToast, setShowResumeToast] = useState(false);

  // Listen for resume toast event from Hero
  useEffect(() => {
    const handleResumeToast = () => {
      setShowResumeToast(true);
    };

    window.addEventListener("showResumeToast", handleResumeToast);
    return () => window.removeEventListener("showResumeToast", handleResumeToast);
  }, []);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <FaGithub className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-4 scroll-mt-16 relative overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground particleCount={80} speed={0.15} maxDistance={180} />

      {/* Background accents - animated */}
      <div 
        className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[70px] animate-blob-reverse animation-delay-2000"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, rgba(139,92,246,0.18) 35%, rgba(59,130,246,0.1) 70%, transparent 100%)'
        }}
      />
      <div 
        className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full blur-[60px] animate-blob-pulse animation-delay-4000"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.22) 0%, rgba(34,197,94,0.16) 40%, rgba(168,85,247,0.1) 75%, transparent 100%)'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-400 text-center text-sm">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-400 text-center text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Get in Touch Sidebar */}
          <div className="flex flex-col justify-center lg:pl-8">
            {/* Resume Toast - positioned above Get in Touch */}
            <div
              className={`transition-all duration-500 mb-4 ${
                showResumeToast
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none h-0 mb-0"
              }`}
            >
              <div className="flex items-center gap-3 px-5 py-4 bg-rose-500/10 border border-rose-500/30 rounded-xl">
                <FaFileAlt className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <p className="text-gray-200 text-sm flex-1">
                  Interested in my resume? Leave a note below!
                </p>
                <button
                  onClick={() => setShowResumeToast(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of an amazing team. Feel free to reach
              out to me using the form, or through my social media channels.
            </p>
            <p className="text-gray-400 mb-8 text-lg">
              Let&apos;s create something awesome together!
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-rose-400 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all"
                >
                  {getSocialIcon(link.icon)}
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-gray-400">
              <div className="p-3 rounded-xl bg-rose-500/10">
                <FaEnvelope className="w-5 h-5 text-rose-400" />
              </div>
              <span className="text-lg">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
