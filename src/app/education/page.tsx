"use client";
import React from "react";

export default function Education() {
  return (
    <div className="min-h-screen bg-[#252529] text-white">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-center py-6 fixed top-0 left-0 z-30 backdrop-blur-md bg-[#252529cc] border-b border-purple-700/40 transition-all duration-300">
        <ul className="flex gap-8 sm:gap-12 md:gap-16 text-xl sm:text-2xl font-semibold">
          <li><a href="/" className="hover:text-purple-500 transition">home</a></li>
          <li><a href="/education" className="text-purple-500 transition">education</a></li>
          <li><a href="/experience" className="hover:text-purple-500 transition">experience</a></li>
          <li><a href="/projects" className="hover:text-purple-500 transition">projects</a></li>
          <li><a href="/contact" className="hover:text-purple-500 transition">contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full pt-32 px-4">
        {/* Education Section */}
        <section className="w-full flex justify-center">
          <div className="bg-[#23232a] hover:bg-[#32323a] rounded-2xl shadow-lg p-8 max-w-5xl w-full flex flex-col items-center border border-[#32323a] hover:-translate-y-1.5 transition-all duration-300">
            <h2 className="text-[1.8rem] sm:text-4xl font-extrabold text-white flex items-center gap-3 mb-2">
              education
            </h2>
            <div className="w-16 h-1 bg-purple-600 rounded-full mb-6"></div>
            <img src="/RPI_logo.png" alt="Education" className="rounded-xl w-0.8 h-20 object-cover mb-4 filter invert brightness-20 grayscale" />
            <div className="w-full flex flex-col items-center space-y-6 text-center">
              <h3 className="text-4xl font-bold text-purple-400 mb-2 leading-tight">bachelor of science (b.s.) in computer science</h3>
              <p className="text-2xl text-purple-300 mb-2 leading-tight">concentration: artificial intelligence and data, minor: economics of banking & finance</p>
              <p className="text-2xl text-gray-200 mb-2">rensselaer polytechnic institute- school of science (troy, ny)</p>
              <p className="text-2xl text-gray-400 mb-1">sep 2022 - may 2026</p>
              <ul className="text-xl text-gray-300 mb-4 list-disc list-inside space-y-2">
                <li>relevant coursework: intro to ai, software design & documentation, database systems, principles of software, data structures, algorithms, programming languages, operating systems, computer organization, foundations of cs, money and banking, microeconomic theory, differential equations, multivariable calculus and matrix algebra</li> 
              </ul>
              <ul className="text-xl text-gray-300 mb-4 list-disc list-inside space-y-2">
                <li>extracurriculars: rensselaer center for open source, google developer groups on campus, tau epsilon phi</li>
              </ul>
              <ul className="text-xl text-gray-300 mb-4 list-disc list-inside space-y-2">
                <li>honors and distinctions: dean's honor list (s24, f24, s25), rpi leadership and recognition award</li>
              </ul>
              <ul className="text-xl text-gray-300 mb-4 list-disc list-inside space-y-2">
                <li>certifications: google cloud data analytics certificate, j.p. morgan chase software engineering job experience, walmart global tech swe experience</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 