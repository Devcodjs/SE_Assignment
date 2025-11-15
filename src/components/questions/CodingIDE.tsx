"use client";

import { useState } from "react";
import { CirclePlay, UploadCloud } from "lucide-react";
import Editor from "@monaco-editor/react";
import { questions } from "~/lib/questions"; // Adjust this import path as needed

type Language = "C" | "CPP" | "Java" | "Python";

interface CodingIDEProps {
  questionNumber: number; // Pass the question number as a prop
  defaultLanguage?: Language;
}

const defaultCode: Record<Language, string> = {
  C: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
  CPP: `#include <iostream>
using namespace std;

int main() {
    // Write your code here
    
    return 0;
}`,
  Java: `public class Main {
    public static void main(String[] args) {
        // Write your code here
        
    }
}`,
  Python: `# Write your code here

`,
};

// Polling helper
const poll = (fn: () => Promise<boolean>, interval: number) => {
  const pollInterval = setInterval(async () => {
    const done = await fn();
    if (done) {
      clearInterval(pollInterval);
    }
  }, interval);
};

// Result types
type Verdict = "Accepted" | "Wrong Answer" | "Compilation Error" | "TLE" | "MLE" | "RE" | "REQUEST_QUEUED" | "CODE_COMPILED" | "Running";

interface Result {
  verdict: Verdict;
  message: string;
  output?: string;
  expected?: string;
}

export default function CodingIDE({
  questionNumber,
  defaultLanguage = "Python",
}: CodingIDEProps) {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);
  const [code, setCode] = useState(defaultCode[defaultLanguage]);
  const [isLoadingRun, setIsLoadingRun] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [runResults, setRunResults] = useState<Record<number, Result>>({});
  const [submitResults, setSubmitResults] = useState<Record<number, Result>>({});

  const question = questions[questionNumber];
  if (!question) {
    return <div>Error: Question not found.</div>;
  }

  const { sampleTestCases, hiddenTestCases } = question;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Language;
    setSelectedLanguage(newLang);
    setCode(defaultCode[newLang]);
  };

  // Generic function to run a single test case and poll for its result
  const runAndCheckTest = async (
    testCaseType: "sampleTestCases" | "hiddenTestCases",
    testCaseIndex: number,
    onResult: (index: number, result: Result) => void
  ) => {
    // 1. Submit the code
    const submitRes = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: code,
        lang: selectedLanguage,
        questionNumber,
        testCaseType,
        testCaseIndex,
      }),
    });

    if (!submitRes.ok) {
      const errorData = await submitRes.json();
      onResult(testCaseIndex, {
        verdict: "Compilation Error", // Generic error for submission failure
        message: errorData.message || "Failed to submit code.",
      });
      return;
    }

    const { he_id } = await submitRes.json();

    // 2. Poll for the result
    poll(async () => {
      const checkRes = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId: he_id,
          questionNumber,
          testCaseType,
          testCaseIndex,
        }),
      });

      if (!checkRes.ok) {
        // Stop polling on server error
        onResult(testCaseIndex, {
          verdict: "Compilation Error", // Generic error
          message: "Failed to check status.",
        });
        return true; // Stop
      }

      const resultData: Result & { testCaseIndex: number } = await checkRes.json();
      const { verdict } = resultData;

      // Update UI with intermediate or final status
      onResult(testCaseIndex, resultData);

      // Check if polling is done
      const isDone = verdict !== "REQUEST_QUEUED" && verdict !== "CODE_COMPILED" && verdict !== "Running";
      return isDone;
    }, 2000); // Poll every 2 seconds
  };

  // Handle "Run Code" for sample cases
  const handleRun = async () => {
    setIsLoadingRun(true);
    setRunResults({}); // Clear previous results
    
    // Set initial "Running" status for all sample cases
    const initialResults: Record<number, Result> = {};
    sampleTestCases.forEach((_, i) => {
      initialResults[i] = { verdict: "Running", message: "In queue..." };
    });
    setRunResults(initialResults);

    // Run all sample cases in parallel
    const allPromises = sampleTestCases.map((_, i) =>
      runAndCheckTest("sampleTestCases", i, (index, result) => {
        setRunResults((prev) => ({ ...prev, [index]: result }));
      })
    );

    await Promise.all(allPromises);
    setIsLoadingRun(false);
  };

  // Handle "Submit Code" for hidden cases
  const handleSubmit = async () => {
    setIsLoadingSubmit(true);
    setSubmitResults({}); // Clear previous results

    // Set initial "Running" status for all hidden cases
    const initialResults: Record<number, Result> = {};
    hiddenTestCases.forEach((_, i) => {
      initialResults[i] = { verdict: "Running", message: "In queue..." };
    });
    setSubmitResults(initialResults);

    // Run all hidden cases in parallel
    const allPromises = hiddenTestCases.map((_, i) =>
      runAndCheckTest("hiddenTestCases", i, (index, result) => {
        setSubmitResults((prev) => ({ ...prev, [index]: result }));
      })
    );

    await Promise.all(allPromises);
    setIsLoadingSubmit(false);
  };

  const getResultColor = (verdict?: Verdict) => {
    if (!verdict) return "text-gray-500";
    switch (verdict) {
      case "Accepted":
        return "text-green-600";
      case "Wrong Answer":
      case "Compilation Error":
      case "TLE":
      case "MLE":
      case "RE":
        return "text-red-600";
      default:
        return "text-yellow-600";
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-gray-50">
      {/* Language Selector + Run/Submit Buttons */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <label className="text-sm font-medium text-gray-700">Language:</label>
          <select
            aria-label="Select programming language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="C">C</option>
            <option value="CPP">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleRun}
            disabled={isLoadingRun || isLoadingSubmit}
            className="flex items-center space-x-2 rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoadingRun ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Running...</span>
              </>
            ) : (
              <>
                <CirclePlay />
                <span>Run Code</span>
              </>
            )}
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoadingRun || isLoadingSubmit}
            className="flex items-center space-x-2 rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoadingSubmit ? (
              <>
                <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <UploadCloud />
                <span>Submit</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="mb-4 flex min-h-0 flex-1 flex-col">
        <div className="flex items-center justify-between rounded-t-lg bg-gray-800 px-4 py-2">
          <span className="text-sm font-medium text-gray-300">Code Editor</span>
          <span className="text-xs text-gray-400">{selectedLanguage}</span>
        </div>
        <div className="flex-1 overflow-hidden rounded-b-lg">
          <Editor
            height="100%"
            defaultLanguage={
              selectedLanguage === "CPP"
                ? "cpp"
                : selectedLanguage === "C"
                ? "c"
                : selectedLanguage.toLowerCase()
            }
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val ?? "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              automaticLayout: true,
              scrollBeyondLastLine: false,
              wordWrap: "on",
            }}
          />
        </div>
      </div>

      {/* Test Cases / Output */}
      <div className="flex h-64 flex-col">
        <label className="mb-2 text-sm font-medium text-gray-700">
          Run & Submission Results
        </label>
        <div className="flex-1 overflow-y-auto rounded-lg border border-gray-300 bg-white p-3 font-mono text-sm">
          {/* Default view: Sample Test Cases */}
          {!isLoadingRun && !isLoadingSubmit && Object.keys(runResults).length === 0 && Object.keys(submitResults).length === 0 && (
            <div>
              <h3 className="mb-2 font-sans text-base font-medium text-black">Sample Test Cases</h3>
              {sampleTestCases.map((tc, i) => (
                <div key={i} className="mb-3 rounded-lg border p-3">
                  <p className="font-sans font-semibold">Sample {i + 1}</p>
                  <p><span className="font-medium text-gray-600">Input:</span> {tc.input}</p>
                  <p><span className="font-medium text-gray-600">Expected Output:</span> {tc.expected_output}</p>
                </div>
              ))}
            </div>
          )}

          {/* "Run Code" Results View */}
          {(isLoadingRun || Object.keys(runResults).length > 0) && (
            <div>
              <h3 className="mb-2 font-sans text-base font-medium text-black">Sample Test Results</h3>
              {sampleTestCases.map((_, i) => {
                const result = runResults[i];
                return (
                  <div key={i} className={`mb-3 rounded-lg border p-3 ${
                    result?.verdict === "Accepted" ? "border-green-300" : (result && result.verdict !== "Running") ? "border-red-300" : "border-gray-300"
                  }`}>
                    <p className={`font-sans font-semibold ${getResultColor(result?.verdict)}`}>
                      Sample {i + 1}: {result?.verdict || "Waiting..."}
                    </p>
                    {result && result.verdict !== "Accepted" && result.verdict !== "Running" && (
                      <p className="whitespace-pre-wrap">{result.message}</p>
                    )}
                    {result?.verdict === "Accepted" && (
                       <p className="whitespace-pre-wrap">Output: {result.output}</p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* "Submit" Results View */}
          {(isLoadingSubmit || Object.keys(submitResults).length > 0) && (
             <div className="mt-4">
              <h3 className="mb-2 font-sans text-base font-medium text-black">Submission Results</h3>
              {hiddenTestCases.map((_, i) => {
                const result = submitResults[i];
                return (
                  <div key={i} className={`mb-3 rounded-lg border p-3 ${
                    result?.verdict === "Accepted" ? "border-green-300" : (result && result.verdict !== "Running") ? "border-red-300" : "border-gray-300"
                  }`}>
                    <p className={`font-sans font-semibold ${getResultColor(result?.verdict)}`}>
                      Hidden Case {i + 1}: {result?.verdict || "Waiting..."}
                    </p>
                    {result && result.verdict !== "Accepted" && result.verdict !== "Running" && (
                      <p className="whitespace-pre-wrap">{result.message}</p>
                    )}
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}