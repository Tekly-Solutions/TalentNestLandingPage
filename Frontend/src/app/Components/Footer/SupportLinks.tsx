import React from "react";

const SupportLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Help Center
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Terms of Service
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[var(--teal-light)] transition-colors"
          >
            Cookie Policy
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SupportLinks;
