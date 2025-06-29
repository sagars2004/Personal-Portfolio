"use client";
import React from "react";

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#252529] text-white">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-center py-6 fixed top-0 left-0 z-30 backdrop-blur-md bg-[#252529cc] border-b border-purple-700/40 transition-all duration-300">
        <ul className="flex gap-8 sm:gap-12 md:gap-16 text-xl sm:text-2xl font-semibold">
          <li><a href="/" className="hover:text-purple-500 transition">home</a></li>
          <li><a href="/education" className="hover:text-purple-500 transition">education</a></li>
          <li><a href="/experience" className="text-purple-500 transition">experience</a></li>
          <li><a href="/projects" className="hover:text-purple-500 transition">projects</a></li>
          <li><a href="/contact" className="hover:text-purple-500 transition">contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full pt-32 px-4">
        <div className="w-full flex justify-center">
          <div className="bg-[#23232a] hover:bg-[#32323a] rounded-2xl shadow-lg p-8 max-w-5xl w-full flex flex-col items-center border border-[#32323a] hover:-translate-y-1.5 transition-all duration-300">
            <h2 className="text-[1.8rem] sm:text-4xl font-extrabold text-white flex items-center gap-3 mb-2">
              experience
            </h2>
            <div className="w-16 h-1 bg-purple-600 rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 text-center">
              Experience content coming soon...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 