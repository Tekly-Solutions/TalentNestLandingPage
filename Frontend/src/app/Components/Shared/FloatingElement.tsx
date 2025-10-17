"use client";

import React, { useEffect, useState } from "react";

type FloatingElementProps = {
  children: React.ReactNode;
  initialX?: number;
  initialY?: number;
  minInterval?: number;
  maxInterval?: number;
  duration?: number;
  opacity?: number;
  maxX?: number;
  maxY?: number;
  minX?: number;
  minY?: number;
  edgeFavorProbability?: number;
  rotationMultiplier?: number;
  className?: string;
};

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  initialX = 50,
  initialY = 50,
  minInterval = 3000,
  maxInterval = 5000,
  duration = 3000,
  opacity = 0.4,
  maxX = 700,
  maxY = 1100,
  minX = 30,
  minY = 30,
  edgeFavorProbability = 0.7,
  rotationMultiplier = 1,
  className = "",
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  // Helper function to generate random position
  const getRandomPosition = () => {
    const favorEdges = Math.random() < edgeFavorProbability;
    let newX, newY;

    if (favorEdges) {
      const edge = Math.floor(Math.random() * 4);

      switch (edge) {
        case 0: // Top edge
          newX = minX + Math.random() * (maxX - minX);
          newY = minY + Math.random() * 80;
          break;
        case 1: // Right edge
          newX = maxX - 100 + Math.random() * 80;
          newY = minY + Math.random() * (maxY - minY);
          break;
        case 2: // Bottom edge
          newX = minX + Math.random() * (maxX - minX);
          newY = maxY - 100 + Math.random() * 80;
          break;
        case 3: // Left edge
          newX = minX + Math.random() * 80;
          newY = minY + Math.random() * (maxY - minY);
          break;
        default:
          newX = minX + Math.random() * (maxX - minX);
          newY = minY + Math.random() * (maxY - minY);
      }
    } else {
      newX = minX + Math.random() * (maxX - minX);
      newY = minY + Math.random() * (maxY - minY);
    }

    return { x: newX, y: newY };
  };

  // Smooth animation helper
  const animateToPosition = (
    currentPos: { x: number; y: number },
    targetPos: { x: number; y: number }
  ) => {
    let startTime: number | null = null;
    const animDuration = duration + Math.random() * 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / animDuration, 1);

      const easeProgress =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      setPosition({
        x: currentPos.x + (targetPos.x - currentPos.x) * easeProgress,
        y: currentPos.y + (targetPos.y - currentPos.y) * easeProgress,
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const moveElement = () => {
      const target = getRandomPosition();
      animateToPosition(position, target);
    };

    const interval = setInterval(
      moveElement,
      minInterval + Math.random() * (maxInterval - minInterval)
    );

    return () => clearInterval(interval);
  }, [position, minInterval, maxInterval]);

  return (
    <div
      className={`absolute pointer-events-none z-0 transition-transform ease-in-out ${className}`}
      style={{
        opacity,
        transitionDuration: `${duration}ms`,
        transform: `translate(${position.x}px, ${position.y}px) rotate(${
          (position.x + position.y) * rotationMultiplier
        }deg)`,
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
