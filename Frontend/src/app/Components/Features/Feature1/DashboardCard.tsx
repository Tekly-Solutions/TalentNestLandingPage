import React from "react";
import Card from "./Card";
import BarItem from "./BarItem";

interface DashboardCardProps {
  colorScheme?: {
    gradient: string;
    shadow: string;
  };
  title?: string;
  description?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ 
  colorScheme, 
  title = "Your face is your ID",
  description = "Secure attendance starts with a smile. Our advanced AI-powered face recognition verifies each employee's identity instantly, ensuring only authorized team members can punch in or out. No more buddy punching, shared IDs, or attendance fraud just fast, accurate, touchless verification that's uniquely yours."
}) => {
  const defaultColors = {
    gradient: "linear-gradient(135deg, #fff9c4 0%, #ffe066 50%, #ffb300 100%)",
    shadow: "rgba(255,224,102,0.12)",
  };

  const colors = colorScheme || defaultColors;

  return (
    <Card
      className="dashboard-card"
      style={{
        background: "#fff",
        border: "1px solid #ececec",
        borderRadius: "12px",

        padding: "24px 20px",
        margin: 0,
        position: "relative",
        width: "auto",
        minHeight: "unset",
        maxWidth: "100%",
      }}
    >
      {/* Arrow Button at top right */}
      <div
        style={{ position: "absolute", top: 16, right: 16, zIndex: 2 }}
      ></div>
      <h3
        style={{
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: "14px",
          color: "#000",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        "{title}"
      </h3>
      <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
        {description}
      </p>
      <div style={{ marginTop: "30px", position: "relative" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "380px",
            margin: "0 auto",
            borderRadius: "24px 0 24px 0px",
            padding: "20px 15px 0",
            boxShadow: "none",
            position: "relative",
            backgroundImage: `${colors.gradient}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
            backgroundBlendMode: "multiply, lighten",
            backgroundAttachment: "fixed",
            zIndex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              marginBottom: "15px",
              color: "white",
            }}
          >
            Verification Pipeline
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "10px 10px 10px 10px",
              borderRadius: "24px 0 24px 0px",
              background: "#fff",

              marginBottom: "18px",
            }}
          >
            <BarItem label="Face Detected" width={75} color="#ffd93d" />
            <BarItem label="Identity Verified" width={65} color="#ffb347" />
            <BarItem label="Access Granted" width={85} color="#a8e6cf" />
            <BarItem label="Attendance Marked" width={90} color="#90caf9" />
            <BarItem label="Error / Retry" width={60} color="#b39ddb" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;
