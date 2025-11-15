import type { LucideIcon } from "lucide-react";

export type EventStatus = "live" | "upcoming" | "completed";
export type Event = {
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
};
