import React from "react";
import Link from "next/link";
import GradientHeadline from "@/app/Components/Shared/GradientHeadline";
import GradientPanel from "@/app/Components/Shared/GradientPanel";
import DemoForm from "@/app/Components/Shared/DemoForm";

const RequestDemoSection: React.FC = () => {
  return (
    <section
      id="welcome"
      className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative"
    >
      <GradientHeadline
        prefix="The Platform for"
        firstWord="Talent"
        secondWord="People"
        sizeClassName="text-4xl"
        wrapperClassName="mb-2"
        prefixClassName="text-black font-[350]"
        firstWordClassName="text-black italic font-light"
        secondWordWeightClassName="font-[350]"
        gradientStops={["#007E7E", "#33B88C", "#A9EBA9", "#33B88C", "#00A3A3"]}
      />
      {/* Tagline below topic */}
      <div style={{ textAlign: "center" }}>
        <span
          style={{
            fontSize: "1.00rem",
            fontWeight: 300,
            color: "black",
            fontStyle: "italic",
          }}
        >
          <span style={{ color: "var(--teal-medium)", fontWeight: 500 }}>
            &quot;
          </span>
          Transform the way you manage talent - experience
          <span style={{ color: "var(--teal-medium)", fontWeight: 500 }}>
            {" "}
            TalentNest{" "}
          </span>
          in action
          <span style={{ color: "var(--teal-medium)", fontWeight: 500 }}>
            &quot;
          </span>
        </span>
      </div>

      <GradientPanel className="mt-8 p-8">
        <h3 className="text-white text-xl font-semibold mb-2">
          Request a demo
        </h3>
        <p className="text-white/80 text-sm mb-6 max-w-xs mx-auto">
          Schedule a consultation with a real, live
          <br />
          product expert to see if we’re a fit.
        </p>
        <DemoForm />
        <p className="text-white/60 text-xs mt-6 max-w-xs mx-auto">
          By submitting your information, you agree to TalentNest's{" "}
          <Link href="/TermsOfService" className="underline text-white">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/PrivacyPolicy" className="underline text-white">
            Privacy Policy
          </Link>
          . You can opt out anytime.
        </p>
        <div className="mt-4 text-xs text-white/70">
          <span>Not ready for a demo? </span>
          <a href="#" className="underline text-white">
            Explore other options
          </a>
        </div>
        <p className="text-white/40 text-[11px] mt-4 max-w-xs mx-auto">
          *Lattice HRIS and Payroll is currently available for US-based
          businesses. Limited HRIS beta testing is available in the UK, not
          including Payroll at this time.
        </p>
      </GradientPanel>
    </section>
  );
};

export default RequestDemoSection;
