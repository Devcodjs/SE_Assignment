"use client";

// Assuming 'app/components' and 'app/hooks' structure
import Navbar from "~/components/questions/Navbar";
import { QuestionProvider, useQuestion } from "~/hooks/QuestionContext";
import { useState, useEffect, type ReactNode, useCallback } from "react";
import { useRouter } from "next/navigation";
import StartScreen from "~/components/StartScreen";
import { ShieldAlert, Maximize } from "lucide-react"; // Import new icons

/**
 * NEW: A simple overlay component to show warnings.
 */
function ViolationOverlay({
  message,
  onContinue,
  error,
}: {
  message: string;
  onContinue: () => void;
  error: string | null;
}) {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-75 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 text-center shadow-xl">
        <ShieldAlert className="mx-auto h-16 w-16 text-yellow-500" />
        <h1 className="mb-4 mt-4 text-3xl font-bold text-gray-800">
          Warning
        </h1>
        <p className="mb-6 text-lg text-gray-600">{message}</p>
        
        {error && (
          <p className="mb-4 text-center font-medium text-red-600">{error}</p>
        )}

        <button
          onClick={onContinue}
          className="flex w-full items-center justify-center space-x-2 rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none"
        >
          <Maximize size={20} />
          <span>Go Fullscreen & Continue</span>
        </button>
      </div>
    </div>
  );
}

/**
 * TestEnvironment is a wrapper component that enforces proctoring rules.
 * It only wraps the children *after* the test has started.
 */
function TestEnvironment({ children }: { children: ReactNode }) {
  const { forceExit } = useQuestion();

  // Violation counting states
  const [fullscreenExits, setFullscreenExits] = useState(0);
  const [tabSwitches, setTabSwitches] = useState(0);
  const MAX_VIOLATIONS = 2; // Allow 2 violations, exit on the 3rd

  // --- NEW OVERLAY STATES ---
  const [isViolationVisible, setIsViolationVisible] = useState(false);
  const [violationMessage, setViolationMessage] = useState("");
  const [overlayError, setOverlayError] = useState<string | null>(null);

  // --- NEW: Function to show the overlay ---
  const showViolationWarning = (message: string) => {
    setViolationMessage(message);
    setIsViolationVisible(true);
    setOverlayError(null);
  };
  
  // --- NEW: Function to handle continuing the test ---
  const handleContinueTest = useCallback(async () => {
    setOverlayError(null);
    try {
      // Attempt to re-enter fullscreen
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
      // If successful, hide the overlay
      setIsViolationVisible(false);
    } catch (err) {
      // If browser blocks it, show an error on the overlay
      setOverlayError("Could not enter fullscreen. Please click the button again.");
    }
  }, []);

  // 1. Full-screen monitoring
  useEffect(() => {
    const handleFullscreenChange = () => {
      setTimeout(() => {
        if (!document.fullscreenElement) {
          setFullscreenExits((prevExits) => {
            const newCount = prevExits + 1;
            if (newCount > MAX_VIOLATIONS) {
              forceExit(
                `Full-screen mode was exited ${newCount} times. The test has been terminated.`,
              );
            } else {
              // --- UPDATED: Show overlay instead of alert ---
              showViolationWarning(
                `You have left full-screen. This is violation ${newCount} of ${MAX_VIOLATIONS}. ` +
                `You must return to continue.`
              );
            }
            return newCount;
          });
        }
      }, 100); 
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [forceExit]);

  // 2. Tab/Window focus monitoring
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        setTabSwitches((prevSwitches) => {
          const newCount = prevSwitches + 1;
          if (newCount > MAX_VIOLATIONS) {
            forceExit(
              `You switched tabs ${newCount} times. The test has been terminated.`,
            );
          } else {
            // --- UPDATED: Show overlay instead of alert ---
            showViolationWarning(
              `You have switched tabs. This is violation ${newCount} of ${MAX_VIOLATIONS}. ` +
              `You must return to continue.`
            );
          }
          return newCount;
        });
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [forceExit]);

  // 3. Permissions monitoring (Camera/Mic)
  useEffect(() => {
    const checkPermissions = async () => {
      if (!navigator.permissions) return;
      try {
        const camera = await navigator.permissions.query({ name: "camera" as PermissionName });
        const mic = await navigator.permissions.query({ name: "microphone" as PermissionName });

        if (camera.state !== "granted" || mic.state !== "granted") {
          forceExit("Camera or Mic permissions were revoked. The test has been terminated.");
        }
      } catch (err) {
        console.error("Permission query failed:", err);
      }
    };

    const intervalId = setInterval(checkPermissions, 10000);
    return () => clearInterval(intervalId);
  }, [forceExit]);

  // 4. Disable right-click / context menu
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  // --- UPDATED: Conditionally render overlay ---
  return (
    <>
      {/* The main test content is blurred when the overlay is active */}
      <div style={{ filter: isViolationVisible ? 'blur(8px)' : 'none', pointerEvents: isViolationVisible ? 'none' : 'auto' }}>
        {children}
      </div>
      
      {isViolationVisible && (
        <ViolationOverlay 
          message={violationMessage}
          onContinue={handleContinueTest}
          error={overlayError}
        />
      )}
    </>
  );
}


export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTestStarted, setIsTestStarted] = useState(false);
  const router = useRouter();

  const handleStartTest = () => {
    setIsTestStarted(true);
    // We DO NOT navigate. By setting state, the layout re-renders
    // and shows the `children` (app/quiz/page.tsx)
  };

  /**
   * This is the master function to end the test.
   * It's passed to the QuestionProvider, which gives it to TestEnvironment.
   */
  const handleForceExit = useCallback((message: string) => {
    // We wrap the state update in a setTimeout to push it to the next
    // event loop tick, safely outside the current render cycle.
    setTimeout(() => {
      setIsTestStarted(false);
      // We use `alert` immediately because the browser might block the redirect
      // if the tab wasn't active.
      alert(message);
      router.replace(`/submission?error=${encodeURIComponent(message)}`);
    }, 0);
  }, [router]); // router is a stable dependency

  // If the test has not started, show the "gate" screen.
  if (!isTestStarted) {
    return <StartScreen onStart={handleStartTest} />;
  }

  // Once started, wrap the test in the Provider and the Environment Monitor
  return (
    <QuestionProvider onForceExit={handleForceExit}>
      <TestEnvironment>
        <div className="flex h-screen flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1 overflow-hidden">{children}</main>
        </div>
      </TestEnvironment>
    </QuestionProvider>
  );
}