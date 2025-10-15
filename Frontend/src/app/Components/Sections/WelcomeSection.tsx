import React from "react";

const WelcomeSection: React.FC = () => {
  return (
    <section
      id="welcome"
      className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-4xl font-bold mb-4 text-[var(--teal-darker)]">
        Welcome to TalentNest
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl">
        Discover the future of talent management with our innovative platform.
      </p>
      <div className="mt-8">
        <button className="px-6 py-3 bg-[var(--teal-medium)] text-white rounded-lg hover:bg-[var(--teal-dark)] transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WelcomeSection;
