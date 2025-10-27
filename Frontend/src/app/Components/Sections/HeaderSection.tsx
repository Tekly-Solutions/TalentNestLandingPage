import React from 'react';

const HeaderSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
              <feColorMatrix type="saturate" values="0"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 pt-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">TalentNest</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm font-medium">Services</a>
            <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm font-medium">Solutions</a>
            <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#" className="text-teal-100 hover:text-white transition-colors text-sm font-medium">Contact</a>
          </div>

          <button className="px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-all">
            Sign In
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-teal-100 text-sm font-medium">AI-Powered Talent Platform</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight">
                Build Your
                <span className="block bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                  Dream Team
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-teal-100/90 leading-relaxed max-w-xl">
                Connect with top talent, streamline hiring, and grow your organization with our AI-powered workforce management platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-white text-emerald-900 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-white mb-1">50K+</div>
                <div className="text-teal-200 text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-teal-200 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-teal-200 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Card */}
          <div className="relative">
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>

            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Nest Illustration */}
              <div className="relative w-full h-80 flex items-center justify-center mb-8">
                <svg className="w-full h-full" viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
                  {/* Nest */}
                  <ellipse cx="200" cy="220" rx="140" ry="60" fill="#8B7355" opacity="0.7"/>
                  <ellipse cx="200" cy="210" rx="130" ry="55" fill="#A0826D" opacity="0.8"/>
                  <ellipse cx="200" cy="200" rx="120" ry="50" fill="#B8956A"/>
                  
                  {/* Twigs */}
                  <line x1="100" y1="180" x2="50" y2="165" stroke="#6B5744" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="120" y1="190" x2="70" y2="185" stroke="#7A6855" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="300" y1="180" x2="350" y2="165" stroke="#6B5744" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="280" y1="190" x2="330" y2="185" stroke="#7A6855" strokeWidth="2.5" strokeLinecap="round"/>
                  
                  {/* Inner cavity */}
                  <ellipse cx="200" cy="185" rx="90" ry="35" fill="#4A3C2F" opacity="0.6"/>
                  
                  {/* Eggs */}
                  <g>
                    <ellipse cx="175" cy="180" rx="22" ry="28" fill="#E8DCC8">
                      <animate attributeName="cy" values="180;178;180" dur="3s" repeatCount="indefinite"/>
                    </ellipse>
                    <ellipse cx="175" cy="180" rx="22" ry="28" fill="#D4C4B0" opacity="0.3"/>
                    <ellipse cx="177" cy="173" rx="7" ry="10" fill="white" opacity="0.6"/>
                    <circle cx="172" cy="177" r="1.5" fill="#8B7355" opacity="0.5"/>
                    <circle cx="178" cy="183" r="1.2" fill="#8B7355" opacity="0.5"/>
                  </g>
                  
                  <g>
                    <ellipse cx="205" cy="183" rx="24" ry="31" fill="#E8DCC8">
                      <animate attributeName="cy" values="183;181;183" dur="3.5s" repeatCount="indefinite"/>
                    </ellipse>
                    <ellipse cx="205" cy="183" rx="24" ry="31" fill="#D4C4B0" opacity="0.3"/>
                    <ellipse cx="207" cy="175" rx="8" ry="11" fill="white" opacity="0.6"/>
                    <circle cx="202" cy="180" r="1.5" fill="#8B7355" opacity="0.5"/>
                    <circle cx="209" cy="187" r="1.2" fill="#8B7355" opacity="0.5"/>
                  </g>
                  
                  <g>
                    <ellipse cx="235" cy="181" rx="21" ry="27" fill="#E8DCC8">
                      <animate attributeName="cy" values="181;179;181" dur="4s" repeatCount="indefinite"/>
                    </ellipse>
                    <ellipse cx="235" cy="181" rx="21" ry="27" fill="#D4C4B0" opacity="0.3"/>
                    <ellipse cx="237" cy="174" rx="7" ry="9" fill="white" opacity="0.6"/>
                    <circle cx="232" cy="178" r="1.5" fill="#8B7355" opacity="0.5"/>
                    <circle cx="238" cy="184" r="1.2" fill="#8B7355" opacity="0.5"/>
                  </g>
                  
                  {/* Texture lines */}
                  <path d="M 80 205 Q 120 210 160 208" stroke="#6B5744" strokeWidth="2" fill="none" opacity="0.7"/>
                  <path d="M 240 208 Q 280 210 320 205" stroke="#6B5744" strokeWidth="2" fill="none" opacity="0.7"/>
                </svg>

                {/* Floating badges */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}>
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              {/* Card Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-white">Nurture Your Talent</h3>
                <p className="text-teal-100/80 text-lg">Build, grow, and manage your perfect team ecosystem</p>
                
                {/* Features */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-teal-300">AI</div>
                    <div className="text-xs text-teal-100 mt-1">Powered</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-teal-300">∞</div>
                    <div className="text-xs text-teal-100 mt-1">Scalable</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-teal-300">⚡</div>
                    <div className="text-xs text-teal-100 mt-1">Fast</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-8 flex items-center gap-4 justify-center">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full border-2 border-emerald-900 flex items-center justify-center text-white font-bold text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <div className="text-teal-100 text-sm">Trusted by 10,000+ teams</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="text-teal-200 text-xs uppercase tracking-wider">Scroll</div>
        <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>
  );
};

export default HeaderSection;