import React from "react";
import HeadButton from "@/app/Components/Sections/HeadButton";
import ArrowButton from "../../Components/Features/Feature1/ArrowButton";
import HeroSection from "../../Components/Features/Feature1/HeroSection";
import DashboardCard from "../../Components/Features/Feature1/DashboardCard";
import IntegrationsCard from "../../Components/Features/Feature1/IntegrationsCard";
import MobileCard from "../../Components/Features/Feature1/MobileCard";
import RatingsCard from "../../Components/Features/Feature1/RatingsCard";

import SecurityCard from "../../Components/Features/Feature1/SecurityCard";

const Feature1: React.FC = () => {
  const yellowButtonColorScheme = {
    gradient: "linear-gradient(90deg, #fafad2 0%, #fffacd 100%)",
    hoverGradient: "linear-gradient(90deg, #fffacd 0%, #fff59d 100%)",
    textColor: "#000",
  };

  return (
    <main
      id="feature1"
      className="w-full text-slate-900 p-4 sm:p-6 md:p-8 relative pb-28 flex items-center justify-center min-h-[80vh]"
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "visible", // allow floating button to overflow
        backgroundImage: `linear-gradient(90deg, rgba(255,224,102,0.35) 0%, rgba(255,179,0,0.35) 50%, rgba(191,161,0,0.35) 100%), radial-gradient(circle at 60% 30%, rgba(255, 224, 102, 0.25) 0%, rgba(255, 224, 102, 0.08) 40%, transparent 0%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "multiply, lighten, multiply",
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: 0,
      }}
    >
      {/* Floating HeadButton */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "24px",
          transform: "translate(-50%, 0)",
          zIndex: 20,
          background: "white",
          borderRadius: "99999px",
          padding: 0,
          display: "inline-block",
        }}
      >
        <HeadButton>
          <span style={{ color: "#000" }}>#Smart&nbsp;</span> Attendance System
        </HeadButton>
      </div>
      <div
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        style={{
          maxWidth: "1100px",
          width: "100%",
          marginTop: "48px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Section */}
        <HeroSection />
        {/* Custom Row: Two cards left, one card right */}
        <div
          className="row grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mb-6 max-w-4xl mx-auto"
          style={{
            marginBottom: "6px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="flex flex-col gap-2 md:gap-8">
            <DashboardCard />
            <IntegrationsCard />
          </div>
          <MobileCard />
        </div>
        {/* Row 2: Ratings only */}
        <div
          className="row grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mb-6 max-w-4xl mx-auto"
          style={{
            marginBottom: "6px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <RatingsCard />
          {/* Talent Nest Logo after ResponseTimesCard */}
          <div
            className="flex items-center justify-center py-2 relative"
            style={{
              padding: "8px 0",
              position: "relative",
            }}
          >
            <img
              src={"/Talent Nest logo stroke.png"}
              alt="Talent Nest Logo"
              className="max-w-xs h-auto"
              style={{ maxWidth: "340px", height: "auto" }}
            />
            {/* ArrowButton at left bottom */}
            <div
              className="absolute right-0 bottom-0 m-2"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                margin: "8px",
              }}
            >
              <ArrowButton />
            </div>
          </div>
        </div>
        {/* Row 3: Response Times + Support */}
        <div
          className="row grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mb-6 max-w-4xl mx-auto"
          style={{
            gap: "8px",
            marginBottom: "6px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
        {/* Row 4: Security (Full Width) */}
        <div
          className="row grid grid-cols-1 gap-2 md:gap-8 max-w-4xl mx-auto"
          style={{
            gap: "8px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <SecurityCard buttonColorScheme={yellowButtonColorScheme} />
        </div>
      </div>
    </main>
  );
};

export default Feature1;
