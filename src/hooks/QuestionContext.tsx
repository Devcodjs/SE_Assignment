"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useMemo,
  useCallback,
} from "react";

interface QuestionContextType {
  currentQuestionIndex: number;
  totalQuestions: number;
  hasStarted: boolean;
  setCurrentQuestionIndex: (index: number) => void;
  setTotalQuestions: (total: number) => void;
  startTest: (onStarted: () => void) => void;
  submitTest: (onSubmitted: () => void) => void;
  forceExit: (message: string) => void;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined,
);

export function QuestionProvider({
  children,
  onForceExit,
}: {
  children: ReactNode;
  onForceExit: (message: string) => void;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startTest = useCallback((onStarted: () => void) => {
    setHasStarted(true);
    setCurrentQuestionIndex(0);
    onStarted();
  }, []);

  const submitTest = useCallback((onSubmitted: () => void) => {
    setHasStarted(false);
    onSubmitted();
  }, []);

  // --- THIS IS THE FIX ---
  // We remove `hasStarted` from the dependency array
  // and use a functional update for `setHasStarted`.
  const forceExit = useCallback((message: string) => {
    
    // This is a "functional update". 
    // `prevHasStarted` is guaranteed to be the *current* state.
    setHasStarted((prevHasStarted) => {
      // If the test wasn't started, or was already stopped, do nothing.
      if (!prevHasStarted) {
        return false;
      }
      
      // If it *was* started, stop it and call the exit function.
      onForceExit(message);
      return false;
    });

  }, [onForceExit]); // Now only depends on onForceExit (which is stable)

  const contextValue = useMemo(() => ({
    currentQuestionIndex,
    totalQuestions,
    hasStarted,
    setCurrentQuestionIndex,
    setTotalQuestions,
    startTest,
    submitTest,
    forceExit,
  }), [
    currentQuestionIndex,
    totalQuestions,
    hasStarted,
    startTest,
    submitTest,
    forceExit
  ]);

  return (
    <QuestionContext.Provider
      value={contextValue}
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