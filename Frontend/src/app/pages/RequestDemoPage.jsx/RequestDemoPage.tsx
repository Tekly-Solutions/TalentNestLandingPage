"use client";

import React from "react";
import WelcomeSection from "@/app/Components/Sections/WelcomeSection";
import FeaturesSection from "@/app/Components/Sections/FeaturesSection";
import PricingSection from "@/app/Components/Sections/PricingSection";
import AboutSection from "@/app/Components/Sections/AboutSection";
import ContactSection from "@/app/Components/Sections/ContactSection";

const RequestDemoPage: React.FC = () => {
  return (
    <main className="w-full max-w-[1000px] bg-white rounded-[25px] sm:rounded-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto mt-12 mb-8 p-6 sm:p-8 relative pb-28">
      {/* Welcome */}
      <WelcomeSection />

      <hr className="my-10 border-gray-200" />

      {/* Features */}
      <FeaturesSection />

      <hr className="my-10 border-gray-200" />

      {/* Pricing */}
      <PricingSection />

      <hr className="my-10 border-gray-200" />

      {/* About */}
      <AboutSection />

      <hr className="my-10 border-gray-200" />

      {/* Contact */}
      <ContactSection />

      {/* Demo removed as requested */}
    </main>
  );
};

export default RequestDemoPage;
