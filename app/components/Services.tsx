import React from 'react';
import Card from './ui/Card';

const Services = () => {
  return (
    <div className="relative w-full h-auto py-16 bg-[#FFFFF6] flex flex-col items-center">
      <h2 className="text-3xl font-bold text-[#1E382D] mb-10">Our Services</h2>
      <div className="flex flex-wrap gap-8 justify-center">
        <Card
          image="./SpoertC.svg"
          title="Sports Construction"
          paragraph="We provide the following services and solutions for Football fields that meet FIFA specifications, we DESIGN & BUILD, RESURFACING supply EQUIPMENT. Capability is both AstroTurf, Synthetic Grass fields."
        />
        <Card
          image="./Interior.svg"
          title="Interior design and decorative"
          paragraph="We provide the following services and solutions for Football fields that meet FIFA specifications, we DESIGN & BUILD, RESURFACING supply EQUIPMENT. Capability is both AstroTurf, Synthetic Grass fields."
        />
        <Card
          image="./GeneralC.svg"
          title="General Construction"
          paragraph="We provide the following services and solutions for Football fields that meet FIFA specifications, we DESIGN & BUILD, RESURFACING supply EQUIPMENT. Capability is both AstroTurf, Synthetic Grass fields."
        />
      </div>
    </div>
  );
};

export default Services;
