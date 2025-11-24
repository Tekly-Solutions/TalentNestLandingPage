"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 bg-white">
      <style>{`
        .avatar-container {
          --s: 120px;
          --g: 14px;
          
          position: relative;
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 20px 0;
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

        .avatar-container img:hover {
          transform: scale(1.2) !important;
          z-index: 10;
          box-shadow: 0 8px 24px rgba(0,0,0,0.6);
        }

        .avatar-container img:nth-child(1) {
          transform: rotate(0deg) translate(180px) rotate(0deg);
        }
        .avatar-container img:nth-child(2) {
          transform: rotate(45deg) translate(180px) rotate(-45deg);
        }
        .avatar-container img:nth-child(3) {
          transform: rotate(90deg) translate(180px) rotate(-90deg);
        }
        .avatar-container img:nth-child(4) {
          transform: rotate(135deg) translate(180px) rotate(-135deg);
        }
        .avatar-container img:nth-child(5) {
          transform: rotate(180deg) translate(180px) rotate(-180deg);
        }
        .avatar-container img:nth-child(6) {
          transform: rotate(225deg) translate(180px) rotate(-225deg);
        }
        .avatar-container img:nth-child(7) {
          transform: rotate(270deg) translate(180px) rotate(-270deg);
        }
        .avatar-container img:nth-child(8) {
          transform: rotate(315deg) translate(180px) rotate(-315deg);
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

      <div className="relative z-10 flex items-center justify-end min-h-screen py-20 pr-20">
        <div className="avatar-container">
          <img src="https://i.pravatar.cc/150?img=3" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=10" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=9" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=2" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=8" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=25" alt="Avatar" />
          <img src="https://i.pravatar.cc/150?img=32" alt="Avatar" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
