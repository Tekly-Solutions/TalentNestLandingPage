"use client";

import React from "react";
import Card from "./Card";

const SecurityCard: React.FC = () => (
  <Card
    className="security-card"
    style={{
      background: "#fff",
      border: "1px solid #ececec",
      borderRadius: "12px",
      boxShadow:
        "inset 0 2px 12px 0 rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
      padding: "24px 20px",
      margin: 0,
      position: "relative",
      gridColumn: "1 / -1",
    }}
  >
    {/* Gradient header bar */}
    <div
      style={{
        width: "100%",
        height: "14px",
        borderRadius: "10px",
        position: "relative",
        marginBottom: "18px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(255,224,102,0.12)",
      }}
    >
      {/* SVG noise overlay for grainy effect */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.18,
          pointerEvents: "none",
          borderRadius: "10px",
        }}
        viewBox="0 0 400 14"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <filter id="security-noise-bar" x="0" y="0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="2"
            seed="3"
          />
        </filter>
        <rect width="400" height="14" filter="url(#security-noise-bar)" />
      </svg>
    </div>
    <h3
      style={{
        fontSize: "24px",
        fontWeight: 700,
        marginBottom: "14px",
        color: "#000",
        textAlign: "center",
      }}
    >
      "Built for trust and protection"
    </h3>
    <p
      style={{
        fontSize: "15px",
        lineHeight: 1.6,
        color: "#333",
        textAlign: "center",
      }}
    >
      TalentNest ensures your employee data is encrypted, protected, and fully
      compliant with modern security standards. Every punch-in, location ping,
      and face scan is logged in a secure audit trail, giving you accountability
      and transparency across the system.
    </p>
    <button
      style={{
        margin: "16px auto 0",
        padding: "12px 24px",
        background:
          "linear-gradient(135deg, #fff9c4 0%, #ffe066 50%, #ffb300 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E\")",
        backgroundBlendMode: "multiply, lighten",
        backgroundAttachment: "fixed",
        backgroundClip: "border-box",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        boxShadow:
          "15px 4px 20px 0px rgba(0,0,0,0.32), 0px 4px 4px 0px rgba(0,0,0,0.25), inset 0px 4px 4px 0px rgba(0,0,0,0.25)",
        color: "#000",
        border: "none",
        borderRadius: "50px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        display: "block",
        transition: "all 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `linear-gradient(90deg, #fafad2 0%, #fffacd 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`;
        e.currentTarget.style.boxShadow =
          "20px 6px 25px 0px rgba(0,0,0,0.4), 0px 6px 6px 0px rgba(0,0,0,0.3), inset 0px 6px 6px 0px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = `linear-gradient(90deg, #fafad2 0%, #fffacd 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`;
        e.currentTarget.style.boxShadow =
          "15px 4px 20px 0px rgba(0,0,0,0.32), 0px 4px 4px 0px rgba(0,0,0,0.25), inset 0px 4px 4px 0px rgba(0,0,0,0.25)";
      }}
    >
      Safe, compliant, and worry-free attendance management →
    </button>
  </Card>
);

export default SecurityCard;
