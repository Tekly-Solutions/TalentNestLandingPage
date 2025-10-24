import React from "react";
import Card from "./Card";

const MobileCard: React.FC = () => (
  <Card
    className="mobile-card"
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
    <h3
      style={{
        fontSize: "24px",
        fontWeight: 700,
        marginBottom: "14px",
        color: "#000",
      }}
    >
      Custom Time Off and PTO Management
    </h3>
    <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#333" }}>
      Manage paid time off (PTO), vacation days, and sick leave with
      flexibility. Create personalized time-off policies that automatically sync
      with your geofence-enabled clock-ins, making leave management simple and
      efficient.
    </p>
    <div style={{ marginTop: "25px", textAlign: "center" }}>
      <div
        style={{
          display: "inline-block",
          width: "200px",
          background:
            "linear-gradient(135deg, #fff9c4 0%, #ffe066 50%, #ffb300 100%)",
          borderRadius: "28px",
          padding: "12px",
          boxShadow:
            "0 15px 40px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            height: "320px",
            padding: "15px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "15px",
            }}
          >
            Time Off
          </div>
          <div style={{ fontSize: "11px", color: "#666", lineHeight: 1.8 }}>
            <div style={{ marginBottom: "8px" }}>Your time off</div>
            <div style={{ marginBottom: "8px" }}>
              Total time off: <strong>2</strong>
            </div>
            <div style={{ marginBottom: "8px" }}>
              Total hours: <strong>16</strong>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "11px",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          🍎 App Store
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
            padding: "8px 16px",
            fontSize: "11px",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          ▶ Google Play
        </div>
      </div>
    </div>
    <a
      href="#"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "15px",
        fontSize: "15px",
        color: "#000",
        textDecoration: "none",
        fontWeight: 500,
      }}
    >
      Download on iOS or Android →
    </a>
  </Card>
);

export default MobileCard;
