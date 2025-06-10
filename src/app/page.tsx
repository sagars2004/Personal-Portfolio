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
          <a href="#projects" className="border-2 border-purple-600 hover:bg-purple-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg text-center transition order-1 sm:order-none">view my work</a>
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
            <p className="text-xl text-gray-200 text-center font-extrabold">hi, i'm an undergraduate student and software developer passionate about building impactful solutions using a variety of technologies! feel free to explore my work and get in touch if you'd like to collaborate. thanks for visiting!</p>
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
        <section id="education" className="w-full flex justify-center mt-16 scroll-mt-24">
          <div className="bg-[#23232a] rounded-2xl shadow-lg p-8 max-w-5xl w-full flex flex-col items-center border border-[#32323a]">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3 mb-2">
              education
            </h2>
            <div className="w-16 h-1 bg-purple-600 rounded-full mb-6"></div>
            <img src="/RPI_logo.png" alt="Education" className="rounded-xl w-0.8 h-40 object-cover mb-6 filter invert brightness-20 grayscale" />
            <div className="w-full flex flex-col items-start">
              <h3 className="text-2xl font-bold text-purple-400 mb-2 leading-tight">bachelor of science (B.S.) in computer science</h3>
              <p className="text-lg text-purple-300 mb-2 leading-tight">concentration: artificial intelligence and data, minor: economics of banking & finance</p>
              <p className="text-xl text-gray-400 mb-1">sep 2022 - may 2026</p>
              <p className="text-xl text-gray-200 mb-2">rensselaer polytechnic institute- school of science (troy, ny)</p>
              <ul className="text-lg text-gray-300 mb-2 list-disc list-inside">
                <li>Relevant Coursework: Intro to AI, Software Design & Documentation, Database Systems, Principles of Software, Data Structures, Algorithms, Programming Languages, Operating Systems, Computer Organization, Foundations of CS, Money and Banking, Microeconomic Theory, Differential Equations, Multivariable Calculus and Matrix Algebra</li>
              </ul>
              <ul className="text-lg text-gray-300 mb-2 list-disc list-inside">
                <li>Extracurriculars: Rensselaer Center for Open Source, Google Developer Groups on Campus, Tau Epsilon Phi</li>
              </ul>
              <ul className="text-lg text-gray-300 mb-2 list-disc list-inside">
                <li>Honors and Distinctions: Dean's Honor List (S24, F24, S25), RPI Leadership and Recognition Award</li>
              </ul>
              <ul className="text-lg text-gray-300 mb-2 list-disc list-inside">
                <li>Certifications: Google Cloud Data Analytics Certificate, J.P. Morgan Chase Software Engineering Job Experience, Walmart Global Tech SWE Experience</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
