"use client";
import CodingIDE from "./CodingIDE";

interface CodingQuestionProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
}

export default function CodingQuestion({
  question,
  questionNumber,
  totalQuestions,
}: CodingQuestionProps) {
  return (
    <div className="flex h-full">
      {/* Left Half - Question Display */}
      <div className="w-1/2 overflow-y-auto border-r border-gray-200 bg-white p-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">
              Coding Question
            </span>
            <h2 className="mb-2 text-sm font-medium text-gray-500">
              Question {questionNumber} of {totalQuestions}
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-xl leading-relaxed font-medium text-gray-800">
              {question}
            </p>
          </div>

          {/* Sample Test Cases */}
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">
              Sample Test Cases
            </h3>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-600">
                Test Case 1:
              </p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-gray-500">
                    Input:
                  </span>
                  <pre className="mt-1 rounded border border-gray-200 bg-white p-2 text-sm">
                    5
                  </pre>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500">
                    Output:
                  </span>
                  <pre className="mt-1 rounded border border-gray-200 bg-white p-2 text-sm">
                    120
                  </pre>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-600">
                Test Case 2:
              </p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-gray-500">
                    Input:
                  </span>
                  <pre className="mt-1 rounded border border-gray-200 bg-white p-2 text-sm">
                    3
                  </pre>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-500">
                    Output:
                  </span>
                  <pre className="mt-1 rounded border border-gray-200 bg-white p-2 text-sm">
                    6
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Constraints */}
          <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <h4 className="mb-2 text-sm font-semibold text-yellow-800">
              Constraints:
            </h4>
            <ul className="space-y-1 text-sm text-yellow-700">
              <li>• 1 ≤ n ≤ 20</li>
              <li>• Time limit: 1 second</li>
              <li>• Memory limit: 256 MB</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Half - IDE */}
      <div className="flex w-1/2 p-6">
        <CodingIDE questionNumber={questionNumber-2} />
      </div>
    </div>
  );
}
