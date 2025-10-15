import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full py-8 text-center">
      <h2 className="text-3xl font-bold mb-2 text-[var(--teal-darker)]">
        About Us
      </h2>
      <p className="text-gray-600 mb-2">
        Founded in 2025, TalentNest is revolutionizing talent management
      </p>
      <p className="text-gray-500 text-sm">
        Trusted by 1000+ companies worldwide
      </p>
    </section>
  );
};

export default AboutSection;
