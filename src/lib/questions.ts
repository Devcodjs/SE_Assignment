// This file stores all your question data.
// It is imported by both the frontend (to display samples)
// and the backend (to get test data).

export const questions = [
  // Question 0
  {
    title: "Simple Addition",
    sampleTestCases: [
      { input: "1 2", expected_output: "3" },
      { input: "5 5", expected_output: "10" },
    ],
    hiddenTestCases: [
      { input: "100 200", expected_output: "300" },
      { input: "-1 1", expected_output: "0" },
    ],
    time_limit: 5, // Default time/memory for all cases
    memory_limit: 262144,
  },
  // Question 1
  {
    title: "Echo Input",
    sampleTestCases: [
      { input: "Hello", expected_output: "Hello" },
    ],
    hiddenTestCases: [
      { input: "World", expected_output: "World" },
      { input: "12345", expected_output: "12345" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Add more question objects here as needed...
];
