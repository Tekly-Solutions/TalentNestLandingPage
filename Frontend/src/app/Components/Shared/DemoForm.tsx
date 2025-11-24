"use client";

import React, { useState } from "react";
import GetStartedButton from "@/app/Components/Shared/GetStartedButton";

const DemoForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);
    if (!firstName || !lastName || !email) {
      setMessage("Please fill in all required fields.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Failed to send email");
      }
      setMessage("Success! We've emailed you and our team.");
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (err) {
      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4 w-full max-w-xs mx-auto" onSubmit={onSubmit}>
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
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
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <GetStartedButton
          label={loading ? "Sending..." : "Get Started"}
          type="submit"
          disabled={loading}
        />
      </div>
      {message && (
        <p className="text-center text-sm text-white/80">{message}</p>
      )}
    </form>
  );
};

export default DemoForm;
