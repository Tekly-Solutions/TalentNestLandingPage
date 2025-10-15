import React from "react";
import NavButton from "./NavButton";
import NavButton2 from "./NavButton2";
import NavButtonMain from "./NavButtonMain";
import TalentNestLogo from "./TalentNestLogo";

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full max-w-[1000px] h-12 sm:h-14 bg-white rounded-b-[25px] sm:rounded-b-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto flex items-center justify-start px-2 sm:px-4">
      <div className="flex items-center gap-4 sm:gap-6">
        <TalentNestLogo />
        <NavButtonMain />
        <nav className="flex items-center space-x-2 sm:space-x-3 ml-20 sm:ml-44">
          <NavButton2 />
          <NavButton />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
