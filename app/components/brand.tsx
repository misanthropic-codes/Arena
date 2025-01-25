import React from "react";

const Brand = () => {
  return (
    <div className="relative w-full h-[143px] bg-[#CCCCCCCC] flex items-center justify-center space-x-12 px-12">
      <div>
        <img src="./savis.svg" alt="SABIS International School" className="max-h-16" />
      </div>
      <div>
        <img src="./davis.svg" alt="International French School of Nairobi" className="max-h-16" />
      </div>
      <div>
        <img src="./inter.svg" alt="African Educational Foundation for Excellence" className="max-h-16" />
      </div>
    </div>
  );
};

export default Brand;