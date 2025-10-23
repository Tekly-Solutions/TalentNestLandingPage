import React from "react";
import Card from "./Card";
import BarItem from "./BarItem";

const DashboardCard: React.FC = () => (
  <Card className="dashboard-card">
    <h3
      style={{
        fontSize: "24px",
        fontWeight: 700,
        marginBottom: "14px",
        color: "#000",
      }}
    >
      Powerful reporting tools
    </h3>
    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
      Get visibility into your work, your process, and your results with
      pre-built reporting. Share beautiful reports with your team to keep your
      business on track, or create custom automations using our API.
    </p>
    <div style={{ marginTop: "30px", position: "relative" }}>
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          margin: "0 auto",
          background:
            "linear-gradient(135deg, #4a5f4a 0%, #5a7055 50%, #6b8e6b 100%)",
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

export default DashboardCard;
