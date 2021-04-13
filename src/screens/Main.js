import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Landing from "../components/Landing";


function Main() {
  return (
    <div>
      <Navbar />
      <Landing/>
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
