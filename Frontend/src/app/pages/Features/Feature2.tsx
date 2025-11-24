import React from "react";
import HeadButtonPurple from "@/app/Components/Sections/HeadButtonPurple";
import ArrowButton from "../../Components/Features/Feature1/ArrowButton";
import HeroSection from "../../Components/Features/Feature1/HeroSection";
import DashboardCard from "../../Components/Features/Feature1/DashboardCard";
import IntegrationsCard from "../../Components/Features/Feature1/IntegrationsCard";
import MobileCard from "../../Components/Features/Feature1/MobileCard";
import RatingsCard from "../../Components/Features/Feature1/RatingsCard";
import SecurityCard from "../../Components/Features/Feature1/SecurityCard";

const Feature2: React.FC = () => {
  const purpleColorScheme = {
    gradient: "linear-gradient(90deg, #4B0150, #6B0170, #4B0150)",
    shadow: "rgba(75,1,80,0.12)",
  };

  const lightPurpleColorScheme = {
    gradient: "linear-gradient(90deg, #E8D4F0, #D4B5E0, #C8A0D8)",
    shadow: "rgba(75,1,80,0.12)",
  };

  const purpleButtonColorScheme = {
    gradient: "linear-gradient(90deg, #6B0170, #8B1090, #6B0170)",
    hoverGradient: "linear-gradient(90deg, #8B1090, #AB20B0, #8B1090)",
    textColor: "#fff",
  };

  const purpleMobileButtonColorScheme = {
    background: "rgba(107, 1, 112, 0.1)",
    hoverBackground: "rgba(107, 1, 112, 0.2)",
    textColor: "#6B0170",
  };

  return (
    <main
      className="w-full text-slate-900 p-4 sm:p-6 md:p-8 relative pb-28 flex items-center justify-center min-h-[80vh]"
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "visible",
        backgroundImage: `linear-gradient(90deg, rgba(75,1,80,0.25) 0%, rgba(75,1,80,0.25) 50%, rgba(60,1,64,0.25) 100%), radial-gradient(circle at 60% 30%, rgba(75, 1, 80, 0.15) 0%, rgba(75, 1, 80, 0.05) 40%, transparent 0%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
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
        <HeadButtonPurple>
          <span style={{ color: "#fff", fontWeight: 600 }}>#Smart</span>
          <span style={{ color: "#fff", marginLeft: 4 }}>
            {" "}
            Organization Management
          </span>
        </HeadButtonPurple>
      </div>
      <div
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          marginTop: "48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Section */}
        <HeroSection
          title="Goodbye admin overload"
          subtitle="Hello! effortless control"
          description="Control your company's structure with our Organization Management Module. Define roles, create hierarchies, and manage branches securely."
        />

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
            <DashboardCard
              colorScheme={purpleColorScheme}
              title="Role-Based Control"
              description="Effortlessly define and manage roles across your organization with a modern, intuitive interface. Categorized, searchable permissions help admins assign access with precision—whether selecting individual capabilities or applying entire permission groups in one click. Color-coded indicators, hover descriptions, and preview screens ensure accuracy before saving."
            />
            <IntegrationsCard
              colorScheme={purpleColorScheme}
              title="Manual Leave Governance"
              description="Handle exceptional leave scenarios with confidence. Admins can manually define leave entries through a guided interface while enforcing approval rules, mandatory justifications, and policy restrictions. Every manual leave is logged with user, timestamp, and reason for complete accountability."
            />
          </div>
          <MobileCard
            colorScheme={purpleColorScheme}
            buttonColorScheme={purpleMobileButtonColorScheme}
            title="Dynamic Org Hierarchies"
            description="Design flexible, multi-layered org structures—functional, geographical, or project-based—with ease. Clone existing hierarchies, schedule future structural changes, and maintain full version history with restore options. Drag-and-drop role assignments, access controls, and real-time syncing ensure each node is accurate and up to date."
          />
        </div>

        {/* Row 2: Security (Full Width) */}
        <div
          className="row grid grid-cols-1 gap-2 md:gap-8 mb-6 max-w-4xl mx-auto"
          style={{
            gap: "8px",
            marginBottom: "6px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <SecurityCard
            colorScheme={purpleColorScheme}
            buttonColorScheme={purpleButtonColorScheme}
            title="Add and Manage Company Branches"
            description="Expand your organization seamlessly by adding new branches with complete location details and assigned employees. Our intuitive interface and powerful backend ensure accurate employee-branch mapping, preventing duplicates and maintaining data integrity."
          />
        </div>

        {/* Row 3: Ratings + Logo */}
        <div
          className="row grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mb-6 max-w-4xl mx-auto"
          style={{
            marginBottom: "6px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <RatingsCard
            colorScheme={lightPurpleColorScheme}
            badgeColorScheme={purpleColorScheme}
            badgeText="Smarter Organization Management"
            circle1Label="Streamlined"
            circle1Sentence="Role-based access control?"
            circle2Label="Simplified"
            circle2Sentence="Manual leave approval?"
            circle3Label="Flexible"
            circle3Sentence="Rigid organizational hierarchies?"
            circle4Label="Centralized"
            circle4Sentence="Branch management chaos?"
            useBlackText={true}
          />
          {/* Talent Nest Logo */}
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
            {/* ArrowButton at right bottom */}
            <div
              className="absolute right-0 bottom-0 m-2"
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                margin: "8px",
              }}
            >
              <ArrowButton arrowColor="#6B0170" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feature2;
