import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Brand from "../components/brand";
import Services from "../components/Services";
import ProjectsSection from "../components/projects";

export default function Page() {
  return <div>
    <Navbar />
    <Hero />
    <About />
    <Brand />
    <Services />
    <ProjectsSection />

   
  </div>;
}