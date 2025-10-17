import React from "react";

const logoUrls = [
  // Working PNG logo links
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.png/320px-Microsoft_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.png/320px-Logo_NIKE.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.png/320px-Google_2015_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.png/320px-IBM_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.png/320px-Netflix_2015_logo.png",
];

const AnimatedLogoPanel: React.FC = () => {
  return (
    <div className="w-full h-[300px] rounded-[50px] flex flex-col items-center justify-center relative overflow-hidden">
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
