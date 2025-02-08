
"use client";
import React, { useState } from 'react';
import ImageCard from './ui/ImageCard';
import ProjectGalleryModal from './ProjectGalleryModal';

const projects = [
  { imageSrc: '/images/qubaa-school.png', text: 'Qubaa school/ Mombasa' },
  { imageSrc: '/images/tartan-flooring.png', text: 'Tartan rubber flooring' },
  { imageSrc: '/images/qubaa-school.png', text: 'Qubaa school/ Mombasa' },
];

// Add all your gallery images here
const galleryImages = [
  '/images/qubaa-school.png',
  '/images/tartan-flooring.png',
  '/images/qubaa-school.png',
  '/Gallery/image1.png',
  '/Gallery/image2.png',
  '/Gallery/image3.png',
  '/Gallery/image4.png',
  '/Gallery/image5.png',
  '/Gallery/image6.png',
  '/Gallery/image7.png',
  '/Gallery/image8.png',
  '/Gallery/image9.png',
  '/Gallery/image10.png',
  '/Gallery/image11.png',
  '/Gallery/image12.png',
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center bg-[#FFFFF6] py-16 px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-12 text-center">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ImageCard key={index} imageSrc={project.imageSrc} text={project.text} />
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-10 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all flex items-center gap-2 mx-auto"
      >
        All Projects ↗
      </button>

      <ProjectGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={galleryImages}
      />
    </section>
  );
};

export default Projects;