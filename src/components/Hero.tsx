"use client";

// HERO SECTION COMPONENT
function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&h=1080&fit=crop"
          alt="Hackathon Background"
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-50/80 to-transparent"></div>
      </div>
      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 h-72 w-72 animate-pulse rounded-full bg-orange-200 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 h-96 w-96 animate-pulse rounded-full bg-red-200 opacity-20 blur-3xl"></div>
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl leading-tight font-black text-gray-900 lg:text-7xl">
                Hackathon
                <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  2026
                </span>
              </h1>
              <p className="text-xl font-medium text-gray-700">
                National Institute of Technology, Silchar
              </p>
            </div>
            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              Join India's premier national-level coding competition. Showcase
              your skills in AI, ML, and emerging technologies. Compete with the
              best minds, solve real-world problems, and win exciting prizes
              worth <span className="font-bold text-orange-600">₹1,20,000</span>
              .
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-4xl font-black text-orange-600">3</div>
                <div className="text-sm font-medium text-gray-600">Rounds</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-orange-600">₹1.2L</div>
                <div className="text-sm font-medium text-gray-600">
                  Prize Pool
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-orange-600">500+</div>
                <div className="text-sm font-medium text-gray-600">
                  Participants
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/register"
                className="inline-flex items-center gap-2 rounded-full border-2 border-orange-600 px-8 py-4 font-bold text-orange-600 transition-all duration-300 hover:bg-orange-600 hover:text-white"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
                </span>
                <span>Registration Open</span>
              </a>
              <a
                href="#about"
                className="rounded-xl border-2 border-orange-600 px-8 py-4 font-bold text-orange-600 transition-all duration-300 hover:bg-orange-600 hover:text-white"
              >
                Brochure
              </a>
            </div>
            {/* Deadline Notice */}
            <div className="flex items-center gap-3 pt-4">
              <svg
                className="h-5 w-5 text-orange-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-gray-600">
                Registration closes on{" "}
                <span className="font-semibold text-gray-900">
                  30th December 2025
                </span>
              </p>
            </div>
          </div>
          
          {/* Right Side - Galaxy-Style 3D Orbital Scene */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] w-full group" style={{perspective: '1500px'}}>
              {/* Main 3D Galaxy Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="galaxy-system relative h-[550px] w-[550px]" style={{transformStyle: 'preserve-3d'}}>
                  
                  {/* Central Sun - Main Sphere */}
                  <div className="sun-sphere absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50">
                    <div className="relative h-full w-full rounded-full bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-orange-500/50 animate-pulse-glow">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent"></div>
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-transparent to-black/20"></div>
                      
                      {/* Sun Core Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 opacity-50 blur-2xl animate-pulse"></div>
                      
                      {/* Default State - Icon */}
                      <div className="sphere-content absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-50">
                        <svg
                          className="h-16 w-16 text-white drop-shadow-2xl"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                      
                      {/* Hover State */}
                      <div className="sphere-hover-content absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 p-4 text-center">
                        <div className="text-lg font-black text-white drop-shadow-lg mb-1">Hackathon</div>
                        <div className="text-xs font-semibold text-white/90 drop-shadow mb-2">NIT Silchar</div>
                        <div className="flex gap-1">
                          <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-[9px] font-bold text-white">AI</div>
                          <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-[9px] font-bold text-white">ML</div>
                          <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-[9px] font-bold text-white">Code</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Orbit Ring Indicators */}
                  <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/30"></div>
                  <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-200/30"></div>
                  <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-200/30"></div>
                  
                  {/* ORBIT 1 - AI Cube Planet */}
                  <div className="orbit-1 absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 15s linear infinite'}}>
                    <div className="planet-wrapper absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className="cube-3d h-20 w-20 cursor-pointer transition-all duration-500 hover:scale-125" style={{transformStyle: 'preserve-3d', transform: 'rotateX(15deg) rotateY(25deg)'}}>
                        <div className="cube-container relative h-full w-full" style={{transformStyle: 'preserve-3d'}}>
                          {/* Front Face */}
                          <div className="cube-face absolute inset-0 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 shadow-xl flex items-center justify-center" style={{transform: 'translateZ(40px)'}}>
                            <span className="text-xl font-black text-white drop-shadow-lg">AI</span>
                          </div>
                          {/* Other faces */}
                          <div className="cube-face absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 opacity-90" style={{transform: 'rotateY(90deg) translateZ(40px)'}}></div>
                          <div className="cube-face absolute inset-0 rounded-lg bg-gradient-to-br from-red-600 to-pink-600 opacity-80" style={{transform: 'rotateX(90deg) translateZ(40px)'}}></div>
                          <div className="cube-face absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 opacity-70" style={{transform: 'rotateY(180deg) translateZ(40px)'}}></div>
                          <div className="cube-face absolute inset-0 rounded-lg bg-gradient-to-br from-red-500 to-orange-400 opacity-70" style={{transform: 'rotateY(-90deg) translateZ(40px)'}}></div>
                          <div className="cube-face absolute inset-0 rounded-lg bg-gradient-to-br from-orange-600 to-red-700 opacity-60" style={{transform: 'rotateX(-90deg) translateZ(40px)'}}></div>
                        </div>
                      </div>
                      {/* Orbit Trail */}
                      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 opacity-50 blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* ORBIT 2 - ML Ring Planet */}
                  <div className="orbit-2 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 20s linear infinite'}}>
                    <div className="planet-wrapper absolute top-0 left-1/2 -translate-x-1/2">
                      <div className="torus-3d h-24 w-24 cursor-pointer transition-all duration-500 hover:scale-125">
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 rounded-full border-8 border-red-400 shadow-2xl shadow-red-500/30" style={{transform: 'rotateY(60deg) rotateX(30deg)', transformStyle: 'preserve-3d'}}></div>
                          <div className="absolute inset-2 rounded-full border-6 border-pink-400 opacity-60" style={{transform: 'rotateY(60deg) rotateX(30deg)', transformStyle: 'preserve-3d'}}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-sm font-black text-red-600 drop-shadow-lg">ML</span>
                          </div>
                        </div>
                      </div>
                      {/* Orbit Trail */}
                      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 opacity-50 blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* ORBIT 3 - Code Pyramid Planet */}
                  <div className="orbit-3 absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 25s linear infinite'}}>
                    <div className="planet-wrapper absolute bottom-0 left-1/2 -translate-x-1/2">
                      <div className="pyramid-3d h-20 w-20 cursor-pointer transition-all duration-500 hover:scale-125" style={{transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateZ(45deg)'}}>
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500 shadow-xl flex items-center justify-center" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', transform: 'translateZ(30px)'}}>
                          <span className="text-xs font-bold text-white drop-shadow-lg mt-6">Code</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 opacity-80" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', transform: 'rotateY(90deg) translateZ(30px)'}}></div>
                      </div>
                      {/* Orbit Trail */}
                      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 opacity-50 blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* ORBIT 4 - Prize Money Sphere */}
                  <div className="orbit-4 absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 18s linear infinite reverse'}}>
                    <div className="planet-wrapper absolute top-1/2 -left-6 -translate-y-1/2">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-300 to-red-400 shadow-xl cursor-pointer transition-all duration-500 hover:scale-125 hover:shadow-orange-400/60 flex items-center justify-center group/sphere">
                        <span className="text-xs font-bold text-white">₹1.2L</span>
                      </div>
                      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 opacity-50 blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* ORBIT 5 - Participants Sphere */}
                  <div className="orbit-5 absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 22s linear infinite reverse'}}>
                    <div className="planet-wrapper absolute top-1/2 -right-6 -translate-y-1/2">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-red-400 to-pink-500 shadow-xl cursor-pointer transition-all duration-500 hover:scale-125 hover:shadow-pink-400/60 flex items-center justify-center group/sphere">
                        <span className="text-sm font-bold text-white">500+</span>
                      </div>
                      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 opacity-50 blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* ORBIT 6 - Days Sphere */}
                  <div className="orbit-6 absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2" style={{animation: 'orbit 28s linear infinite reverse'}}>
                    <div className="planet-wrapper absolute bottom-16 left-1/2 -translate-x-1/2">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-pink-400 to-red-500 shadow-xl cursor-pointer transition-all duration-500 hover:scale-125 hover:shadow-red-400/60 flex items-center justify-center group/sphere">
                        <span className="text-xs font-bold text-white">3D</span>
                      </div>
                      <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 opacity-50 blur-sm"></div>
                    </div>
                  </div>
                  
                  {/* Connecting Energy Beams */}
                  <div className="absolute top-1/2 left-1/2 h-1 w-32 origin-left bg-gradient-to-r from-orange-400/40 to-transparent" style={{transform: 'translate(-50%, -50%) rotate(45deg)', animation: 'beam-pulse 3s ease-in-out infinite'}}></div>
                  <div className="absolute top-1/2 left-1/2 h-1 w-40 origin-left bg-gradient-to-r from-red-400/40 to-transparent" style={{transform: 'translate(-50%, -50%) rotate(-30deg)', animation: 'beam-pulse 3s ease-in-out infinite 1s'}}></div>
                  <div className="absolute top-1/2 left-1/2 h-1 w-36 origin-left bg-gradient-to-r from-pink-400/40 to-transparent" style={{transform: 'translate(-50%, -50%) rotate(120deg)', animation: 'beam-pulse 3s ease-in-out infinite 2s'}}></div>
                  
                  {/* Floating Particles */}
                  <div className="particle absolute top-1/4 left-1/3 h-2 w-2 rounded-full bg-orange-400 opacity-60 animate-pulse"></div>
                  <div className="particle absolute top-2/3 right-1/4 h-2 w-2 rounded-full bg-red-400 opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="particle absolute bottom-1/4 left-1/2 h-2 w-2 rounded-full bg-pink-400 opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="particle absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-orange-300 opacity-40 animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <div className="particle absolute bottom-1/3 left-1/4 h-2 w-2 rounded-full bg-red-300 opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
              
             
              
             
              
              {/* Hover Instruction */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="text-center">
                  <p className="text-xs font-medium text-gray-500">Explore the galaxy</p>
                  <div className="mt-2 flex gap-2 justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-orange-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 40px rgba(249, 115, 22, 0.4), 0 0 80px rgba(239, 68, 68, 0.2);
          }
          50% {
            box-shadow: 0 0 60px rgba(249, 115, 22, 0.6), 0 0 100px rgba(239, 68, 68, 0.3);
          }
        }
        
        @keyframes beam-pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .group:hover .orbit-1,
        .group:hover .orbit-2,
        .group:hover .orbit-3,
        .group:hover .orbit-4,
        .group:hover .orbit-5,
        .group:hover .orbit-6 {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;