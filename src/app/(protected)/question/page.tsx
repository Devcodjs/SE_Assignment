"use client";

import { useEffect, useState } from "react";
import { useQuestion } from "~/hooks/QuestionContext"; // Fixed path
import MCQQuestion from "~/components/questions/MCQQuestion"; // Fixed path
import IntegerQuestion from "~/components/questions/IntegerQuestion"; // Fixed path
import CodingQuestion from "~/components/questions/CodingQuestion"; // Fixed path
import type { Question } from "~/types/Question"; // Fixed path
import { useRouter } from "next/navigation"; // Import useRouter

// This is the local question array from your previous file
// This is the local question array from your previous file
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
    question: "Write a program to calculate sum of 2 numbers",
  },
  // Added questions start here
  {
    "id": 4,
    "type": "coding",
    "question": "Write a program that reads a single string from the input and prints the exact same string to the output."
  },
  {
    "id": 5,
    "type": "coding",
    "question": "Write a program that reads two space-separated integers from the input and prints the larger of the two."
  },
  {
    "id": 6,
    "type": "coding",
    "question": "Write a program that reads a single integer from the input and prints 'Even' if the number is even, and 'Odd' if the number is odd."
  },
  {
    "id": 7,
    "type": "coding",
    "question": "Write a program that reads a single string from the input and prints the string in reverse order."
  },
  {
    "id": 8,
    "type": "coding",
    "question": "Write a program that reads a single non-negative integer 'n' from the input and prints its factorial (n!). The factorial of 0 is 1."
  },
  {
    "id": 9,
    "type": "coding",
    "question": "Write a program that reads a line of space-separated integers from the input and prints their sum."
  },
  {
    "id": 10,
    "type": "coding",
    "question": "Write a program that reads a single string from the input and prints 'Yes' if the string is a palindrome, and 'No' otherwise. A palindrome is a string that reads the same forwards and backwards."
  },
  {
    "id": 11,
    "type": "coding",
    "question": "Write a program that reads two positive integers from the input (space-separated) and prints their Greatest Common Divisor (GCD)."
  },
  {
    "id": 12,
    "type": "coding",
    "question": "Write a program that reads two space-separated strings from the input and prints them as a single string (concatenated) without the space."
  },
  {
    "id": 13,
    "type": "coding",
    "question": "Write a program that reads a single string from the input and prints the total number of vowels (a, e, i, o, u) it contains. The check should be case-insensitive (count both 'a' and 'A')."
  },
  {
    "id": 14,
    "type": "coding",
    "question": "Write a program that reads a single positive integer 'n' from the input and prints the nth Fibonacci number. Assume the sequence starts F(1) = 1, F(2) = 1, and F(n) = F(n-1) + F(n-2) for n > 2."
  }
];

export default function QuizPage() {
  // 1. Get `startTest` from the context
  const { 
    currentQuestionIndex, 
    setCurrentQuestionIndex, 
    setTotalQuestions,
    startTest // <-- Get the function
    // Removed `router` from context
  } = useQuestion();
  
  const router = useRouter(); // Use the hook directly
  
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(
    null,
  );
  const [integerAnswer, setIntegerAnswer] = useState("");

  // 2. THIS IS THE FIX
  // When this page mounts, it means the test has *really* started.
  // We must tell the context, so the proctoring can begin.
  useEffect(() => {
    startTest(() => {
      // This callback now just sets the total.
      // We are already on the correct page.
      setTotalQuestions(questions.length);
    });
  }, [startTest, setTotalQuestions]); // Run only once on mount

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
          questionNumber={currentQuestionIndex + 1} // Assuming 1-based index for display
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}