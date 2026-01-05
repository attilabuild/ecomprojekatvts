"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCurrentUser, signOut } from "../../lib/supabase/auth";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const { user } = await getCurrentUser();
      setUser(user);
      setLoading(false);
    }
    checkUser();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    router.push("/");
  };

  return (
    <header className="bg-[#1a1a2e] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors">
          CodeAcademy
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/#courses" className="hover:text-gray-300 transition-colors">Courses</Link>
          <Link href="/#about" className="hover:text-gray-300 transition-colors">About</Link>
        </nav>
        <div className="flex items-center gap-4">
          {!loading && (
            <>
              {user ? (
                <>
                  <Link href="/dashboard" className="hover:text-gray-300 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="bg-white text-[#1a1a2e] px-4 py-2 rounded hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link href="/login" className="bg-white text-[#1a1a2e] px-4 py-2 rounded hover:bg-gray-100 transition-colors font-semibold">
                  Sign In
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}
