import React from "react";

const About = () => {
  return (
    <div className="relative w-full bg-[#DAE3CF] flex items-center justify-center py-12">
      <div className="w-[90%] max-w-[1280px] flex flex-col items-center gap-6">
        {/* Heading */}
        <h1 className="font-['Roboto'] font-medium text-[8vw] md:text-[4vw] lg:text-[3vw] leading-tight text-center text-[#102E14]">
          About Arena Construction
        </h1>

        {/* Paragraph */}
        <p className="font-['Roboto'] font-normal text-[4.5vw] md:text-[2.2vw] lg:text-[1.8vw] leading-relaxed text-justify text-[#102E14]">
          Arena Company are specialists in turn-key sports design and construction of artificial and synthetic grass and turf fields and surfaces for football, baseball, and soccer for middle school, high school, college, and professional stadiums and facilities. We also build and resurface athletic running tracks. From repairs on your running track and football field to the installation of bleachers and scoreboards in your indoor facility, we are the only true turn-key package when it comes to sports fields and facilities in the region.
        </p>
      </div>
    </div>
  );
};

export default About;
