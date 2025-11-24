import React from "react";
import AnimatedLogoPanel from "@/app/Components/Sections/PartnerSection/AnimatedLogoPanel";

const PartnersSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-transparent">
      <h2 className="text-3xl font-bold text-center mb-0">Our Partners</h2>
      {/* <div className="flex w-full mt-4 mb-2">
        <div className="flex-1 h-0.5 bg-white opacity-70"></div>
        <div className="flex-1 h-2 bg-white"></div>
        <div className="flex-1 h-0.5 bg-white opacity-70"></div>
      </div>
      <AnimatedLogoPanel />
      <div className="flex w-full mt-2">
        <div className="flex-1 h-0.5 bg-white opacity-70"></div>
        <div className="flex-1 h-2 bg-white"></div>
        <div className="flex-1 h-0.5 bg-white opacity-70"></div>
      </div> */}

      {/* Trust Indicators */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-white mb-8 text-center">
          Trusted by hundreds of businesses like yours
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
            <div className="text-white">companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">0.5M</div>
            <div className="text-white">people</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">5k</div>
            <div className="text-white">hires</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
            <div className="text-white">countries</div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="text-4xl font-bold text-white mb-2">98%</div>
          <div className="text-white">satisfaction</div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
