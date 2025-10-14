import React from "react";
import NavButton from "./NavButton";
import NavButton2 from "./NavButton2";
import NavButtonMain from "./NavButtonMain";
import TalentNestLogo from "./TalentNestLogo";

const NavBar = () => {
  return (
    <header className="sticky top-3 sm:top-6 z-50 mt-3 sm:mt-6 w-full max-w-[1000px] h-12 sm:h-14 bg-white rounded-[25px] sm:rounded-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto flex items-center justify-between px-2 sm:px-4">
      <div className="flex items-center flex-1">
        <TalentNestLogo />
      </div>

      <div className="flex items-center justify-center flex-1 sm:flex-1">
        <NavButtonMain />
      </div>

      <nav className="flex items-center justify-end flex-1 sm:flex-1 space-x-2 sm:space-x-3">
        <NavButton2 />
        <NavButton />
      </nav>
    </header>
  );
};

export default NavBar;
