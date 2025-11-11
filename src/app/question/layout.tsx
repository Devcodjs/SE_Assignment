"use client";

import Navbar from "~/components/questions/Navbar";
import { QuestionProvider } from "~/hooks/QuestionContext";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuestionProvider>
      <div className="flex h-screen flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </QuestionProvider>
  );
}
