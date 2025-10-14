import React from "react";
import NavButton from "./NavButton";
import NavButton2 from "./NavButton2";
import NavButtonMain from "./NavButtonMain";

const NavBar = () => {
  return (
    <header className="sticky top-6 z-50 mt-6 w-[1000px] max-w-full h-14 bg-white rounded-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto flex items-center justify-between px-4">
      <div className="flex-1"></div>

      <div className="flex items-center justify-center flex-1">
        <NavButtonMain />
      </div>

      <nav className="flex items-center justify-end flex-1">
        <NavButton2 />
        <NavButton />
      </nav>
    </header>
  );
};

export default NavBar;
