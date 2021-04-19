import React from "react";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Landing from "../components/Landing";


function Main() {
  return (
    <div>
      <Navbar />
      <Landing/>
      <Projects/>
      <Skills/>
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
