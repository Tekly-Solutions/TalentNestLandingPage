import React from "react";

const logoUrls = [
  // Replace these with your actual logo image URLs or SVG imports
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
];

const AnimatedLogoPanel: React.FC = () => {
  return (
    <div
      className="w-full h-[300px] rounded-[50px] flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #33B88C 0%, #007E7E 25%, #A9EBA9 50%, #33B88C 75%, #00A3A3 100%)",
      }}
    >
      {/* Layer 1: moves right */}
      <div className="absolute left-0 top-1/4 flex gap-8 animate-moveRight w-full">
        {logoUrls.map((src, i) => (
          <img key={i} src={src} alt={`logo${i}`} className="h-12" />
        ))}
      </div>
      {/* Layer 2: moves left */}
      <div className="absolute left-0 top-1/2 flex gap-8 animate-moveLeft w-full">
        {logoUrls.map((src, i) => (
          <img key={i} src={src} alt={`logo${i}`} className="h-12" />
        ))}
      </div>
      {/* Layer 3: moves right */}
      <div className="absolute left-0 top-3/4 flex gap-8 animate-moveRight w-full">
        {logoUrls.map((src, i) => (
          <img key={i} src={src} alt={`logo${i}`} className="h-12" />
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogoPanel;
