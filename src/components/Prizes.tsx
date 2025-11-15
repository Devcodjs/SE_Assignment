"use client";

import React, { useState } from "react";

// SVG Icon Components
const Trophy = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
);

const Medal = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Award = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Gift = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
    />
  </svg>
);

const Star = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const Sparkles = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const Download = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Lightbulb = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const Code = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

// --- 1. 'Users' icon REMOVED ---

// --- 2. 'Palette' icon ADDED ---
const Palette = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

const Shield = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

export default function Prizes() {
  const [hoveredPrize, setHoveredPrize] = useState(null);
  const [isParticipant, setIsParticipant] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [teamCode, setTeamCode] = useState("");

  const mainPrizes = [
    {
      rank: "1st",
      position: "Winner",
      amount: "₹50,000",
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      bgGradient: "from-amber-50 to-yellow-50",
      icon: Trophy,
      iconColor: "text-amber-600",
      badge: "bg-gradient-to-r from-amber-500 to-yellow-600",
      borderColor: "border-amber-200",
      shadowColor: "hover:shadow-amber-200",
    },
    {
      rank: "2nd",
      position: "Runner Up",
      amount: "₹40,000",
      gradient: "from-slate-300 via-gray-400 to-slate-500",
      bgGradient: "from-slate-50 to-gray-50",
      icon: Medal,
      iconColor: "text-slate-600",
      badge: "bg-gradient-to-r from-slate-400 to-gray-500",
      borderColor: "border-slate-200",
      shadowColor: "hover:shadow-slate-200",
    },
    {
      rank: "3rd",
      position: "Second Runner Up",
      amount: "₹30,000",
      gradient: "from-orange-400 via-amber-500 to-orange-600",
      bgGradient: "from-orange-50 to-amber-50",
      icon: Award,
      iconColor: "text-orange-600",
      badge: "bg-gradient-to-r from-orange-500 to-amber-600",
      borderColor: "border-orange-200",
      shadowColor: "hover:shadow-orange-200",
    },
  ];

  // --- 3. 'specialPrizes' array MODIFIED ---
  const specialPrizes = [
    {
      title: "Best Innovation Award",
      amount: "₹15,000",
      description: "Most innovative and creative solution",
      icon: Lightbulb,
      gradient: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      title: "Best Technical Implementation",
      amount: "₹15,000",
      description: "Excellence in code quality and architecture",
      icon: Code,
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
    },
    {
      title: "Best UI/UX Design",
      amount: "₹10,000",
      description: "Most intuitive, polished, and user-friendly interface",
      icon: Palette, // Changed from Users
      gradient: "from-pink-600 to-rose-600", // Updated gradient
      bgColor: "from-pink-50 to-rose-50", // Updated bgColor
    },
  ];

  const perks = [
    "Free accommodation during final round",
    "Explore local attractions",
    "Academic interaction with esteemed faculty",
    "Conference Gala Dinner",
    "Networking opportunities",
    "Industry exposure",
  ];

  const handleCertificateAccess = () => {
    if (teamCode.trim()) {
      // Simulate verification - in real app, this would validate against backend
      setIsParticipant(true);
      setShowCertificateModal(false);
      alert("Certificate verified! You can now download your certificates.");
    } else {
      alert("Please enter your team code");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
            <Sparkles className="h-4 w-4" />
            <span>Total Prize Pool: ₹1,60,000+</span>
            <Sparkles className="h-4 w-4" />
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Prizes & Recognition
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600">
            Celebrating excellence, innovation, and problem-solving skills at
            Aavartan 2026
          </p>
        </div>

        {/* Top 3 Prizes */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {mainPrizes.map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={index}
                className={`relative transform transition-all duration-300 ${
                  hoveredPrize === index ? "-translate-y-2 scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredPrize(index)}
                onMouseLeave={() => setHoveredPrize(null)}
              >
                <div
                  className={`bg-gradient-to-br ${prize.bgGradient} rounded-2xl border-2 p-8 ${prize.borderColor} shadow-xl ${prize.shadowColor} transition-all duration-300`}
                >
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} rounded-full opacity-20 blur-2xl`}
                      ></div>
                      <div className="relative rounded-full bg-white p-5 shadow-lg">
                        <Icon className={`h-16 w-16 ${prize.iconColor}`} />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4 flex justify-center">
                    <div
                      className={`${prize.badge} rounded-full px-5 py-2 text-sm font-bold text-white shadow-md`}
                    >
                      {prize.rank} Prize
                    </div>
                  </div>

                  <h3 className="mb-3 text-center text-2xl font-bold text-slate-800">
                    {prize.position}
                  </h3>
                  <p
                    className={`mb-3 bg-gradient-to-r text-center text-5xl font-extrabold ${prize.gradient} bg-clip-text text-transparent`}
                  >
                    {prize.amount}
                  </p>
                  <p className="text-center text-sm font-medium text-slate-500">
                    + Certificate of Achievement
                  </p>

                  <div className="mt-8 border-t-2 border-slate-100 pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-slate-700">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                          <ChevronRight className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium">Cash Prize</span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-700">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                          <ChevronRight className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium">
                          Achievement Certificate
                        </span>
                      </li>
                      <li className="flex items-center gap-3 text-slate-700">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                          <ChevronRight className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-medium">
                          Recognition & Fame
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Category Prizes */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Special Category Awards
            </h2>
            <p className="text-lg text-slate-600">
              Excellence in specific domains
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {specialPrizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  <div className="mb-6 flex justify-center">
                    {/* --- 4. FIXED: Hardcoded 'bg-green-500' is replaced with 'prize.gradient' --- */}
                    <div
                      className={`rounded-2xl bg-gradient-to-br ${prize.gradient} p-4 shadow-lg`}
                    >
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                  </div>

                  <h3 className="mb-2 text-center text-xl font-bold text-slate-800">
                    {prize.title}
                  </h3>
                  <p
                    className={`mb-4 text-center text-3xl font-extrabold text-slate-900`}
                  >
                    {prize.amount}
                  </p>
                  <p className="text-center text-sm text-slate-600">
                    {prize.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* --- END OF MODIFIED SECTION --- */}

        {/* Professional Certificate Section - Clean Bright Theme */}
        <div className="mb-24">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl md:p-12">
            <div className="relative">
              {/* Header - Simple and Clean */}
              <div className="mb-12 text-center">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <div className="rounded-xl bg-indigo-600 p-4 shadow-lg">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
                    Official Certificates
                  </h2>
                  <div className="rounded-xl bg-indigo-600 p-4 shadow-lg">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                </div>

                <p className="mt-4 text-lg text-slate-600">
                  Digitally signed and blockchain-verified certificates for all
                  participants
                </p>
              </div>

              {/* Certificate types - Clean Cards */}
              <div className="mb-12 grid gap-6 md:grid-cols-3">
                {/* Participation Certificate */}
                <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-xl bg-indigo-600 p-3 shadow-md">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Participation Certificate
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    For all registered teams who participate in Round 1
                  </p>
                </div>

                {/* Merit Certificate */}
                <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-xl bg-indigo-600 p-3 shadow-md">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Merit Certificate
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    For teams qualifying to Round 2 (Top 50 teams)
                  </p>
                </div>

                {/* Excellence Certificate */}
                <div className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg">
                  <div className="mb-4 inline-flex rounded-xl bg-indigo-600 p-3 shadow-md">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    Excellence Certificate
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    For finalists and prize winners
                  </p>
                </div>
              </div>

              {/* Certificate Access Section */}
              <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-8 md:p-10">
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-4">
                    <Shield className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-slate-900">
                    Access Your Certificate
                  </h3>
                  <p className="text-slate-600">
                    Enter your team code to download your official certificate
                  </p>
                </div>

                {!isParticipant ? (
                  <div className="mx-auto max-w-md">
                    <button
                      onClick={() => setShowCertificateModal(true)}
                      className="w-full rounded-xl bg-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl active:scale-95"
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Shield className="h-6 w-6" />
                        <span>Verify & Download Certificate</span>
                        <Download className="h-6 w-6" />
                      </div>
                    </button>

                    <div className="mt-4 text-center text-sm text-slate-500">
                      Check your registration email for your team code
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-3">
                      <Shield className="h-5 w-5 text-emerald-600" />
                      <span className="text-lg font-semibold text-emerald-700">
                        ✓ Verified Participant
                      </span>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white shadow-md transition-all hover:bg-indigo-700">
                        <Download className="h-5 w-5" />
                        <span>Participation</span>
                      </button>

                      <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white shadow-md transition-all hover:bg-indigo-700">
                        <Download className="h-5 w-5" />
                        <span>Merit</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex items-start gap-3 text-sm text-slate-600">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Certificates are digitally signed and verifiable via QR code
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {showCertificateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
              <div className="mb-6 text-center">
                <Shield className="mx-auto mb-4 h-16 w-16 text-indigo-600" />
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  Verify Your Team
                </h3>
                <p className="text-slate-600">
                  Enter your unique team code to access certificates
                </p>
              </div>

              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Team Code
                </label>
                <input
                  type="text"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value)}
                  placeholder="e.g., AAVARTAN-T001"
                  className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Check your registration email for your team code
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="flex-1 rounded-xl border-2 border-slate-200 px-6 py-3 font-semibold text-slate-700 transition-all hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCertificateAccess}
                  className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Additional Perks */}
        <div className="mb-24">
          <div className="mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Additional Perks for Finalists
            </h2>
            <p className="text-lg text-slate-700">
              More than just prizes - an unforgettable experience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 shadow-md">
                  <Gift className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-slate-800">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}