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
      boxShadow,
    }}
  >
    <span
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: gradient,
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
      background: "#fff",
      border: "1px solid #ececec",
      borderRadius: "16px",
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
      No More Attendance Headaches
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
        <GrainyBullet
          gradient="linear-gradient(135deg, #ffe066 60%, #ffb300 100%)"
          boxShadow="0 2px 6px rgba(255,224,102,0.18)"
          filterId="noise-bullet1"
        />
        Buddy-punching?{" "}
        <span style={{ color: "#222", fontWeight: 600, marginLeft: 4 }}>
          Eliminated.
        </span>
      </li>
      <li
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        <GrainyBullet
          gradient="linear-gradient(135deg, #ffd93d 60%, #bfa100 100%)"
          boxShadow="0 2px 6px rgba(255,217,61,0.18)"
          filterId="noise-bullet2"
        />
        Unknown clock-ins from outside work-zone?{" "}
        <span style={{ color: "#222", fontWeight: 600, marginLeft: 4 }}>
          Gone.
        </span>
      </li>
      <li
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        <GrainyBullet
          gradient="linear-gradient(135deg, #90ee90 60%, #43a047 100%)"
          boxShadow="0 2px 6px rgba(144,238,144,0.18)"
          filterId="noise-bullet3"
        />
        Manual attendance logs?{" "}
        <span style={{ color: "#222", fontWeight: 600, marginLeft: 4 }}>
          Automated.
        </span>
      </li>
      <li
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        <GrainyBullet
          gradient="linear-gradient(135deg, #90caf9 60%, #1976d2 100%)"
          boxShadow="0 2px 6px rgba(144,202,249,0.18)"
          filterId="noise-bullet4"
        />
        HR audits and discrepancies?{" "}
        <span style={{ color: "#222", fontWeight: 600, marginLeft: 4 }}>
          Reduced.
        </span>
      </li>
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
        <span>
          <CircularBackButton />
        </span>
      </a>
    </div>
  </Card>
);

export default IntegrationsCard;
