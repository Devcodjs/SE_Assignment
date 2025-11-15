"use client";

import { useState, useEffect } from "react";
import {
  Camera,
  Mic,
  MonitorUp,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";

type CheckStatus = "pending" | "granted" | "denied";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [cameraStatus, setCameraStatus] = useState<CheckStatus>("pending");
  const [audioStatus, setAudioStatus] = useState<CheckStatus>("pending");
  
  // FIX: Initialize state to "pending" to avoid accessing `document` on the server
  const [fullscreenStatus, setFullscreenStatus] = useState<CheckStatus>("pending");
  
  const [error, setError] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  // FIX: Add a new useEffect to set the initial state only on the client side
  useEffect(() => {
    // This code only runs in the browser, not on the server
    setFullscreenStatus(document.fullscreenElement ? "granted" : "pending");
  }, []);

  // Effect to listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      // We set to 'denied' if not fullscreen, as user might have exited.
      setFullscreenStatus(document.fullscreenElement ? "granted" : "denied");
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const requestFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        setFullscreenStatus("granted");
      } catch (err) {
        setFullscreenStatus("denied");
        setError(
          "Full screen mode was not enabled. Please try again.",
        );
      }
    } else {
      setFullscreenStatus("granted");
    }
  };

  const requestMediaPermissions = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      // Permissions granted
      setCameraStatus("granted");
      setAudioStatus("granted");
      // IMPORTANT: Stop tracks immediately to turn off the camera/mic light
      stream.getTracks().forEach((track) => track.stop());
    } catch (err) {
      console.error(err);
      setCameraStatus("denied");
      setAudioStatus("denied");
      setError(
        "Permissions for camera and audio were denied. Please enable them in your browser settings and try again.",
      );
    }
  };

  const handleRunChecks = async () => {
    setIsChecking(true);
    setError(null);

    // Reset status
    setCameraStatus("pending");
    setAudioStatus("pending");
    // Don't reset fullscreen if it's already granted
    if (!document.fullscreenElement) {
      setFullscreenStatus("pending");
    }

    // Run checks one by one
    await requestMediaPermissions();
    await requestFullscreen();

    setIsChecking(false);
  };

  const allChecksPassed =
    cameraStatus === "granted" &&
    audioStatus === "granted" &&
    fullscreenStatus === "granted";

  const CheckItem = ({
    status,
    text,
    icon,
  }: {
    status: CheckStatus;
    text: string;
    icon: React.ReactNode;
  }) => (
    <li className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-3">
        {icon}
        <span className="text-lg text-gray-700">{text}</span>
      </div>
      {status === "pending" && (
        <span className="text-sm font-medium text-gray-500">Pending...</span>
      )}
      {status === "granted" && (
        <CheckCircle className="text-green-500" size={24} />
      )}
      {status === "denied" && <XCircle className="text-red-500" size={24} />}
    </li>
  );

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-8 shadow-md">
        <h1 className="mb-4 text-center text-3xl font-bold text-gray-800">
          Online Assessment
        </h1>
        <p className="mb-6 text-center text-lg text-gray-600">
          Before you begin, we need to run a quick system check to ensure
          proctoring requirements are met.
        </p>

        <ul className="mb-6 divide-y divide-gray-200">
          <CheckItem
            status={cameraStatus}
            text="Camera Access"
            icon={<Camera className="text-gray-400" size={24} />}
          />
          <CheckItem
            status={audioStatus}
            text="Audio Access"
            icon={<Mic className="text-gray-400" size={24} />}
          />
          <CheckItem
            status={fullscreenStatus}
            text="Full Screen Mode"
            icon={<MonitorUp className="text-gray-400" size={24} />}
          />
        </ul>

        {error && <p className="mb-4 text-center text-red-600">{error}</p>}

        {!allChecksPassed && (
          <button
            onClick={handleRunChecks}
            disabled={isChecking}
            className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none disabled:opacity-50"
          >
            {isChecking ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : null}
            {isChecking ? "Checking..." : "Run System Check"}
          </button>
        )}

        {allChecksPassed && (
          <button
            onClick={onStart}
            className="w-full rounded-lg bg-green-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-green-700 focus:outline-none"
          >
            All Checks Passed. Start Test.
          </button>
        )}
      </div>
    </div>
  );
}