import React from "react";
import GetStartedButton from "@/app/Components/Shared/GetStartedButton";

const DemoForm: React.FC = () => {
  return (
    <form className="space-y-4 w-full max-w-xs mx-auto">
      <div className="text-left">
        <label
          className="text-white/80 text-xs font-medium"
          htmlFor="firstName"
        >
          First Name:<span className="text-red-400">*</span>
        </label>
        <input
          id="firstName"
          type="text"
          required
          className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 transition mt-1"
          placeholder="First Name"
        />
      </div>
      <div className="text-left">
        <label className="text-white/80 text-xs font-medium" htmlFor="lastName">
          Last Name:<span className="text-red-400">*</span>
        </label>
        <input
          id="lastName"
          type="text"
          required
          className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 transition mt-1"
          placeholder="Last Name"
        />
      </div>
      <div className="text-left">
        <label className="text-white/80 text-xs font-medium" htmlFor="email">
          Email Address:<span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full px-4 py-3 rounded-full bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white/60 transition mt-1"
          placeholder="Email Address"
        />
      </div>
      <div className="flex justify-center">
        <GetStartedButton label="Get Started" />
      </div>
    </form>
  );
};

export default DemoForm;
