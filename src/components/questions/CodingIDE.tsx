"use client";

import { useState } from "react";
import { CirclePlay } from "lucide-react";
import Editor from "@monaco-editor/react";

type Language = "C" | "C++" | "Java" | "Python";

interface CodingIDEProps {
  defaultLanguage?: Language;
}

const defaultCode: Record<Language, string> = {
  C: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
  "C++": `#include <iostream>
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

export default function CodingIDE({
  defaultLanguage = "Python",
}: CodingIDEProps) {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(defaultLanguage);
  const [code, setCode] = useState(defaultCode[defaultLanguage]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Language;
    setSelectedLanguage(newLang);
    setCode(defaultCode[newLang]);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("Running code...");

    // Simulate API call
    setTimeout(() => {
      setOutput(
        `Compiled and executed successfully.\n\nOutput:\nHello World\n\nExecution time: 0.12s\nMemory used: 2.4 MB`,
      );
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="flex h-full w-full flex-col bg-gray-50">
      {/* Language Selector + Run Button */}
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
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <button
          onClick={handleRun}
          disabled={isRunning}
          className="flex items-center space-x-2 rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
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
              selectedLanguage === "C++"
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

      {/* Input/Output */}
      <div className="grid h-48 grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Standard Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter input here..."
            className="flex-1 resize-none rounded-lg border border-gray-300 p-3 font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium text-gray-700">
            Standard Output
          </label>
          <div className="flex-1 overflow-y-auto rounded-lg border border-gray-300 bg-gray-100 p-3 font-mono text-sm whitespace-pre-wrap">
            {output || "Output will appear here..."}
          </div>
        </div>
      </div>
    </div>
  );
}
