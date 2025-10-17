"use client";

import React from "react";
import { motion } from "framer-motion";

const logoUrls = [
  "/Logos/57a640704af2796a4e1bd595e626cd.webp",
  "/Logos/kisspng-email-business-marketing-logo-organization-dpd-logo-5b48510751cd96.9846732315314659913351.jpg",
  "/Logos/kisspng-email-business-wyndham-hotels-resorts-uber-flamengo-5b354d419e0072.4200785315302198416472.jpg",
  "/Logos/kisspng-lyft-hotel-real-estate-company-industry-5adc702f026260.0995092215243960790098.jpg",
  "/Logos/kisspng-stillman-college-email-united-nations-university-i-football-team-5ae3dce0b4b788.6907550315248826567402.jpg",
  "/Logos/kisspng-strategic-planning-white-house-new-york-city-the-flash-and-supergirl-5bed59fe1afb83.6035855815422817261105.jpg",
  "/Logos/kisspng-united-states-email-web-hosting-service-business-5adce7673b12f5.204052461524426599242.jpg",
  "/Logos/kisspng-united-states-geological-survey-organization-busin-coke-studio-logo-5b4d2c64038f13.4834529015317842920146.jpg",
  "/Logos/kisspng-united-states-hotel-logo-business-customer-service-5b785aa29a88e7.335711921534614178633.jpg",
  "/Logos/kisspng-united-states-logo-business-parramatta-eels-manly-pen-logo-5b5175337a4e11.730736661532065075501.jpg",
  "/Logos/kisspng-white-house-hotel-chevrolet-small-block-engine-car-aphex-twin-5b124f92dabd52.414233561527926674896-removebg-preview.png",
  "/Logos/kisspng-white-house-hotel-chevrolet-small-block-engine-car-aphex-twin-5b124f92dabd52.414233561527926674896.jpg",
  "/Logos/kisspng-white-house-logo-organization-lyft-industry-high-grade-certificate-5b067995b15745.1525366815271509977264.jpg",
  "/Logos/kisspng-white-house-white-noise-food-company-service-new-york-giants-5ac3e7170de5a2.8662988815227881190569.jpg",
];

const ANIMATION_DURATION = 30;

const LogoRow: React.FC<{ reverse?: boolean }> = ({ reverse = false }) => {
  const logos = reverse ? [...logoUrls].reverse() : logoUrls;
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Direction based on reverse prop
  const effectiveReverse = reverse;

  const duration = ANIMATION_DURATION * 3;

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-2 py-6"
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
    <div className="w-full py-16 px-6">
      <div className="mb-4">
        <LogoRow />
      </div>
      <div className="mb-4">
        <LogoRow reverse />
      </div>
      <div>
        <LogoRow />
      </div>
    </div>
  );
};

export default AnimatedLogoPanel;
