import React from "react";
import Card from "./Card";
import StatRow from "./StatRow";

const ResponseTimesCard: React.FC = () => (
  <div className="relative w-full p-0" style={{ minHeight: "320px" }}>
    {/* Background pattern or gradient */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, #ffe066 0%, #ffb300 50%, #bfa100 100%)",
        opacity: 0.25,
        zIndex: 0,
        borderRadius: "12px",
      }}
    ></div>
    <div
      className="relative z-10 grid grid-cols-2 gap-8 items-center"
      style={{ height: "100%" }}
    >
      {/* Card content (opaque) */}
      <div
        className="bg-white p-8 rounded-lg shadow-lg"
        style={{ minHeight: "260px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ width: "fit-content" }}
          >
            {/* Transparent cut-out rounded rectangle */}
            <div
              className="absolute inset-0"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                zIndex: 0,
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
                  opacity: 0.35,
                }}
              />
              {/* SVG noise overlay for grainy effect */}
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0.28,
                  pointerEvents: "none",
                  borderRadius: "20px",
                }}
                viewBox="0 0 200 60"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <filter id="noise" x="0" y="0">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="2"
                    seed="2"
                  />
                </filter>
                <rect width="200" height="60" filter="url(#noise)" />
              </svg>
            </div>
            <div
              className="relative z-10"
              style={{
                display: "inline-block",
                background: "transparent",
                color: "white",
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              Average time to first reply
            </div>
          </div>
          {/* Gradient bar under label */}
          <div
            style={{
              width: "80%",
              height: "6px",
              marginTop: "8px",
              borderRadius: "6px",
              background:
                "linear-gradient(90deg, #ffe066 0%, #ffb300 50%, #bfa100 100%)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            marginTop: "20px",
          }}
        >
          <StatRow
            icon="Chat"
            name="Chat"
            time="24s"
            iconBg="#ff6b9d"
            iconColor="white"
          />
          <StatRow
            icon="Phone"
            name="Phone"
            time="35s"
            iconBg="#ffd93d"
            iconColor="white"
          />
          <StatRow
            icon="Email"
            name="Email"
            time="1m 12s"
            iconBg="#90caf9"
            iconColor="white"
          />
        </div>
      </div>
      {/* Transparent cut-out area */}
      <div className="bg-transparent border border-white/30 rounded-lg p-8 text-black flex flex-col justify-center items-center min-h-[260px]">
        <h2 className="text-2xl font-semibold mb-2">
          See TalentNest in Action
        </h2>
        <p className="mt-3 text-base">
          Experience how TalentNest empowers your team to grow and thrive.
        </p>
      </div>
    </div>
  </div>
);

export default ResponseTimesCard;
