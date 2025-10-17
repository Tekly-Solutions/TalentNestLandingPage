"use client";

import React from "react";

import PartnersSection from "@/app/Components/Sections/PartnersSection";


const RequestDemoPage: React.FC = () => {
  return (
    <main className="w-full max-w-[1000px] bg-white text-slate-900 rounded-[25px] sm:rounded-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto mt-12 mb-8 p-6 sm:p-8 relative pb-28 overflow-hidden">
      
      

      {/* Welcome */}
      <PartnersSection />

      

      
    </main>
  );
};

export default RequestDemoPage;
