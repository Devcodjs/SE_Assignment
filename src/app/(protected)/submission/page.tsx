"use client";

import Link from "next/link";
import { useQuestion } from "~/hooks/QuestionContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function SubmissionPage() {
  const [exitMessage, setExitMessage] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check for an error message in the URL
  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      setExitMessage(decodeURIComponent(error));
    }
  }, [searchParams]);

  // This check is tricky. The context will be new, so `hasStarted` will be false.
  // We can't reliably check `hasStarted` here anymore.
  // The 'error' param is our new source of truth.

  // if (hasStarted) { ... } -> This logic is removed as it won't work correctly
  // after a forced redirect.

  return (
    <div className="flex h-full items-center justify-center p-8">
      <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-8 text-center shadow-md">
        
        {/* Show this message if the test was forcefully ended */}
        {exitMessage ? (
          <>
            <AlertTriangle className="mx-auto h-16 w-16 text-red-500" />
            <h1 className="mb-4 mt-4 text-3xl font-bold text-gray-800">
              Test Terminated
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              Your test was stopped for the following reason:
            </p>
            <p className="mb-8 rounded-lg bg-red-50 p-4 text-lg font-medium text-red-700">
              {exitMessage}
            </p>
          </>
        ) : (
          <>
            {/* Show this on a normal submission */}
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h1 className="mb-4 mt-4 text-3xl font-bold text-gray-800">
              Test Submitted
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              Your responses have been recorded. Thank you!
            </p>
          </>
        )}

        <Link
          href="/"
          className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}