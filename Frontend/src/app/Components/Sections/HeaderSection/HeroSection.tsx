"use client";

import React from "react";
import GradientHeadline from "../../Shared/GradientHeadline";

const HeroSection: React.FC = () => {
  const avatarPositions: [number, number, number][] = [
    [430, 250, 0],    // rotate(0deg)
    [377, 377, 45],   // rotate(45deg)
    [250, 430, 90],   // rotate(90deg)
    [123, 377, 135],  // rotate(135deg)
    [70,  250, 180],  // rotate(180deg)
    [123, 123, 225],  // rotate(225deg)
    [250, 70,  270],  // rotate(270deg)
    [377, 123, 315],  // rotate(315deg)
  ];

  return (
    <section className="relative w-full min-h-screen pt-20 bg-white">
      <style>{`
        .avatar-container {
          position: absolute;
          top: 70px;
          right: 80px;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .avatar-container img {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
          object-fit: cover;
          z-index: 2;
        }

        .avatar-container img:nth-child(3) {
          transform: rotate(0deg) translate(180px) rotate(0deg);
        }
        .avatar-container img:nth-child(3):hover {
          transform: rotate(0deg) translate(180px) rotate(0deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container img:nth-child(4) {
          transform: rotate(45deg) translate(180px) rotate(-45deg);
        }
        .avatar-container img:nth-child(4):hover {
          transform: rotate(45deg) translate(180px) rotate(-45deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container img:nth-child(5) {
          transform: rotate(90deg) translate(180px) rotate(-90deg);
        }
        .avatar-container img:nth-child(5):hover {
          transform: rotate(90deg) translate(180px) rotate(-90deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container img:nth-child(6) {
          transform: rotate(135deg) translate(180px) rotate(-135deg);
        }
        .avatar-container img:nth-child(6):hover {
          transform: rotate(135deg) translate(180px) rotate(-135deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container img:nth-child(7) {
          transform: rotate(180deg) translate(180px) rotate(-180deg);
        }
        .avatar-container img:nth-child(7):hover {
          transform: rotate(180deg) translate(180px) rotate(-180deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container img:nth-child(8) {
          transform: rotate(225deg) translate(180px) rotate(-225deg);
        }
        .avatar-container img:nth-child(8):hover {
          transform: rotate(225deg) translate(180px) rotate(-225deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container img:nth-child(9) {
          transform: rotate(270deg) translate(180px) rotate(-270deg);
        }
        .avatar-container img:nth-child(9):hover {
          transform: rotate(270deg) translate(180px) rotate(-270deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container img:nth-child(10) {
          transform: rotate(315deg) translate(180px) rotate(-315deg);
        }
        .avatar-container img:nth-child(10):hover {
          transform: rotate(315deg) translate(180px) rotate(-315deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        @keyframes dashFlow {
          to {
            stroke-dashoffset: -18;
          }
        }

        .connector-line {
          animation: dashFlow 1.8s linear infinite;
        }
      `}</style>

      {/* Left side "Talent Nest" text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "80px",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#000",
            margin: 0,
            fontFamily: "'Monument Extended', sans-serif",
          }}
        >
          Talent{" "}
          <span style={{ color: "#006B4E" }}>Nest</span>
        </h1>
      </div>

      <div className="avatar-container">

        {/* SVG connecting lines — one gradient per line using userSpaceOnUse */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 1,
          }}
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {avatarPositions.map(([x2, y2, angle]) => (
              <linearGradient
                key={`grad-${angle}`}
                id={`lineGrad-${angle}`}
                gradientUnits="userSpaceOnUse"
                x1="250" y1="250"
                x2={x2}  y2={y2}
              >
                <stop offset="0%"   stopColor="#007E7E" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#33B88C" stopOpacity="0.25" />
              </linearGradient>
            ))}
          </defs>

          {/* One line per avatar — stops 62px short of avatar center (avatar radius = 60px) */}
          {avatarPositions.map(([x2, y2, angle], i) => {
            const dx = x2 - 250;
            const dy = y2 - 250;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const stopAt = 62; // avatar radius + small gap
            const ex = x2 - (dx / dist) * stopAt;
            const ey = y2 - (dy / dist) * stopAt;

            return (
              <line
                key={angle}
                x1="250"
                y1="250"
                x2={ex}
                y2={ey}
                stroke={`url(#lineGrad-${angle})`}
                strokeWidth="1.5"
                strokeDasharray="5 4"
                strokeLinecap="round"
                className="connector-line"
                style={{ animationDelay: `${i * 0.22}s` }}
              />
            );
          })}

          {/* Center anchor dot */}
          <circle cx="250" cy="250" r="5" fill="#007E7E" opacity="0.9" />
        </svg>

        {/* Center "People" text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg, #007E7E 0%, #33B88C 25%, #A9EBA9 50%, #33B88C 75%, #00A3A3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "48px",
              fontWeight: "bold",
              fontFamily: "'Monument Extended', sans-serif",
            }}
          >
            People
          </span>
        </div>

        {/* 8 avatars — nth-child starts at 3 (SVG=1, center div=2) */}
        <img src="https://i.pravatar.cc/150?img=3"  alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=10" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=5"  alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=9"  alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=2"  alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=8"  alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=25" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" />
      </div>
    </section>
  );
};

export default HeroSection;