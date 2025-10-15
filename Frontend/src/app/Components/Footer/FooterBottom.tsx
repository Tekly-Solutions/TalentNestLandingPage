import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-400 text-sm">
        © 2025 TalentNest. All rights reserved.
      </p>
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <span className="text-gray-400 text-sm">
          Made with ❤️ for better talent connections
        </span>
      </div>
    </div>
  );
};

export default FooterBottom;
