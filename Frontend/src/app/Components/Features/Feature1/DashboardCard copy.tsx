import React from "react";
import Card from "./Card";
import BarItem from "./BarItem";

const DashboardCard: React.FC = () => {
  return (
    <Card
      className="dashboard-card"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255,224,102,0.35) 0%, rgba(255,179,0,0.35) 50%, rgba(191,161,0,0.35) 100%), radial-gradient(circle at 60% 30%, rgba(255, 224, 102, 0.25) 0%, rgba(255, 224, 102, 0.08) 40%, transparent 0%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
        backgroundBlendMode: "multiply, lighten, multiply",
        backgroundColor: "#fff",
        backgroundAttachment: "fixed",
        border: "1px solid #ececec",
        borderRadius: "12px",
        boxShadow:
          "inset 0 2px 12px 0 rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
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
        “Your face is your ID”
      </h3>
      <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
        Secure attendance starts with a smile. Our advanced AI-powered face
        recognition verifies each employee’s identity instantly, ensuring only
        authorized team members can punch in or out. No more buddy punching,
        shared IDs, or attendance fraud just fast, accurate, touchless
        verification that’s uniquely yours.
      </p>
      <div style={{ marginTop: "30px", position: "relative" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "380px",
            margin: "0 auto",
            borderRadius: "12px 12px 0 0",
            padding: "20px 15px 0",
            boxShadow: "none",
            position: "relative",
            background: `linear-gradient(135deg, #fff9c4 0%, #ffe066 50%, #ffb300 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
            backgroundBlendMode: "multiply, lighten",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              marginBottom: "15px",
              color: "#333",
            }}
          >
            Hiring Pipeline
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "10px 0",
            }}
          >
            <BarItem label="New Leads" width={75} color="#ffd93d" />
            <BarItem label="Screening" width={65} color="#ffb347" />
            <BarItem label="Interview" width={85} color="#a8e6cf" />
            <BarItem label="Offer" width={90} color="#90caf9" />
            <BarItem label="Hired" width={60} color="#b39ddb" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;
