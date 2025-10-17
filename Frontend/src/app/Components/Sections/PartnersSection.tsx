import React from "react";
import AnimatedLogoPanel from "@/app/Components/Sections/PartnerSection/AnimatedLogoPanel";

const PartnersSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1000px] mx-auto flex flex-col items-center justify-center py-12 px-4 bg-transparent">
      <h2 className="text-3xl font-bold text-center mb-0">Our Partners</h2>
      <AnimatedLogoPanel />
      <div className="flex w-full mt-8">
        <div className="flex-1 h-0.5 bg-white opacity-70"></div>
        <div className="flex-1 h-2 bg-white"></div>
        <div className="flex-1 h-0.5 bg-white opacity-70"></div>
      </div>
      {/* Add more partner content here if needed */}
    </section>
  );
};

export default PartnersSection;
