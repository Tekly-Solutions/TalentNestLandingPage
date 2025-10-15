"use client";

import React, { useState } from "react";

type SectionType =
  | "welcome"
  | "features"
  | "pricing"
  | "about"
  | "contact"
  | "demo";

const RequestDemoPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionType>("welcome");

  const sections: { id: SectionType; title: string; content: string }[] = [
    {
      id: "welcome",
      title: "Welcome to TalentNest",
      content:
        "Discover the future of talent management with our innovative platform.",
    },
    {
      id: "features",
      title: "Our Features",
      content:
        "Powerful tools to streamline your recruitment and talent management process.",
    },
    {
      id: "pricing",
      title: "Pricing Plans",
      content: "Flexible pricing options to suit businesses of all sizes.",
    },
    {
      id: "about",
      title: "About Us",
      content: "Learn more about our mission and the team behind TalentNest.",
    },
    {
      id: "contact",
      title: "Contact Us",
      content: "Get in touch with our team for any questions or support.",
    },
    {
      id: "demo",
      title: "Request a Demo",
      content: "Schedule a consultation with our product experts.",
    },
  ];

  const currentIndex = sections.findIndex((s) => s.id === currentSection);
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < sections.length - 1;

  const goToPrevious = () => {
    if (canGoPrevious) {
      setCurrentSection(sections[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (canGoNext) {
      setCurrentSection(sections[currentIndex + 1].id);
    }
  };

  const currentSectionData = sections[currentIndex];

  return (
    <main className="w-full max-w-[1000px] min-h-[600px] bg-white rounded-[25px] sm:rounded-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto mt-12 mb-8 p-6 sm:p-8 relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        {/* Left Navigation Button */}
        <button
          onClick={goToPrevious}
          disabled={!canGoPrevious}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            canGoPrevious
              ? "bg-gradient-to-r from-[var(--teal-light)] to-[var(--teal-medium)] text-white hover:shadow-lg hover:scale-105"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          ← Previous
        </button>

        {/* Section Indicator */}
        <div className="flex gap-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[var(--teal-medium)] w-8"
                  : "bg-gray-300 hover:bg-[var(--teal-light)]"
              }`}
              title={section.title}
            />
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            canGoNext
              ? "bg-gradient-to-r from-[var(--teal-medium)] to-[var(--teal-dark)] text-white hover:shadow-lg hover:scale-105"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Next →
        </button>
      </div>

      {/* Content Section */}
      <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center mb-6 text-[var(--teal-darker)]">
          {currentSectionData.title}
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-2xl">
          {currentSectionData.content}
        </p>

        {/* Section-specific content can be added here */}
        <div className="mt-8 w-full">
          {currentSection === "welcome" && (
            <div className="text-center">
              <p className="text-gray-500 mb-4">
                Start your journey with us today!
              </p>
              <button className="px-6 py-3 bg-[var(--teal-medium)] text-white rounded-lg hover:bg-[var(--teal-dark)] transition-colors">
                Get Started
              </button>
            </div>
          )}
          {currentSection === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 border border-[var(--teal-light)] rounded-lg">
                <h3 className="font-semibold text-[var(--teal-darker)] mb-2">
                  Smart Matching
                </h3>
                <p className="text-sm text-gray-600">
                  AI-powered talent matching
                </p>
              </div>
              <div className="p-4 border border-[var(--teal-light)] rounded-lg">
                <h3 className="font-semibold text-[var(--teal-darker)] mb-2">
                  Analytics
                </h3>
                <p className="text-sm text-gray-600">
                  Real-time recruitment insights
                </p>
              </div>
            </div>
          )}
          {currentSection === "pricing" && (
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--teal-medium)] mb-2">
                Starting at $99/month
              </p>
              <p className="text-gray-500">
                Choose the plan that fits your needs
              </p>
            </div>
          )}
          {currentSection === "about" && (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Founded in 2025, TalentNest is revolutionizing talent management
              </p>
              <p className="text-gray-500 text-sm">
                Trusted by 1000+ companies worldwide
              </p>
            </div>
          )}
          {currentSection === "contact" && (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Email: contact@talentnest.com
              </p>
              <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
            </div>
          )}
          {currentSection === "demo" && (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-[521px] h-[491px] bg-black/20 rounded-[50px] shadow-[8px_4px_20px_0px_rgba(0,0,0,0.47)] flex flex-col items-center justify-center space-y-6 p-8">
                <div className="w-96 text-center justify-center text-color-white-solid text-2xl font-medium font-['Inter'] leading-loose">
                  Request a demo
                </div>
                <div className="w-96 text-center justify-center text-color-grey-97 text-lg font-normal font-['Inter'] leading-relaxed">
                  Schedule a consultation with a real, live
                  <br />
                  product expert to see if we're a fit.
                </div>
                <div className="w-20 h-4 justify-center text-color-white-solid text-sm font-medium font-['Inter'] leading-none">
                  Full Name
                </div>
                <img
                  className="w-72 h-9 mix-blend-luminosity rounded-[50px] shadow-[8px_4px_20px_0px_rgba(0,0,0,0.47)] border-4 border-neutral-400"
                  src="https://placehold.co/274x37"
                  alt="Full Name Input"
                />
                <div className="w-10 h-4 justify-center text-color-white-solid text-sm font-medium font-['Inter'] leading-none">
                  Email
                </div>
                <div className="w-72 h-9 mix-blend-luminosity bg-gradient-to-r from-green-300/0 via-green-400/0 to-cyan-600/0 rounded-[50px] shadow-[8px_4px_20px_0px_rgba(0,0,0,0.47)] border-4 border-neutral-400" />
                <div className="w-96 h-14 text-center justify-center text-teal-700 text-3xl font-medium font-['Inter'] leading-[71px]">
                  Get Start
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default RequestDemoPage;
