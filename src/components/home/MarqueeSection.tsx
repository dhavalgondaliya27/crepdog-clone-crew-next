
import React from "react";

const brands = [
  "Nike", "Adidas", "Jordan", "New Balance", 
  "Supreme", "Off-White", "Fear of God", "BAPE",
  "Yeezy", "Palace", "Stussy", "Kith"
];

const MarqueeSection = () => {
  return (
    <div className="bg-black text-white py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, index) => (
          <React.Fragment key={index}>
            <span className="text-sm font-medium mx-4">{brand}</span>
            <span className="mx-4">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
