// GrainyBullet component for reusable bullet icons
const GrainyBullet: React.FC<{
  gradient: string;
  boxShadow: string;
  filterId: string;
  svgColor?: string;
}> = ({ gradient, boxShadow, filterId, svgColor }) => (
  <span
    style={{
      display: "inline-block",
      width: "22px",
      height: "22px",
      position: "relative",
      marginRight: "12px",
      borderRadius: "50%",
      overflow: "hidden",
    }}
  >
    <span
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",

        opacity: 0.25,
      }}
    />
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        opacity: 0.18,
        pointerEvents: "none",
      }}
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <filter id={filterId} x="0" y="0">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.2"
          numOctaves="2"
          seed="3"
        />
      </filter>
      <circle
        cx="11"
        cy="11"
        r="11"
        filter={`url(#${filterId})`}
        fill={svgColor || undefined}
      />
    </svg>
  </span>
);
import React from "react";
import Card from "./Card";
import CircularBackButton from "./ArrowButton";

const IntegrationsCard: React.FC = () => (
  <Card
    className="integrations-card"
    style={{
      padding: "28px 24px 24px 24px",
      margin: 0,
      position: "relative",
      width: "auto",
      minHeight: "unset",
      maxWidth: "100%",
      overflow: "hidden",
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
      {/* Gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, #ffe066 0%, #ffb300 50%, #bfa100 100%)",
          opacity: 0.25,
        }}
      />
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
        <filter id="noise-bar" x="0" y="0">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="2"
            seed="3"
          />
        </filter>
        <rect width="400" height="14" filter="url(#noise-bar)" />
      </svg>
    </div>
    <h3
      style={{
        fontSize: "24px",
        fontWeight: 700,
        marginBottom: "14px",
        color: "#000",
        textAlign: "center",
        letterSpacing: "-0.5px",
      }}
    >
      “Know more. Manage better.”
    </h3>
    <ul
      style={{
        fontSize: "16px",
        lineHeight: 1.9,
        color: "#222",
        paddingLeft: "0px",
        marginBottom: 0,
        listStyle: "none",
      }}
    >
      <li
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        The admin dashboard gives you complete visibility over your workforce —
        view who’s checked in, track late arrivals, analyze work hours, and
        ensure compliance with site-specific geofences. Visual insights and
        exportable reports make it easy to manage productivity and attendance
        trends at a glance.
      </li>
      <li
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      ></li>
      <li
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      ></li>
      <li
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      ></li>
    </ul>
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "2px",
      }}
    >
      <a
        href="#"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "15px",
          color: "#000",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Data-driven decisions backed by real-time insights.
        <span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              opacity: 1,
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.6))",
            }}
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </div>
  </Card>
);

export default IntegrationsCard;
