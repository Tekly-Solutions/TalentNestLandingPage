"use client";

import React from "react";
import PropTypes from "prop-types";

const NavButtonMain = ({
  buttons = ["Features", "Pricing", "About"],
  onButtonClick,
}) => {
  const getButtonClassName = (index) => {
    const colors = [
      {
        text: "text-[var(--teal-light)]",
        hoverText: "hover:text-[var(--teal-medium)]",
        underline: "after:from-[var(--teal-light)] after:to-[var(--teal-dark)]",
        arrow: "text-white hover:text-[var(--teal-light)]",
      },
      {
        text: "text-[var(--teal-medium)]",
        hoverText: "hover:text-[var(--teal-deep)]",
        underline:
          "after:from-[var(--teal-medium)] after:to-[var(--teal-very-dark)]",
        arrow: "text-white hover:text-[var(--teal-medium)]",
      },
      {
        text: "text-[var(--teal-deep)]",
        hoverText: "hover:text-[var(--teal-dark)]",
        underline:
          "after:from-[var(--teal-deep)] after:to-[var(--teal-almost-black)]",
        arrow: "text-white hover:text-[var(--teal-deep)]",
      },
    ];
    const color = colors[index % colors.length];
    return `pricing-button ${color.text} font-semibold text-xs ${color.hoverText} transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-gradient-to-r ${color.underline} after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto`;
  };

  return (
    <div className="flex items-center space-x-6">
      {buttons.map((buttonText, index) => {
        const colors = [
          {
            text: "text-[var(--teal-light)]",
            hoverText: "hover:text-[var(--teal-medium)]",
            underline:
              "after:from-[var(--teal-light)] after:to-[var(--teal-dark)]",
            arrow: "text-white hover:text-[var(--teal-light)]",
          },
          {
            text: "text-[var(--teal-medium)]",
            hoverText: "hover:text-[var(--teal-deep)]",
            underline:
              "after:from-[var(--teal-medium)] after:to-[var(--teal-very-dark)]",
            arrow: "text-white hover:text-[var(--teal-medium)]",
          },
          {
            text: "text-[var(--teal-deep)]",
            hoverText: "hover:text-[var(--teal-dark)]",
            underline:
              "after:from-[var(--teal-deep)] after:to-[var(--teal-almost-black)]",
            arrow: "text-white hover:text-[var(--teal-deep)]",
          },
        ];
        const color = colors[index % colors.length];
        return (
          <button
            key={index}
            className={`pricing-button ${color.text} font-semibold text-xs ${color.hoverText} transition-colors duration-200 relative after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-0.5 after:bg-gradient-to-r ${color.underline} after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:right-auto flex items-center gap-1`}
            onClick={() => onButtonClick && onButtonClick(buttonText, index)}
          >
            <span>{buttonText}</span>
            <span
              className={`${color.arrow} transition-colors duration-200 text-xs font-bold`}
            >
              &gt;&gt;
            </span>
          </button>
        );
      })}
    </div>
  );
};

NavButtonMain.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string),
  onButtonClick: PropTypes.func,
};

export default NavButtonMain;
