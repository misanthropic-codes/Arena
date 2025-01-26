"use client"
import React, { useState, useEffect } from "react";

interface Image {
  imageSrc: string;
  text: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [imageRatios, setImageRatios] = useState<{[key: number]: number}>({});

  useEffect(() => {
    const loadImageRatios = () => {
      const ratios: {[key: number]: number} = {};
      
      images.forEach((image, index) => {
        const img = new Image();
        img.src = image.imageSrc;
        img.onload = () => {
          ratios[index] = img.height / img.width;
          if (Object.keys(ratios).length === images.length) {
            setImageRatios(ratios);
          }
        };
      });
    };

    loadImageRatios();
  }, [images]);

  return (
    <div className="bg-[#FFFFF6] px-4 sm:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((item, index) => {
          const aspectRatio = imageRatios[index] || 1;
          
          return (
            <div 
              key={index} 
              className="relative w-full"
              style={{ paddingBottom: `${aspectRatio * 100}%` }}
            >
              <img
                src={item.imageSrc}
                alt={item.text}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;