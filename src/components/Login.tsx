"use client";
import React from "react";
import { X } from "lucide-react";
import { signUser } from "~/lib/Firebase";
import { useRouter } from "next/navigation";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isOpen, onClose }) => {
  const [userID, setUserID] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!userID || !password) {
      setError("Please enter both user ID and password");
      return;
    }

    try {
      setLoading(true);

      const user = await signUser(userID, password);

      if (user?.uid) {
        router.refresh();
        router.push("/dashboard");
      } else {
        setError("Invalid user ID or password");
      }
    } catch (err) {
      setError("Something went wrong during login");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="animate-scaleIn relative w-96 rounded-2xl bg-white p-6 shadow-xl">
        <button
          className="absolute top-4 right-4 text-gray-500 transition hover:text-gray-700"
          onClick={onClose}
        >
          {""}
          <X size={22} />
        </button>

        <h2 className="mb-5 text-center text-2xl font-semibold text-gray-800">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              placeholder="userID"
              type="text"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              placeholder="password"
              type="password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 transition outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white shadow transition hover:bg-blue-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
