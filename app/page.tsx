import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <div id='Home' className="bg-black font-work mx-auto max-w-2xl overflow-hidden lg:max-w-7xl md:px-6 no-scrollbar">
        <Hero />
        <About />
        <Skills />
        <Work />
      </div>
      <Projects />
      <div className="relative z-100">
          <Contact />
      <div className="absolute left-0 top-[95%] bg-purple-500 w-full h-[170px] -z-10 md:h-[180px]">
          <Footer />
          </div>
      </div>
    </>
  );
}
