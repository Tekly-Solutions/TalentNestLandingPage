import React from "react";

const TalentNestLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-black font-bold text-xl">Talent</span>
      <span className="text-green-800 font-bold text-xl">Nest</span>
    </div>
  );
};

export default TalentNestLogo;
