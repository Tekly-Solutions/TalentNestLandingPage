import React from "react";

const NewsletterSignup: React.FC = () => {
  return (
    <div className="border-t border-gray-700 pt-8 mb-8">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2 text-white">Stay Updated</h3>
        <p className="text-gray-300 mb-4">
          Subscribe to our newsletter for the latest updates and insights.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--teal-light)]"
          />
          <button className="px-6 py-2 bg-[var(--teal-medium)] hover:bg-[var(--teal-dark)] text-white rounded-r-lg transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
