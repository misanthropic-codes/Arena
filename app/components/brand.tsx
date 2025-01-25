import React from "react";

const Brand = () => {
  return (
    <div className="relative w-full bg-[#CCCCCCCC] flex items-center justify-center space-x-8 md:space-x-12 px-6 md:px-12 py-8">
      <div>
        <img src="./savis.svg" alt="SABIS International School" className="max-h-16 md:max-h-20" />
      </div>
      <div>
        <img src="./davis.svg" alt="International French School of Nairobi" className="max-h-16 md:max-h-20" />
      </div>
      <div>
        <img src="./inter.svg" alt="African Educational Foundation for Excellence" className="max-h-16 md:max-h-20" />
      </div>
    </div>
  );
};

export default Brand;
