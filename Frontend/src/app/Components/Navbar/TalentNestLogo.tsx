import React from "react";
import Link from "next/link";

interface TalentNestLogoProps {
  className?: string;
}

const TalentNestLogo: React.FC<TalentNestLogoProps> = ({ className = "" }) => {
  return (
    <Link href="/" aria-label="Go to TalentNest landing page" className={`flex items-center ${className} cursor-pointer`}>
      {/* Image logo from public (spaces URL-encoded) */}
      <img
        src={"/Talent%20Nest%20logo%20only.png"}
        alt="TalentNest logo"
        className="h-6 sm:h-8 w-auto select-none"
        draggable={false}
      />
      {/* Keep the original text logo after the image */}
      <div className="ml-2 flex items-baseline select-none">
        <span
          className="text-black font-bold text-xl"
          style={{ fontFamily: "Monument Extended, Arial, sans-serif" }}
        >
          Talent
        </span>
        <span
          className="text-teal-900 font-bold text-xl"
          style={{ fontFamily: "Monument Extended, Arial, sans-serif" }}
        >
          Nest
        </span>
      </div>
    </Link>
  );
};

export default TalentNestLogo;
