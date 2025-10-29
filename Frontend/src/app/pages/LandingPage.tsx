import NavBar from "../Components/Navbar/NavBar";
import VideoSection from "../Components/Sections/VideoSection";
import RequestDemoPage from "./RequestDemoPage.jsx/RequestDemoPage";
import FooterPage from "./FooterPage";
import React from "react";
import PartnersSection from "../Components/Sections/PartnersSection";
import Feature1 from "./Features/Feature1";
import HeaderSection from "../Components/Sections/HeaderSection";

const LandingPage: React.FC = () => {
  return (
    <>
    
      <NavBar />
      
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
