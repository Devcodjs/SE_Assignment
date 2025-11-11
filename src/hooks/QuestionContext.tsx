"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface QuestionContextType {
  currentQuestionIndex: number;
  totalQuestions: number;
  setCurrentQuestionIndex: (index: number) => void;
  setTotalQuestions: (total: number) => void;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined,
);

export function QuestionProvider({ children }: { children: ReactNode }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  return (
    <QuestionContext.Provider
      value={{
        currentQuestionIndex,
        totalQuestions,
        setCurrentQuestionIndex,
        setTotalQuestions,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestion() {
  const context = useContext(QuestionContext);
  if (context === undefined) {
    throw new Error("useQuestion must be used within a QuestionProvider");
  }
  return context;
}
