import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

function Main() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      {/* 
            //navbar
            //landing
            //about me
            //projects
            //skills
            //education
            //contact
            */}
    </div>
  );
}

export default Main;
