import React, { useMemo } from "react";

type FloatingWordsBackgroundProps = {
  words?: string[];
  count?: number; // how many words to render
  className?: string;
  minSize?: number; // rem
  maxSize?: number; // rem
  minOpacity?: number;
  maxOpacity?: number;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const FloatingWordsBackground: React.FC<FloatingWordsBackgroundProps> = ({
  words = ["HR", "Talent", "Nest"],
  count = 18,
  className = "",
  minSize = 1.25,
  maxSize = 3.5,
  minOpacity = 0.06,
  maxOpacity = 0.12,
}) => {
  const items = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const word = words[Math.floor(Math.random() * words.length)];
      const top = rand(-10, 90); // allow slight overflow for nicer float
      const left = rand(0, 90);
      const size = rand(minSize, maxSize);
      const opacity = rand(minOpacity, maxOpacity);
      const duration = rand(12, 28); // slow drift
      const delay = rand(-20, 0);
      const translateY = rand(-20, 20); // px range
      const translateX = rand(-30, 30);
      const rotate = rand(-10, 10);
      return {
        key: `${i}-${word}`,
        word,
        style: {
          top: `${top}%`,
          left: `${left}%`,
          fontSize: `${size}rem`,
          opacity,
          animation: `twinkle ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
          transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
        } as React.CSSProperties,
      };
    });
  }, [count, words, minSize, maxSize, minOpacity, maxOpacity]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      style={{ zIndex: 0 }}
    >
      <style>
        {`
        @keyframes twinkle {
          0% { transform: translate(0,0) scale(1); opacity: 0.04; }
          50% { transform: translate(2px, -2px) scale(1.02); opacity: 0.12; }
          100% { transform: translate(0,0) scale(1); opacity: 0.06; }
        }
      `}
      </style>
      {items.map((it) => (
        <span
          key={it.key}
          className="absolute font-semibold text-white whitespace-nowrap"
          style={it.style}
        >
          {it.word}
        </span>
      ))}
    </div>
  );
};

export default FloatingWordsBackground;
