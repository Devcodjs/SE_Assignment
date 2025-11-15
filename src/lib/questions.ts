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
  // Question 2
  {
    title: "Find Maximum",
    sampleTestCases: [
      { input: "5 10", expected_output: "10" },
      { input: "10 5", expected_output: "10" },
    ],
    hiddenTestCases: [
      { input: "-1 -5", expected_output: "-1" },
      { input: "0 0", expected_output: "0" },
      { input: "1000 1001", expected_output: "1001" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 3
  {
    title: "Even or Odd",
    sampleTestCases: [
      { input: "4", expected_output: "Even" },
      { input: "7", expected_output: "Odd" },
    ],
    hiddenTestCases: [
      { input: "0", expected_output: "Even" },
      { input: "-2", expected_output: "Even" },
      { input: "-3", expected_output: "Odd" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 4
  {
    title: "Reverse a String",
    sampleTestCases: [
      { input: "hello", expected_output: "olleh" },
    ],
    hiddenTestCases: [
      { input: "world", expected_output: "dlorw" },
      { input: "a", expected_output: "a" },
      { input: "racecar", expected_output: "racecar" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 5
  {
    title: "Calculate Factorial",
    sampleTestCases: [
      { input: "5", expected_output: "120" },
      { input: "1", expected_output: "1" },
    ],
    hiddenTestCases: [
      { input: "0", expected_output: "1" },
      { input: "7", expected_output: "5040" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 6
  {
    title: "Sum of Numbers",
    sampleTestCases: [
      { input: "1 2 3 4 5", expected_output: "15" },
    ],
    hiddenTestCases: [
      { input: "10 20 30", expected_output: "60" },
      { input: "5", expected_output: "5" },
      { input: "-1 5 -2", expected_output: "2" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 7
  {
    title: "Palindrome Check",
    sampleTestCases: [
      { input: "racecar", expected_output: "Yes" },
      { input: "hello", expected_output: "No" },
    ],
    hiddenTestCases: [
      { input: "madam", expected_output: "Yes" },
      { input: "a", expected_output: "Yes" },
      { input: "ab", expected_output: "No" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 8
  {
    title: "Find GCD",
    sampleTestCases: [
      { input: "12 18", expected_output: "6" },
    ],
    hiddenTestCases: [
      { input: "5 7", expected_output: "1" },
      { input: "100 50", expected_output: "50" },
      { input: "17 17", expected_output: "17" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 9
  {
    title: "Concatenate Strings",
    sampleTestCases: [
      { input: "hello world", expected_output: "helloworld" },
    ],
    hiddenTestCases: [
      { input: "abc def", expected_output: "abcdef" },
      { input: "123 456", expected_output: "123456" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 10
  {
    title: "Count Vowels",
    sampleTestCases: [
      { input: "hello", expected_output: "2" },
      { input: "world", expected_output: "1" },
    ],
    hiddenTestCases: [
      { input: "aeiou", expected_output: "5" },
      { input: "rhythm", expected_output: "0" },
      { input: "AEIOU", expected_output: "5" },
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
  // Question 11
  {
    title: "Nth Fibonacci Number",
    sampleTestCases: [
      { input: "1", expected_output: "1" }, // F(1) = 1
      { input: "6", expected_output: "8" }, // F(6) = 8
    ],
    hiddenTestCases: [
      { input: "2", expected_output: "1" }, // F(2) = 1
      { input: "10", expected_output: "55" }, // F(10) = 55
    ],
    time_limit: 5,
    memory_limit: 262144,
  },
];
