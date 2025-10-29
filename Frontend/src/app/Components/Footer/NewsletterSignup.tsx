"use client";

import React, { useState } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="border-t border-white pt-8 mb-8">
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
          -webkit-text-fill-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2 text-white">Stay Updated</h3>
        <p className="text-gray-300 mb-4">
          Subscribe to our newsletter for the latest updates and insights.
        </p>
        <div className="flex rounded-2xl overflow-hidden border border-white">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[var(--teal-light)]`}
            suppressHydrationWarning
          />
          <button className="px-6 py-2 bg-white text-black hover:text-xl hover:bg-gray-100 active:bg-gray-200 transition-all rounded-2xl border-l border-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
