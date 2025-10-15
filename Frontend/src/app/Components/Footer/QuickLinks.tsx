import React from "react";

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
