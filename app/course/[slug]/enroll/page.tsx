"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "../../../data/courses";
import { getCurrentUser } from "../../../../lib/supabase/auth";
import { enrollInCourse, isEnrolled, getOrCreateCourse } from "../../../../lib/supabase/database";

export default function EnrollPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function handleEnrollment() {
      try {
        const resolvedParams = await params;
        
        const course = getCourseBySlug(resolvedParams.slug);
        if (!course) {
          router.push("/");
          return;
        }

        const isFree = course.price.toLowerCase() === "free";
        if (!isFree) {
          router.push(`/checkout?course=${course.slug}`);
          return;
        }

        const { user, error: userError } = await getCurrentUser();
        if (userError || !user) {
          router.push(`/login?redirect=/course/${course.slug}/enroll`);
          return;
        }

        const dbCourse = await getOrCreateCourse(
          course.id,
          course.title,
          course.description,
          course.price
        );
        if (!dbCourse) {
          setError("Failed to access course. Please try again.");
          setLoading(false);
          return;
        }

        const enrolled = await isEnrolled(user.id, dbCourse.id);
        if (!enrolled) {
          const success = await enrollInCourse(user.id, dbCourse.id);
          if (!success) {
            setError("Failed to enroll in course. Please try again.");
            setLoading(false);
            return;
          }
        }

        router.push("/dashboard");
      } catch (err) {
        console.error("Enrollment error:", err);
        setError("An error occurred. Please try again.");
        setLoading(false);
      }
    }

    handleEnrollment();
  }, [params, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Enrolling you in the course...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Enrollment Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="bg-[#1a1a2e] text-white px-6 py-2 rounded hover:bg-[#2a2a3e] transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return null;
}

