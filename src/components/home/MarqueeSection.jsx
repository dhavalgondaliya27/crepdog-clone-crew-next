
import React from "react";

const brands = [
  "Nike", "Adidas", "Jordan", "New Balance", 
  "Supreme", "Off-White", "Fear of God", "BAPE",
  "Yeezy", "Palace", "Stussy", "Kith"
];

const MarqueeSection = () => {
  return (
    <div className="bg-black text-white py-2 overflow-hidden">
      <div className="whitespace-nowrap flex">
        <div className="animate-marquee inline-block">
          {brands.map((brand, index) => (
            <React.Fragment key={index}>
              <span className="text-sm font-medium mx-4">{brand}</span>
              <span className="mx-4">•</span>
            </React.Fragment>
          ))}
        </div>
        <div className="animate-marquee inline-block">
          {brands.map((brand, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              <span className="text-sm font-medium mx-4">{brand}</span>
              <span className="mx-4">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
