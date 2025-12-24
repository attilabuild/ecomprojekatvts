"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { getCourseBySlug, Course } from "../../../data/courses";

export default function WatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const [course, setCourse] = useState<Course | undefined>(undefined);

  useEffect(() => {
    async function loadCourse() {
      const resolvedParams = await params;
      const foundCourse = getCourseBySlug(resolvedParams.slug);
      setCourse(foundCourse);
      
      // In a real app, check if user is enrolled
      // For now, we'll allow access (you can add enrollment check here)
    }
    loadCourse();
  }, [params]);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course.videoUrl) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Course content not available</h1>
          <Link href={`/course/${course.slug}`} className="text-blue-600 hover:underline">
            Back to course
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(course.videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/dashboard" className="text-blue-600 hover:underline mb-2 inline-block">
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
          <p className="text-gray-600 mt-2">{course.instructor}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              {embedUrl ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={embedUrl}
                  title={course.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <p>Invalid video URL</p>
                </div>
              )}
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Course</h2>
              <p className="text-gray-700">{course.fullDescription}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Content</h3>
              <div className="space-y-2">
                <div className="p-3 bg-blue-50 border-2 border-blue-600 rounded-lg">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-gray-800">Course Video</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Full course content</p>
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

