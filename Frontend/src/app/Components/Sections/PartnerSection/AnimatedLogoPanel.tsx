"use client";

import React from "react";
import { motion } from "framer-motion";

const allLogos = [
  "/Logos/1681039182chatgpt-logo-with-name-removebg-preview.png",
  "/Logos/abstract-by-tornike-uchava-dribbble-removebg-preview.png",
  "/Logos/abstract-by-tornike-uchava-dribbble.png",
  "/Logos/adidas-white-logo-hd-png-701751694777208ogwssxbgpj-removebg-preview.png",
  "/Logos/images (7).png",
  "/Logos/images-removbg-preview.png",
  "/Logos/images-removebg-preview.png",
  "/Logos/images__1_-removebg-preview.png",
  "/Logos/images__2_-removebg-preview.png",
  "/Logos/images__3_-removebg-preview.png",
  "/Logos/images__4_-removebg-preview.png",
  "/Logos/images__5_-removebg-preview.png",
  "/Logos/images__6_-removebg-preview.png",
  "/Logos/images__7_-removebg-preview.png",
  "/Logos/kisspng-lyft-hotel-real-estate-company-industry-5adc702f026260.0995092215243960790098-removebg-preview.png",
  "/Logos/kisspng-white-house-hotel-chevrolet-small-block-engine-car-aphex-twin-5b124f92dabd52.414233561527926674896-removebg-preview (1).png",
  "/Logos/kisspng-white-house-logo-organization-lyft-industry-high-grade-certificate-5b067995b15745.1525366815271509977264-removebg-preview.png",
  "/Logos/logo-brand-white-png-favpng-hXidugwVabhGg1pjY5nHpfaDv-removebg-preview.png",
  "/Logos/samsung-white-logo-png-image-701751694714054zbxkqcqh9p-removebg-preview.png",
];

const logosRow1 = allLogos.slice(0, 7);
const logosRow2 = allLogos.slice(7, 14);
const logosRow3 = allLogos.slice(14);

const ANIMATION_DURATION = 30;

const LogoRow: React.FC<{ reverse?: boolean; logos: string[] }> = ({
  reverse = false,
  logos,
}) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Direction based on reverse prop
  const effectiveReverse = reverse;

  const duration = ANIMATION_DURATION * 3;

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-4 py-6"
        animate={{
          x: effectiveReverse
            ? [0, -logos.length * 100]
            : [-logos.length * 100, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicatedLogos.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 h-12 sm:h-14 w-24 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`logo-${i}`}
              className="h-full w-full object-contain pointer-events-none select-none"
              style={{
                transform: i === logos.length ? "scale(1.5)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const AnimatedLogoPanel: React.FC<{ pauseOnLogoClick?: boolean }> = ({
  pauseOnLogoClick,
}) => {
  return (
    <div className="w-full py-8 px-6">
      <div className="mb-4">
        <LogoRow logos={logosRow1} />
      </div>
      <div className="mb-4">
        <LogoRow reverse logos={logosRow2} />
      </div>
      <div>
        <LogoRow logos={logosRow3} />
      </div>
    </div>
  );
};

export default AnimatedLogoPanel;
