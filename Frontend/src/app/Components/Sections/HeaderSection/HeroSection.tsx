"use client";

import React from "react";
import GradientHeadline from "../../Shared/GradientHeadline";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen pt-20 bg-white">
      <style>{`
        .avatar-container {
          --s: 120px;
          --g: 14px;
          
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
          width: var(--s);
          height: var(--s);
          border-radius: 50%;
          cursor: pointer;
          border: 4px solid white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
          object-fit: cover;
        }

        .avatar-container img:nth-child(2) {
          transform: rotate(0deg) translate(180px) rotate(0deg);
        }
        .avatar-container img:nth-child(2):hover {
          transform: rotate(0deg) translate(180px) rotate(0deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }
        
        .avatar-container img:nth-child(3) {
          transform: rotate(45deg) translate(180px) rotate(-45deg);
        }
        .avatar-container img:nth-child(3):hover {
          transform: rotate(45deg) translate(180px) rotate(-45deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }
        
        .avatar-container img:nth-child(4) {
          transform: rotate(90deg) translate(180px) rotate(-90deg);
        }
        .avatar-container img:nth-child(4):hover {
          transform: rotate(90deg) translate(180px) rotate(-90deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }
        
        .avatar-container img:nth-child(5) {
          transform: rotate(135deg) translate(180px) rotate(-135deg);
        }
        .avatar-container img:nth-child(5):hover {
          transform: rotate(135deg) translate(180px) rotate(-135deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }
        
        .avatar-container img:nth-child(6) {
          transform: rotate(180deg) translate(180px) rotate(-180deg);
        }
        .avatar-container img:nth-child(6):hover {
          transform: rotate(180deg) translate(180px) rotate(-180deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }
        
        .avatar-container img:nth-child(7) {
          transform: rotate(225deg) translate(180px) rotate(-225deg);
        }
        .avatar-container img:nth-child(7):hover {
          transform: rotate(225deg) translate(180px) rotate(-225deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }
        
        .avatar-container img:nth-child(8) {
          transform: rotate(270deg) translate(180px) rotate(-270deg);
        }
        .avatar-container img:nth-child(8):hover {
          transform: rotate(270deg) translate(180px) rotate(-270deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }
        
        .avatar-container img:nth-child(9) {
          transform: rotate(315deg) translate(180px) rotate(-315deg);
        }
        .avatar-container img:nth-child(9):hover {
          transform: rotate(315deg) translate(180px) rotate(-315deg) scale(1.2);
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container.reverse img:nth-child(1) {
          transform: rotate(0deg) translate(180px) rotate(0deg);
        }
        .avatar-container.reverse img:nth-child(2) {
          transform: rotate(60deg) translate(180px) rotate(-60deg);
        }
        .avatar-container.reverse img:nth-child(3) {
          transform: rotate(120deg) translate(180px) rotate(-120deg);
        }
        .avatar-container.reverse img:nth-child(4) {
          transform: rotate(180deg) translate(180px) rotate(-180deg);
        }
        .avatar-container.reverse img:nth-child(5) {
          transform: rotate(240deg) translate(180px) rotate(-240deg);
        }
        .avatar-container.reverse img:nth-child(6) {
          transform: rotate(300deg) translate(180px) rotate(-300deg);
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
          <span
            style={{
              color: "#006B4E",
            }}
          >
            Nest
          </span>
        </h1>
      </div>

      <div className="avatar-container">
        {/* Center "People" text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
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
        <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=10" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=9" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=2" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=8" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=25" alt="Avatar" />
        <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" />
      </div>
    </section>
  );
};

export default HeroSection;
