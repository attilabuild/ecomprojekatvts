"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface FreeEnrollmentProps {
  courseTitle: string;
  courseImage: string;
  courseSlug: string;
}

export default function FreeEnrollment({ courseTitle, courseImage, courseSlug }: FreeEnrollmentProps) {
  const router = useRouter();
  const [enrolled, setEnrolled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      return;
    }
    setEnrolled(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  };

  if (enrolled) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">You Got the Course for Free!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Congratulations! You&apos;ve successfully enrolled in <strong>{courseTitle}</strong>.
        </p>
        <p className="text-gray-500 mb-6">Redirecting to your dashboard...</p>
        <button
          onClick={() => router.push("/dashboard")}
          className="inline-block bg-[#1a1a2e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a2a3e] transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex gap-4 mb-6">
        <div className="relative w-24 h-16 rounded overflow-hidden flex-shrink-0">
          <Image
            src={courseImage}
            alt={courseTitle}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-1">{courseTitle}</h3>
          <p className="text-sm text-green-600 font-semibold">FREE</p>
        </div>
      </div>

      <form onSubmit={handleEnroll} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#1a1a2e] text-white py-3 rounded-lg font-semibold hover:bg-[#2a2a3e] transition-colors"
        >
          Get Course for Free
        </button>
      </form>
    </div>
  );
}

