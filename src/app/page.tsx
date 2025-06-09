import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#252529] text-white relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-center py-6 absolute top-0 left-0 z-10">
        <ul className="flex gap-8 sm:gap-12 md:gap-16 text-xl sm:text-2xl font-semibold">
          <li><a href="#home" className="hover:text-purple-300 transition">home</a></li>
          <li><a href="#education" className="hover:text-purple-300 transition">education</a></li>
          <li><a href="#experience" className="hover:text-purple-300 transition">experience</a></li>
          <li><a href="#projects" className="hover:text-purple-300 transition">projects</a></li>
          <li><a href="#contact" className="hover:text-purple-300 transition">contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center w-full pt-32 px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-purple-700 drop-shadow-[0_2px_32px_rgba(168,140,255,0.8)] leading-tight pb-2 overflow-visible">hello, i'm sagar</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 text-center max-w-2xl">
          welcome to my personal portfolio website!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
          <a href="#projects" className="border-2 border-purple-600 hover:bg-purple-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg text-center transition">view my work</a>
          <a href="#contact" className="border-2 border-purple-600 hover:bg-purple-400 hover:text-white text-purple-200 font-semibold py-3 px-8 rounded-lg text-lg text-center transition">contact me</a>
        </div>
      </main>
    </div>
  );
}
