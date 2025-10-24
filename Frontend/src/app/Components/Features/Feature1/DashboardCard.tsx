import React from "react";
import Card from "./Card";
import BarItem from "./BarItem";


const DashboardCard: React.FC = () => {
  return (
    <Card
      className="dashboard-card"
      style={{
        background: "#fff",
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
      <div style={{ position: "absolute", top: 16, right: 16, zIndex: 2 }}>
        
      </div>
      <h3
        style={{
          fontSize: "24px",
          fontWeight: 700,
          marginBottom: "14px",
          color: "#000",
        }}
      >
        Effortless Time Tracking with Geofencing and Face Recognition
      </h3>
      <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
        Track employee attendance with ease using our advanced geofencing and
        face recognition technology. Automatically log clock-ins and outs,
        ensuring accurate, real-time data while preventing buddy punching.
      </p>
      <div style={{ marginTop: "30px", position: "relative" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "380px",
            margin: "0 auto",
            background:
              "linear-gradient(135deg, #fff9c4 0%, #ffe066 50%, #ffb300 100%)",
            borderRadius: "12px 12px 0 0",
            padding: "20px 15px 0",
            boxShadow:
              "0 20px 60px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "4px",
              padding: "15px",
              height: "240px",
              boxShadow: "none",
              border: "1px solid #f6f6f6",
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
      </div>
    </Card>
  );
};

export default DashboardCard;
