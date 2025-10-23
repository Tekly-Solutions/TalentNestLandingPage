import NavBar from "../Components/Navbar/NavBar";
import RequestDemoPage from "./RequestDemoPage.jsx/RequestDemoPage";
import FooterPage from "./FooterPage";
import React from "react";
import PartnersSection from "../Components/Sections/PartnersSection";
import Feature1 from "./Features/Feature1";
import Feature2 from "./Features/Feature2";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8">
      <NavBar />
      <RequestDemoPage />
      <Feature1 />
      <Feature2 />
      <PartnersSection />
      
      <FooterPage />
       
    </div>
  );
};

export default LandingPage;
