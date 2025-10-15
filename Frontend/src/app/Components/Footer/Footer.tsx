import React from "react";
import CompanyInfo from "./CompanyInfo";
import QuickLinks from "./QuickLinks";
import SupportLinks from "./SupportLinks";
import NewsletterSignup from "./NewsletterSignup";
import FooterBottom from "./FooterBottom";

const Footer: React.FC = () => {
  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;
  const vignetteOverlay = `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='vignette' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='70%25' style='stop-color:rgba(0,0,0,0);stop-opacity:0' /%3E%3Cstop offset='100%25' style='stop-color:rgba(0,0,0,0.3);stop-opacity:1' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23vignette)'/%3E%3C/svg%3E")`;

  return (
    <footer
      className="w-full text-white py-12 px-4 sm:px-8 relative overflow-hidden"
      style={{
        background: `var(--teal-almost-black), ${noiseTexture}, ${vignetteOverlay}`,
        backgroundBlendMode: "multiply, multiply, normal",
        backgroundSize: "cover, 128px 128px, cover",
        backgroundPosition: "center center, 0 0, center center",
        backgroundAttachment: "fixed, fixed, fixed",
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <CompanyInfo />
          <QuickLinks />
          <SupportLinks />
        </div>

        <NewsletterSignup />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
