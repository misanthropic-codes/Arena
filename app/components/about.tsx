import React from "react";

const About = () => {
  return (
    <div className="relative w-full h-[374px] bg-[#DAE3CF] flex items-center justify-center">
      <div className="w-[80%] max-w-[1280px] flex flex-col items-center gap-[24px]">
        <h1 className="w-full font-['Roboto'] font-medium text-[3vw] leading-[1.2] text-center text-[#102E14]">
          About Arena Construction
        </h1>
        <p className="w-full font-['Roboto'] font-medium text-[1.8vw] leading-[1.5] text-justify text-[#102E14]">
          Arena Company are specialists in turn-key sports design and construction of artificial and synthetic grass and turf fields and surfaces for football, baseball, and soccer for middle school, high school, college, and professional stadiums and facilities. We also build and resurface athletic running tracks. From repairs on your running track and football field to the installation of bleachers and scoreboards in your indoor facility, we are the only true turn-key package when it comes to sports fields and facilities in the region.
        </p>
      </div>
    </div>
  );
};

export default About;
