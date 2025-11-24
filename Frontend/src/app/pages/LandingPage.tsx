import NavBar from "../Components/Navbar/NavBar";
import VideoSection from "../Components/Sections/VideoSection";
import RequestDemoPage from "./RequestDemoPage.jsx/RequestDemoPage";
import FooterPage from "./FooterPage";
import React from "react";
import PartnersSection from "../Components/Sections/PartnersSection";
import Feature1 from "./Features/Feature1";
import HeaderSection from "../Components/Sections/HeaderSection";
import HeroSection from "../Components/Sections/HeaderSection/HeroSection";

const LandingPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <RequestDemoPage />

      <Feature1 />
      <VideoSection />
      <Feature1 />
      <PartnersSection />
      <FooterPage />
    </>
  );
};

export default LandingPage;
