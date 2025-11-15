"use client";

interface IntegerQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  onNext: () => void;
}

export default function IntegerQuestion({
  question,
  value,
  onChange,
  onClear,
  onNext,
}: IntegerQuestionProps) {
  return (
    <div className="flex h-full">
      {/* Left Half */}
      <div className="w-1/2 overflow-y-auto border-r border-gray-200 bg-white p-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6">
            <span className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">
              Integer Type
            </span>
          </div>

          <p className="text-xl leading-relaxed font-medium text-gray-800">
            {question}
          </p>

          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <p className="text-sm text-gray-600">
              Note: Additional context or images can be shown here.
            </p>
          </div>
        </div>
      </div>

      {/* Right Half */}
      <div className="flex w-1/2 flex-col overflow-y-auto bg-gray-50 p-8">
        <h3 className="mb-6 text-lg font-semibold text-gray-700">
          Enter your answer:
        </h3>

        <input
          type="text"
          value={value}
          onChange={(e) => {
            const v = e.target.value;
            if (v === "" || /^-?\d+$/.test(v)) onChange(v);
          }}
          placeholder="Enter an integer value"
          className="w-full rounded-lg border-2 border-gray-300 p-4 text-lg transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
        <p className="mt-2 text-sm text-gray-500">
          Please enter an integer value only
        </p>
        <div className="flex flex-1 items-end justify-end gap-4">
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
            {value !== "" ? "Mark and Next" : "Skip and Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
