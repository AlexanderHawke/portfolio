import Hero from './components/Hero.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}