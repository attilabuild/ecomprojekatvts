"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { courses } from "../data/courses";
import { getCurrentUser } from "../../lib/supabase/auth";
import { getEnrolledCourses } from "../../lib/supabase/database";
import { Course as DBCourse } from "../../lib/supabase/database";

export default function DashboardPage() {
  const router = useRouter();
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const [activeCourse, setActiveCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEnrolledCourses() {
      const { user } = await getCurrentUser();
      if (!user) {
        router.push("/login");
        return;
      }

      const dbCourses = await getEnrolledCourses(user.id);
      
      const mappedCourses = dbCourses.map((dbCourse: DBCourse) => {
        const localCourse = courses.find(c => c.title === dbCourse.title);
        return {
          ...dbCourse,
          slug: localCourse?.slug || dbCourse.title.toLowerCase().replace(/\s+/g, '-'),
          image: localCourse?.image || '',
          videoUrl: localCourse?.videoUrl || '',
          instructor: localCourse?.instructor || 'Instructor',
        };
      });

      setEnrolledCourses(mappedCourses);
      if (mappedCourses.length > 0) {
        setActiveCourse(mappedCourses[0]);
      }
      setLoading(false);
    }

    loadEnrolledCourses();
  }, [router]);

  const getProgress = (courseId: string) => {
    const progressMap: { [key: string]: number } = {
      python: 45,
      "html-css-javascript": 30,
    };
    return progressMap[courseId] || 0;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-gray-600">Loading your courses...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (enrolledCourses.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">No Enrolled Courses</h1>
          <p className="text-gray-600 mb-8">You haven't enrolled in any courses yet.</p>
          <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">
            Browse Courses
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (!activeCourse) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Course List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">My Courses</h2>
              <div className="space-y-3">
                {enrolledCourses.map((course) => (
                  <button
                    key={course.id}
                    onClick={() => setActiveCourse(course)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeCourse.id === course.id
                        ? "bg-blue-50 border-2 border-blue-600"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="relative w-full aspect-video rounded mb-2 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-800 mb-1">{course.title}</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${getProgress(course.id)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{getProgress(course.id)}% Complete</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Course Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Course Header */}
              <div className="relative h-64">
                <Image
                  src={activeCourse.image}
                  alt={activeCourse.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{activeCourse.title}</h2>
                  <p className="text-gray-200">{activeCourse.instructor}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Course Progress</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {getProgress(activeCourse.id)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${getProgress(activeCourse.id)}%` }}
                  ></div>
                </div>
              </div>

              {/* Watch Course Button */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <Link 
                  href={`/course/${activeCourse.slug}/watch`}
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Watch Course Video
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{enrolledCourses.length}</p>
                    <p className="text-sm text-gray-600">Enrolled Courses</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">
                      {Math.round(
                        enrolledCourses.reduce((acc, course) => acc + getProgress(course.id), 0) /
                          enrolledCourses.length
                      )}
                      %
                    </p>
                    <p className="text-sm text-gray-600">Average Progress</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">24h</p>
                    <p className="text-sm text-gray-600">Study Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

