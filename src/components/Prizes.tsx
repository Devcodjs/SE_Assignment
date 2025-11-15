"use client";

import React, { useState } from "react";
import {
  Award,
  ChevronRight,
  Download,
  Gift,
  Shield,
  Sparkles,
  Star,
} from "./icons";
import { mainPrizes, perks, specialPrizes } from "~/constants/prizes";

export default function Prizes() {
  const [hoveredPrize, setHoveredPrize] = useState<number | null>(0);
  const [isParticipant, setIsParticipant] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [teamCode, setTeamCode] = useState("");

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
    <div
      id="prizes"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-20"
    >
      <div className="mx-auto max-w-7xl">
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
