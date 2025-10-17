import NavBar from "../Components/Navbar/NavBar";
import RequestDemoPage from "./RequestDemoPage.jsx/RequestDemoPage";
import FooterPage from "./FooterPage";
import React from "react";
import PartnersSection from "../Components/Sections/PartnersSection";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8">
      <NavBar />
      <RequestDemoPage />
      <PartnersSection />
      <FooterPage />
       
    </div>
  );
};

export default LandingPage;
