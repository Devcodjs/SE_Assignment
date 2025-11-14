'use client'

import React, { useEffect, useRef, useState } from "react";

// Timeline item interface
interface TimelineItem {
  day: string;
  monthYear: string;
  title: string;
  content: React.ReactNode;
  startTime: string;
  endTime: string;
  status: "upcoming" | "completed" | "live";
  icon?: string;
  prize?: string;
}

const Timeline: React.FC<{ data: TimelineItem[] }> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && ref.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const lineRect = ref.current.getBoundingClientRect();
        
        // Calculate the scroll progress
        const windowHeight = window.innerHeight;
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;
        
        // Start animating when container enters viewport
        const scrollStart = windowHeight - containerTop;
        const scrollableHeight = containerHeight + windowHeight;
        
        // Calculate percentage of scroll through the timeline
        const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollableHeight));
        
        // Set the height based on scroll progress
        const maxHeight = lineRect.height;
        setHeight(scrollProgress * maxHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [data]);

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical Line Container - Fixed position */}
      <div
        ref={ref}
        className="absolute left-[3rem] top-32 w-[2px] bg-gray-200"
        style={{
          height: `calc(100% - 8rem)`,
        }}
      >
        {/* Animated gradient line that grows with scroll */}
        <div
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 transition-all duration-300 ease-out"
          style={{
            height: `${height}px`,
          }}
        />
      </div>

      {/* Timeline Items */}
      <div className="space-y-8 relative">
        {data.map((item, index) => (
          <div key={index} className="flex gap-8 items-start group">
            {/* Left Column: Date & Marker */}
            <div className="flex flex-col items-center w-24 flex-shrink-0 relative z-10">
              {/* Date Box with Gradient */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 text-center w-full shadow-lg mb-3 transform transition-transform group-hover:scale-105">
                <div className="text-3xl font-bold text-white">
                  {item.day}
                </div>
                <div className="text-xs text-blue-100 uppercase font-semibold tracking-wider mt-1">
                  {item.monthYear}
                </div>
              </div>
              
              {/* Timeline Marker with Pulse Effect */}
              <div className="relative">
                {item.status === "live" ? (
                  <div className="relative">
                    <span className="absolute w-6 h-6 rounded-full bg-green-400 animate-ping opacity-75" />
                    <span className="relative w-6 h-6 rounded-full border-4 border-white bg-gradient-to-br from-green-400 to-emerald-600 inline-block shadow-lg" />
                  </div>
                ) : item.status === "completed" ? (
                  <span className="w-6 h-6 rounded-full border-4 border-white bg-gradient-to-br from-gray-400 to-gray-600 inline-block shadow-lg flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </span>
                ) : (
                  <span className="w-6 h-6 rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-indigo-600 inline-block shadow-lg" />
                )}
              </div>
            </div>

            {/* Right Column: Premium Content Card */}
            <div className="flex-1 pb-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1">
                {/* Card Header with Gradient Accent */}
                <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                
                <div className="p-8">
                  {/* Title Section */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {item.icon && (
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center text-2xl">
                          {item.icon}
                        </div>
                      )}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        {item.prize && (
                          <p className="text-sm font-semibold text-purple-600">
                            {item.prize}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Enhanced Status Badge */}
                    {item.status === "upcoming" && (
                      <span className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-md">
                        UPCOMING
                      </span>
                    )}
                    {item.status === "live" && (
                      <span className="flex items-center gap-2 px-4 py-2 text-xs font-bold bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow-md">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        LIVE NOW
                      </span>
                    )}
                    {item.status === "completed" && (
                      <span className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-full shadow-md">
                        COMPLETED
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-gray-700 mb-6 leading-relaxed">
                    {item.content}
                  </div>

                  {/* Time Info with Icons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                    <div className="flex items-start gap-3 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-1">Start Time</p>
                        <p className="text-sm text-gray-700 font-medium">{item.startTime}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-xl">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">End Time</p>
                        <p className="text-sm text-gray-700 font-medium">{item.endTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TimelineDemo() {
  const data: TimelineItem[] = [
    {
      day: "30",
      monthYear: "Dec 25",
      title: "Registration Deadline",
      icon: "📝",
      content: (
        <p>
          Final day for all participating teams to register for Hackathon 2026.
          Registration fee is <span className="font-bold text-purple-600">₹2,000</span> per team. 
          Early bird registrations get exclusive mentorship sessions!
        </p>
      ),
      startTime: "01 Nov 25, 12:00 PM IST",
      endTime: "30 Dec 25, 11:59 PM IST",
      status: "live",
    },
    {
      day: "08",
      monthYear: "Jan 26",
      title: "Round 1: Online Assessment",
      icon: "💻",
      content: (
        <p>
          Online screening round with MCQs, aptitude, and basic coding questions.
          Top performers qualify for Round 2. Get ready to showcase your technical prowess 
          and problem-solving skills in this exciting challenge!
        </p>
      ),
      startTime: "08 Jan 26, 12:00 PM IST",
      endTime: "14 Jan 26, 11:59 PM IST",
      status: "upcoming",
    },
    {
      day: "01",
      monthYear: "Feb 26",
      title: "Round 2: Online AI/ML Challenge",
      icon: "🤖",
      content: (
        <p>
          An intensive online challenge focusing on cutting-edge AI/ML applications and algorithms. 
          Top teams will be shortlisted for the prestigious final offline round. 
          Demonstrate your expertise in artificial intelligence and machine learning!
        </p>
      ),
      startTime: "01 Feb 26, 12:00 PM IST",
      endTime: "07 Feb 26, 11:59 PM IST",
      status: "upcoming",
    },
    {
      day: "22",
      monthYear: "Feb 26",
      title: "Round 3: Offline Finals",
      icon: "🏆",
      prize: "Prize Pool: ₹50,000+",
      content: (
        <p>
          The grand finale hackathon challenge at <span className="font-bold text-blue-600">NIT Silchar</span> campus! 
          A real-time, immersive problem-solving event where innovation meets excellence. 
          Network with industry leaders, showcase your projects, and compete for amazing prizes!
        </p>
      ),
      startTime: "22 Feb 26, 09:00 AM IST",
      endTime: "28 Feb 26, 04:00 PM IST",
      status: "upcoming",
    },
    {
      day: "28",
      monthYear: "Feb 26",
      title: "Awards & Recognition Ceremony",
      icon: "🎉",
      content: (
        <p>
          Grand celebration featuring prize distribution (up to <span className="font-bold text-yellow-600">₹50,000</span>), 
          Certificates of Achievement, networking opportunities with tech leaders, 
          and recognition for outstanding innovation. Don't miss this prestigious ceremony!
        </p>
      ),
      startTime: "28 Feb 26, 04:00 PM IST",
      endTime: "28 Feb 26, 05:00 PM IST",
      status: "upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            HACKATHON 2026
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Event Timeline
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join us on this exciting journey through innovation and technology
          </p>
        </div>

        {/* Main Content - Timeline + Info Panel */}
        <div className="flex gap-8 items-start">
          {/* Timeline - Left Side */}
          <div className="flex-1">
            <Timeline data={data} />
          </div>

          {/* Info Panel - Right Side */}
          <div className="w-80 flex-shrink-0 sticky top-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Free Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">Free</h2>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] mb-6">
                  <div className="flex items-center justify-center gap-2">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <div className="text-sm font-normal mt-1 opacity-90">(Check Team Status)</div>
                </button>
              </div>

              {/* Registration Details Section */}
              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Registration Details</h3>
                  
                  <div className="space-y-5">
                    {/* Team Size */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium mb-1">Team Size</p>
                        <p className="text-base font-bold text-gray-900">Up to 3 members</p>
                      </div>
                    </div>

                    {/* Registration Fee */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium mb-1">Registration Fee</p>
                        <p className="text-base font-bold text-gray-900">₹2,000 per team</p>
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium mb-1">Deadline</p>
                        <p className="text-base font-bold text-gray-900">30th December 2025</p>
                      </div>
                    </div>

                    {/* Eligibility */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 font-medium mb-1">Eligibility</p>
                        <p className="text-base font-bold text-gray-900">UG/PG/PhD Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}