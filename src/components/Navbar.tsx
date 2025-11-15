"use client";

import React, { useState, useEffect } from "react";
import LoginPopup from "./Login";
import { useAuth } from "~/hooks/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, loading } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
  ];
  if (isLoginOpen)
    return (
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    );
  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white py-3 shadow-lg"
          : "bg-white/95 py-4 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          <a href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              <div className="absolute inset-0 rounded-lg bg-orange-500 opacity-30 blur transition group-hover:opacity-50"></div>
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 shadow-md">
                <span className="text-xl font-bold text-white">H</span>
              </div>
            </div>
            <div>
              <h1 className="text-lg leading-tight font-bold">
                <span className="text-orange-600">Hackathon 2026, </span>
                <span className="text-slate-900">NIT Silchar</span>
              </h1>
            </div>
          </a>
          <div className="flex-1"></div>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative font-medium text-slate-700 transition-colors hover:text-orange-600"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              if(user) {
                router.push("/dashboard")
              }
              else{
                setIsLoginOpen(true)
              }
            }}
            disabled={loading}
            className={`${loading? "opacity-50 cursor-not-allowed":""} ml-2 cursor-pointer inline-flex transform items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-[1.03] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 active:translate-y-0.5`}
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-6"></div>
            ) : user ? "Dashboard" : "Login"}
          </button>
        </div>
      </div>
    </nav>
  );
}
