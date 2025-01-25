import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-white">
      <Image
        src="/hero.svg"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 top-0"
      />
      <div className="absolute flex flex-col items-start w-[50%] max-w-[759px] h-[459px] left-[8%] top-[20%] gap-[24px]">
        <h1 className="w-full font-['Instrument_Sans'] font-medium text-[5vw] leading-[1.2] text-white">
          Find the <span className="text-[#B4E676]">Turf</span> you need
        </h1>
        <p className="w-full font-['Roboto'] font-normal text-[1.8vw] leading-[1.2] text-white">
          Arena Company ltd was founded in 2015, it is an Applicator of synthetic sports surface materials, Road Construction and waterproof products synthetic sports surface materials in East Africa.
        </p>
        <button className="flex flex-row justify-center items-center w-[220px] h-[64px] bg-[#559312] rounded-[8px] gap-[10px]">
          <span className="font-['Instrument_Sans'] font-medium text-[24px] leading-[29px] text-white">
            Read more
          </span>
        </button>
      </div>
      <img src="/file.svg" alt="Decoration" className="absolute left-0 bottom-0 w-full" />
    </div>
  );
};

export default Hero;
