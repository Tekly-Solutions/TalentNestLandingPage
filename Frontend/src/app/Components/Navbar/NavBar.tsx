import React from "react";
import NavButton from "./NavButton";
import NavButton2 from "./NavButton2";
import NavButtonMain from "./NavButtonMain";
import TalentNestLogo from "./TalentNestLogo";
import MobileStickyCTAs from "./MobileStickyCTAs";

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full max-w-[1000px] h-12 sm:h-14 bg-white rounded-b-[25px] sm:rounded-b-[50px] shadow-[0_4px_20px_rgba(var(--teal-medium-rgb),0.3)] mx-auto flex items-center justify-start pl-2 sm:pl-8 pr-0 sm:pr-10">
      <div className="flex items-center gap-1 sm:gap-6">
        <div className="ml-2 sm:ml-6">
          <TalentNestLogo />
        </div>
        {/* Mobile-only: show main nav button pinned near right edge */}
        <div className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 max-[380px]:scale-90">
          <NavButtonMain />
        </div>
        {/* Hide buttons inside navbar on small screens; show on sm and up */}
        <div className="hidden sm:flex ml-3 sm:ml-8 items-center gap-1 sm:gap-3">
          <div className="mr-2 sm:mr-6">
            <NavButtonMain />
          </div>
          <NavButton2 />
          <NavButton />
        </div>
      </div>
      {/* Mobile bottom-centered sticky CTAs */}
      <MobileStickyCTAs />
    </header>
  );
};

export default NavBar;
