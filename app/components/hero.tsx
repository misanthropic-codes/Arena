import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-white">
      {/* Background Image */}
      <Image
        src="/hero.svg"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority
      />

      {/* Content Section */}
      <div className="absolute flex flex-col items-start w-[90%] max-w-[759px] left-[5%] md:left-[8%] top-[15%] md:top-[20%] gap-6">
        <h1 className="text-white font-['Instrument_Sans'] font-medium text-[8vw] md:text-[4.5vw] lg:text-[3.5vw] leading-tight">
          Find the <span className="text-[#B4E676]">Turf</span> you need
        </h1>
        <p className="text-white font-['Roboto'] font-normal text-[4.5vw] md:text-[2.2vw] lg:text-[1.8vw] leading-snug">
          Arena Company ltd was founded in 2015. It is an applicator of synthetic sports surface materials, road construction, and waterproof products for East Africa.
        </p>
        <button className="flex flex-row justify-center items-center w-[180px] md:w-[220px] h-[50px] md:h-[64px] bg-[#559312] rounded-lg gap-2 hover:bg-[#41770e] transition-all duration-300">
          <span className="text-white font-['Instrument_Sans'] font-medium text-[4vw] md:text-[24px] lg:text-[20px] leading-tight">
            Read more
          </span>
        </button>
      </div>

      {/* Decorative SVG */}
      <img
        src="/file.svg"
        alt="Decoration"
        className="absolute left-0 bottom-0 w-full"
      />
    </div>
  );
};

export default Hero;
