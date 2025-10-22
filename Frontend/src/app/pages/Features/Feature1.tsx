import React from "react";
import HeadButton from "@/app/Components/Sections/HeadButton";
import HeroSection from "../../Components/Features/HeroSection";
import DashboardCard from "../../Components/Features/DashboardCard";
import IntegrationsCard from "../../Components/Features/IntegrationsCard";
import MobileCard from "../../Components/Features/MobileCard";
import RatingsCard from "../../Components/Features/RatingsCard";
import ResponseTimesCard from "../../Components/Features/ResponseTimesCard";
import SupportCard from "../../Components/Features/SupportCard";
import SecurityCard from "../../Components/Features/SecurityCard";

const Feature1: React.FC = () => {
  return (
    <main
      className="w-full max-w-[1000px] bg-white text-slate-900 rounded-[25px] sm:rounded-[50px] shadow-[0px_4px_20px_0px_rgba(38,166,154,0.35)] mx-auto mt-12 mb-8 p-6 sm:p-8 relative pb-28"
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "visible", // allow floating button to overflow
      }}
    >
      {/* Gradient border overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          borderRadius: "40px",
          padding: "4px",
          background: "linear-gradient(90deg, #ffe066, #ffb300, #bfa100)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          pointerEvents: "none",
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
          borderRadius: "9999px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          padding: 0, // remove extra padding
          display: "inline-block",
        }}
      >
        <HeadButton />
      </div>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Section */}
        <HeroSection />
        {/* Row 1: Dashboard + Integrations */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <DashboardCard />
          <IntegrationsCard />
        </div>
        {/* Row 2: Mobile + Ratings */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <MobileCard />
          <RatingsCard />
        </div>
        {/* Row 3: Response Times + Support */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <ResponseTimesCard />
          <SupportCard />
        </div>
        {/* Row 4: Security (Full Width) */}
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <SecurityCard />
        </div>
      </div>
    </main>
  );
};

export default Feature1;
