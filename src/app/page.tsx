import About from "./components/About";
import Hero from "./components/hero";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Skills/>
      <Project/>
      <Contact/>
    </>
  );
}

