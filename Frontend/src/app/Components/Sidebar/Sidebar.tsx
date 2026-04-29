"use client";

import React, { useState, useEffect } from "react";

const Sidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section");
      const footer = document.getElementById("footer");

      if (!heroSection || !footer) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      const footerTop = footer.offsetTop;
      const scrollPosition = window.scrollY;

      setIsVisible(scrollPosition > heroBottom && scrollPosition < footerTop);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 h-auto max-h-[600px] w-12 sm:w-14 bg-white rounded-r-[25px] sm:rounded-r-[50px] shadow-[4px_0_20px_rgba(var(--teal-medium-rgb),0.3)] flex flex-col items-center justify-center py-4 sm:py-8 px-2 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        {/* Navigation links */}
        <nav className="flex flex-col items-center gap-1 sm:gap-2">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[7px] sm:text-[8px] font-semibold text-gray-700 hover:text-teal-600 transition-colors duration-200 transform -rotate-90 whitespace-nowrap cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-teal-400 after:to-teal-600 after:transition-all after:duration-300 hover:after:w-full"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("feature1")}
            className="text-[7px] sm:text-[8px] font-semibold text-gray-700 hover:text-teal-600 transition-colors duration-200 transform -rotate-90 whitespace-nowrap cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-teal-400 after:to-teal-600 after:transition-all after:duration-300 hover:after:w-full"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Attendance
          </button>
          <button
            onClick={() => scrollToSection("feature2")}
            className="text-[7px] sm:text-[8px] font-semibold text-gray-700 hover:text-teal-600 transition-colors duration-200 transform -rotate-90 whitespace-nowrap cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-teal-400 after:to-teal-600 after:transition-all after:duration-300 hover:after:w-full"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Feature 2
          </button>
          <button
            onClick={() => scrollToSection("feature3")}
            className="text-[7px] sm:text-[8px] font-semibold text-gray-700 hover:text-teal-600 transition-colors duration-200 transform -rotate-90 whitespace-nowrap cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-teal-400 after:to-teal-600 after:transition-all after:duration-300 hover:after:w-full"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Feature 3
          </button>
          <button
            onClick={() => scrollToSection("welcome")}
            className="text-[7px] sm:text-[8px] font-semibold text-gray-700 hover:text-teal-600 transition-colors duration-200 transform -rotate-90 whitespace-nowrap cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-teal-400 after:to-teal-600 after:transition-all after:duration-300 hover:after:w-full"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Demo
          </button>
          <button
            onClick={() => scrollToSection("footer")}
            className="text-[7px] sm:text-[8px] font-semibold text-gray-700 hover:text-teal-600 transition-colors duration-200 transform -rotate-90 whitespace-nowrap cursor-pointer relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-teal-400 after:to-teal-600 after:transition-all after:duration-300 hover:after:w-full"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            Contact Us
          </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
