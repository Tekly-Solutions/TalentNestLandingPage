"use client";

import React from "react";
import NavButton from "./NavButton"; // Start Free Trial
import NavButton2 from "./NavButton2"; // Request Demo

const MobileStickyCTAs: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
      <div className="mx-auto max-w-[1000px] bg-white/95 backdrop-blur rounded-t-2xl shadow-[0_-6px_24px_rgba(0,0,0,0.12)] border-t border-gray-200 px-3 py-2">
        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          {/* Main CTA lives in navbar on mobile; show the two secondary CTAs here */}
          <div className="shrink-0 max-[380px]:scale-90">
            <NavButton2 />
          </div>
          <div className="shrink-0 max-[380px]:scale-90">
            <NavButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStickyCTAs;
