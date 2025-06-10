"use client";
import React, { useState, useEffect } from "react";

// TypingEffect component
function TypingEffect({ text, className }: { text: string; className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    if (!text) return;
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 60);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className={className}>
      {text.slice(0, index)}
      <span className="animate-pulse inline-block w-2 align-baseline ml-1">|</span>
    </h1>
  );
}

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
      <main className="flex flex-col items-center w-full pt-32 px-4 -mt-[30px]">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between justify-center w-full max-w-5xl px-0 gap-4 mb-8">
          <a href="#experience" className="border-2 border-purple-600 hover:bg-purple-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg text-center transition order-1 sm:order-none">view my work</a>
          <div className="flex-1 flex flex-col items-center">
            <TypingEffect text="hi, i'm sagar sahu" className="text-5xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-purple-700 drop-shadow-[0_2px_32px_rgba(168,140,255,0.8)] leading-tight pb-2 overflow-visible" />
            <p className="text-xl sm:text-2xl text-gray-300 text-center max-w-2xl">
              welcome to my personal portfolio website!
            </p>
          </div>
          <a href="#contact" className="border-2 border-purple-600 hover:bg-purple-400 hover:text-white text-purple-200 font-semibold py-3 px-8 rounded-lg text-lg text-center transition order-2 sm:order-none">contact me</a>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-[90rem] mt-7 justify-center items-stretch">
          {/* Left Box: Profile */}
          <div className="bg-[#32323a] rounded-xl p-8 flex flex-col items-center shadow-md min-h-[320px] border-2 border-[#3a3a42] sm:mr-0 min-w-[20rem] max-w-[22rem] w-full">
            <div className="w-36 h-36 rounded-full bg-gray-500 mb-6 overflow-hidden flex items-center justify-center border-2 border-[#4b4b55]">
              <img src="/profile_pic.jpg" alt="Sagar Sahu" className="object-cover w-full h-full" />
            </div>
            <p className="text-lg text-gray-200 text-center font-extrabold">hi, i'm an undergraduate student and software developer passionate about building impactful solutions using a variety of technologies! feel free to explore my work and get in touch if you'd like to collaborate. thanks for visitng!</p>
            <div className="flex gap-4 mt-8 w-full justify-center">
              <a href="https://www.linkedin.com/in/sagar-sahu-398493223/" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-purple-500 text-white rounded-full p-3 transition flex items-center justify-center" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
                </svg>
              </a>
              <a href="https://github.com/sagars2004" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-purple-500 text-white rounded-full p-3 transition flex items-center justify-center" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Right Box: Skills */}
          <div className="flex-grow bg-[#32323a] rounded-[0.9rem] p-[1.8rem] shadow-md min-h-[289px] border-2 border-[#3a3a42] flex flex-col justify-center min-w-[40rem] max-w-[44rem]">
            <h2 className="text-[1.8rem] font-bold text-white mb-[1.08rem] text-center flex items-center justify-center gap-[0.9rem]">
              technical skills
            </h2>
            <div className="flex flex-col gap-[1.08rem]">
              {/* Programming Languages & Technical Skills */}
              <div>
                <h3 className="text-[1.08rem] font-semibold text-white mb-[0.9rem] text-center">programming languages (frontend, backend, devops)</h3>
                <div className="flex flex-wrap gap-[0.9rem] justify-center">
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Java</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">JavaScript</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Python</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">C</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">C++</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">HTML</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">CSS</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">PostgreSQL</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">TypeScript</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Bash</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">R</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">UML</span>
                </div>
              </div>
              <div className="h-2"></div>
              {/* Libraries & Data Science Tools */}
              <div>
                <h3 className="text-[1.08rem] font-semibold text-white mb-[0.9rem] text-center">libraries (machine learning, data science)</h3>
                <div className="flex flex-wrap gap-[0.9rem] justify-center">
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">PyTorch</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">TensorFlow</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Pandas</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">NumPy</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Scikit-Learn</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Matplotlib</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">JUnit</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Anaconda</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">JupyterLab</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Kaggle</span>
                </div>
              </div>
              <div className="h-2"></div>
              {/* Tools & Frameworks */}
              <div>
                <h3 className="text-[1.08rem] font-semibold text-white mb-[0.9rem] text-center">tools & frameworks (web development, data engineering, full-stack)</h3>
                <div className="flex flex-wrap gap-[0.9rem] justify-center">
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">MongoDB</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Express.js</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">React.js</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Node.js</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Next.js</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Git</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Jira</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Postman</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Unix</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Linux</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">Looker</span>
                  <span className="px-[3.6px] py-[0.9px] rounded-full border border-purple-600 text-white text-[0.9rem]">BigQuery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <section className="w-full flex justify-center mt-20">
          <div id="education-card" className="bg-[#23232a] rounded-2xl shadow-lg p-8 max-w-5xl w-full flex flex-col items-center border border-[#32323a] scroll-mt-24">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3 mb-2">
              education
            </h2>
            <div className="w-16 h-1 bg-purple-600 rounded-full mb-6"></div>
            <img src="/RPI_logo.png" alt="Education" className="rounded-xl w-0.8 h-32 object-cover mb-4 filter invert brightness-20 grayscale" />
            <div className="w-full flex flex-col items-center space-y-4 text-center">
              <h3 className="text-4xl font-bold text-purple-400 mb-2 leading-tight">bachelor of science (b.s.) in computer science</h3>
              <p className="text-3xl text-purple-300 mb-2 leading-tight">concentration: artificial intelligence and data, minor: economics of banking & finance</p>
              <p className="text-2xl text-gray-200 mb-2">rensselaer polytechnic institute- school of science (troy, ny)</p>
              <p className="text-2xl text-gray-400 mb-1">sep 2022 - may 2026</p>
              <ul className="text-xl text-gray-300 mb-2 list-disc list-inside">
                <li>relevant coursework: intro to ai, software design & documentation, database systems, principles of software, data structures, algorithms, programming languages, operating systems, computer organization, foundations of cs, money and banking, microeconomic theory, differential equations, multivariable calculus and matrix algebra</li> 
              </ul>
              <ul className="text-xl text-gray-300 mb-2 list-disc list-inside">
                <li>extracurriculars: rensselaer center for open source, google developer groups on campus, tau epsilon phi</li>
              </ul>
              <ul className="text-xl text-gray-300 mb-2 list-disc list-inside">
                <li>honors and distinctions: dean's honor list (s24, f24, s25), rpi leadership and recognition award</li>
              </ul>
              <ul className="text-xl text-gray-300 mb-2 list-disc list-inside">
                <li>certifications: google cloud data analytics certificate, j.p. morgan chase software engineering job experience, walmart global tech swe experience</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
