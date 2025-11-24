import React from "react";
import HeadButtonGreen from "@/app/Components/Sections/HeadButtonGreen";
import ArrowButton from "../../Components/Features/Feature1/ArrowButton";
import HeroSection from "../../Components/Features/Feature1/HeroSection";
import DashboardCard from "../../Components/Features/Feature1/DashboardCard";
import IntegrationsCard from "../../Components/Features/Feature1/IntegrationsCard";
import MobileCard from "../../Components/Features/Feature1/MobileCard";
import RatingsCard from "../../Components/Features/Feature1/RatingsCard";
import SecurityCard from "../../Components/Features/Feature1/SecurityCard";

const Feature3: React.FC = () => {
  const greenColorScheme = {
    gradient: "linear-gradient(90deg, var(--teal-light), var(--teal-medium), var(--teal-light))",
    shadow: "rgba(var(--teal-medium-rgb),0.12)",
  };

  const lightGreenColorScheme = {
    gradient: "linear-gradient(90deg, rgba(var(--teal-light-rgb),0.12), rgba(var(--teal-medium-rgb),0.06))",
    shadow: "rgba(var(--teal-medium-rgb),0.06)",
  };

  return (
    <main
      className="w-full text-slate-900 p-4 sm:p-6 md:p-8 relative pb-28 flex items-center justify-center min-h-[80vh]"
      style={{
        position: "relative",
        zIndex: 1,
        overflow: "visible",
        background: `linear-gradient(90deg, rgba(89,245,219,0.40) 0%, rgba(89,245,219,0.60) 50%, rgba(89,245,219,0.40) 100%), radial-gradient(circle at 60% 30%, rgba(16,163,138,0.12) 0%, rgba(16,163,138,0.03) 40%, transparent 0%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "multiply, lighten, multiply",
        width: "100%",
        borderRadius: 0,
      }}
    >
      {/* Floating HeadButton (green) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "-16px",
          transform: "translate(-50%, 0)",
          zIndex: 20,
          background: "white",
          borderRadius: "99999px",
          padding: 0,
          display: "inline-block",
        }}
      >
        <HeadButtonGreen>
          <span style={{ color: "#fff" }}>#Organization Hierarchy&nbsp;</span>
        </HeadButtonGreen>
      </div>
      <div
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero Section (customized for Feature 3) */}
        <HeroSection
          headline={
            <>
              Goodbye spreadsheets.
              <br />
              Hello, live org canvas.
            </>
          }
          description={
            "Stop juggling lists and guesswork, visually design teams, drag people into place from member pools, and save auditable snapshots so every restructure is deliberate and reversible."
          }
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
              colorScheme={greenColorScheme}
              title="Live Organization Canvas"
              description={
                "An interactive React Flow canvas for building and visualizing reporting relationships. Drag members from pools, nest teams, annotate connections inline, and preview layout changes in real time, then save snapshots for audit or rollback during restructures."
              }
              imageSrc={'/Canvas.png'}
              showPipeline={false}
            />
            <IntegrationsCard
              colorScheme={greenColorScheme}
              title="Member Pools & Sidebar Controls"
              description={
                "A centralized sidebar for managing member pools, teams, and workflows. Search, filter, and assign people quickly, then use drag‑and‑drop to place them on the canvas and bind them to workflows or approval flows."
              }
              footerText={"Visualize My Teams Now"}
            />
          </div>
          <MobileCard
            colorScheme={greenColorScheme}
            title="Drag & Connect Workflow"
            description={
              "Intuitive drag‑and‑drop placement from pools to canvas, connect nodes to define workflows, edit edge labels inline, and turn visual maps into actionable processes that stay in sync with your org data."
            }
            footerText={"One canvas. Zero guesswork."}
            imageSrc={'/Workflow3.png'}
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
              colorScheme={greenColorScheme}
              title="Manage Your Teams"
              description={
                "Create branches and manage pooled groups with confidence: add members, assign badges, and define workflows via modal editors. Persist hierarchy snapshots for traceability and safe rollback during structural changes."
              }
              buttonText={
                "Confident reorganizations, backed by snapshots"
              }
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
            colorScheme={greenColorScheme}
            badgeColorScheme={greenColorScheme}
            badgeText={"Visualize, Organize, Empower"}
            circle1Label={"Groups"}
            circle1Sentence={
              "Organize teams into compact group cards."
            }
            circle2Label={"Employees"}
            circle2Sentence={
              "Find people instantly with search and drag them onto the canvas."
            }
            circle3Label={"Workflows"}
            circle3Sentence={
              "Visual workflow cards summarize."
            }
            circle4Label={"Canvas"}
            circle4Sentence={
              "Toolbar and React Flow controls."
            }
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
              src={'/Talent Nest logo stroke.png'}
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
              <ArrowButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feature3;
