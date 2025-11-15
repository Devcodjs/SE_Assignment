"use client";

import React, { useEffect, useRef, useState } from "react";
import { registerationGFormLink } from "~/constants/constants";

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

        const windowHeight = window.innerHeight;
        const containerTop = containerRect.top;
        const containerHeight = containerRect.height;

        const scrollStart = windowHeight - containerTop;
        const scrollableHeight = containerHeight + windowHeight;

        const scrollProgress = Math.max(
          0,
          Math.min(1, scrollStart / scrollableHeight),
        );

        const maxHeight = lineRect.height;
        setHeight(scrollProgress * maxHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [data]);

  return (
    <div ref={containerRef} className="relative">
      <div
        ref={ref}
        className="absolute top-32 left-[3rem] w-[2px] bg-gray-200"
        style={{
          height: `calc(100% - 8rem)`,
        }}
      >
        <div
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 transition-all duration-300 ease-out"
          style={{
            height: `${height}px`,
          }}
        />
      </div>

      <div className="relative space-y-12">
        {data.map((item, index) => (
          <div key={index} className="group flex items-start gap-8">
            <div className="relative z-10 flex w-24 flex-shrink-0 flex-col items-center">
              <div className="mb-3 w-full transform rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-4 text-center shadow-lg transition-transform group-hover:scale-105">
                <div className="text-3xl font-bold text-white">{item.day}</div>
                <div className="mt-1 text-xs font-semibold tracking-wider text-blue-100 uppercase">
                  {item.monthYear}
                </div>
              </div>

              <div className="relative">
                {item.status === "live" ? (
                  <div className="relative">
                    <span className="absolute h-6 w-6 animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-block h-6 w-6 rounded-full border-4 border-white bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg" />
                  </div>
                ) : item.status === "completed" ? (
                  <span className="flex inline-block h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-gray-400 to-gray-600 shadow-lg">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="inline-block h-6 w-6 rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-indigo-600 shadow-lg" />
                )}
              </div>
            </div>

            <div className="flex-1 ">
              <div className="transform overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

                <div className="p-8">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      {item.icon && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-2xl">
                          {item.icon}
                        </div>
                      )}
                      <div>
                        <h3 className="mb-1 text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        {item.prize && (
                          <p className="text-sm font-semibold text-purple-600">
                            {item.prize}
                          </p>
                        )}
                      </div>
                    </div>

                    {item.status === "upcoming" && (
                      <span className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-md">
                        UPCOMING
                      </span>
                    )}
                    {item.status === "live" && (
                      <span className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-4 py-2 text-xs font-bold text-white shadow-md">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                        LIVE NOW
                      </span>
                    )}
                    {item.status === "completed" && (
                      <span className="rounded-full bg-gradient-to-r from-gray-400 to-gray-600 px-4 py-2 text-xs font-bold text-white shadow-md">
                        COMPLETED
                      </span>
                    )}
                  </div>

                  <div className="mb-6 leading-relaxed text-gray-700">
                    {item.content}
                  </div>

                  <div className="grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 md:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="mb-1 text-xs font-bold tracking-wide text-green-700 uppercase">
                          Start Time
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          {item.startTime}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl bg-gradient-to-br from-red-50 to-pink-50 p-4">
                      <svg
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="mb-1 text-xs font-bold tracking-wide text-red-700 uppercase">
                          End Time
                        </p>
                        <p className="text-sm font-medium text-gray-700">
                          {item.endTime}
                        </p>
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
          Final day for all participating teams to register for Aavartan 2026.
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
          Online screening round with MCQs, aptitude, and basic coding
          questions. Top performers qualify for Round 2. Get ready to showcase
          your technical prowess and problem-solving skills in this exciting
          challenge!
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
          An intensive online challenge focusing on cutting-edge AI/ML
          applications and algorithms. Top teams will be shortlisted for the
          prestigious final offline round. Demonstrate your expertise in
          artificial intelligence and machine learning!
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
          The grand finale hackathon challenge at{" "}
          <span className="font-bold text-blue-600">NIT Silchar</span> campus! A
          real-time, immersive problem-solving event where innovation meets
          excellence. Network with industry leaders, showcase your projects, and
          compete for amazing prizes!
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
          Grand celebration featuring prize distribution (up to{" "}
          <span className="font-bold text-yellow-600">₹50,000</span>),
          Certificates of Achievement, networking opportunities with tech
          leaders, and recognition for outstanding innovation. Don't miss this
          prestigious ceremony!
        </p>
      ),
      startTime: "28 Feb 26, 04:00 PM IST",
      endTime: "28 Feb 26, 05:00 PM IST",
      status: "upcoming",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-18" id="timeline">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            AAVARTAN 2026
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent">
            Event Timeline
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Join us on this exciting journey through innovation and technology
          </p>
        </div>

        <div className="flex items-start gap-8">
          <div className="flex-1">
            <Timeline data={data} />
          </div>

          <div className="sticky top-18 w-80 flex-shrink-0">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
              <div className="p-6 pb-4">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-900">Free</h2>
                  <div className="flex gap-2">
                    <button className="rounded-full p-2 transition hover:bg-gray-100">
                      {""}
                      <svg
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button className="rounded-full p-2 transition hover:bg-gray-100">
                      {""}
                      <svg
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <a
                  href={registerationGFormLink}
                  className="mb-6 block w-full rounded-xl bg-gradient-to-r from-green-600 to-green-700 py-4 text-center font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                >
                  Register
                </a>
              </div>

              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="mb-6 text-xl font-bold text-gray-900">
                    Registration Details
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                        <svg
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="mb-1 text-sm font-medium text-gray-500">
                          Team Size
                        </p>
                        <p className="text-base font-bold text-gray-900">
                          Up to 3 members
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-emerald-100">
                        <svg
                          className="h-5 w-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="mb-1 text-sm font-medium text-gray-500">
                          Registration Fee
                        </p>
                        <p className="text-base font-bold text-gray-900">
                          ₹2,000 per team
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-100 to-pink-100">
                        <svg
                          className="h-5 w-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="mb-1 text-sm font-medium text-gray-500">
                          Deadline
                        </p>
                        <p className="text-base font-bold text-gray-900">
                          30th December 2025
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100">
                        <svg
                          className="h-5 w-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="mb-1 text-sm font-medium text-gray-500">
                          Eligibility
                        </p>
                        <p className="text-base font-bold text-gray-900">
                          UG/PG/PhD Students
                        </p>
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
