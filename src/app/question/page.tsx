"use client";

import { useEffect, useState } from "react";
import { useQuestion } from "~/hooks/QuestionContext";
import MCQQuestion from "~/components/questions/MCQQuestion";
import IntegerQuestion from "~/components/questions/IntegerQuestion";
import CodingQuestion from "~/components/questions/CodingQuestion";
import type { Question } from "~/types/Question";

const questions: Question[] = [
  {
    id: 1,
    type: "mcq",
    question: "What is the time complexity of binary search in a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: 1,
  },
  {
    id: 2,
    type: "integer",
    question: "How many bits are there in a byte?",
    correctAnswer: 8,
  },
  {
    id: 3,
    type: "coding",
    question: "Write a program to calculate factorial of n.",
  },
];

export default function QuizPage() {
  const { currentQuestionIndex, setCurrentQuestionIndex, setTotalQuestions } =
    useQuestion();
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(
    null,
  );
  const [integerAnswer, setIntegerAnswer] = useState("");

  useEffect(() => {
    setTotalQuestions(questions.length);
  }, [setTotalQuestions]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIntegerAnswer("");
    }
  };

  const handleClear = () => {
    setSelectedAnswer(null);
    setIntegerAnswer("");
  };

  return (
    <div className="flex h-full flex-col select-none">
      {currentQuestion?.type === "mcq" && (
        <MCQQuestion
          question={currentQuestion.question}
          options={currentQuestion.options ?? []}
          selectedAnswer={selectedAnswer as number | null}
          onSelect={setSelectedAnswer}
          onClear={handleClear}
          onNext={handleNext}
        />
      )}
      {currentQuestion?.type === "integer" && (
        <IntegerQuestion
          question={currentQuestion.question}
          value={integerAnswer}
          onChange={setIntegerAnswer}
          onClear={handleClear}
          onNext={handleNext}
        />
      )}
      {currentQuestion?.type === "coding" && (
        <CodingQuestion
          question={currentQuestion.question}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}
