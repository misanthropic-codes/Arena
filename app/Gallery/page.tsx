import React from "react";
import Gallery from "./Gallery";

const App: React.FC = () => {
  const imageArray = [
    { imageSrc: "/Gallery/image1.png", text: "Qubaa school/ Mombasa" },
    { imageSrc: "/Gallery/image2.png", text: "Tartan Rubber Flooring" },
    { imageSrc: "/Gallery/image3.png", text: "Jamhuri Arena" },
    { imageSrc: "/Gallery/image4.png", text: "Padel Tennis Court" },
    { imageSrc: "/Gallery/image5.png", text: "FIFA Side Field" },
    { imageSrc: "/Gallery/image6.png", text: "Indoor Sports Complex" },
    { imageSrc: "/Gallery/image7.png", text: "Wall Grass Fencing" },
    { imageSrc: "/Gallery/image8.png", text: "High School Playground" },
    { imageSrc: "/Gallery/image9.png", text: "Community Sports Arena" },
    { imageSrc: "/Gallery/image10.png", text: "Tennis Court Construction" },
    { imageSrc: "/Gallery/image11.png", text: "Gymnasium Hall" },
    { imageSrc: "/Gallery/image12.png", text: "Outdoor Sports Facility" },
    { imageSrc: "/Gallery/image13.png", text: "Synthetic Track" },
    { imageSrc: "/Gallery/image14.png", text: "Football Training Ground" },
    { imageSrc: "/Gallery/image15.png", text: "Basketball Court" },
    { imageSrc: "/Gallery/image16.png", text: "Badminton Court Setup" },
    { imageSrc: "/Gallery/image17.png", text: "Indoor Arena" },
    { imageSrc: "/Gallery/image18.png", text: "Public Sports Facility" },
  ];

  return (
    <div className="bg-[#FFFFF6] min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#4C8212]">Gallery</h1>
      <div className="py-4">
        <Gallery images={imageArray} />
      </div>
    </div>
  );
};

export default App;