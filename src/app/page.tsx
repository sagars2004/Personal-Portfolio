import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1d]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Leadership />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
