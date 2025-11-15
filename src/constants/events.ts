import { Code, Trophy } from "lucide-react";
import { type Event } from "~/types/event";
export const events: Event[] = [
  {
    id: 1,
    date: 12,
    month: "Jan",
    year: 2026,
    title: "Round 1 (Online)",
    description:
      "Screening round with MCQs, aptitude, and basic coding questions.",
    note: "Top performers securing (50% marks or ranking in the top 75%) will qualify for Round 2.",
    startTime: new Date("2026-01-12T10:00:00"),
    endTime: new Date("2026-01-12T20:00:00"),
    icon: Code,
  },
  {
    id: 2,
    date: 2,
    month: "Feb",
    year: 2026,
    title: "Round 2 (Online)",
    description: "Problem statements based on coding and AI/ML application.",
    note: "Top teams will be shortlisted for the final round.",
    startTime: new Date("2026-02-02T10:00:00"),
    endTime: new Date("2026-02-02T20:00:00"),
    icon: Code,
  },
  {
    id: 3,
    date: 27,
    month: "Feb",
    year: 2026,
    title: "Round 3 (Offline at NIT Silchar)",
    description:
      "Final hackathon challenge with real-time problem-solving. Venue: NIT Silchar, Assam.",
    note: "This is the final hackathon challenge.",
    startTime: new Date("2026-02-27T09:00:00"),
    endTime: new Date("2026-02-27T18:00:00"),
    icon: Trophy,
  },
];
