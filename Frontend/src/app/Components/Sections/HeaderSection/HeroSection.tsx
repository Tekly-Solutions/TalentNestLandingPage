"use client";

import React from "react";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Sparkles,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 backdrop-blur-sm border border-green-300 shadow-sm">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                AI-Powered Talent Management Platform
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-4">
                Discover Top Talent,
                <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  Transform Your Team
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-700 leading-relaxed max-w-xl">
              TalentNest revolutionizes workforce management with intelligent AI
              matching, real-time analytics, and seamless collaboration tools.
              Build exceptional teams faster.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Zap, text: "Instant Matching" },
                { icon: Users, text: "5M+ Professionals" },
                { icon: TrendingUp, text: "98% Success Rate" },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-green-200 shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105">
                <span className="relative flex items-center justify-center gap-3">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <button className="group px-8 py-4 border-2 border-green-500 text-green-700 font-semibold rounded-xl transition-all duration-300 hover:bg-green-50 hover:border-green-600 hover:scale-105 backdrop-blur-sm bg-white/40">
                <span className="flex items-center justify-center gap-3">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="flex -space-x-2 mb-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-2 border-white shadow-sm"
                    ></div>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  Trusted by{" "}
                  <span className="font-semibold text-green-700">30,000+</span>{" "}
                  companies
                </p>
              </div>
              <div className="h-12 w-px bg-green-200"></div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">4.9/5</span>{" "}
                  from 2,500+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            {/* Main Feature Card */}
            <div className="relative bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-green-100">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl opacity-20 blur-2xl"></div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Smart Talent Matching
                    </h3>
                    <p className="text-sm text-slate-600">
                      AI-powered precision
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Advanced skill-based filtering",
                    "Culture fit analysis",
                    "Real-time candidate rankings",
                    "Automated screening process",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-green-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-slate-600">Faster Hiring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50%</div>
                    <div className="text-xs text-slate-600">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      24/7
                    </div>
                    <div className="text-xs text-slate-600">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white px-6 py-4 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">400M+</div>
              <div className="text-sm opacity-90">Candidates Managed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-slate-600">Scroll to explore</span>
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
