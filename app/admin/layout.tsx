"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  if (session) {
    return <>{children}</>;
  }


  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <button
        onClick={() =>
          signIn("login", { callbackUrl: "http://localhost:3000/admin" })
        }
      >
        Sign in
      </button>
    </div>
  );
}
