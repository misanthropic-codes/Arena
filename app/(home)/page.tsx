import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Brand from "../components/brand";
import Services from "../components/Services";
import ProjectsSection from "../components/projects";
import ContactForm from "../components/Contacts";

export default function Page() {
  return <div>
    <Navbar />
    <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="brands">
          <Brand />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
   
  </div>;
}