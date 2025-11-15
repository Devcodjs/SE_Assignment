"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerationGFormLink } from "~/constants/constants";

export default function AboutPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("hackathon");

  const objectives = [
    {
      icon: "💡",
      title: "Innovation in AI/ML",
      description:
        "Encourage cutting-edge solutions using artificial intelligence and machine learning",
    },
    {
      icon: "🤝",
      title: "Collaborative Problem-Solving",
      description:
        "Foster teamwork and collective intelligence in tackling complex challenges",
    },
    {
      icon: "🎯",
      title: "Identify Top Talent",
      description:
        "Discover and nurture creative thinkers and skilled developers in the tech community",
    },
    {
      icon: "🌍",
      title: "Real-World Exposure",
      description:
        "Provide hands-on experience with industry-relevant problem-solving scenarios",
    },
  ];

  return (
    <div
      id="about"
      className="pt-8 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-200 opacity-20 mix-blend-multiply blur-3xl filter"></div>
        <div className="absolute top-40 right-10 h-72 w-72 animate-pulse rounded-full bg-orange-200 opacity-20 mix-blend-multiply blur-3xl filter"></div>
        <div className="absolute bottom-20 left-1/2 h-72 w-72 animate-pulse rounded-full bg-purple-200 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      </div>

      {/* Hero Section*/}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100">
        <div className="absolute inset-0">
          <div className="animate-pan-bg absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMiIHN0cm9rZT0iI2UwZTdmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuNCIvPjwvZz48L3N2Zz4=')] bg-repeat opacity-50"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-5xl space-y-5 px-6 py-30 text-center md:px-12 md:py-10">
          <h1 className="text-6xl leading-tight font-extrabold tracking-tight md:text-7xl">
            <span className="bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <p className="mx-auto max-w-5xl text-xl text-slate-600 drop-shadow-sm md:text-2xl">
            Discover Aavartan 2026, proudly hosted by an institution at the
            forefront of technological innovation and academic excellence.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="relative z-10 mx-auto -mt-8 max-w-7xl px-8">
        <div className="flex gap-2 rounded-2xl bg-white p-2 shadow-2xl">
          <button
            onClick={() => setActiveTab("hackathon")}
            className={`flex-1 rounded-xl px-6 py-4 text-lg font-bold transition-all duration-300 ${
              activeTab === "hackathon"
                ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            🚀 About Aavartan 2026
          </button>
          <button
            onClick={() => setActiveTab("nit")}
            className={`flex-1 rounded-xl px-6 py-4 text-lg font-bold transition-all duration-300 ${
              activeTab === "nit"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            🏛️ About NIT Silchar
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative mx-auto max-w-7xl px-8 py-16">
        {/* Hackathon Tab Content */}
        {activeTab === "hackathon" && (
          <div className="animate-fade-in space-y-20">
            {/* What is Aavartan 2026 */}
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5"></div>

              <div
                className="relative grid grid-cols-2 gap-0"
                style={{ minHeight: "550px" }}
              >
                {/* Image Section */}
                <div className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-10 pl-14">
                    <div className="group relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-600 to-blue-600 opacity-25 blur-lg transition duration-500 group-hover:opacity-40"></div>

                      {/* MODIFIED: narrower and smaller box with centered alignment, reduced hover translate */}
                      <div className="relative mx-auto max-h-[300px] w-full max-w-[550px] overflow-hidden rounded-2xl shadow-[0_15px_60px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.4)]">
                        <img
                          src="https://images.unsplash.com/photo-1610461853808-0c0bf780a7c6?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /* <-- The one, correct link */
                          alt="Hackathon"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative h-full">
                  <div className="absolute inset-0 flex items-center justify-center p-10 pr-14">
                    <div className="group relative">
                      {/* Animated border glow */}
                      <div className="absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-20 blur transition duration-500 group-hover:opacity-30"></div>

                      {/* MODIFIED: smaller width and limited hover translate */}
                      <div className="relative mx-auto flex max-h-[550px] w-full max-w-[600px] flex-col justify-center space-y-6 rounded-2xl border border-gray-100/50 bg-white/90 px-14 py-12 shadow-[0_15px_60px_-10px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)]">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
                            <p className="text-xs font-bold tracking-[0.2em] text-black uppercase">
                              The Event
                            </p>
                          </div>

                          <h1 className="text-5xl leading-tight font-bold text-black">
                            What is Aavartan 2026?
                          </h1>
                        </div>

                        <div className="text-[15px] leading-relaxed text-black">
                          <p>
                            Aavartan 2026 is a{" "}
                            <span className="font-semibold text-black">
                              national-level coding competition
                            </span>{" "}
                            organized by NIT Silchar, designed to bring together
                            the brightest minds in technology. This prestigious
                            event challenges participants to push the boundaries
                            of innovation through{" "}
                            <span className="font-semibold text-orange-600">
                              artificial intelligence, machine learning, and
                              cutting-edge software development
                            </span>
                            . With{" "}
                            <span className="font-semibold text-black">
                              three progressive rounds
                            </span>{" "}
                            culminating in a grand finale at our beautiful
                            campus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Objectives Section */}
            <div>
              <div className="mb-12 space-y-4 text-center">
                <p className="text-sm font-bold tracking-wide text-orange-600 uppercase">
                  Our Mission
                </p>
                <h2 className="text-5xl font-bold text-gray-900">
                  Objectives of Aavartan 2026
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                  Creating a transformative experience that challenges
                  participants to push boundaries and innovate
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-gray-900 via-blue-900 to-black opacity-25 blur transition duration-500 group-hover:opacity-50"></div>
                    <div className="relative h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                      <div className="space-y-5">
                        <div className="transform text-6xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                          {objective.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {objective.title}
                        </h3>
                        <p className="leading-relaxed text-gray-600">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* NIT Silchar Tab Content */}
        {activeTab === "nit" && (
          <div className="animate-fade-in space-y-20">
            {/* Institute Overview */}
            <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/80 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-orange-500/5"></div>

              <div
                className="relative grid grid-cols-2 gap-0"
                style={{ minHeight: "550px" }}
              >
                {/* Image Section */}
                <div className="relative h-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-10 pl-14">
                    <div className="group relative">
                      {/* Glow effect */}
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-orange-600 opacity-25 blur-lg transition duration-500 group-hover:opacity-40"></div>

                      {/* MODIFIED: smaller max width and height with hover translates */}
                      <div className="relative mx-auto max-h-[550px] w-full max-w-[600px] overflow-hidden rounded-2xl shadow-[0_15px_60px_-10px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.4)]">
                        <img
                          src="https://technovation.nits.ac.in/_app/immutable/assets/nits-1.jw_vNGav.jpg"
                          alt="NIT Silchar Campus"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Image overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative h-full">
                  <div className="absolute inset-0 flex items-center justify-center p-10 pr-14">
                    <div className="group relative">
                      {/* Animated border glow */}
                      <div className="absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-br bg-gradient-to-r from-gray-900 via-blue-900 to-black opacity-20 blur transition duration-500 group-hover:opacity-30"></div>

                      {/* MODIFIED: smaller max width and height with hover translate */}
                      <div className="relative mx-auto flex max-h-[500px] w-full max-w-[600px] flex-col justify-center space-y-6 rounded-2xl border border-gray-100/50 bg-white/90 px-14 py-12 shadow-[0_15px_60px_-10px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)]">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
                            <p className="text-xs font-bold tracking-[0.2em] text-black uppercase">
                              The Institute
                            </p>
                          </div>

                          <h1 className="text-5xl leading-tight font-bold text-black">
                            Welcome to NIT Silchar
                          </h1>
                        </div>

                        <div className="text-[15px] leading-relaxed text-black">
                          <p>
                            The{" "}
                            <span className="font-semibold text-black">
                              National Institute of Technology, Silchar (NIT
                              Silchar)
                            </span>{" "}
                            is one of the 31 National Institutes of Technology
                            in India. Established in{" "}
                            <span className="font-bold text-black">1967</span>{" "}
                            as a Regional Engineering College in Assam, it was
                            upgraded to NIT status in{" "}
                            <span className="font-bold text-black">2002</span>{" "}
                            and declared an{" "}
                            <span className="font-semibold text-black italic">
                              Institute of National Importance
                            </span>{" "}
                            under the NIT Act, 2007. The institute has emerged
                            as a hub of excellence in engineering education and
                            research in North-East India.
                          </p>
                        </div>

                        <div className="pt-3">
                          <button
                            onClick={() =>
                              window.open("https://www.nits.ac.in/", "_blank")
                            }
                            className="group/btn relative flex transform items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-orange-700 hover:to-orange-800 hover:shadow-2xl"
                          >
                            <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover/btn:opacity-20"></span>
                            <span className="relative">Know More</span>
                            <svg
                              className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                              fill="none"
                              stroke="black"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Why Participate Section */}
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-16 text-white shadow-[0_30px_100px_-20px_rgba(0,0,0,0.4)]">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ=Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')]"></div>
            </div>

            <div className="relative grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <h2 className="text-5xl font-bold">Why Participate?</h2>
                <div className="space-y-5">
                  {[
                    {
                      title: "Three Progressive Rounds",
                      desc: "From online screening to the final offline hackathon at NIT Silchar",
                    },
                    {
                      title: "Exciting Prizes Worth ₹1,60,000", // Corrected total from PDF
                      desc: "Cash prizes for winners and certificates for all registered participants", // Corrected description
                    },
                    {
                      title: "Free Accommodation & Local Tours",
                      desc: "Experience the beauty of Silchar and engage with academia",
                    },
                    {
                      title: "Network with Industry Leaders",
                      desc: "Connect with esteemed academicians and fellow innovators",
                    },
                  ].map((item, index) => (
                    <div key={index} className="group flex items-start gap-4">
                      <div className="mt-1 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 p-3 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="mb-1 text-xl font-bold">{item.title}</h4>
                        <p className="text-blue-100">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-md">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold">Registration Details</h3>
                    <div className="space-y-4">
                      {[
                        { label: "Team Size:", value: "Up to 3 members" },
                        {
                          label: "Registration Fee:",
                          value: "₹2,000 per team",
                        },
                        { label: "Deadline:", value: "30th December 2025" },
                        { label: "Eligibility:", value: "UG/PG/PhD Students" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between border-b border-white/20 pb-4"
                        >
                          <span className="font-medium text-blue-100">
                            {item.label}
                          </span>
                          <span className="text-lg font-bold">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() =>
                        window.open(
                          "https://forms.gle/PR5WMRiVVgVSjudL8",
                          "_blank",
                        )
                      }
                      className="group/reg relative mt-8 flex w-full transform items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-5 text-xl font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-orange-700 hover:shadow-2xl"
                    >
                      <span className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover/reg:opacity-20"></span>
                      <span className="relative">Register Now</span>
                      <svg
                        className="relative h-6 w-6 transform transition-transform duration-300 group-hover/reg:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
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
