"use client";

import React from "react";
import { motion } from "framer-motion";

const logoUrls = [
  "/Logos/adidas-white-logo-hd-png-701751694777208ogwssxbgpj-removebg-preview.png",
  "/Logos/images-removebg-preview.png",
  "/Logos/kisspng-email-business-wyndham-hotels-resorts-uber-flamengo-5b354d419e0072.4200785315302198416472-removebg-preview.png",
  "/Logos/kisspng-lyft-hotel-real-estate-company-industry-5adc702f026260.0995092215243960790098-removebg-preview.png",
  "/Logos/kisspng-united-states-email-web-hosting-service-business-5adce7673b12f5.204052461524426599242-removebg-preview.png",
  "/Logos/kisspng-united-states-geological-survey-organization-busin-coke-studio-logo-5b4d2c64038f13.4834529015317842920146-removebg-preview.png",
  "/Logos/kisspng-united-states-hotel-logo-business-customer-service-5b785aa29a88e7.335711921534614178633-removebg-preview.png",
  "/Logos/kisspng-white-house-hotel-chevrolet-small-block-engine-car-aphex-twin-5b124f92dabd52.414233561527926674896-removebg-preview (1).png",
  "/Logos/kisspng-white-house-hotel-chevrolet-small-block-engine-car-aphex-twin-5b124f92dabd52.414233561527926674896-removebg-preview copy.png",
  "/Logos/kisspng-white-house-hotel-chevrolet-small-block-engine-car-aphex-twin-5b124f92dabd52.414233561527926674896-removebg-preview.png",
  "/Logos/kisspng-white-house-logo-organization-lyft-industry-high-grade-certificate-5b067995b15745.1525366815271509977264-removebg-preview.png",
  "/Logos/kisspng-white-house-logo-organization-lyft-industry-high-grade-certificate-5b067995b15745.1525366815271509977264.jpg",
  "/Logos/kisspng-white-house-white-noise-food-company-service-new-york-giants-5ac3e7170de5a2.8662988815227881190569-removebg-preview.png",
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
        className="flex gap-0 py-6"
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
    <div className="w-full py-8 px-6">
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
