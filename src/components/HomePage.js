import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}

export default HomePage;
