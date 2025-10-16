import React from "react";
import GradientHeadline from "@/app/Components/Shared/GradientHeadline";
import GradientPanel from "@/app/Components/Shared/GradientPanel";
import GradientButton from "@/app/Components/Sections/DemoSection/InputButton";

const WelcomeSection: React.FC = () => {
  return (
    <section
      id="welcome"
      className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
    >
      <GradientHeadline
        prefix="The Platform for"
        firstWord="Talent"
        secondWord="People"
        sizeClassName="text-4xl"
        wrapperClassName="mb-8"
        prefixClassName="text-black font-[350]"
        firstWordClassName="text-black italic font-light"
        secondWordWeightClassName="font-[350]"
        gradientStops={["#007E7E", "#33B88C", "#A9EBA9", "#33B88C", "#00A3A3"]}
      />

      <GradientPanel className="mt-8 p-8">
        <h3 className="text-white text-xl font-semibold mb-2">Request a demo</h3>
        <p className="text-white/80 text-sm mb-6 max-w-xs">
          Schedule a consultation with a real, live product expert to see if we're a fit.
        </p>
        
        <div className="space-y-4 w-full max-w-xs">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 transition"
          />
          <GradientButton label="Get Started" />
        </div>
      </GradientPanel>
    </section>
  );
};

export default WelcomeSection;