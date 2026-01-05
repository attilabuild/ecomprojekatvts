import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Course from "./components/Course";
import Footer from "./components/Footer";
import { courses } from "./data/courses";

export const metadata: Metadata = {
  title: "Learn Programming Online - Python, Web Development, React & More",
  description: "Join thousands of students learning to code. Start your journey with our comprehensive programming courses. Learn Python, Web Development, React, and PostgreSQL at your own pace with expert instructors.",
  keywords: [
    "learn programming",
    "coding courses",
    "Python programming",
    "web development course",
    "React tutorial",
    "JavaScript course",
    "online coding classes",
    "programming for beginners",
  ],
  openGraph: {
    title: "Learn Programming Online - CodeAcademy",
    description: "Join thousands of students learning to code. Start your journey with our comprehensive programming courses.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "CodeAcademy Programming Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Programming Online - CodeAcademy",
    description: "Join thousands of students learning to code. Start your journey with our comprehensive programming courses.",
  },
  alternates: {
    canonical: "https://codeacademy.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        {/* Full background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-white/90 text-sm mb-2 uppercase tracking-wider">Learn to Code</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Master Programming
              <span className="block">Skills Online</span>
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of students learning to code. Start your journey with our comprehensive programming courses. 
              Learn at your own pace, build real projects, and get certified. Whether you&apos;re a complete beginner or looking 
              to level up your skills, we have the perfect course for you.
            </p>
            <div className="flex gap-4">
              <Link href="#courses" className="bg-white text-[#1a1a2e] px-8 py-3 rounded hover:bg-gray-100 transition-colors font-semibold">
                Browse Courses
              </Link>
              <Link href="#about" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded hover:bg-white/10 transition-colors font-semibold">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our selection of programming courses. Start with free courses or dive into advanced topics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Course
                key={course.id}
                title={course.title}
                price={course.price}
                image={course.image}
                description={course.description}
                slug={course.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We&apos;re committed to your success. Here&apos;s what makes our courses different.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Learn at Your Pace</h3>
              <p className="text-gray-600">Study on your own schedule with lifetime access to course materials.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Certificates</h3>
              <p className="text-gray-600">Earn certificates upon completion to showcase your new skills.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
