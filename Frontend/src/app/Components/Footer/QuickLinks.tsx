import React from "react";

const QuickLinks: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[white] hover:scale-150 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[white] hover:scale-150 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[white] hover:scale-150 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[white] hover:scale-150 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Careers
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-300 hover:text-[white] hover:scale-150 transition-all duration-300 transform relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full pb-1"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
