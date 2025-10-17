import NavBar from "../Components/Navbar/NavBar";
import RequestDemoPage from "./RequestDemoPage.jsx/RequestDemoPage";
import FooterPage from "./FooterPage";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen px-4 sm:px-8">
      <NavBar />
      <RequestDemoPage />
      <RequestDemoPage />
      <FooterPage />
       
    </div>
  );
};

export default LandingPage;
