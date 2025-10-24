import React from "react";
import HeadButton from "@/app/Components/Sections/HeadButton";
import ArrowButton from "../../Components/Features/Feature1/ArrowButton";
import HeroSection from "../../Components/Features/Feature1/HeroSection";
import DashboardCard from "../../Components/Features/Feature1/DashboardCard";
import IntegrationsCard from "../../Components/Features/Feature1/IntegrationsCard";
import MobileCard from "../../Components/Features/Feature1/MobileCard";
import RatingsCard from "../../Components/Features/Feature1/RatingsCard";
import ResponseTimesCard from "../../Components/Features/Feature1/ResponseTimesCard";

import SecurityCard from "../../Components/Features/Feature1/SecurityCard";

const Feature1: React.FC = () => {
  return (
    <main
      className="w-full bg-white text-slate-900 shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mt-12 mb-8 p-6 sm:p-8 relative pb-28 flex items-center justify-center min-h-[80vh]"
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "visible", // allow floating button to overflow
        backgroundImage: `linear-gradient(90deg, rgba(255,224,102,0.35) 0%, rgba(255,179,0,0.35) 50%, rgba(191,161,0,0.35) 100%), radial-gradient(circle at 60% 30%, rgba(255, 224, 102, 0.25) 0%, rgba(255, 224, 102, 0.08) 40%, transparent 0%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "multiply, lighten, multiply",
        backgroundColor: "#fff",
        width: "100vw",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        borderRadius: 0,
      }}
    >
      {/* Gradient border overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          borderRadius: 0,
          padding: "0px", // Remove padding to make border flush
          border: "8px solid transparent", // Add a thick border
          background:
            "linear-gradient(90deg, #ffe066, #ffb300, #bfa100) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          pointerEvents: "none",
          boxShadow: "0 0 0 6px #fff, 0 0 24px 4px #ffe06699", // Add glow and white separation
        }}
      />
      {/* Floating HeadButton */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "-16px", // move downward
          transform: "translate(-50%, 0)",
          zIndex: 20,
          background: "white",
          borderRadius: "99999px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          padding: 0, // remove extra padding
          display: "inline-block",
        }}
      >
        <HeadButton>Time and attendance system</HeadButton>
      </div>
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Section */}
        <HeroSection />
        {/* Custom Row: Two cards left, one card right */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "12px",
            marginBottom: "12px",
            maxWidth: "950px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <DashboardCard />
            <IntegrationsCard />
          </div>
          <MobileCard />
        </div>
        {/* Row 2: Ratings only */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "12px",
            marginBottom: "12px",
            maxWidth: "950px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <RatingsCard />
        </div>
        {/* Row 3: Response Times + Support */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            marginBottom: "12px",
            maxWidth: "950px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <ResponseTimesCard />
          {/* Talent Nest Logo after ResponseTimesCard */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "12px 0",
              position: "relative",
            }}
          >
            <img
              src={"/Talent Nest logo stroke.png"}
              alt="Talent Nest Logo"
              style={{ maxWidth: "340px", height: "auto" }}
            />
            {/* ArrowButton at left bottom */}
            <div
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                margin: "16px",
              }}
            >
              <ArrowButton />
            </div>
          </div>
        </div>
        {/* Row 4: Security (Full Width) */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            maxWidth: "950px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <SecurityCard />
        </div>
      </div>
    </main>
  );
};

export default Feature1;
