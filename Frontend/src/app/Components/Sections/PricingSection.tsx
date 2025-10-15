import React from "react";

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-8 text-center">
      <h2 className="text-3xl font-bold mb-2 text-[var(--teal-darker)]">
        Pricing Plans
      </h2>
      <p className="text-2xl font-bold text-[var(--teal-medium)] mb-2">
        Starting at $99/month
      </p>
      <p className="text-gray-500">Choose the plan that fits your needs</p>
    </section>
  );
};

export default PricingSection;
