import { Timer } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuestion } from "~/hooks/QuestionContext";

const Navbar = () => {
  const { currentQuestionIndex, totalQuestions, setCurrentQuestionIndex } =
    useQuestion();
    const router = useRouter();

  const [timeRemaining, setTimeRemaining] = useState(3600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // TODO: Implement actual submission logic
  const handleSubmit = () => {
    if (confirm("Are you sure you want to submit the quiz?")) {
      alert("Quiz submitted!");
    }
    router.push("/submission");
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <nav className="bg-blue-600 px-6 py-4 text-white shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left Side: Title and question number */}
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">Round 1</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Question:</span>
            <span className="rounded-md bg-blue-700 px-3 py-1 font-semibold">
              {currentQuestionIndex + 1} / {totalQuestions}
            </span>
          </div>
        </div>

        {/* Right Side: Timer and controls */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Timer />
            <span className="font-mono text-lg font-semibold">
              {formatTime(timeRemaining)}
            </span>
          </div>

          {/* Prev/Next buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === totalQuestions - 1}
              className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="rounded-lg bg-green-500 px-6 py-2 font-semibold shadow-md hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
