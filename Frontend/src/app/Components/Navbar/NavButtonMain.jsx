"use client";

import React from "react";
import PropTypes from "prop-types";

const NavButtonMain = ({
  buttons = ["Features", "Pricing", "About"],
  onButtonClick,
}) => {
  const buttonClassName =
    "pricing-button text-green-900 font-semibold text-xs hover:text-green-700 transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto";

  return (
    <div className="flex items-center space-x-6">
      {buttons.map((buttonText, index) => (
        <button
          key={index}
          className={buttonClassName}
          onClick={() => onButtonClick && onButtonClick(buttonText, index)}
        >
          {buttonText}
        </button>
      ))}
    </div>
  );
};

NavButtonMain.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string),
  onButtonClick: PropTypes.func,
};

export default NavButtonMain;
