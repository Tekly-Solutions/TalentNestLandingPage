import React from "react";
import CompanyInfo from "./CompanyInfo";
import QuickLinks from "./QuickLinks";
import SupportLinks from "./SupportLinks";
import NewsletterSignup from "./NewsletterSignup";
import FooterBottom from "./FooterBottom";

const Footer: React.FC = () => {
  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`;
  const additionalNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='extraNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23extraNoise)' opacity='0.1'/%3E%3C/svg%3E")`;
  const vignetteOverlay = `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='vignette' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='70%25' style='stop-color:rgba(0,0,0,0);stop-opacity:0' /%3E%3Cstop offset='100%25' style='stop-color:rgba(0,0,0,0.3);stop-opacity:1' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23vignette)'/%3E%3C/svg%3E")`;

  return (
    <footer
      id="footer"
      className="w-full text-white py-12 px-4 sm:px-8 relative overflow-hidden"
      style={{
        overflow: "visible",
        zIndex: 1,
        backgroundColor: "dark green",
        backgroundBlendMode: "multiply, lighten,multiply",
        backgroundSize: "cover, 128px 128px, 64px 64px, cover",
        backgroundPosition: "center center, 0 0, 0 0, center center",
        backgroundAttachment: "fixed, fixed, fixed, fixed",
      }}
    >
      {/* Logo Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/Talent Nest logo stroke.png"
          alt="TalentNest Logo"
          className="absolute top-16 left-16 w-32 h-32 opacity-40 blur-xs"
        />
        <img
          src="/Talent Nest logo stroke.png"
          alt="TalentNest Logo"
          className="absolute top-32 right-24 w-24 h-24 opacity-100 blur-xs"
        />
        <img
          src="/Talent Nest logo stroke.png"
          alt="TalentNest Logo"
          className="absolute bottom-20 left-1/4 w-40 h-40 opacity-30 blur-sm"
        />
        <img
          src="/Talent Nest logo stroke.png"
          alt="TalentNest Logo"
          className="absolute top-1/2 right-16 w-28 h-28 opacity-45 blur-xs"
        />
        <img
          src="/Talent Nest logo stroke.png"
          alt="TalentNest Logo"
          className="absolute bottom-32 right-1/3 w-36 h-36 opacity-40 blur-xs"
        />
        <img
          src="/Talent Nest logo stroke.png"
          alt="TalentNest Logo"
          className="absolute top-20 left-1/2 w-20 h-20 opacity-50 blur-xs"
        />
      </div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <CompanyInfo />
          <div></div>
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
