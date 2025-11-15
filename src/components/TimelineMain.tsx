"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, Trophy, Code, Users, Award } from "lucide-react";
import { type Event, type EventStatus } from "~/types/event";
import { events } from "~/constants/events";

const HackathonTimeline: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

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
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">
            Stages & Timeline
          </h1>
          <p className="text-gray-600">
            Track your progress through the hackathon stages
          </p>
        </div>
        <div className="relative">
          <div className="space-y-8">
            {events.map((event, index) => {
              const status = getEventStatus(event.startTime, event.endTime);
              const Icon = event.icon;
              const isLast = index === events.length - 1;

              return (
                <div key={event.id} className="relative flex gap-6">
                  <div className="relative z-10 flex shrink-0 flex-col items-center">
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

                    {!isLast && (
                      <div className="mt-4 flex flex-col items-center">
                        <div
                          className={`h-4 w-4 rounded-full transition-all duration-300 ${
                            status === "live"
                              ? "animate-pulse bg-red-500 shadow-lg ring-4 shadow-red-300 ring-red-200"
                              : "bg-blue-500 shadow-lg ring-4 shadow-blue-300 ring-blue-200"
                          }`}
                        ></div>

                        <div className="relative h-28 w-1">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-100 opacity-50"></div>

                          <div
                            className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                              status === "completed"
                                ? "h-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 opacity-80"
                                : status === "live"
                                  ? "h-1/2 animate-pulse bg-gradient-to-b from-red-500 via-red-400 to-red-300 opacity-80"
                                  : "h-0 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 opacity-80"
                            }`}
                          ></div>

                          {status === "live" && (
                            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-b from-red-300 to-transparent blur-sm"></div>
                          )}
                        </div>
                        <div
                          className={`h-4 w-4 rounded-full transition-all duration-300 ${
                            status === "live"
                              ? "animate-pulse bg-red-500 shadow-lg ring-4 shadow-red-300 ring-red-200"
                              : "shadow-lg ring-4 shadow-blue-300 ring-blue-200"
                          }`}
                        ></div>
                      </div>
                    )}
                  </div>

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
