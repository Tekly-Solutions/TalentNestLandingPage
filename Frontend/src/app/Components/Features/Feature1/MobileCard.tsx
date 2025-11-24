"use client";
import FaceRecognitionUI from "./FaceRecognition";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Card: React.FC<CardProps> = ({ children, className, style }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

interface MobileCardProps {
  colorScheme?: {
    gradient: string;
    shadow: string;
  };
  title?: string;
  description?: string;
  footerText?: string;
}

const MobileCard: React.FC<MobileCardProps> = ({ 
  colorScheme,
  title = "Attendance in one tap",
  description = "With a single tap, employees can punch in or out through the mobile app the camera opens automatically, performs facial verification, and records the time and location instantly. No complex steps, no wasted time just smooth, instant check-ins that keep everyone on track."
  , footerText = "Attendance made effortless→"
}) => {
  const defaultColors = {
    gradient: "linear-gradient(135deg, #fff9c4 0%, #ffe066 50%, #ffb300 100%)",
    shadow: "rgba(255,224,102,0.12)",
  };

  const colors = colorScheme || defaultColors;

  return (
    <>
      <Card
        className="mobile-card p-4 sm:p-6 md:p-8 lg:p-6 xl:p-5"
        style={{
          background: "#fff",
          border: "1px solid #ececec",
          borderRadius: "12px",

          margin: 0,
          position: "relative",
          width: "auto",
          minHeight: "unset",
          maxWidth: "100%",
          overflow: "visible",
        }}
      >
        <h3
          className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center italic text-black"
          style={{
            marginBottom: "16px",
            color: "#000",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          "{title}"
        </h3>

        <p className="text-sm sm:text-base leading-relaxed text-gray-700">
          {description}
        </p>

        <span className="attendance-effortless">
          {footerText}
        </span>

        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
          <div
            className="grainy-parallax-card inline-block w-32 sm:w-36 md:w-40"
            style={{
              backgroundImage: `${colors.gradient}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
              borderRadius: "22px",
              padding: "10px",
              boxShadow:
                "0 12px 32px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.15)",
              position: "relative",
              overflow: "hidden",
              backgroundBlendMode: "multiply, lighten",
              backgroundAttachment: "fixed",
            }}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              card.style.transform = `perspective(600px) rotateY(${
                (x - 80) / 30
              }deg) rotateX(${-(y - 130) / 30}deg)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
            }}
          >
            {/* Grainy SVG overlay */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                borderRadius: "22px",
                zIndex: 1,
                mixBlendMode: "multiply",
                opacity: 0.18,
                marginTop: "100px",
              }}
              viewBox="0 0 160 280"
              xmlns="http://www.w3.org/2000/svg"
            >
              <filter id="grain" x="0" y="0">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.8"
                  numOctaves="2"
                  seed="2"
                />
                <feColorMatrix type="saturate" values="0" />
              </filter>
              <rect width="160" height="280" filter="url(#grain)" />
            </svg>
            <div
              style={{
                background: "white",
                marginTop: "10px",
                height: "260px",
                borderRadius: "20px",
                margin: "0 0 0 0px",

                position: "relative",
                zIndex: 2,
              }}
            >
              <div
                className="scale-[0.29] sm:scale-[0.4] md:scale-[0.46] lg:scale-[0.5]"
                style={{
                  transformOrigin: "top left",
                }}
              >
                <FaceRecognitionUI />
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/app/idXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundImage: `${colors.gradient}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: 600,
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                color: "#000",
                backgroundBlendMode: "multiply, lighten",
              }}
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                style={{ height: "16px" }}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.example.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundImage: `${colors.gradient}, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.9'/%3E%3C/svg%3E")`,
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: 600,
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                color: "#000",
                backgroundBlendMode: "multiply, lighten",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={{ height: "16px" }}
              />
            </a>
          </div>
        </div>

        <a
          href="#"
          style={{
            display: "block",
            alignItems: "center",
            gap: "8px",
            marginTop: "15px",
            fontSize: "15px",
            color: "#000",
            textDecoration: "none",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Download on iOS or Android
        </a>
      </Card>

      <style>{`
      .attendance-effortless {
        font-size: 15px;
        line-height: 1.6;
        color: #333;
        text-align: right;
        position: absolute;
        right: 20px;
        bottom: 18px;
        margin: 0;
        width: auto;
        background: none;
        z-index: 10;
        border-radius: 8px;
        padding: 4px 12px;
        cursor: pointer;
        transition: background 0.2s;
      }
      .attendance-effortless:hover {
        background: #fff9c4;
        backgroundBlendMode: "multiply, lighten",
      }
    `}</style>
    </>
  );
};

export default MobileCard;
