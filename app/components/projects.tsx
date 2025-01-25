// ProjectsSection.tsx (or wherever you're using the component)
import React from 'react';
import ImageCard from './ui/ImageCard'; // Make sure the import path is correct

const projects = [
  { imageSrc: '/images/qubaa-school.png', text: 'Qubaa school/ Mombasa' },
  { imageSrc: '/images/tartan-flooring.png', text: 'Tartan rubber flooring' },
  { imageSrc: '/images/qubaa-school.png', text: 'Qubaa school/ Mombasa' },
  { imageSrc: '/images/jamhuri-arena.png', text: 'Jamhuri Arena' },
  { imageSrc: '/images/padel-tennis.png', text: 'Padel tennis court' },
  { imageSrc: '/images/fifa-field.png', text: 'FIFA side Field' },
  { imageSrc: '/images/indoor-sports.png', text: 'Indoor sports complex' },
  { imageSrc: '/images/wall-grass.png', text: 'Wall grass fencing' },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#FFFFF6] py-16 px-8">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-12 text-center">
        Projects
      </h2>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ImageCard key={index} imageSrc={project.imageSrc} text={project.text} />
        ))}
      </div>

      {/* Button */}
      <button
        className="mt-10 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all flex items-center gap-2 mx-auto"
      >
        All Projects ↗
      </button>
    </section>
  );
};

export default ProjectsSection;
