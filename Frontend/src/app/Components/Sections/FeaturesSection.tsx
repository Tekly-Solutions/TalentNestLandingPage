import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full py-8">
      <h2 className="text-3xl font-bold text-center mb-2 text-[var(--teal-darker)]">
        Our Features
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Powerful tools to streamline your recruitment and talent management
        process.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="p-4 border border-[var(--teal-light)] rounded-lg">
          <h3 className="font-semibold text-[var(--teal-darker)] mb-2">
            Smart Matching
          </h3>
          <p className="text-sm text-gray-600">AI-powered talent matching</p>
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
    </section>
  );
};

export default FeaturesSection;
