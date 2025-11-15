"use client";
import { useAuth } from "~/hooks/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loader from "~/components/Loader";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (user) return <>{children}</>;
  return null;
}
