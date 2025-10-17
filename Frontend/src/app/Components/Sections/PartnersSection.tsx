import React from "react";
import AnimatedLogoPanel from "@/app/Components/Sections/PartnerSection/AnimatedLogoPanel";

const PartnersSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-transparent">
      <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
      <AnimatedLogoPanel />
      {/* Add more partner content here if needed */}
    </section>
  );
};

export default PartnersSection;
