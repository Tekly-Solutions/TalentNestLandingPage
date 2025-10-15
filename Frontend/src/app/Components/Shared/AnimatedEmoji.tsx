"use client";

import React from "react";

interface AnimatedEmojiProps {
  isClicked?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedEmoji: React.FC<AnimatedEmojiProps> = ({
  isClicked = false,
  className = "",
  style,
}) => {
  return (
    <div
      className={`relative w-6 h-6 ${className}`}
      style={{ zIndex: 100, overflow: "visible", ...style }}
    >
      {/* Character head */}
      <div
        className={`w-6 h-6 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center relative overflow-visible transition-all duration-300 ${
          isClicked ? "animate-spin-once" : "animate-bounce"
        }`}
        style={{
          transform: isClicked ? "scale(1.3) rotate(360deg)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          zIndex: 100,
        }}
      >
        {/* Face */}
        <div className="relative">
          {/* Eyes */}
          <div className="flex gap-1 mb-0.5">
            <div
              className={`w-1 h-1 bg-white rounded-full ${
                isClicked ? "animate-none" : "animate-pulse"
              }`}
              style={{ transform: isClicked ? "scaleY(0.3)" : "scaleY(1)" }}
            ></div>
            <div
              className={`w-1 h-1 bg-white rounded-full ${
                isClicked ? "animate-none" : "animate-pulse"
              }`}
              style={{
                animationDelay: "0.5s",
                transform: isClicked ? "scaleY(0.3)" : "scaleY(1)",
              }}
            ></div>
          </div>
          {/* Mouth */}
          <div
            className={`w-2 h-1 border-b-2 border-white rounded-full transform`}
            style={{
              transform: isClicked
                ? "scale(1.2) translateY(-1px)"
                : "scale(0.75)",
              borderRadius: isClicked ? "50% 50% 50% 50%" : "50%",
            }}
          ></div>
        </div>
        {/* Floating particles */}
        <div
          className={`absolute -top-1 -right-1 w-1 h-1 bg-teal-600 rounded-full ${
            isClicked ? "animate-burst" : "animate-ping"
          }`}
          style={{
            transform: isClicked
              ? "translate(10px, -10px) scale(2)"
              : "translate(0, 0)",
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div
          className={`absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-teal-300 rounded-full ${
            isClicked ? "animate-burst" : "animate-ping"
          }`}
          style={{
            animationDelay: isClicked ? "0s" : "1s",
            transform: isClicked
              ? "translate(-10px, 10px) scale(2)"
              : "translate(0, 0)",
            transition: "all 0.3s ease-out",
          }}
        ></div>
        {isClicked && (
          <>
            <div className="absolute top-0 right-0 w-1 h-1 bg-teal-200 rounded-full animate-burst"></div>
            <div
              className="absolute bottom-0 left-1 w-0.5 h-0.5 bg-teal-300 rounded-full animate-burst"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="absolute top-1 left-0 w-0.5 h-0.5 bg-teal-400 rounded-full animate-burst"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </>
        )}
      </div>
      {/* Waving hand */}
      <div
        className="absolute -top-0.5 -right-1.5 text-sm"
        style={{
          animation: isClicked
            ? "wave-excited 0.3s ease-in-out 2"
            : "wave 1s ease-in-out infinite",
          transformOrigin: "70% 70%",
          zIndex: 101,
          color: "white",
        }}
      >
        👋
      </div>

      {/* Component-scoped styles for keyframes */}
      <style jsx>{`
        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }
        @keyframes wave-excited {
          0% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-30deg) scale(1.3);
          }
          50% {
            transform: rotate(30deg) scale(1.3);
          }
          75% {
            transform: rotate(-30deg) scale(1.3);
          }
          100% {
            transform: rotate(0deg) scale(1);
          }
        }
        @keyframes burst {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: scale(3);
          }
        }
        .animate-burst {
          animation: burst 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AnimatedEmoji;
