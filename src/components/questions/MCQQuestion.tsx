"use client";

interface MCQQuestionProps {
  question: string;
  options: string[];
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
  onClear: () => void;
  onNext: () => void;
}

export default function MCQQuestion({
  question,
  options,
  selectedAnswer,
  onSelect,
  onClear,
  onNext,
}: MCQQuestionProps) {
  return (
    <div className="flex h-full">
      {/* Left Half - Question */}
      <div className="w-1/2 overflow-y-auto border-r border-gray-200 bg-white p-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
              Multiple Choice
            </span>
          </div>

          <p className="text-xl leading-relaxed font-medium text-gray-800">
            {question}
          </p>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm text-gray-600">
              Note: Additional context, images, or diagrams can be displayed
              here.
            </p>
          </div>
        </div>
      </div>

      {/* Right Half - Options */}
      <div className="flex w-1/2 flex-col overflow-y-auto bg-gray-50 p-8">
        <h3 className="mb-6 text-lg font-semibold text-gray-700">
          Select your answer:
        </h3>

        <div className="flex-1 space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`w-full rounded-lg border-2 p-5 text-left transition-all duration-200 ${
                selectedAnswer === index
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`mr-4 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    selectedAnswer === index
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-400"
                  }`}
                >
                  {selectedAnswer === index && (
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-base font-medium text-gray-800">
                  {option}
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClear}
            className="mt-6 mr-4 rounded-lg bg-gray-200 px-6 py-2 font-medium text-gray-700 hover:bg-gray-300"
          >
            Clear
          </button>
          <button
            onClick={onNext}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700"
          >
            {selectedAnswer !== null ? "Mark and Next" : "Skip and Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
