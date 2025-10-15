import React from "react";
import NavButton from "./NavButton";
import NavButton2 from "./NavButton2";
import NavButtonMain from "./NavButtonMain";
import TalentNestLogo from "./TalentNestLogo";

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full max-w-[1000px] h-12 sm:h-14 bg-white rounded-b-[25px] sm:rounded-b-[50px] shadow-[0_4px_20px_rgba(var(--teal-medium-rgb),0.3)] mx-auto flex items-center justify-start pl-2 sm:pl-8 pr-6 sm:pr-10">
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="ml-20 sm:ml-6">
          <TalentNestLogo />
        </div>
        <div className="ml-4 sm:ml-10 flex items-center gap-2 sm:gap-3">
          <div className="mr-10 sm:mr-10">
            <NavButtonMain />
          </div>
          <NavButton2 />
          <NavButton />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
