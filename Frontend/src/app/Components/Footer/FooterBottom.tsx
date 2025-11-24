import React from "react";

const FooterBottom: React.FC = () => {
  return (
    <div className="border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-white/80 text-sm hover:text-white transition-colors duration-300">
        © 2025 TalentNest. All rights reserved.
      </p>
    </div>
  );
};

export default FooterBottom;
