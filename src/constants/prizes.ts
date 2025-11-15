import {
  Trophy,
  Medal,
  Award,
  Lightbulb,
  Code,
  Palette,
} from "~/components/icons";

export const perks = [
  "Free accommodation during final round",
  "Explore local attractions",
  "Academic interaction with esteemed faculty",
  "Conference Gala Dinner",
  "Networking opportunities",
  "Speaker Sessions",
];

export const mainPrizes = [
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

export const specialPrizes = [
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
    title: "Best Design",
    amount: "₹10,000",
    description: "Most intuitive, polished, and user-friendly interface",
    icon: Palette,
    gradient: "from-pink-600 to-rose-600",
    bgColor: "from-pink-50 to-rose-50",
  },
];
