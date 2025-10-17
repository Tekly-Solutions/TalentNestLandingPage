"use client";

import React from "react";
import WelcomeSection from "@/app/Components/Sections/RequestDemoSection";
import Loader from "@/app/Components/Shared/Loader";
import FloatingElement from "@/app/Components/Shared/FloatingElement";
import RequestDemoSection from "@/app/Components/Sections/RequestDemoSection";

const RequestDemoPage: React.FC = () => {
  return (
    <main className="w-full max-w-[1000px] bg-white text-slate-900 rounded-[25px] sm:rounded-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto mt-12 mb-8 p-6 sm:p-8 relative pb-28 overflow-hidden">
      {/* Floating loader 1 - Medium size, slower movement */}
      <FloatingElement
        initialX={50}
        initialY={50}
        minInterval={4000}
        maxInterval={6000}
        duration={3000}
        opacity={0.4}
        rotationMultiplier={1}
      >
        <Loader size={0.4} />
      </FloatingElement>

      {/* Floating loader 2 - Smaller, faster movement */}
      <FloatingElement
        initialX={400}
        initialY={300}
        minInterval={3500}
        maxInterval={6000}
        duration={3500}
        opacity={0.3}
        rotationMultiplier={0.5}
      >
        <Loader size={0.3} />
      </FloatingElement>

      {/* Floating loader 3 - Medium-small, varied movement */}
      <FloatingElement
        initialX={200}
        initialY={600}
        minInterval={3000}
        maxInterval={6000}
        duration={4000}
        opacity={0.25}
        rotationMultiplier={1.5}
      >
        <Loader size={0.35} />
      </FloatingElement>

      {/* Request Demo Section */}
      <RequestDemoSection />
      {/* Partner Logo Section */}

      
      


    </main>
  );
};

export default RequestDemoPage;
