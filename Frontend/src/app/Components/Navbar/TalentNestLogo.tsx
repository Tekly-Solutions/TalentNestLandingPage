import React from "react";

interface TalentNestLogoProps {
  className?: string;
}

const TalentNestLogo: React.FC<TalentNestLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span
        className="text-black font-bold text-xl"
        style={{ fontFamily: "Monument Extended, Arial, sans-serif" }}
      >
        Talent
      </span>
      <span
        className="text-green-800 font-bold text-xl"
        style={{ fontFamily: "Monument Extended, Arial, sans-serif" }}
      >
        Nest
      </span>
    </div>
  );
};

export default TalentNestLogo;
