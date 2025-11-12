"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, Trophy, Code, Users, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type EventStatus = "live" | "upcoming" | "completed";

interface Event {
  id: number;
  date: number;
  month: string;
  year: number;
  title: string;
  description: string;
  note: string;
  startTime: Date;
  endTime: Date;
  icon: LucideIcon;
}

const HackathonTimeline: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const events: Event[] = [
    {
      id: 1,
      date: 12,
      month: "Nov",
      year: 2024,
      title: "MCQ Challenge",
      description:
        "Candidates will have to crack 25 questions based on topics like Data Structures, Algorithms, Object Oriented Programming, and Design, along with other Computer Science fundamentals in a stipulated time period. The test can only be accessed via Desktop/Laptop.",
      note: "This is an Eliminator Round.",
      startTime: new Date("2025-11-12T12:00:00"),
      endTime: new Date("2025-11-12T20:00:00"),
      icon: Code,
    },
    {
      id: 2,
      date: 18,
      month: "Nov",
      year: 2024,
      title: "Coding Challenge - I",
      description:
        "Participants will have to present logical coding solutions (in any language of their choice) to 2 problem statements at hand in 90 minutes. The assessment can only be accessed via Desktop/Laptop.",
      note: "This is an Eliminator Round.",
      startTime: new Date("2025-11-18T14:00:00"),
      endTime: new Date("2025-11-18T20:00:00"),
      icon: Code,
    },
    {
      id: 3,
      date: 24,
      month: "Nov",
      year: 2024,
      title: "Coding Challenge - II",
      description:
        "Shortlisted candidates from the coding round will have to undergo the second round of coding. Logical coding solutions (in any language of their choice) to 2 problem statements will have to be solved in 90 minutes. The assessment can only be accessed via Desktop/Laptop.",
      note: "The cumulative score of the MCQ and previous coding round will be considered.",
      startTime: new Date("2025-11-24T14:00:00"),
      endTime: new Date("2025-11-24T20:00:00"),
      icon: Users,
    },
    {
      id: 4,
      date: 30,
      month: "Nov",
      year: 2024,
      title: "Final Presentation",
      description:
        "Top teams will present their solutions to a panel of judges. Teams must demonstrate their working prototype and explain their technical approach and business impact.",
      note: "This is the Final Round.",
      startTime: new Date("2025-11-30T10:00:00"),
      endTime: new Date("2025-11-30T18:00:00"),
      icon: Trophy,
    },
  ];

  const getEventStatus = (startTime: Date, endTime: Date): EventStatus => {
    if (currentDate >= startTime && currentDate <= endTime) {
      return "live";
    } else if (currentDate < startTime) {
      return "upcoming";
    } else {
      return "completed";
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  interface StatusBadgeProps {
    status: EventStatus;
  }

  const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    if (status === "live") {
      return (
        <div className="flex items-center gap-2 rounded-full bg-red-100 px-3 py-1.5 text-sm font-semibold text-red-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
          LIVE NOW
        </div>
      );
    } else if (status === "upcoming") {
      return (
        <div className="rounded-full bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-700">
          Upcoming
        </div>
      );
    } else {
      return (
        <button className="rounded-lg border-2 border-blue-600 bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50">
          Results
        </button>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Stages & Timeline
          </h1>
          <p className="text-gray-600">
            Track your progress through the hackathon stages
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 flex gap-4 overflow-x-auto pb-2">
          {[
            "Stages & Timeline",
            "Details",
            "Dates & Deadlines",
            "Prizes",
            "Reviews",
            "FAQs & Discussions",
          ].map((tab, idx) => (
            <button
              key={idx}
              className={`rounded-full px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                idx === 0
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Events */}
          <div className="space-y-8">
            {events.map((event, index) => {
              const status = getEventStatus(event.startTime, event.endTime);
              const Icon = event.icon;
              const isLast = index === events.length - 1;

              return (
                <div key={event.id} className="relative flex gap-6">
                  {/* Date Badge with Timeline */}
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
                    {/* Date Badge */}
                    <div
                      className={`flex h-16 w-16 transform flex-col items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110 ${
                        status === "live"
                          ? "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-300"
                          : status === "upcoming"
                            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-300"
                            : "bg-gradient-to-br from-gray-300 to-gray-100 text-black shadow-lg shadow-gray-300"
                      }`}
                    >
                      <div className="text-2xl font-bold">{event.date}</div>
                      <div className="text-xs font-medium">{event.month}</div>
                    </div>

                    {/* Connector line and dot */}
                    {!isLast && (
                      <div className="mt-4 flex flex-col items-center">
                        {/* Animated dot */}
                        <div
                          className={`h-4 w-4 rounded-full transition-all duration-300 ${
                            status === "live"
                              ? "animate-pulse bg-red-500 shadow-lg ring-4 shadow-red-300 ring-red-200"
                              : "bg-blue-500 shadow-lg ring-4 shadow-blue-300 ring-blue-200"
                          }`}
                        ></div>

                        {/* Decorative connecting line */}
                        <div className="relative h-28 w-1">
                          {/* Background line with fade */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 opacity-50"></div>

                          {/* Animated progress line */}
                          <div
                            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                              status === "completed"
                                ? "h-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 opacity-80"
                                : status === "live"
                                  ? "h-1/2 animate-pulse bg-gradient-to-b from-red-500 via-red-400 to-red-300 opacity-80"
                                  : "h-0 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 opacity-80"
                            }`}
                          ></div>

                          {/* Glowing effect for live events */}
                          {status === "live" && (
                            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-b from-red-300 to-transparent blur-sm"></div>
                          )}
                        </div>
                        <div
                          className={`h-4 w-4 rounded-full transition-all duration-300 ${
                            status === "live"
                              ? "animate-pulse bg-red-500 shadow-lg ring-4 shadow-red-300 ring-red-200"
                              : " shadow-lg ring-4 shadow-blue-300 ring-blue-200"
                          }`}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Event Card */}
                  <div
                    className={`flex-1 rounded-2xl p-6 transition-all ${
                      status === "live"
                        ? "border-2 border-red-200 bg-white shadow-xl"
                        : "bg-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-lg p-2 ${
                            status === "live"
                              ? "bg-red-100"
                              : status === "upcoming"
                                ? "bg-blue-100"
                                : "bg-gray-100"
                          }`}
                        >
                          <Icon
                            className={`h-5 w-5 ${
                              status === "live"
                                ? "text-red-600"
                                : status === "upcoming"
                                  ? "text-blue-600"
                                  : "text-gray-600"
                            }`}
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {event.title}
                        </h2>
                      </div>
                      <StatusBadge status={status} />
                    </div>

                    <p className="mb-3 leading-relaxed text-gray-700">
                      {event.description}
                    </p>

                    <div className="mb-4 inline-block rounded-lg bg-amber-50 px-3 py-1 text-sm font-medium text-amber-800">
                      Note: {event.note}
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Start:</span>
                        <span>{formatTime(event.startTime)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">End:</span>
                        <span>{formatTime(event.endTime)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 flex items-center gap-3">
              <Award className="h-6 w-6 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Total Stages</h3>
            </div>
            <p className="text-3xl font-bold text-purple-600">
              {events.length}
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 flex items-center gap-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Upcoming Events</h3>
            </div>
            <p className="text-3xl font-bold text-blue-600">
              {
                events.filter(
                  (e) => getEventStatus(e.startTime, e.endTime) === "upcoming",
                ).length
              }
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-2 flex items-center gap-3">
              <Trophy className="h-6 w-6 text-green-600" />
              <h3 className="font-semibold text-gray-900">Completed</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {
                events.filter(
                  (e) => getEventStatus(e.startTime, e.endTime) === "completed",
                ).length
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonTimeline;
